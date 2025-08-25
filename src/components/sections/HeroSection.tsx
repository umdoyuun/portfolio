'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Instagram, Mail, Cpu, Zap, Wifi, Shield } from 'lucide-react'
import { personalData } from '@/data/personal'

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // 타이핑 애니메이션용 텍스트
  const typewriterTexts = [
    "임베디드/IoT 소프트웨어 개발자",
    "하드웨어와 소프트웨어의 경계를 넘나드는",
    "Matter Protocol 전문가",
    "SmartThings 연동 개발자",
    "Real-time Systems 엔지니어"
  ]

  // 키워드 태그
  const keywordTags = [
    "Matter Protocol",
    "SmartThings", 
    "Real-time Systems",
    "IoT Integration",
    "Embedded Linux",
    "Arduino/ESP32",
    "MQTT/CoAP",
    "Sensor Networks"
  ]

  // 플로팅 아이콘 데이터
  const floatingIcons = [
    { icon: Cpu, delay: 0, x: 10, y: 20 },
    { icon: Zap, delay: 1, x: 85, y: 15 },
    { icon: Wifi, delay: 2, x: 20, y: 70 },
    { icon: Shield, delay: 1.5, x: 90, y: 80 }
  ]

  // 타이핑 애니메이션 효과
  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = typewriterTexts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
        
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => 
            prevIndex === typewriterTexts.length - 1 ? 0 : prevIndex + 1
          )
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, typewriterTexts])

  // 부드러운 스크롤 함수
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="currentColor" className="text-primary"/>
                <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
                <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
      </div>

      {/* 플로팅 아이콘 */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/20"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <item.icon size={32} />
        </motion.div>
      ))}

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* 왼쪽: 텍스트 콘텐츠 */}
          <div className="space-y-8">
            
            {/* 인사말 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-2"
            >
              <p className="text-lg text-muted-foreground">안녕하세요, 저는</p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                {personalData.name}
              </h1>
            </motion.div>

            {/* 타이핑 애니메이션 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="h-16 md:h-20"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-primary leading-tight">
                {currentText}
                <span className="animate-pulse">|</span>
              </h2>
            </motion.div>

            {/* 설명 */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed lg:max-w-2xl"
            >
              {personalData.bio}
            </motion.p>

            {/* 키워드 태그 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              className="flex flex-wrap gap-3"
            >
              {keywordTags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.9 + index * 0.1,
                    ease: "easeOut" 
                  }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA 버튼 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center space-x-2"
              >
                <span>프로젝트 보기</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
                </motion.div>
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg"
              >
                연락하기
              </button>
            </motion.div>

            {/* 소셜 링크 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
              className="flex items-center space-x-6 pt-4"
            >
              <a
                href={personalData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-300 group"
              >
                <Github size={24} />
              </a>
              <a
                href={personalData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-muted-foreground hover:text-pink-500 hover:bg-accent transition-all duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href={`mailto:${personalData.contact.email}`}
                className="p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </div>

          {/* 오른쪽: 비주얼 요소 */}
          <div className="relative hidden lg:block order-first lg:order-last">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="relative"
            >
              {/* 메인 원형 요소 */}
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl animate-pulse"></div>
                <div className="relative w-full h-full rounded-full border-2 border-primary/30 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                  <div className="text-center space-y-4">
                    <Cpu size={80} className="text-primary mx-auto" />
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">EMBEDDED</p>
                      <p className="text-2xl font-bold text-primary">IoT</p>
                      <p className="text-sm font-medium text-muted-foreground">SYSTEMS</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 궤도 링 */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-full h-full rounded-full border border-primary/20"></div>
                {[0, 72, 144, 216, 288].map((rotation, index) => (
                  <div
                    key={index}
                    className="absolute w-4 h-4 bg-primary rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${rotation}deg) translateY(-160px)`
                    }}
                  ></div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <div className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors duration-300">
          <span className="text-sm font-medium">스크롤</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection