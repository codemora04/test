/* ============================================================
   BALTIMAR — theme.js  (dark-mode toggle, runs on every page)
   ============================================================ */
;(function () {
  const html   = document.documentElement
  const THEME_KEY = 'baltimar-theme'

  /* ── Restore preference before first paint ──────────────── */
  const saved = localStorage.getItem(THEME_KEY)
  if (saved === 'dark') html.classList.add('dark')

  /* ── Wire toggle button once DOM is ready ───────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        html.classList.toggle('dark')
        localStorage.setItem(THEME_KEY, html.classList.contains('dark') ? 'dark' : 'light')
      })
    })
  })
})()
