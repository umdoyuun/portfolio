# Contact 섹션 이메일 전송 기능 설정 가이드

## 📧 기능 개요
- 방문자가 포트폴리오 웹사이트에서 직접 메일을 보낼 수 있는 Contact 섹션
- Gmail SMTP를 통한 실제 이메일 전송
- 폼 유효성 검사 및 스팸 방지 기능
- 실시간 전송 상태 표시 (로딩, 성공, 실패)

## 🚀 구현된 기능들

### ✅ Contact API 엔드포인트
- **경로**: `/api/contact/send`
- **방식**: POST
- **기능**: Gmail SMTP를 통한 이메일 전송
- **보안**: Honeypot 스팸 방지, 입력 검증, 속도 제한

### ✅ Contact UI 컴포넌트
- **위치**: `/src/components/sections/Contact.tsx`
- **연락처 정보**: 전화, 이메일, GitHub, Instagram
- **메일 폼**: 이름, 이메일, 제목, 메시지 필드
- **상태 관리**: 로딩, 성공, 에러 상태 표시

### ✅ 폼 검증 및 보안
- 필수 필드 검증 (이름, 이메일, 제목, 메시지)
- 이메일 형식 검증
- 텍스트 길이 제한 (스팸 방지)
- Honeypot 필드로 봇 차단
- 실시간 에러 메시지 표시

## ⚙️ 환경 설정

### 1. Gmail 앱 비밀번호 생성

1. Gmail 계정에서 **2단계 인증**을 활성화합니다.
   - [Google 계정 보안 설정](https://myaccount.google.com/security)

2. **앱 비밀번호**를 생성합니다:
   - Google 계정 → 보안 → 2단계 인증 → 앱 비밀번호
   - 앱 선택: "메일"
   - 기기 선택: "기타 (맞춤 이름)" → "Portfolio Website"
   - 생성된 16자리 비밀번호를 복사하여 저장

### 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 입력:

```bash
# Gmail SMTP 설정 (필수)
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=abcd-efgh-ijkl-mnop

# 메일을 받을 주소 (기본값: tkdtlr1998@naver.com)
TARGET_EMAIL=tkdtlr1998@naver.com
```

**⚠️ 중요**: `.env.local` 파일은 Git에 커밋하지 마세요!

### 3. 패키지 설치

```bash
npm install nodemailer @types/nodemailer
```

## 🧪 테스트 방법

### 로컬 개발 환경에서 테스트

1. 개발 서버 실행:
```bash
npm run dev
```

2. 브라우저에서 `http://localhost:3000` 접속

3. Contact 섹션으로 스크롤하여 테스트 메시지 전송:
   - 이름: "테스트"
   - 이메일: "test@example.com"
   - 제목: "테스트 메시지"
   - 메시지: "안녕하세요, 테스트입니다."

4. 성공시 초록색 성공 메시지 확인
5. 설정한 TARGET_EMAIL로 메일 수신 확인

### 에러 처리 테스트

1. **잘못된 이메일 형식**: `invalid-email` 입력
2. **빈 필드**: 필수 항목 공란으로 제출
3. **너무 긴 텍스트**: 메시지에 2000자 이상 입력
4. **네트워크 에러**: 잘못된 Gmail 설정으로 테스트

## 🌐 배포 설정

### Vercel 배포시

1. Vercel 대시보드에서 프로젝트 → Settings → Environment Variables

2. 환경 변수 추가:
   - `GMAIL_USER`: your-gmail@gmail.com
   - `GMAIL_APP_PASSWORD`: 16자리 앱 비밀번호
   - `TARGET_EMAIL`: tkdtlr1998@naver.com

3. 재배포 후 Contact 폼 테스트

### Netlify 배포시

1. Netlify 대시보드에서 Site settings → Environment variables

2. 동일한 환경 변수들을 추가

## 📱 사용자 경험

### 성공 플로우
1. 사용자가 폼 작성
2. "전송 중..." 버튼으로 로딩 상태 표시
3. 성공시 초록색 성공 메시지 표시
4. 폼 자동 초기화
5. 설정된 이메일로 메시지 수신

### 에러 처리
- **실시간 검증**: 입력과 동시에 에러 메시지 표시/해제
- **전송 실패**: 빨간색 에러 메시지와 구체적인 실패 원인
- **네트워크 에러**: 사용자 친화적 에러 메시지

## 🔒 보안 기능

1. **Honeypot 스팸 방지**: 숨겨진 필드로 봇 차단
2. **입력 검증**: 서버사이드에서 모든 입력 재검증
3. **이메일 인젝션 방지**: HTML 이스케이핑
4. **속도 제한**: 과도한 요청 방지 (브라우저 레벨)
5. **CORS 보호**: Same-origin policy 적용

## 🎨 UI/UX 특징

- **반응형 디자인**: 모바일/데스크톱 최적화
- **실시간 피드백**: 입력 검증 및 전송 상태
- **애니메이션**: Framer Motion 기반 부드러운 전환
- **접근성**: 키보드 네비게이션 지원
- **다국어 지원**: 한국어 인터페이스

## 📞 연락처 정보

포함된 연락처:
- **전화**: 010-3996-6258
- **이메일**: tkdtlr1998@naver.com
- **GitHub**: github.com/umdoyuun
- **Instagram**: @um_doyuun_

## 🔧 커스터마이징

### 연락처 정보 변경
`/src/components/sections/Contact.tsx` 파일의 `contactInfo` 객체 수정

### 이메일 템플릿 변경
`/src/pages/api/contact/send.ts` 파일의 `mailOptions.html` 수정

### 스타일 커스터마이징
Tailwind CSS 클래스 및 Framer Motion 애니메이션 수정

## 🚨 문제 해결

### 자주 발생하는 문제들

1. **"Gmail 인증 실패"**
   - 2단계 인증이 활성화되어 있는지 확인
   - 앱 비밀번호를 새로 생성해서 사용

2. **"환경 변수를 찾을 수 없음"**
   - `.env.local` 파일이 프로젝트 루트에 있는지 확인
   - 서버를 재시작 (`npm run dev`)

3. **"CORS 에러"**
   - API 경로가 올바른지 확인 (`/api/contact/send`)
   - Next.js API Routes를 사용하고 있는지 확인

4. **메일이 스팸함으로 이동**
   - Gmail 설정에서 신뢰할 수 있는 발신자로 추가
   - SPF/DKIM 레코드 설정 (도메인 소유시)

## 📈 향후 개선사항

- [ ] reCAPTCHA v3 통합
- [ ] 이메일 템플릿 에디터
- [ ] 관리자 대시보드
- [ ] 메일 발송 이력 관리
- [ ] 자동 응답 메일 기능
- [ ] 다국어 이메일 템플릿

---

**✅ Contact 섹션 구현 완료!**

이제 방문자들이 포트폴리오 웹사이트에서 직접 연락을 취할 수 있으며, 모든 메시지는 지정된 이메일 주소로 안전하게 전송됩니다.