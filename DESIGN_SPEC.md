# 임베디드/IoT 개발자 포트폴리오 - 디자인 명세서

## 🎯 디자인 목표
- 미니멀하고 전문적인 디자인 (참고: adhamdannaway.com)
- 대기업 채용담당자에게 어필할 수 있는 세련된 UX
- 임베디드/IoT 전문성을 강조하는 시각적 요소
- 완벽한 반응형 + 다크모드 지원

---

## 📐 전체 레이아웃 아키텍처

### 구조
```
┌─────────────────────────────────────────┐
│ Header (Fixed Navigation)               │
├─────────────────────────────────────────┤
│ About Section (Hero + Personal Info)   │
├─────────────────────────────────────────┤
│ Portfolio Section (Projects Grid)      │
├─────────────────────────────────────────┤
│ Blog Section (RSS + Categories)        │
├─────────────────────────────────────────┤
│ Contact Section (Form + Social)        │
├─────────────────────────────────────────┤
│ Footer (Copyright)                     │
└─────────────────────────────────────────┘
```

---

## 🧭 네비게이션 시스템 설계

### Header 구조
```
┌─────────────────────────────────────────────────────────────┐
│ [LOGO] About Portfolio Blog Contact    [IG][GH][THEME][☰] │
└─────────────────────────────────────────────────────────────┘
```

### 네비게이션 메뉴
- **About**: 개인 소개 및 이력
- **Portfolio**: 프로젝트 showcase
- **Blog**: 티스토리 RSS 연동 블로그
- **Contact**: 연락처 및 메일 폼

### 우측 액션 영역
- **Instagram** 아이콘 링크
- **GitHub** 아이콘 링크  
- **다크모드 토글** 버튼
- **모바일 햄버거** 메뉴 (768px 이하)

### 스크롤 효과
- 기본 상태: `bg-transparent`
- 스크롤 시: `bg-background/95 backdrop-blur-md border-b`
- 부드러운 transition (300ms ease)

---

## 📱 반응형 브레이크포인트

| 디바이스 | 화면 크기 | 레이아웃 변화 |
|----------|-----------|---------------|
| Mobile | < 768px | 햄버거 메뉴, 1컬럼 |
| Tablet | 768px - 1024px | 2컬럼 그리드 |
| Desktop | > 1024px | 풀 레이아웃, 3컬럼 |

---

## 🎨 색상 시스템 (임베디드/IoT 테마)

### 라이트 모드
```css
:root {
  /* Primary - Circuit Blue */
  --primary: 220 91% 52%;        /* #1E88E5 - 회로 기판 블루 */
  --primary-foreground: 0 0% 98%;
  
  /* Secondary - Tech Gray */
  --secondary: 215 25% 96%;      /* #F5F7FA - 클린 테크 그레이 */
  --secondary-foreground: 215 25% 25%;
  
  /* Accent - Signal Green */  
  --accent: 142 76% 36%;         /* #16A085 - 신호/상태 그린 */
  --accent-foreground: 0 0% 98%;
  
  /* Background */
  --background: 0 0% 100%;
  --foreground: 215 25% 15%;
  
  /* Muted */
  --muted: 215 25% 96%;
  --muted-foreground: 215 25% 45%;
  
  /* Borders */
  --border: 215 25% 90%;
  --ring: 220 91% 52%;
}
```

### 다크 모드  
```css
.dark {
  /* Primary - Bright Circuit Blue */
  --primary: 220 91% 65%;        /* #3B9EFF */
  --primary-foreground: 215 25% 15%;
  
  /* Secondary - Dark Tech Panel */
  --secondary: 215 25% 15%;      /* #1E293B */
  --secondary-foreground: 215 25% 85%;
  
  /* Accent - Neon Signal Green */
  --accent: 142 76% 50%;         /* #1ABC9C */
  --accent-foreground: 215 25% 15%;
  
  /* Background - Dark Circuit Board */
  --background: 215 30% 8%;      /* #0F172A */
  --foreground: 215 25% 90%;
  
  /* Muted */
  --muted: 215 25% 18%;
  --muted-foreground: 215 25% 65%;
  
  /* Borders */
  --border: 215 25% 20%;
  --ring: 220 91% 65%;
}
```

---

## ✨ 애니메이션 시스템

### 페이지 전환
- **Fade In**: 0.6s ease-out
- **Slide Up**: 0.5s ease-out (20px → 0px)
- **Stagger**: 섹션별 0.1s 지연

### 호버 효과
- **네비게이션**: 하단 바 width 전환 (0.3s ease)
- **버튼**: scale(1.02) + shadow 증가 (0.2s ease)
- **카드**: translateY(-4px) + shadow (0.3s ease)

### 스크롤 애니메이션
- **IntersectionObserver** 기반
- **Threshold**: 0.1 (10% 노출 시 트리거)
- **한 번만 실행** (once: true)

---

## 📄 섹션별 상세 설계

### 1. About 섹션

#### 개인 정보
```yaml
name: "엄도윤 (Eom Doyoon)"
title: "Embedded/IoT Systems Developer"
subtitle: "삼성 청년 SW·AI 아카데미 12기 교육생"

contact:
  phone: "010-3996-6258"
  email: "tkdtlr1998@naver.com"
  
education:
  university: "수원대학교 정보통신학과 (2017.03~2024.02)"
  academy: "삼성 청년 SW·AI 아카데미 12기 (2024.07~2025.06)"

social:
  instagram: "https://www.instagram.com/um_doyuun_/"
  github: "https://github.com/umdoyuun"
```

#### 레이아웃 구조
```
┌─────────────────────────────────────────┐
│ [프로필 이미지]  │  [개인정보]           │
│                  │  • 이름/타이틀        │
│ 250x250 원형     │  • 연락처            │
│ 이미지           │  • 교육과정           │
│                  │  [소셜 링크 버튼들]   │
└─────────────────────────────────────────┘
│                                         │
│ [수상이력 카드들]                       │
│ [자격증 카드들]                         │
└─────────────────────────────────────────┘
```

### 2. Portfolio 섹션

#### 프로젝트 구조
```yaml
projects:
  - id: 1
    title: "프로젝트 A"
    description: "간단한 설명"
    thumbnail: "/images/project1-thumb.jpg"
    images: ["/images/p1-1.jpg", "/images/p1-2.jpg"]
    details:
      overview: "상세 개요"
      team_size: "4명"
      role: "백엔드 개발"
      duration: "3개월"
      tech_stack: ["Spring", "MySQL", "AWS"]
      reflection: "회고 내용"
```

#### 다이얼로그 레이아웃
```
┌─────────────────────────────────────────┐
│ [X]                          프로젝트 A  │
├─────────────────────────────────────────┤
│ [이미지 슬라이더]                       │
│ ← [IMG] → 　　　　　[● ○ ○]            │
├─────────────────────────────────────────┤
│ 개요: ...                               │
│ 인원: 4명   역할: 백엔드   기간: 3개월  │
│ 기술스택: [Spring] [MySQL] [AWS]        │
│ 회고: ...                               │
└─────────────────────────────────────────┘
```

### 3. Blog 섹션

#### RSS 연동 구조
```yaml
blog:
  rss_url: "https://doyun98.tistory.com/rss"
  categories:
    - "임베디드"
    - "Matter"  
    - "알고리즘"
    - "개발도구"
    - "기타"
```

#### 레이아웃 (3단 구조)
```
┌────────┬─────────────┬─────────────┐
│카테고리 │  글 리스트   │  글 내용    │
│        │             │             │
│• 임베디드│ □ 제목1    │ <글 내용   │ 
│• Matter │ □ 제목2    │  표시>     │
│• 알고리즘│ □ 제목3    │             │
│• 개발도구│ □ 제목4    │             │
│• 기타   │            │             │
│        │            │             │
│[업데이트]│            │             │
└────────┴─────────────┴─────────────┘
```

### 4. Contact 섹션

#### 레이아웃
```
┌─────────────────────────────────────────┐
│ 연락처 정보          │  메일 전송 폼    │
│                     │                  │
│ 📧 tkdtlr1998@...   │ [이름 입력]      │
│ 📱 010-3996-6258    │ [이메일 입력]    │
│                     │ [제목 입력]      │
│ [Instagram] [GitHub]│ [메시지 입력]    │
│                     │ [전송 버튼]      │
└─────────────────────────────────────────┘
```

---

## 🔧 기술적 구현 요구사항

### 컴포넌트 구조
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # 메인 네비게이션
│   │   ├── MobileMenu.tsx          # 모바일 햄버거 메뉴
│   │   └── Footer.tsx              # 푸터
│   ├── sections/
│   │   ├── AboutSection.tsx        # 개인 정보 + 이력
│   │   ├── PortfolioSection.tsx    # 프로젝트 그리드
│   │   ├── BlogSection.tsx         # RSS 블로그
│   │   └── ContactSection.tsx      # 연락 폼
│   ├── ui/
│   │   ├── ProjectDialog.tsx       # 프로젝트 상세 모달
│   │   ├── ImageSlider.tsx         # 이미지 슬라이더
│   │   ├── BlogReader.tsx          # RSS 파서
│   │   └── ContactForm.tsx         # 메일 전송 폼
│   └── common/
│       ├── SocialLinks.tsx         # 소셜 링크
│       ├── ThemeToggle.tsx         # 다크모드 토글
│       └── ScrollToTop.tsx         # 상단 이동 버튼
```

### 라이브러리 요구사항
```json
{
  "dependencies": {
    "framer-motion": "^11.0.0",
    "next-themes": "^0.3.0", 
    "rss-parser": "^3.13.0",
    "react-intersection-observer": "^9.5.0",
    "embla-carousel-react": "^8.0.0",
    "nodemailer": "^6.9.0",
    "@radix-ui/react-dialog": "^1.0.0",
    "@radix-ui/react-toast": "^1.1.0"
  }
}
```

### API 엔드포인트
```yaml
endpoints:
  - path: "/api/contact"
    method: "POST"
    purpose: "Gmail SMTP 메일 전송"
    
  - path: "/api/blog"  
    method: "GET"
    purpose: "티스토리 RSS 파싱"
    
  - path: "/api/admin/projects"
    method: "PUT" 
    purpose: "관리자 프로젝트 수정"
```

---

## 🎬 인터랙션 시나리오

### 1. 네비게이션 클릭
```
사용자가 "Portfolio" 클릭
→ smooth scroll to #portfolio (800ms)
→ 해당 섹션 fade-in 애니메이션
→ 네비게이션 active 상태 업데이트
```

### 2. 프로젝트 카드 클릭  
```
프로젝트 카드 클릭
→ 다이얼로그 fade-in (300ms)
→ 이미지 슬라이더 초기화
→ 상세 정보 stagger 애니메이션
```

### 3. 다크모드 토글
```
토글 버튼 클릭
→ 테마 변경 (next-themes)
→ 모든 색상 smooth transition (500ms)
→ 로컬 스토리지에 저장
```

### 4. 모바일 햄버거 메뉴
```
햄버거 아이콘 클릭
→ 오버레이 fade-in (200ms)
→ 메뉴 slide-down (300ms)
→ 메뉴 항목들 stagger (50ms 간격)
```

---

## 📏 간격 및 타이포그래피

### 간격 시스템
```css
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 1rem;      /* 16px */
--spacing-md: 1.5rem;    /* 24px */
--spacing-lg: 2rem;      /* 32px */
--spacing-xl: 3rem;      /* 48px */
--spacing-2xl: 4rem;     /* 64px */
--spacing-3xl: 6rem;     /* 96px */
```

### 폰트 시스템
```css
/* Headers */
h1: font-size: clamp(2.5rem, 5vw, 4rem); /* 40px - 64px */
h2: font-size: clamp(2rem, 4vw, 3rem);   /* 32px - 48px */
h3: font-size: clamp(1.5rem, 3vw, 2rem); /* 24px - 32px */

/* Body */
body: font-size: clamp(1rem, 2.5vw, 1.125rem); /* 16px - 18px */
small: font-size: 0.875rem; /* 14px */

/* Line Heights */
--line-height-tight: 1.25;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
```

---

## 🚀 성능 최적화

### 이미지 최적화
- Next.js Image 컴포넌트 사용
- WebP 포맷 우선 제공
- Lazy loading 적용
- Blur placeholder

### 번들 최적화  
- Dynamic imports for dialogs
- Tree shaking 최적화
- CSS-in-JS 최소화
- 폰트 preload

### SEO 최적화
```yaml
meta:
  title: "엄도윤 | 임베디드/IoT 개발자 포트폴리오"
  description: "삼성 청년 SW·AI 아카데미 교육생, 임베디드 시스템과 IoT 솔루션 전문 개발자"
  keywords: "임베디드, IoT, 개발자, 삼성, 수원대학교, 포트폴리오"
  og:image: "/images/og-image.jpg"
```

---

이 디자인 명세서를 기반으로 단계적으로 구현하여 전문적이고 인상적인 포트폴리오를 완성할 수 있습니다.