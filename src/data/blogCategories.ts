import { BlogCategory } from '@/types/blog';

export const blogCategories: BlogCategory[] = [
  {
    id: 'all',
    name: '전체',
    color: 'from-slate-500 to-slate-600',
    keywords: [],
    description: '모든 블로그 글'
  },
  {
    id: 'embedded',
    name: '임베디드',
    color: 'from-green-500 to-green-600',
    keywords: ['라즈베리파이', 'raspberry', 'pi', 'arduino', 'iot', '임베디드', 'embedded', '센서', 'sensor'],
    description: '라즈베리파이, Arduino, IoT 관련 글'
  },
  {
    id: 'matter',
    name: 'Matter',
    color: 'from-blue-500 to-blue-600',
    keywords: ['matter', '매터', 'smartthings', 'smart', '스마트', 'home', '홈'],
    description: 'Matter, SmartThings 스마트홈 관련'
  },
  {
    id: 'algorithm',
    name: '알고리즘',
    color: 'from-purple-500 to-purple-600',
    keywords: ['백준', 'baekjoon', '프로그래머스', 'programmers', '코딩테스트', 'coding', 'test', '알고리즘', 'algorithm'],
    description: '백준, 프로그래머스, 코딩테스트 문제 해결'
  },
  {
    id: 'devtools',
    name: '개발도구',
    color: 'from-orange-500 to-orange-600',
    keywords: ['vim', 'linux', 'git', '개발환경', 'dev', 'tool', 'vscode', 'terminal', 'shell', 'ubuntu'],
    description: 'Vim, Linux, Git 등 개발환경 관련'
  },
  {
    id: 'etc',
    name: '기타',
    color: 'from-gray-500 to-gray-600',
    keywords: [],
    description: '기타 분류되지 않은 글들'
  }
];

export const categorizeBlogPost = (title: string, description: string = ''): string => {
  const content = `${title} ${description}`.toLowerCase();
  
  // 임베디드 카테고리 체크
  for (const keyword of blogCategories.find(c => c.id === 'embedded')!.keywords) {
    if (content.includes(keyword.toLowerCase())) {
      return 'embedded';
    }
  }
  
  // Matter 카테고리 체크
  for (const keyword of blogCategories.find(c => c.id === 'matter')!.keywords) {
    if (content.includes(keyword.toLowerCase())) {
      return 'matter';
    }
  }
  
  // 알고리즘 카테고리 체크
  for (const keyword of blogCategories.find(c => c.id === 'algorithm')!.keywords) {
    if (content.includes(keyword.toLowerCase())) {
      return 'algorithm';
    }
  }
  
  // 개발도구 카테고리 체크
  for (const keyword of blogCategories.find(c => c.id === 'devtools')!.keywords) {
    if (content.includes(keyword.toLowerCase())) {
      return 'devtools';
    }
  }
  
  // 기본값: 기타
  return 'etc';
};