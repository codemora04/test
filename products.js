/* ============================================================
   BALTIMAR — products.js
   ============================================================ */

/* ── Products data ──────────────────────────────────────────── */
const products = [
  {
    id: 1,
    name: 'Huile de palme',
    desc: "L'huile de palme est une huile végétale extraite du fruit du palmier à huile. Elle est largement utilisée dans l'industrie alimentaire grâce à sa texture, sa stabilité et sa polyvalence. Elle entre dans la fabrication de nombreux produits comme les pâtes à tartiner, les biscuits, les margarines et les huiles de cuisson. Sa couleur peut varier du rouge orangé au jaune clair selon le niveau de raffinage.",
    cat: 'Huiles Raffinées',
    badge: 'Bestseller',
    img: 'images/palmOil.png',
    specs: [
      { val: '230°C', lbl: 'Point de fumée' },
      { val: '12 mois', lbl: 'Durée de vie' },
      { val: 'Certifié', lbl: 'FSSC 22000' }
    ],
    features: [
      'Sans goût prononcé',
      'Aucun effet sur les saveurs ou le goût ajoutés',
      "Haute résistance à l'oxydation et à la rance même à des températures élevées",
      'Sans cholestérol'
    ]
  },
  {
    id: 2,
    name: 'Huile de palmiste (PKO)',
    desc: "L'huile de palmiste (PKO – Palm Kernel Oil) est une huile végétale extraite de l'amande du noyau du fruit du palmier à huile. Elle est appréciée pour sa stabilité, sa texture légère et ses propriétés fonctionnelles dans l'industrie alimentaire et cosmétique. Elle est souvent utilisée dans la fabrication de margarines, pâtisseries, confiseries et produits de soin.",
    cat: 'Huiles Raffinées',
    badge: 'Bestseller',
    img: 'images/PKO.jpg',
    specs: [
      { val: '230°C', lbl: 'Point de fumée' },
      { val: '12 mois', lbl: 'Durée de vie' },
      { val: 'Certifié', lbl: 'FSSC 22000' }
    ],
    features: [
      'Sans goût prononcé',
      'Aucun effet sur les saveurs ou le goût ajoutés',
      "Haute résistance à l'oxydation et à la rance même à des températures élevées",
      'Sans cholestérol'
    ]
  },
  {
    id: 3,
    name: "FRITY'S : Huile de friture spéciale",
    desc: "Frity's est une huile végétale spécialement conçue pour Baltimar afin de répondre aux exigences de la friture. C'est un mélange d'huiles végétales différentes. Ces huiles contribuent à la saveur et à la dorure de la friture, ainsi qu'à la résistance à la température et à l'oxydation. Frity's est riche en Oméga 3.",
    cat: 'Huiles Raffinées',
    badge: 'Bestseller',
    img: 'images/Frity.jpg',
    specs: [
      { val: '230°C', lbl: 'Point de fumée' },
      { val: '12 mois', lbl: 'Durée de vie' },
      { val: 'Certifié', lbl: 'FSSC 22000' }
    ],
    features: [
      'Sans gras trans',
      "Pas d'odeurs ou de goûts spécifiques",
      "Réduction de l'absorption des graisses par les aliments frits",
      "Durée de vie beaucoup plus longue que l'huile de friture ordinaire",
      'Sans cholestérol',
      'Additif : Antioxydant',
      "Haute résistance à l'oxydation et à la rance même à des températures élevées",
      'Contient un agent anti-mousse E900.',
      "Exempte d'ingrédients allergènes conformément à la législation en vigueur",
      "Ce produit n'est pas génétiquement modifié (non OGM)."
    ]
  },
  {
    id: 4,
    name: 'CIPSO PLUS : Graisse végétale pour produits laitiers',
    desc: "CIPSO Plus est une graisse végétale spécialement conçue pour les produits laitiers. Élaborée à partir d'huile de soja soigneusement raffinée, elle offre une excellente stabilité, une texture homogène et un rendement optimal. Grâce à ses propriétés fonctionnelles, CIPSO Plus convient parfaitement à la préparation de crèmes fouettées et d'autres applications laitières.",
    cat: 'Graisses Spéciales',
    badge: 'Bestseller',
    img: 'images/Soja.png',
    specs: [
      { val: '230°C', lbl: 'Point de fumée' },
      { val: '12 mois', lbl: 'Durée de vie' },
      { val: 'Certifié', lbl: 'FSSC 22000' }
    ],
    features: [
      'Sans goût prononcé',
      'Aucun effet sur les saveurs ou le goût ajoutés',
      "Haute résistance à l'oxydation et à la rance même à des températures élevées",
      'Sans cholestérol'
    ]
  },
  {
    id: 5,
    name: 'Huile de noix de coco',
    desc: "L'huile de coco est extraite de la pulpe séchée des fruits du cocotier (Cocos nucifera). Chez Baltimar, l'huile de coco est traitée avec le plus grand soin, grâce à des équipements de haute technologie. Les différentes opérations de raffinage, d'hydrogénation, d'interestérification, de fractionnement et de cristallisation permettent d'obtenir des produits adaptés aux besoins de chaque utilisateur.",
    cat: 'Huiles Raffinées',
    badge: '',
    img: 'images/Coco.png',
    specs: [
      { val: '230°C', lbl: 'Point de fumée' },
      { val: '12 mois', lbl: 'Durée de vie' },
      { val: 'Certifié', lbl: 'FSSC 22000' }
    ],
    features: [
      'Sans goût prononcé',
      'Aucun effet sur les saveurs ou le goût ajoutés',
      "Haute résistance à l'oxydation et à la rance même à des températures élevées",
      'Sans cholestérol'
    ]
  },
  {
    id: 6,
    name: 'Huile de soja',
    desc: "L'huile de soja est extraite des haricots de soja. Les principaux producteurs sont les États-Unis, le Brésil, l'Argentine, la Chine et l'Inde. Chez Baltimar, le soja subit avec beaucoup d'attention et d'équipement de haute technologie les différentes opérations de raffinage, d'hydrogénation, d'interestérification, de fractionnement et de cristallisation pour obtenir les produits adaptés aux différents utilisateurs.",
    cat: 'Huiles Raffinées',
    badge: '',
    img: 'images/Soja.png',
    specs: [
      { val: '230°C', lbl: 'Point de fumée' },
      { val: '12 mois', lbl: 'Durée de vie' },
      { val: 'Certifié', lbl: 'FSSC 22000' }
    ],
    features: [
      'Sans goût prononcé',
      'Aucun effet sur les saveurs ou le goût ajoutés',
      "Haute résistance à l'oxydation et à la rance même à des températures élevées",
      'Sans cholestérol'
    ]
  }
]

/* ── Helpers ────────────────────────────────────────────────── */
const catClass   = { 'Huiles Raffinées': 'cat-industriel', 'Margarines & Shortenings': 'cat-industriel', 'Graisses Spéciales': 'cat-industriel', 'Alternatives Laitières': 'cat-industriel' }
const badgeClass = { Bestseller: 'badge-bestseller', Nouveau: 'badge-nouveau', Premium: 'badge-premium' }
const arrowSVG   = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`
const detailSVG  = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1"/></svg>`
const checkSVG   = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7l-11 11-5-5"/></svg>`

/* ── Render products ────────────────────────────────────────── */
function renderProducts(cat) {
  const grid  = document.getElementById('products-grid')
  const empty = document.getElementById('products-empty')
  const list  = cat === 'Tous' ? products : products.filter(p => p.cat === cat)

  document.getElementById('products-count-num').textContent = list.length

  if (list.length === 0) {
    grid.innerHTML = ''
    empty.style.display = 'flex'
    return
  }
  empty.style.display = 'none'

  grid.innerHTML = list.map((p, i) => `
    <div class="product-card" style="animation-delay:${i * 0.06}s" onclick="openProductModal(${p.id})">
      <div class="product-card__img-wrap">
        <div class="product-card__img-glow"></div>
        <img src="${p.img}" alt="${p.name}" class="product-card__img" loading="lazy" />
      </div>
      <div class="product-card__body">
        <div class="product-card__top">
          <span class="product-card__cat ${catClass[p.cat] || 'cat-industriel'}">${p.cat}</span>
          ${p.badge ? `<span class="product-card__badge ${badgeClass[p.badge]}">${p.badge}</span>` : ''}
        </div>
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__desc">${p.desc}</p>
        <div class="product-card__footer">
          <a class="product-card__cta" href="index.html#contact">
            Demander un devis ${arrowSVG}
          </a>
          <button class="product-card__detail-btn" onclick="event.stopPropagation(); openProductModal(${p.id})" aria-label="Voir détails">
            ${detailSVG}
          </button>
        </div>
      </div>
    </div>
  `).join('')
}

/* ── Update page title & breadcrumb ────────────────────────── */
function updatePageMeta(cat) {
  const breadcrumb = document.getElementById('breadcrumb-cat')
  const titleCat   = document.getElementById('page-title-cat')
  const titleMain  = document.getElementById('page-title-main')

  if (cat === 'Tous') {
    breadcrumb.textContent = 'Tous les produits'
    titleMain.textContent  = 'Tous nos '
    titleCat.textContent   = 'Produits'
  } else {
    breadcrumb.textContent = cat
    titleMain.textContent  = ''
    titleCat.textContent   = cat
  }
  document.title = (cat === 'Tous' ? 'Nos Produits' : cat) + ' — Baltimar'
}

/* ── Product modal ──────────────────────────────────────────── */
function openProductModal(id) {
  const p = products.find(x => x.id === id)
  if (!p) return
  document.getElementById('modal-img').src     = p.img
  document.getElementById('modal-img').alt     = p.name
  document.getElementById('modal-cat').textContent  = p.cat
  document.getElementById('modal-name').textContent = p.name
  document.getElementById('modal-desc').textContent = p.desc

  document.getElementById('modal-specs').innerHTML = (p.specs || []).map(s =>
    `<div class="product-modal__spec"><span class="product-modal__spec-val">${s.val}</span><span class="product-modal__spec-lbl">${s.lbl}</span></div>`
  ).join('')

  document.getElementById('modal-features').innerHTML = (p.features || []).map(f =>
    `<div class="product-modal__feature"><span class="product-modal__feature-icon">${checkSVG}</span>${f}</div>`
  ).join('')

  document.getElementById('product-modal').classList.add('open')
  document.body.style.overflow = 'hidden'
}
window.openProductModal = openProductModal

window.closeProductModal = function () {
  document.getElementById('product-modal').classList.remove('open')
  document.body.style.overflow = ''
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeProductModal()
    closeAppModal()
  }
})

/* ── Read URL param & initial render ────────────────────────── */
const params = new URLSearchParams(location.search)
let activeCategory = params.get('cat') || 'Tous'

renderProducts(activeCategory)
updatePageMeta(activeCategory)

/* ── Category filter tabs ────────────────────────────────────── */
document.querySelectorAll('.products__filter-btn').forEach(btn => {
  if (btn.dataset.cat === activeCategory) btn.classList.add('active')
  else btn.classList.remove('active')

  btn.addEventListener('click', () => {
    activeCategory = btn.dataset.cat
    document.querySelectorAll('.products__filter-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    renderProducts(activeCategory)
    updatePageMeta(activeCategory)
    const url = new URL(location.href)
    if (activeCategory === 'Tous') url.searchParams.delete('cat')
    else url.searchParams.set('cat', activeCategory)
    history.replaceState(null, '', url)
  })
})

/* ── Applications modal data ─────────────────────────────────── */
const appModalData = {
  boulangerie: {
    img: 'images/bakery.jpg',
    title: 'Boulangerie',
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
    points: [
      'Texture crémeuse avec une fusion contrôlée.',
      'Fonctionnalité lipidique constante malgré les variations de température.',
      'Optimisation des coûts par rapport aux graisses laitières traditionnelles.'
    ]
  },
  friture: {
    img: 'images/Friture.jpg',
    title: 'Friture',
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
    points: [
      "Protection naturelle contre l'oxygène.",
      "Améliore l'intensité du goût.",
      'Donne une texture plus riche et onctueuse en bouche.'
    ]
  },
  nonalimentaire: {
    img: 'images/application_non_alimentaire.png',
    title: 'Applications Non Alimentaires',
    points: [
      'Bases cosmétiques.',
      'Fabrication de savon.',
      'Lubrifiants industriels.',
      'Production de bougies.',
      'Alimentation animale.'
    ]
  }
}

const appModalEl = document.getElementById('app-modal')
const checkSVGapp = `<svg class="app-modal__item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7l-11 11-5-5"/></svg>`

window.openAppModal = function(key) {
  const data = appModalData[key]
  if (!data) return
  document.getElementById('app-modal-img').src = data.img
  document.getElementById('app-modal-img').alt = data.title
  document.getElementById('app-modal-title').textContent = data.title
  document.getElementById('app-modal-list').innerHTML = data.points
    .map(p => `<li class="app-modal__item">${checkSVGapp}<span>${p}</span></li>`)
    .join('')
  appModalEl.setAttribute('aria-hidden', 'false')
  appModalEl.classList.add('open')
  document.body.style.overflow = 'hidden'
}

window.closeAppModal = function() {
  appModalEl.classList.remove('open')
  appModalEl.setAttribute('aria-hidden', 'true')
  document.body.style.overflow = ''
}

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
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))
