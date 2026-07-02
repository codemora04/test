/* ============================================================
   BALTIMAR — i18n.js  (FR / EN / AR)
   ============================================================ */
;(function () {
  'use strict'

  var LANG_KEY = 'baltimar-lang'
  var LANGS    = ['fr', 'en', 'ar']
  var LABELS   = { fr: 'FR', en: 'EN', ar: 'AR' }

  /* ── Translation dictionary ───────────────────────────────── */
  var T = {

    /* ══════════════════ FRENCH ══════════════════════════════ */
    fr: {
      /* Page titles */
      'page.home':    'Baltimar — Excellence en Huiles & Graisses Végétales',
      'page.about':   'À Propos — Baltimar',
      'page.products':'Nos Produits — Baltimar',
      'page.app':     'Application — Baltimar',

      /* Nav */
      'nav.home':    'Accueil',
      'nav.about':   'À Propos',
      'nav.products':'Produits',
      'nav.contact': 'Nous Contacter',

      /* ── Hero (index) */
      'hero.badge':    "L'excellence oléagineuse — Depuis 1980",
      'hero.headline': "L'ingrédient de <span class=\"hero__headline-gradient\"> haute performance</span> pour l'industrie agroalimentaire.",
      'hero.sub':      "Baltimar transforme la nature en solutions lipidiques d'excellence. Raffinage, hydrogénation et cristallisation de pointe pour vos besoins les plus exigeants.",
      'hero.cta1':     'Découvrir nos produits',
      'hero.cta2':     'Nous Contacter',
      'hero.stat1':    "Ans d'expérience",
      'hero.stat2':    'Clients industriels',
      'hero.stat3':    'Produits certifiés',
      'hero.scroll':   'Découvrir',

      /* ── Applications section */
      'apps.badge':          "Domaines d'application",
      'apps.title':          'Des solutions pour chaque <span class="gradient-text"> secteur alimentaire</span>',
      'apps.sub':            "De la boulangerie industrielle à la chocolaterie, nos huiles et graisses végétales sont formulées pour répondre aux exigences les plus spécifiques de vos productions.",
      'apps.cta':            'Voir les solutions',
      'apps.boulangerie':    'Boulangerie',
      'apps.confiserie':     'Confiserie / Biscuiterie',
      'apps.friture':        'Friture',
      'apps.laitier':        'Alternatives Laitières',
      'apps.conserveries':   'Conserveries',
      'apps.nonalimentaire': 'Non Alimentaires',
      'apps.catalogue':      'Catalogue complet',

      /* ── Benefits section */
      'benefits.badge':    'Pourquoi Baltimar',
      'benefits.title':    'Un partenaire industriel <span class="gradient-text"> de confiance</span>',
      'benefits.sub':      "Plus de trois décennies d'expertise, des certifications internationales et une approche « fit for purpose » font de Baltimar le partenaire de référence pour l'industrie alimentaire.",
      'benefits.c1.title': 'Qualité Certifiée',
      'benefits.c1.desc':  "FSSC 22000 et certification ONSSA. Nos produits respectent les normes internationales les plus strictes — qualité constante, livraison après livraison.",
      'benefits.c2.title': 'Expertise 30+ Ans',
      'benefits.c2.desc':  "Trois décennies de maîtrise dans le traitement des huiles et graisses végétales. Une équipe d'ingénieurs et techniciens spécialisés à votre service.",
      'benefits.c3.title': 'Solutions Sur Mesure',
      'benefits.c3.desc':  "Principe « fit for purpose » : nous concevons chaque produit en étroite collaboration avec vous, selon vos exigences spécifiques de production.",
      'benefits.c4.title': 'Partenariat Durable',
      'benefits.c4.desc':  "Des relations de confiance bâties sur la transparence, la réactivité et un accompagnement technique personnalisé sur le long terme.",
      'cert.1': 'Certification FSSC 22000',
      'cert.2': 'Certification ONSSA',
      'cert.3': 'Non OGM',
      'cert.4': 'Sans Acides Gras Trans',
      'cert.5': 'Sans Cholestérol',
      'cert.6': 'Certification Halal',

      /* ── Stats */
      'stats.1': "Ans d'expérience",
      'stats.2': 'Clients industriels',
      'stats.3': 'Collaborateurs',
      'stats.4': 'Produits référencés',

      /* ── Contact */
      'contact.badge':      'Collaborons ensemble',
      'contact.title':      'Discutons de <span class="contact__title-gradient"> votre projet</span>',
      'contact.sub':        "Nos ingénieurs et experts oléagineux sont à votre disposition pour développer le produit « fit for purpose » dont vous avez besoin.",
      'contact.addr.label': 'Adresse',
      'contact.addr.l1':    'Z.I Sahel-Had Soualem (Route Casa El Jadida) B.P 99',
      'contact.addr.l2':    'Casablanca, Maroc',
      'contact.tel.label':  'Téléphone',
      'contact.email.label':'Email',
      'contact.hours.label':'Heures d\'ouverture',
      'contact.hours.day1': 'Lundi – Vendredi',
      'contact.hours.t1':   '08h00 – 17h00',
      'contact.hours.day2': 'Samedi – Dimanche',
      'contact.hours.t2':   'Fermé',
      'form.name.label':    'Nom complet',
      'form.name.ph':       'Votre nom',
      'form.email.label':   'Email',
      'form.email.ph':      'votre@email.com',
      'form.subject.label': 'Sujet',
      'form.subject.ph':    'Sélectionnez un sujet',
      'form.subject.devis': 'Demande de devis',
      'form.subject.prod':  'Information produit',
      'form.subject.tech':  'Support technique',
      'form.subject.part':  'Partenariat',
      'form.subject.autre': 'Autre',
      'form.msg.label':     'Message',
      'form.msg.ph':        'Décrivez votre demande...',
      'form.submit':        'Envoyer le message',
      'form.loading':       'Envoi en cours...',
      'form.error.required':"Veuillez remplir tous les champs obligatoires.",
      'form.error.server':  "Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.",
      'form.success.title': 'Message envoyé !',
      'form.success.desc':  "Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.",
      'form.success.btn':   'Envoyer un autre message',

      /* ── Footer */
      'footer.banner.title': 'Prêt à développer votre prochain produit ?',
      'footer.banner.sub':   "Collaborons pour créer la solution lipidique idéale pour votre application.",
      'footer.banner.btn':   'Nous Contacter',
      'footer.about':        "Fabricant marocain d'huiles et graisses végétales de haute qualité au service de l'industrie agroalimentaire depuis 1980.",
      'footer.nav':          'Navigation',
      'footer.apps':         'Applications',
      'footer.contact':      'Contact',
      'footer.products':     'Produits',
      'footer.app.boul':     'Boulangerie',
      'footer.app.conf':     'Confiserie / Biscuiterie',
      'footer.app.lait':     'Alternatives Laitières',
      'footer.app.frit':     'Friture',
      'footer.app.cons':     'Conserveries',
      'footer.app.noal':     'Non Alimentaires',
      'footer.prod.1':       'Huiles Raffinées',
      'footer.prod.2':       'Margarines & Shortenings',
      'footer.prod.3':       'Graisses Spéciales',
      'footer.prod.4':       'Alternatives Laitières',
      'footer.copy':         '© 2026 Baltimar. Tous droits réservés.',
      'footer.privacy':      'Politique de confidentialité',
      'footer.legal':        'Mentions légales',

      /* ── About page */
      'about.breadcrumb':       'À Propos',
      'about.badge':            'À Propos de Baltimar',
      'about.title':            'Un partenaire de confiance <span class="products__title-gradient"> depuis plus de 30 ans</span>',
      'about.sub':              "Baltimar accompagne l'industrie alimentaire avec des solutions végétales performantes, fiables et adaptées aux exigences modernes.",
      'about.act.badge':        'Notre Activité',
      'about.act.title':        "Expertise marocaine en huiles<br>et graisses végétales",
      'about.act.p1':           "Baltimar est un fabricant marocain d'huiles et de graisses végétales de haute qualité, au service de l'industrie alimentaire avec excellence depuis le début des années 1980. Avec plus de trois décennies d'expertise, Baltimar s'est forgé une réputation de partenaire fiable, offrant des solutions lipidiques performantes, soutenues par une technologie avancée, des systèmes de qualité stricts et un service orienté client.",
      'about.act.p2':           "Nous sommes spécialisés dans la production d'huiles et de graisses végétales comestibles — raffinées, hydrogénées, interestérifiées ou fractionnées — à base de soja, palme, palmiste (PKO), noix de coco (coprah), colza, tournesol et oléine de palme.",
      'about.act.p3':           "Nous sommes un fournisseur majeur de graisses et huiles industrielles pour diverses applications.",
      'about.qual.badge':       'Qualité & Sécurité Alimentaire',
      'about.qual.title':       "Un système de contrôle<br>performant et certifié",
      'about.qual.p1':          "Des équipes travaillant en rotation continue sur 3 shifts assurent en permanence le contrôle qualité au sein du laboratoire. Elles disposent d'équipements de haute technologie :",
      'about.lab.rmn.name':     'RMN',
      'about.lab.rmn.desc':     "Résonance Magnétique Nucléaire — détermination de la teneur en matière grasse solide (SFC).",
      'about.lab.cpg.name':     'CPG',
      'about.lab.cpg.desc':     "Chromatographie en phase gazeuse pour analyses avancées des matières premières.",
      'about.lab.spec.name':    'Spectrophotomètre',
      'about.lab.spec.desc':    "Contrôle précis des paramètres physico-chimiques et qualitatifs.",
      'about.lab.col.name':     'Colorimètre Lovibond',
      'about.lab.col.desc':     "Évaluation de la couleur et conformité des huiles et graisses végétales.",
      'about.lab.phys.name':    'Physico-chimiques',
      'about.lab.phys.desc':    "Équipements dédiés aux analyses physico-chimiques complètes.",
      'about.lab.orga.name':    'Tests organoleptiques',
      'about.lab.orga.desc':    "Dispositifs de contrôle sensoriel garantissant la qualité constante.",
      'about.qual.p2':          "La capacité de production de Baltimar est entièrement dimensionnée pour répondre à la demande nationale. Grâce à ses certifications, les clients bénéficient d'un niveau d'assurance qualité conforme aux standards internationaux.",
      'about.mvv.badge':        'Mission, Vision & Valeurs',
      'about.mission.title':    'Notre Mission',
      'about.mission.desc':     "Fournir à l'industrie agroalimentaire des huiles et graisses végétales de haute qualité, performantes et parfaitement adaptées aux besoins industriels, en s'appuyant sur plus de 30 ans de savoir-faire et une technologie de pointe.",
      'about.vision.title':     'Notre Vision',
      'about.vision.desc':      "Devenir la référence incontournable en Afrique du Nord pour les solutions lipidiques industrielles — en innovant continuellement et en accompagnant nos partenaires vers l'excellence de leurs productions alimentaires.",
      'about.values.title':     'Nos Valeurs',
      'about.v1': 'Qualité sans compromis',
      'about.v2': 'Innovation permanente',
      'about.v3': 'Partenariat durable',
      'about.v4': 'Excellence opérationnelle',
      'about.v5': 'Intégrité & transparence',
      'about.cap.badge':  'Notre Capabilité',
      'about.cap.title':  "Une plateforme industrielle intégrée et de pointe",
      'about.cap.text':   "Baltimar emploie plus de <strong style=\"color:var(--brand)\">130 collaborateurs dédiés</strong>, soutenus par une équipe hautement qualifiée d'ingénieurs et de techniciens supérieurs ayant développé une expertise approfondie dans le traitement des graisses et des huiles. Notre plateforme industrielle est entièrement intégrée et équipée de technologies de pointe, comprenant :",
      'about.cap.l1':     'Collaborateurs',
      'about.cap.l2':     'Lignes de production',
      'about.cap.l3':     "Ans d'expertise",
      'about.cap.c1':     "Des lignes complètes de raffinage d'huiles végétales, garantissant des huiles de haute pureté et de haute qualité, adaptées à une large variété d'applications alimentaires.",
      'about.cap.c2':     "Une ligne d'hydrogénation permettant d'obtenir des profils de stabilité, de fusion et de performance très précis.",
      'about.cap.c3':     "Des lignes de cristallisation et de plastification pour une structuration optimale des graisses en boulangerie, confiserie et formulations industrielles, complétées par des lignes d'interestérification et de fractionnement.",
      'about.cap.c4':     "Une ligne moderne de shortening produisant de haute qualité.",
      'about.dev.badge':  'Notre Objectif de Développement',
      'about.dev.title':  'Votre application, <span class="about__title-gradient"> notre priorité.</span>',
      'about.dev.text':   "Pour le développement de graisses spéciales, nous appliquons le principe du <strong style=\"color:var(--brand)\">« fit for purpose »</strong> — concevoir un produit parfaitement adapté à l'usage prévu, en collaboration étroite avec chaque client industriel.",
      'about.dev.c1':     "Nous appliquons le principe du « fit for purpose » — concevoir un produit parfaitement adapté à l'usage prévu.",
      'about.dev.c2':     "Dans notre laboratoire, nous nous concentrons rigoureusement sur la recherche de la solution la plus appropriée pour votre application.",
      'about.dev.c3':     "Nous échangeons avec vous directement sur votre site afin de définir vos besoins spécifiques.",
      'about.dev.c4':     "Les compétences et capacités de notre centre de développement nous permettent de créer rapidement les produits les plus adaptés à vos exigences de production.",
      'about.stat1':      "Ans d'expérience",
      'about.stat2':      'Clients partenaires',
      'about.stat3':      'Matières premières',
      'about.stat4':      'Engagement qualité',
      'about.p1.title':   'Qualité Certifiée',
      'about.p1.desc':    "Nos produits répondent aux normes internationales les plus strictes. Qualité constante, livraison après livraison.",
      'about.p2.title':   'Excellence Technique',
      'about.p2.desc':    "Plus de 30 ans de maîtrise dans le secteur des huiles et graisses végétales. Conseil et expertise adaptés à chaque besoin industriel.",
      'about.p3.title':   'Innovation & Technologie',
      'about.p3.desc':    "Des procédés modernes et des solutions performantes développés pour répondre aux exigences de l'industrie alimentaire.",
      'about.p4.title':   'Partenariat Durable',
      'about.p4.desc':    "Relations de confiance bâties sur la qualité, la transparence et un accompagnement client réactif.",
      'about.cta':        'Découvrir nos produits',
      'about.modal.quote':'Demander un devis',

      /* ── Products page */
      'prod.badge': 'Catalogue complet',
      'prod.title': 'Nos produits <span class="products__title-gradient">par application</span>',
      'prod.sub':   "Parcourez l'ensemble de notre gamme, regroupée selon les domaines d'utilisation industrielle.",

      /* ── Application page */
      'app.breadcrumb.products': 'Produits',
      'app.badge':      'Application',
      'app.adv.badge':  'Avantages',
      'app.adv.title':  'Pourquoi choisir Baltimar pour <span class="products__title-gradient" id="app-detail-title-inline">cette application</span>&nbsp;?',
      'app.range.badge':'Gamme dédiée',
      'app.range.title':'Produits associés à <span class="products__title-gradient" id="app-products-title-inline">cette application</span>',
      'app.range.sub':  'Sélectionnés parmi notre gamme complète pour répondre aux exigences de cette application.',
      'app.empty':      'Aucun produit spécifique listé pour cette application.',
      'app.back':       'Retour aux applications',
      'app.contact.btn':'Demander un devis',
      'app.page.sub':   'Découvrez les avantages et les produits Baltimar pour cette application.',
    },

    /* ══════════════════ ENGLISH ═════════════════════════════ */
    en: {
      'page.home':    'Baltimar — Excellence in Vegetable Oils & Fats',
      'page.about':   'About — Baltimar',
      'page.products':'Our Products — Baltimar',
      'page.app':     'Application — Baltimar',

      'nav.home':    'Home',
      'nav.about':   'About',
      'nav.products':'Products',
      'nav.contact': 'Contact Us',

      'hero.badge':    'Oleaginous Excellence — Since 1980',
      'hero.headline': 'The <span class="hero__headline-gradient"> high-performance</span> ingredient for the food industry.',
      'hero.sub':      "Baltimar transforms nature into premium lipid solutions. State-of-the-art refining, hydrogenation and crystallization for your most demanding needs.",
      'hero.cta1':     'Discover our products',
      'hero.cta2':     'Contact Us',
      'hero.stat1':    'Years of experience',
      'hero.stat2':    'Industrial clients',
      'hero.stat3':    'Certified products',
      'hero.scroll':   'Explore',

      'apps.badge':          'Application Areas',
      'apps.title':          'Solutions for every <span class="gradient-text"> food sector</span>',
      'apps.sub':            "From industrial bakeries to confectionery, our vegetable oils and fats are formulated to meet the most specific requirements of your productions.",
      'apps.cta':            'View solutions',
      'apps.boulangerie':    'Bakery',
      'apps.confiserie':     'Confectionery & Biscuits',
      'apps.friture':        'Frying',
      'apps.laitier':        'Dairy Alternatives',
      'apps.conserveries':   'Canning',
      'apps.nonalimentaire': 'Non-Food',
      'apps.catalogue':      'Full catalogue',

      'benefits.badge':    'Why Baltimar',
      'benefits.title':    'A trusted <span class="gradient-text"> industrial partner</span>',
      'benefits.sub':      "More than three decades of expertise, international certifications and a \"fit for purpose\" approach make Baltimar the reference partner for the food industry.",
      'benefits.c1.title': 'Certified Quality',
      'benefits.c1.desc':  "FSSC 22000 and ONSSA certification. Our products meet the strictest international standards — consistent quality, delivery after delivery.",
      'benefits.c2.title': '30+ Years of Expertise',
      'benefits.c2.desc':  "Three decades of mastery in vegetable oil and fat processing. A team of specialized engineers and technicians at your service.",
      'benefits.c3.title': 'Tailored Solutions',
      'benefits.c3.desc':  "\"Fit for purpose\" principle: we design each product in close collaboration with you, according to your specific production requirements.",
      'benefits.c4.title': 'Lasting Partnership',
      'benefits.c4.desc':  "Trust-based relationships built on transparency, responsiveness and personalized long-term technical support.",
      'cert.1': 'FSSC 22000 Certification',
      'cert.2': 'ONSSA Certification',
      'cert.3': 'Non-GMO',
      'cert.4': 'Trans Fat Free',
      'cert.5': 'Cholesterol Free',
      'cert.6': 'Halal Certification',

      'stats.1': 'Years of experience',
      'stats.2': 'Industrial clients',
      'stats.3': 'Employees',
      'stats.4': 'Referenced products',

      'contact.badge':      "Let's work together",
      'contact.title':      "Let's discuss <span class=\"contact__title-gradient\"> your project</span>",
      'contact.sub':        "Our engineers and oleaginous experts are at your disposal to develop the \"fit for purpose\" product you need.",
      'contact.addr.label': 'Address',
      'contact.addr.l1':    'Z.I Sahel-Had Soualem (Route Casa El Jadida) B.P 99',
      'contact.addr.l2':    'Casablanca, Morocco',
      'contact.tel.label':  'Phone',
      'contact.email.label':'Email',
      'contact.hours.label':'Business Hours',
      'contact.hours.day1': 'Monday – Friday',
      'contact.hours.t1':   '08:00 – 17:00',
      'contact.hours.day2': 'Saturday – Sunday',
      'contact.hours.t2':   'Closed',
      'form.name.label':    'Full name',
      'form.name.ph':       'Your name',
      'form.email.label':   'Email',
      'form.email.ph':      'your@email.com',
      'form.subject.label': 'Subject',
      'form.subject.ph':    'Select a subject',
      'form.subject.devis': 'Quote request',
      'form.subject.prod':  'Product information',
      'form.subject.tech':  'Technical support',
      'form.subject.part':  'Partnership',
      'form.subject.autre': 'Other',
      'form.msg.label':     'Message',
      'form.msg.ph':        'Describe your request...',
      'form.submit':        'Send message',
      'form.loading':       'Sending...',
      'form.error.required':'Please fill in all required fields.',
      'form.error.server':  'An error occurred. Please try again or contact us directly.',
      'form.success.title': 'Message sent!',
      'form.success.desc':  "Thank you for contacting us. Our team will get back to you as soon as possible.",
      'form.success.btn':   'Send another message',

      'footer.banner.title': 'Ready to develop your next product?',
      'footer.banner.sub':   "Let's collaborate to create the ideal lipid solution for your application.",
      'footer.banner.btn':   'Contact Us',
      'footer.about':        "Moroccan manufacturer of high-quality vegetable oils and fats serving the food industry since 1980.",
      'footer.nav':          'Navigation',
      'footer.apps':         'Applications',
      'footer.contact':      'Contact',
      'footer.products':     'Products',
      'footer.app.boul':     'Bakery',
      'footer.app.conf':     'Confectionery / Biscuits',
      'footer.app.lait':     'Dairy Alternatives',
      'footer.app.frit':     'Frying',
      'footer.app.cons':     'Canning',
      'footer.app.noal':     'Non-Food',
      'footer.prod.1':       'Refined Oils',
      'footer.prod.2':       'Margarines & Shortenings',
      'footer.prod.3':       'Specialty Fats',
      'footer.prod.4':       'Dairy Alternatives',
      'footer.copy':         '© 2026 Baltimar. All rights reserved.',
      'footer.privacy':      'Privacy Policy',
      'footer.legal':        'Legal Notice',

      'about.breadcrumb':    'About',
      'about.badge':         'About Baltimar',
      'about.title':         'A trusted partner <span class="products__title-gradient"> for over 30 years</span>',
      'about.sub':           "Baltimar supports the food industry with high-performing, reliable and modern vegetable solutions.",
      'about.act.badge':     'Our Activity',
      'about.act.title':     "Moroccan expertise in vegetable<br>oils and fats",
      'about.act.p1':        "Baltimar is a Moroccan manufacturer of high-quality vegetable oils and fats, serving the food industry with excellence since the early 1980s. With more than three decades of expertise, Baltimar has built a reputation as a reliable partner, offering high-performance lipid solutions backed by advanced technology, strict quality systems, and customer-oriented service.",
      'about.act.p2':        "We specialize in the production of edible vegetable oils and fats — refined, hydrogenated, interesterified or fractionated — from soya, palm, palm kernel (PKO), coconut (copra), rapeseed, sunflower and palm olein.",
      'about.act.p3':        "We are a major supplier of industrial fats and oils for diverse applications.",
      'about.qual.badge':    'Quality & Food Safety',
      'about.qual.title':    "A high-performing and<br>certified quality control system",
      'about.qual.p1':       "Teams working in continuous rotation on 3 shifts permanently ensure quality control within the laboratory. They are equipped with high-tech equipment:",
      'about.lab.rmn.name':  'NMR',
      'about.lab.rmn.desc':  "Nuclear Magnetic Resonance — determination of solid fat content (SFC).",
      'about.lab.cpg.name':  'GC',
      'about.lab.cpg.desc':  "Gas chromatography for advanced analysis of raw materials.",
      'about.lab.spec.name': 'Spectrophotometer',
      'about.lab.spec.desc': "Precise control of physico-chemical and qualitative parameters.",
      'about.lab.col.name':  'Lovibond Colorimeter',
      'about.lab.col.desc':  "Colour evaluation and conformity of vegetable oils and fats.",
      'about.lab.phys.name': 'Physico-chemical',
      'about.lab.phys.desc': "Equipment dedicated to complete physico-chemical analyses.",
      'about.lab.orga.name': 'Organoleptic tests',
      'about.lab.orga.desc': "Sensory control devices ensuring consistent quality.",
      'about.qual.p2':       "Baltimar's production capacity is fully sized to meet national demand. Thanks to its certifications, customers benefit from a level of quality assurance that complies with international standards.",
      'about.mvv.badge':     'Mission, Vision & Values',
      'about.mission.title': 'Our Mission',
      'about.mission.desc':  "To provide the food industry with high-quality, high-performing vegetable oils and fats perfectly tailored to industrial needs, leveraging over 30 years of know-how and cutting-edge technology.",
      'about.vision.title':  'Our Vision',
      'about.vision.desc':   "To become the undisputed benchmark in North Africa for industrial lipid solutions — by continuously innovating and supporting our partners toward excellence in their food productions.",
      'about.values.title':  'Our Values',
      'about.v1': 'Uncompromising quality',
      'about.v2': 'Continuous innovation',
      'about.v3': 'Lasting partnership',
      'about.v4': 'Operational excellence',
      'about.v5': 'Integrity & transparency',
      'about.cap.badge':  'Our Capability',
      'about.cap.title':  "An integrated and cutting-edge industrial platform",
      'about.cap.text':   "Baltimar employs more than <strong style=\"color:var(--brand)\">130 dedicated employees</strong>, supported by a highly qualified team of engineers and senior technicians who have developed deep expertise in fats and oils processing. Our industrial platform is fully integrated and equipped with cutting-edge technologies, including:",
      'about.cap.l1':     'Employees',
      'about.cap.l2':     'Production lines',
      'about.cap.l3':     'Years of expertise',
      'about.cap.c1':     "Complete vegetable oil refining lines, ensuring high-purity, high-quality oils suited for a wide variety of food applications.",
      'about.cap.c2':     "A hydrogenation line enabling very precise stability, melting and performance profiles.",
      'about.cap.c3':     "Crystallization and plasticization lines for optimal structuring of fats in bakery, confectionery and industrial formulations, complemented by interesterification and fractionation lines.",
      'about.cap.c4':     "A modern shortening line producing high-quality shortening.",
      'about.dev.badge':  'Our Development Objective',
      'about.dev.title':  'Your application, <span class="about__title-gradient"> our priority.</span>',
      'about.dev.text':   "For the development of special fats, we apply the <strong style=\"color:var(--brand)\">\"fit for purpose\"</strong> principle — designing a product perfectly suited to its intended use, in close collaboration with each industrial client.",
      'about.dev.c1':     "We apply the \"fit for purpose\" principle — designing a product perfectly suited to its intended use.",
      'about.dev.c2':     "In our laboratory, we focus rigorously on finding the most appropriate solution for your application.",
      'about.dev.c3':     "We liaise with you directly on your site to define your specific needs.",
      'about.dev.c4':     "The skills and capabilities of our development center allow us to quickly create the most suitable products for your production requirements.",
      'about.stat1':      'Years of experience',
      'about.stat2':      'Partner clients',
      'about.stat3':      'Raw materials',
      'about.stat4':      'Quality commitment',
      'about.p1.title':   'Certified Quality',
      'about.p1.desc':    "Our products meet the strictest international standards. Consistent quality, delivery after delivery.",
      'about.p2.title':   'Technical Excellence',
      'about.p2.desc':    "Over 30 years of mastery in the vegetable oils and fats sector. Expert advice tailored to every industrial need.",
      'about.p3.title':   'Innovation & Technology',
      'about.p3.desc':    "Modern processes and high-performance solutions developed to meet the demands of the food industry.",
      'about.p4.title':   'Lasting Partnership',
      'about.p4.desc':    "Trust-based relationships built on quality, transparency and responsive customer support.",
      'about.cta':        'Discover our products',
      'about.modal.quote':'Request a quote',

      'prod.badge': 'Full catalogue',
      'prod.title': 'Our products <span class="products__title-gradient">by application</span>',
      'prod.sub':   "Browse our full range, grouped by industrial use domains.",

      'app.breadcrumb.products': 'Products',
      'app.badge':      'Application',
      'app.adv.badge':  'Advantages',
      'app.adv.title':  'Why choose Baltimar for <span class="products__title-gradient" id="app-detail-title-inline">this application</span>?',
      'app.range.badge':'Dedicated range',
      'app.range.title':'Products for <span class="products__title-gradient" id="app-products-title-inline">this application</span>',
      'app.range.sub':  'Selected from our full range to meet the requirements of this application.',
      'app.empty':      'No specific products listed for this application.',
      'app.back':       'Back to applications',
      'app.contact.btn':'Request a quote',
      'app.page.sub':   'Discover the advantages and Baltimar products for this application.',
    },

    /* ══════════════════ ARABIC ══════════════════════════════ */
    ar: {
      'page.home':    'بالتيمار — التميز في الزيوت والدهون النباتية',
      'page.about':   'حول — بالتيمار',
      'page.products':'منتجاتنا — بالتيمار',
      'page.app':     'التطبيق — بالتيمار',

      'nav.home':    'الرئيسية',
      'nav.about':   'حول',
      'nav.products':'المنتجات',
      'nav.contact': 'اتصل بنا',

      'hero.badge':    'التميز في الزيوت النباتية — منذ 1980',
      'hero.headline': 'المكوّن <span class="hero__headline-gradient"> عالي الأداء</span> لصناعة المواد الغذائية.',
      'hero.sub':      "تحوّل بالتيمار الطبيعةَ إلى حلول دهنية عالية الجودة. تكرير وهدرجة وتبلور متطورة لأكثر احتياجاتكم تطلبًا.",
      'hero.cta1':     'اكتشف منتجاتنا',
      'hero.cta2':     'اتصل بنا',
      'hero.stat1':    'سنوات من الخبرة',
      'hero.stat2':    'عملاء صناعيون',
      'hero.stat3':    'منتجات معتمدة',
      'hero.scroll':   'اكتشف',

      'apps.badge':          'مجالات التطبيق',
      'apps.title':          'حلول لكل <span class="gradient-text"> قطاع غذائي</span>',
      'apps.sub':            "من المخابز الصناعية إلى صناعة الحلويات، تُصاغ زيوتنا ودهوننا النباتية لتلبية المتطلبات الأكثر تخصصًا في إنتاجكم.",
      'apps.cta':            'عرض الحلول',
      'apps.boulangerie':    'المخبوزات',
      'apps.confiserie':     'الحلويات والبسكويت',
      'apps.friture':        'القلي',
      'apps.laitier':        'بدائل الألبان',
      'apps.conserveries':   'المعلبات',
      'apps.nonalimentaire': 'غير غذائي',
      'apps.catalogue':      'الكتالوج الكامل',

      'benefits.badge':    'لماذا بالتيمار',
      'benefits.title':    'شريك صناعي <span class="gradient-text"> موثوق</span>',
      'benefits.sub':      "أكثر من ثلاثة عقود من الخبرة، وشهادات دولية، ونهج «مناسب للغرض» يجعل بالتيمار الشريك المرجعي لصناعة الأغذية.",
      'benefits.c1.title': 'جودة معتمدة',
      'benefits.c1.desc':  "FSSC 22000  وشهادة ONSSA. منتجاتنا تلتزم بأصرم المعايير الدولية — جودة ثابتة في كل تسليم.",
      'benefits.c2.title': 'خبرة أكثر من 30 عامًا',
      'benefits.c2.desc':  "ثلاثة عقود من الإتقان في معالجة الزيوت والدهون النباتية. فريق من المهندسين والتقنيين المتخصصين في خدمتكم.",
      'benefits.c3.title': 'حلول مخصصة',
      'benefits.c3.desc':  "مبدأ «مناسب للغرض»: نصمم كل منتج بالتعاون الوثيق معكم، وفقًا لمتطلبات إنتاجكم الخاصة.",
      'benefits.c4.title': 'شراكة دائمة',
      'benefits.c4.desc':  "علاقات ثقة مبنية على الشفافية والاستجابة والدعم التقني الشخصي على المدى البعيد.",
      'cert.1': 'شهادة FSSC 22000 ',
      'cert.2': 'شهادة ONSSA',
      'cert.3': 'غير معدل وراثيًا',
      'cert.4': 'خالٍ من الدهون المتحولة',
      'cert.5': 'خالٍ من الكوليسترول',
      'cert.6': 'شهادة Halal',

      'stats.1': 'سنوات خبرة',
      'stats.2': 'عملاء صناعيون',
      'stats.3': 'موظفون',
      'stats.4': 'منتجات مرجعية',

      'contact.badge':      'لنتعاون معًا',
      'contact.title':      'لنتحدث عن <span class="contact__title-gradient"> مشروعكم</span>',
      'contact.sub':        "مهندسونا وخبراء الزيوت لدينا في خدمتكم لتطوير منتج «مناسب للغرض» يلبي احتياجاتكم.",
      'contact.addr.label': 'العنوان',
      'contact.addr.l1':    'ز.إ ساحل-هاد سوالم (طريق الدار البيضاء الجديدة) ص.ب 99',
      'contact.addr.l2':    'الدار البيضاء، المغرب',
      'contact.tel.label':  'الهاتف',
      'contact.email.label':'البريد الإلكتروني',
      'contact.hours.label':'ساعات العمل',
      'contact.hours.day1': 'الإثنين – الجمعة',
      'contact.hours.t1':   '08:00 – 17:00',
      'contact.hours.day2': 'السبت – الأحد',
      'contact.hours.t2':   'مغلق',
      'form.name.label':    'الاسم الكامل',
      'form.name.ph':       'اسمكم',
      'form.email.label':   'البريد الإلكتروني',
      'form.email.ph':      'بريدكم@example.com',
      'form.subject.label': 'الموضوع',
      'form.subject.ph':    'اختر موضوعًا',
      'form.subject.devis': 'طلب عرض أسعار',
      'form.subject.prod':  'معلومات المنتج',
      'form.subject.tech':  'الدعم التقني',
      'form.subject.part':  'شراكة',
      'form.subject.autre': 'أخرى',
      'form.msg.label':     'الرسالة',
      'form.msg.ph':        'صف طلبكم...',
      'form.submit':        'إرسال الرسالة',
      'form.loading':       'جارٍ الإرسال...',
      'form.error.required':'يرجى ملء جميع الحقول المطلوبة.',
      'form.error.server':  'حدث خطأ. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.',
      'form.success.title': 'تم إرسال الرسالة!',
      'form.success.desc':  "شكرًا لتواصلكم معنا. سيرد عليكم فريقنا في أقرب وقت ممكن.",
      'form.success.btn':   'إرسال رسالة أخرى',

      'footer.banner.title': 'هل أنتم مستعدون لتطوير منتجكم القادم؟',
      'footer.banner.sub':   "لنتعاون لإنشاء الحل الدهني المثالي لتطبيقكم.",
      'footer.banner.btn':   'اتصل بنا',
      'footer.about':        "مصنع مغربي للزيوت والدهون النباتية عالية الجودة في خدمة صناعة الأغذية منذ 1980.",
      'footer.nav':          'التنقل',
      'footer.apps':         'التطبيقات',
      'footer.contact':      'التواصل',
      'footer.products':     'المنتجات',
      'footer.app.boul':     'المخبوزات',
      'footer.app.conf':     'الحلويات / البسكويت',
      'footer.app.lait':     'بدائل الألبان',
      'footer.app.frit':     'القلي',
      'footer.app.cons':     'المعلبات',
      'footer.app.noal':     'غير غذائي',
      'footer.prod.1':       'زيوت مكررة',
      'footer.prod.2':       'مارغارين وشورتنينج',
      'footer.prod.3':       'دهون خاصة',
      'footer.prod.4':       'بدائل الألبان',
      'footer.copy':         '© 2026 بالتيمار. جميع الحقوق محفوظة.',
      'footer.privacy':      'سياسة الخصوصية',
      'footer.legal':        'إشعار قانوني',

      'about.breadcrumb':    'حول',
      'about.badge':         'حول بالتيمار',
      'about.title':         'شريك موثوق <span class="products__title-gradient"> منذ أكثر من 30 عامًا</span>',
      'about.sub':           "ترافق بالتيمار الصناعة الغذائية بحلول نباتية عالية الأداء وموثوقة ومتكيفة مع المتطلبات الحديثة.",
      'about.act.badge':     'نشاطنا',
      'about.act.title':     "الخبرة المغربية في الزيوت<br>والدهون النباتية",
      'about.act.p1':        "بالتيمار شركة مغربية لتصنيع الزيوت والدهون النباتية عالية الجودة، تخدم الصناعة الغذائية بتميز منذ مطلع الثمانينيات. وبأكثر من ثلاثة عقود من الخبرة، بنت بالتيمار سمعتها كشريك موثوق، تقدم حلولاً دهنية عالية الأداء مدعومة بتكنولوجيا متقدمة وأنظمة جودة صارمة وخدمة موجهة للعميل.",
      'about.act.p2':        "نتخصص في إنتاج الزيوت والدهون النباتية الصالحة للأكل — مكررة أو مهدرجة أو مُعادة استرة أو مُجزأة — من فول الصويا والنخيل ونواة النخيل (PKO) وجوز الهند (الكوبرا) والكانولا وعباد الشمس وأوليين النخيل.",
      'about.act.p3':        "نحن مورد رئيسي للدهون والزيوت الصناعية لتطبيقات متنوعة.",
      'about.qual.badge':    'الجودة وسلامة الأغذية',
      'about.qual.title':    "نظام مراقبة جودة<br>عالي الأداء ومعتمد",
      'about.qual.p1':       "فرق تعمل في تناوب مستمر على 3 وردية لضمان مراقبة الجودة بشكل دائم في المختبر. وهي مجهزة بأحدث المعدات التقنية:",
      'about.lab.rmn.name':  'الرنين المغناطيسي النووي',
      'about.lab.rmn.desc':  "تحديد نسبة الدهون الصلبة (SFC).",
      'about.lab.cpg.name':  'كروماتوغرافيا الغاز',
      'about.lab.cpg.desc':  "تحليلات متقدمة للمواد الخام.",
      'about.lab.spec.name': 'مطياف الضوء',
      'about.lab.spec.desc': "التحكم الدقيق في المعاملات الفيزيو-كيميائية والنوعية.",
      'about.lab.col.name':  'مقياس لوفيبوند اللوني',
      'about.lab.col.desc':  "تقييم اللون ومطابقة الزيوت والدهون النباتية.",
      'about.lab.phys.name': 'الفيزيو-كيميائية',
      'about.lab.phys.desc': "معدات مخصصة للتحليلات الفيزيو-كيميائية الكاملة.",
      'about.lab.orga.name': 'الاختبارات الحسية',
      'about.lab.orga.desc': "أجهزة المراقبة الحسية لضمان الجودة الثابتة.",
      'about.qual.p2':       "تم تصميم طاقة إنتاج بالتيمار بالكامل لتلبية الطلب الوطني. وبفضل شهاداتها، يستفيد العملاء من مستوى ضمان جودة يتوافق مع المعايير الدولية.",
      'about.mvv.badge':     'المهمة والرؤية والقيم',
      'about.mission.title': 'مهمتنا',
      'about.mission.desc':  "تزويد صناعة الأغذية بزيوت ودهون نباتية عالية الجودة والأداء، مكيفة تمامًا مع الاحتياجات الصناعية، بالاعتماد على أكثر من 30 عامًا من الخبرة والتكنولوجيا المتقدمة.",
      'about.vision.title':  'رؤيتنا',
      'about.vision.desc':   "أن نصبح المرجع الذي لا غنى عنه في شمال أفريقيا للحلول الدهنية الصناعية — بالابتكار المستمر ومرافقة شركائنا نحو التميز في إنتاجهم الغذائي.",
      'about.values.title':  'قيمنا',
      'about.v1': 'جودة بلا تنازل',
      'about.v2': 'ابتكار مستمر',
      'about.v3': 'شراكة دائمة',
      'about.v4': 'التميز التشغيلي',
      'about.v5': 'النزاهة والشفافية',
      'about.cap.badge':  'قدرتنا',
      'about.cap.title':  "منصة صناعية متكاملة ومتطورة",
      'about.cap.text':   "توظف بالتيمار أكثر من <strong style=\"color:var(--brand)\">130 موظفًا متفانيًا</strong>، مدعومين بفريق متخصص عالي الكفاءة من المهندسين والتقنيين المتقدمين. منصتنا الصناعية متكاملة بالكامل ومجهزة بأحدث التقنيات، تشمل:",
      'about.cap.l1':     'موظف',
      'about.cap.l2':     'خطوط إنتاج',
      'about.cap.l3':     'سنة خبرة',
      'about.cap.c1':     "خطوط تكرير كاملة للزيوت النباتية، تضمن زيوتًا عالية النقاء والجودة، مناسبة لمجموعة واسعة من التطبيقات الغذائية.",
      'about.cap.c2':     "خط هدرجة يتيح الحصول على ملامح دقيقة جدًا للثبات والذوبان والأداء.",
      'about.cap.c3':     "خطوط التبلور والليونة للبنية المثلى للدهون في المخبوزات والحلويات والتركيبات الصناعية، مكملة بخطوط إعادة الاسترة والتجزئة.",
      'about.cap.c4':     "خط شورتنينج حديث ينتج شورتنينجًا عالي الجودة.",
      'about.dev.badge':  'هدفنا في التطوير',
      'about.dev.title':  'تطبيقكم، <span class="about__title-gradient"> أولويتنا.</span>',
      'about.dev.text':   "لتطوير الدهون الخاصة، نطبق مبدأ <strong style=\"color:var(--brand)\">«مناسب للغرض»</strong> — تصميم منتج مكيف تمامًا مع الاستخدام المقصود، بالتعاون الوثيق مع كل عميل صناعي.",
      'about.dev.c1':     "نطبق مبدأ «مناسب للغرض» — تصميم منتج مكيف تمامًا مع الاستخدام المقصود.",
      'about.dev.c2':     "في مختبرنا، نركز بدقة على إيجاد الحل الأنسب لتطبيقكم.",
      'about.dev.c3':     "نتواصل معكم مباشرة في موقعكم لتحديد احتياجاتكم الخاصة.",
      'about.dev.c4':     "تتيح لنا مهارات وقدرات مركز التطوير لدينا إنشاء المنتجات الأنسب بسرعة لمتطلبات إنتاجكم.",
      'about.stat1':      'سنوات خبرة',
      'about.stat2':      'عملاء شركاء',
      'about.stat3':      'مواد خام',
      'about.stat4':      'التزام بالجودة',
      'about.p1.title':   'جودة معتمدة',
      'about.p1.desc':    "منتجاتنا تلتزم بأصرم المعايير الدولية. جودة ثابتة في كل تسليم.",
      'about.p2.title':   'التميز التقني',
      'about.p2.desc':    "أكثر من 30 عامًا من الإتقان في قطاع الزيوت والدهون النباتية. استشارة وخبرة مكيفة مع كل احتياج صناعي.",
      'about.p3.title':   'الابتكار والتكنولوجيا',
      'about.p3.desc':    "عمليات حديثة وحلول عالية الأداء طورت لتلبية متطلبات الصناعة الغذائية.",
      'about.p4.title':   'شراكة دائمة',
      'about.p4.desc':    "علاقات ثقة مبنية على الجودة والشفافية والدعم العميل المستجيب.",
      'about.cta':        'اكتشف منتجاتنا',
      'about.modal.quote':'طلب عرض أسعار',

      'prod.badge': 'الكتالوج الكامل',
      'prod.title': 'منتجاتنا <span class="products__title-gradient">حسب التطبيق</span>',
      'prod.sub':   "تصفح مجموعتنا الكاملة، مصنفة حسب مجالات الاستخدام الصناعي.",

      'app.breadcrumb.products': 'المنتجات',
      'app.badge':      'التطبيق',
      'app.adv.badge':  'المزايا',
      'app.adv.title':  'لماذا تختار بالتيمار لـ<span class="products__title-gradient" id="app-detail-title-inline">هذا التطبيق</span>؟',
      'app.range.badge':'المجموعة المخصصة',
      'app.range.title':'منتجات <span class="products__title-gradient" id="app-products-title-inline">هذا التطبيق</span>',
      'app.range.sub':  'مختارة من مجموعتنا الكاملة لتلبية متطلبات هذا التطبيق.',
      'app.empty':      'لا توجد منتجات محددة لهذا التطبيق.',
      'app.back':       'العودة إلى التطبيقات',
      'app.contact.btn':'طلب عرض أسعار',
      'app.page.sub':   'اكتشف مزايا ومنتجات بالتيمار لهذا التطبيق.',
    }
  }

  /* ── Public API ───────────────────────────────────────────── */
  window.i18n = {
    t: function (key) {
      var lang = getLang()
      return (T[lang] && T[lang][key] !== undefined) ? T[lang][key] : (T.fr[key] || key)
    },
    getLang: getLang,
    setLang: setLang,
  }

  /* ── Helpers ──────────────────────────────────────────────── */
  function getLang () {
    var saved = localStorage.getItem(LANG_KEY)
    return (saved && LANGS.indexOf(saved) !== -1) ? saved : 'fr'
  }

  function applyTranslations (lang) {
    var t = T[lang] || T.fr

    /* textContent */
    var i18nEls = document.querySelectorAll('[data-i18n]')
    for (var i = 0; i < i18nEls.length; i++) {
      var key = i18nEls[i].getAttribute('data-i18n')
      if (t[key] !== undefined) i18nEls[i].textContent = t[key]
    }

    /* innerHTML */
    var htmlEls = document.querySelectorAll('[data-i18n-html]')
    for (var j = 0; j < htmlEls.length; j++) {
      var hkey = htmlEls[j].getAttribute('data-i18n-html')
      if (t[hkey] !== undefined) htmlEls[j].innerHTML = t[hkey]
    }

    /* placeholder */
    var phEls = document.querySelectorAll('[data-i18n-placeholder]')
    for (var k = 0; k < phEls.length; k++) {
      var pkey = phEls[k].getAttribute('data-i18n-placeholder')
      if (t[pkey] !== undefined) phEls[k].placeholder = t[pkey]
    }

    /* html lang + dir */
    document.documentElement.lang = lang
    document.documentElement.dir  = (lang === 'ar') ? 'rtl' : 'ltr'

    /* Arabic font */
    if (lang === 'ar') loadArabicFont()
  }

  function setLang (lang) {
    if (LANGS.indexOf(lang) === -1) lang = 'fr'
    localStorage.setItem(LANG_KEY, lang)
    applyTranslations(lang)
    updateSwitcherUI(lang)
  }

  function updateSwitcherUI (lang) {
    var current = document.getElementById('lang-current')
    if (current) current.textContent = LABELS[lang]
    var opts = document.querySelectorAll('.lang-option')
    for (var i = 0; i < opts.length; i++) {
      opts[i].classList.toggle('lang-option--active', opts[i].getAttribute('data-lang') === lang)
    }
  }

  function loadArabicFont () {
    if (document.getElementById('baltimar-arabic-font')) return
    var link = document.createElement('link')
    link.id   = 'baltimar-arabic-font'
    link.rel  = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap'
    document.head.appendChild(link)
  }

  /* ── Init ─────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    var lang = getLang()
    applyTranslations(lang)
    updateSwitcherUI(lang)

    /* Dropdown toggle */
    var btn      = document.getElementById('lang-btn')
    var dropdown = document.getElementById('lang-dropdown')
    if (btn && dropdown) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation()
        var open = dropdown.classList.toggle('lang-dropdown--open')
        btn.setAttribute('aria-expanded', String(open))
      })
      document.addEventListener('click', function () {
        dropdown.classList.remove('lang-dropdown--open')
        if (btn) btn.setAttribute('aria-expanded', 'false')
      })
    }

    /* Option clicks (desktop + mobile) */
    var opts = document.querySelectorAll('.lang-option')
    for (var i = 0; i < opts.length; i++) {
      opts[i].addEventListener('click', function (e) {
        e.stopPropagation()
        setLang(this.getAttribute('data-lang'))
        if (dropdown) dropdown.classList.remove('lang-dropdown--open')
        if (btn) btn.setAttribute('aria-expanded', 'false')
      })
    }
  })
})()
