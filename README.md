# 이현웰가어린이집 홈페이지

진주 이현동 0~1세 영아 전문 어린이집 홈페이지입니다.
HTML, CSS, JavaScript 정적 페이지이며 GitHub Pages의 main 브랜치에서 배포합니다.

공개 주소: https://djmonnar.github.io/wellga/

## 페이지

| 파일 | 내용 |
|---|---|
| index.html | 짧은 홈, 주요 안내, 이달의 식단, 최신 활동, FAQ 미리보기 |
| about.html | 어린이집 소개, 실제 공간 사진, 위생 관리 |
| program.html | 교구 놀이, 자연물 오감놀이, 체험활동 |
| daily.html | 0세·1세 하루일과 안내 예시, 키즈노트 |
| menu.html | 최신 식단: 2026년 10월 일반식, 매주 생선구이, 원본 사진 |
| menu-july.html | 지난 식단: 2026년 7월 이유식 및 일반식 |
| activity.html | 모든 활동소식 목록 |
| activity-chuseok.html | 2026년 추석 한복체험, 사진, 네이버 블로그 링크 |
| activity-loach.html | 미꾸라지 체험 |
| activity-waterballoon.html | 물풍선 놀이와 물놀이 |
| activity-watermelon.html | 수박 오감놀이와 물놀이 |
| faq.html | 입소, 운영, 식사, 돌봄에 관한 질문 10개 |
| contact.html | 전화·카카오톡 상담, 위치, 지도 |

## 연락처

- 전화: 0507-1454-5003
- 카카오톡: https://pf.kakao.com/_AjTwX/chat
- 블로그: https://blog.naver.com/amos6538
- 주소: 경남 진주시 진주대로 1319 관리동, 이현하이클래스웰가

`js/main.js`의 SITE_CONFIG는 data-config 링크 설정을 관리합니다.
연락처를 변경할 때는 HTML 본문, 링크와 JSON-LD 데이터도 함께 수정해야 합니다.

## 식단 관리

`menu.html`은 검색엔진과 부모님이 읽을 수 있는 정적 HTML로 작성합니다.
새 월 식단 등록 시 제목, 설명, 날짜별 식사, 원본 이미지, 발행 정보와 홈 안내를 함께 갱신합니다.
알레르기 번호, 열량과 원산지는 `assets/menu/2026-10-menu-original.jpg` 원본을 제공합니다.
현재 10월 0세 이유식 자료는 제공되지 않아 별도 문의로 안내합니다.
지난 7월 식단을 현재 이유식 식단으로 표시하지 않습니다.

## 활동소식

사진은 `assets/images/`의 활동별 폴더에 있습니다.
추석 사진은 EXIF 방향을 적용하고 웹용 JPEG로 최적화했습니다.
새 활동을 추가할 때 `activity.html` 목록과 홈 최신 활동을 갱신합니다.
원본으로 확인하지 못한 후기, 사건 날짜, 수치와 운영 정보는 임의로 추가하지 않습니다.

## 검색 및 인증

- 페이지별 title, description, canonical 및 Open Graph 메타데이터
- ChildCare, WebSite, WebPage, BreadcrumbList 구조화 데이터
- FAQ 본문과 동일한 질문·답변을 사용하는 FAQPage 데이터
- 추석 글의 BlogPosting 데이터
- sitemap.xml: 공개 페이지 목록
- robots.txt: 크롤링 허용 및 사이트맵 위치
- google2b361e9f725e24e1.html: Google Search Console HTML 파일 인증

Search Console URL 접두어 속성은 `https://djmonnar.github.io/wellga/`로 설정합니다.
배포 후 HTML 인증에서 확인을 누르고 `sitemap.xml`을 제출합니다.
HTML 파일 인증과 DNS로 확인하는 도메인 속성 인증은 별개입니다.
검색 노출, 순위, AI 답변 인용은 보장되지 않습니다.

## 디자인 및 검증

공통 스타일: `css/style.css`, 인터랙션: `js/main.js`.
모바일 하단 상담바, 키보드 지원 메뉴, 연령별 일과 탭과 기본 HTML FAQ를 사용합니다.
배포 전 모바일·데스크톱 화면, 사진 로딩, 내부 링크, 구조화 데이터 일치 여부를 확인합니다.
