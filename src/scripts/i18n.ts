import { translations, type Lang, type TranslationKey } from "../i18n/translations";

const LANG_KEY = "portfolio-lang";

export function getLang(): Lang {
  if (typeof window === "undefined") return "es";
  const stored = localStorage.getItem(LANG_KEY) as Lang | null;
  if (stored === "es" || stored === "en") return stored;
  // Default to Spanish, detect browser language as fallback
  const browserLang = navigator.language?.startsWith("en") ? "en" : "es";
  return browserLang;
}

export function setLang(lang: Lang): void {
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  translatePage(lang);
  window.dispatchEvent(new CustomEvent("lang-changed", { detail: { lang } }));
}

function translateNode(node: Element, lang: Lang): void {
  // Translate innerText via data-i18n
  const key = node.getAttribute("data-i18n") as TranslationKey | null;
  if (key && translations[key]) {
    const text = translations[key][lang];
    if (text) {
      node.textContent = text;
    }
  }

  // Translate attributes via data-i18n-attr (format: "attr1:key1,attr2:key2")
  const attrDefs = node.getAttribute("data-i18n-attr");
  if (attrDefs) {
    attrDefs.split(",").forEach((def) => {
      const [attr, key] = def.split(":").map((s) => s.trim()) as [string, TranslationKey];
      if (attr && key && translations[key]) {
        node.setAttribute(attr, translations[key][lang]);
      }
    });
  }
}

export function translatePage(lang: Lang): void {
  // Translate all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => translateNode(el, lang));

  // Translate all elements with data-i18n-attr
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => translateNode(el, lang));
}

export function initI18n(): void {
  const lang = getLang();
  document.documentElement.lang = lang;
  translatePage(lang);
}