
const appData = {
  boulangerie: {
    img: 'images/bakery.jpg',
    title: 'Boulangerie',
    appName: 'Boulangerie',
    points: [
      'Excellente plasticité et feuilletage.',
      'Manipulation et aération de la pâte améliorées.',
      'Profil de fusion stable pour des textures feuilletées.',
      'Grande stabilité lors de la cuisson.'
    ]
  },
  confiserie: {
    img: 'images/Confiserie_Biscuiterie.jpg',
    title: 'Confiserie / Biscuiterie',
    appName: 'Confiserie / Biscuiterie',
    points: [
      'Texture lisse et comportement de fusion contrôlé.',
      'Maintien de la brillance et résistance au blanchiment pour les enrobages chocolatés.',
      'Solutions économiques de remplacement du beurre de cacao.',
      'Meilleure tartinabilité pour les crèmes et fourrages.'
    ]
  },
  laitier: {
    img: 'images/Alternatives_Laitières.png',
    title: 'Alternatives Laitières',
    appName: 'Alternatives Laitières',
    points: [
      'Texture crémeuse avec une fusion contrôlée.',
      'Fonctionnalité lipidique constante malgré les variations de température.',
      'Optimisation des coûts par rapport aux graisses laitières traditionnelles.'
    ]
  },
  friture: {
    img: 'images/Friture.jpg',
    title: 'Friture',
    appName: 'Friture',
    points: [
      'Haute stabilité oxydative.',
      "Durée de vie prolongée en friture et réduction de l'absorption d'huile.",
      'Texture plus croustillante pour les produits frits.',
      'Goût neutre et arôme propre.'
    ]
  },
  conserveries: {
    img: 'images/Conserveries_Article.jpg',
    title: 'Conserveries',
    appName: 'Conserveries',
    points: [
      "Protection naturelle contre l'oxygène.",
      "Améliore l'intensité du goût.",
      'Donne une texture plus riche et onctueuse en bouche.'
    ]
  },
  nonalimentaire: {
    img: 'images/application_non_alimentaire.png',
    title: 'Applications Non Alimentaires',
    appName: 'Applications Non Alimentaires',
    points: [
      'Bases cosmétiques.',
      'Fabrication de savon.',
      'Lubrifiants industriels.',
      'Production de bougies.',
      'Alimentation animale.'
    ]
  }
}

/* ── Produits (source : bd.js) ──────────────────────────────── */
const bdProducts = [
  {
    produit: 'Huile de palmiste raffinée',
    marque: 'Palmiste RBD',
    emballage: 'V',
    applications: ['Alternatives Laitières', 'Applications Non Alimentaires']
  },
  {
    produit: 'Oléine de Palme',
    marque: 'Oléine de Palme',
    emballage: 'V',
    applications: ['Friture']
  },
  {
    produit: 'Huile de Palme Raffinée',
    marque: 'Palme 38-40',
    emballage: 'V et C',
    applications: ['Boulangerie', 'Confiserie / Biscuiterie']
  },
  {
    produit: 'Huile de Tournesol raffinée',
    marque: 'Vitaflore',
    emballage: '',
    applications: []
  },
  {
    produit: 'Palme 34-36',
    marque: 'Palme 34-36',
    emballage: 'C et V',
    applications: ['Confiserie / Biscuiterie']
  },
  {
    produit: 'Palme 40-42',
    marque: 'Palme 40-42',
    emballage: 'V et C',
    applications: ['Boulangerie', 'Confiserie / Biscuiterie']
  },
  {
    produit: 'Palme 45',
    marque: 'Palme 45',
    emballage: 'V',
    applications: ['Boulangerie']
  },
  {
    produit: 'Palme 44-47',
    marque: 'Palme 44-47',
    emballage: 'V',
    applications: ['Boulangerie']
  },
  {
    produit: 'Palme 46-48',
    marque: 'Palme 46-48',
    emballage: 'V et C',
    applications: ['Boulangerie', 'Conserveries']
  },
  {
    produit: 'Soja 34-36',
    marque: 'Soja 34-36',
    emballage: 'V et C',
    applications: ['Boulangerie', 'Confiserie / Biscuiterie', 'Applications Non Alimentaires']
  },
  {
    produit: 'Soja 40',
    marque: 'CIPSO',
    emballage: 'C et V',
    applications: ['Alternatives Laitières']
  },
  {
    produit: 'Soja 48-50',
    marque: 'HSD48',
    emballage: 'C',
    applications: ['Boulangerie', 'Conserveries']
  },
  {
    produit: 'Stéarine de palme',
    marque: 'VITALITE',
    emballage: 'C',
    applications: ['Conserveries', 'Applications Non Alimentaires']
  },
  {
    produit: 'Super Oléine de Palme',
    marque: "Frity's 100 / Palmarosa",
    emballage: 'Bidon 10 Litres',
    applications: ['Friture']
  },
  {
    produit: 'Huile de soja + Oléine de Palme',
    marque: "Frity's 110",
    emballage: 'Bidon 10 Litres',
    applications: ['Friture']
  },
  {
    produit: 'Huile de soja raffinée',
    marque: 'Vitaflore',
    emballage: 'Bidon de 5 ou 10 litres',
    applications: ['Friture']
  },
  {
    produit: 'Soja fortement hydrogénée',
    marque: 'SFH',
    emballage: 'C',
    applications: ['Boulangerie', 'Confiserie / Biscuiterie']
  },
  {
    produit: 'Palmiste 32-34',
    marque: 'NADIR',
    emballage: 'C et V',
    applications: ['Confiserie / Biscuiterie', 'Boulangerie']
  },
  {
    produit: 'Palmiste 36-39',
    marque: 'Palmiste 36-39',
    emballage: 'C et V',
    applications: ['Confiserie / Biscuiterie']
  },
  {
    produit: 'Stéarine de palmiste totalement hydrogénée',
    marque: 'CBS',
    emballage: 'C',
    applications: ['Confiserie / Biscuiterie']
  },
  {
    produit: 'Stéarine de palme totalement hydrogénée',
    marque: 'SPFH',
    emballage: 'C',
    applications: ['Confiserie / Biscuiterie', 'Boulangerie']
  },
  {
    produit: 'Oleine de palme totalement hydrogénée',
    marque: 'Obi 1',
    emballage: 'C',
    applications: ['Confiserie / Biscuiterie']
  }
]

/* ── SVG helpers ────────────────────────────────────────────── */
const checkSVG = `<svg class="app-detail__benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7l-11 11-5-5"/></svg>`

const packSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>`

const brandSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`

/* ── Lecture du paramètre URL ───────────────────────────────── */
const params  = new URLSearchParams(location.search)
const appKey  = params.get('key') || ''
const data    = appData[appKey]

/* ── Redirection si clé invalide ────────────────────────────── */
if (!data) {
  document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `
      <div style="min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1.5rem;font-family:Outfit,sans-serif;text-align:center;padding:2rem;">
        <h1 style="font-size:2rem;font-weight:700;">Application introuvable</h1>
        <p style="color:#666;">La page que vous cherchez n'existe pas.</p>
        <a href="products.html#applications" style="background:oklch(38% 0.12 160);color:#fff;padding:0.85rem 1.75rem;border-radius:999px;font-weight:600;text-decoration:none;">
          Retour aux applications
        </a>
      </div>`
  })
}

/* ── Rendu de la page ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  if (!data) return

  /* Meta */
  document.title = `${data.title} — Baltimar`

  /* Breadcrumb & titres */
  document.getElementById('breadcrumb-app').textContent        = data.title
  document.getElementById('app-page-title').textContent        = data.title
  document.getElementById('app-detail-title-inline').textContent = data.title
  document.getElementById('app-products-title-inline').textContent = data.title

  /* Image */
  const img = document.getElementById('app-detail-img')
  img.src = data.img
  img.alt = data.title

  /* Liste des avantages */
  document.getElementById('app-detail-list').innerHTML = data.points
    .map(p => `
      <li class="app-detail__benefit">
        ${checkSVG}
        <span>${p}</span>
      </li>`)
    .join('')

  /* Produits associés */
  const relatedProducts = bdProducts.filter(p =>
    p.applications.some(a => a.toLowerCase() === data.appName.toLowerCase())
  )

  const grid  = document.getElementById('app-products-grid')
  const empty = document.getElementById('app-products-empty')

  if (relatedProducts.length === 0) {
    grid.style.display = 'none'
    empty.style.display = 'flex'
  } else {
    empty.style.display = 'none'
    grid.innerHTML = relatedProducts.map((p, i) => `
      <div class="app-product-card reveal" style="animation-delay:${i * 0.07}s">
        <div class="app-product-card__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        </div>
        <div class="app-product-card__body">
          <h4 class="app-product-card__name">${p.produit}</h4>
          <div class="app-product-card__metas">
            <span class="app-product-card__meta">
              ${brandSVG}
              <span>${p.marque}</span>
            </span>
            <span class="app-product-card__meta">
              ${packSVG}
              <span>Emballage : ${p.emballage}</span>
            </span>
          </div>
        </div>
        <a href="index.html#contact" class="app-product-card__cta">
          Demander un devis
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>`).join('')
  }

  /* Scroll reveal */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
        revealObserver.unobserve(e.target)
      }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))
})

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
