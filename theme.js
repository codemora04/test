/* ============================================================
   BALTIMAR — theme.js
   Dark / light mode toggle
   ============================================================ */

/* Apply saved theme immediately (before DOMContentLoaded) to avoid flash */
;(function () {
  if (localStorage.getItem('baltimar-theme') === 'dark') {
    document.documentElement.classList.add('dark')
  }
})()

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark')
  localStorage.setItem('baltimar-theme', isDark ? 'dark' : 'light')
}
