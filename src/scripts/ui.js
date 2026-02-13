import { translations } from "../i18n/translations";
import { initMobileMenu } from "./mobile-menu";

let currentLang = localStorage.getItem("lang") || "es";

// -------- LANGUAGE --------
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = translations[lang][key];
  });
  
  // Handle project translations
  document.querySelectorAll('.project-title').forEach(el => {
    const titleEs = el.getAttribute('data-title-es');
    const titleEn = el.getAttribute('data-title-en');
    if (titleEs && titleEn) {
      el.textContent = lang === 'es' ? titleEs : titleEn;
    }
  });

  document.querySelectorAll('.project-description').forEach(el => {
    const descEs = el.getAttribute('data-desc-es');
    const descEn = el.getAttribute('data-desc-en');
    if (descEs && descEn) {
      el.textContent = lang === 'es' ? descEs : descEn;
    }
  });
  
  localStorage.setItem("lang", lang);
  currentLang = lang;
}

function initLanguage() {
  const langButtons = document.querySelectorAll("[data-lang]");
  
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  setLanguage(currentLang);
}

// -------- DARK MODE --------
function applyTheme() {
  const theme = localStorage.getItem('theme');
  if (
    theme === 'dark' ||
    (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  
  themeToggle?.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  });
}

// Initialize on first load
initLanguage();
initThemeToggle();
initMobileMenu();

// Re-initialize after View Transitions navigation
document.addEventListener('astro:after-swap', () => {
  applyTheme(); // Apply theme immediately after navigation
  initLanguage();
  initThemeToggle();
  initMobileMenu();
});

// Listen for language change events from mobile menu
document.addEventListener('languageChange', (e) => {
  setLanguage(e.detail.lang);
});
