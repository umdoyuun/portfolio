// GitHub README 스타일 배지용 기술 스택 데이터

export interface TechBadge {
  name: string;
  priority: 'high' | 'medium';
  color: string;
  darkColor?: string;
  icon?: string;
}

export interface TechCategory {
  id: string;
  title: string;
  description: string;
  badges: TechBadge[];
}

export const techCategories: TechCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    description: '프로그래밍 언어 및 핵심 기술',
    badges: [
      { name: 'C/C++', priority: 'high', color: '#00599C', icon: '⚙️' },
      { name: 'Python', priority: 'high', color: '#3776AB', icon: '🐍' },
      { name: 'Kotlin', priority: 'high', color: '#7F52FF', icon: '🎯' },
      { name: 'JavaScript', priority: 'medium', color: '#F7DF1E', darkColor: '#F7DF1E', icon: '📜' },
      { name: 'Shell Script', priority: 'medium', color: '#4EAA25', icon: '🔧' },
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend',
    description: '프론트엔드 개발 기술',
    badges: [
      { name: 'React', priority: 'high', color: '#61DAFB', icon: '⚛️' },
      { name: 'HTML/CSS', priority: 'high', color: '#E34F26', icon: '🌎' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend/API',
    description: '백엔드 및 API 개발',
    badges: [
      { name: 'FastAPI', priority: 'high', color: '#009688', icon: '⚡' },
      { name: 'REST API', priority: 'high', color: '#25D366', icon: '🔌' },
      { name: 'WebSocket', priority: 'high', color: '#4A90E2', icon: '🔄' },
      { name: 'Node.js', priority: 'medium', color: '#339933', icon: '🟢' },
    ]
  },
  {
    id: 'embedded',
    title: 'Embedded/IoT',
    description: '임베디드 및 IoT 시스템',
    badges: [
      { name: 'Arduino', priority: 'high', color: '#00979D', icon: '🤖' },
      { name: 'Raspberry Pi', priority: 'high', color: '#C51A4A', icon: '🥧' },
      { name: 'Matter Protocol', priority: 'high', color: '#1976D2' },
      { name: 'ESP32', priority: 'high', color: '#E7352C' },
      { name: 'I2C/SPI', priority: 'high', color: '#FF6B35' },
      { name: 'Jetson Orin Nano', priority: 'high', color: '#76B900' },
      { name: 'Linux', priority: 'high', color: '#FCC624', darkColor: '#FCC624' },
      { name: 'RTOS', priority: 'medium', color: '#2196F3' },
      { name: 'STM32', priority: 'medium', color: '#03234B' },
      { name: 'Renesas', priority: 'medium', color: '#0073E6' },
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile',
    description: '모바일 애플리케이션 개발',
    badges: [
      { name: 'Android Studio', priority: 'high', color: '#3DDC84', icon: '📱' },
      { name: 'MVVM Pattern', priority: 'medium', color: '#9C27B0' },
      { name: 'Retrofit', priority: 'medium', color: '#48CAE4' },
    ]
  },
  {
    id: 'database',
    title: 'Database',
    description: '데이터베이스 관리',
    badges: [
      { name: 'SQLite', priority: 'high', color: '#0ea5e9', icon: '🖺' },
      { name: 'Room Database', priority: 'high', color: '#4CAF50', icon: '📊' },
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Infrastructure',
    description: '개발 도구 및 인프라',
    badges: [
      { name: 'Git/GitHub', priority: 'high', color: '#f97316', darkColor: '#F5F5F5' },
      { name: 'Vim', priority: 'high', color: '#019733' },
      { name: 'Jira', priority: 'high', color: '#2563eb' },
      { name: 'Notion', priority: 'high', color: '#8b5cf6', darkColor: '#FFFFFF' },
      { name: 'Firebase', priority: 'high', color: '#FF9900' },
      { name: 'AWS', priority: 'high', color: '#FF6600' },
      { name: 'Figma', priority: 'medium', color: '#F24E1E' },
      { name: 'Docker', priority: 'medium', color: '#2496ED' },
    ]
  },
  {
    id: 'ai',
    title: 'AI/ML',
    description: '인공지능 및 머신러닝',
    badges: [
      { name: 'Google Cloud Platform', priority: 'high', color: '#4285F4' },
      { name: 'OpenAI API', priority: 'high', color: '#412991' },
      { name: 'TensorFlow', priority: 'medium', color: '#FF6F00' },
      { name: 'Google Colab', priority: 'medium', color: '#F9AB00' },
    ]
  }
];

// 우선순위별 스타일 정의
export const priorityConfig = {
  high: {
    opacity: 1.0,
    fontWeight: 'font-semibold',
    border: 'border-0',
    shadow: 'shadow-md hover:shadow-lg'
  },
  medium: {
    opacity: 0.75,
    fontWeight: 'font-medium',
    border: 'border border-gray-300/50 dark:border-gray-600/50',
    shadow: 'shadow-sm hover:shadow-md'
  }
};

// 기술별 색상 매핑
export const getTechColor = (badge: TechBadge, isDark = false): string => {
  if (isDark && badge.darkColor) {
    return badge.darkColor;
  }
  return badge.color;
};

// 우선순위별 스타일 클래스
export const getPriorityStyle = (priority: TechBadge['priority']) => {
  const config = priorityConfig[priority] || priorityConfig.medium;
  return {
    className: `${config.fontWeight} ${config.border} ${config.shadow}`,
    opacity: config.opacity
  };
};