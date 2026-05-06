// Dark mode is hardcoded in <html data-theme="dark"> in Layout.astro.
// This script only mirrors the body background color into the theme-color
// meta tag so mobile browser chrome paints with the right shade.

function syncThemeColorMeta(): void {
  const body = document.body;
  if (!body) return;
  const bgColor = window.getComputedStyle(body).backgroundColor;
  document
    .querySelector("meta[name='theme-color']")
    ?.setAttribute("content", bgColor);
}

syncThemeColorMeta();
document.addEventListener("astro:after-swap", syncThemeColorMeta);
