// 실제 사용되는 기본 정보만 유지 (Footer, About, Hero에서 사용)
export const portfolioData = {
  personal: {
    name: "엄도윤",
    title: "Embedded/IoT Systems Developer", 
    subtitle: "하드웨어와 소프트웨어의 융합을 통한 혁신적인 IoT 솔루션 개발",
    bio: "마이크로컨트롤러부터 IoT 클라우드 플랫폼까지, 전체 임베디드 시스템 스택에 대한 깊이 있는 이해를 바탕으로 현실적이고 효율적인 솔루션을 제공합니다.",
    email: "tkdtlr1998@naver.com",
    phone: "+82-10-3996-6258",
    location: "Icheon-si, Gyeonggi-do, Korea",
    github: "https://github.com/umdoyuun"
  },

  // About 컴포넌트에서 사용되는 publications만 유지
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