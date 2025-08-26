'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center space-y-6 px-4">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-gray-300 dark:text-gray-600">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">페이지를 찾을 수 없습니다</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button className="group">
              <Home className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
              홈으로 돌아가기
            </Button>
          </Link>
          
          <Button variant="outline" onClick={() => window.history.back()} className="group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            이전 페이지
          </Button>
        </div>
      </div>
    </div>
  )
}