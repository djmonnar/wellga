/* ==========================================================================
   이현웰가어린이집 랜딩페이지 스크립트
   ========================================================================== */

/* --------------------------------------------------------------------------
   ★ 사이트 설정 (여기만 수정하면 전체 페이지에 반영됩니다) ★
   -------------------------------------------------------------------------- */
const SITE_CONFIG = {
  // 전화번호 (0507 안심번호)
  tel: "0507-1454-5003",

  // 카카오톡 채널 1:1 채팅 링크
  kakao: "https://pf.kakao.com/_AjTwX/chat",

  // 이달의 식단표 링크
  // 임시: ./menu-july.html
  // PDF 사용 시: "./assets/menu/2026-07-menu.pdf" 로 교체
  menu: "./menu-july.html",

  // 지도 링크 (임시 검색 URL — 필요 시 장소 상세 URL로 교체)
  kakaomap: "https://map.kakao.com/?q=경남 진주시 진주대로 1319",
  navermap: "https://map.naver.com/p/search/이현웰가어린이집",
};

/* config 값을 data-config 속성이 붙은 모든 링크에 일괄 적용 */
document.querySelectorAll("[data-config]").forEach((el) => {
  const key = el.dataset.config;
  if (!SITE_CONFIG[key]) return;
  el.href = key === "tel" ? `tel:${SITE_CONFIG.tel}` : SITE_CONFIG[key];
});

/* --------------------------------------------------------------------------
   헤더: 스크롤 시 배경 강조
   -------------------------------------------------------------------------- */
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* --------------------------------------------------------------------------
   모바일 햄버거 메뉴
   -------------------------------------------------------------------------- */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  hamburger.classList.toggle("open", open);
  hamburger.setAttribute("aria-expanded", open);
});

/* 메뉴 항목 클릭 시 자동 닫힘 */
mobileMenu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  })
);

/* --------------------------------------------------------------------------
   하루일과 탭 (0세 / 1세)
   -------------------------------------------------------------------------- */
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));

    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

/* --------------------------------------------------------------------------
   스크롤 등장 애니메이션 (IntersectionObserver)
   -------------------------------------------------------------------------- */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
