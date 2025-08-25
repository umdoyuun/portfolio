'use client'

import { motion } from 'framer-motion'
import { Skill, skillLevelColors, getSkillProgress } from '@/data/skills'

interface SkillLevelProps {
  level: Skill['level'];
  showProgress?: boolean;
  className?: string;
}

const SkillLevel = ({ level, showProgress = false, className = "" }: SkillLevelProps) => {
  const colors = skillLevelColors[level]
  const progress = getSkillProgress(level)

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${colors.bg} ${colors.text} ${colors.border}`}>
        {level}
      </span>
      
      {showProgress && (
        <div className="flex-1 max-w-20">
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className={`h-full ${colors.progress} rounded-full`}
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default SkillLevel