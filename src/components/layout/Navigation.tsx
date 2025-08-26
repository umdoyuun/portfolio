'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Instagram, Github, Mail } from 'lucide-react'
import { ThemeToggle } from '../ui/ThemeToggle'
import { personalData } from '@/data/personal'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 메뉴 항목
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ]

  // 소셜 링크
  const socialLinks = [
    {
      icon: Instagram,
      href: personalData.social.instagram,
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    {
      icon: Github, 
      href: personalData.social.github,
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    }
  ]

  // 부드러운 스크롤
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <motion.header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* 로고 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link 
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('#about')
                }}
                className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-300"
              >
                {personalData.nameEn}
              </Link>
            </motion.div>

            {/* 데스크톱 네비게이션 */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                    className="relative text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* 우측 액션 영역 */}
            <div className="flex items-center space-x-4">
              
              {/* 소셜 링크 (데스크톱) */}
              <div className="hidden md:flex items-center space-x-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full text-muted-foreground transition-colors duration-300 ${link.color}`}
                    aria-label={link.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon size={18} />
                  </motion.a>
                ))}
              </div>

              {/* 다크모드 토글 */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <ThemeToggle />
              </motion.div>

              {/* 모바일 메뉴 버튼 */}
              <motion.button
                className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* 모바일 메뉴 오버레이 */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* 배경 오버레이 */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* 모바일 메뉴 */}
            <motion.div
              className="fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-40 md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 space-y-6">
                
                {/* 네비게이션 링크 */}
                <nav className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection(item.href)
                        }}
                        className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* 구분선 */}
                <div className="border-t border-border"></div>

                {/* 소셜 링크 */}
                <div className="flex items-center justify-center space-x-6">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full text-muted-foreground transition-colors duration-300 ${link.color}`}
                      aria-label={link.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <link.icon size={20} />
                    </motion.a>
                  ))}
                </div>

                {/* 연락처 정보 */}
                <motion.div 
                  className="text-center space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <p className="text-sm text-muted-foreground">
                    <Mail size={14} className="inline mr-2" />
                    {personalData.contact.email}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {personalData.contact.phone}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation