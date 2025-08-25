export const portfolioData = {
  personal: {
    name: "임베디드 개발자",
    title: "Embedded/IoT Systems Developer",
    subtitle: "하드웨어와 소프트웨어의 융합을 통한 혁신적인 IoT 솔루션 개발",
    bio: "마이크로컨트롤러부터 IoT 클라우드 플랫폼까지, 전체 임베디드 시스템 스택에 대한 깊이 있는 이해를 바탕으로 현실적이고 효율적인 솔루션을 제공합니다.",
    email: "contact@embedded-dev.com",
    phone: "+82-10-0000-0000",
    location: "Seoul, Korea",
    github: "https://github.com/embedded-dev",
    linkedin: "https://linkedin.com/in/embedded-dev"
  },
  
  skills: {
    embedded: [
      { name: "C/C++", level: 95, category: "Programming" },
      { name: "ARM Cortex-M", level: 90, category: "MCU" },
      { name: "STM32", level: 90, category: "MCU" },
      { name: "ESP32/ESP8266", level: 85, category: "MCU" },
      { name: "Arduino", level: 85, category: "Platform" },
      { name: "Raspberry Pi", level: 80, category: "SBC" },
      { name: "RTOS (FreeRTOS)", level: 85, category: "OS" },
      { name: "Linux Embedded", level: 80, category: "OS" }
    ],
    protocols: [
      { name: "UART/SPI/I2C", level: 95, category: "Serial" },
      { name: "CAN Bus", level: 85, category: "Automotive" },
      { name: "Modbus", level: 80, category: "Industrial" },
      { name: "WiFi/Bluetooth", level: 85, category: "Wireless" },
      { name: "LoRaWAN", level: 75, category: "LPWAN" },
      { name: "TCP/IP", level: 85, category: "Network" },
      { name: "MQTT", level: 90, category: "IoT" },
      { name: "CoAP", level: 75, category: "IoT" }
    ],
    tools: [
      { name: "Keil MDK", level: 85, category: "IDE" },
      { name: "STM32CubeIDE", level: 90, category: "IDE" },
      { name: "PlatformIO", level: 90, category: "IDE" },
      { name: "Altium Designer", level: 80, category: "PCB" },
      { name: "KiCad", level: 85, category: "PCB" },
      { name: "Oscilloscope", level: 90, category: "Test" },
      { name: "Logic Analyzer", level: 85, category: "Test" },
      { name: "J-Link/ST-Link", level: 90, category: "Debug" }
    ]
  },
  
  projects: [
    {
      id: 1,
      title: "Smart Factory IoT Gateway",
      description: "산업용 IoT 게이트웨이 시스템으로 Modbus/TCP와 MQTT 프로토콜을 지원하여 공장 설비 데이터를 실시간으로 수집하고 클라우드로 전송합니다.",
      technologies: ["STM32F4", "Ethernet", "Modbus", "MQTT", "FreeRTOS", "C"],
      features: [
        "Multi-protocol 통신 지원 (Modbus RTU/TCP, MQTT)",
        "실시간 데이터 수집 및 버퍼링",
        "네트워크 연결 실패 시 자동 복구",
        "Over-the-Air (OTA) 펌웨어 업데이트",
        "웹 기반 설정 인터페이스"
      ],
      image: "/projects/iot-gateway.jpg",
      github: "https://github.com/embedded-dev/iot-gateway",
      demo: "https://factory-iot-demo.com",
      status: "완료",
      year: 2024
    },
    {
      id: 2,
      title: "Agricultural Monitoring System",
      description: "농장 환경 모니터링을 위한 무선 센서 네트워크 시스템으로 LoRaWAN 프로토콜을 사용하여 넓은 농장 지역을 커버합니다.",
      technologies: ["ESP32", "LoRaWAN", "Solar Power", "Sensors", "Python", "AWS IoT"],
      features: [
        "태양광 충전 시스템으로 6개월 무정전 운영",
        "토양 수분, 온습도, 조도 센서 통합",
        "LoRaWAN 기반 장거리 무선 통신 (최대 10km)",
        "AWS IoT Core 연동 및 실시간 알람",
        "모바일 앱 연동 (React Native)"
      ],
      image: "/projects/agri-system.jpg",
      github: "https://github.com/embedded-dev/agri-monitor",
      status: "완료",
      year: 2023
    },
    {
      id: 3,
      title: "Automotive CAN Bus Logger",
      description: "자동차 진단을 위한 CAN 버스 데이터 로깅 시스템으로 실시간 데이터 분석 및 저장 기능을 제공합니다.",
      technologies: ["STM32F7", "CAN Bus", "SD Card", "USB", "Qt", "Python"],
      features: [
        "듀얼 CAN 인터페이스 지원 (CAN-FD 포함)",
        "고속 SD 카드 데이터 로깅 (최대 1MB/s)",
        "실시간 CAN 메시지 필터링 및 분석",
        "USB 인터페이스를 통한 PC 연동",
        "Qt 기반 데이터 분석 툴 제공"
      ],
      image: "/projects/can-logger.jpg",
      github: "https://github.com/embedded-dev/can-logger",
      status: "진행중",
      year: 2024
    },
    {
      id: 4,
      title: "Home Energy Management System",
      description: "스마트홈을 위한 에너지 관리 시스템으로 전력 사용량을 모니터링하고 효율적인 전력 사용을 위한 자동화 기능을 제공합니다.",
      technologies: ["Raspberry Pi", "Zigbee", "MQTT", "InfluxDB", "Grafana", "Python"],
      features: [
        "Zigbee 3.0 기반 스마트 플러그/센서 연동",
        "실시간 전력 사용량 모니터링",
        "AI 기반 전력 사용 패턴 분석",
        "자동 절전 모드 및 스케줄링",
        "Grafana 대시보드를 통한 시각화"
      ],
      image: "/projects/energy-mgmt.jpg",
      github: "https://github.com/embedded-dev/energy-mgmt",
      demo: "https://energy-demo.local",
      status: "완료",
      year: 2023
    }
  ],
  
  experience: [
    {
      company: "테크 이노베이션",
      position: "Senior Embedded Systems Engineer",
      period: "2022.03 - 현재",
      description: "IoT 솔루션 개발 팀 리더로서 스마트 팩토리 및 농업 IoT 프로젝트를 주도하고 있습니다.",
      achievements: [
        "스마트 팩토리 IoT 게이트웨이 시스템 설계 및 개발 (연간 30% 비용 절감 달성)",
        "LoRaWAN 기반 농업 모니터링 시스템 구축 (커버리지 80% 향상)",
        "임베디드 소프트웨어 개발 프로세스 표준화 (개발 기간 25% 단축)",
        "주니어 개발자 3명 멘토링 및 기술 교육 진행"
      ]
    },
    {
      company: "스마트 시스템즈",
      position: "Embedded Software Engineer",
      period: "2020.01 - 2022.02",
      description: "자동차 전장 시스템 개발 팀에서 CAN 통신 및 진단 시스템을 개발했습니다.",
      achievements: [
        "CAN 버스 기반 차량 진단 시스템 개발 (OBD-II 표준 준수)",
        "Automotive SPICE Level 2 프로세스 구축 참여",
        "ISO 26262 기능 안전 표준 적용 경험",
        "임베디드 Linux 포팅 및 BSP 개발"
      ]
    },
    {
      company: "로보틱스 랩",
      position: "Junior Embedded Developer",
      period: "2018.07 - 2019.12",
      description: "로봇 제어 시스템 개발 및 센서 융합 알고리즘 구현을 담당했습니다.",
      achievements: [
        "6축 로봇 팔 제어 시스템 개발 (±0.1mm 정밀도 달성)",
        "IMU/GPS 센서 융합을 통한 자율 주행 로봇 개발",
        "ROS 기반 로봇 소프트웨어 아키텍처 설계",
        "Intel RealSense 카메라를 활용한 3D 인식 시스템 구현"
      ]
    }
  ],
  
  education: [
    {
      school: "한국공과대학교",
      degree: "전자공학과 석사",
      period: "2016 - 2018",
      gpa: "4.2/4.5",
      thesis: "IoT 환경에서의 저전력 무선 통신 프로토콜 최적화 연구"
    },
    {
      school: "한국공과대학교",
      degree: "전자공학과 학사",
      period: "2012 - 2016",
      gpa: "4.0/4.5",
      honors: "Magna Cum Laude"
    }
  ],
  
  certifications: [
    {
      name: "Certified Embedded Systems Professional",
      organization: "IEEE Computer Society",
      date: "2023.09",
      id: "CESP-2023-001234"
    },
    {
      name: "ARM Accredited Engineer",
      organization: "ARM Ltd",
      date: "2022.11",
      id: "AAE-2022-5678"
    },
    {
      name: "AWS IoT Core Specialty",
      organization: "Amazon Web Services",
      date: "2022.06",
      id: "AWS-IoT-2022-9012"
    },
    {
      name: "LoRaWAN Certified Engineer",
      organization: "LoRa Alliance",
      date: "2021.08",
      id: "LCE-2021-3456"
    }
  ],

  publications: [
    {
      title: "Optimized MQTT Protocol Implementation for Low-Power IoT Devices",
      journal: "IEEE Internet of Things Journal",
      date: "2023.12",
      authors: ["김임베디드", "박IoT", "이센서"],
      abstract: "저전력 IoT 디바이스를 위한 최적화된 MQTT 프로토콜 구현에 대한 연구"
    },
    {
      title: "Real-time Data Processing in Industrial IoT Gateway Systems",
      conference: "International Conference on Embedded Systems",
      date: "2023.05",
      authors: ["김임베디드", "정게이트웨이"],
      abstract: "산업용 IoT 게이트웨이 시스템에서의 실시간 데이터 처리 방법론"
    }
  ]
};