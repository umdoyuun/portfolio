// 포트폴리오 프로젝트 데이터
const portfolioProjectsData = [
  {
    id: "hero",
    title: "독거노인 실버케어 플랫폼 영웅이",
    subtitle: "Matter Protocol 기반 IoT 모니터링 시스템",
    period: "2025.01.06 ~ 2025.02.21 (7주)",
    team: "6인",
    role: "임베디드 개발, IoT 통합, 하드웨어 설계",
    overview: "독거노인의 안전한 일상생활 지원과 보호자를 위한 원격 모니터링 시스템 구축. 초고령화 사회 진입과 1인 가구 급증으로 독거노인이 증가하는 상황에서, 기존 방문 서비스만으로는 24시간 안전 관리에 한계가 있어 지속적인 모니터링과 즉시 대응이 가능한 디지털 솔루션 필요.",
    techStack: ["Matter Protocol", "SmartThings", "C/C++", "Python", "LCD Display", "Multi-sensor", "Real-time System", "WiringPi", "HAL 설계", "PWM 제어"],
    highlights: [
      "저수준 디바이스 드라이버 개발로 기존 고수준 라이브러리 대비 5~10배 응답 속도 향상",
      "4개 센서 동시 모니터링 (온습도, 미세먼지, 가스, 조도)", 
      "센서 데이터 SmartThings 제공으로 인한 IoT 확장성 확보",
      "사용자 친화적 인터페이스: LCD 표현으로 인한 직관적으로 상태 전달"
    ],
    achievements: [
      "하드웨어 구현: SPI 통신 드라이버 구현, ADC 제어, 실시간 데이터 처리, 노이즈 필터링",
      "Matter 프로토콜 IoT 통합: SmartThings 생태계 연동",
      "로봇 표정 구현: 16x2 캐릭터 LCD 기반 로봇 표정 구현"
    ],
    images: [
      "/images/projects/hero-1.jpg",
      "/images/projects/hero-2.jpg",
      "/images/projects/hero-3.jpg"
    ],
    githubUrl: "https://github.com/umdoyuun/hero-silvercare",
    retrospective: "하드웨어부터 IoT 생태계 연동까지 전체 시스템을 구축하며 임베디드 개발의 전 과정을 경험할 수 있었습니다. 특히 Matter Protocol을 활용한 IoT 표준화의 중요성과 저수준 최적화를 통한 성능 향상의 가치를 깨달았습니다."
  },
  {
    id: "smartmirror", 
    title: "스마트 미러 기반 지능형 생활 관리 플랫폼",
    subtitle: "음성 AI와 IoT 통합 생활 관리 시스템",
    period: "2025.03.03 ~ 2025.04.11 (7주)",
    team: "6인",
    role: "음성 AI 시스템 구현, 하드웨어 통합, 실시간 통신",
    overview: "음성 인식 AI 비서와 IoT 스마트홈을 통합한 가족 맞춤형 생활 관리 플랫폼 구축. 바쁜 현대 생활에서 가족 구성원들이 각각 다른 일정과 정보 니즈를 가지고 있지만, 기존 스마트홈 기기들은 개별적으로 작동하여 통합 관리가 어렵고 직관적인 제어 방법 부재.",
    techStack: ["FastAPI", "WebSocket", "Python", "Raspberry Pi", "Speech Recognition", "IoT Integration", "Real-time Communication", "Porcupine Wake Word", "STT/TTS", "Google Cloud Platform"],
    highlights: [
      "엣지 컴퓨팅 시스템으로 하드웨어 성능하게 구현",
      "자연적 로컬 wakeword 인식 모델로 성능 최적화",
      "멀티영어 가족자로 음성 명령 정확도 확보"
    ],
    achievements: [
      "음성 AI 시스템 구현: 웨이크워드 감지, STT/TTS, Google Cloud Platform 활용, NLU 시스템",
      "엣지 컴퓨팅 서버 구현: WebSocket 기반 분산 시스템 구현, 라즈베리파이-엣지 서버간 통신 구현",
      "하드웨어 구현: 포터블 모니터 + 하프 미러 필름으로 스마트 미러 구현, 라즈베리파이4 기반 제어 시스템 구현, 마이크 어레이 최적 배치로 음성 인식 품질 향상, 테스트용 IoT 장치 개발: ESP32 기반 무드등"
    ],
    images: [
      "/images/projects/smartmirror-1.jpg", 
      "/images/projects/smartmirror-2.jpg",
      "/images/projects/smartmirror-3.jpg"
    ],
    githubUrl: "https://github.com/umdoyuun/smart-mirror-platform",
    retrospective: "음성 인식과 IoT 통합 시스템을 구축하며 엣지 컴퓨팅과 실시간 통신의 복잡성을 이해하게 되었습니다. 특히 가족 구성원별 맞춤 서비스 제공을 위한 AI 시스템 설계의 중요성을 깨달았습니다."
  },
  {
    id: "todac",
    title: "경계선 지능인과 보호자를 위한 플랫폼 토닥", 
    subtitle: "Android 기반 생활 지원 플랫폼",
    period: "2025.04.21 ~ 2025.05.23 (6주)",
    team: "6인",
    role: "Android 앱 개발, 웨어러블 연동, UI/UX 설계",
    overview: "경계선 지능인(IQ 71~84)의 범죄 창애 방지에서 제외되어 제도적 보호 사각지대에 놓인 상황에서, 지원센터는 적은 인력으로 많은 경계선 지능인을 효율적으로 관리할 수 있는 디지털 도구 부재",
    techStack: ["Android", "Kotlin", "MVVM 패턴", "Retrofit + OkHttp", "JWT 토큰", "Coroutine", "SMS Integration", "Location Services", "Real-time Notification"],
    highlights: [
      "직관적 UI/UX 구현",
      "노원구 경계선 지능인 센터에서 실제 적용하고 쉽다는 긍정적 피드백",
      "위치앱과 통합"
    ],
    achievements: [
      "Android 앱 아키텍처 설계: MVVM 패턴 기반 확장 가능한 구조, 네트워크레이어: Retrofit + OkHttp을 활용한 API 통신, 인증 시스템: JWT 토큰 기반 자동 갱신, 비동기 처리: Coroutine 기반 비동기 처리",
      "소비 문석 시스템: SMS 기반 실시간 소비 추적, 소비 시점 GPS 정보 수집 및 매핑, 카테고리분류: 가맹점 정보 기반 자동 소비 카테고리 분류 및 단계별 미션 시스템",
      "위치 앱 개발: 일정 관리: 일정, 등록 및 알림 제공, 매뉴얼 제공: 위급 상황 대처 및 소비 알림 제공, 위급 상황 감지: 이상 심박수 감지시 위급 상황 대처 및 AI 대화 제공, 음성 대화: AI와 음성 대화 제공"
    ],
    images: [
      "/images/projects/todac-1.jpg",
      "/images/projects/todac-2.jpg", 
      "/images/projects/todac-3.jpg"
    ],
    githubUrl: "https://github.com/umdoyuun/todac-platform",
    retrospective: "사회적 취약계층을 위한 기술 개발을 통해 기술의 사회적 가치를 깊이 생각해보게 되었습니다. 특히 사용자 중심의 UI/UX 설계와 실제 현장에서의 피드백 반영의 중요성을 깨달았습니다."
  }
]

// 기존 프로젝트 데이터 (호환성 유지)
const projectsData = [
  {
    id: 1,
    title: "스마트 IoT 모니터링 시스템",
    description: "ESP32와 다양한 센서를 활용한 실시간 환경 모니터링 시스템",
    thumbnail: "/images/projects/project1-thumb.jpg",
    images: [
      "/images/projects/project1-1.jpg",
      "/images/projects/project1-2.jpg", 
      "/images/projects/project1-3.jpg"
    ],
    details: {
      overview: "ESP32 기반으로 온도, 습도, 조도, 공기질 등을 실시간으로 모니터링하고 웹 대시보드에서 확인할 수 있는 IoT 시스템을 개발했습니다.",
      teamSize: "4명",
      role: "임베디드 개발 및 백엔드 개발",
      duration: "3개월 (2024.09 ~ 2024.11)",
      techStack: ["ESP32", "Arduino", "WiFi", "MQTT", "Node.js", "MongoDB", "React"],
      features: [
        "다중 센서 데이터 수집 및 전송",
        "실시간 웹 대시보드",
        "알람 및 임계값 설정",
        "데이터 시각화 및 분석",
        "모바일 반응형 UI"
      ],
      github: "https://github.com/umdoyuun/iot-monitoring",
      reflection: "하드웨어부터 풀스택까지 전체 시스템을 구축하며 IoT 개발의 전 과정을 경험할 수 있었습니다. 특히 센서 데이터의 안정적인 수집과 실시간 통신의 중요성을 깨달았습니다."
    },
    category: "IoT",
    featured: true,
    status: "완료"
  },
  {
    id: 2,
    title: "임베디드 홈 오토메이션",
    description: "Raspberry Pi 기반 스마트홈 제어 시스템",
    thumbnail: "/images/projects/project2-thumb.jpg", 
    images: [
      "/images/projects/project2-1.jpg",
      "/images/projects/project2-2.jpg",
      "/images/projects/project2-3.jpg"
    ],
    details: {
      overview: "Raspberry Pi를 중심으로 한 홈 오토메이션 시스템으로, 조명, 온도, 보안 등을 통합 제어할 수 있는 스마트홈 솔루션입니다.",
      teamSize: "3명", 
      role: "시스템 설계 및 임베디드 개발",
      duration: "4개월 (2024.05 ~ 2024.08)",
      techStack: ["Raspberry Pi", "Python", "GPIO", "Flask", "SQLite", "WebSocket"],
      features: [
        "음성 인식 기반 제어",
        "모바일 앱 연동",
        "일정 기반 자동화",
        "에너지 사용량 모니터링",
        "보안 알림 시스템"
      ],
      github: "https://github.com/umdoyuun/smart-home",
      demo: "https://smarthome-demo.vercel.app",
      reflection: "다양한 프로토콜과 디바이스들을 통합하는 과정에서 시스템 아키텍처 설계의 중요성을 배웠습니다. 사용자 경험을 고려한 인터페이스 설계에도 많은 신경을 썼습니다."
    },
    category: "스마트홈",
    featured: true,
    status: "완료"
  },
  {
    id: 3,
    title: "무선 센서 네트워크",
    description: "LoRa 기반 장거리 무선 센서 네트워크 구축",
    thumbnail: "/images/projects/project3-thumb.jpg",
    images: [
      "/images/projects/project3-1.jpg", 
      "/images/projects/project3-2.jpg",
      "/images/projects/project3-3.jpg"
    ],
    details: {
      overview: "LoRa 통신을 활용하여 넓은 범위의 센서 데이터를 효율적으로 수집하는 무선 센서 네트워크 시스템을 구현했습니다.",
      teamSize: "2명",
      role: "네트워크 프로토콜 개발 및 펌웨어 구현", 
      duration: "5개월 (2024.01 ~ 2024.05)",
      techStack: ["Arduino", "LoRa", "ESP32", "C++", "Python", "MySQL"],
      features: [
        "장거리 무선 통신 (최대 10km)",
        "저전력 센서 노드 설계", 
        "메시 네트워크 토폴로지",
        "데이터 암호화 및 보안",
        "배터리 최적화"
      ],
      github: "https://github.com/umdoyuun/lora-sensor-network",
      reflection: "무선 통신의 복잡성과 전력 관리의 중요성을 깊이 이해하게 되었습니다. 실제 환경에서의 테스트를 통해 이론과 실무의 차이를 경험했습니다."
    },
    category: "무선통신",
    featured: true, 
    status: "완료"
  }
]

export const personalData = {
  // 기본 정보
  name: "엄도윤",
  nameEn: "Eom Doyoon", 
  title: "Embedded/IoT Systems Developer",
  subtitle: "삼성 청년 SW·AI 아카데미 12기 수료생",
  bio: "안녕하세요! 문제해결 능력과 사용자 중심의 소프트웨어 개발에 열정을 가진 개발자 엄도윤입니다.\n\n다양한 IoT 서비스와 AI 기술을 활용한 프로젝트를 통해 하드웨어와 소프트웨어의 경계를 넘나드는 통합적 사고력을 기르고 있습니다. 특히 제한된 리소스 환경에서의 성능 최적화와 사용자 경험 개선에 관심이 많으며, 실제 문제를 해결하는 실용적인 솔루션 개발에 집중하고 있습니다.",

  // 연락처
  contact: {
    phone: "010-3996-6258",
    email: "tkdtlr1998@naver.com",
    location: "대한민국 서울"
  },

  // 소셜 링크
  social: {
    instagram: "https://www.instagram.com/um_doyuun_/",
    github: "https://github.com/umdoyuun",
    blog: "https://doyun98.tistory.com"
  },

  // 프로젝트 데이터 참조
  projectsData,
  portfolioProjectsData,

  // 교육 과정
  education: [
    {
      id: 1,
      institution: "삼성 청년 SW·AI 아카데미",
      degree: "12기 수료생",
      period: "2024.07 ~ 2025.06",
      description: "1학기: 임베디드 트랙 (알고리즘, C/C++, Linux, IoT, 웹 개발 등)\n2학기: 심화과정 (3개 프로젝트, CS 알고리즘, RTOS, 네트워크 등)",
      status: "수료"
    },
    {
      id: 2, 
      institution: "수원대학교",
      degree: "정보통신공학과 학사",
      period: "2017.03 ~ 2024.02",
      description: "정보통신공학",
      gpa: "4.17/4.5 (전공학점: 4.31/4.5)",
      status: "졸업"
    },
    {
      id: 3,
      institution: "삼성전자DX 부문",
      degree: "동계 SW 역량강화 특강",
      period: "2023.01 ~ 2023.02",
      description: "소프트웨어 개발 역량 강화 교육과정",
      status: "수료"
    }
  ],

  // 수상 이력
  awards: [
    {
      id: 1,
      title: "SSAFY 우수상(서울고등법무청장상)",
      organization: "삼성 청년 SW·AI 아카데미",
      date: "2025.06",
      description: "SSAFY 12기 우수 교육생 선정"
    },
    {
      id: 2,
      title: "SSAFY 12기 전시발표회 발표부문 3등",
      organization: "삼성 청년 SW·AI 아카데미",
      date: "2025.06",
      description: "전시발표회 발표 부문 3등"
    },
    {
      id: 3,
      title: "SSAFY 자율 프로젝트 우수상",
      organization: "삼성 청년 SW·AI 아카데미",
      date: "2025.05",
      description: "자율 프로젝트 우수팀 선정"
    },
    {
      id: 4,
      title: "SSAFY 특화 프로젝트 우수상",
      organization: "삼성 청년 SW·AI 아카데미",
      date: "2025.04",
      description: "특화 프로젝트 우수팀 선정"
    },
    {
      id: 5,
      title: "SSAFY 공통 프로젝트 우수상",
      organization: "삼성 청년 SW·AI 아카데미",
      date: "2025.02",
      description: "공통 프로젝트 우수팀 선정"
    },
    {
      id: 6,
      title: "학위수여식 우등상(수석 졸업)",
      organization: "수원대학교",
      date: "2024.02",
      description: "정보통신학과 수석 졸업"
    },
    {
      id: 7,
      title: "알고리즘 경진대회 최우수상",
      organization: "수원대학교",
      date: "2023.11",
      description: "알고리즘 경진대회 최우수상 수상"
    },
    {
      id: 8,
      title: "정보통신학과 로봇경진대회 3등",
      organization: "수원대학교 정보통신학과",
      date: "2023.11",
      description: "로봇경진대회 3위 입상"
    }
  ],

  // 자격증
  certifications: [
    {
      id: 1,
      name: "정보처리기사",
      organization: "한국산업인력공단",
      date: "2025.06",
      number: "25202050123"
    },
    {
      id: 2,
      name: "PCCP C++ Level 4",
      organization: "프로그래머스",
      date: "2024.12",
      number: "PCCP-2024-123456"
    },
    {
      id: 3,
      name: "삼성 SW역량테스트 Level B",
      organization: "삼성전자",
      date: "2024.08",
      number: "SW-2024-B-789"
    },
    {
      id: 4,
      name: "SQLD",
      organization: "한국데이터산업진흥원",
      date: "2023.12",
      number: "SQLD-2023-456789"
    },
    {
      id: 5,
      name: "한국사능력검정 1급",
      organization: "국사편찬위원회",
      date: "2019.11",
      number: "19-1-123456"
    }
  ],

  // 기술 스택
  skills: {
    // 임베디드 시스템
    embedded: [
      { name: "C/C++", level: 90, category: "Programming" },
      { name: "Python", level: 85, category: "Programming" },
      { name: "Arduino", level: 85, category: "Platform" },
      { name: "Raspberry Pi", level: 80, category: "SBC" },
      { name: "STM32", level: 75, category: "MCU" },
      { name: "ESP32/ESP8266", level: 80, category: "MCU" },
      { name: "Linux Embedded", level: 70, category: "OS" },
      { name: "FreeRTOS", level: 65, category: "RTOS" }
    ],
    
    // 통신 프로토콜
    protocols: [
      { name: "UART/SPI/I2C", level: 85, category: "Serial" },
      { name: "WiFi/Bluetooth", level: 80, category: "Wireless" },
      { name: "MQTT", level: 85, category: "IoT" },
      { name: "HTTP/REST API", level: 90, category: "Network" },
      { name: "TCP/IP", level: 75, category: "Network" },
      { name: "CAN Bus", level: 60, category: "Automotive" },
      { name: "LoRaWAN", level: 55, category: "LPWAN" }
    ],
    
    // 개발 도구
    tools: [
      { name: "VS Code", level: 95, category: "IDE" },
      { name: "Arduino IDE", level: 90, category: "IDE" },
      { name: "PlatformIO", level: 85, category: "IDE" },
      { name: "Git/GitHub", level: 90, category: "Version Control" },
      { name: "Docker", level: 75, category: "Container" },
      { name: "AWS IoT Core", level: 70, category: "Cloud" },
      { name: "Postman", level: 85, category: "Testing" },
      { name: "Wireshark", level: 70, category: "Network Analysis" }
    ]
  },

  // 관심 분야
  interests: [
    "IoT 시스템 설계",
    "임베디드 AI/머신러닝", 
    "스마트홈 자동화",
    "산업용 IoT",
    "로보틱스",
    "오픈소스 하드웨어"
  ]
}

// 블로그 설정
export const blogConfig = {
  rssUrl: "https://doyun98.tistory.com/rss",
  categories: [
    { id: "embedded", name: "임베디드", color: "#2563eb" },
    { id: "matter", name: "Matter", color: "#16a34a" }, 
    { id: "algorithm", name: "알고리즘", color: "#dc2626" },
    { id: "tools", name: "개발도구", color: "#7c3aed" },
    { id: "etc", name: "기타", color: "#64748b" }
  ],
  postsPerPage: 10,
  enableComments: false,
  adminPassword: process.env.ADMIN_PASSWORD || "admin123"
}

// Export projects data separately as well for other components  
export { projectsData, portfolioProjectsData }