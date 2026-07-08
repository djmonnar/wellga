# 이현웰가어린이집 랜딩페이지

진주 이현동 0~1세 영아 전문 어린이집 공식 랜딩페이지입니다.
순수 HTML / CSS / JavaScript 정적 사이트로, GitHub Pages에 바로 배포할 수 있습니다.

## 파일 구조

```
├── index.html          # 메인 랜딩페이지
├── menu-july.html      # 이달의 식단표 (임시 페이지)
├── css/style.css       # 전체 스타일 (컬러 토큰은 :root 에서 관리)
├── js/main.js          # 설정(SITE_CONFIG) + 인터랙션
└── assets/
    ├── images/         # 실제 사진 넣는 곳
    └── menu/           # 식단표 PDF 넣는 곳 (예: 2026-07-menu.pdf)
```

## ⚙️ 꼭 수정해야 하는 것 (체크리스트)

### 1. 링크 설정 — `js/main.js` 맨 위 `SITE_CONFIG` 한 곳만 수정하면 됩니다

| 항목 | 현재 값 | 교체 방법 |
|---|---|---|
| 카카오톡 채널 | `https://pf.kakao.com/_AjTwX/chat` | 적용 완료 (1:1 채팅 링크) |
| 식단표 | `./menu-july.html` (임시) | PDF 사용 시 `./assets/menu/2026-07-menu.pdf` 로 교체 |
| 카카오맵 / 네이버지도 | 검색 URL (임시) | 장소 등록 후 상세 페이지 URL로 교체 |
| 전화번호 | `0507-1454-5003` (안심번호) | 변경 시 여기서 수정 |

### 2. 이미지 현황 — `assets/images/`

실제 원 사진(보정 완료)이 적용된 곳:

| 위치 | 파일 |
|---|---|
| 히어로 | hero-classroom.jpg |
| 공간 소개 대형 | space-main.jpg |
| 공간 카드: 놀이공간 | space-play.jpg |
| 공간 카드: 교구 활동공간 | space-montessori.jpg |
| 공간 카드: 위생관리 공간 | space-hygiene.jpg |
| 공간 카드: 등하원 공간 | space-entrance.jpg |
| 프로그램(교구 뇌활동교육) 섹션 | montessori.jpg |
| 체험활동 섹션 | experience.jpg (사물놀이 공연) |

아직 임시 이미지(Unsplash)인 곳 — 실제 사진 확보 시 `<img src>` 교체:

| 위치 | 추천 사진 |
|---|---|
| 원장 인사말 | 선생님이 아이를 돌보는 모습 |
| 수제 이유식 | 이유식, 신선한 재료 |
| 키즈노트 | 스마트폰으로 기록 확인 |
| 공간 카드: 식사공간 / 낮잠공간 | 이모지 placeholder — 각 카드 `.ph` 안에 `<img>` 삽입 |

(이미지 로드에 실패하면 자동으로 라벨/이모지 placeholder가 표시됩니다.)

### 3. 카카오채널 QR — 입소상담 CTA 섹션

현재 placeholder QR 이미지입니다.
카카오채널 생성 후 QR 이미지를 `assets/images/kakao-qr.png` 로 저장하고
`index.html` 의 QR `<img src>` 를 교체하세요.

### 4. 지도 — 오시는 길 섹션

현재 **구글 지도 무료 임베드**(API 키 불필요)가 적용되어 있고,
카카오맵/네이버지도 바로가기 버튼이 지도 아래에 있습니다.

한국 사용자에게 더 친숙한 카카오맵으로 바꾸려면:
map.kakao.com 에서 장소 검색 → 공유 → **지도 퍼가기** 코드 발급 후
`index.html` 의 `.map-frame` 안 `<iframe>` 을 교체하세요. (역시 무료)

### 5. 기타

- **하루일과 시간표**: 기본 예시입니다. 실제 운영 일과에 맞춰 `index.html` 의 하루일과 섹션 수정
- **부모님 후기**: 임시 예시입니다. **실제 후기 확보 후 교체 필요** (index.html 주석 참고)
- **OG 태그**: 배포 후 `index.html` `<head>` 의 `og:url`, `og:image` 를 실제 주소로 교체

## 🚀 GitHub Pages 배포 방법

1. GitHub에 새 리포지토리 생성 (예: `wellga`)
2. 이 폴더 전체를 push
3. 리포지토리 → Settings → Pages → Branch: `main` / root 선택 → Save
4. 몇 분 후 `https://아이디.github.io/wellga/` 에서 확인

## 디자인 메모

- 컬러: 아이보리 배경 + 베이지 + 세이지그린 + 브라운 포인트 (css/style.css `:root` 에서 일괄 변경 가능)
- 폰트: Pretendard (CDN)
- 모바일: 하단 고정 상담바(전화/카톡/오시는길), 햄버거 메뉴
- 데스크톱(980px+): 상단 네비 + 전화상담 버튼, 하단바 숨김

---
랜딩페이지 기획/제작: 짓마케팅
