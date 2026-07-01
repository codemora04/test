/* ============================================================
   BALTIMAR — navbar.js
   Scroll effect, mobile menu, language switcher
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const navbar     = document.getElementById('navbar')
  const hamburger  = document.getElementById('hamburger')
  const mobileMenu = document.getElementById('mobile-menu')
  const langBtn    = document.getElementById('lang-btn')
  const langDropdown = document.getElementById('lang-dropdown')

  /* Scroll → add .scrolled class */
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20)
  }, { passive: true })

  /* Mobile hamburger */
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open')
    hamburger.classList.toggle('open', open)
    hamburger.setAttribute('aria-expanded', open)
  })

  /* Close mobile menu when any link inside is clicked */
  mobileMenu.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', () => {
      mobileMenu.classList.remove('open')
      hamburger.classList.remove('open')
      hamburger.setAttribute('aria-expanded', 'false')
    })
  })

  /* Language dropdown toggle */
  langBtn.addEventListener('click', e => {
    e.stopPropagation()
    const open = langDropdown.classList.toggle('lang-dropdown--open')
    langBtn.setAttribute('aria-expanded', open)
  })

  /* Close lang dropdown on outside click */
  document.addEventListener('click', () => {
    langDropdown.classList.remove('lang-dropdown--open')
    langBtn.setAttribute('aria-expanded', 'false')
  })

  langDropdown.addEventListener('click', e => e.stopPropagation())

  /* Language selection */
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      setLang(btn.dataset.lang)
      langDropdown.classList.remove('lang-dropdown--open')
      langBtn.setAttribute('aria-expanded', 'false')
      mobileMenu.classList.remove('open')
      hamburger.classList.remove('open')
      hamburger.setAttribute('aria-expanded', 'false')
    })
  })

  /* Highlight the active nav link based on current file */
  const page = window.location.pathname.split('/').pop() || 'index.html'
  document.querySelectorAll('.navbar__links a, .navbar__mobile-inner a').forEach(a => {
    const href = (a.getAttribute('href') || '').split('#')[0].split('/').pop()
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active')
    }
  })
})
