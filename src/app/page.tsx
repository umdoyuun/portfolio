'use client'

import HeroSection from '@/components/sections/HeroSection'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Blog from '@/components/sections/Blog'
import Contact from '@/components/sections/Contact'
import dynamic from 'next/dynamic'

const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), {
  ssr: false,
  loading: () => (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="h-10 w-32 bg-muted rounded mx-auto mb-4 animate-pulse"></div>
          <div className="w-20 h-1 bg-muted mx-auto rounded-full animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="h-[1082px] bg-muted rounded-lg animate-pulse"></div>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <div className="h-32 bg-muted rounded-lg animate-pulse"></div>
            <div className="h-[700px] bg-muted rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
})

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
