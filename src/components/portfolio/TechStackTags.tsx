'use client'

interface TechStackTagsProps {
  techStack: string[];
  className?: string;
}

// 기술 스택별 색상 매핑
const getTechStackColor = (tech: string): string => {
  const techLower = tech.toLowerCase();
  
  // Programming Languages
  if (techLower.includes('c++') || techLower.includes('c/c++')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
  if (techLower.includes('python')) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
  if (techLower.includes('kotlin')) return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
  if (techLower.includes('javascript') || techLower.includes('js')) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';

  // Mobile & Frontend
  if (techLower.includes('android')) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
  if (techLower.includes('react')) return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200';
  if (techLower.includes('fastapi')) return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200';
  if (techLower.includes('websocket')) return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';

  // IoT & Embedded
  if (techLower.includes('matter') || techLower.includes('smartthings')) return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
  if (techLower.includes('raspberry pi')) return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
  if (techLower.includes('esp32') || techLower.includes('arduino')) return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
  if (techLower.includes('sensor') || techLower.includes('lcd') || techLower.includes('hal')) return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';

  // Communication & Protocols
  if (techLower.includes('mqtt') || techLower.includes('wifi') || techLower.includes('bluetooth')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
  if (techLower.includes('speech') || techLower.includes('stt') || techLower.includes('tts')) return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
  if (techLower.includes('google cloud') || techLower.includes('gcp')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';

  // Architecture & Patterns
  if (techLower.includes('mvvm') || techLower.includes('retrofit') || techLower.includes('jwt')) return 'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200';
  if (techLower.includes('real-time') || techLower.includes('coroutine')) return 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200';
  if (techLower.includes('sms') || techLower.includes('location') || techLower.includes('gps')) return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200';

  // Default color
  return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200';
};

const TechStackTags = ({ techStack, className = "" }: TechStackTagsProps) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {techStack.map((tech, index) => (
        <span
          key={index}
          className={`px-2 py-1 text-xs font-medium rounded-full border transition-all duration-200 hover:scale-105 ${getTechStackColor(tech)}`}
        >
          {tech}
        </span>
      ))}
    </div>
  )
}

export default TechStackTags