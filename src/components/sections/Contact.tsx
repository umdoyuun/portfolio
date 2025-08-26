'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Instagram, MessageCircle, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'

// 연락처 정보
const contactInfo = {
  phone: '010-3996-6258',
  email: 'tkdtlr1998@naver.com',
  github: 'https://github.com/umdoyuun',
  instagram: 'https://instagram.com/um_doyuun_',
  location: 'Icheon-si, Gyeonggi-do, South Korea'
};

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string; // 스팸 방지
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // 실시간 에러 제거
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // 폼 유효성 검사
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
    } else if (formData.name.length > 100) {
      newErrors.name = '이름은 100자 이내로 입력해주세요.';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식을 입력해주세요.';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = '제목을 입력해주세요.';
    } else if (formData.subject.length > 200) {
      newErrors.subject = '제목은 200자 이내로 입력해주세요.';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = '메시지를 입력해주세요.';
    } else if (formData.message.length > 2000) {
      newErrors.message = '메시지는 2000자 이내로 입력해주세요.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setStatus('loading');
    setStatusMessage('');
    
    try {
      const response = await fetch('/api/contact/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setStatusMessage(result.message || '메시지가 성공적으로 전송되었습니다.');
        // 폼 초기화
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          honeypot: ''
        });
      } else {
        throw new Error(result.error || '메시지 전송에 실패했습니다.');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage(error instanceof Error ? error.message : '메시지 전송 중 오류가 발생했습니다.');
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      description: "언제든지 연락주세요"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      description: "직접 통화하고 싶다면"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: contactInfo.location,
      href: "#",
      description: "대한민국 서울 기반"
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      name: "GitHub",
      href: contactInfo.github,
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      name: "Instagram",
      href: contactInfo.instagram,
      color: "hover:text-pink-500"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      name: "Email",
      href: `mailto:${contactInfo.email}`,
      color: "hover:text-red-600"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            임베디드 시스템이나 IoT 프로젝트에 관심이 있으신가요? 
            혁신적인 솔루션을 함께 만들어 나가는 방법을 논의해보세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <MessageCircle className="mr-3 h-6 w-6 text-primary" />
                Let&apos;s Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                새로운 기회, 협업 프로젝트, 혁신적인 임베디드 솔루션에 
                대해 논의하는 것을 항상 환영합니다. 
                아래 채널을 통해 언제든지 연락해 주세요.
              </p>
            </motion.div>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                    <CardContent className="p-4">
                      <a 
                        href={method.href}
                        className="flex items-center space-x-4"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {method.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-1">
                            {method.value}
                          </p>
                          <p className="text-xs text-muted-foreground/70">
                            {method.description}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">Follow me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-secondary/50 text-muted-foreground transition-all duration-300 ${link.color} hover:scale-110 hover:shadow-md`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">메시지 보내기</h3>
                  
                  {/* 상태 메시지 */}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-green-700">{statusMessage}</span>
                    </motion.div>
                  )}
                  
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
                    >
                      <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                      <span className="text-red-700">{statusMessage}</span>
                    </motion.div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* 스팸 방지를 위한 honeypot 필드 (숨김) */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleInputChange}
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          이름 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          disabled={status === 'loading'}
                          className={`w-full px-3 py-2 border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                            errors.name ? 'border-red-500 focus:ring-red-500' : 'border-border'
                          }`}
                          placeholder="성함을 입력해주세요"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          이메일 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          disabled={status === 'loading'}
                          className={`w-full px-3 py-2 border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                            errors.email ? 'border-red-500 focus:ring-red-500' : 'border-border'
                          }`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        제목 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        disabled={status === 'loading'}
                        className={`w-full px-3 py-2 border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                          errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-border'
                        }`}
                        placeholder="포트폴리오 문의, 프로젝트 협업, 기술 문의 등"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        메시지 <span className="text-red-500">*</span>
                        <span className="text-xs text-muted-foreground ml-2">({formData.message.length}/2000)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={status === 'loading'}
                        rows={6}
                        className={`w-full px-3 py-2 border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical disabled:opacity-50 disabled:cursor-not-allowed ${
                          errors.message ? 'border-red-500 focus:ring-red-500' : 'border-border'
                        }`}
                        placeholder="프로젝트 내용, 요구사항, 일정 또는 궁금한 점을 자세히 알려주세요..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <motion.div
                      whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                      whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        disabled={status === 'loading'}
                        className="w-full md:w-auto bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            전송 중...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            메시지 전송
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-2xl border border-primary/10"
        >
          <h3 className="text-xl font-semibold mb-4">다음 임베디드 프로젝트를 시작할 준비가 되셨나요?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            개념부터 배포까지, 임베디드 시스템 개발의 복잡성을 해결하고 
            견고하고 확장 가능한 솔루션을 제공하는 데 도움을 드릴 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              프로젝트 시작하기
            </a>
            <a 
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary/20 hover:bg-primary/10 rounded-lg font-medium transition-colors"
            >
              과거 작업 보기
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact