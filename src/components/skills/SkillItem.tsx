'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Skill } from '@/data/skills'
import SkillLevel from './SkillLevel'
import { Clock } from 'lucide-react'

interface SkillItemProps {
  skill: Skill;
  index: number;
  className?: string;
}

const SkillItem = ({ skill, index, className = "" }: SkillItemProps) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative group ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="p-4 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all duration-300">
        {/* Skill Header */}
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
            {skill.name}
          </h4>
          <SkillLevel level={skill.level} />
        </div>

        {/* Progress Bar */}
        <div className="mb-3">
          <SkillLevel level={skill.level} showProgress className="w-full" />
        </div>

        {/* Years of Experience */}
        {skill.years && (
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            {skill.years}년 경험
          </div>
        )}

        {/* Tooltip */}
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-popover border border-border rounded-lg shadow-lg"
          >
            <div className="text-sm text-popover-foreground">
              <div className="font-medium mb-1">{skill.name}</div>
              <div className="text-xs text-muted-foreground">
                {skill.description}
              </div>
              {skill.years && (
                <div className="flex items-center mt-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  {skill.years}년의 실무 경험
                </div>
              )}
            </div>
            
            {/* Tooltip Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-popover"></div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default SkillItem