'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Zap, 
  TrendingUp, 
  Award,
  ExternalLink
} from 'lucide-react'
import { skillsData } from '@/data/skills'
import SkillCard from '@/components/skills/SkillCard'

const Skills = () => {
  // 전체 기술 통계 계산
  const totalSkills = skillsData.reduce((total, category) => total + category.skills.length, 0)
  const advancedSkills = skillsData.reduce((total, category) => 
    total + category.skills.filter(skill => skill.level === 'Advanced').length, 0
  )
  const averageExperience = Math.round(
    skillsData.reduce((total, category) => 
      total + category.skills.reduce((sum, skill) => sum + (skill.years || 0), 0), 0
    ) / totalSkills
  )

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
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
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            임베디드 시스템부터 웹 개발까지, 다양한 기술 스택을 활용하여 
            혁신적인 솔루션을 개발합니다. 각 기술의 숙련도와 경험을 확인해보세요.
          </p>
        </motion.div>

        {/* Skills Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              icon: <Zap className="h-6 w-6" />,
              label: "총 기술",
              value: totalSkills,
              suffix: "개",
              color: "from-blue-500 to-blue-600"
            },
            {
              icon: <Award className="h-6 w-6" />,
              label: "Advanced 레벨",
              value: advancedSkills,
              suffix: "개",
              color: "from-green-500 to-green-600"
            },
            {
              icon: <TrendingUp className="h-6 w-6" />,
              label: "평균 경험",
              value: averageExperience,
              suffix: "년",
              color: "from-purple-500 to-purple-600"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <Card className="text-center border-0 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-primary/50">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} text-white rounded-lg mb-4 group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillsData.map((category, index) => (
            <SkillCard 
              key={category.id}
              category={category}
              index={index}
            />
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
                  <Zap className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                함께 혁신적인 프로젝트를 만들어보세요
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                다양한 기술 스택과 풍부한 경험을 바탕으로 여러분의 아이디어를 
                현실로 만들어드립니다. 임베디드 시스템부터 웹 애플리케이션까지 
                폭넓은 영역에서 협업이 가능합니다.
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