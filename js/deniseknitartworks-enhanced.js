/*
  Denise Knit ArtWorks — Enhanced interactions layer
  - Multi-photo product galleries
  - Full-screen lightbox with zoom + keyboard/swipe
  - Scroll reveal (IntersectionObserver)
  - Gallery search + sort + masonry size class
  - Theme switcher (Aube / Midi / Crépuscule / Nuit)
  - Mobile bottom-bar active state sync
  - Custom cursor (desktop)
*/
(function ($) {
  'use strict';

  // -----------------------------------------------------------
  // Translations supplement (FR/EN/DE) — extends the existing
  // translations object loaded by deniseknitartworks-script.js
  // -----------------------------------------------------------
  var supplement = {
    en: {
      nav_atelier: 'Atelier',
      brand_kicker: 'atelier de Glaris',
      nav_drawer_eyebrow: 'Sections',
      nav_drawer_footnote: 'Hand-knit with care · Glarus, Switzerland',
      hero_eyebrow: 'Hand-knit since retirement · Glarus, Switzerland',
      hero_title_main: 'Quiet rows, alpine light, and a',
      hero_title_script: 'second life',
      hero_lede: 'I am Denise — knitter by passion, storyteller by heart. After a long career between public service and private offices, retirement gave me the room to braid wool, breath and memories.',
      hero_paragraph: 'This atelier journal gathers my hand-knit pieces, the techniques I love, and the alpine palettes that guide my needles. Take your time, follow the threads, and feel free to write me.',
      hero_cta_gallery: 'Discover the gallery',
      hero_cta_atelier: 'Step into the atelier',
      hero_signature: 'Denise',
      hero_signature_role: 'Knitter & retirement storyteller',
      slide2_eyebrow: 'The collection · Wool jewels',
      slide2_title_main: 'Wool jewels, sculpted',
      slide2_title_script: 'row by row',
      slide2_lede: 'Shawls, ponchos, caftans, mittens, socks — small-batch pieces hand-knit in traceable Swiss merino, baby alpaca, kid mohair and organic cotton.',
      slide2_paragraph: 'Each piece carries an alpine palette name and a complete technical sheet — fibre, gauge, needles, hours of slow stitching — so you may wear it knowing every gesture behind it.',
      slide2_cta_primary: 'Open the gallery',
      slide2_cta_secondary: 'Read the journal',
      slide2_pieces_n: '120+',
      slide2_pieces_label: 'Hand-knit pieces · 12 alpine palettes',
      slide3_eyebrow: 'Atelier of Glarus · An invitation',
      slide3_title_main: 'Where wool becomes',
      slide3_title_script: 'memory',
      slide3_lede: 'In the heart of the Glarner Alps, my atelier gathers north light, a wood stove, and the slow rhythm of mountain mornings.',
      slide3_paragraph: 'Step inside to discover the four pillars of my craft, my retirement journey row by row, and the studio rituals I love to share. Or simply write me — I always answer.',
      slide3_cta_primary: 'Enter the atelier',
      slide3_cta_secondary: 'Write to Denise',
      slide3_signature: 'Glarus',
      slide3_signature_role: 'Switzerland · since 2017',
      hero_stat_pieces_n: '120+',
      hero_stat_pieces: 'Hand-knit pieces',
      hero_stat_hours_n: '5 200 h',
      hero_stat_hours: 'Slow stitching hours',
      hero_stat_palettes_n: '12',
      hero_stat_palettes: 'Alpine palettes',
      hero_stat_years_n: '8 years',
      hero_stat_years: 'Of retirement craft',
      hero_strip_socks: 'Wool socks',
      hero_strip_shawls: 'Shawls & wraps',
      hero_strip_ponchos: 'Ponchos',
      hero_strip_caftans: 'Caftans',
      atelier_eyebrow: 'My atelier · My activities',
      atelier_title: 'Threads of a quiet retirement',
      atelier_lede: 'Four pillars guide my days, four ways to honour wool, alpine seasons and the people who wear my pieces.',
      atelier_pillar1_title: 'The hand',
      atelier_pillar1_text: 'Every piece is hand-knit on wooden needles. No factories, no shortcuts — just rows, breathing, and Swiss patience.',
      atelier_pillar2_title: 'The fibre',
      atelier_pillar2_text: 'Swiss merino, baby alpaca, kid mohair, organic cotton: I source small, traceable batches and meet many of the spinners by name.',
      atelier_pillar3_title: 'The seasons',
      atelier_pillar3_text: 'Glarus light dictates my colours — frost on the Linth in winter, larch gold in autumn, alpine teal at dusk.',
      atelier_pillar4_title: 'The sharing',
      atelier_pillar4_text: 'I host monthly knit nights, write care guides, and gift each piece with a hand-written note about its making.',
      atelier_timeline_title: 'A retirement journey, row by row',
      atelier_timeline_lede: 'From the first cast-on after retirement to today’s atelier — a few quiet milestones.',
      atelier_timeline_2017_year: '2017',
      atelier_timeline_2017_title: 'First cast-on',
      atelier_timeline_2017_text: 'Retirement opens the door. I cast on a pair of socks for my eldest grandson — and never put the needles down.',
      atelier_timeline_2019_year: '2019',
      atelier_timeline_2019_title: 'A studio of my own',
      atelier_timeline_2019_text: 'I convert the chalet attic into a tiny atelier — north light, wood stove, and a vintage swift rescued in Basel.',
      atelier_timeline_2021_year: '2021',
      atelier_timeline_2021_title: 'Glarus knit nights',
      atelier_timeline_2021_text: 'Monthly knit circles begin at Gemeindehausplatz. Tea, patterns, and stories cross generations.',
      atelier_timeline_2024_year: '2024',
      atelier_timeline_2024_title: 'Twelve alpine palettes',
      atelier_timeline_2024_text: 'I finalise twelve signature palettes — from Amber Honey to Misty Teal — each tied to a Glaronese place.',
      atelier_studio_title: 'Glimpses of the chalet studio',
      atelier_studio_lede: 'A few hand-held views: yarn, needles, light and the quiet rituals between rows.',
      atelier_studio_cap_window: 'North-facing window',
      atelier_studio_cap_yarns: 'Yarn cakes of the week',
      atelier_studio_cap_hands: 'Hand-knit close-up',
      atelier_studio_cap_swatch: 'Swatches & journal',
      atelier_studio_cap_palette: 'Palette study',
      atelier_studio_cap_outdoor: 'Outdoor inspiration',
      atelier_studio_eyebrow: 'Studio',
      atelier_timeline_title_eyebrow: 'Timeline',
      atelier_read_journal: 'Read the journal',
      quickview_view_full: 'View full piece',
      quickview_close: 'Close',
      blog_search_placeholder: 'Search the journal…',
      blog_no_results: 'No story matches this search.',
      article_pieces_heading: 'Pieces evoked in this article',
      consent_text: 'This site uses minimal storage (theme, language, image cache) to enhance your visit. No tracking.',
      consent_accept: 'Got it',
      consent_more: 'Contact',
      gallery_extended_eyebrow: 'Full collection',
      gallery_extended_filter_mittens: 'Mittens',
      gallery_extended_category_mittens: 'Mittens',
      gallery_ext_shawl_mistyteal_title: 'Misty Teal Shawl',
      gallery_ext_caftan_cedar2_title: 'Cedar Vista — Studio',
      gallery_ext_shawl_umber_title: 'Rustic Umber Stole',
      gallery_ext_shawl_cappuccino_title: 'Cozy Cappuccino Wrap',
      product_section_more_photos: 'More views',
      gallery_search_placeholder: 'Search a piece, palette, or technique…',
      gallery_sort_label: 'Sort by',
      gallery_sort_recent: 'Most recent',
      gallery_sort_palette: 'By palette',
      gallery_sort_category: 'By category',
      gallery_quickview: 'Quick view',
      breadcrumb_home: 'Home',
      breadcrumb_gallery: 'Gallery',
      breadcrumb_blog: 'Journal',
      breadcrumb_atelier: 'Atelier',
      product_section_story: 'The story',
      product_section_specs: 'Technical sheet',
      product_section_palette: 'Palette',
      product_section_care: 'Care & wash',
      product_section_articles: 'Read on the journal',
      product_section_pieces: 'Sister pieces',
      product_label_gauge: 'Gauge',
      product_label_needles: 'Needles',
      product_label_difficulty: 'Difficulty',
      product_label_origin: 'Origin',
      product_label_pattern: 'Pattern',
      product_label_season: 'Season',
      product_care_default: 'Cool hand wash with lanolin soap. Press gently between towels and dry flat on a blocking mat. Store folded with cedar shavings to keep moths away.',
      product_quote_default: '“Every stitch I knit is a small breath I take for the future.”',
      product_quote_author: 'Denise Gillioz',
      lightbox_close: 'Close',
      lightbox_prev: 'Previous',
      lightbox_next: 'Next',
      lightbox_zoom: 'Zoom',
      lightbox_reset: 'Reset',
      lightbox_download: 'Open in new tab',
      lightbox_caption_default: 'Hand-knit by Denise Gillioz, Glarus.',
      bottombar_home: 'Home',
      bottombar_gallery: 'Gallery',
      bottombar_atelier: 'Atelier',
      bottombar_blog: 'Journal',
      bottombar_contact: 'Contact',
      theme_label: 'Atelier light',
      theme_dawn: 'Dawn',
      theme_noon: 'Noon',
      theme_dusk: 'Dusk',
      theme_night: 'Night',
      back_to_top: 'Back to top'
    },
    fr: {
      nav_home: 'Accueil',
      nav_gallery: 'Galerie',
      nav_atelier: 'Atelier',
      nav_about: 'À propos',
      nav_blog: 'Journal',
      nav_contact: 'Contact',
      brand_kicker: 'atelier de Glaris',
      nav_drawer_eyebrow: 'Sections',
      nav_drawer_footnote: 'Tricoté avec soin · Glaris, Suisse',
      hero_eyebrow: 'Tricotée à la main depuis la retraite · Glaris, Suisse',
      hero_title_main: 'Rangs paisibles, lumière alpine et une',
      hero_title_script: 'seconde vie',
      hero_lede: 'Je suis Denise — tricoteuse par passion, conteuse par tempérament. Après une longue carrière entre le service public et les bureaux privés, la retraite m’a offert le temps de tresser laine, souffle et souvenirs.',
      hero_paragraph: 'Ce journal d’atelier rassemble mes pièces tricotées main, les techniques que j’aime et les palettes alpines qui guident mes aiguilles. Prenez le temps, suivez le fil, et écrivez-moi librement.',
      hero_cta_gallery: 'Voir la galerie',
      hero_cta_atelier: 'Entrer dans l’atelier',
      hero_signature: 'Denise',
      hero_signature_role: 'Tricoteuse & conteuse de retraite',
      slide2_eyebrow: 'La collection · Bijoux en laine',
      slide2_title_main: 'Bijoux en laine, sculptés',
      slide2_title_script: 'rang par rang',
      slide2_lede: 'Châles, ponchos, caftans, mitaines, chaussettes — petites séries tricotées main, en mérinos suisse, bébé alpaga, kid mohair et coton bio tracés.',
      slide2_paragraph: 'Chaque pièce porte un nom de palette alpine et une fiche technique complète — fibre, échantillon, aiguilles, heures de rangs lents — pour la porter en connaissance du geste.',
      slide2_cta_primary: 'Ouvrir la galerie',
      slide2_cta_secondary: 'Lire le journal',
      slide2_pieces_n: '120+',
      slide2_pieces_label: 'Pièces tricotées main · 12 palettes alpines',
      slide3_eyebrow: 'Atelier de Glaris · Une invitation',
      slide3_title_main: 'Là où la laine devient',
      slide3_title_script: 'mémoire',
      slide3_lede: 'Au cœur des Alpes Glaronaises, mon atelier rassemble la lumière du nord, le poêle à bois et le rythme lent des matins de montagne.',
      slide3_paragraph: 'Entrez pour découvrir les quatre piliers de mon métier, mon parcours de retraite rang après rang, et les rituels d’atelier que j’aime partager. Ou simplement écrivez-moi — je réponds toujours.',
      slide3_cta_primary: 'Entrer dans l’atelier',
      slide3_cta_secondary: 'Écrire à Denise',
      slide3_signature: 'Glaris',
      slide3_signature_role: 'Suisse · depuis 2017',
      hero_stat_pieces_n: '120+',
      hero_stat_pieces: 'Pièces tricotées main',
      hero_stat_hours_n: '5 200 h',
      hero_stat_hours: 'Heures de tricot lent',
      hero_stat_palettes_n: '12',
      hero_stat_palettes: 'Palettes alpines',
      hero_stat_years_n: '8 ans',
      hero_stat_years: 'D’artisanat retraité',
      hero_strip_socks: 'Chaussettes',
      hero_strip_shawls: 'Châles & étoles',
      hero_strip_ponchos: 'Ponchos',
      hero_strip_caftans: 'Caftans',
      atelier_eyebrow: 'Mon atelier · Mes activités',
      atelier_title: 'Les fils d’une retraite paisible',
      atelier_lede: 'Quatre piliers guident mes journées, quatre manières d’honorer la laine, les saisons alpines et celles et ceux qui portent mes pièces.',
      atelier_pillar1_title: 'Le geste',
      atelier_pillar1_text: 'Chaque pièce est tricotée main sur aiguilles bois. Pas d’usine, pas de raccourci — seulement les rangs, le souffle, la patience suisse.',
      atelier_pillar2_title: 'La matière',
      atelier_pillar2_text: 'Mérinos suisse, bébé alpaga, kid mohair, coton bio : je commande de petits lots traçables et je connais beaucoup de fileuses par leur prénom.',
      atelier_pillar3_title: 'Les saisons',
      atelier_pillar3_text: 'La lumière de Glaris dicte mes couleurs — givre sur la Linth en hiver, or des mélèzes en automne, teal alpin au crépuscule.',
      atelier_pillar4_title: 'Le partage',
      atelier_pillar4_text: 'J’organise des soirées tricot mensuelles, j’écris des guides d’entretien et chaque pièce part avec un mot manuscrit sur sa fabrication.',
      atelier_timeline_title: 'Un voyage de retraite, rang après rang',
      atelier_timeline_lede: 'Du premier rang lancé après la retraite à l’atelier d’aujourd’hui — quelques étapes paisibles.',
      atelier_timeline_2017_year: '2017',
      atelier_timeline_2017_title: 'Premier rang',
      atelier_timeline_2017_text: 'La retraite ouvre la porte. Je monte une paire de chaussettes pour mon aîné de petit-fils — et je ne quitte plus les aiguilles.',
      atelier_timeline_2019_year: '2019',
      atelier_timeline_2019_title: 'Un atelier à moi',
      atelier_timeline_2019_text: 'Je convertis le grenier du chalet en petit atelier — lumière nord, poêle à bois, dévidoir vintage chiné à Bâle.',
      atelier_timeline_2021_year: '2021',
      atelier_timeline_2021_title: 'Soirées tricot à Glaris',
      atelier_timeline_2021_text: 'Les cercles de tricot mensuels commencent à la Gemeindehausplatz. Thé, patrons et histoires traversent les générations.',
      atelier_timeline_2024_year: '2024',
      atelier_timeline_2024_title: 'Douze palettes alpines',
      atelier_timeline_2024_text: 'Je fixe douze palettes signature — d’Ambre Miel à Teal Brumeux — chacune liée à un lieu glaronais.',
      atelier_studio_title: 'Aperçus du studio chalet',
      atelier_studio_lede: 'Quelques vues prises à la main : laine, aiguilles, lumière et rituels paisibles entre les rangs.',
      atelier_studio_cap_window: 'Fenêtre côté nord',
      atelier_studio_cap_yarns: 'Pelotes de la semaine',
      atelier_studio_cap_hands: 'Tricot main, gros plan',
      atelier_studio_cap_swatch: 'Échantillons & journal',
      atelier_studio_cap_palette: 'Étude de palette',
      atelier_studio_cap_outdoor: 'Inspiration extérieure',
      atelier_studio_eyebrow: 'Studio',
      atelier_timeline_title_eyebrow: 'Chronologie',
      atelier_read_journal: 'Lire le journal',
      quickview_view_full: 'Voir la fiche complète',
      quickview_close: 'Fermer',
      blog_search_placeholder: 'Chercher dans le journal…',
      blog_no_results: 'Aucune histoire ne correspond.',
      article_pieces_heading: 'Pièces évoquées dans cet article',
      consent_text: 'Ce site utilise un stockage minimal (thème, langue, cache d’images) pour enrichir votre visite. Aucun traçage.',
      consent_accept: 'D’accord',
      consent_more: 'Contact',
      gallery_extended_eyebrow: 'Collection complète',
      gallery_extended_filter_mittens: 'Mitaines',
      gallery_extended_category_mittens: 'Mitaines',
      gallery_ext_shawl_mistyteal_title: 'Châle Teal Brumeux',
      gallery_ext_caftan_cedar2_title: 'Cèdre Vista — Studio',
      gallery_ext_shawl_umber_title: 'Stole Umbra Rustique',
      gallery_ext_shawl_cappuccino_title: 'Étole Cappuccino Douillet',
      product_section_more_photos: 'Autres vues',
      gallery_search_placeholder: 'Chercher une pièce, une palette, une technique…',
      gallery_sort_label: 'Trier par',
      gallery_sort_recent: 'Plus récent',
      gallery_sort_palette: 'Par palette',
      gallery_sort_category: 'Par catégorie',
      gallery_quickview: 'Aperçu',
      breadcrumb_home: 'Accueil',
      breadcrumb_gallery: 'Galerie',
      breadcrumb_blog: 'Journal',
      breadcrumb_atelier: 'Atelier',
      product_section_story: 'L’histoire',
      product_section_specs: 'Fiche technique',
      product_section_palette: 'Palette',
      product_section_care: 'Entretien & lavage',
      product_section_articles: 'À lire dans le journal',
      product_section_pieces: 'Pièces sœurs',
      product_label_gauge: 'Échantillon',
      product_label_needles: 'Aiguilles',
      product_label_difficulty: 'Niveau',
      product_label_origin: 'Origine de la laine',
      product_label_pattern: 'Patron',
      product_label_season: 'Saison',
      product_care_default: 'Lavage main à l’eau fraîche, savon à la lanoline. Presser entre deux serviettes, sécher à plat sur tapis de blocage. Stocker plié avec des copeaux de cèdre contre les mites.',
      product_quote_default: '« Chaque maille tricotée est un petit souffle que je prends pour l’avenir. »',
      product_quote_author: 'Denise Gillioz',
      lightbox_close: 'Fermer',
      lightbox_prev: 'Précédent',
      lightbox_next: 'Suivant',
      lightbox_zoom: 'Zoom',
      lightbox_reset: 'Réinitialiser',
      lightbox_download: 'Ouvrir dans un onglet',
      lightbox_caption_default: 'Tricoté main par Denise Gillioz, Glaris.',
      bottombar_home: 'Accueil',
      bottombar_gallery: 'Galerie',
      bottombar_atelier: 'Atelier',
      bottombar_blog: 'Journal',
      bottombar_contact: 'Contact',
      theme_label: 'Lumière de l’atelier',
      theme_dawn: 'Aube',
      theme_noon: 'Midi',
      theme_dusk: 'Crépuscule',
      theme_night: 'Nuit',
      back_to_top: 'Haut de page'
    },
    de: {
      nav_atelier: 'Atelier',
      brand_kicker: 'atelier de Glaris',
      nav_drawer_eyebrow: 'Bereiche',
      nav_drawer_footnote: 'Mit Sorgfalt gestrickt · Glarus, Schweiz',
      hero_eyebrow: 'Handgestrickt seit der Pension · Glarus, Schweiz',
      hero_title_main: 'Stille Reihen, Alpenlicht und ein',
      hero_title_script: 'zweites Leben',
      hero_lede: 'Ich bin Denise — Strickerin aus Leidenschaft, Erzählerin aus Herzensgrund. Nach einer langen Laufbahn zwischen öffentlichem Dienst und privaten Büros schenkte mir die Pension den Raum, Wolle, Atem und Erinnerungen zu verflechten.',
      hero_paragraph: 'Dieses Atelierjournal versammelt meine handgestrickten Stücke, die Techniken, die ich liebe, und die Alpenpaletten, die meine Nadeln führen. Lassen Sie sich Zeit, folgen Sie dem Faden — und schreiben Sie mir gern.',
      hero_cta_gallery: 'Galerie entdecken',
      hero_cta_atelier: 'Atelier betreten',
      hero_signature: 'Denise',
      hero_signature_role: 'Strickerin & Erzählerin im Ruhestand',
      slide2_eyebrow: 'Die Kollektion · Wollschmuck',
      slide2_title_main: 'Wollschmuck, geformt',
      slide2_title_script: 'Reihe um Reihe',
      slide2_lede: 'Schals, Ponchos, Kaftane, Stulpen, Socken — kleine Serien, von Hand gestrickt aus rückverfolgbarem Schweizer Merino, Babyalpaka, Kid-Mohair und Bio-Baumwolle.',
      slide2_paragraph: 'Jedes Stück trägt einen alpinen Palettennamen und ein vollständiges technisches Datenblatt — Faser, Maschenprobe, Nadeln, Stunden langsamer Reihen — damit Sie es in Kenntnis jeder Geste tragen.',
      slide2_cta_primary: 'Galerie öffnen',
      slide2_cta_secondary: 'Journal lesen',
      slide2_pieces_n: '120+',
      slide2_pieces_label: 'Handgestrickte Stücke · 12 Alpenpaletten',
      slide3_eyebrow: 'Atelier Glarus · Eine Einladung',
      slide3_title_main: 'Wo Wolle zu',
      slide3_title_script: 'Erinnerung wird',
      slide3_lede: 'Im Herzen der Glarner Alpen vereint mein Atelier Nordlicht, Holzofen und den langsamen Rhythmus der Bergmorgen.',
      slide3_paragraph: 'Treten Sie ein, um die vier Säulen meines Handwerks zu entdecken, meine Pensionsreise Reihe für Reihe und die Atelier-Rituale, die ich gerne teile. Oder schreiben Sie mir einfach — ich antworte immer.',
      slide3_cta_primary: 'Atelier betreten',
      slide3_cta_secondary: 'An Denise schreiben',
      slide3_signature: 'Glarus',
      slide3_signature_role: 'Schweiz · seit 2017',
      hero_stat_pieces_n: '120+',
      hero_stat_pieces: 'Handgestrickte Stücke',
      hero_stat_hours_n: '5 200 h',
      hero_stat_hours: 'Stunden langsamer Maschen',
      hero_stat_palettes_n: '12',
      hero_stat_palettes: 'Alpenpaletten',
      hero_stat_years_n: '8 Jahre',
      hero_stat_years: 'Im Pensionshandwerk',
      hero_strip_socks: 'Socken',
      hero_strip_shawls: 'Schals & Stolen',
      hero_strip_ponchos: 'Ponchos',
      hero_strip_caftans: 'Kaftane',
      atelier_eyebrow: 'Mein Atelier · Meine Tätigkeiten',
      atelier_title: 'Fäden eines stillen Ruhestands',
      atelier_lede: 'Vier Säulen leiten meine Tage, vier Wege, Wolle, Alpenzeiten und meine Trägerinnen zu ehren.',
      atelier_pillar1_title: 'Die Hand',
      atelier_pillar1_text: 'Jedes Stück wird von Hand auf Holznadeln gestrickt. Keine Fabrik, keine Abkürzung — nur Reihen, Atem und Schweizer Geduld.',
      atelier_pillar2_title: 'Die Faser',
      atelier_pillar2_text: 'Schweizer Merino, Babyalpaka, Kid-Mohair, Bio-Baumwolle: kleine, rückverfolgbare Chargen, viele Spinnerinnen kenne ich beim Vornamen.',
      atelier_pillar3_title: 'Die Jahreszeiten',
      atelier_pillar3_text: 'Das Glarner Licht bestimmt meine Farben — Frost an der Linth im Winter, Lärchengold im Herbst, Alpenteal in der Dämmerung.',
      atelier_pillar4_title: 'Das Teilen',
      atelier_pillar4_text: 'Ich richte monatliche Strickabende aus, schreibe Pflegeleitfäden, und jedes Stück erhält eine handgeschriebene Notiz zur Entstehung.',
      atelier_timeline_title: 'Eine Pensionsreise, Reihe um Reihe',
      atelier_timeline_lede: 'Von der ersten Anschlagreihe nach der Pension bis zum heutigen Atelier — ein paar stille Etappen.',
      atelier_timeline_2017_year: '2017',
      atelier_timeline_2017_title: 'Erster Anschlag',
      atelier_timeline_2017_text: 'Die Pension öffnet die Tür. Ich schlage Socken für meinen ältesten Enkel an — und lege die Nadeln nicht mehr ab.',
      atelier_timeline_2019_year: '2019',
      atelier_timeline_2019_title: 'Ein eigenes Atelier',
      atelier_timeline_2019_text: 'Ich verwandle den Chaletspeicher in ein kleines Atelier — Nordlicht, Holzofen, in Basel ergatterter Vintage-Spuler.',
      atelier_timeline_2021_year: '2021',
      atelier_timeline_2021_title: 'Glarner Strickabende',
      atelier_timeline_2021_text: 'Die monatlichen Strickkreise beginnen am Gemeindehausplatz. Tee, Anleitungen und Geschichten durch die Generationen.',
      atelier_timeline_2024_year: '2024',
      atelier_timeline_2024_title: 'Zwölf Alpenpaletten',
      atelier_timeline_2024_text: 'Ich finalisiere zwölf Signaturpaletten — von Bernsteinhonig bis Nebelteal — jede an einen Glarner Ort gebunden.',
      atelier_studio_title: 'Einblicke ins Chaletstudio',
      atelier_studio_lede: 'Ein paar Handaufnahmen: Wolle, Nadeln, Licht und stille Rituale zwischen den Reihen.',
      atelier_studio_cap_window: 'Fenster Richtung Norden',
      atelier_studio_cap_yarns: 'Wollknäuel der Woche',
      atelier_studio_cap_hands: 'Handarbeit, Nahaufnahme',
      atelier_studio_cap_swatch: 'Maschenproben & Tagebuch',
      atelier_studio_cap_palette: 'Farbenstudie',
      atelier_studio_cap_outdoor: 'Inspiration draußen',
      atelier_studio_eyebrow: 'Studio',
      atelier_timeline_title_eyebrow: 'Zeitachse',
      atelier_read_journal: 'Journal lesen',
      quickview_view_full: 'Vollständige Karte ansehen',
      quickview_close: 'Schließen',
      blog_search_placeholder: 'Im Journal suchen …',
      blog_no_results: 'Keine Geschichte passt zur Suche.',
      article_pieces_heading: 'In diesem Artikel erwähnte Stücke',
      consent_text: 'Diese Seite verwendet minimalen Speicher (Theme, Sprache, Bildcache), um Ihren Besuch zu bereichern. Kein Tracking.',
      consent_accept: 'Verstanden',
      consent_more: 'Kontakt',
      gallery_extended_eyebrow: 'Gesamtkollektion',
      gallery_extended_filter_mittens: 'Stulpen',
      gallery_extended_category_mittens: 'Stulpen',
      gallery_ext_shawl_mistyteal_title: 'Nebelteal-Schal',
      gallery_ext_caftan_cedar2_title: 'Zedernblick — Studio',
      gallery_ext_shawl_umber_title: 'Rustikale Umbra-Stola',
      gallery_ext_shawl_cappuccino_title: 'Cozy-Cappuccino-Stola',
      product_section_more_photos: 'Weitere Ansichten',
      gallery_search_placeholder: 'Stück, Palette oder Technik suchen …',
      gallery_sort_label: 'Sortieren nach',
      gallery_sort_recent: 'Neueste',
      gallery_sort_palette: 'Nach Palette',
      gallery_sort_category: 'Nach Kategorie',
      gallery_quickview: 'Schnellansicht',
      breadcrumb_home: 'Startseite',
      breadcrumb_gallery: 'Galerie',
      breadcrumb_blog: 'Journal',
      breadcrumb_atelier: 'Atelier',
      product_section_story: 'Die Geschichte',
      product_section_specs: 'Technisches Datenblatt',
      product_section_palette: 'Palette',
      product_section_care: 'Pflege & Wäsche',
      product_section_articles: 'Im Journal weiterlesen',
      product_section_pieces: 'Schwesterstücke',
      product_label_gauge: 'Maschenprobe',
      product_label_needles: 'Nadeln',
      product_label_difficulty: 'Niveau',
      product_label_origin: 'Wollherkunft',
      product_label_pattern: 'Anleitung',
      product_label_season: 'Saison',
      product_care_default: 'Handwäsche kalt mit Lanolinseife. Sanft zwischen Tüchern abdrücken, flach auf der Blockmatte trocknen. Gefaltet mit Zedernspänen lagern, um Motten fernzuhalten.',
      product_quote_default: '„Jede Masche ist ein kleiner Atemzug für die Zukunft.“',
      product_quote_author: 'Denise Gillioz',
      lightbox_close: 'Schließen',
      lightbox_prev: 'Vorherige',
      lightbox_next: 'Nächste',
      lightbox_zoom: 'Zoom',
      lightbox_reset: 'Zurücksetzen',
      lightbox_download: 'In neuem Tab',
      lightbox_caption_default: 'Handgestrickt von Denise Gillioz, Glarus.',
      bottombar_home: 'Start',
      bottombar_gallery: 'Galerie',
      bottombar_atelier: 'Atelier',
      bottombar_blog: 'Journal',
      bottombar_contact: 'Kontakt',
      theme_label: 'Atelierlicht',
      theme_dawn: 'Morgendämmerung',
      theme_noon: 'Mittag',
      theme_dusk: 'Abenddämmerung',
      theme_night: 'Nacht',
      back_to_top: 'Nach oben'
    }
  };

  function mergeSupplement() {
    if (typeof window.translations === 'undefined') return;
    Object.keys(supplement).forEach(function (lang) {
      if (!window.translations[lang]) window.translations[lang] = {};
      Object.keys(supplement[lang]).forEach(function (key) {
        if (window.translations[lang][key] === undefined) {
          window.translations[lang][key] = supplement[lang][key];
        }
      });
    });
  }

  // -----------------------------------------------------------
  // Scroll reveal
  // -----------------------------------------------------------
  function setupReveal() {
    if (!('IntersectionObserver' in window)) {
      $('.dka-reveal').addClass('is-visible');
      return;
    }
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.dka-reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  // -----------------------------------------------------------
  // Lightbox
  // -----------------------------------------------------------
  var lightbox = {
    el: null,
    img: null,
    counter: null,
    caption: null,
    thumbs: null,
    items: [],
    current: 0,
    zoom: 1,
    panX: 0,
    panY: 0,
    isPanning: false,
    startX: 0,
    startY: 0,

    init: function () {
      if (this.el) return;
      var html = ''
        + '<div class="dka-lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">'
        +   '<div class="dka-lightbox-toolbar">'
        +     '<span class="dka-lightbox-counter">1 / 1</span>'
        +     '<div class="dka-lightbox-actions">'
        +       '<button type="button" class="dka-lightbox-btn" data-action="zoom-out" aria-label="Zoom out"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"/><line x1="20" y1="20" x2="16.5" y2="16.5"/><line x1="8" y1="11" x2="14" y2="11"/></svg></button>'
        +       '<button type="button" class="dka-lightbox-btn" data-action="zoom-in" aria-label="Zoom in"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"/><line x1="20" y1="20" x2="16.5" y2="16.5"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="11" y1="8" x2="11" y2="14"/></svg></button>'
        +       '<button type="button" class="dka-lightbox-btn" data-action="reset" aria-label="Reset"><svg viewBox="0 0 24 24"><path d="M4 8a8 8 0 1 1-2 5"/><polyline points="2 3 2 8 7 8"/></svg></button>'
        +       '<button type="button" class="dka-lightbox-btn" data-action="close" aria-label="Close"><svg viewBox="0 0 24 24"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg></button>'
        +     '</div>'
        +   '</div>'
        +   '<div class="dka-lightbox-stage">'
        +     '<button type="button" class="dka-lightbox-btn dka-lightbox-arrow prev" data-action="prev" aria-label="Previous"><svg viewBox="0 0 24 24"><polyline points="15 6 9 12 15 18"/></svg></button>'
        +     '<img class="dka-lightbox-image" alt="" />'
        +     '<button type="button" class="dka-lightbox-btn dka-lightbox-arrow next" data-action="next" aria-label="Next"><svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18"/></svg></button>'
        +   '</div>'
        +   '<div class="dka-lightbox-caption"></div>'
        +   '<div class="dka-lightbox-thumbs"></div>'
        + '</div>';
      $('body').append(html);
      this.el = document.querySelector('.dka-lightbox');
      this.img = this.el.querySelector('.dka-lightbox-image');
      this.counter = this.el.querySelector('.dka-lightbox-counter');
      this.caption = this.el.querySelector('.dka-lightbox-caption');
      this.thumbs = this.el.querySelector('.dka-lightbox-thumbs');
      this.bind();
    },

    bind: function () {
      var self = this;
      $(this.el).on('click', '[data-action]', function (e) {
        e.stopPropagation();
        var action = $(this).attr('data-action');
        if (action === 'close') self.close();
        if (action === 'prev') self.show(self.current - 1);
        if (action === 'next') self.show(self.current + 1);
        if (action === 'zoom-in') self.applyZoom(self.zoom + 0.4);
        if (action === 'zoom-out') self.applyZoom(self.zoom - 0.4);
        if (action === 'reset') self.applyZoom(1, true);
      });

      $(this.el).on('click', function (e) {
        if (e.target === self.el) self.close();
      });

      $(this.thumbs).on('click', '.dka-lightbox-thumb', function () {
        var idx = parseInt($(this).attr('data-index'), 10);
        self.show(idx);
      });

      $(document).on('keydown', function (e) {
        if (!self.el.classList.contains('is-open')) return;
        if (e.key === 'Escape') self.close();
        if (e.key === 'ArrowLeft') self.show(self.current - 1);
        if (e.key === 'ArrowRight') self.show(self.current + 1);
        if (e.key === '+' || e.key === '=') self.applyZoom(self.zoom + 0.4);
        if (e.key === '-' || e.key === '_') self.applyZoom(self.zoom - 0.4);
        if (e.key === '0') self.applyZoom(1, true);
      });

      // Click on image toggles zoom
      $(this.img).on('click', function (e) {
        e.stopPropagation();
        if (self.zoom === 1) self.applyZoom(2);
        else self.applyZoom(1, true);
      });

      // Drag to pan when zoomed
      var pointerDown = function (e) {
        if (self.zoom <= 1) return;
        self.isPanning = true;
        self.img.classList.add('is-grabbing');
        self.startX = (e.touches ? e.touches[0].clientX : e.clientX) - self.panX;
        self.startY = (e.touches ? e.touches[0].clientY : e.clientY) - self.panY;
      };
      var pointerMove = function (e) {
        if (!self.isPanning) return;
        var x = (e.touches ? e.touches[0].clientX : e.clientX) - self.startX;
        var y = (e.touches ? e.touches[0].clientY : e.clientY) - self.startY;
        self.panX = x;
        self.panY = y;
        self.applyTransform();
      };
      var pointerUp = function () {
        self.isPanning = false;
        self.img.classList.remove('is-grabbing');
      };
      this.img.addEventListener('mousedown', pointerDown);
      this.img.addEventListener('touchstart', pointerDown, { passive: true });
      window.addEventListener('mousemove', pointerMove);
      window.addEventListener('touchmove', pointerMove, { passive: true });
      window.addEventListener('mouseup', pointerUp);
      window.addEventListener('touchend', pointerUp);

      // Swipe on stage to navigate when not zoomed
      var stage = this.el.querySelector('.dka-lightbox-stage');
      var startX = 0, startY = 0;
      stage.addEventListener('touchstart', function (e) {
        if (self.zoom > 1) return;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }, { passive: true });
      stage.addEventListener('touchend', function (e) {
        if (self.zoom > 1) return;
        var endX = e.changedTouches[0].clientX;
        var endY = e.changedTouches[0].clientY;
        var dx = endX - startX;
        var dy = endY - startY;
        if (Math.abs(dx) > 60 && Math.abs(dy) < 60) {
          if (dx < 0) self.show(self.current + 1);
          else self.show(self.current - 1);
        }
      });
    },

    open: function (items, index) {
      this.init();
      this.items = items || [];
      if (!this.items.length) return;
      this.current = Math.max(0, Math.min(index || 0, this.items.length - 1));
      this.applyZoom(1, true);
      this.renderThumbs();
      this.show(this.current);
      this.el.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    },

    close: function () {
      if (!this.el) return;
      this.el.classList.remove('is-open');
      document.body.style.overflow = '';
    },

    show: function (idx) {
      if (!this.items.length) return;
      var len = this.items.length;
      idx = ((idx % len) + len) % len;
      this.current = idx;
      var item = this.items[idx];
      this.img.src = item.src;
      this.img.alt = item.alt || '';
      this.counter.textContent = (idx + 1) + ' / ' + len;
      this.caption.textContent = item.caption || '';
      this.applyZoom(1, true);
      $(this.thumbs).find('.dka-lightbox-thumb').removeClass('active');
      $(this.thumbs).find('.dka-lightbox-thumb[data-index="' + idx + '"]').addClass('active');
      var activeThumb = this.thumbs.querySelector('.dka-lightbox-thumb.active');
      if (activeThumb && typeof activeThumb.scrollIntoView === 'function') {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    },

    renderThumbs: function () {
      var self = this;
      this.thumbs.innerHTML = '';
      this.items.forEach(function (item, idx) {
        var t = document.createElement('div');
        t.className = 'dka-lightbox-thumb';
        t.setAttribute('data-index', idx);
        var img = document.createElement('img');
        img.src = item.thumb || item.src;
        img.alt = item.alt || '';
        img.loading = 'lazy';
        t.appendChild(img);
        self.thumbs.appendChild(t);
      });
    },

    applyZoom: function (z, reset) {
      this.zoom = Math.max(1, Math.min(3.5, z || 1));
      if (reset || this.zoom === 1) {
        this.panX = 0;
        this.panY = 0;
      }
      this.img.classList.toggle('is-zoomed', this.zoom > 1);
      this.applyTransform();
    },

    applyTransform: function () {
      this.img.style.transform = 'translate(' + this.panX + 'px, ' + this.panY + 'px) scale(' + this.zoom + ')';
    }
  };

  // -----------------------------------------------------------
  // Product photo gallery: thumbs <-> main image
  // -----------------------------------------------------------
  function setupProductGalleries() {
    $('.dka-product-gallery').each(function () {
      var $shell = $(this);
      var $main = $shell.find('.dka-product-main-photo');
      var $images = $main.find('img');
      var $thumbs = $shell.find('.dka-product-thumb');
      var index = 0;

      function activate(i) {
        index = ((i % $images.length) + $images.length) % $images.length;
        $images.removeClass('is-active');
        $images.eq(index).addClass('is-active');
        $thumbs.removeClass('is-active');
        $thumbs.eq(index).addClass('is-active');
      }

      activate(0);

      $thumbs.on('click', function () {
        activate($(this).index());
      });

      $main.on('click', function (e) {
        e.preventDefault();
        var items = [];
        $images.each(function () {
          items.push({
            src: $(this).attr('src'),
            thumb: $(this).attr('src'),
            alt: $(this).attr('alt') || '',
            caption: $(this).attr('data-caption') || $(this).attr('alt') || ''
          });
        });
        lightbox.open(items, index);
      });

      // Keyboard arrows when product is on screen
      $main.attr('tabindex', '0');
      $main.on('keydown', function (e) {
        if (e.key === 'ArrowLeft') { e.preventDefault(); activate(index - 1); }
        if (e.key === 'ArrowRight') { e.preventDefault(); activate(index + 1); }
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); $main.trigger('click'); }
      });
    });
  }

  // -----------------------------------------------------------
  // Masonry size class assignment + lazy load + click-to-lightbox
  // -----------------------------------------------------------
  function assignMasonrySizes() {
    var sizes = ['tall', 'medium', 'short'];
    $('.tm-extended-gallery-grid .tm-extended-gallery-item').each(function (i) {
      var $it = $(this);
      var hint = $it.attr('data-size');
      if (hint && sizes.indexOf(hint) !== -1) {
        $it.addClass(hint);
      } else {
        $it.addClass(sizes[i % sizes.length]);
      }
      $it.find('img').each(function () {
        if (!this.hasAttribute('loading')) this.setAttribute('loading', 'lazy');
        if (!this.hasAttribute('decoding')) this.setAttribute('decoding', 'async');
      });
    });
  }

  // -----------------------------------------------------------
  // Gallery search + sort
  // -----------------------------------------------------------
  function setupGalleryToolbar() {
    var $search = $('.dka-gallery-search input');
    var $sort = $('.dka-gallery-sort select');

    function tokenize(str) {
      return (str || '').toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    }

    $search.on('input', function () {
      var q = tokenize($(this).val());
      $('.tm-extended-gallery-grid .tm-extended-gallery-item').each(function () {
        var $it = $(this);
        var hay = tokenize($it.text()) + ' ' + tokenize($it.attr('data-categories') || '') + ' ' + tokenize($it.attr('data-palette') || '');
        if (!q || hay.indexOf(q) !== -1) {
          $it.removeClass('dka-search-hidden');
        } else {
          $it.addClass('dka-search-hidden');
        }
      });
    });

    var styleEl = document.getElementById('dka-search-hidden-style');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'dka-search-hidden-style';
      styleEl.textContent = '.dka-search-hidden { display: none !important; }';
      document.head.appendChild(styleEl);
    }

    $sort.on('change', function () {
      var mode = $(this).val();
      var $grid = $('.tm-extended-gallery-grid');
      var items = $grid.children('.tm-extended-gallery-item').get();
      items.sort(function (a, b) {
        var $a = $(a), $b = $(b);
        if (mode === 'palette') {
          return ($a.attr('data-palette') || '').localeCompare($b.attr('data-palette') || '');
        }
        if (mode === 'category') {
          return ($a.attr('data-categories') || '').localeCompare($b.attr('data-categories') || '');
        }
        return parseInt($a.attr('data-order') || 0, 10) - parseInt($b.attr('data-order') || 0, 10);
      });
      $.each(items, function (i, el) { $grid.append(el); });
    });
  }

  // -----------------------------------------------------------
  // Mobile bottom-bar active state synced with currentPage
  // -----------------------------------------------------------
  function setupBottombar() {
    var $bar = $('.dka-bottombar');
    $bar.on('click', 'a[data-page-no]', function (e) {
      e.preventDefault();
      var no = parseInt($(this).attr('data-page-no'), 10);
      if (window.openPage) window.openPage(no);
      if (window.highlightMenu) window.highlightMenu(no);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      syncBottombar(no);
    });
    function syncBottombar(no) {
      var menuNo = no;
      if (no >= 6 && no <= 9) menuNo = 4; // blog articles → blog
      else if (no >= 10) menuNo = 2; // gallery details → gallery
      $bar.find('a').removeClass('is-active');
      $bar.find('a[data-page-no="' + menuNo + '"]').addClass('is-active');
    }
    window.dkaSyncBottombar = syncBottombar;
  }

  // -----------------------------------------------------------
  // Theme switcher (Aube / Midi / Crépuscule / Nuit)
  // -----------------------------------------------------------
  function setupThemeSwitcher() {
    var $btn = $('.dka-floating-btn[data-action="theme"]');
    var $menu = $('.dka-theme-menu');
    if (!$btn.length) return;

    function applyTheme(theme) {
      var html = document.documentElement;
      html.classList.remove('dka-theme-dawn', 'dka-theme-noon', 'dka-theme-dusk', 'dka-theme-night');
      if (theme && theme !== 'dawn') html.classList.add('dka-theme-' + theme);
      $menu.find('button').removeClass('is-active');
      $menu.find('button[data-theme="' + theme + '"]').addClass('is-active');
      try { localStorage.setItem('dka-theme', theme); } catch (e) {}
    }

    $btn.on('click', function (e) {
      e.stopPropagation();
      $menu.toggleClass('is-open');
    });
    $menu.on('click', 'button', function () {
      applyTheme($(this).attr('data-theme'));
      $menu.removeClass('is-open');
    });
    $(document).on('click', function () { $menu.removeClass('is-open'); });

    var stored = 'dawn';
    try { stored = localStorage.getItem('dka-theme') || 'dawn'; } catch (e) {}
    applyTheme(stored);
  }

  // -----------------------------------------------------------
  // Back to top floating button
  // -----------------------------------------------------------
  function setupBackToTop() {
    $('.dka-floating-btn[data-action="top"]').on('click', function () {
      if (window.openPage) window.openPage(1);
      if (window.highlightMenu) window.highlightMenu(1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.dkaSyncBottombar) window.dkaSyncBottombar(1);
    });
  }

  // -----------------------------------------------------------
  // Custom cursor (desktop only, hover-aware)
  // -----------------------------------------------------------
  function setupCursor() {
    if (window.matchMedia('(hover: none)').matches || window.innerWidth < 992) return;
    var dot = document.createElement('div');
    var ring = document.createElement('div');
    dot.className = 'dka-cursor';
    ring.className = 'dka-cursor-trail';
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    var ringX = -100, ringY = -100, dotX = -100, dotY = -100;
    var raf;
    document.addEventListener('mousemove', function (e) {
      dotX = e.clientX;
      dotY = e.clientY;
      dot.style.left = dotX + 'px';
      dot.style.top = dotY + 'px';
      if (!raf) raf = requestAnimationFrame(loop);
    });
    function loop() {
      ringX += (dotX - ringX) * 0.18;
      ringY += (dotY - ringY) * 0.18;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      raf = requestAnimationFrame(loop);
    }
    var hoverable = 'a, button, .tm-extended-gallery-item, .dka-product-thumb, .dka-product-main-photo, .dka-pillar, .gallery-slider figure, .dka-hero-strip-card, .dka-studio-mosaic figure';
    document.addEventListener('mouseover', function (e) {
      if (e.target.closest && e.target.closest(hoverable)) {
        dot.classList.add('is-hover');
        ring.classList.add('is-hover');
      }
    });
    document.addEventListener('mouseout', function (e) {
      if (e.target.closest && e.target.closest(hoverable)) {
        dot.classList.remove('is-hover');
        ring.classList.remove('is-hover');
      }
    });
  }

  // -----------------------------------------------------------
  // Auto-enrich product detail pages
  //  - Multi-photo strip from the same series
  //  - "Sister pieces" suggestions (same category)
  //  - "Read on the journal" links (mapped from existing blog pages)
  // -----------------------------------------------------------
  function buildSeriesPhotos(panoramaSrc) {
    if (!panoramaSrc) return [];
    var photos = [];
    var match = panoramaSrc.match(/(img\/denise-knit-artworks-[a-z]+-[a-z]+-(?:lookbook-portrait|gallery-square|banner-landscape)-series-\d+)-(\d+)\.jpg/);
    if (match) {
      var prefix = match[1];
      var current = parseInt(match[2], 10);
      // Build 5 candidates around the current number (skipping the current image)
      var nums = [];
      for (var i = 1; i <= 40 && nums.length < 5; i++) {
        if (i === current) continue;
        nums.push(i);
      }
      nums.slice(0, 5).forEach(function (n) {
        var padded = n < 10 ? '0' + n : '' + n;
        photos.push(prefix + '-' + padded + '.jpg');
      });
      return photos;
    }
    var sockMatch = panoramaSrc.match(/img\/(chaussettes(?:-paysage)?)-(\d+)\.jpeg/);
    if (sockMatch) {
      var base = sockMatch[1];
      var max = base === 'chaussettes' ? 4 : 6;
      var cur = parseInt(sockMatch[2], 10);
      for (var k = 1; k <= max; k++) {
        if (k === cur) continue;
        photos.push('img/' + base + '-' + k + '.jpeg');
      }
      var alt = base === 'chaussettes' ? 'chaussettes-paysage' : 'chaussettes';
      var altMax = base === 'chaussettes' ? 6 : 4;
      for (var j = 1; j <= altMax && photos.length < 5; j++) {
        photos.push('img/' + alt + '-' + j + '.jpeg');
      }
      return photos.slice(0, 5);
    }
    return [];
  }

  function getCategoryForPage(pageNo) {
    var $item = $('.tm-extended-gallery-grid .tm-extended-gallery-item').filter(function () {
      return $(this).find('[data-page-no="' + pageNo + '"]').length > 0;
    }).first();
    if (!$item.length) return null;
    return $item.attr('data-categories') || null;
  }

  function getPaletteForPage(pageNo) {
    var $item = $('.tm-extended-gallery-grid .tm-extended-gallery-item').filter(function () {
      return $(this).find('[data-page-no="' + pageNo + '"]').length > 0;
    }).first();
    if (!$item.length) return null;
    return $item.attr('data-palette') || null;
  }

  function suggestSisters(currentPageNo, category, limit) {
    limit = limit || 3;
    var $items = $('.tm-extended-gallery-grid .tm-extended-gallery-item').filter(function () {
      var cats = ($(this).attr('data-categories') || '').split(/\s+/);
      var pageLink = $(this).find('[data-page-no]').attr('data-page-no');
      if (!pageLink) return false;
      if (parseInt(pageLink, 10) === currentPageNo) return false;
      if (!category) return true;
      return cats.indexOf(category) !== -1;
    });
    var picked = [];
    $items.each(function () {
      if (picked.length >= limit) return;
      var $a = $(this).find('a[data-page-no]').first();
      var $img = $a.find('img').first();
      var $title = $a.find('.tm-extended-gallery-title').first();
      var $cat = $a.find('.tm-extended-gallery-category').first();
      picked.push({
        page: $a.attr('data-page-no'),
        src: $img.attr('src'),
        alt: $img.attr('alt') || '',
        titleKey: $title.attr('data-i18n'),
        title: $title.text(),
        catKey: $cat.attr('data-i18n'),
        cat: $cat.text()
      });
    });
    return picked;
  }

  // Map gallery pages to suggested article pages (existing blog: 6, 7, 8, 9)
  var ARTICLE_HINTS = {
    socks: [6, 7],         // Threads of Resilience + Wool & Wellness
    shawls: [8, 6],        // Alpine Horizons + Resilience
    ponchos: [9, 8],       // Chalet Studio + Alpine Horizons
    caftans: [9, 7],       // Chalet Studio + Wool & Wellness
    mittens: [9, 6]
  };
  var ARTICLE_META = {
    6: { tagKey: 'blog_filter_studio', titleKey: 'article1_title', img: 'img/denise-knit-artworks-amber-honey-lookbook-portrait-series-04-12.jpg' },
    7: { tagKey: 'blog_filter_care', titleKey: 'article2_title', img: 'img/denise-knit-artworks-cozy-cappuccino-gallery-square-series-02-06.jpg' },
    8: { tagKey: 'blog_filter_lifestyle', titleKey: 'article3_title', img: 'img/denise-knit-artworks-ocean-teal-banner-landscape-series-11-05.jpg' },
    9: { tagKey: 'blog_filter_behind', titleKey: 'article4_title', img: 'img/denise-knit-artworks-warm-clay-banner-landscape-series-03-14.jpg' }
  };

  function enrichGalleryPages() {
    $('.tm-gallery-page').each(function () {
      var $page = $(this);
      var pageNo = parseInt($page.attr('data-page-no'), 10);
      if (isNaN(pageNo) || $page.find('.dka-product-extras').length) return;

      var $shell = $page.find('.tm-gallery-shell');
      if (!$shell.length) return;

      // Inject breadcrumb at top
      if (!$page.find('.dka-breadcrumb').length) {
        var $breadcrumb = $(
          '<nav class="dka-breadcrumb dka-reveal" aria-label="Breadcrumb">' +
            '<a href="#0" class="tm-page-link" data-page-no="1" data-i18n="breadcrumb_home">Home</a>' +
            '<span class="sep">›</span>' +
            '<a href="#0" class="tm-page-link" data-page-no="2" data-i18n="breadcrumb_gallery">Gallery</a>' +
            '<span class="sep">›</span>' +
            '<span class="current"></span>' +
          '</nav>'
        );
        var sidebarTitle = $page.find('.tm-gallery-sidebar h2').first().text();
        $breadcrumb.find('.current').text(sidebarTitle || '—');
        $shell.prepend($breadcrumb);
      }

      // Extract panorama image source
      var panoramaSrc = $page.find('.tm-panorama-img').attr('src');
      var seriesPhotos = buildSeriesPhotos(panoramaSrc);

      var category = getCategoryForPage(pageNo);
      var sisters = suggestSisters(pageNo, category, 3);

      var articleIds = ARTICLE_HINTS[category] || [6, 8];

      // Build extras section HTML
      var html = '<section class="dka-product-extras dka-reveal" style="margin-top: 30px; display: flex; flex-direction: column; gap: 26px;">';

      // Multi-photos strip
      if (seriesPhotos.length) {
        html += '<div class="dka-product-meta-card">';
        html += '<h3 data-i18n="product_section_more_photos">More views</h3>';
        html += '<div class="dka-product-thumbs" style="gap: 12px;">';
        seriesPhotos.forEach(function (src, i) {
          html += '<div class="dka-product-thumb dka-product-extra-photo" data-lightbox-group="prod-' + pageNo + '" data-src="' + src + '" data-caption="' + (sisters[0] && sisters[0].title || '') + '" style="flex: 0 0 120px; height: 150px;">';
          html += '<img src="' + src + '" alt="Additional view ' + (i + 1) + '" loading="lazy" />';
          html += '</div>';
        });
        if (panoramaSrc) {
          html += '<div class="dka-product-thumb dka-product-extra-photo" data-lightbox-group="prod-' + pageNo + '" data-src="' + panoramaSrc + '" style="flex: 0 0 120px; height: 150px;">';
          html += '<img src="' + panoramaSrc + '" alt="Main view" loading="lazy" />';
          html += '</div>';
        }
        html += '</div>';
        html += '</div>';
      }

      // Sister pieces
      if (sisters.length) {
        html += '<div class="dka-product-meta-card">';
        html += '<h3 data-i18n="product_section_pieces">Sister pieces</h3>';
        html += '<div class="dka-related-pieces" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;">';
        sisters.forEach(function (s) {
          html += '<a href="#0" class="tm-page-link" data-page-no="' + s.page + '">';
          html += '<div class="dka-related-thumb"><img src="' + s.src + '" alt="' + s.alt + '" loading="lazy" /></div>';
          html += '<div class="dka-related-meta">';
          html += '<span class="dka-related-eyebrow"' + (s.catKey ? ' data-i18n="' + s.catKey + '"' : '') + '>' + s.cat + '</span>';
          html += '<span class="dka-related-title"' + (s.titleKey ? ' data-i18n="' + s.titleKey + '"' : '') + '>' + s.title + '</span>';
          html += '</div>';
          html += '</a>';
        });
        html += '</div>';
        html += '</div>';
      }

      // Read on the journal
      html += '<div class="dka-product-meta-card">';
      html += '<h3 data-i18n="product_section_articles">Read on the journal</h3>';
      html += '<div class="dka-related-articles" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;">';
      articleIds.forEach(function (id) {
        var meta = ARTICLE_META[id];
        if (!meta) return;
        html += '<a href="#0" class="tm-page-link" data-page-no="' + id + '">';
        html += '<div class="dka-related-thumb"><img src="' + meta.img + '" alt="" loading="lazy" /></div>';
        html += '<div class="dka-related-meta">';
        html += '<span class="dka-related-eyebrow" data-i18n="' + meta.tagKey + '"></span>';
        html += '<span class="dka-related-title" data-i18n="' + meta.titleKey + '"></span>';
        html += '</div>';
        html += '</a>';
      });
      html += '</div>';
      html += '</div>';

      // Quote
      html += '<blockquote class="dka-product-quote" data-i18n="product_quote_default">';
      html += '“Every stitch I knit is a small breath I take for the future.”';
      html += '<span class="dka-product-quote-author" data-i18n="product_quote_author">Denise Gillioz</span>';
      html += '</blockquote>';

      html += '</section>';

      // Insert before the pagination block
      var $pagination = $page.find('.tm-article-pagination').first();
      if ($pagination.length) $pagination.before(html);
      else $shell.append(html);

      // Wire extra photos to lightbox
      $page.find('.dka-product-extra-photo').on('click', function (e) {
        e.preventDefault();
        var group = $(this).attr('data-lightbox-group');
        var $group = $page.find('[data-lightbox-group="' + group + '"]');
        var items = [];
        $group.each(function () {
          items.push({
            src: $(this).attr('data-src'),
            thumb: $(this).attr('data-src'),
            alt: $(this).find('img').attr('alt') || '',
            caption: $(this).attr('data-caption') || ''
          });
        });
        var idx = $group.index(this);
        lightbox.open(items, idx);
      });
    });

    // Re-run translations after injecting i18n placeholders
    if (typeof window.applyTranslations === 'function') {
      window.applyTranslations(window.currentLang || 'en');
    }
  }

  // -----------------------------------------------------------
  // Wire studio mosaic + standalone images to the lightbox
  // -----------------------------------------------------------
  function setupStudioLightbox() {
    var $items = $('[data-lightbox-group]');
    var groups = {};
    $items.each(function () {
      var key = $(this).attr('data-lightbox-group');
      if (!groups[key]) groups[key] = [];
      var $img = $(this).is('img') ? $(this) : $(this).find('img').first();
      groups[key].push({
        $el: $(this),
        src: $(this).attr('data-src') || $img.attr('src'),
        alt: $img.attr('alt') || '',
        caption: $(this).attr('data-caption') || $img.attr('alt') || ''
      });
    });
    Object.keys(groups).forEach(function (key) {
      var items = groups[key];
      items.forEach(function (item, i) {
        item.$el.on('click', function (e) {
          if ($(e.target).is('a')) return;
          e.preventDefault();
          lightbox.open(items.map(function (it) {
            return { src: it.src, thumb: it.src, alt: it.alt, caption: it.caption };
          }), i);
        });
      });
    });
  }

  // -----------------------------------------------------------
  // Home slider (3 slides) — fade + scale + ken-burns
  //   Auto-plays every 7s, pauses on hover/touch, supports
  //   keyboard arrows, dots and swipe.
  // -----------------------------------------------------------
  function setupHomeSlider() {
    var $slider = $('.dka-home-slider');
    if (!$slider.length) return;
    var $slides = $slider.find('.dka-home-slide');
    var $dots = $slider.find('.dka-home-dot');
    var $prev = $slider.find('.dka-home-arrow.prev');
    var $next = $slider.find('.dka-home-arrow.next');
    var total = $slides.length;
    if (total <= 1) return;
    var current = 0;
    var timer = null;
    var INTERVAL = 7000;
    var TRANSITION = 1100;
    var paused = false;
    var isAnimating = false;

    function go(i, direction) {
      i = ((i % total) + total) % total;
      if (i === current || isAnimating) return;
      isAnimating = true;
      // Direction: 'next' = forward, 'prev' = backward, fallback by index delta
      if (!direction) {
        var delta = (i - current + total) % total;
        direction = (delta === total - 1) ? 'prev' : 'next';
      }
      $slider
        .removeClass('is-going-next is-going-prev')
        .addClass(direction === 'prev' ? 'is-going-prev' : 'is-going-next');
      $slides.eq(current).removeClass('is-active').attr('aria-hidden', 'true');
      $dots.eq(current).removeClass('is-active').attr('aria-selected', 'false');
      current = i;
      $slides.eq(current).addClass('is-active').attr('aria-hidden', 'false');
      $dots.eq(current).addClass('is-active').attr('aria-selected', 'true');
      setTimeout(function () { isAnimating = false; }, TRANSITION);
    }
    function next() { go(current + 1, 'next'); }
    function prev() { go(current - 1, 'prev'); }
    function tick() { if (!paused) next(); }
    function start() {
      stop();
      timer = setInterval(tick, INTERVAL);
    }
    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
    }

    $prev.on('click', function () { prev(); start(); });
    $next.on('click', function () { next(); start(); });
    $dots.on('click', function () {
      var target = parseInt($(this).attr('data-go'), 10);
      var dir = (target > current) ? 'next' : (target < current ? 'prev' : null);
      go(target, dir);
      start();
    });

    // Pause on pointer hover / touch
    $slider[0].addEventListener('mouseenter', function () { paused = true; });
    $slider[0].addEventListener('mouseleave', function () { paused = false; });
    $slider[0].addEventListener('touchstart', function () { paused = true; }, { passive: true });
    $slider[0].addEventListener('touchend', function () { setTimeout(function () { paused = false; }, 1500); });

    // Pause when tab is hidden (battery friendly)
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop();
      else start();
    });

    // Keyboard arrows when slider is on screen and focused/hovered
    $slider.attr('tabindex', '0');
    $slider.on('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); start(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); next(); start(); }
    });

    // Swipe support
    var startX = 0, startY = 0, swiping = false;
    $slider[0].addEventListener('touchstart', function (e) {
      if (e.touches.length !== 1) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      swiping = true;
    }, { passive: true });
    $slider[0].addEventListener('touchend', function (e) {
      if (!swiping) return;
      swiping = false;
      var dx = e.changedTouches[0].clientX - startX;
      var dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 50 && Math.abs(dy) < 60) {
        if (dx < 0) next();
        else prev();
        start();
      }
    });

    start();
  }

  // -----------------------------------------------------------
  // Sticky compact header on scroll (mobile-first)
  // -----------------------------------------------------------
  function setupStickyHeader() {
    var nav = document.getElementById('tm-nav');
    if (!nav) return;
    var raf = null;
    var threshold = 60;
    function check() {
      var y = window.scrollY || window.pageYOffset || 0;
      nav.classList.toggle('is-scrolled', y > threshold);
      raf = null;
    }
    window.addEventListener('scroll', function () {
      if (!raf) raf = requestAnimationFrame(check);
    }, { passive: true });
    check();
  }

  // -----------------------------------------------------------
  // Drawer behavior: body lock + close on nav-link tap
  // -----------------------------------------------------------
  function setupDrawer() {
    var $body = $('body');
    var $collapse = $('#navbar-supported-content');
    var $toggler = $('.navbar-toggler');
    if (!$collapse.length) return;

    function isMobile() { return window.matchMedia('(max-width: 991px)').matches; }

    function syncBodyLock() {
      $body.toggleClass('dka-drawer-open', $collapse.hasClass('show'));
    }
    if (window.MutationObserver) {
      new MutationObserver(syncBodyLock).observe($collapse[0], { attributes: true, attributeFilter: ['class'] });
    } else {
      $collapse.on('shown.bs.collapse hidden.bs.collapse', syncBodyLock);
    }

    // Animated close: add `dka-closing` class to play stagger-out before Bootstrap hides
    function getBsCollapse() {
      if (window.bootstrap && window.bootstrap.Collapse) {
        return window.bootstrap.Collapse.getOrCreateInstance($collapse[0]);
      }
      return null;
    }

    function dynamicClose() {
      if (!$collapse.hasClass('show') || !isMobile()) return;
      $collapse.addClass('dka-closing');
      // Sync the toggler aria-expanded immediately for the burger ↔ X visual
      $toggler.attr('aria-expanded', 'false');
      setTimeout(function () {
        var bsc = getBsCollapse();
        if (bsc) bsc.hide();
        else $collapse.removeClass('show');
        setTimeout(function () { $collapse.removeClass('dka-closing'); }, 350);
      }, 220);
    }

    // Close on nav-link / page-link click (animated)
    $collapse.on('click', 'a, button:not(.tm-language-link)', function () {
      if (isMobile()) dynamicClose();
    });

    // Close on backdrop click (anywhere outside the toggler & inner UI)
    $(document).on('click touchend', function (e) {
      if (!isMobile() || !$collapse.hasClass('show')) return;
      var $t = $(e.target);
      if ($t.closest('.navbar-toggler').length) return;
      if ($t.closest('#navbar-supported-content').length) return;
      dynamicClose();
    });

    // Close on Escape
    $(document).on('keydown', function (e) {
      if (e.key === 'Escape' && isMobile() && $collapse.hasClass('show')) dynamicClose();
    });

    // Swipe-left to close
    var startX = 0, startY = 0, swipeReady = false;
    $collapse[0].addEventListener('touchstart', function (e) {
      if (!isMobile() || !$collapse.hasClass('show')) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      swipeReady = true;
    }, { passive: true });
    $collapse[0].addEventListener('touchend', function (e) {
      if (!swipeReady) return;
      swipeReady = false;
      var dx = e.changedTouches[0].clientX - startX;
      var dy = e.changedTouches[0].clientY - startY;
      if (dx < -60 && Math.abs(dy) < 60) dynamicClose();
    });
  }

  // -----------------------------------------------------------
  // Panorama pinch-zoom + one-finger drag on touch devices
  // -----------------------------------------------------------
  function setupPanoramaTouch() {
    if (typeof window.getPanoramaState !== 'function' || typeof window.applyPanoramaTransform !== 'function') {
      return;
    }
    document.querySelectorAll('.tm-panorama-img').forEach(function (img) {
      var id = img.getAttribute('data-panorama');
      if (!id) return;
      var initialDist = 0;
      var initialZoom = 1;
      var startX = 0, startY = 0;
      var startAngleX = 0, startAngleY = 0;
      var twoFingers = false;

      img.addEventListener('touchstart', function (e) {
        var state = window.getPanoramaState(id);
        if (e.touches.length === 2) {
          twoFingers = true;
          var dx = e.touches[0].clientX - e.touches[1].clientX;
          var dy = e.touches[0].clientY - e.touches[1].clientY;
          initialDist = Math.sqrt(dx * dx + dy * dy);
          initialZoom = state.zoom;
        } else if (e.touches.length === 1) {
          twoFingers = false;
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
          startAngleX = state.angleX;
          startAngleY = state.angleY;
        }
      }, { passive: true });

      img.addEventListener('touchmove', function (e) {
        var state = window.getPanoramaState(id);
        if (e.touches.length === 2 && twoFingers) {
          var dx = e.touches[0].clientX - e.touches[1].clientX;
          var dy = e.touches[0].clientY - e.touches[1].clientY;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (initialDist > 0) {
            state.zoom = Math.max(0.75, Math.min(2, initialZoom * (dist / initialDist)));
            window.applyPanoramaTransform(id);
          }
        } else if (e.touches.length === 1 && !twoFingers && state.zoom <= 1.05) {
          var mvX = e.touches[0].clientX - startX;
          var mvY = e.touches[0].clientY - startY;
          state.angleY = Math.max(-40, Math.min(40, startAngleY + mvX * 0.18));
          state.angleX = Math.max(-25, Math.min(25, startAngleX - mvY * 0.12));
          window.applyPanoramaTransform(id);
        }
      }, { passive: true });

      img.addEventListener('touchend', function (e) {
        if (e.touches.length === 0) twoFingers = false;
      });

      // Double-tap to reset
      var lastTap = 0;
      img.addEventListener('touchend', function () {
        var now = Date.now();
        if (now - lastTap < 320) {
          var state = window.getPanoramaState(id);
          state.angleX = 0;
          state.angleY = 0;
          state.zoom = 1;
          window.applyPanoramaTransform(id);
        }
        lastTap = now;
      });
    });
  }

  // -----------------------------------------------------------
  // Phase 4 — Auto-enrich blog articles (pages 6-9)
  //   - Inject breadcrumb + "Pieces evoked" sidebar widget
  // -----------------------------------------------------------
  // Map article page → list of related product page-no (suggested cross-links)
  var ARTICLE_PIECES = {
    6: [10, 11, 13, 17],   // Threads of Resilience → socks + stoles
    7: [12, 13, 22, 17],   // Wool & Wellness → mittens + chamomile + amber
    8: [14, 15, 16, 24],   // Alpine Horizons → vista shawls + valley wraps
    9: [18, 25, 26, 27]    // Chalet Studio → ponchos + caftans
  };

  function enrichBlogArticles() {
    $('.tm-article-page').each(function () {
      var $page = $(this);
      var pageNo = parseInt($page.attr('data-page-no'), 10);
      if (isNaN(pageNo)) return;

      // Breadcrumb
      if (!$page.find('.dka-breadcrumb').length) {
        var articleTitle = $page.find('.tm-article-hero-text h2').first().text();
        var $crumb = $(
          '<nav class="dka-breadcrumb dka-reveal" aria-label="Breadcrumb">' +
            '<a href="#0" class="tm-page-link" data-page-no="1" data-i18n="breadcrumb_home">Home</a>' +
            '<span class="sep">›</span>' +
            '<a href="#0" class="tm-page-link" data-page-no="4" data-i18n="breadcrumb_blog">Journal</a>' +
            '<span class="sep">›</span>' +
            '<span class="current"></span>' +
          '</nav>'
        );
        $crumb.find('.current').text(articleTitle || '—');
        $page.find('.tm-article-shell').first().prepend($crumb);
      }

      // Pieces evoked sidebar
      var pieces = ARTICLE_PIECES[pageNo] || [];
      if (pieces.length && !$page.find('.dka-article-pieces').length) {
        var $sidebar = $page.find('.tm-article-sidebar').first();
        if (!$sidebar.length) return;
        var html = '<div class="dka-article-pieces">';
        html += '<h3 class="h6 text-uppercase" data-i18n="article_pieces_heading">Pieces evoked in this article</h3>';
        pieces.forEach(function (pid) {
          var $item = $('.tm-extended-gallery-grid .tm-extended-gallery-item').filter(function () {
            return $(this).find('[data-page-no="' + pid + '"]').length > 0;
          }).first();
          if (!$item.length) return;
          var $img = $item.find('img').first();
          var $title = $item.find('.tm-extended-gallery-title').first();
          var $cat = $item.find('.tm-extended-gallery-category').first();
          html += '<a href="#0" class="tm-page-link" data-page-no="' + pid + '">';
          html += '<div class="dka-related-thumb"><img src="' + $img.attr('src') + '" alt="' + ($img.attr('alt') || '') + '" loading="lazy" /></div>';
          html += '<div class="dka-related-meta">';
          html += '<span class="dka-related-eyebrow"' + ($cat.attr('data-i18n') ? ' data-i18n="' + $cat.attr('data-i18n') + '"' : '') + '>' + $cat.text() + '</span>';
          html += '<span class="dka-related-title"' + ($title.attr('data-i18n') ? ' data-i18n="' + $title.attr('data-i18n') + '"' : '') + '>' + $title.text() + '</span>';
          html += '</div>';
          html += '</a>';
        });
        html += '</div>';
        $sidebar.append(html);
      }
    });
  }

  // -----------------------------------------------------------
  // Phase 4 — Blog page (4) live search + breadcrumb
  // -----------------------------------------------------------
  function enrichBlogIndex() {
    var $blog = $('li[data-page-no="4"]');
    if (!$blog.length || $blog.find('.dka-blog-search').length) return;

    if (!$blog.find('.dka-breadcrumb').length) {
      var $crumb = $(
        '<nav class="dka-breadcrumb dka-reveal" aria-label="Breadcrumb">' +
          '<a href="#0" class="tm-page-link" data-page-no="1" data-i18n="breadcrumb_home">Home</a>' +
          '<span class="sep">›</span>' +
          '<span class="current" data-i18n="breadcrumb_blog">Journal</span>' +
        '</nav>'
      );
      $blog.find('.tm-bg-dark').first().prepend($crumb);
    }

    var $filters = $blog.find('.tm-blog-filters');
    if (!$filters.length) return;
    var search = $(
      '<label class="dka-blog-search">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6"/><line x1="20" y1="20" x2="16.5" y2="16.5"/></svg>' +
        '<input type="search" data-i18n-placeholder="blog_search_placeholder" placeholder="Search the journal…" />' +
      '</label>'
    );
    $filters.before(search);

    search.find('input').on('input', function () {
      var q = ($(this).val() || '').toString().toLowerCase().trim();
      $blog.find('.tm-blog-card').each(function () {
        var hay = $(this).text().toLowerCase() + ' ' + ($(this).attr('data-categories') || '').toLowerCase();
        if (!q || hay.indexOf(q) !== -1) $(this).removeClass('tm-blog-card-hidden');
        else $(this).addClass('tm-blog-card-hidden');
      });
    });
  }

  // -----------------------------------------------------------
  // Phase 4 — Cross-link tags clickable
  //   Click a tag/category pill → navigate to gallery (page 19)
  //   with the matching filter activated, or blog (page 4)
  //   with the category pre-selected when relevant.
  // -----------------------------------------------------------
  var TAG_GALLERY_FILTERS = ['socks', 'shawls', 'ponchos', 'caftans', 'mittens'];
  var TAG_BLOG_FILTERS = ['studio', 'care', 'behind', 'lifestyle', 'all'];

  function setupTagCrossLinks() {
    $(document).on('click', '.tm-blog-tag', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var key = ($(this).attr('data-i18n') || '').replace('blog_filter_', '');
      if (!key || TAG_BLOG_FILTERS.indexOf(key) === -1) return;
      if (window.openPage) window.openPage(4);
      if (window.highlightMenu) window.highlightMenu(4);
      var $btn = $('.tm-blog-filter-btn[data-filter="' + key + '"]');
      if ($btn.length) $btn.trigger('click');
    });

    $(document).on('click', '.tm-extended-gallery-category', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var $item = $(this).closest('.tm-extended-gallery-item');
      var cats = ($item.attr('data-categories') || '').split(/\s+/);
      var match = cats.find(function (c) { return TAG_GALLERY_FILTERS.indexOf(c) !== -1; });
      if (!match) return;
      if (window.openPage) window.openPage(19);
      if (window.highlightMenu) window.highlightMenu(19);
      var $btn = $('.tm-extended-gallery-filter-btn[data-filter="' + match + '"]');
      if ($btn.length) $btn.trigger('click');
    });
  }

  // -----------------------------------------------------------
  // Phase 5 — Global search overlay
  //   Indexes all gallery pieces + blog articles, live-filters on
  //   every keystroke, keyboard nav (↑↓ enter), click to navigate.
  // -----------------------------------------------------------
  // -----------------------------------------------------------
  // Phase 5 — Quick view modal from masonry grid
  // -----------------------------------------------------------
  var quickview = {
    el: null,
    body: null,
    init: function () {
      this.el = document.querySelector('.dka-quickview');
      if (!this.el) return;
      this.body = this.el.querySelector('.dka-quickview-body');
      var self = this;
      this.el.querySelector('.dka-quickview-close').addEventListener('click', function () { self.close(); });
      this.el.addEventListener('click', function (e) { if (e.target === self.el) self.close(); });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && self.el.classList.contains('is-open')) self.close();
      });
    },
    open: function (data) {
      if (!this.el) return;
      var html = ''
        + '<div class="dka-quickview-image-wrap"><img src="' + data.img + '" alt="' + (data.alt || '') + '" /></div>'
        + '<div class="dka-quickview-info">'
        +   '<span class="dka-quickview-category">' + (data.category || '') + '</span>'
        +   '<h2 class="dka-quickview-title">' + (data.title || '') + '</h2>'
        +   (data.intro ? '<p class="dka-quickview-intro">' + data.intro + '</p>' : '')
        +   '<div class="dka-quickview-actions">'
        +     '<button type="button" class="btn btn-primary" data-action="full" data-page="' + data.page + '" data-i18n="quickview_view_full">View full piece</button>'
        +     '<button type="button" class="btn btn-outline-light" data-action="close" data-i18n="quickview_close">Close</button>'
        +   '</div>'
        + '</div>';
      this.body.innerHTML = html;
      this.el.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      var self = this;
      this.body.querySelectorAll('[data-action]').forEach(function (b) {
        b.addEventListener('click', function () {
          if (this.getAttribute('data-action') === 'full') {
            var p = parseInt(this.getAttribute('data-page'), 10);
            self.close();
            if (window.openPage) window.openPage(p);
            if (window.highlightMenu) window.highlightMenu(p);
          } else {
            self.close();
          }
        });
      });
      if (typeof window.applyTranslations === 'function') window.applyTranslations(window.currentLang || 'en');
    },
    close: function () {
      if (!this.el) return;
      this.el.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  };

  function setupQuickView() {
    quickview.init();
    // Inject quickview button on each masonry item
    $('.tm-extended-gallery-grid .tm-extended-gallery-item').each(function () {
      var $item = $(this);
      if ($item.find('.dka-gallery-quickview-btn').length) return;
      var $btn = $('<button type="button" class="dka-gallery-quickview-btn" aria-label="Quick view"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg></button>');
      $item.css('position', 'relative').append($btn);
      $btn.on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var $a = $item.find('a[data-page-no]').first();
        var $img = $a.find('img').first();
        var $title = $a.find('.tm-extended-gallery-title').first();
        var $cat = $a.find('.tm-extended-gallery-category').first();
        quickview.open({
          img: $img.attr('src'),
          alt: $img.attr('alt') || '',
          title: $title.text(),
          category: $cat.text(),
          intro: '',
          page: parseInt($a.attr('data-page-no'), 10)
        });
      });
    });
  }

  // -----------------------------------------------------------
  // Phase 6 — Mobile accordions on product extras
  // -----------------------------------------------------------
  function setupMobileAccordions() {
    function rewire() {
      $('.dka-product-extras .dka-product-meta-card').each(function (i) {
        var $card = $(this);
        if ($card.attr('data-accordion-wired')) return;
        $card.attr('data-accordion-wired', '1');
        if (i === 0) $card.addClass('is-open');
        $card.on('click', '> h3', function () {
          if (window.matchMedia('(max-width: 767px)').matches) {
            $card.toggleClass('is-open');
          }
        });
      });
    }
    rewire();
    // Re-wire when openPage shows a gallery detail (extras may be lazy-injected)
    var origOpen = window.openPage;
    if (typeof origOpen === 'function') {
      window.openPage = function (no) {
        origOpen.apply(this, arguments);
        setTimeout(rewire, 60);
      };
    }
  }

  // -----------------------------------------------------------
  // Phase 7 — Skeleton loaders during image load
  // -----------------------------------------------------------
  function setupSkeletons() {
    var sel = '.dka-hero-media img, .dka-hero-strip-card img, .tm-extended-gallery-img, .dka-studio-mosaic img, .dka-product-thumb img, .dka-related-thumb img';
    document.querySelectorAll(sel).forEach(function (img) {
      var parent = img.parentElement;
      if (!parent || parent.dataset.skeletonWired) return;
      parent.dataset.skeletonWired = '1';
      if (!img.complete) {
        parent.classList.add('dka-skeleton');
        img.addEventListener('load', function () {
          parent.classList.remove('dka-skeleton');
          img.classList.add('dka-loaded');
        }, { once: true });
        img.addEventListener('error', function () {
          parent.classList.remove('dka-skeleton');
        }, { once: true });
      } else {
        img.classList.add('dka-loaded');
      }
    });
  }

  // -----------------------------------------------------------
  // Phase 7 — Consent banner (RGPD minimal)
  // -----------------------------------------------------------
  function setupConsent() {
    var banner = document.querySelector('.dka-consent');
    if (!banner) return;
    var stored = null;
    try { stored = localStorage.getItem('dka-consent'); } catch (e) {}
    if (stored !== 'accepted') {
      setTimeout(function () { banner.classList.add('is-visible'); }, 1200);
    }
    banner.querySelector('.dka-consent-accept').addEventListener('click', function () {
      try { localStorage.setItem('dka-consent', 'accepted'); } catch (e) {}
      banner.classList.remove('is-visible');
    });
  }

  // -----------------------------------------------------------
  // Phase 7 — Service Worker registration
  // -----------------------------------------------------------
  function setupServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    if (window.location.protocol !== 'http:' && window.location.protocol !== 'https:') return;
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () { /* silent */ });
    });
  }

  // -----------------------------------------------------------
  // Hook into language switching to retranslate dynamic strings
  // -----------------------------------------------------------
  function rerunOnLanguageChange() {
    var origSetLang = window.setLanguage;
    if (typeof origSetLang !== 'function') return;
    window.setLanguage = function (lang) {
      origSetLang.call(this, lang);
      if (window.dkaSyncBottombar) {
        var current = (typeof window.currentPage !== 'undefined') ? window.currentPage : 1;
        window.dkaSyncBottombar(current);
      }
    };
  }

  // -----------------------------------------------------------
  // Boot
  // -----------------------------------------------------------
  $(function () {
    mergeSupplement();
    if (typeof window.applyTranslations === 'function') {
      window.applyTranslations(window.currentLang || 'en');
    }
    enrichGalleryPages();
    enrichBlogArticles();
    enrichBlogIndex();
    setupHomeSlider();
    setupReveal();
    setupProductGalleries();
    assignMasonrySizes();
    setupGalleryToolbar();
    setupBottombar();
    setupThemeSwitcher();
    setupBackToTop();
    setupCursor();
    setupStudioLightbox();
    setupStickyHeader();
    setupDrawer();
    setupPanoramaTouch();
    setupQuickView();
    setupTagCrossLinks();
    setupMobileAccordions();
    setupSkeletons();
    setupConsent();
    setupServiceWorker();
    rerunOnLanguageChange();
  });
})(jQuery);
