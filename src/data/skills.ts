// Skills 데이터 구조 정의
export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  icon?: string;
  years?: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  skills: Skill[];
}

// 기술 스택 데이터
export const skillsData: SkillCategory[] = [
  {
    id: 'embedded',
    title: 'Embedded Systems',
    description: '마이크로컨트롤러와 임베디드 시스템 개발',
    icon: '🔧',
    color: 'from-blue-500 to-blue-700',
    skills: [
      {
        name: 'C/C++',
        level: 'Advanced',
        description: '시스템 프로그래밍과 하드웨어 제어를 위한 고성능 코드 작성',
        years: 4
      },
      {
        name: 'Python',
        level: 'Advanced',
        description: '임베디드 시스템 테스팅, 자동화 및 프로토타이핑',
        years: 3
      },
      {
        name: 'Arduino',
        level: 'Advanced',
        description: '센서 제어, 프로토타이핑 및 IoT 디바이스 개발',
        years: 3
      },
      {
        name: 'Raspberry Pi',
        level: 'Advanced',
        description: 'Linux 기반 임베디드 시스템 개발 및 IoT 게이트웨이 구축',
        years: 2
      },
      {
        name: 'RTOS',
        level: 'Intermediate',
        description: '실시간 운영체제를 활용한 멀티태스킹 시스템 설계',
        years: 1
      },
      {
        name: 'Microcontroller',
        level: 'Advanced',
        description: 'STM32, ESP32 등 다양한 MCU 기반 시스템 개발',
        years: 3
      },
      {
        name: 'Sensor/Actuator',
        level: 'Advanced',
        description: '다양한 센서와 액추에이터 통합 및 제어 시스템 구현',
        years: 2
      }
    ]
  },
  {
    id: 'iot',
    title: 'IoT & Communication',
    description: 'IoT 프로토콜과 무선 통신 기술',
    icon: '📡',
    color: 'from-green-500 to-green-700',
    skills: [
      {
        name: 'Matter Protocol',
        level: 'Intermediate',
        description: 'IoT 표준 프로토콜을 활용한 디바이스 상호 운용성 구현',
        years: 1
      },
      {
        name: 'SmartThings',
        level: 'Intermediate',
        description: '삼성 SmartThings 플랫폼을 통한 IoT 생태계 통합',
        years: 1
      },
      {
        name: 'Wi-Fi',
        level: 'Advanced',
        description: '무선 네트워킹 및 Wi-Fi 기반 IoT 디바이스 개발',
        years: 3
      },
      {
        name: 'Bluetooth',
        level: 'Intermediate',
        description: 'BLE를 활용한 저전력 무선 통신 시스템 구현',
        years: 2
      },
      {
        name: 'MQTT',
        level: 'Advanced',
        description: 'IoT 메시징 프로토콜을 통한 실시간 데이터 전송',
        years: 2
      },
      {
        name: 'WebSocket',
        level: 'Intermediate',
        description: '실시간 양방향 통신을 위한 웹소켓 프로토콜 구현',
        years: 1
      },
      {
        name: 'Real-time Communication',
        level: 'Advanced',
        description: '실시간 데이터 전송 및 동기화 시스템 설계',
        years: 2
      }
    ]
  },
  {
    id: 'web',
    title: 'Web Development',
    description: '모던 웹 애플리케이션 개발',
    icon: '🌐',
    color: 'from-purple-500 to-purple-700',
    skills: [
      {
        name: 'JavaScript',
        level: 'Advanced',
        description: '동적 웹 애플리케이션 및 인터랙티브 UI 개발',
        years: 3
      },
      {
        name: 'TypeScript',
        level: 'Intermediate',
        description: '타입 안정성을 갖춘 대규모 웹 애플리케이션 개발',
        years: 2
      },
      {
        name: 'React',
        level: 'Advanced',
        description: '컴포넌트 기반 사용자 인터페이스 라이브러리',
        years: 2
      },
      {
        name: 'Next.js',
        level: 'Intermediate',
        description: '서버사이드 렌더링과 정적 사이트 생성',
        years: 1
      },
      {
        name: 'FastAPI',
        level: 'Advanced',
        description: '고성능 Python 웹 API 프레임워크',
        years: 2
      },
      {
        name: 'Node.js',
        level: 'Intermediate',
        description: '서버사이드 JavaScript 런타임 환경',
        years: 1
      }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile & Hardware',
    description: '모바일 앱과 하드웨어 설계',
    icon: '📱',
    color: 'from-orange-500 to-orange-700',
    skills: [
      {
        name: 'Android (Kotlin)',
        level: 'Advanced',
        description: 'Kotlin을 활용한 안드로이드 네이티브 앱 개발',
        years: 2
      },
      {
        name: 'Circuit Design',
        level: 'Intermediate',
        description: '전자 회로 설계 및 PCB 레이아웃',
        years: 2
      },
      {
        name: 'PCB Design',
        level: 'Beginner',
        description: '인쇄회로기판 설계 및 제작',
        years: 1
      },
      {
        name: '3D Printing',
        level: 'Intermediate',
        description: '프로토타입 제작 및 하드웨어 케이스 설계',
        years: 2
      }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Infrastructure',
    description: '개발 도구와 인프라스트럭처',
    icon: '🛠️',
    color: 'from-gray-500 to-gray-700',
    skills: [
      {
        name: 'Git',
        level: 'Advanced',
        description: '버전 관리 및 협업 도구',
        years: 4
      },
      {
        name: 'Docker',
        level: 'Intermediate',
        description: '컨테이너화를 통한 개발 환경 구성',
        years: 1
      },
      {
        name: 'Linux',
        level: 'Advanced',
        description: '리눅스 시스템 관리 및 셸 스크립팅',
        years: 3
      },
      {
        name: 'Windows',
        level: 'Advanced',
        description: '윈도우 환경에서의 시스템 개발',
        years: 5
      },
      {
        name: 'Figma',
        level: 'Intermediate',
        description: 'UI/UX 디자인 및 프로토타이핑',
        years: 1
      },
      {
        name: 'KiCad',
        level: 'Beginner',
        description: '오픈소스 PCB 설계 도구',
        years: 1
      },
      {
        name: 'VS Code',
        level: 'Advanced',
        description: '통합 개발 환경 및 확장 프로그래밍',
        years: 4
      }
    ]
  }
]

// 숙련도별 색상 정의
export const skillLevelColors = {
  'Beginner': {
    bg: 'bg-yellow-100 dark:bg-yellow-900/30',
    text: 'text-yellow-800 dark:text-yellow-300',
    border: 'border-yellow-300 dark:border-yellow-700',
    progress: 'bg-yellow-500'
  },
  'Intermediate': {
    bg: 'bg-blue-100 dark:bg-blue-900/30', 
    text: 'text-blue-800 dark:text-blue-300',
    border: 'border-blue-300 dark:border-blue-700',
    progress: 'bg-blue-500'
  },
  'Advanced': {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-800 dark:text-green-300', 
    border: 'border-green-300 dark:border-green-700',
    progress: 'bg-green-500'
  }
}

// 숙련도별 진행률 계산
export const getSkillProgress = (level: Skill['level']): number => {
  switch (level) {
    case 'Beginner': return 33
    case 'Intermediate': return 66
    case 'Advanced': return 95
    default: return 0
  }
}