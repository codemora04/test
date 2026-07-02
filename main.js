/* ============================================================
   BALTIMAR — main.js
   ============================================================ */

/* ── Supabase config (replace with your actual values) ─────── */
const SUPABASE_URL  = 'your_supabase_project_url'
const SUPABASE_KEY  = 'your_supabase_anon_key'

/* ── Navbar ─────────────────────────────────────────────────── */
const navbar    = document.getElementById('navbar')
const hamburger = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobile-menu')

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20)
}, { passive: true })

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open')
  hamburger.classList.toggle('open', open)
  hamburger.setAttribute('aria-expanded', open)
})

window.closeMobileMenu = function() {
  mobileMenu.classList.remove('open')
  hamburger.classList.remove('open')
  hamburger.setAttribute('aria-expanded', false)
}

/* ── Smooth scroll helper ───────────────────────────────────── */
window.scrollToSection = function(selector) {
  const el = document.querySelector(selector)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
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

/* ── Contact form ───────────────────────────────────────────── */
const form = document.getElementById('contact-form')

if (form) {
  const formBtn    = document.getElementById('form-btn')
  const btnText    = document.getElementById('form-btn-text')
  const btnIcon    = document.getElementById('form-btn-icon')
  const spinner    = document.getElementById('form-spinner')
  const errorBox   = document.getElementById('form-error')
  const errorMsg   = document.getElementById('form-error-msg')
  const successDiv = document.getElementById('form-success')

  function setLoading(on) {
    formBtn.disabled = on
    btnText.textContent = on ? window.i18n.t('form.loading') : window.i18n.t('form.submit')
    btnIcon.style.display = on ? 'none' : ''
    spinner.style.display = on ? 'block' : 'none'
  }

  function showError(msg) {
    errorMsg.textContent = msg
    errorBox.style.display = 'flex'
  }

  window.resetForm = function() {
    form.reset()
    errorBox.style.display = 'none'
    successDiv.classList.remove('visible')
    form.style.display = ''
  }

  form.addEventListener('submit', async e => {
    e.preventDefault()
    errorBox.style.display = 'none'

    const data = {
      name:    form.name.value.trim(),
      email:   form.email.value.trim(),
      subject: form.subject.value,
      message: form.message.value.trim(),
    }

    if (!data.name || !data.email || !data.message) {
      showError(window.i18n.t('form.error.required'))
      return
    }

    if (SUPABASE_URL === 'your_supabase_project_url') {
      const subject = encodeURIComponent(`[Baltimar] ${data.subject || 'Nouveau message'} - ${data.name}`)
      const body = encodeURIComponent(`Nom: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)
      window.location.href = `mailto:khadeyene2580@gmail.com?subject=${subject}&body=${body}`
      form.style.display = 'none'
      successDiv.classList.add('visible')
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      form.style.display = 'none'
      successDiv.classList.add('visible')
    } catch (err) {
      console.error(err)
      showError(window.i18n.t('form.error.server'))
    } finally {
      setLoading(false)
    }
  })
}

/* ── Footer year ────────────────────────────────────────────── */
const footerYear = document.getElementById('footer-year')
if (footerYear) footerYear.textContent = `© ${new Date().getFullYear()} Baltimar. Tous droits réservés.`

/* ── Applications Modal ─────────────────────────────────────── */
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
      "Haute stabilité oxydative.",
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

const appModal = document.getElementById('app-modal')

window.openAppModal = function(key) {
  const data = appModalData[key]
  if (!data) return

  document.getElementById('app-modal-img').src = data.img
  document.getElementById('app-modal-img').alt = data.title
  document.getElementById('app-modal-title').textContent = data.title

  const checkSvg = `<svg class="app-modal__item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7l-11 11-5-5"/></svg>`
  document.getElementById('app-modal-list').innerHTML = data.points
    .map(p => `<li class="app-modal__item">${checkSvg}<span>${p}</span></li>`)
    .join('')

  appModal.setAttribute('aria-hidden', 'false')
  appModal.classList.add('open')
  document.body.style.overflow = 'hidden'
}

window.closeAppModal = function() {
  appModal.classList.remove('open')
  appModal.setAttribute('aria-hidden', 'true')
  document.body.style.overflow = ''
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeAppModal()
})
