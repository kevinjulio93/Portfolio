type Theme = "light" | "dark" | "system";

const THEME_KEY = "portfolio-theme";

function getPreferredTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "system";
  return (localStorage.getItem(THEME_KEY) as Theme) ?? "system";
}

export function getEffectiveTheme(): "light" | "dark" {
  const stored = getStoredTheme();
  if (stored === "system") return getPreferredTheme();
  return stored;
}

export function applyTheme(): void {
  const effective = getEffectiveTheme();
  const root = document.documentElement;
  if (effective === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  // Dispatch event for UI updates
  window.dispatchEvent(new CustomEvent("theme-changed", { detail: { theme: effective, stored: getStoredTheme() } }));
}

export function setTheme(theme: Theme): void {
  localStorage.setItem(THEME_KEY, theme);
  applyTheme();
}

export function initTheme(): void {
  applyTheme();
  // Listen for OS-level changes when in system mode
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (getStoredTheme() === "system") applyTheme();
  });
}