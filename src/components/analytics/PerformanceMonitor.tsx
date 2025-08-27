'use client'

import { useEffect } from 'react'

interface WebVitalsMetric {
  name: string
  value: number
  id: string
  navigationType: string
}

interface GTagFunction {
  (command: string, eventName: string, parameters: Record<string, unknown>): void
}

const PerformanceMonitor = () => {
  useEffect(() => {
    // Core Web Vitals 측정
    const measureCoreWebVitals = async () => {
      try {
        if (typeof window !== 'undefined') {
          const { onCLS, onINP, onFCP, onLCP, onTTFB } = await import('web-vitals')
          
          const sendToAnalytics = (metric: WebVitalsMetric) => {
            // 개발 환경에서는 콘솔에 로그
            if (process.env.NODE_ENV === 'development') {
              console.log('Core Web Vitals:', {
                name: metric.name,
                value: metric.value,
                id: metric.id,
                navigationType: metric.navigationType,
              })
            }

            // 프로덕션 환경에서는 분석 서비스에 전송
            if (process.env.NODE_ENV === 'production') {
              // Google Analytics 4로 전송 예시
              if (typeof window !== 'undefined' && 'gtag' in window) {
                const gtag = (window as typeof window & { gtag: GTagFunction }).gtag
                gtag('event', metric.name, {
                  custom_map: { metric_id: 'custom_metric' },
                  custom_metric: metric.value,
                  event_category: 'Core Web Vitals',
                  event_label: metric.id,
                  non_interaction: true,
                })
              }
            }
          }

          // Core Web Vitals 측정
          onCLS(sendToAnalytics)
          onINP(sendToAnalytics)
          onFCP(sendToAnalytics)
          onLCP(sendToAnalytics)
          onTTFB(sendToAnalytics)
        }
      } catch (error) {
        console.warn('Web Vitals 측정 실패:', error)
      }
    }

    // Performance API를 통한 추가 메트릭 수집
    const measureCustomMetrics = () => {
      if (typeof window === 'undefined' || !('performance' in window)) return

      // Navigation Timing API
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        const metrics = {
          dns: navigation.domainLookupEnd - navigation.domainLookupStart,
          connection: navigation.connectEnd - navigation.connectStart,
          request: navigation.responseStart - navigation.requestStart,
          response: navigation.responseEnd - navigation.responseStart,
          domParsing: navigation.domInteractive - navigation.responseEnd,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        }

        if (process.env.NODE_ENV === 'development') {
          console.log('Navigation Timing:', metrics)
        }
      }

      // Resource Timing API - 리소스 로딩 성능
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
      const slowResources = resources.filter(resource => resource.duration > 1000)
      
      if (slowResources.length > 0 && process.env.NODE_ENV === 'development') {
        console.warn('느린 리소스들:', slowResources.map(r => ({
          name: r.name,
          duration: r.duration,
          size: r.transferSize,
        })))
      }
    }

    // 메모리 사용량 모니터링 (Chrome만 지원)
    const measureMemoryUsage = () => {
      if (typeof window === 'undefined') return
      
      const memory = (performance as PerformanceWithMemory).memory
      if (memory) {
        const memoryInfo = {
          usedJSHeapSize: memory.usedJSHeapSize / 1024 / 1024, // MB
          totalJSHeapSize: memory.totalJSHeapSize / 1024 / 1024,
          jsHeapSizeLimit: memory.jsHeapSizeLimit / 1024 / 1024,
        }

        if (process.env.NODE_ENV === 'development') {
          console.log('메모리 사용량:', memoryInfo)
        }
      }
    }

    // First Paint, First Contentful Paint 측정
    const measurePaintMetrics = () => {
      if (typeof window === 'undefined') return

      const paintEntries = performance.getEntriesByType('paint')
      paintEntries.forEach(entry => {
        if (process.env.NODE_ENV === 'development') {
          console.log(`${entry.name}: ${entry.startTime}ms`)
        }
      })
    }

    // 페이지 로드 완료 후 메트릭 수집
    const collectMetrics = () => {
      measureCoreWebVitals()
      measureCustomMetrics()
      measureMemoryUsage()
      measurePaintMetrics()
    }

    // 페이지 로드 완료 시 실행
    if (document.readyState === 'complete') {
      collectMetrics()
    } else {
      window.addEventListener('load', collectMetrics)
    }

    // 페이지 이탈 시 최종 메트릭 수집
    const handleBeforeUnload = () => {
      measureMemoryUsage()
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('load', collectMetrics)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  // 이 컴포넌트는 UI를 렌더링하지 않음
  return null
}

// Chrome의 performance.memory 인터페이스 타입 정의
interface PerformanceWithMemory extends Performance {
  memory?: {
    usedJSHeapSize: number
    totalJSHeapSize: number
    jsHeapSizeLimit: number
  }
}

export default PerformanceMonitor