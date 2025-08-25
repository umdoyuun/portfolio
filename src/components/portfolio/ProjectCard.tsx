'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Calendar, 
  Users, 
  ArrowRight,
  Sparkles
} from 'lucide-react'
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

interface ProjectCardProps {
  project: Project;
  index: number;
  onProjectClick: (project: Project) => void;
}

const ProjectCard = ({ project, index, onProjectClick }: ProjectCardProps) => {
  // 설명 텍스트 요약 함수
  const getSummaryText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    const sentences = text.split('.');
    const summary = sentences[0];
    if (summary.length > maxLength) {
      return summary.substring(0, maxLength) + '...';
    }
    return summary + '.';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group cursor-pointer"
      onClick={() => onProjectClick(project)}
    >
      <Card className="h-full border-0 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group-hover:border-primary/30">
        <CardContent className="p-0 h-full flex flex-col">
          {/* Project Image/Thumbnail - 축소된 높이 */}
          <div className="relative h-32 bg-gradient-to-br from-primary/20 to-blue-500/20 overflow-hidden">
            {/* Placeholder for project image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-blue-500/30 flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-primary/60 group-hover:text-primary/80 transition-colors" />
            </div>
            
            {/* 단순화된 오버레이 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-50 group-hover:opacity-30 transition-opacity"></div>
            
            {/* 축소된 프로젝트 번호 */}
            <div className="absolute top-3 left-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          {/* Project Content - 압축된 패딩 */}
          <div className="p-4 flex-1 flex flex-col">
            {/* Project Title & Subtitle - 축소된 마진 */}
            <div className="mb-3">
              <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-1">
                {project.subtitle}
              </p>
            </div>

            {/* 컴팩트한 메타 정보 - 2열 레이아웃 */}
            <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1 text-primary" />
                <span className="truncate">{project.period.split(' ')[0]}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-3 w-3 mr-1 text-primary" />
                <span>팀 {project.team}</span>
              </div>
            </div>

            {/* 요약된 설명 */}
            <p className="text-xs text-muted-foreground line-clamp-2 mb-3 flex-1 leading-relaxed">
              {getSummaryText(project.overview)}
            </p>

            {/* 축소된 Tech Stack - 3개로 제한 */}
            <div className="mb-3">
              <TechStackTags techStack={project.techStack.slice(0, 3)} />
              {project.techStack.length > 3 && (
                <span className="text-xs text-muted-foreground mt-1 block">
                  +{project.techStack.length - 3}개 기술
                </span>
              )}
            </div>

            {/* 컴팩트한 CTA Button */}
            <Button 
              variant="outline" 
              size="sm"
              className="w-full text-xs group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-200"
            >
              자세히 보기
              <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ProjectCard