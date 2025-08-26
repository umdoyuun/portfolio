import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Blog from '@/components/sections/Blog'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </div>
  )
}
