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
  // translations object loaded by deniseknitnartworks-script.js
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
      bio_breadcrumb: 'About Denise',
      bio_eyebrow: 'The maker',
      bio_name_first: 'Denise',
      bio_name_last: 'Gillioz',
      bio_kicker: 'atelier de Glaris',
      bio_lede: 'Knitter by passion, storyteller by heart. Switzerland · since the spring of 2017.',
      bio_manifesto: 'For thirty-eight years, I sat at administrative desks. I shuffled papers, kept ledgers, signed minutes. I did it well, and I did it gladly — but somewhere between the filing cabinets and the office windows, my hands had grown still. The day I retired, I cast on a pair of socks. I have not put the needles down since.',
      bio_chap1_eyebrow: 'Chapter one',
      bio_chap1_title: 'The retirement turn',
      bio_chap1_p1: 'Retirement does not announce itself with fanfare. It arrives in a thank-you card and an empty Tuesday morning. For me, that morning was 14 March 2017. I made tea, opened the chalet shutters to a frost-bitten Tödi, and looked for something to hold.',
      bio_chap1_p2: 'The needles came down from the attic — my mother’s, walnut, worn smooth by her own hands fifty years before. I cast on twenty stitches and did not look up until lunchtime. Something in me had been waiting for this quiet.',
      bio_chap2_eyebrow: 'Chapter two',
      bio_chap2_title: 'Meeting wool',
      bio_chap2_p1: 'I had knitted before — scarves for my grandsons, a cardigan once for a funeral I will not name. But meeting wool in retirement is not the same as meeting it as a hurried Sunday hobby.',
      bio_chap2_p2: 'I read; I listened to spinners; I drove to small farms in Linthal and Klöntal where women whose names I now whisper like prayers — Mira, Ruth, Heidi — taught me how merino fibres want to be held, why baby alpaca lies down and merino springs up, what kid mohair does to the light at six in the evening. The wool taught me patience. Patience taught me to design.',
      bio_chap3_eyebrow: 'Chapter three',
      bio_chap3_title: 'The atelier today',
      bio_chap3_p1: 'My atelier sits in the converted attic of our chalet, north-facing, lit by snow on six months of the year. There is a wood stove that I tend like a third grandchild, a worktable my father built in 1972, a vintage swift rescued from a Basel flea market.',
      bio_chap3_p2: 'I knit between six in the morning and six in the evening, with a chamomile pause at noon. I host a monthly knit circle at Gemeindehausplatz; newcomers receive tea, a pattern, and a hand-written welcome.',
      bio_chap3_p3: 'I do not sell. I share. I post photographs because I love the alpine palette and want it to live somewhere besides my own eyes. This site is not a shop — it is an open atelier. Come in. Sit a while.',
      bio_quote1: 'Each stitch is a small breath I take for the future.',
      bio_quote2: 'Patience taught me to design.',
      bio_quote3: 'I do not sell. I share.',
      bio_quote_author: 'Denise Gillioz',
      bio_signature: 'Denise',
      bio_signature_caption: 'Glarus · since 2017',
      bio_cta_atelier: 'Step into the atelier',
      bio_cta_gallery: 'Browse the gallery',
      bio_cta_journal: 'Read the journal',

      atelier_open_diary: 'Open the studio diary',

      parallax_eyebrow: 'A first teacher',
      parallax_quote: 'The mountain is my first teacher. The wool is my second. I am still a student of both.',
      parallax_cite: 'Denise · between Linthal and Klöntal',
      scroll_cue: 'Discover',
      write_tooltip: 'Write to Denise',

      rhythm_eyebrow: 'A day in the atelier',
      rhythm_title: 'The rhythm of the studio',
      rhythm_lede: 'Glarus time, alpine seasons. The studio breathes to its own clock — here is what is happening right now.',
      rhythm_phase_dawn: 'Denise lights the wood stove and opens the north window.',
      rhythm_phase_morning: 'Studio hours · slow stitching by the cold morning light.',
      rhythm_phase_noon: 'Tea break with chamomile and Tödi peak watching.',
      rhythm_phase_afternoon: 'Afternoon weaving · jazz on vinyl, snow melting on the roof.',
      rhythm_phase_evening: 'Reading by lamplight, sketching tomorrow’s palette.',
      rhythm_phase_night: 'The atelier sleeps under alpine stars.',

      diary_breadcrumb: 'Studio diary',
      diary_eyebrow: 'A studio in fragments',
      diary_title: 'The studio diary',
      diary_lede: 'Short notes from the chalet attic — a yarn discovery, a sentence I underlined, a sketch of Tödi at dawn. No order, only weather.',
      diary_filter_all: 'All',
      diary_filter_sketch: 'Sketches',
      diary_filter_yarn: 'Yarn',
      diary_filter_palette: 'Palette',
      diary_filter_weather: 'Weather',
      diary_filter_book: 'Reading',
      diary_filter_encounter: 'Encounters',
      diary_filter_technique: 'Technique',
      diary_empty: 'Nothing to show with this tag — pick another, or read everything.',
      diary_signature_caption: 'Studio diary · updated when the light is right',
      diary_e1_date: '12 Apr 2026 · Tuesday morning',
      diary_e1_text: 'Snow returned to Tödi overnight. I drew its silhouette on the back of a tea tin and chose three skeins for today: cloud white, larch bark, summit shadow. The kitchen smells of bergamot.',
      diary_e2_date: '28 Mar 2026 · Saturday late',
      diary_e2_text: 'Annie Dillard, <em>Pilgrim at Tinker Creek</em>: “Beauty and grace are performed whether or not we will sense them.” I knit a row of garter stitch as I read this sentence three times.',
      diary_e3_date: '16 Mar 2026 · Knit night',
      diary_e3_text: 'Anneliese came back to the circle after two years away. She brought her late mother’s needles wrapped in linen. We did not knit much; we listened more.',
      diary_e4_date: '22 Feb 2026 · Sunday',
      diary_e4_text: 'Mira called from the Klöntal farm. The first March mérinos is being washed. She asked if I wanted the cream or the buttery one. Both, of course. Both, always.',
      diary_e5_date: '8 Feb 2026 · Sunday',
      diary_e5_text: 'I drew the Linth river from memory while waiting for the kettle. The river never stays the same colour twice in winter — slate, teal, oxblood at noon.',
      diary_e6_date: '19 Jan 2026 · Sunday',
      diary_e6_text: 'The fog never lifted today. The whole valley pearl grey. I dyed a small batch of cream wool with eucalyptus to match — three soakings, no urgency.',
      diary_e7_date: '24 Dec 2025 · Christmas Eve',
      diary_e7_text: 'I gave my eldest grandson the Heather Valley socks. He put them on immediately, shoes too tight after, didn’t care. Best gift returned: his face.',
      diary_e8_date: '30 Nov 2025 · Saint Andrew’s',
      diary_e8_text: 'Tried German short rows again on the Glärnisch shawl. The transition is finally invisible. Twelve years of knitting and a single technique can still humble you. Good.',
      diary_e9_date: '12 Oct 2025 · Sunday',
      diary_e9_text: 'Re-reading Anni Albers, <em>On Weaving</em>. Her line: “Material is the prime mover.” I underline it in the margin with a tea-stained finger.',
      diary_e10_date: '8 Sep 2025 · Vinothèque',
      diary_e10_text: 'Tasted three Glaronese wines with Madeleine. The dornfelder gave me my next palette: smoky garnet, cracked leather, evening fog.',
      diary_e11_date: '21 Aug 2025 · Heatwave',
      diary_e11_text: 'Too hot to knit wool, so I turned to a linen cap. Cool grey, clean grey, river grey. The needles felt cold. A blessing.',
      diary_e12_date: '5 Jul 2025 · Lake Klöntal',
      diary_e12_text: 'Kayak day with Madeleine. The lake produced exactly the teal I have been looking for since March. Took a photo, took a yarn cake, both for the studio wall.',
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
      gallery_hero_eyebrow: 'Full collection · open atelier',
      gallery_hero_title_main: 'Pieces sculpted',
      gallery_hero_title_script: 'row by row',
      gallery_hero_lede: 'Each piece is hand-knit in a small batch — Swiss merino, baby alpaca, kid mohair, organic cotton. Wander by category or by palette; tap a piece to read its full technical sheet.',
      gallery_meta_pieces: 'pieces',
      gallery_meta_palettes: 'alpine palettes',
      gallery_meta_cats_n: '5',
      gallery_meta_cats: 'categories',
      gallery_palettes_eyebrow: 'Browse by palette',
      gallery_palettes_title: 'Twelve alpine palettes',
      gallery_palettes_lede: 'Each palette borrows its colours from a Glaronese place, season or time of day.',
      gallery_palettes_clear: 'Show all palettes',
      gallery_cats_eyebrow: 'Browse by category',
      gallery_cats_title: 'Five families of pieces',
      gallery_cat_socks_text: 'Knee-warmers for alpine winters and slow Sunday mornings.',
      gallery_cat_shawls_text: 'Wraps that hold the colour of Glarner skies, dawn to dusk.',
      gallery_cat_ponchos_text: 'Earthy silhouettes for the chalet veranda and the mountain path.',
      gallery_cat_caftans_text: 'Long, flowing layers that breathe with linen-wool blends.',
      gallery_cat_mittens_text: 'Lantern-glow mitts for journaling, sketching, lighting candles.',
      gallery_browse_label: 'Browse the full collection',
      gallery_empty_reset: 'Show all pieces',
      gallery_signature_caption: 'An open atelier · Glarus, since 2017',
      bio_about_link: 'About Denise',
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
      breadcrumb_contact: 'Contact',
      breadcrumb_atelier: 'Atelier',
      // Journal 2.0
      journal_hero_eyebrow: 'Stories from the Glarus atelier',
      journal_hero_title_main: 'Letters from',
      journal_hero_title_script: 'the chalet attic',
      journal_hero_lede: 'Slow essays on resilience, wool, alpine seasons and the rituals of an open atelier. Read by the wood stove, with chamomile in hand.',
      journal_featured_label: 'Featured · Latest',
      journal_filters_label: 'By theme',
      journal_read_essay: 'Read the essay',
      journal_empty: 'No story matches this theme yet — try another, or read everything.',
      journal_postscript_eyebrow: 'A note for readers',
      journal_postscript_text: 'These essays are slow. Read them as you would a long letter — not for information, but for company. The wood stove is on, the kettle is full, and the pages do not expect anything of you.',
      journal_signature_caption: 'Journal · written between rows',
      journal_card1_read: '6 min read',
      journal_card2_read: '5 min read',
      journal_card3_read: '4 min read',
      journal_card4_read: '5 min read',
      blog_card1_date_long: '5 February 2024',
      blog_card2_date_long: '22 January 2024',
      blog_card3_date_long: '10 December 2023',
      blog_card4_date_long: '18 November 2023',
      // Contact 2.0
      contact_hero_eyebrow: 'Write to the atelier',
      contact_hero_title_main: 'A letter to',
      contact_hero_title_script: 'Denise',
      contact_hero_lede: 'No order forms, no carts. Just an open door, a warm kettle, and a quiet inbox. Tell me about a piece, share a memory of wool, or simply say hello — I read every letter.',
      contact_form_eyebrow: 'A few words is enough',
      contact_form_title: 'Send your letter',
      contact_subject_label: 'Reason for your letter',
      contact_subject_hello: 'Just saying hello',
      contact_subject_piece: 'About a piece',
      contact_subject_commission: 'A gentle commission',
      contact_subject_visit: 'Visiting the atelier',
      contact_subject_press: 'Press & conversations',
      contact_consent: 'I trust Denise with these few lines. They will be read with care and never shared.',
      contact_reply_hint: 'Replies arrive within a week — slow, like the work itself.',
      contact_channels_eyebrow: 'Other quiet ways',
      contact_channels_title: 'Reach the atelier',
      contact_channel_email_label: 'By email',
      contact_channel_email_meta: 'Letters answered slowly, with intention.',
      contact_channel_postal_label: 'By post',
      contact_channel_postal_meta: 'Hand-written letters always welcome.',
      contact_channel_knitnight_label: 'Knit nights',
      contact_channel_knitnight_value: 'Every other Thursday · 7 — 9 pm',
      contact_channel_knitnight_meta: 'Open atelier — bring your needles or simply your tea.',
      contact_channel_social_label: 'Slow social',
      contact_channel_social_value: 'Pinterest · Ravelry · the occasional postcard',
      contact_channel_social_meta: 'No algorithms here — just stitches.',
      contact_map_eyebrow: 'Find the atelier',
      contact_map_title_main: 'A door in',
      contact_map_title_script: 'Glarus',
      contact_map_lede: 'Tucked between the river Linth and the slopes of the Glärnisch, the atelier opens by gentle appointment. Ring before you ring the bell.',
      contact_faq_eyebrow: 'Quiet questions',
      contact_faq_title: 'Before you write',
      contact_faq1_q: 'Do you sell pieces from the gallery?',
      contact_faq1_a: 'No — the gallery is a sharing space. Pieces remain at the atelier or travel as gifts. If you fall in love with one, write to me; we may find a private way for it to live with you.',
      contact_faq2_q: 'Can I commission a piece?',
      contact_faq2_a: 'Gentle, occasional commissions are possible — for a christening blanket, a wedding shawl, an heirloom mended into a new life. Tell me the story and the timeline; I will tell you whether the rows have room.',
      contact_faq3_q: 'May I visit the atelier?',
      contact_faq3_a: 'Yes, by quiet appointment. Knit nights are open without notice. For private visits, write a few days ahead — kettle and chair await.',
      contact_faq4_q: 'How long does a reply take?',
      contact_faq4_a: 'Within a week, often sooner. The atelier moves at the pace of stitches — never instantly, always sincerely.',
      contact_signature_caption: 'Letters · written by hand, replied between rows',
      bio_cta_collection: 'Browse the collection',
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
      bio_breadcrumb: 'À propos de Denise',
      bio_eyebrow: 'L’artisane',
      bio_name_first: 'Denise',
      bio_name_last: 'Gillioz',
      bio_kicker: 'atelier de Glaris',
      bio_lede: 'Tricoteuse par passion, conteuse par tempérament. Suisse · depuis le printemps 2017.',
      bio_manifesto: 'Pendant trente-huit ans, j’ai été assise à des bureaux administratifs. J’ai classé des dossiers, tenu des registres, signé des procès-verbaux. Je l’ai fait avec soin, et avec joie — mais quelque part entre les classeurs et les fenêtres de bureau, mes mains s’étaient immobilisées. Le jour où j’ai pris ma retraite, j’ai monté une paire de chaussettes. Je n’ai plus jamais reposé les aiguilles.',
      bio_chap1_eyebrow: 'Chapitre un',
      bio_chap1_title: 'Le tournant de la retraite',
      bio_chap1_p1: 'La retraite ne s’annonce pas en fanfare. Elle arrive dans une carte de remerciement et un mardi matin vide. Pour moi, ce matin-là fut le 14 mars 2017. J’ai fait du thé, ouvert les volets du chalet sur un Tödi givré, et cherché quelque chose à tenir.',
      bio_chap1_p2: 'Les aiguilles sont descendues du grenier — celles de ma mère, en noyer, polies par cinquante ans de ses propres mains. J’ai monté vingt mailles et n’ai pas levé les yeux jusqu’au déjeuner. Quelque chose en moi attendait ce silence.',
      bio_chap2_eyebrow: 'Chapitre deux',
      bio_chap2_title: 'La rencontre avec la laine',
      bio_chap2_p1: 'J’avais déjà tricoté — des écharpes pour mes petits-fils, un cardigan, une fois, pour un enterrement que je ne nommerai pas. Mais rencontrer la laine à la retraite n’est pas la même chose que la rencontrer en hâte un dimanche.',
      bio_chap2_p2: 'J’ai lu ; j’ai écouté des fileuses ; j’ai conduit jusqu’à de petites fermes de Linthal et Klöntal où des femmes dont je murmure les prénoms comme des prières — Mira, Ruth, Heidi — m’ont appris comment le mérinos veut être tenu, pourquoi le bébé alpaga se couche et le mérinos se redresse, ce que le kid mohair fait à la lumière de six heures du soir. La laine m’a appris la patience. La patience m’a appris à dessiner.',
      bio_chap3_eyebrow: 'Chapitre trois',
      bio_chap3_title: 'L’atelier aujourd’hui',
      bio_chap3_p1: 'Mon atelier occupe le grenier converti de notre chalet, exposé nord, éclairé par la neige six mois par an. Il y a un poêle à bois que j’entretiens comme un troisième petit-enfant, un établi que mon père a construit en 1972, un dévidoir vintage chiné à Bâle.',
      bio_chap3_p2: 'Je tricote entre six heures du matin et six heures du soir, avec une pause camomille à midi. J’organise un cercle de tricot mensuel à la Gemeindehausplatz ; les nouveaux venus reçoivent un thé, un patron et un mot d’accueil manuscrit.',
      bio_chap3_p3: 'Je ne vends pas. Je partage. Je publie des photographies parce que j’aime la palette alpine et veux qu’elle vive ailleurs que dans mes seuls yeux. Ce site n’est pas une boutique — c’est un atelier ouvert. Entrez. Restez un peu.',
      bio_quote1: 'Chaque maille est un petit souffle que je prends pour l’avenir.',
      bio_quote2: 'La patience m’a appris à dessiner.',
      bio_quote3: 'Je ne vends pas. Je partage.',
      bio_quote_author: 'Denise Gillioz',
      bio_signature: 'Denise',
      bio_signature_caption: 'Glaris · depuis 2017',
      bio_cta_atelier: 'Entrer dans l’atelier',
      bio_cta_gallery: 'Voir la galerie',
      bio_cta_journal: 'Lire le journal',

      atelier_open_diary: 'Ouvrir le carnet de l’atelier',

      parallax_eyebrow: 'Une première maîtresse',
      parallax_quote: 'La montagne est ma première maîtresse. La laine est ma seconde. Je suis encore l’élève des deux.',
      parallax_cite: 'Denise · entre Linthal et Klöntal',
      scroll_cue: 'Découvrir',
      write_tooltip: 'Écrire à Denise',

      rhythm_eyebrow: 'Un jour à l’atelier',
      rhythm_title: 'Le rythme de l’atelier',
      rhythm_lede: 'Heure de Glaris, saisons alpines. L’atelier respire à son propre rythme — voici ce qui s’y passe en ce moment.',
      rhythm_phase_dawn: 'Denise allume le poêle à bois et ouvre la fenêtre du nord.',
      rhythm_phase_morning: 'Heures d’atelier · mailles lentes dans la lumière froide du matin.',
      rhythm_phase_noon: 'Pause camomille en regardant le sommet du Tödi.',
      rhythm_phase_afternoon: 'Tissage de l’après-midi · jazz sur vinyle, neige fondante sur le toit.',
      rhythm_phase_evening: 'Lecture sous la lampe, croquis de la palette de demain.',
      rhythm_phase_night: 'L’atelier dort sous les étoiles alpines.',

      diary_breadcrumb: 'Carnet de l’atelier',
      diary_eyebrow: 'Un atelier en fragments',
      diary_title: 'Le carnet de l’atelier',
      diary_lede: 'Notes courtes du grenier du chalet — une trouvaille de fil, une phrase soulignée, un croquis du Tödi à l’aube. Aucun ordre, seulement la météo.',
      diary_filter_all: 'Tous',
      diary_filter_sketch: 'Croquis',
      diary_filter_yarn: 'Laine',
      diary_filter_palette: 'Palette',
      diary_filter_weather: 'Météo',
      diary_filter_book: 'Lectures',
      diary_filter_encounter: 'Rencontres',
      diary_filter_technique: 'Technique',
      diary_empty: 'Rien à montrer avec ce tag — choisissez-en un autre, ou lisez tout.',
      diary_signature_caption: 'Carnet d’atelier · mis à jour quand la lumière est juste',
      diary_e1_date: '12 avr. 2026 · Mardi matin',
      diary_e1_text: 'La neige est revenue sur le Tödi pendant la nuit. J’ai dessiné sa silhouette au dos d’une boîte à thé et choisi trois écheveaux pour aujourd’hui : blanc nuage, écorce de mélèze, ombre de sommet. La cuisine sent la bergamote.',
      diary_e2_date: '28 mars 2026 · Samedi tard',
      diary_e2_text: 'Annie Dillard, <em>Pilgrim at Tinker Creek</em> : « La beauté et la grâce s’accomplissent, que nous les percevions ou non. » Je tricote un rang de point mousse en relisant trois fois cette phrase.',
      diary_e3_date: '16 mars 2026 · Soirée tricot',
      diary_e3_text: 'Anneliese est revenue au cercle après deux ans d’absence. Elle a apporté les aiguilles de sa mère, enveloppées dans du lin. Nous n’avons pas beaucoup tricoté ; nous avons surtout écouté.',
      diary_e4_date: '22 fév. 2026 · Dimanche',
      diary_e4_text: 'Mira a appelé de la ferme du Klöntal. Le premier mérinos de mars est en cours de lavage. Elle m’a demandé si je voulais le crème ou le beurré. Les deux, bien sûr. Les deux, toujours.',
      diary_e5_date: '8 fév. 2026 · Dimanche',
      diary_e5_text: 'J’ai dessiné la Linth de mémoire en attendant la bouilloire. La rivière ne reste jamais deux fois de la même couleur en hiver — ardoise, teal, sang-de-bœuf à midi.',
      diary_e6_date: '19 janv. 2026 · Dimanche',
      diary_e6_text: 'Le brouillard ne s’est pas levé aujourd’hui. Toute la vallée gris perle. J’ai teint un petit lot de laine crème à l’eucalyptus pour assortir — trois bains, sans hâte.',
      diary_e7_date: '24 déc. 2025 · Réveillon',
      diary_e7_text: 'J’ai offert à mon aîné petit-fils les chaussettes Heather Valley. Il les a enfilées immédiatement, chaussures trop serrées ensuite, sans s’en plaindre. Plus beau cadeau retourné : son visage.',
      diary_e8_date: '30 nov. 2025 · Saint André',
      diary_e8_text: 'Réessayé les rangs raccourcis allemands sur le châle Glärnisch. La transition est enfin invisible. Douze ans de tricot et une seule technique sait encore vous humilier. Tant mieux.',
      diary_e9_date: '12 oct. 2025 · Dimanche',
      diary_e9_text: 'Je relis Anni Albers, <em>On Weaving</em>. Sa phrase : « La matière est le moteur premier. » Je la souligne dans la marge d’un doigt taché de thé.',
      diary_e10_date: '8 sept. 2025 · Vinothèque',
      diary_e10_text: 'Dégusté trois vins glaronnais avec Madeleine. Le dornfelder m’a offert ma prochaine palette : grenat fumé, cuir craquelé, brouillard du soir.',
      diary_e11_date: '21 août 2025 · Canicule',
      diary_e11_text: 'Trop chaud pour tricoter de la laine, alors je suis passée à un bonnet de lin. Gris frais, gris propre, gris de rivière. Les aiguilles étaient froides. Une bénédiction.',
      diary_e12_date: '5 juil. 2025 · Lac de Klöntal',
      diary_e12_text: 'Journée kayak avec Madeleine. Le lac a produit exactement le teal que je cherchais depuis mars. J’ai pris une photo, j’ai pris un écheveau, les deux pour le mur du studio.',
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
      gallery_hero_eyebrow: 'Collection complète · atelier ouvert',
      gallery_hero_title_main: 'Pièces sculptées',
      gallery_hero_title_script: 'rang par rang',
      gallery_hero_lede: 'Chaque pièce est tricotée main en petite série — mérinos suisse, bébé alpaga, kid mohair, coton bio. Parcourez par catégorie ou par palette ; touchez une pièce pour lire sa fiche technique complète.',
      gallery_meta_pieces: 'pièces',
      gallery_meta_palettes: 'palettes alpines',
      gallery_meta_cats_n: '5',
      gallery_meta_cats: 'catégories',
      gallery_palettes_eyebrow: 'Parcourir par palette',
      gallery_palettes_title: 'Douze palettes alpines',
      gallery_palettes_lede: 'Chaque palette emprunte ses couleurs à un lieu glaronnais, une saison ou un moment du jour.',
      gallery_palettes_clear: 'Voir toutes les palettes',
      gallery_cats_eyebrow: 'Parcourir par catégorie',
      gallery_cats_title: 'Cinq familles de pièces',
      gallery_cat_socks_text: 'Chausse-genoux pour les hivers alpins et les matinées lentes du dimanche.',
      gallery_cat_shawls_text: 'Étoles qui portent les couleurs des ciels glaronnais, de l’aube au crépuscule.',
      gallery_cat_ponchos_text: 'Silhouettes terriennes pour la véranda du chalet et le sentier de montagne.',
      gallery_cat_caftans_text: 'Pièces longues et fluides qui respirent en mélange lin-laine.',
      gallery_cat_mittens_text: 'Mitaines lumière-de-lanterne pour journaling, croquis, allumer des bougies.',
      gallery_browse_label: 'Parcourir la collection complète',
      gallery_empty_reset: 'Voir toutes les pièces',
      gallery_signature_caption: 'Un atelier ouvert · Glaris, depuis 2017',
      bio_about_link: 'À propos de Denise',
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
      breadcrumb_contact: 'Contact',
      breadcrumb_atelier: 'Atelier',
      // Journal 2.0
      journal_hero_eyebrow: 'Récits de l’atelier glaronnais',
      journal_hero_title_main: 'Lettres depuis',
      journal_hero_title_script: 'le grenier du chalet',
      journal_hero_lede: 'Essais lents sur la résilience, la laine, les saisons alpines et les rituels d’un atelier ouvert. À lire près du poêle, une camomille à la main.',
      journal_featured_label: 'À la une · Dernier',
      journal_filters_label: 'Par thème',
      journal_read_essay: 'Lire l’essai',
      journal_empty: 'Aucun récit ne correspond à ce thème — essayez-en un autre, ou lisez tout.',
      journal_postscript_eyebrow: 'Une note pour vous',
      journal_postscript_text: 'Ces essais sont lents. Lisez-les comme on lit une longue lettre — non pour s’informer, mais pour la compagnie. Le poêle ronronne, la bouilloire est pleine, et les pages n’attendent rien de vous.',
      journal_signature_caption: 'Journal · écrit entre les rangs',
      journal_card1_read: '6 min de lecture',
      journal_card2_read: '5 min de lecture',
      journal_card3_read: '4 min de lecture',
      journal_card4_read: '5 min de lecture',
      blog_card1_date_long: '5 février 2024',
      blog_card2_date_long: '22 janvier 2024',
      blog_card3_date_long: '10 décembre 2023',
      blog_card4_date_long: '18 novembre 2023',
      // Contact 2.0
      contact_hero_eyebrow: 'Écrire à l’atelier',
      contact_hero_title_main: 'Une lettre à',
      contact_hero_title_script: 'Denise',
      contact_hero_lede: 'Pas de bons de commande, pas de panier. Une porte ouverte, une bouilloire chaude, une boîte aux lettres tranquille. Parlez-moi d’une pièce, d’un souvenir de laine, ou dites simplement bonjour — je lis chaque lettre.',
      contact_form_eyebrow: 'Quelques mots suffisent',
      contact_form_title: 'Envoyer votre lettre',
      contact_subject_label: 'Motif de votre lettre',
      contact_subject_hello: 'Juste un bonjour',
      contact_subject_piece: 'À propos d’une pièce',
      contact_subject_commission: 'Une commande douce',
      contact_subject_visit: 'Visiter l’atelier',
      contact_subject_press: 'Presse & conversations',
      contact_consent: 'Je confie ces quelques lignes à Denise. Elles seront lues avec soin et jamais partagées.',
      contact_reply_hint: 'Une réponse vous parviendra sous une semaine — au rythme du tricot.',
      contact_channels_eyebrow: 'Autres voies tranquilles',
      contact_channels_title: 'Joindre l’atelier',
      contact_channel_email_label: 'Par e-mail',
      contact_channel_email_meta: 'Lettres lues lentement, avec intention.',
      contact_channel_postal_label: 'Par voie postale',
      contact_channel_postal_meta: 'Les lettres manuscrites sont toujours bienvenues.',
      contact_channel_knitnight_label: 'Soirées tricot',
      contact_channel_knitnight_value: 'Un jeudi sur deux · 19 — 21 h',
      contact_channel_knitnight_meta: 'Atelier ouvert — apportez vos aiguilles ou seulement votre tasse.',
      contact_channel_social_label: 'Réseaux apaisés',
      contact_channel_social_value: 'Pinterest · Ravelry · une carte postale parfois',
      contact_channel_social_meta: 'Pas d’algorithmes — seulement des mailles.',
      contact_map_eyebrow: 'Trouver l’atelier',
      contact_map_title_main: 'Une porte à',
      contact_map_title_script: 'Glaris',
      contact_map_lede: 'Lové entre la Linth et les pentes du Glärnisch, l’atelier s’ouvre sur rendez-vous discret. Sonnez avant de sonner à la porte.',
      contact_faq_eyebrow: 'Questions tranquilles',
      contact_faq_title: 'Avant d’écrire',
      contact_faq1_q: 'Vendez-vous les pièces de la galerie ?',
      contact_faq1_a: 'Non — la galerie est un espace de partage. Les pièces restent à l’atelier ou voyagent en cadeau. Si l’une d’elles vous touche, écrivez-moi ; nous trouverons peut-être un chemin discret pour qu’elle vous accompagne.',
      contact_faq2_q: 'Puis-je commander une pièce ?',
      contact_faq2_a: 'Des commandes douces et occasionnelles sont possibles — une couverture de baptême, un châle de mariage, un héritage repris à neuf. Racontez l’histoire et le délai ; je vous dirai si les rangs ont la place.',
      contact_faq3_q: 'Puis-je visiter l’atelier ?',
      contact_faq3_a: 'Oui, sur rendez-vous tranquille. Les soirées tricot sont ouvertes sans annonce. Pour une visite privée, écrivez quelques jours à l’avance — la bouilloire et la chaise vous attendent.',
      contact_faq4_q: 'Combien de temps pour une réponse ?',
      contact_faq4_a: 'Dans la semaine, souvent plus tôt. L’atelier avance au rythme des mailles — jamais instantané, toujours sincère.',
      contact_signature_caption: 'Lettres · écrites à la main, répondues entre les rangs',
      bio_cta_collection: 'Parcourir la collection',
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
      bio_breadcrumb: 'Über Denise',
      bio_eyebrow: 'Die Macherin',
      bio_name_first: 'Denise',
      bio_name_last: 'Gillioz',
      bio_kicker: 'atelier de Glaris',
      bio_lede: 'Strickerin aus Leidenschaft, Erzählerin aus Herzensgrund. Schweiz · seit dem Frühling 2017.',
      bio_manifesto: 'Achtunddreißig Jahre lang saß ich an Verwaltungsschreibtischen. Ich sortierte Akten, führte Bücher, unterzeichnete Protokolle. Ich tat es gut, und ich tat es gern — doch irgendwo zwischen den Aktenschränken und den Bürofenstern waren meine Hände still geworden. Am Tag meiner Pensionierung schlug ich ein Paar Socken an. Seither habe ich die Nadeln nicht mehr aus der Hand gelegt.',
      bio_chap1_eyebrow: 'Erstes Kapitel',
      bio_chap1_title: 'Die Wende der Pension',
      bio_chap1_p1: 'Die Pension kündigt sich nicht mit Fanfaren an. Sie kommt in einer Dankeskarte und einem leeren Dienstagmorgen. Für mich war dieser Morgen der 14. März 2017. Ich kochte Tee, öffnete die Chaletfenster auf einen frostgebissenen Tödi und suchte nach etwas, das ich halten konnte.',
      bio_chap1_p2: 'Die Nadeln kamen vom Dachboden — die meiner Mutter, aus Walnussholz, glatt geworden durch ihre eigenen Hände vor fünfzig Jahren. Ich schlug zwanzig Maschen an und blickte nicht auf bis zum Mittag. Etwas in mir hatte auf diese Stille gewartet.',
      bio_chap2_eyebrow: 'Zweites Kapitel',
      bio_chap2_title: 'Die Begegnung mit der Wolle',
      bio_chap2_p1: 'Ich hatte schon gestrickt — Schals für meine Enkel, einen Cardigan einmal für eine Beerdigung, die ich nicht nennen werde. Doch der Wolle in der Pension zu begegnen ist nicht dasselbe, wie ihr in einem hastigen Sonntagshobby zu begegnen.',
      bio_chap2_p2: 'Ich las; ich hörte Spinnerinnen zu; ich fuhr zu kleinen Höfen in Linthal und Klöntal, wo Frauen, deren Namen ich heute wie Gebete flüstere — Mira, Ruth, Heidi — mir lehrten, wie Merinofasern gehalten werden wollen, warum Babyalpaka liegt und Merino aufspringt, was Kid-Mohair um sechs Uhr abends mit dem Licht macht. Die Wolle lehrte mich Geduld. Geduld lehrte mich zu entwerfen.',
      bio_chap3_eyebrow: 'Drittes Kapitel',
      bio_chap3_title: 'Das Atelier heute',
      bio_chap3_p1: 'Mein Atelier liegt im umgebauten Dachboden unseres Chalets, nordwärts ausgerichtet, sechs Monate im Jahr vom Schnee erleuchtet. Da ist ein Holzofen, den ich pflege wie ein drittes Enkelkind, ein Werktisch, den mein Vater 1972 gebaut hat, ein in Basel ergatterter Vintage-Spuler.',
      bio_chap3_p2: 'Ich stricke zwischen sechs Uhr morgens und sechs Uhr abends, mit einer Kamillenpause am Mittag. Ich richte einen monatlichen Strickkreis an der Gemeindehausplatz aus; Neuankommende erhalten Tee, ein Muster und eine handgeschriebene Begrüßung.',
      bio_chap3_p3: 'Ich verkaufe nicht. Ich teile. Ich poste Fotografien, weil ich die Alpenpalette liebe und sie anderswo leben lassen möchte als nur in meinen eigenen Augen. Diese Seite ist kein Laden — sie ist ein offenes Atelier. Treten Sie ein. Bleiben Sie eine Weile.',
      bio_quote1: 'Jede Masche ist ein kleiner Atemzug, den ich für die Zukunft nehme.',
      bio_quote2: 'Geduld lehrte mich zu entwerfen.',
      bio_quote3: 'Ich verkaufe nicht. Ich teile.',
      bio_quote_author: 'Denise Gillioz',
      bio_signature: 'Denise',
      bio_signature_caption: 'Glarus · seit 2017',
      bio_cta_atelier: 'Atelier betreten',
      bio_cta_gallery: 'Galerie ansehen',
      bio_cta_journal: 'Journal lesen',

      atelier_open_diary: 'Atelier-Tagebuch öffnen',

      parallax_eyebrow: 'Eine erste Lehrmeisterin',
      parallax_quote: 'Der Berg ist meine erste Lehrmeisterin. Die Wolle ist meine zweite. Ich bin noch Schülerin beider.',
      parallax_cite: 'Denise · zwischen Linthal und Klöntal',
      scroll_cue: 'Entdecken',
      write_tooltip: 'An Denise schreiben',

      rhythm_eyebrow: 'Ein Tag im Atelier',
      rhythm_title: 'Der Rhythmus des Ateliers',
      rhythm_lede: 'Glarner Zeit, alpine Jahreszeiten. Das Atelier atmet nach seinem eigenen Takt — hier ist, was gerade geschieht.',
      rhythm_phase_dawn: 'Denise zündet den Holzofen an und öffnet das Nordfenster.',
      rhythm_phase_morning: 'Atelierstunden · langsame Maschen im kalten Morgenlicht.',
      rhythm_phase_noon: 'Kamillenpause beim Blick auf den Tödi-Gipfel.',
      rhythm_phase_afternoon: 'Nachmittagsgewebe · Jazz auf Vinyl, Schnee schmilzt aufs Dach.',
      rhythm_phase_evening: 'Lesen unter der Lampe, Skizze der morgigen Palette.',
      rhythm_phase_night: 'Das Atelier schläft unter alpinen Sternen.',

      diary_breadcrumb: 'Atelier-Tagebuch',
      diary_eyebrow: 'Ein Atelier in Fragmenten',
      diary_title: 'Das Atelier-Tagebuch',
      diary_lede: 'Kurze Notizen aus dem Chalet-Dachboden — ein Wollfund, ein unterstrichener Satz, eine Skizze des Tödi im Morgengrauen. Keine Ordnung, nur Wetter.',
      diary_filter_all: 'Alle',
      diary_filter_sketch: 'Skizzen',
      diary_filter_yarn: 'Wolle',
      diary_filter_palette: 'Palette',
      diary_filter_weather: 'Wetter',
      diary_filter_book: 'Lektüre',
      diary_filter_encounter: 'Begegnungen',
      diary_filter_technique: 'Technik',
      diary_empty: 'Nichts zu diesem Tag — wählen Sie ein anderes, oder lesen Sie alles.',
      diary_signature_caption: 'Atelier-Tagebuch · aktualisiert, wenn das Licht stimmt',
      diary_e1_date: '12. April 2026 · Dienstagmorgen',
      diary_e1_text: 'Über Nacht kehrte Schnee auf den Tödi zurück. Ich zeichnete seine Silhouette auf die Rückseite einer Teedose und wählte drei Stränge für heute: Wolkenweiß, Lärchenrinde, Gipfelschatten. Die Küche riecht nach Bergamotte.',
      diary_e2_date: '28. März 2026 · Samstag spät',
      diary_e2_text: 'Annie Dillard, <em>Pilgrim at Tinker Creek</em>: „Schönheit und Anmut werden vollzogen, ob wir sie nun spüren oder nicht.“ Ich strickte eine Reihe Krausrippe, während ich diesen Satz dreimal las.',
      diary_e3_date: '16. März 2026 · Strickabend',
      diary_e3_text: 'Anneliese kam nach zwei Jahren Abwesenheit zurück in den Kreis. Sie brachte die Nadeln ihrer verstorbenen Mutter, in Leinen gewickelt. Wir strickten wenig; wir hörten mehr zu.',
      diary_e4_date: '22. Februar 2026 · Sonntag',
      diary_e4_text: 'Mira rief vom Klöntaler Hof an. Das erste März-Merino wird gewaschen. Sie fragte, ob ich das Cremefarbene oder das Butterige wolle. Beide, natürlich. Beide, immer.',
      diary_e5_date: '8. Februar 2026 · Sonntag',
      diary_e5_text: 'Ich zeichnete die Linth aus dem Gedächtnis, während der Kessel heiß wurde. Der Fluss bleibt im Winter nie zweimal dieselbe Farbe — Schiefer, Teal, Ochsenblut am Mittag.',
      diary_e6_date: '19. Januar 2026 · Sonntag',
      diary_e6_text: 'Der Nebel hob sich heute nicht. Das ganze Tal perlgrau. Ich färbte einen kleinen Strang Cremewolle mit Eukalyptus passend dazu — drei Wässer, ohne Eile.',
      diary_e7_date: '24. Dezember 2025 · Heiligabend',
      diary_e7_text: 'Ich schenkte meinem ältesten Enkel die Heather-Valley-Socken. Er zog sie sofort an, danach saßen die Schuhe zu eng, das war ihm egal. Bestes erwidertes Geschenk: sein Gesicht.',
      diary_e8_date: '30. November 2025 · Andreastag',
      diary_e8_text: 'Habe deutsche Kurzreihen am Glärnisch-Schal noch einmal versucht. Der Übergang ist endlich unsichtbar. Zwölf Jahre Stricken, und eine einzige Technik kann einen noch demütigen. Gut so.',
      diary_e9_date: '12. Oktober 2025 · Sonntag',
      diary_e9_text: 'Lese Anni Albers, <em>On Weaving</em>, wieder. Ihr Satz: „Material ist der erste Beweger.“ Ich unterstreiche ihn am Rand mit einem teefleckigen Finger.',
      diary_e10_date: '8. September 2025 · Vinothek',
      diary_e10_text: 'Drei Glarner Weine mit Madeleine probiert. Der Dornfelder schenkte mir meine nächste Palette: rauchiger Granat, gerissenes Leder, Abendnebel.',
      diary_e11_date: '21. August 2025 · Hitzewelle',
      diary_e11_text: 'Zu heiß für Wolle, also griff ich zu einer Leinenmütze. Kühles Grau, sauberes Grau, Flussgrau. Die Nadeln fühlten sich kalt an. Ein Segen.',
      diary_e12_date: '5. Juli 2025 · Klöntalersee',
      diary_e12_text: 'Kajaktag mit Madeleine. Der See ergab genau das Teal, das ich seit März suchte. Ich nahm ein Foto, ich nahm einen Wollknäuel — beides für die Atelierwand.',
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
      gallery_hero_eyebrow: 'Gesamtkollektion · offenes Atelier',
      gallery_hero_title_main: 'Stücke geformt',
      gallery_hero_title_script: 'Reihe um Reihe',
      gallery_hero_lede: 'Jedes Stück ist von Hand in kleinen Serien gestrickt — Schweizer Merino, Babyalpaka, Kid-Mohair, Bio-Baumwolle. Stöbern Sie nach Kategorie oder Palette; tippen Sie ein Stück an, um sein vollständiges technisches Datenblatt zu lesen.',
      gallery_meta_pieces: 'Stücke',
      gallery_meta_palettes: 'Alpenpaletten',
      gallery_meta_cats_n: '5',
      gallery_meta_cats: 'Kategorien',
      gallery_palettes_eyebrow: 'Nach Palette stöbern',
      gallery_palettes_title: 'Zwölf Alpenpaletten',
      gallery_palettes_lede: 'Jede Palette borgt sich ihre Farben von einem Glarner Ort, einer Jahreszeit oder Tageszeit.',
      gallery_palettes_clear: 'Alle Paletten zeigen',
      gallery_cats_eyebrow: 'Nach Kategorie stöbern',
      gallery_cats_title: 'Fünf Stückfamilien',
      gallery_cat_socks_text: 'Kniewärmer für alpine Winter und langsame Sonntagmorgen.',
      gallery_cat_shawls_text: 'Tücher, die die Farben des Glarner Himmels tragen, von der Dämmerung bis zum Abend.',
      gallery_cat_ponchos_text: 'Erdige Silhouetten für die Chaletveranda und den Bergweg.',
      gallery_cat_caftans_text: 'Lange, fließende Schichten, die in Leinen-Woll-Mischungen atmen.',
      gallery_cat_mittens_text: 'Laternenlicht-Stulpen für Tagebuch, Skizze, Kerzen anzünden.',
      gallery_browse_label: 'Die vollständige Kollektion durchstöbern',
      gallery_empty_reset: 'Alle Stücke zeigen',
      gallery_signature_caption: 'Ein offenes Atelier · Glarus, seit 2017',
      bio_about_link: 'Über Denise',
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
      breadcrumb_contact: 'Kontakt',
      breadcrumb_atelier: 'Atelier',
      // Journal 2.0
      journal_hero_eyebrow: 'Geschichten aus dem Glarner Atelier',
      journal_hero_title_main: 'Briefe aus',
      journal_hero_title_script: 'der Chaletstube',
      journal_hero_lede: 'Langsame Essays über Resilienz, Wolle, Alpenjahreszeiten und die Rituale eines offenen Ateliers. Am Holzofen zu lesen, mit Kamillentee in der Hand.',
      journal_featured_label: 'Empfohlen · Neueste',
      journal_filters_label: 'Nach Thema',
      journal_read_essay: 'Den Essay lesen',
      journal_empty: 'Kein Beitrag passt zu diesem Thema — versuchen Sie ein anderes oder lesen Sie alles.',
      journal_postscript_eyebrow: 'Eine Notiz für Lesende',
      journal_postscript_text: 'Diese Essays sind langsam. Lesen Sie sie wie einen langen Brief — nicht für Informationen, sondern für Gesellschaft. Der Holzofen brennt, der Kessel ist voll, und die Seiten erwarten nichts von Ihnen.',
      journal_signature_caption: 'Journal · zwischen den Reihen geschrieben',
      journal_card1_read: '6 Min. Lesezeit',
      journal_card2_read: '5 Min. Lesezeit',
      journal_card3_read: '4 Min. Lesezeit',
      journal_card4_read: '5 Min. Lesezeit',
      blog_card1_date_long: '5. Februar 2024',
      blog_card2_date_long: '22. Januar 2024',
      blog_card3_date_long: '10. Dezember 2023',
      blog_card4_date_long: '18. November 2023',
      // Contact 2.0
      contact_hero_eyebrow: 'Ans Atelier schreiben',
      contact_hero_title_main: 'Ein Brief an',
      contact_hero_title_script: 'Denise',
      contact_hero_lede: 'Keine Bestellscheine, kein Warenkorb. Nur eine offene Tür, ein warmer Kessel und ein stiller Briefkasten. Erzählen Sie mir von einem Stück, teilen Sie eine Erinnerung an Wolle, oder sagen Sie einfach Hallo — ich lese jeden Brief.',
      contact_form_eyebrow: 'Wenige Worte genügen',
      contact_form_title: 'Ihren Brief senden',
      contact_subject_label: 'Anlass Ihres Briefes',
      contact_subject_hello: 'Einfach Hallo sagen',
      contact_subject_piece: 'Über ein Stück',
      contact_subject_commission: 'Eine sanfte Auftragsarbeit',
      contact_subject_visit: 'Das Atelier besuchen',
      contact_subject_press: 'Presse & Gespräche',
      contact_consent: 'Ich vertraue Denise diese wenigen Zeilen an. Sie werden mit Sorgfalt gelesen und niemals weitergegeben.',
      contact_reply_hint: 'Antworten kommen innerhalb einer Woche — langsam wie die Arbeit selbst.',
      contact_channels_eyebrow: 'Andere stille Wege',
      contact_channels_title: 'Das Atelier erreichen',
      contact_channel_email_label: 'Per E-Mail',
      contact_channel_email_meta: 'Briefe langsam und mit Bedacht beantwortet.',
      contact_channel_postal_label: 'Per Post',
      contact_channel_postal_meta: 'Handgeschriebene Briefe sind stets willkommen.',
      contact_channel_knitnight_label: 'Strickabende',
      contact_channel_knitnight_value: 'Jeden zweiten Donnerstag · 19 — 21 Uhr',
      contact_channel_knitnight_meta: 'Offenes Atelier — bringen Sie Ihre Nadeln oder einfach Ihren Tee.',
      contact_channel_social_label: 'Stilles Soziales',
      contact_channel_social_value: 'Pinterest · Ravelry · gelegentlich eine Postkarte',
      contact_channel_social_meta: 'Keine Algorithmen — nur Maschen.',
      contact_map_eyebrow: 'Das Atelier finden',
      contact_map_title_main: 'Eine Tür in',
      contact_map_title_script: 'Glarus',
      contact_map_lede: 'Eingebettet zwischen Linth und den Hängen des Glärnisch öffnet das Atelier auf sanfte Verabredung. Klingeln Sie, bevor Sie an der Tür klingeln.',
      contact_faq_eyebrow: 'Stille Fragen',
      contact_faq_title: 'Bevor Sie schreiben',
      contact_faq1_q: 'Verkaufen Sie Stücke aus der Galerie?',
      contact_faq1_a: 'Nein — die Galerie ist ein Ort des Teilens. Die Stücke bleiben im Atelier oder reisen als Geschenk. Wenn Sie sich in eines verlieben, schreiben Sie mir; vielleicht finden wir einen leisen Weg, es bei Ihnen wohnen zu lassen.',
      contact_faq2_q: 'Kann ich ein Stück in Auftrag geben?',
      contact_faq2_a: 'Sanfte, gelegentliche Aufträge sind möglich — eine Taufdecke, ein Hochzeitsschal, ein Erbstück, neu genährt. Erzählen Sie mir Geschichte und Zeitrahmen; ich sage Ihnen, ob die Reihen Platz haben.',
      contact_faq3_q: 'Darf ich das Atelier besuchen?',
      contact_faq3_a: 'Ja, auf stille Verabredung. Strickabende sind ohne Anmeldung offen. Für private Besuche schreiben Sie ein paar Tage zuvor — Kessel und Stuhl warten.',
      contact_faq4_q: 'Wie lange dauert eine Antwort?',
      contact_faq4_a: 'Innerhalb einer Woche, oft früher. Das Atelier bewegt sich im Tempo der Maschen — niemals sofort, immer aufrichtig.',
      contact_signature_caption: 'Briefe · von Hand geschrieben, zwischen den Reihen beantwortet',
      bio_cta_collection: 'Die Sammlung erkunden',
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
  // Responsive images — wrap every <img src="img/X.jpg"> in
  // <picture> with a WebP source + 3 sizes (480/960/1440).
  // Idempotent: safe to call after each JS enrichment.
  // -----------------------------------------------------------
  var RESPONSIVE_IMG_WIDTHS = [480, 960, 1440];
  var RESPONSIVE_IMG_SIZES = '(min-width: 1200px) 1200px, (min-width: 768px) 75vw, 100vw';
  var RESPONSIVE_IMG_RE = /^img\/(?!webp\/)([^/]+?)\.(jpe?g|png)$/i;
  function setupResponsiveImages(scope) {
    var root = scope || document;
    var imgs = root.querySelectorAll('img[src^="img/"]:not([data-no-responsive])');
    imgs.forEach(function (img) {
      if (img.parentElement && img.parentElement.tagName === 'PICTURE') return;
      var src = img.getAttribute('src');
      if (!src) return;
      var m = src.match(RESPONSIVE_IMG_RE);
      if (!m) return;
      var name = m[1];
      var picture = document.createElement('picture');
      var source = document.createElement('source');
      source.type = 'image/webp';
      source.srcset = RESPONSIVE_IMG_WIDTHS
        .map(function (w) { return 'img/webp/' + name + '-' + w + '.webp ' + w + 'w'; })
        .join(', ');
      source.sizes = RESPONSIVE_IMG_SIZES;
      picture.appendChild(source);
      img.parentNode.insertBefore(picture, img);
      picture.appendChild(img);
    });
  }
  // Expose for use after dynamic injections
  window.dkaWrapResponsive = setupResponsiveImages;

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
            '<a href="#0" class="tm-page-link" data-page-no="19" data-i18n="breadcrumb_gallery">Gallery</a>' +
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
  // Hash-based router — gives every logical page its own URL,
  // restores native back/forward, makes pages bookmarkable and
  // shareable. Built on top of the legacy single-page openPage().
  // -----------------------------------------------------------
  var SLUG_MAP = {
    1: 'home',
    3: 'about',
    4: 'journal',
    5: 'contact',
    6: 'article-resilience',
    7: 'article-care',
    8: 'article-horizons',
    9: 'article-studio',
    10: 'piece-morning-mist-socks',
    11: 'piece-alpine-path-socks',
    12: 'piece-lantern-glow-mitts',
    13: 'piece-chamomile-comfort-socks',
    14: 'piece-glaernisch-vista-shawl',
    15: 'piece-linth-river-wrap',
    16: 'piece-kloental-breeze-throw',
    17: 'piece-summit-sunrise-stole',
    18: 'piece-valley-lights-poncho',
    19: 'gallery',
    20: 'piece-heather-valley-socks',
    21: 'piece-alpine-sunrise-socks',
    22: 'piece-amber-honey-shawl',
    23: 'piece-velvet-taupe-wrap',
    24: 'piece-glacier-teal-drape',
    25: 'piece-warm-clay-poncho',
    26: 'piece-rustic-umber-poncho',
    27: 'piece-cedar-vista-caftan',
    28: 'piece-amber-ridge-caftan',
    29: 'piece-alpine-mist-caftan',
    30: 'atelier',
    31: 'diary'
  };
  var SLUG_TO_NO = {};
  Object.keys(SLUG_MAP).forEach(function (k) { SLUG_TO_NO[SLUG_MAP[k]] = parseInt(k, 10); });

  var TITLE_MAP = {
    home: 'Hand-knit wool from the Glarus atelier',
    gallery: 'Gallery',
    atelier: 'Atelier',
    diary: 'Studio diary',
    about: 'About Denise',
    journal: 'Journal',
    contact: 'Contact',
    'article-resilience': 'Threads of Resilience',
    'article-care': 'Wool & Wellness Rituals',
    'article-horizons': 'Contemplating Alpine Horizons',
    'article-studio': 'Inside the Chalet Studio',
    'piece-morning-mist-socks': 'Morning Mist Socks',
    'piece-alpine-path-socks': 'Alpine Path Socks',
    'piece-lantern-glow-mitts': 'Lantern Glow Mitts',
    'piece-chamomile-comfort-socks': 'Chamomile Comfort Socks',
    'piece-glaernisch-vista-shawl': 'Glärnisch Vista Shawl',
    'piece-linth-river-wrap': 'Linth River Wrap',
    'piece-kloental-breeze-throw': 'Klöntal Breeze Throw',
    'piece-summit-sunrise-stole': 'Summit Sunrise Stole',
    'piece-valley-lights-poncho': 'Valley Lights Poncho',
    'piece-heather-valley-socks': 'Heather Valley Socks',
    'piece-alpine-sunrise-socks': 'Alpine Sunrise Socks',
    'piece-amber-honey-shawl': 'Amber Honey Shawl',
    'piece-velvet-taupe-wrap': 'Velvet Taupe Wrap',
    'piece-glacier-teal-drape': 'Glacier Teal Drape',
    'piece-warm-clay-poncho': 'Warm Clay Poncho',
    'piece-rustic-umber-poncho': 'Rustic Umber Poncho',
    'piece-cedar-vista-caftan': 'Cedar Vista Caftan',
    'piece-amber-ridge-caftan': 'Amber Ridge Caftan',
    'piece-alpine-mist-caftan': 'Alpine Mist Caftan'
  };
  var SITE_TITLE = 'Denise Knit ArtWorks';

  function readHashSlug() {
    var raw = (window.location.hash || '').replace(/^#\/?/, '');
    return raw || null;
  }

  function setDocTitle(slug) {
    var label = TITLE_MAP[slug];
    if (!label || slug === 'home') {
      document.title = SITE_TITLE + ' · ' + (TITLE_MAP.home || 'Home');
    } else {
      document.title = label + ' · ' + SITE_TITLE;
    }
  }

  function setupRouter() {
    var routing = false;

    function applyRoute(opts) {
      opts = opts || {};
      var slug = readHashSlug();
      if (!slug) {
        // No hash → home, but only on the first run (don't disturb user)
        if (opts.initial) {
          if (window.openPage) window.openPage(1);
          if (window.highlightMenu) window.highlightMenu(1);
          setDocTitle('home');
        }
        return;
      }
      var no = SLUG_TO_NO[slug];
      if (typeof no !== 'number') return;
      routing = true;
      if (window.openPage) window.openPage(no);
      if (window.highlightMenu) window.highlightMenu(no);
      if (window.dkaSyncBottombar) window.dkaSyncBottombar(no);
      window.scrollTo({ top: 0, behavior: opts.initial ? 'auto' : 'smooth' });
      setDocTitle(slug);
      routing = false;
    }
    window.dkaApplyRoute = applyRoute;

    // Wrap legacy openPage() so any in-page navigation also pushes a hash
    var origOpen = window.openPage;
    if (typeof origOpen === 'function') {
      window.openPage = function (no) {
        origOpen.apply(this, arguments);
        if (routing) return;
        var slug = SLUG_MAP[no];
        if (!slug) return;
        var current = readHashSlug();
        if (current === slug) return;
        try {
          history.pushState({ no: no, slug: slug }, '', '#' + slug);
        } catch (e) {
          window.location.hash = '#' + slug;
        }
        setDocTitle(slug);
      };
    }

    // Native browser back/forward
    window.addEventListener('hashchange', function () { applyRoute({}); });
    window.addEventListener('popstate', function () { applyRoute({}); });

    // First navigation: respect the URL the visitor arrived with
    applyRoute({ initial: true });
  }

  // Rewrite every page-bound anchor so it carries a real, bookmarkable URL.
  // Run after enrichGalleryPages / enrichBlogArticles / enrichBlogIndex
  // because those inject new links into the DOM.
  function rewriteAllPageLinks() {
    document.querySelectorAll('a[data-page-no]').forEach(function (el) {
      var no = parseInt(el.getAttribute('data-page-no'), 10);
      var slug = SLUG_MAP[no];
      if (slug) el.setAttribute('href', '#' + slug);
    });
    // Sidebar nav links use data-no instead of data-page-no
    document.querySelectorAll('a[data-no]').forEach(function (el) {
      var no = parseInt(el.getAttribute('data-no'), 10);
      var slug = SLUG_MAP[no];
      if (slug) el.setAttribute('href', '#' + slug);
    });
  }

  // -----------------------------------------------------------
  // Mouse scroll cue — fades out once user scrolls a bit; tap = scroll
  // -----------------------------------------------------------
  function setupScrollCue() {
    var cue = document.querySelector('[data-scroll-cue]');
    if (!cue) return;
    cue.addEventListener('click', function (e) {
      e.preventDefault();
      var stats = document.querySelector('.dka-hero-stats');
      if (stats && stats.scrollIntoView) {
        stats.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: window.scrollY + window.innerHeight * 0.7, behavior: 'smooth' });
      }
    });
    function check() {
      cue.classList.toggle('is-hidden', window.scrollY > 80);
    }
    window.addEventListener('scroll', check, { passive: true });
    check();
  }

  // -----------------------------------------------------------
  // Floating "Write to Denise" — page-link to contact (page 5)
  //   The .tm-page-link handler wires the navigation. We just
  //   ensure the floating button is hidden on the contact page.
  // -----------------------------------------------------------
  function setupFloatingWrite() {
    var btn = document.querySelector('.dka-floating-write');
    if (!btn) return;
    function sync() {
      var on5 = (window.currentPage === 5);
      btn.style.display = on5 ? 'none' : '';
    }
    var origOpen = window.openPage;
    if (typeof origOpen === 'function') {
      window.openPage = function (no) {
        origOpen.apply(this, arguments);
        setTimeout(sync, 60);
      };
    }
    sync();
  }

  // -----------------------------------------------------------
  // Lightbox polish — wheel zoom on desktop
  // -----------------------------------------------------------
  function setupLightboxWheelZoom() {
    var box = document.querySelector('.dka-lightbox');
    if (!box || !window.lightbox) {
      // lightbox object is local to its IIFE; retry via DOM events
    }
    var img = document.querySelector('.dka-lightbox-image');
    if (!img) return;
    img.addEventListener('wheel', function (e) {
      if (!box.classList.contains('is-open')) return;
      e.preventDefault();
      var delta = e.deltaY < 0 ? 0.25 : -0.25;
      // Trigger zoom-in/zoom-out via existing buttons (keeps state consistent)
      var actionBtn = box.querySelector('[data-action="' + (delta > 0 ? 'zoom-in' : 'zoom-out') + '"]');
      if (actionBtn) actionBtn.click();
    }, { passive: false });
  }

  // -----------------------------------------------------------
  // Parallax bands — translate background slower than scroll
  // -----------------------------------------------------------
  function setupParallax() {
    var bands = document.querySelectorAll('[data-parallax]');
    if (!bands.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var rafId = null;
    function update() {
      bands.forEach(function (band) {
        var rect = band.getBoundingClientRect();
        var bg = band.querySelector('[data-parallax-bg]');
        if (!bg) return;
        // Only animate if band is in/near the viewport
        if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
        var speed = parseFloat(band.getAttribute('data-parallax-speed')) || 0.32;
        var center = rect.top + rect.height / 2;
        var offset = (center - window.innerHeight / 2) * -speed;
        bg.style.transform = 'translate3d(0, ' + offset.toFixed(1) + 'px, 0) scale(1.18)';
      });
      rafId = null;
    }
    function onScroll() {
      if (!rafId) rafId = requestAnimationFrame(update);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  }

  // -----------------------------------------------------------
  // Phase α — Gallery 2.0 enhancements
  //   Palette swatches & category cards as filter triggers
  //   View toggle (mosaic / uniform grid)
  //   Card meta injection (palette badge + hours + difficulty)
  //   Enriched empty-state reset button
  // -----------------------------------------------------------
  // Palette colour map — single source of truth
  var PALETTE_COLOURS = {
    'amber-honey':     '#d99959',
    'warm-clay':       '#b96b3c',
    'velvet-taupe':    '#8b6f5c',
    'cedar-umber':     '#6b5a3c',
    'rustic-umber':    '#7a4835',
    'cozy-cappuccino': '#a08570',
    'ocean-teal':      '#4a7d83',
    'misty-teal':      '#7a9396',
    'morning-mist':    '#c5beb1',
    'alpine-mist':     '#e9e3d7',
    'alpine-sunrise':  '#f2a950',
    'heather-plum':    '#855a78'
  };
  var PALETTE_LABELS = {
    'amber-honey': 'Amber Honey', 'warm-clay': 'Warm Clay', 'velvet-taupe': 'Velvet Taupe',
    'cedar-umber': 'Cedar Umber', 'rustic-umber': 'Rustic Umber', 'cozy-cappuccino': 'Cozy Cappuccino',
    'ocean-teal': 'Ocean Teal', 'misty-teal': 'Misty Teal', 'morning-mist': 'Morning Mist',
    'alpine-mist': 'Alpine Mist', 'alpine-sunrise': 'Alpine Sunrise', 'heather-plum': 'Heather Plum'
  };
  // Per-piece meta: hours of slow stitching + difficulty 1..5
  var PIECE_META = {
    10: { hours: 12, difficulty: 2 }, 11: { hours: 14, difficulty: 3 }, 12: { hours: 9, difficulty: 2 },
    13: { hours: 11, difficulty: 3 }, 14: { hours: 48, difficulty: 4 }, 15: { hours: 52, difficulty: 4 },
    16: { hours: 36, difficulty: 3 }, 17: { hours: 44, difficulty: 4 }, 18: { hours: 58, difficulty: 5 },
    20: { hours: 13, difficulty: 2 }, 21: { hours: 12, difficulty: 2 }, 22: { hours: 38, difficulty: 4 },
    23: { hours: 42, difficulty: 4 }, 24: { hours: 44, difficulty: 4 }, 25: { hours: 34, difficulty: 3 },
    26: { hours: 39, difficulty: 4 }, 27: { hours: 48, difficulty: 5 }, 28: { hours: 52, difficulty: 5 },
    29: { hours: 50, difficulty: 5 }
  };

  function setupGalleryEnhancements() {
    var $page = $('li[data-page-no="19"]');
    if (!$page.length) return;
    var $items = $page.find('.tm-extended-gallery-grid .tm-extended-gallery-item');
    var $filters = $page.find('.tm-extended-gallery-filter-btn');
    var $paletteSwatches = $page.find('.dka-palette-swatch');
    var $paletteClear = $page.find('.dka-palette-clear');
    var $catCards = $page.find('.dka-category-card');
    var $viewBtns = $page.find('.dka-gallery-view-btn');
    var $grid = $page.find('.tm-extended-gallery-grid');
    var $emptyReset = $page.find('[data-empty-reset]');

    // 1. Inject meta badges on every card
    $items.each(function () {
      var $item = $(this);
      if ($item.find('.dka-card-meta').length) return; // idempotent
      var palette = ($item.attr('data-palette') || '').toLowerCase();
      var paletteLabel = PALETTE_LABELS[palette] || palette;
      var paletteColour = PALETTE_COLOURS[palette] || 'var(--dka-accent)';
      var pageNo = parseInt($item.find('a[data-page-no]').first().attr('data-page-no'), 10);
      var meta = PIECE_META[pageNo] || { hours: '—', difficulty: 0 };
      var dotsHtml = '';
      for (var i = 1; i <= 5; i++) {
        dotsHtml += '<span' + (i <= meta.difficulty ? ' class="is-on"' : '') + '></span>';
      }
      var html = '<div class="dka-card-meta">';
      if (palette) {
        html += '<span class="dka-card-palette-badge" style="--swatch:' + paletteColour + '">' + paletteLabel + '</span>';
      }
      if (meta.hours && meta.hours !== '—') {
        html += '<span class="dka-card-hours" title="hours of slow stitching">' + meta.hours + 'h</span>';
      }
      if (meta.difficulty) {
        html += '<span class="dka-card-difficulty" aria-label="difficulty ' + meta.difficulty + '/5">' + dotsHtml + '</span>';
      }
      html += '</div>';
      $item.find('.tm-extended-gallery-info').append(html);
    });

    // 2. Palette swatches → trigger same filter system as category buttons
    function activatePalette(palette) {
      $paletteSwatches.removeClass('is-active');
      if (palette && palette !== 'all') {
        $paletteSwatches.filter('[data-palette-filter="' + palette + '"]').addClass('is-active');
      }
      // Hide items that don't match the palette
      $items.each(function () {
        var p = ($(this).attr('data-palette') || '').toLowerCase();
        if (!palette || palette === 'all' || p === palette) {
          $(this).removeClass('dka-palette-hidden');
        } else {
          $(this).addClass('dka-palette-hidden');
        }
      });
      // Reset category filter to "all" so palette filter dominates visibly
      // (we don't fight it, but we mark UI accordingly)
      checkEmpty();
    }
    $paletteSwatches.on('click', function () {
      var p = $(this).attr('data-palette-filter');
      if ($(this).hasClass('is-active')) {
        activatePalette(null); // toggle off
      } else {
        activatePalette(p);
      }
    });
    $paletteClear.on('click', function () { activatePalette(null); });

    // 3. Category cards → trigger the standard filter button click
    $catCards.on('click', function () {
      var cat = $(this).attr('data-category-filter');
      $catCards.removeClass('is-active');
      $(this).addClass('is-active');
      var $btn = $filters.filter('[data-filter="' + cat + '"]');
      if ($btn.length) $btn.trigger('click');
      // Smooth scroll to the grid for context
      var grid = $grid[0];
      if (grid && grid.scrollIntoView) {
        setTimeout(function () { grid.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 80);
      }
    });
    // Reset category card active state when a regular filter button is clicked
    $filters.on('click', function () {
      var f = $(this).attr('data-filter');
      $catCards.removeClass('is-active');
      if (f && f !== 'all') {
        $catCards.filter('[data-category-filter="' + f + '"]').addClass('is-active');
      }
    });

    // 4. View toggle (mosaic / grid)
    $viewBtns.on('click', function () {
      var mode = $(this).attr('data-view') || 'mosaic';
      $viewBtns.removeClass('is-active');
      $(this).addClass('is-active');
      $grid.attr('data-view', mode);
      try { localStorage.setItem('dka-gallery-view', mode); } catch (e) {}
    });
    var storedView = null;
    try { storedView = localStorage.getItem('dka-gallery-view'); } catch (e) {}
    if (storedView === 'grid') {
      $grid.attr('data-view', 'grid');
      $viewBtns.removeClass('is-active');
      $viewBtns.filter('[data-view="grid"]').addClass('is-active');
    }

    // 5. Empty-state reset
    function checkEmpty() {
      var visible = $items.filter(function () {
        return !$(this).hasClass('dka-palette-hidden') && !$(this).hasClass('tm-extended-gallery-item-hidden') && !$(this).hasClass('dka-search-hidden');
      }).length;
      $page.find('.tm-extended-gallery-empty').toggleClass('tm-hidden', visible > 0);
    }
    $emptyReset.on('click', function () {
      activatePalette(null);
      $catCards.removeClass('is-active');
      $filters.filter('[data-filter="all"]').trigger('click');
      $page.find('.dka-gallery-search input').val('').trigger('input');
    });
  }

  // Hide-by-palette CSS injected once
  (function injectPaletteHiddenStyle() {
    if (document.getElementById('dka-palette-hidden-style')) return;
    var s = document.createElement('style');
    s.id = 'dka-palette-hidden-style';
    s.textContent = '.dka-palette-hidden { display: none !important; }';
    document.head.appendChild(s);
  })();

  // -----------------------------------------------------------
  // Studio diary — tag filtering with smooth empty-state
  // -----------------------------------------------------------
  function setupDiaryFilters() {
    var $filters = $('.dka-diary-filter');
    var $entries = $('.dka-diary-entry');
    var $empty = $('.dka-diary-empty');
    if (!$filters.length || !$entries.length) return;

    function apply(tag) {
      var visible = 0;
      $entries.each(function () {
        var tags = ($(this).attr('data-diary-tags') || '').split(/\s+/);
        if (tag === 'all' || tags.indexOf(tag) !== -1) {
          $(this).removeClass('dka-diary-entry-hidden');
          visible++;
        } else {
          $(this).addClass('dka-diary-entry-hidden');
        }
      });
      $empty.toggleClass('tm-hidden', visible > 0);
    }
    $filters.on('click', function () {
      var tag = $(this).attr('data-diary-filter') || 'all';
      $filters.removeClass('is-active');
      $(this).addClass('is-active');
      apply(tag);
    });
    apply('all');
  }

  // -----------------------------------------------------------
  // Rhythm of the studio — analog clock + time-aware status
  //   Glarus is Europe/Zurich. We use Intl with that timezone
  //   so the rhythm reflects atelier time, not the visitor's.
  // -----------------------------------------------------------
  var RHYTHM_PHASES = [
    { from: 6,  to: 9,  key: 'rhythm_phase_dawn' },
    { from: 9,  to: 12, key: 'rhythm_phase_morning' },
    { from: 12, to: 14, key: 'rhythm_phase_noon' },
    { from: 14, to: 18, key: 'rhythm_phase_afternoon' },
    { from: 18, to: 21, key: 'rhythm_phase_evening' },
    { from: 21, to: 30, key: 'rhythm_phase_night' } // 21–06 wraps via fallback
  ];
  function setupRhythm() {
    var $w = $('.dka-rhythm[data-rhythm]');
    if (!$w.length) return;
    var $time = $w.find('[data-rhythm-time]');
    var $status = $w.find('[data-rhythm-status]');
    var $hour = $w.find('[data-hand="hour"]');
    var $min = $w.find('[data-hand="minute"]');

    function getZurichDate() {
      try {
        var s = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/Zurich',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }).format(new Date());
        var parts = s.split(':');
        return {
          h: parseInt(parts[0], 10),
          m: parseInt(parts[1], 10),
          s: parseInt(parts[2], 10)
        };
      } catch (e) {
        var d = new Date();
        return { h: d.getHours(), m: d.getMinutes(), s: d.getSeconds() };
      }
    }
    function phaseKey(h) {
      for (var i = 0; i < RHYTHM_PHASES.length; i++) {
        var p = RHYTHM_PHASES[i];
        if (h >= p.from && h < p.to) return p.key;
      }
      return 'rhythm_phase_night';
    }
    function update() {
      var t = getZurichDate();
      var hh = (t.h < 10 ? '0' : '') + t.h;
      var mm = (t.m < 10 ? '0' : '') + t.m;
      $time.text(hh + ':' + mm + ' · Glarus');
      var hourAngle = ((t.h % 12) + t.m / 60) * 30;
      var minAngle = (t.m + t.s / 60) * 6;
      // Use CSS transform (with transform-origin from CSS) for reliable
      // animation across browsers — SVG attribute transform does not
      // play well with CSS `transition: transform`.
      $hour.css('transform', 'rotate(' + hourAngle + 'deg)');
      $min.css('transform', 'rotate(' + minAngle + 'deg)');
      // Clear the SVG attribute so it does not fight with the CSS rule.
      $hour.removeAttr('transform');
      $min.removeAttr('transform');
      var key = phaseKey(t.h);
      if ($status.attr('data-i18n') !== key) {
        $status.attr('data-i18n', key);
        if (typeof window.applyTranslations === 'function') {
          window.applyTranslations(window.currentLang || 'en');
        }
      }
    }
    update();
    // Tick every 30s — minute hand uses sub-minute precision (seconds),
    // so a 30s cadence keeps the dial visibly alive without burning CPU.
    setInterval(update, 30 * 1000);
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
    setupGalleryEnhancements();
    setupHomeSlider();
    setupDiaryFilters();
    setupRhythm();
    setupParallax();
    setupScrollCue();
    setupFloatingWrite();
    setupLightboxWheelZoom();
    setupReveal();
    // Wrap any <img> injected by enrichments into <picture>/WebP
    setupResponsiveImages();
    rewriteAllPageLinks();
    setupRouter();
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
