const SITE_CONFIG = {
  tel: "0507-1454-5003",
  kakao: "https://pf.kakao.com/_AjTwX/chat",
  menu: "./menu.html",
  kakaomap: "https://map.kakao.com/?q=경남 진주시 진주대로 1319",
  navermap: "https://map.naver.com/p/search/이현웰가어린이집",
};

document.querySelectorAll("[data-config]").forEach((el) => {
  const key = el.dataset.config;
  if (SITE_CONFIG[key]) el.href = key === "tel" ? `tel:${SITE_CONFIG.tel}` : SITE_CONFIG[key];
});

const header = document.getElementById("header");
const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
function setMenuOpen(open) {
  mobileMenu?.classList.toggle("open", open);
  hamburger?.classList.toggle("open", open);
  hamburger?.setAttribute("aria-expanded", String(open));
  hamburger?.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
}
hamburger?.addEventListener("click", () => setMenuOpen(!mobileMenu.classList.contains("open")));
mobileMenu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenuOpen(false)));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileMenu?.classList.contains("open")) {
    setMenuOpen(false);
    hamburger.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!header?.contains(event.target) && !mobileMenu?.contains(event.target)) setMenuOpen(false);
});

const file = location.pathname.split("/").pop() || "index.html";
const navFile = file.startsWith("activity-") ? "activity.html" : file.startsWith("menu-") ? "menu.html" : file;
document.querySelectorAll(".nav a, .mobile-menu a").forEach((a) => {
  if (a.getAttribute("href") === `./${navFile}`) a.setAttribute("aria-current", "page");
});

const tabs = Array.from(document.querySelectorAll(".tab-btn[data-tab]"));
function selectTab(btn) {
  tabs.forEach((tab) => {
    const selected = tab === btn;
    tab.classList.toggle("active", selected);
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    document.getElementById(tab.dataset.tab)?.classList.toggle("active", selected);
  });
}
tabs.forEach((btn, i) => {
  btn.id = `routine-tab-${i}`;
  btn.setAttribute("aria-controls", btn.dataset.tab);
  document.getElementById(btn.dataset.tab)?.setAttribute("aria-labelledby", btn.id);
  btn.tabIndex = btn.classList.contains("active") ? 0 : -1;
  btn.addEventListener("click", () => selectTab(btn));
  btn.addEventListener("keydown", (event) => {
    const next = event.key === "ArrowRight" ? (i + 1) % tabs.length : event.key === "ArrowLeft" ? (i - 1 + tabs.length) % tabs.length : event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : null;
    if (next !== null) {
      event.preventDefault();
      selectTab(tabs[next]);
      tabs[next].focus();
    }
  });
});
