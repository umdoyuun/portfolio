'use client'

import { cn } from '@/lib/utils'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted/50",
        className
      )}
      {...props}
    />
  )
}

// 프리셋 스켈레톤 컴포넌트들
export const CardSkeleton = () => (
  <div className="space-y-4 p-6 bg-background border rounded-lg shadow-sm">
    <Skeleton className="h-4 w-3/4" />
    <div className="space-y-2">
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
      <Skeleton className="h-3 w-4/6" />
    </div>
    <div className="flex space-x-2">
      <Skeleton className="h-6 w-16 rounded-full" />
      <Skeleton className="h-6 w-20 rounded-full" />
    </div>
  </div>
)

export const ProjectCardSkeleton = () => (
  <div className="space-y-4 bg-background border rounded-lg overflow-hidden">
    <Skeleton className="h-48 w-full" />
    <div className="p-6 space-y-4">
      <Skeleton className="h-6 w-3/4" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-14 rounded-full" />
      </div>
    </div>
  </div>
)

export const BlogPostSkeleton = () => (
  <div className="space-y-4 p-4 border-b">
    <div className="flex items-start justify-between">
      <div className="space-y-2 flex-1">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <Skeleton className="h-12 w-12 rounded-full ml-4" />
    </div>
    <div className="flex space-x-2">
      <Skeleton className="h-5 w-16 rounded-full" />
      <Skeleton className="h-5 w-20" />
    </div>
  </div>
)

export const SkillCardSkeleton = () => (
  <div className="space-y-3 p-4 bg-background border rounded-lg">
    <div className="flex items-center space-x-3">
      <Skeleton className="h-8 w-8 rounded-full" />
      <Skeleton className="h-5 w-24" />
    </div>
    <Skeleton className="h-2 w-full rounded-full" />
    <div className="flex justify-between">
      <Skeleton className="h-3 w-16" />
      <Skeleton className="h-3 w-8" />
    </div>
  </div>
)

export const TableSkeleton = ({ rows = 5, cols = 4 }: { rows?: number; cols?: number }) => (
  <div className="space-y-3">
    <div className="flex space-x-4">
      {Array.from({ length: cols }).map((_, i) => (
        <Skeleton key={i} className="h-10 flex-1" />
      ))}
    </div>
    {Array.from({ length: rows }).map((_, i) => (
      <div key={i} className="flex space-x-4">
        {Array.from({ length: cols }).map((_, j) => (
          <Skeleton key={j} className="h-8 flex-1" />
        ))}
      </div>
    ))}
  </div>
)

// 섹션별 스켈레톤 로더
export const HeroSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center p-4">
    <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-16 w-full" />
        </div>
        <Skeleton className="h-12 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-24 rounded-full" />
          ))}
        </div>
        <div className="flex space-x-4">
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-24" />
        </div>
      </div>
      <div className="hidden lg:block">
        <Skeleton className="h-80 w-80 rounded-full mx-auto" />
      </div>
    </div>
  </div>
)

export const AboutSkeleton = () => (
  <div className="max-w-4xl mx-auto space-y-8 p-6">
    <div className="text-center space-y-4">
      <Skeleton className="h-10 w-48 mx-auto" />
      <Skeleton className="h-4 w-96 mx-auto" />
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <Skeleton className="h-6 w-32" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      </div>
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-3">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-4 w-32" />
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Skeleton