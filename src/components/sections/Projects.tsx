'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight, 
  Github
} from 'lucide-react'
import { portfolioProjectsData } from '@/data/personal'
import ProjectCard from '@/components/portfolio/ProjectCard'
import ProjectDialog from '@/components/portfolio/ProjectDialog'

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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
  }

  const handleCloseDialog = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            삼성 청년 SW·AI 아카데미에서 진행한 핵심 프로젝트들을 소개합니다. 
            각 프로젝트는 실제 사회 문제 해결을 목표로 하며, 최신 기술을 활용한 혁신적인 솔루션을 제공합니다.
          </p>
        </motion.div>

        {/* Projects Grid - 컴팩트 레이아웃으로 최적화 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-16">
          {portfolioProjectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onProjectClick={handleProjectClick}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="border-0 bg-gradient-to-r from-primary/5 via-blue-500/5 to-primary/5 backdrop-blur-lg shadow-xl">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                더 많은 프로젝트를 보고 싶으신가요?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                GitHub에서 더 많은 프로젝트와 코드를 확인하실 수 있습니다. 
                각 프로젝트의 상세한 구현 과정과 기술적 도전 과제들을 살펴보세요.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('https://github.com/umdoyuun', '_blank')}
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub 방문하기
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Project Dialog */}
        {selectedProject && (
          <ProjectDialog 
            project={selectedProject}
            onClose={handleCloseDialog}
          />
        )}
      </div>
    </section>
  )
}

export default Projects