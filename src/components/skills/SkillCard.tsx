'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { SkillCategory } from '@/data/skills'
import SkillItem from './SkillItem'
import { TrendingUp } from 'lucide-react'

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const SkillCard = ({ category, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group h-full"
    >
      <Card className="h-full border-0 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:border-primary/50">
        <CardContent className="p-0 h-full flex flex-col">
          {/* Category Header */}
          <div className={`relative p-6 bg-gradient-to-r ${category.color} text-white`}>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="text-3xl">{category.icon}</div>
                <div className="flex items-center text-white/80">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">{category.skills.length}개 기술</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed">{category.description}</p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="p-6 flex-1">
            <div className="grid grid-cols-1 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <SkillItem 
                  key={skill.name}
                  skill={skill}
                  index={skillIndex}
                />
              ))}
            </div>
          </div>

          {/* Category Stats */}
          <div className="p-4 border-t border-border bg-secondary/20">
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                  <span>{category.skills.filter(s => s.level === 'Advanced').length} Advanced</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                  <span>{category.skills.filter(s => s.level === 'Intermediate').length} Intermediate</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                  <span>{category.skills.filter(s => s.level === 'Beginner').length} Beginner</span>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-primary font-medium"
              >
                {Math.round(category.skills.reduce((acc, skill) => {
                  const points = skill.level === 'Advanced' ? 3 : skill.level === 'Intermediate' ? 2 : 1;
                  return acc + points;
                }, 0) / category.skills.length * 100 / 3)}% 숙련도
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default SkillCard