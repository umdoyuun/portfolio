# 컴포넌트 명세서

## 📁 컴포넌트 구조

```
src/components/
├── layout/
│   ├── Navigation.tsx          ✅ 완료
│   ├── MobileMenu.tsx          → Navigation에 통합
│   └── Footer.tsx              → 업데이트 필요
├── sections/
│   ├── AboutSection.tsx        → 새로 구현 필요
│   ├── PortfolioSection.tsx    → 새로 구현 필요
│   ├── BlogSection.tsx         → 새로 구현 필요
│   └── ContactSection.tsx      → 업데이트 필요
├── ui/
│   ├── ProjectDialog.tsx       → 새로 구현 필요
│   ├── ImageSlider.tsx         → 새로 구현 필요
│   ├── BlogReader.tsx          → 새로 구현 필요
│   ├── ContactForm.tsx         → 새로 구현 필요
│   ├── ThemeToggle.tsx         ✅ 완료
│   ├── Button.tsx              ✅ 완료
│   └── Card.tsx                ✅ 완료
└── design/
    └── DesignSystem.tsx        ✅ 완료
```

---

## 🧭 Navigation.tsx

### Props Interface
```typescript
interface NavigationProps {
  // 현재는 props 없음 (정적 구성)
}
```

### 주요 기능
- [x] 스크롤 기반 배경 변화
- [x] 부드러운 섹션 스크롤  
- [x] 모바일 햄버거 메뉴
- [x] 소셜 링크 통합
- [x] 다크모드 토글
- [x] Framer Motion 애니메이션

### 스타일 특징
- 최소 높이: `h-16` (64px)
- 스크롤 시: `bg-background/95 backdrop-blur-md`
- Z-index: `z-50` (최상단)
- 반응형 브레이크포인트: `md:` (768px)

---

## 📝 AboutSection.tsx (구현 필요)

### Props Interface
```typescript
interface AboutSectionProps {
  data: PersonalData
}
```

### 레이아웃 구조
```jsx
<section id="about" className="min-h-screen pt-16 pb-20">
  <div className="max-w-6xl mx-auto px-4">
    
    {/* 개인 정보 헤더 */}
    <div className="grid md:grid-cols-2 gap-12 mb-16">
      <div className="text-center md:text-left">
        <img src="/profile.jpg" className="w-64 h-64 rounded-full mx-auto md:mx-0 mb-8" />
      </div>
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">{data.name}</h1>
        <h2 className="text-xl text-primary">{data.title}</h2>
        <p className="text-muted-foreground leading-relaxed">{data.bio}</p>
        
        {/* 연락처 */}
        <div className="space-y-2">
          <ContactItem icon={Mail} text={data.contact.email} />
          <ContactItem icon={Phone} text={data.contact.phone} />
          <ContactItem icon={MapPin} text={data.contact.location} />
        </div>
        
        {/* 소셜 링크 */}
        <SocialLinks data={data.social} />
      </div>
    </div>

    {/* 교육 과정 */}
    <EducationCards data={data.education} />
    
    {/* 수상 이력 */}
    <AwardsGrid data={data.awards} />
    
    {/* 자격증 */}
    <CertificationsGrid data={data.certifications} />
    
    {/* 기술 스택 */}
    <SkillsOverview data={data.skills} />
    
  </div>
</section>
```

### 하위 컴포넌트
- `ContactItem`: 연락처 정보 표시
- `SocialLinks`: 소셜 미디어 링크
- `EducationCards`: 교육 과정 카드들
- `AwardsGrid`: 수상 이력 그리드
- `CertificationsGrid`: 자격증 그리드
- `SkillsOverview`: 기술 스택 요약

---

## 🎨 PortfolioSection.tsx (구현 필요)

### Props Interface
```typescript
interface PortfolioSectionProps {
  projects: ProjectData[]
  isAdmin?: boolean
}
```

### 레이아웃 구조
```jsx
<section id="portfolio" className="py-20 bg-secondary/20">
  <div className="max-w-6xl mx-auto px-4">
    
    {/* 섹션 헤더 */}
    <SectionHeader 
      title="Portfolio" 
      subtitle="임베디드/IoT 프로젝트 모음집"
    />
    
    {/* 프로젝트 그리드 */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(project => (
        <ProjectCard 
          key={project.id}
          project={project}
          onClick={() => openDialog(project)}
        />
      ))}
    </div>
    
    {/* 관리자 버튼 */}
    {isAdmin && (
      <AdminControls onAdd={addProject} onEdit={editProject} />
    )}
    
  </div>
</section>
```

### 하위 컴포넌트
- `SectionHeader`: 섹션 제목
- `ProjectCard`: 프로젝트 카드
- `AdminControls`: 관리자 제어 버튼

---

## 🖼️ ProjectDialog.tsx (구현 필요)

### Props Interface
```typescript
interface ProjectDialogProps {
  project: ProjectData | null
  isOpen: boolean
  onClose: () => void
}
```

### 레이아웃 구조
```jsx
<Dialog open={isOpen} onOpenChange={onClose}>
  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
    
    {/* 헤더 */}
    <DialogHeader>
      <DialogTitle>{project?.title}</DialogTitle>
    </DialogHeader>
    
    {/* 이미지 슬라이더 */}
    <ImageSlider 
      images={project?.images} 
      alt={project?.title}
    />
    
    {/* 프로젝트 정보 */}
    <div className="space-y-6 mt-6">
      <ProjectOverview overview={project?.details.overview} />
      <ProjectMeta 
        teamSize={project?.details.teamSize}
        role={project?.details.role}
        duration={project?.details.duration}
      />
      <TechStack stack={project?.details.techStack} />
      <FeatureList features={project?.details.features} />
      <ProjectReflection reflection={project?.details.reflection} />
      <ProjectLinks 
        github={project?.details.github}
        demo={project?.details.demo}
      />
    </div>
    
  </DialogContent>
</Dialog>
```

### 하위 컴포넌트
- `ImageSlider`: 이미지 슬라이더 (Embla Carousel)
- `ProjectOverview`: 프로젝트 개요
- `ProjectMeta`: 프로젝트 메타 정보
- `TechStack`: 기술 스택 태그
- `FeatureList`: 주요 기능 리스트
- `ProjectReflection`: 회고/배운점
- `ProjectLinks`: GitHub/Demo 링크

---

## 🔄 ImageSlider.tsx (구현 필요)

### Props Interface
```typescript
interface ImageSliderProps {
  images: string[]
  alt: string
  className?: string
}
```

### 주요 기능
- [x] Embla Carousel 사용
- [x] 스와이프 제스처 지원
- [x] 하단 네비게이션 도트
- [x] 좌우 화살표 버튼
- [x] 자동 재생 (선택적)
- [x] 터치/마우스 드래그

### 구현 예시
```jsx
const ImageSlider = ({ images, alt, className = "" }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false
  })
  
  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <img 
                src={image} 
                alt={`${alt} ${index + 1}`}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* 네비게이션 도트 */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              selectedIndex === index ? 'bg-primary' : 'bg-muted'
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}
```

---

## 📰 BlogSection.tsx (구현 필요)

### Props Interface
```typescript
interface BlogSectionProps {
  isAdmin?: boolean
}
```

### 레이아웃 구조 (3단 레이아웃)
```jsx
<section id="blog" className="py-20">
  <div className="max-w-7xl mx-auto px-4">
    
    <SectionHeader title="Blog" subtitle="기술 블로그" />
    
    <div className="grid lg:grid-cols-12 gap-8">
      
      {/* 좌측 카테고리 (3/12) */}
      <div className="lg:col-span-3">
        <CategoryList 
          categories={blogConfig.categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        
        {/* 관리자 업데이트 버튼 */}
        {isAdmin && (
          <UpdateButton onClick={updateRSSFeed} />
        )}
      </div>
      
      {/* 가운데 글 리스트 (4/12) */}
      <div className="lg:col-span-4">
        <PostList 
          posts={filteredPosts}
          selectedPost={selectedPost}
          onSelectPost={setSelectedPost}
        />
      </div>
      
      {/* 우측 글 내용 (5/12) */}
      <div className="lg:col-span-5">
        <PostReader post={selectedPost} />
      </div>
      
    </div>
  </div>
</section>
```

### 하위 컴포넌트
- `CategoryList`: 카테고리 필터
- `PostList`: 블로그 글 리스트
- `PostReader`: 선택된 글 내용 표시
- `UpdateButton`: 관리자용 RSS 업데이트

---

## 🗂️ BlogReader.tsx (구현 필요)

### Props Interface
```typescript
interface BlogReaderProps {
  post: BlogPost | null
}

interface BlogPost {
  title: string
  content: string
  date: string
  category: string
  url: string
  author: string
}
```

### RSS 파싱 Hook
```typescript
const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const fetchPosts = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/blog')
      const data = await response.json()
      setPosts(data.posts)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    fetchPosts()
  }, [])
  
  return { posts, loading, error, refetch: fetchPosts }
}
```

---

## 📞 ContactSection.tsx (업데이트 필요)

### Props Interface
```typescript
interface ContactSectionProps {
  personalData: PersonalData
}
```

### 레이아웃 구조 (2단 레이아웃)
```jsx
<section id="contact" className="py-20 bg-secondary/20">
  <div className="max-w-6xl mx-auto px-4">
    
    <SectionHeader 
      title="Contact" 
      subtitle="함께 프로젝트를 만들어보세요"
    />
    
    <div className="grid md:grid-cols-2 gap-12">
      
      {/* 좌측 연락처 정보 */}
      <div className="space-y-8">
        <ContactInfo data={personalData} />
        <SocialLinks data={personalData.social} />
        <LocationMap />
      </div>
      
      {/* 우측 메일 전송 폼 */}
      <ContactForm 
        onSubmit={sendEmail}
        loading={isLoading}
      />
      
    </div>
  </div>
</section>
```

### 하위 컴포넌트
- `ContactInfo`: 연락처 정보 표시
- `ContactForm`: 메일 전송 폼
- `LocationMap`: 위치 표시 (선택적)

---

## 📮 ContactForm.tsx (구현 필요)

### Props Interface
```typescript
interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>
  loading: boolean
}

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}
```

### Gmail SMTP 연동
```typescript
// pages/api/contact.ts
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  
  const { name, email, subject, message } = req.body
  
  // Nodemailer Gmail SMTP 설정
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  })
  
  const mailOptions = {
    from: email,
    to: 'tkdtlr1998@naver.com',
    subject: `[포트폴리오] ${subject}`,
    html: `
      <h2>포트폴리오 문의</h2>
      <p><strong>이름:</strong> ${name}</p>
      <p><strong>이메일:</strong> ${email}</p>
      <p><strong>제목:</strong> ${subject}</p>
      <p><strong>메시지:</strong></p>
      <p>${message}</p>
    `
  }
  
  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ message: '메일이 성공적으로 전송되었습니다.' })
  } catch (error) {
    res.status(500).json({ message: '메일 전송에 실패했습니다.' })
  }
}
```

---

## 🔐 관리자 인증 시스템

### 간단한 비밀번호 기반 인증
```typescript
// hooks/useAdmin.ts
const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  
  const login = (password: string) => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAdmin(true)
      localStorage.setItem('isAdmin', 'true')
      return true
    }
    return false
  }
  
  const logout = () => {
    setIsAdmin(false)
    localStorage.removeItem('isAdmin')
  }
  
  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin')
    if (adminStatus === 'true') {
      setIsAdmin(true)
    }
  }, [])
  
  return { isAdmin, login, logout }
}
```

---

## 📱 반응형 설계

### 브레이크포인트 전략
```css
/* Mobile First 접근법 */
.container {
  /* Mobile: < 768px */
  padding: 1rem;
  
  /* Tablet: 768px - 1024px */
  @media (min-width: 768px) {
    padding: 2rem;
  }
  
  /* Desktop: > 1024px */
  @media (min-width: 1024px) {
    padding: 3rem;
  }
}

/* Grid 레이아웃 */
.grid-responsive {
  display: grid;
  grid-template-columns: 1fr;        /* Mobile: 1컬럼 */
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;  /* Tablet: 2컬럼 */
    gap: 2rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);  /* Desktop: 3컬럼 */
    gap: 3rem;
  }
}
```

---

## 🎯 애니메이션 시스템

### Framer Motion 패턴
```typescript
// 공통 애니메이션 variants
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: 'backOut' }
}

// 사용 예시
<motion.div
  variants={staggerChildren}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
>
  {items.map((item, index) => (
    <motion.div
      key={index}
      variants={fadeInUp}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

## 🚀 성능 최적화 전략

### 1. 이미지 최적화
- Next.js Image 컴포넌트 사용
- WebP/AVIF 포맷 우선 제공
- Lazy loading 적용
- Blur placeholder

### 2. 코드 분할
- Dynamic imports for modals/dialogs
- Route-based code splitting
- Component lazy loading

### 3. 폰트 최적화
- Google Fonts preload
- Font display: swap
- Subset loading

### 4. SEO 최적화
- 구조화된 메타데이터
- Open Graph 이미지
- 시맨틱 HTML 구조
- Schema.org 마크업

이 명세서를 기반으로 단계적으로 컴포넌트를 구현하면 전문적이고 성능이 우수한 포트폴리오를 완성할 수 있습니다.