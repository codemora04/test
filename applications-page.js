/* ============================================================
   BALTIMAR — applications-page.js
   Script léger pour la page Applications & Produits
   ============================================================ */

/* ── Navbar ─────────────────────────────────────────────────── */
const navbar     = document.getElementById('navbar')
const hamburger  = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobile-menu')

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20)
}, { passive: true })

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open')
  hamburger.classList.toggle('open', open)
  hamburger.setAttribute('aria-expanded', open)
})

window.closeMobileMenu = function () {
  mobileMenu.classList.remove('open')
  hamburger.classList.remove('open')
  hamburger.setAttribute('aria-expanded', false)
}

/* ── Scroll reveal ──────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible')
      revealObserver.unobserve(e.target)
    }
  })
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))

/* ── Staggered animation on app cards ──────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.app-img-card').forEach((card, i) => {
    card.style.setProperty('--card-delay', `${i * 0.08}s`)
  })
  renderCatalogue()
})

/* ── Application categories for the card grid ───────────────── */
const appCategories = [
  { key: 'boulangerie',    label: 'Boulangerie',                   img: 'images/bakery.jpg' },
  { key: 'confiserie',     label: 'Confiserie / Biscuiterie',      img: 'images/Confiserie_Biscuiterie.jpg' },
  { key: 'laitier',        label: 'Alternatives Laitières',        img: 'images/Alternatives_Laitieres.png' },
  { key: 'friture',        label: 'Friture',                       img: 'images/Friture.jpg' },
  { key: 'conserveries',   label: 'Conserveries',                  img: 'images/Conserverie.jpg' },
  { key: 'nonalimentaire', label: 'Applications Non Alimentaires', img: 'images/application_non_alimentaire.png' },
]

const arrowSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`

function renderCatalogue() {
  const container = document.getElementById('catalogue-groups')
  if (!container) return

  container.innerHTML = `
    <div class="app-cat-grid">
      ${appCategories.map((cat, i) => `
        <a href="application.html?key=${cat.key}" class="app-cat-card reveal" style="transition-delay:${i * 0.07}s">
          <div class="app-cat-card__img-wrap">
            <img src="${cat.img}" alt="${cat.label}" class="app-cat-card__img" loading="lazy" />
          </div>
          <div class="app-cat-card__body">
            <h3 class="app-cat-card__title">${cat.label}</h3>
            <hr class="app-cat-card__divider" />
            <span class="app-cat-card__link">En savoir plus ${arrowSVG}</span>
          </div>
        </a>`).join('')}
    </div>`

  document.querySelectorAll('.app-cat-card.reveal').forEach(el => revealObserver.observe(el))
}
