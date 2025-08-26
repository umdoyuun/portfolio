import type { NextApiRequest, NextApiResponse } from 'next';
import * as nodemailer from 'nodemailer';

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string; // 스팸 방지용 숨겨진 필드
}

interface ContactResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// 이메일 검증 함수
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 텍스트 길이 및 내용 검증
const isValidInput = (input: string, maxLength: number = 1000): boolean => {
  return input.length > 0 && input.length <= maxLength && input.trim().length > 0;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>
) {
  // POST 요청만 허용
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message, honeypot }: ContactRequest = req.body;

    // 스팸 방지: honeypot 필드가 비어있지 않으면 스팸으로 처리
    if (honeypot && honeypot.trim() !== '') {
      return res.status(400).json({ success: false, error: 'Spam detected' });
    }

    // 필수 필드 검증
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: '모든 필수 항목을 입력해주세요.' 
      });
    }

    // 이메일 형식 검증
    if (!isValidEmail(email)) {
      return res.status(400).json({ 
        success: false, 
        error: '올바른 이메일 형식을 입력해주세요.' 
      });
    }

    // 입력 길이 검증
    if (!isValidInput(name, 100) || !isValidInput(subject, 200) || !isValidInput(message, 2000)) {
      return res.status(400).json({ 
        success: false, 
        error: '입력 내용이 너무 길거나 비어있습니다.' 
      });
    }

    // 환경 변수 확인
    const gmailUser = process.env.GMAIL_USER;
    // Gmail 앱 비밀번호에서 하이픈 제거
    const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/-/g, '') || '';
    const targetEmail = process.env.TARGET_EMAIL || 'tkdtlr1998@naver.com';
    
    console.log('Gmail User:', gmailUser || '미설정');
    console.log('Gmail Pass Length:', gmailPass ? gmailPass.length : 0);

    // Gmail 설정 검증
    if (!gmailUser || !gmailPass || gmailUser === 'your-gmail@gmail.com' || gmailPass === 'your-16-digit-app-password') {
      console.warn('Gmail credentials not configured - returning mock success for development');
      
      // 사용자 정보를 콘솔에 기록 (개발용)
      console.log('=== DEV MODE: Contact Form Submission ===');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Subject:', subject);
      console.log('Message:', message);
      console.log('========================================');
      
      return res.status(200).json({ 
        success: true, 
        message: '[개발 모드] 메시지가 성공적으로 처리되었습니다! 콘솔에서 내용을 확인해주세요.' 
      });
    }

    // Nodemailer 설정
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    // 이메일 옵션 설정
    const mailOptions = {
      from: `"포트폴리오 연락처" <${gmailUser}>`,
      to: targetEmail,
      replyTo: email,
      subject: `[포트폴리오] ${subject}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0; text-align: center;">포트폴리오 문의 메일</h2>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">연락처 정보</h3>
              <p><strong>이름:</strong> ${name}</p>
              <p><strong>이메일:</strong> <a href="mailto:${email}" style="color: #667eea;">${email}</a></p>
              <p><strong>제목:</strong> ${subject}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">메시지 내용</h3>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p>이 메일은 포트폴리오 웹사이트의 연락처 폼을 통해 자동으로 발송되었습니다.</p>
            <p>회신 시 위의 이메일 주소로 직접 답장하실 수 있습니다.</p>
          </div>
        </div>
      `,
      text: `
포트폴리오 문의 메일

연락처 정보:
이름: ${name}
이메일: ${email}
제목: ${subject}

메시지 내용:
${message}

---
이 메일은 포트폴리오 웹사이트의 연락처 폼을 통해 자동으로 발송되었습니다.
      `.trim(),
    };

    // 이메일 전송
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (mailError) {
      console.error('Mail send failed:', mailError);
      throw mailError;
    }

    res.status(200).json({ 
      success: true, 
      message: '메시지가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.' 
    });

  } catch (error) {
    console.error('Email send error:', error);
    
    // 에러 타입에 따른 구체적인 메시지
    let errorMessage = '메시지 전송 중 오류가 발생했습니다.';
    
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      
      if (error.message.includes('Invalid login') || error.message.includes('Username and Password not accepted')) {
        errorMessage = '이메일 서비스 인증에 실패했습니다. Gmail 설정을 확인해주세요.';
      } else if (error.message.includes('Network') || error.message.includes('ENOTFOUND')) {
        errorMessage = '네트워크 오류로 인해 메시지를 전송할 수 없습니다.';
      } else if (error.message.includes('Missing credentials')) {
        errorMessage = '이메일 서비스 설정이 완료되지 않았습니다.';
      }
    }

    res.status(500).json({ 
      success: false, 
      error: errorMessage 
    });
  }
}