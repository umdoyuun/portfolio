import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import PerformanceMonitor from "@/components/analytics/PerformanceMonitor";
import { personalData } from "@/data/personal";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-doyun.vercel.app'),
  title: {
    default: "엄도윤 - 임베디드/IoT 소프트웨어 개발자",
    template: "%s | 엄도윤 포트폴리오"
  },
  description: "Matter Protocol, SmartThings 전문 임베디드 개발자 엄도윤의 포트폴리오. IoT 시스템, 임베디드 소프트웨어, Real-time Systems 전문.",
  keywords: "IoT, 임베디드, Matter, SmartThings, 개발자, 엄도윤, embedded, IoT developer, Matter Protocol, Real-time Systems, C/C++, Python, Arduino, ESP32, Raspberry Pi",
  authors: [{ name: personalData.name, url: personalData.social.github }],
  creator: personalData.name,
  publisher: personalData.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    title: "엄도윤 - 임베디드/IoT 소프트웨어 개발자",
    description: "Matter Protocol, SmartThings 전문 임베디드 개발자의 포트폴리오",
    siteName: "엄도윤 포트폴리오",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "엄도윤 - 임베디드/IoT 소프트웨어 개발자",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "엄도윤 - 임베디드/IoT 소프트웨어 개발자",
    description: "Matter Protocol, SmartThings 전문 임베디드 개발자의 포트폴리오",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: '/',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalData.name,
    "alternateName": personalData.nameEn,
    "jobTitle": personalData.title,
    "description": personalData.subtitle,
    "image": "/images/profile.jpg",
    "url": "https://portfolio-doyun.vercel.app",
    "sameAs": [
      personalData.social.github,
      personalData.social.blog,
      personalData.social.instagram,
    ],
    "email": personalData.contact.email,
    "telephone": personalData.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KR",
      "addressRegion": personalData.contact.location,
    },
    "knowsAbout": [
      "IoT Development",
      "Embedded Systems",
      "Matter Protocol",
      "SmartThings",
      "C/C++",
      "Python",
      "Real-time Systems",
      "Microcontrollers",
      "Arduino",
      "ESP32",
      "Raspberry Pi"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "삼성 청년 SW·AI 아카데미",
        "description": "12기 수료생"
      },
      {
        "@type": "EducationalOrganization", 
        "name": "수원대학교",
        "description": "정보통신공학과 학사"
      }
    ],
    "hasCredential": personalData.certifications.map(cert => ({
      "@type": "EducationalOccupationalCredential",
      "name": cert.name,
      "credentialCategory": "certification",
      "recognizedBy": {
        "@type": "Organization",
        "name": cert.organization
      }
    })),
    "worksFor": {
      "@type": "Organization",
      "name": "프리랜서",
      "description": "임베디드/IoT 시스템 개발"
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "엄도윤 포트폴리오",
    "description": "임베디드/IoT 소프트웨어 개발자 엄도윤의 포트폴리오",
    "url": "https://portfolio-doyun.vercel.app",
    "author": {
      "@type": "Person",
      "name": personalData.name
    },
    "inLanguage": "ko-KR",
    "copyrightYear": new Date().getFullYear(),
    "genre": "portfolio"
  };

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://portfolio-doyun.vercel.app" />
        
        {/* Preload critical fonts - 개발 환경에서 비활성화 */}
        {process.env.NODE_ENV === 'production' && (
          <link
            rel="preload"
            href="/_next/static/media/inter-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        )}
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
          
          {/* Performance Monitoring */}
          <PerformanceMonitor />
        </ThemeProvider>
      </body>
    </html>
  );
}