'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Cpu, Microchip, Zap, Github, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { portfolioData } from '@/data/portfolio'

const Hero = () => {
  const { personal } = portfolioData

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Icons */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-20 left-10"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Cpu className="h-8 w-8 text-primary" />
        </motion.div>
        <motion.div 
          className="absolute top-40 right-20"
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <Microchip className="h-6 w-6 text-primary" />
        </motion.div>
        <motion.div 
          className="absolute bottom-40 left-20"
          animate={{ 
            y: [0, -12, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Zap className="h-10 w-10 text-primary" />
        </motion.div>
        <motion.div 
          className="absolute bottom-20 right-10"
          animate={{ 
            y: [0, -6, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <Cpu className="h-7 w-7 text-primary" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border border-primary/20">
              <Microchip className="mr-2 h-4 w-4" />
              Embedded Systems & IoT Specialist
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="block text-foreground mb-2">{personal.name}</span>
            <span className="block bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {personal.title}
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {personal.subtitle}
          </motion.p>
          
          <motion.p 
            className="text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {personal.bio}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button 
              size="lg" 
              className="min-w-[180px] bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg"
              onClick={() => scrollToSection('projects')}
            >
              <Cpu className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-[180px] border-primary/20 hover:bg-primary/10"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.a 
              href={personal.github}
              className="group p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
              aria-label="GitHub Profile"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
            <motion.a 
              href={`mailto:${personal.email}`}
              className="group p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
              aria-label="Send Email"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown 
            className="animate-bounce text-muted-foreground cursor-pointer hover:text-primary transition-colors" 
            size={32}
            onClick={() => scrollToSection('about')}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero