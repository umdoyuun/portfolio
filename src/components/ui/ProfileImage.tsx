'use client'

import { useState } from 'react'
import Image from 'next/image'
import { User } from 'lucide-react'

interface ProfileImageProps {
  src: string
  alt: string
  className?: string
}

const ProfileImage = ({ src, alt, className = "" }: ProfileImageProps) => {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="w-full h-full">
      {!imageError ? (
        <Image
          src={src}
          alt={alt}
          width={400}
          height={438}
          className={`w-full h-full object-cover transition-opacity duration-300 ${className}`}
          priority
          quality={85}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center">
          <div className="text-center">
            <User className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-sm">프로필 이미지</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileImage