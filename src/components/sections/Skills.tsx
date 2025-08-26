'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Code2,
  ExternalLink
} from 'lucide-react'
import { techCategories } from '@/data/skillsBadges'
import TechBadge from '@/components/skills/TechBadge'
import { useTheme } from 'next-themes'

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // 전체 기술 통계 계산
  const totalSkills = techCategories.reduce((total, category) => total + category.badges.length, 0);
  const highPrioritySkills = techCategories.reduce((total, category) => 
    total + category.badges.filter(badge => badge.priority === 'high').length, 0
  );
  const categoriesCount = techCategories.length;

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            임베디드 시스템부터 AI/ML까지, 다양한 기술 스택을 보유하고 있습니다.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary rounded border-0 shadow-md"></div>
              <span><strong className="text-foreground">진한 색상</strong>: 숙련도 높음</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-400 rounded border border-gray-300/50"></div>
              <span><strong className="text-foreground">회색</strong>: 경험 있음</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-16 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2 bg-card/60 px-4 py-2 rounded-xl border border-border hover:bg-card/80 transition-all duration-300 shadow-sm hover:shadow-md">
            <Code2 className="h-4 w-4 text-primary" />
            <span><strong className="text-foreground text-base">{totalSkills}</strong>개 기술</span>
          </div>
          <div className="flex items-center gap-2 bg-card/60 px-4 py-2 rounded-xl border border-border hover:bg-card/80 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="w-3 h-3 rounded-full bg-primary shadow-sm"></div>
            <span><strong className="text-foreground text-base">{highPrioritySkills}</strong>개 숙련</span>
          </div>
          <div className="flex items-center gap-2 bg-card/60 px-4 py-2 rounded-xl border border-border hover:bg-card/80 transition-all duration-300 shadow-sm hover:shadow-md">
            <span className="text-primary font-semibold text-base">{categoriesCount}</span>
            <span>개 분야</span>
          </div>
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-12 sm:space-y-16 mb-16">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Category Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 flex items-center justify-center gap-3">
                  <span className="text-primary text-xl">#</span>
                  {category.title}
                </h3>
                <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              {/* Badge Grid */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
                {category.badges.map((badge, badgeIndex) => (
                  <TechBadge 
                    key={`${category.id}-${badge.name}`}
                    badge={badge}
                    index={badgeIndex}
                    isDark={isDark}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="border-0 bg-gradient-to-r from-primary/5 via-blue-500/5 to-primary/5 backdrop-blur-lg shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Code2 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                다양한 기술로 함께 프로젝트를 만들어보세요
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                위의 기술 스택들을 조합하여 임베디드 시스템부터 웹 애플리케이션, 
                모바일 앱까지 다양한 프로젝트 개발이 가능합니다. 새로운 기술 학습에도 
                항상 열려있어 프로젝트 요구사항에 맞춰 유연하게 대응할 수 있습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  연락하기
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="border-primary/20 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  프로젝트 보기
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills