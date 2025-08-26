# Vercel 배포 가이드

## 1. 배포 단계

### GitHub에서 배포
1. 코드를 GitHub 리포지토리에 푸시
2. [Vercel](https://vercel.com)에서 GitHub 연결
3. 프로젝트 임포트 후 배포 설정

### 환경 변수 설정
Vercel 대시보드 → Settings → Environment Variables에서 다음 변수들을 추가:

```
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=your-app-password
TARGET_EMAIL=your-target-email@example.com
NODE_ENV=production
```

## 2. Gmail 앱 비밀번호 설정

1. Google 계정 → 보안 → 2단계 인증 활성화
2. 앱 비밀번호 생성
3. 생성된 16자리 비밀번호를 `GMAIL_APP_PASSWORD`에 설정

## 3. 배포 후 확인사항

- [ ] 홈페이지 로딩 확인
- [ ] 연락처 폼 작동 확인 
- [ ] 404 페이지 확인
- [ ] 모든 섹션 렌더링 확인
- [ ] 모바일 반응형 확인

## 4. 성능 최적화

현재 설정된 최적화:
- ✅ 이미지 최적화 (AVIF/WebP)
- ✅ 번들 분할 최적화
- ✅ 보안 헤더 설정
- ✅ 캐시 최적화
- ✅ Core Web Vitals 모니터링

## 5. 트러블슈팅

### 빌드 에러 시
```bash
npm run build
```
로컬에서 빌드 테스트

### 환경 변수 에러 시
- Vercel 대시보드에서 환경 변수 확인
- 재배포 실행

### API 에러 시
- Gmail 앱 비밀번호 확인
- 환경 변수 설정 확인