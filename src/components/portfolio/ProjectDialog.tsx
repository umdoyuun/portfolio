'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  X,
  Github,
  Calendar,
  Users,
  User,
  Target,
  Award,
  Lightbulb,
  MessageSquare
} from 'lucide-react'
import ImageSlider from '@/components/portfolio/ImageSlider'
import TechStackTags from '@/components/portfolio/TechStackTags'

interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  team: string;
  role: string;
  overview: string;
  techStack: string[];
  highlights: string[];
  achievements: string[];
  images: string[];
  githubUrl?: string;
  retrospective: string;
}

interface ProjectDialogProps {
  project: Project;
  onClose: () => void;
}

const ProjectDialog = ({ project, onClose }: ProjectDialogProps) => {
  const [activeTab, setActiveTab] = useState('overview')

  // Prevent body scroll when dialog is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const tabs = [
    { id: 'overview', label: '개요', icon: <Target className="h-4 w-4" /> },
    { id: 'highlights', label: '주요 성과', icon: <Award className="h-4 w-4" /> },
    { id: 'achievements', label: '구현 내용', icon: <Lightbulb className="h-4 w-4" /> },
    { id: 'retrospective', label: '회고', icon: <MessageSquare className="h-4 w-4" /> }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Project Meta */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-secondary/20 rounded-lg">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">기간</p>
                  <p className="text-sm font-medium">{project.period}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">팀 구성</p>
                  <p className="text-sm font-medium">{project.team}</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <User className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground">담당 역할</p>
                  <p className="text-sm font-medium">{project.role}</p>
                </div>
              </div>
            </div>

            {/* Project Overview */}
            <div>
              <h4 className="text-lg font-semibold mb-3">프로젝트 개요</h4>
              <p className="text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-lg font-semibold mb-3">기술 스택</h4>
              <TechStackTags techStack={project.techStack} className="max-w-none" />
            </div>
          </motion.div>
        )
      
      case 'highlights':
        return (
          <motion.div
            key="highlights"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4">주요 성과 및 특징</h4>
            {project.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start space-x-3 p-4 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-lg border-l-4 border-primary"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Award className="h-3 w-3 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )
      
      case 'achievements':
        return (
          <motion.div
            key="achievements"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4">구현 내용</h4>
            {project.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-4 bg-card/50 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="h-3 w-3 text-blue-500" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )
      
      case 'retrospective':
        return (
          <motion.div
            key="retrospective"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4">프로젝트 회고</h4>
            <div className="p-6 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-lg border border-primary/20">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <blockquote className="text-muted-foreground leading-relaxed italic">
                    &ldquo;{project.retrospective}&rdquo;
                  </blockquote>
                  <cite className="text-sm text-primary font-medium mt-2 block not-italic">
                    — {project.role}
                  </cite>
                </div>
              </div>
            </div>
          </motion.div>
        )
      
      default:
        return null
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.3, type: "spring", damping: 25 }}
          className="w-full max-w-4xl max-h-[90vh] bg-background rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative">
            <div className="p-6 pb-4 bg-gradient-to-r from-primary/10 to-blue-500/10 border-b border-border">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </Button>
                  )}
                  <Button variant="ghost" size="sm" onClick={onClose}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col h-full max-h-[calc(90vh-140px)]">
            {/* Image Slider - Top Section */}
            <div className="h-64 md:h-80 bg-gray-100 dark:bg-gray-800 flex-shrink-0">
              <ImageSlider images={project.images} alt={project.title} />
            </div>

            {/* Details Panel - Bottom Section */}
            <div className="flex flex-col flex-1 min-h-0">
              {/* Tabs */}
              <div className="flex border-b border-border bg-secondary/30 flex-shrink-0">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors flex-1 justify-center ${
                      activeTab === tab.id
                        ? 'text-primary border-b-2 border-primary bg-primary/5'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                  >
                    {tab.icon}
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="flex-1 p-6 overflow-y-auto min-h-0">
                <AnimatePresence mode="wait">
                  {renderTabContent()}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectDialog