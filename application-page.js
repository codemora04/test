/* ============================================================
   BALTIMAR — application-page.js
   Reads ?key= from URL, renders the application detail page.
   ============================================================ */

const checkSvg = `<svg class="app-detail__benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7l-11 11-5-5"/></svg>`
const arrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`
const backSvg  = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>`
const chevSvg  = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>`
const clockSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`
const awardSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`
const boxSvg   = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>`

function renderPage() {
  const params = new URLSearchParams(window.location.search)
  const key    = params.get('key')
  const data   = APPLICATIONS[key]

  /* Redirect to products if key is unknown */
  if (!data) {
    window.location.replace('products.html')
    return
  }

  /* Update page title */
  document.title = `${data.title} — Baltimar`

  const related = BD_PRODUCTS.filter(p =>
    p.applications.some(a => a.toLowerCase() === data.appName.toLowerCase())
  )

  const main = document.getElementById('app-main')
  main.innerHTML = `

    <!-- Page Hero -->
    <section class="products-page-hero">
      <div class="products__bg-blobs">
        <div class="products__blob products__blob--1"></div>
        <div class="products__blob products__blob--2"></div>
        <div class="products__blob products__blob--3"></div>
      </div>
      <div class="container">

        <nav class="breadcrumb reveal" aria-label="Fil d'Ariane">
          <a href="index.html" data-i18n="nav.home">Accueil</a>
          ${chevSvg}
          <a href="products.html" data-i18n="app.breadcrumb.products">Produits</a>
          ${chevSvg}
          <span>${data.title}</span>
        </nav>

        <div class="products__header reveal">
          <span class="badge badge--dark">
            <span class="badge-dot"></span><span data-i18n="app.badge">Application</span>
          </span>
          <h1 class="products__title">
            <span class="products__title-gradient">${data.title}</span>
          </h1>
          <p class="products__sub" data-i18n="app.page.sub">Découvrez les avantages et les produits Baltimar pour cette application.</p>
        </div>

        <div class="reveal reveal-delay-1" style="margin-top: 1.5rem">
          <a href="products.html" class="btn btn--outline" style="width: fit-content; display: inline-flex; align-items: center; gap: 0.5rem">
            ${backSvg}
            <span data-i18n="app.back">Retour aux applications</span>
          </a>
        </div>

      </div>
    </section>

    <!-- Image + Avantages -->
    <section style="padding: 5rem 0; background: #fff; position: relative">
      <div class="container">
        <div class="app-detail__layout reveal">

          <div class="app-detail__visual">
            <img src="${data.img}" alt="${data.title}" class="app-detail__img" />
          </div>

          <div class="app-detail__content">
            <span class="badge badge--dark" style="margin-bottom: 1.25rem">
              <span class="badge-dot"></span><span data-i18n="app.adv.badge">Avantages</span>
            </span>
            <h2 class="app-detail__section-title">
              <span data-i18n="app.why">Pourquoi choisir Baltimar pour</span>
              <span class="products__title-gradient"> ${data.title}</span>&nbsp;?
            </h2>
            <ul class="app-detail__benefits">
              ${data.points.map(p => `
              <li class="app-detail__benefit">
                ${checkSvg}
                <span>${p}</span>
              </li>`).join('')}
            </ul>
            <a href="index.html#contact" class="btn btn--primary" style="margin-top: 2rem; display: inline-flex; align-items: center; gap: 0.5rem">
              <span data-i18n="app.contact.btn">Demander un devis</span>
              ${arrowSvg}
            </a>
          </div>

        </div>
      </div>
    </section>

    <!-- Related Products -->
    <section style="padding: 5rem 0 6rem; background: oklch(97% 0.01 160); position: relative">
      <div class="container">

        <div class="reveal">
          <span class="badge badge--dark" style="margin-bottom: 1.25rem">
            <span class="badge-dot"></span><span data-i18n="app.range.badge">Gamme dédiée</span>
          </span>
          <h2 class="app-detail__section-title" style="margin-bottom: 0.75rem">
            <span data-i18n="app.related.title">Produits associés à</span>
            <span class="products__title-gradient"> ${data.title}</span>
          </h2>
          <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 2.5rem" data-i18n="app.range.sub">
            Sélectionnés parmi notre gamme complète pour répondre aux exigences de cette application.
          </p>
        </div>

        ${related.length === 0
          ? `<div class="app-products-empty">
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                 <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
               </svg>
               <p data-i18n="app.empty">Aucun produit spécifique listé pour cette application.</p>
             </div>`
          : `<div class="app-products-grid">
               ${related.map((p, i) => `
               <div class="app-product-card reveal" style="animation-delay: ${i * 0.07}s">
                 <div class="app-product-card__icon">
                   ${clockSvg}
                 </div>
                 <div class="app-product-card__body">
                   <h4 class="app-product-card__name">${p.produit}</h4>
                   <div class="app-product-card__metas">
                     <span class="app-product-card__meta">
                       ${awardSvg}
                       <span>${p.marque}</span>
                     </span>
                     ${p.emballage ? `<span class="app-product-card__meta">
                       ${boxSvg}
                       <span>Emballage : ${p.emballage}</span>
                     </span>` : ''}
                   </div>
                 </div>
                 <a href="index.html#contact" class="app-product-card__cta" data-i18n="app.quote">
                   Demander un devis
                   <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                 </a>
               </div>`).join('')}
             </div>`}

      </div>
    </section>
  `

  /* Apply i18n to newly injected content */
  applyTranslations()

  /* Observe new .reveal elements */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el))
}

document.addEventListener('DOMContentLoaded', renderPage)

/* Called by i18n.js when language changes — re-apply translations to dynamic content */
function onLangChange() {
  applyTranslations()
}
