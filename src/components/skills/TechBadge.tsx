'use client';

import { motion } from 'framer-motion';
import { TechBadge as TechBadgeType, getPriorityStyle, getTechColor } from '@/data/skillsBadges';

interface TechBadgeProps {
  badge: TechBadgeType;
  index: number;
  isDark?: boolean;
}

const TechBadge = ({ badge, index, isDark = false }: TechBadgeProps) => {
  // Medium priority는 회색으로 통일, High priority는 원래 색상 사용
  const backgroundColor = badge.priority === 'medium' 
    ? (isDark ? '#6B7280' : '#9CA3AF') 
    : getTechColor(badge, isDark);
  const priorityConfig = getPriorityStyle(badge.priority);
  
  // 배경색의 밝기를 계산하여 텍스트 색상 결정
  const isLightBackground = (color: string): boolean => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128;
  };

  const textColor = isLightBackground(backgroundColor) ? '#000000' : '#FFFFFF';
  
  // 우선순위에 따른 배경색 조정 (medium은 이미 회색으로 설정됨)
  const adjustedBackgroundColor = backgroundColor;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.03,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.08,
        y: -2,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
      viewport={{ once: true }}
      className={`
        inline-flex items-center px-3 py-2 rounded-lg text-sm
        transition-all duration-300 cursor-default select-none
        hover:shadow-black/10 dark:hover:shadow-white/10
        ${priorityConfig.className}
      `}
      style={{
        backgroundColor: adjustedBackgroundColor,
        color: textColor,
        opacity: badge.priority === 'medium' ? 0.85 : 1
      }}
    >
      <span className="font-semibold tracking-wide whitespace-nowrap text-shadow-sm">
        {badge.name}
      </span>
    </motion.div>
  );
};

export default TechBadge;