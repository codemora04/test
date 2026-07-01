/* ============================================================
   BALTIMAR — i18n.js
   Language switching — updates DOM via data-i18n attributes
   ============================================================ */

const LANGS = ['fr', 'en', 'ar']
const LANG_KEY = 'baltimar-lang'

let currentLang = (() => {
  const saved = localStorage.getItem(LANG_KEY)
  return LANGS.includes(saved) ? saved : 'fr'
})()

function t(key) {
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.fr
  return (dict && dict[key]) ? dict[key] : ((TRANSLATIONS.fr && TRANSLATIONS.fr[key]) ? TRANSLATIONS.fr[key] : key)
}

function setLang(lang) {
  if (!LANGS.includes(lang)) return
  currentLang = lang
  localStorage.setItem(LANG_KEY, lang)
  document.documentElement.lang = lang
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr'
  if (lang === 'ar') loadArabicFont()
  applyTranslations()
}

function applyTranslations() {
  /* Page title */
  const pageKey = document.documentElement.dataset.pageKey
  if (pageKey) document.title = t(pageKey)

  /* Text content */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n)
  })

  /* innerHTML — for keys that contain HTML gradient spans */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml)
  })

  /* Placeholders */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh)
  })

  /* aria-label */
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria))
  })

  /* Lang button label */
  const langCurrent = document.getElementById('lang-current')
  if (langCurrent) langCurrent.textContent = currentLang.toUpperCase()

  /* Lang option active state */
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('lang-option--active', btn.dataset.lang === currentLang)
  })

  /* Page-specific refresh hook (defined in each page script if needed) */
  if (typeof onLangChange === 'function') onLangChange()
}

function loadArabicFont() {
  if (document.getElementById('baltimar-arabic-font')) return
  const link = document.createElement('link')
  link.id   = 'baltimar-arabic-font'
  link.rel  = 'stylesheet'
  link.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap'
  document.head.appendChild(link)
}

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.lang = currentLang
  document.documentElement.dir  = currentLang === 'ar' ? 'rtl' : 'ltr'
  if (currentLang === 'ar') loadArabicFont()
  applyTranslations()
})
