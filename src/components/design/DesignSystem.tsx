'use client'

import { motion } from 'framer-motion'
import { Cpu, Zap, Shield, Wifi, Instagram, Github, Mail, Smartphone } from 'lucide-react'

const DesignSystem = () => {
  // 색상 팔레트
  const colorPalette = [
    { name: 'Primary', class: 'bg-primary', hex: '#1E88E5' },
    { name: 'Secondary', class: 'bg-secondary', hex: '#F5F7FA' },
    { name: 'Accent', class: 'bg-accent', hex: '#16A085' },
    { name: 'Background', class: 'bg-background', hex: '#FFFFFF' },
    { name: 'Foreground', class: 'bg-foreground', hex: '#1E293B' },
    { name: 'Muted', class: 'bg-muted', hex: '#F8FAFC' },
    { name: 'Border', class: 'bg-border', hex: '#E2E8F0' }
  ]

  // 임베디드/IoT 테마 아이콘
  const themeIcons = [
    { icon: Cpu, name: 'Microcontroller', color: 'text-primary' },
    { icon: Zap, name: 'Power/Signal', color: 'text-accent' },
    { icon: Shield, name: 'Security', color: 'text-red-500' },
    { icon: Wifi, name: 'Wireless', color: 'text-blue-500' }
  ]

  // 타이포그래피 스케일
  const typography = [
    { name: 'Heading 1', class: 'text-4xl md:text-6xl font-bold', sample: '엄도윤' },
    { name: 'Heading 2', class: 'text-3xl md:text-4xl font-semibold', sample: 'About Me' },
    { name: 'Heading 3', class: 'text-2xl md:text-3xl font-medium', sample: 'Projects' },
    { name: 'Body Large', class: 'text-lg', sample: '임베디드 시스템 개발자' },
    { name: 'Body', class: 'text-base', sample: 'IoT 솔루션 전문가' },
    { name: 'Small', class: 'text-sm', sample: '2024.07 ~ 2025.06' }
  ]

  // 간격 시스템
  const spacing = [
    { name: 'xs', class: 'w-2 h-2', rem: '0.5rem', px: '8px' },
    { name: 'sm', class: 'w-4 h-4', rem: '1rem', px: '16px' },
    { name: 'md', class: 'w-6 h-6', rem: '1.5rem', px: '24px' },
    { name: 'lg', class: 'w-8 h-8', rem: '2rem', px: '32px' },
    { name: 'xl', class: 'w-12 h-12', rem: '3rem', px: '48px' },
    { name: '2xl', class: 'w-16 h-16', rem: '4rem', px: '64px' }
  ]

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            임베디드/IoT 포트폴리오 디자인 시스템
          </h1>
          <p className="text-lg text-muted-foreground">
            전문적이고 기술적인 느낌의 디자인 시스템
          </p>
        </motion.div>

        {/* 색상 팔레트 */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">색상 팔레트</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {colorPalette.map((color, index) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`${color.class} w-full h-20 rounded-lg mb-2 border border-border`} />
                <p className="text-sm font-medium text-foreground">{color.name}</p>
                <p className="text-xs text-muted-foreground">{color.hex}</p>
              </motion.div>
            ))}
          </div>
          
          {/* 다크모드 프리뷰 */}
          <div className="mt-8 p-6 bg-gray-900 rounded-xl">
            <h3 className="text-white text-lg font-medium mb-4">다크모드 프리뷰</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-blue-600 h-16 rounded-lg" />
              <div className="bg-slate-800 h-16 rounded-lg" />
              <div className="bg-emerald-500 h-16 rounded-lg" />
              <div className="bg-slate-700 h-16 rounded-lg" />
            </div>
          </div>
        </section>

        {/* 임베디드/IoT 테마 아이콘 */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">테마 아이콘</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {themeIcons.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <item.icon size={48} className={`mb-4 ${item.color}`} />
                <p className="text-sm font-medium text-center">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 타이포그래피 */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">타이포그래피</h2>
          <div className="space-y-6">
            {typography.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-8 p-4 bg-card rounded-lg border border-border"
              >
                <div className="w-24 text-sm text-muted-foreground">
                  {type.name}
                </div>
                <div className={type.class}>
                  {type.sample}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 간격 시스템 */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">간격 시스템</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {spacing.map((space, index) => (
              <motion.div
                key={space.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className={`${space.class} bg-primary rounded`} />
                </div>
                <p className="text-sm font-medium">{space.name}</p>
                <p className="text-xs text-muted-foreground">{space.rem}</p>
                <p className="text-xs text-muted-foreground">({space.px})</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 컴포넌트 프리뷰 */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">주요 컴포넌트</h2>
          
          {/* 네비게이션 프리뷰 */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-medium mb-4">네비게이션 바</h3>
              <div className="bg-background/80 backdrop-blur-md border border-border rounded-lg p-4 flex items-center justify-between">
                <div className="font-bold text-primary">Eom Doyoon</div>
                <div className="flex items-center space-x-6">
                  <span className="text-sm text-muted-foreground">About</span>
                  <span className="text-sm text-muted-foreground">Portfolio</span>
                  <span className="text-sm text-muted-foreground">Blog</span>
                  <span className="text-sm text-muted-foreground">Contact</span>
                  <Instagram size={18} className="text-muted-foreground" />
                  <Github size={18} className="text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* 프로젝트 카드 프리뷰 */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-medium mb-4">프로젝트 카드</h3>
              <div className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Cpu size={48} className="text-primary" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">IoT 모니터링 시스템</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    ESP32와 다양한 센서를 활용한 실시간 환경 모니터링
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">ESP32</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Arduino</span>
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">MQTT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 연락처 폼 프리뷰 */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-medium mb-4">연락처 폼</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-4">연락처 정보</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail size={18} className="text-primary" />
                      <span className="text-sm">tkdtlr1998@naver.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Smartphone size={18} className="text-primary" />
                      <span className="text-sm">010-3996-6258</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-6">
                    <Instagram size={20} className="text-pink-500" />
                    <Github size={20} className="text-foreground" />
                  </div>
                </div>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="이름"
                    className="w-full p-3 border border-border rounded-lg bg-background"
                  />
                  <input 
                    type="email" 
                    placeholder="이메일"
                    className="w-full p-3 border border-border rounded-lg bg-background"
                  />
                  <textarea 
                    placeholder="메시지"
                    rows={4}
                    className="w-full p-3 border border-border rounded-lg bg-background"
                  />
                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium">
                    메시지 보내기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 반응형 브레이크포인트 */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">반응형 브레이크포인트</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-medium mb-2">Mobile</h3>
              <p className="text-sm text-muted-foreground mb-4">&lt; 768px</p>
              <div className="text-xs space-y-1">
                <p>• 햄버거 메뉴</p>
                <p>• 1컬럼 레이아웃</p>
                <p>• 터치 친화적 UI</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-medium mb-2">Tablet</h3>
              <p className="text-sm text-muted-foreground mb-4">768px - 1024px</p>
              <div className="text-xs space-y-1">
                <p>• 2컬럼 그리드</p>
                <p>• 적응형 네비게이션</p>
                <p>• 중간 간격</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-medium mb-2">Desktop</h3>
              <p className="text-sm text-muted-foreground mb-4">&gt; 1024px</p>
              <div className="text-xs space-y-1">
                <p>• 풀 레이아웃</p>
                <p>• 3컬럼 그리드</p>
                <p>• 넓은 간격</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DesignSystem