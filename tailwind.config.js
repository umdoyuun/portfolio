/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'skeleton-wave': 'skeleton-wave 1.6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'skeleton-wave': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: 'hsl(var(--primary))',
              },
            },
            '[class~="lead"]': {
              color: 'inherit',
            },
            strong: {
              color: 'inherit',
              fontWeight: '600',
            },
            'h1, h2, h3, h4, h5, h6': {
              color: 'inherit',
              scrollMarginTop: '6rem',
            },
            code: {
              color: 'inherit',
              backgroundColor: 'hsl(var(--muted))',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'hsl(var(--muted))',
              border: '1px solid hsl(var(--border))',
            },
            blockquote: {
              borderLeftColor: 'hsl(var(--border))',
            },
          },
        },
      },
      // 성능 최적화를 위한 유틸리티 클래스
      willChange: {
        'transform-opacity': 'transform, opacity',
      },
      // 접근성을 위한 포커스 스타일
      focusRing: {
        DEFAULT: '0 0 0 2px hsl(var(--primary))',
        offset: '0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--primary))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // 커스텀 유틸리티 추가
    function({ addUtilities, theme }) {
      const newUtilities = {
        // 성능 최적화 유틸리티
        '.will-change-transform-opacity': {
          'will-change': 'transform, opacity',
        },
        '.will-change-auto': {
          'will-change': 'auto',
        },
        '.gpu-accelerated': {
          'transform': 'translateZ(0)',
          'backface-visibility': 'hidden',
          'perspective': '1000px',
        },
        // 접근성 유틸리티
        '.sr-only-focusable': {
          position: 'absolute !important',
          width: '1px !important',
          height: '1px !important',
          padding: '0 !important',
          margin: '-1px !important',
          overflow: 'hidden !important',
          clip: 'rect(0, 0, 0, 0) !important',
          whiteSpace: 'nowrap !important',
          border: '0 !important',
          '&:focus': {
            position: 'static !important',
            width: 'auto !important',
            height: 'auto !important',
            padding: 'inherit !important',
            margin: 'inherit !important',
            overflow: 'visible !important',
            clip: 'auto !important',
            whiteSpace: 'inherit !important',
          },
        },
        // 스켈레톤 로더 유틸리티
        '.skeleton-wave': {
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            transform: 'translateX(-100%)',
            background: `linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.2),
              transparent
            )`,
            animation: 'skeleton-wave 1.6s ease-in-out infinite',
          },
        },
        // 고대비 포커스 스타일
        '.focus-visible-enhanced': {
          '&:focus-visible': {
            outline: '2px solid hsl(var(--primary))',
            outlineOffset: '2px',
            boxShadow: theme('focusRing.offset'),
          },
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover', 'focus'])
    },
  ],
}