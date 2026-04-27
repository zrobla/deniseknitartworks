/*

deniseknitnartworks 560 Astro Motion

https://deniseknitnartworks.com/tm-560-astro-motion

*/

var gallery = undefined;
var currentPage = 1;
var currentLang = 'en';
var translations = {
  "en": {
    "nav_home": "Home",
    "nav_gallery": "Gallery",
    "nav_about": "About Me",
    "nav_blog": "Blog",
    "nav_contact": "Contact",
    "home_title": "Welcome to Denise Knit ArtWorks",
    "home_intro_1": "Discover hand-knit designs created by Denise Gillioz in Glarus, Switzerland—where alpine mornings and mindful evenings frame every stitch.",
    "home_intro_2": "This lite showcase shares highlights from Denise’s atelier, weaving stories of resilience, lifestyle rituals, and the beauty of crafted wool.",
    "home_button": "View Gallery",
    "gallery_caption": "Julia dances in the deep dark",
    "gallery_view_more": "View more",
    "gallery_full_collection_button": "Explore the full collection",
    "gallery_extended_heading": "Extended studio showcase",
    "gallery_extended_intro": "Filter through Denise’s handmade pieces to explore socks, shawls, ponchos, and caftans crafted for alpine seasons.",
    "gallery_extended_filter_all": "All works",
    "gallery_extended_filter_socks": "Socks",
    "gallery_extended_filter_shawls": "Scarves & shawls",
    "gallery_extended_filter_ponchos": "Ponchos",
    "gallery_extended_filter_caftans": "Caftans",
    "gallery_extended_category_socks": "Socks",
    "gallery_extended_category_shawls": "Scarves & shawls",
    "gallery_extended_category_ponchos": "Ponchos",
    "gallery_extended_category_caftans": "Caftans",
    "gallery_extended_prev": "Previous",
    "gallery_extended_next": "Next",
    "gallery_extended_empty": "No pieces match this filter yet. Please try another category.",
    "gallery_ext_sock_heather_title": "Heather Valley Socks",
    "gallery_ext_sock_alpine_title": "Alpine Sunrise Socks",
    "gallery_ext_shawl_honey_title": "Amber Honey Shawl",
    "gallery_ext_shawl_taupe_title": "Velvet Taupe Wrap",
    "gallery_ext_shawl_teal_title": "Glacier Teal Drape",
    "gallery_ext_poncho_teal_title": "Valley Lights Poncho",
    "gallery_ext_poncho_clay_title": "Warm Clay Poncho",
    "gallery_ext_poncho_umber_title": "Rustic Umber Poncho",
    "gallery_ext_caftan_cedar_title": "Cedar Vista Caftan",
    "gallery_ext_caftan_amber_title": "Amber Ridge Caftan",
    "gallery_ext_caftan_mist_title": "Alpine Mist Caftan",
    "about_heading": "About me",
    "about_intro_1": "I am Denise Gillioz, a Swiss admin professional turned full-time fiber storyteller after retirement. Years in both public service and private enterprise taught me structure; knitting keeps my heart playful.",
    "about_intro_2": "Through health challenges and life’s steep climbs, yarn offered gentleness and purpose. I built this corner to share techniques, alpine-inspired palettes, and the joy of gifting warmth to the world.",
    "blog_heading": "Stories from the Glarus Atelier",
    "blog_intro": "Explore how knitting supports wellbeing, the lessons drawn from Swiss landscapes, and the studio rituals I love to share with newcomers.",
    "blog_card1_meta": "05 Feb 2024 • Studio Journal",
    "blog_card1_title": "Threads of Resilience",
    "blog_card1_excerpt": "How mindful knitting sessions and alpine walks helped me stitch strength back into daily life.",
    "blog_card2_meta": "22 Jan 2024 • Care Guide",
    "blog_card2_title": "Wool & Wellness Rituals",
    "blog_card2_excerpt": "Simple care routines that honour natural fibers while nurturing your own nervous system.",
    "blog_card3_meta": "10 Dec 2023 • Lifestyle",
    "blog_card3_title": "Contemplating Alpine Horizons",
    "blog_card3_excerpt": "A meditative journey through Glarus landscapes that shape the palettes of my shawls.",
    "blog_card4_meta": "18 Nov 2023 • Behind the Scenes",
    "blog_card4_title": "Inside the Chalet Studio",
    "blog_card4_excerpt": "Morning rituals, playlists, and dye pots that keep my retirement atelier humming.",
    "contact_heading": "Write to Denise",
    "contact_name_placeholder": "Your name",
    "contact_email_placeholder": "Email address",
    "contact_message_placeholder": "Your message",
    "contact_send": "Send the letter",
    "contact_intro": "No order forms, no carts. Just an open door, a warm kettle, and a quiet inbox.",
    "contact_email": "Email: <a href=\"mailto:contact@deniseknitnartworks.ch\" class=\"tm-link-white\">contact@deniseknitnartworks.ch</a>",
    "contact_phone": "Tel: <a href=\"tel:0100200340\" class=\"tm-link-white\">010-020-0340</a>",
    "article1_tag": "Studio Journal",
    "article1_title": "Threads of Resilience",
    "article1_hero_intro": "Rebuilding after difficult seasons with needles, wool, and the light of the Glarus Alps.",
    "article1_meta_date": "05 Feb 2024",
    "article1_meta_read": "6 min read",
    "article1_lede": "When a sudden diagnosis unsettled my family, knitting became my breathing space and the way I measured hope.",
    "article1_paragraph_1": "I began each dawn by casting on ten slow rows, syncing breath to movement while the valley woke outside. Recording the texture of each yarn kept my thoughts present and softened anxious spirals.",
    "article1_callout_heading": "Resilience rows I rely on",
    "article1_callout_item1": "Sync breath to stitches: inhale on knit, exhale on purl.",
    "article1_callout_item2": "Pair every new yarn with a journal page capturing the memory it holds.",
    "article1_callout_item3": "Take a midday walk in the valley before choosing the next colour.",
    "article1_callout_item4": "Share a weekly progress snapshot with friends to celebrate small loops.",
    "article1_paragraph_2": "These rituals turned projects into gentle anchors. Colours drawn from lake reflections and larch bark reminded me that change is seasonal, not final.",
    "article1_quote": "“Knitting teaches me that progress is quiet; loop by loop we return to ourselves.”",
    "article1_paragraph_3": "Now I invite neighbours and learners to join virtual knit nights from Glarus, weaving our stories together so no one feels alone with their needles.",
    "article1_sidebar_heading": "Comforting materials",
    "article1_sidebar_subheading": "Current project",
    "article1_sidebar_paragraph1": "Handspun Swiss merino held with baby alpaca on 4.5 mm wooden needles, palette inspired by the dawn over Tödi.",
    "article1_sidebar_paragraph2": "I sip chamomile and lemon-balm tea while soft jazz keeps the rhythm steady and shoulders relaxed.",
    "article2_tag": "Care Guide",
    "article2_title": "Wool & Wellness Rituals",
    "article2_hero_intro": "Gentle maintenance routines that care for fibers and for the hands that craft them.",
    "article2_meta_date": "22 Jan 2024",
    "article2_meta_read": "5 min read",
    "article2_lede": "Caring for wool is an act of self-kindness; when I slow down with warm water and soap, my breathing follows.",
    "article2_section1_heading": "Prepare a mindful soak",
    "article2_paragraph_1": "Fill a basin with lukewarm spring water, stir in a teaspoon of lanolin-rich soap, and let the fragrance of mountain pine rise before immersing the garment.",
    "article2_section2_heading": "Create a restorative finish",
    "article2_paragraph_2": "Press fibres between towels with open palms, stretch gently on blocking mats, and allow your shoulders to drop as the piece relaxes.",
    "article2_callout_heading": "Wellness checklist",
    "article2_callout_item1": "Light a beeswax candle to mark the care session as special.",
    "article2_callout_item2": "Add a drop of lavender or pine for alpine calm.",
    "article2_callout_item3": "Massage wrists and fingers while easing water from the wool.",
    "article2_callout_item4": "Journal a sensory note once the piece is drying flat.",
    "article2_paragraph_3": "These pauses keep garments luminous and remind me that maintenance is a space to listen inward, not a chore to rush.",
    "article2_sidebar_heading": "Aromatherapy palette",
    "article2_sidebar_item1": "Cedar soaking board for grounding scent.",
    "article2_sidebar_item2": "Eco wool wash with chamomile extract.",
    "article2_sidebar_item3": "Microfiber towels reserved for knitwear only.",
    "article2_sidebar_item4": "Blocking wires wrapped in linen tape for gentle hold.",
    "article2_sidebar_subheading": "Weekly rhythm",
    "article2_sidebar_paragraph": "Alternate deep cleans with outdoor airing so fibres rest; give yourself the same alternating rhythm between effort and recovery.",
    "article3_tag": "Lifestyle",
    "article3_title": "Contemplating Alpine Horizons",
    "article3_hero_intro": "A meditative walk through Glarus landscapes that colour my shawls and soothe the heart.",
    "article3_meta_date": "10 Dec 2023",
    "article3_meta_read": "4 min read",
    "article3_lede": "Some designs begin with silence. I board the train toward Linthal, sketching peaks as sunrise spills over the valley.",
    "article3_section1_heading": "Colour notes from the valley",
    "article3_paragraph_1": "Frosted meadows offer silvery sage, while the Linth River gifts deep teal. I capture each hue in a palette notebook before it fades.",
    "article3_callout_heading": "Observation prompts",
    "article3_callout_paragraph": "Pause, name three colours you see, note how the air feels on your skin, and imagine which stitch texture could hold that feeling.",
    "article3_section2_heading": "Mindful travel companions",
    "article3_paragraph_2": "A lightweight camera, an audio recorder of cowbells, and a pouch of swatches travel with me so ideas return to the studio unhurried.",
    "article3_paragraph_3": "By the time I knit the first rows, the landscape lives inside the fabric, ready to comfort anyone who wraps it around their shoulders.",
    "article3_sidebar_heading": "Glarus field notes",
    "article3_sidebar_item1": "Linth River overlook – teal & slate for gradient socks.",
    "article3_sidebar_item2": "Klöntal pine forest – moss green with copper flecks.",
    "article3_sidebar_item3": "Schwammhöhe ridge – rosy dusk for a lace border.",
    "article3_sidebar_item4": "Niederurnen orchards – soft apricot for mittens.",
    "article3_sidebar_subheading": "Next outing",
    "article3_sidebar_paragraph": "Planning a sunrise sketch session at Lake Klöntal with thermos chai and a basket of fresh swatches.",
    "article4_tag": "Behind the Scenes",
    "article4_title": "Inside the Chalet Studio",
    "article4_hero_intro": "A look at the routines that keep my Glarus retirement atelier vibrant and welcoming.",
    "article4_meta_date": "18 Nov 2023",
    "article4_meta_read": "5 min read",
    "article4_lede": "The studio wakes at 6 a.m. when I open the shutters to watch pink light brush the Tödi peak.",
    "article4_paragraph_1": "I warm the space with a small wood stove, then line up yarn cakes chosen the night before. A gratitude note sits beside the swift.",
    "article4_callout_heading": "Studio rhythms",
    "article4_callout_item1": "06:30 kettle + gratitude journaling.",
    "article4_callout_item2": "07:15 colour planning under north-facing window.",
    "article4_callout_item3": "09:00 dye pot check-in and stretch break.",
    "article4_callout_item4": "16:00 tidy surfaces, photograph progress, close the day.",
    "article4_paragraph_2": "Retirement means I can move slowly; I listen to the weather and let it decide whether I dye, design, or simply mend.",
    "article4_paragraph_3": "This rhythm keeps my mind clear and reminds me that craft is a companion, not a race.",
    "article4_sidebar_heading": "Studio essentials",
    "article4_sidebar_item1": "Maple worktable built by my father.",
    "article4_sidebar_item2": "Vintage swift rescued from a Basel flea market.",
    "article4_sidebar_item3": "Set of 3.75–5 mm birch needles for everyday projects.",
    "article4_sidebar_item4": "Playlist of Swiss jazz and the sound of snowmelt.",
    "article4_sidebar_subheading": "Community note",
    "article4_sidebar_paragraph": "I host a monthly knit circle at Gemeindehausplatz; newcomers receive tea, pattern notes, and a hug at the door.",
    "article_back_to_blog": "&#8592; Back to blog",
    "article_next": "Next article &#8594;",
    "article_previous": "&#8592; Previous article",
    "footer_copy": "© 2025 Denise Knit ArtWorks. All rights reserved.",
    "footer_credit": "Designed by <a rel=\"author external noopener\" href=\"https://tech-and-web.com\" target=\"_blank\" hreflang=\"en\" lang=\"en\" class=\"tm-link-white dka-footer-creator\" title=\"TECH &amp; WEB — full-service web agency · web design, SEO, mobile-first UX, PWA · Designer &amp; developer of deniseknitnartworks.ch\" aria-label=\"Site designed and developed by TECH &amp; WEB — visit tech-and-web.com (opens in a new tab)\" itemprop=\"creator\" itemscope itemtype=\"https://schema.org/Organization\"><strong itemprop=\"name\">TECH &amp; WEB</strong><meta itemprop=\"url\" content=\"https://tech-and-web.com\" /><meta itemprop=\"alternateName\" content=\"tech-and-web.com\" /><meta itemprop=\"alternateName\" content=\"Tech and Web\" /><meta itemprop=\"description\" content=\"Full-service web agency: design, development, SEO, PWA, mobile-first UX, multilingual experiences.\" /><meta itemprop=\"knowsAbout\" content=\"Web design\" /><meta itemprop=\"knowsAbout\" content=\"SEO\" /><meta itemprop=\"knowsAbout\" content=\"Schema.org structured data\" /><meta itemprop=\"knowsAbout\" content=\"Mobile-first UX\" /><meta itemprop=\"knowsAbout\" content=\"Progressive Web Apps\" /></a>",
    "gallery_meta_fiber": "Fiber",
    "gallery_meta_stitches": "Stitchwork",
    "gallery_meta_dimensions": "Dimensions",
    "gallery_meta_time": "Hours",
    "gallery_palette_heading": "Palette",
    "gallery_related_heading": "Related",
    "gallery_back_to_grid": "← Back to gallery",
    "gallery_next_piece": "Next piece →",
    "gallery_previous_piece": "← Previous piece",
    "gallery_next_cycle": "Cycle to first piece →",
    "gallery10_title": "Morning Mist Socks",
    "gallery10_intro": "Fine merino socks inspired by dawn walks through Glarus meadows.",
    "gallery10_fiber": "Swiss merino with a trace of silk for sheen.",
    "gallery10_stitches": "Spiralling eyelet columns with reinforced heel.",
    "gallery10_dimensions": "Size EU 38-40, leg height 18 cm.",
    "gallery10_time": "12 hours including blocking.",
    "gallery10_color1": "Mist Blue",
    "gallery10_color2": "Valley Dew",
    "gallery10_color3": "Larch Bark",
    "gallery10_color4": "Cloud White",
    "gallery10_related_blog": "Read Threads of Resilience →",
    "gallery11_title": "Alpine Path Socks",
    "gallery11_intro": "Textured hiking socks with cushioned soles for winter rambles.",
    "gallery11_fiber": "Swiss Bluefaced Leicester blended with nylon for strength.",
    "gallery11_stitches": "Broken rib with garter sole and snug cuff.",
    "gallery11_dimensions": "Size EU 42-44, leg height 22 cm.",
    "gallery11_time": "14 hours with reinforcement.",
    "gallery11_color1": "Pine Shadow",
    "gallery11_color2": "Trail Gravel",
    "gallery11_color3": "Snow Drift",
    "gallery11_color4": "Sky Break",
    "gallery11_related_blog": "Explore Wool & Wellness Rituals →",
    "gallery12_title": "Lantern Glow Mitts",
    "gallery12_intro": "Fingerless mitts capturing candlelit evenings for journaling and sketching.",
    "gallery12_fiber": "Baby alpaca accented with copper lurex.",
    "gallery12_stitches": "Slip-stitch lattice with thumb gusset.",
    "gallery12_dimensions": "Length 23 cm, palm circumference 18 cm.",
    "gallery12_time": "9 hours including finishing.",
    "gallery12_color1": "Amber Glow",
    "gallery12_color2": "Copper Spark",
    "gallery12_color3": "Night Ink",
    "gallery12_color4": "Soft Candle",
    "gallery12_related_blog": "Step inside the Chalet Studio →",
    "gallery13_title": "Chamomile Comfort Socks",
    "gallery13_intro": "Tea-time socks infused with calming lace motifs for rest days.",
    "gallery13_fiber": "Organic merino dyed with hand-brewed chamomile petals.",
    "gallery13_stitches": "Tea leaf lace pattern with ribbed cuff.",
    "gallery13_dimensions": "Size EU 36-38, leg height 16 cm.",
    "gallery13_time": "11 hours including natural dye session.",
    "gallery13_color1": "Honey Cream",
    "gallery13_color2": "Tea Leaf",
    "gallery13_color3": "Steam Grey",
    "gallery13_color4": "Porcelain",
    "gallery13_related_blog": "Discover Wool & Wellness Rituals →",
    "gallery14_title": "Glärnisch Vista Shawl",
    "gallery14_intro": "A sweeping crescent shawl reflecting the panorama above Glarus.",
    "gallery14_fiber": "Hand-dyed merino and silk gradient.",
    "gallery14_stitches": "Garter body with feathered lace border.",
    "gallery14_dimensions": "Wingspan 210 cm × depth 65 cm.",
    "gallery14_time": "48 hours including gradient prep.",
    "gallery14_color1": "Summit Snow",
    "gallery14_color2": "Glacier Teal",
    "gallery14_color3": "Larch Bark",
    "gallery14_color4": "Twilight Violet",
    "gallery14_related_blog": "Contemplating Alpine Horizons →",
    "gallery15_title": "Linth River Wrap",
    "gallery15_intro": "Rectangular wrap echoing river currents and winter reflections.",
    "gallery15_fiber": "Merino held with kid mohair.",
    "gallery15_stitches": "Two-colour brioche with slip-stitch borders.",
    "gallery15_dimensions": "Length 230 cm × width 45 cm.",
    "gallery15_time": "52 hours including finishing.",
    "gallery15_color1": "River Teal",
    "gallery15_color2": "Pebble Grey",
    "gallery15_color3": "Frost White",
    "gallery15_color4": "Moss Green",
    "gallery15_related_blog": "Contemplating Alpine Horizons →",
    "gallery16_title": "Klöntal Breeze Throw",
    "gallery16_intro": "Chunky chalet throw inspired by the breeze that rolls over Lake Klöntal.",
    "gallery16_fiber": "Peruvian highland wool held double.",
    "gallery16_stitches": "Fisherman’s rib with garter borders.",
    "gallery16_dimensions": "150 cm × 120 cm.",
    "gallery16_time": "36 hours including seaming.",
    "gallery16_color1": "Lake Mist",
    "gallery16_color2": "Stone Grey",
    "gallery16_color3": "Pine Needle",
    "gallery16_color4": "Chalet Cream",
    "gallery16_related_blog": "Step inside the Chalet Studio →",
    "gallery17_title": "Summit Sunrise Stole",
    "gallery17_intro": "Lightweight stole blending peach sunrise with glacier blue.",
    "gallery17_fiber": "Merino and silk lace weight.",
    "gallery17_stitches": "Alternating lace panels with picot edging.",
    "gallery17_dimensions": "Length 210 cm × width 38 cm.",
    "gallery17_time": "44 hours including blocking.",
    "gallery17_color1": "Peach Dawn",
    "gallery17_color2": "Alpine Sky",
    "gallery17_color3": "Snow Veil",
    "gallery17_color4": "Granite Shadow",
    "gallery17_related_blog": "Contemplating Alpine Horizons →",
    "gallery18_title": "Valley Lights Poncho",
    "gallery18_intro": "Draped poncho glowing with the evening lights of the Linth valley.",
    "gallery18_fiber": "Hand-spun merino blended with linen ribbon.",
    "gallery18_stitches": "Modular seed stitch panels with braided neckline.",
    "gallery18_dimensions": "Length 70 cm, circumference 200 cm.",
    "gallery18_time": "58 hours of modular assembly.",
    "gallery18_color1": "Candle Gold",
    "gallery18_color2": "Evening Amber",
    "gallery18_color3": "Mountain Plum",
    "gallery18_color4": "Charcoal Night",
    "gallery18_related_blog": "Step inside the Chalet Studio →",
    "gallery20_title": "Heather Valley Socks",
    "gallery20_intro": "Speckled hikers knit for brisk valley mornings.",
    "gallery20_fiber": "Swiss merino-nylon blend with heather tweed flecks.",
    "gallery20_stitches": "Twisted rib leg with meadow lace instep.",
    "gallery20_dimensions": "Size EU 39-41, leg height 20 cm.",
    "gallery20_time": "13 hours including reinforced toes.",
    "gallery20_color1": "Heather Plum",
    "gallery20_color2": "Meadow Thyme",
    "gallery20_color3": "Granite Path",
    "gallery20_color4": "Alpine Light",
    "gallery21_title": "Alpine Sunrise Socks",
    "gallery21_intro": "Gradient stripes capturing sunrise above Tödi.",
    "gallery21_fiber": "Superwash merino with breathable bamboo.",
    "gallery21_stitches": "Slip-stitch gradients with cushioned heel.",
    "gallery21_dimensions": "Size EU 37-39, leg height 18 cm.",
    "gallery21_time": "12 hours including blocking.",
    "gallery21_color1": "Dawn Peach",
    "gallery21_color2": "Summit Snow",
    "gallery21_color3": "Sky Glow",
    "gallery21_color4": "Pine Shadow",
    "gallery22_title": "Amber Honey Shawl",
    "gallery22_intro": "Warm crescent wrap steeped in alpine honey tones.",
    "gallery22_fiber": "Merino-silk single spun for luminous drape.",
    "gallery22_stitches": "Honeycomb lace bordered with slip-stitch edges.",
    "gallery22_dimensions": "Wingspan 190 cm × depth 55 cm.",
    "gallery22_time": "42 hours including blocking.",
    "gallery22_color1": "Honey Amber",
    "gallery22_color2": "Alpine Bark",
    "gallery22_color3": "Hearth Glow",
    "gallery22_color4": "Soft Cream",
    "gallery23_title": "Velvet Taupe Wrap",
    "gallery23_intro": "Plush rectangle woven for mindful evening rituals.",
    "gallery23_fiber": "Baby alpaca and silk in brushed spun yarn.",
    "gallery23_stitches": "Broken seed stitch with slipped fringe borders.",
    "gallery23_dimensions": "Length 210 cm × width 45 cm.",
    "gallery23_time": "38 hours including finishing.",
    "gallery23_color1": "Velvet Taupe",
    "gallery23_color2": "Fog Drift",
    "gallery23_color3": "Walnut Husk",
    "gallery23_color4": "Candlelight",
    "gallery24_title": "Glacier Teal Drape",
    "gallery24_intro": "Waterfall shawl reflecting glacier teal gradients.",
    "gallery24_fiber": "Merino and kid mohair held together.",
    "gallery24_stitches": "Feather-and-fan panels with icicle picot edge.",
    "gallery24_dimensions": "Wingspan 200 cm × depth 60 cm.",
    "gallery24_time": "44 hours including gradient prep.",
    "gallery24_color1": "Glacier Teal",
    "gallery24_color2": "Lake Shadow",
    "gallery24_color3": "Frost Mist",
    "gallery24_color4": "Pine Needle",
    "gallery25_title": "Warm Clay Poncho",
    "gallery25_intro": "Draped poncho echoing sun-warmed terracotta paths.",
    "gallery25_fiber": "Organic wool blended with Andean alpaca.",
    "gallery25_stitches": "Modular garter panels joined with braid seams.",
    "gallery25_dimensions": "Length 68 cm, circumference 200 cm.",
    "gallery25_time": "34 hours including seaming.",
    "gallery25_color1": "Clay Ember",
    "gallery25_color2": "Canyon Sand",
    "gallery25_color3": "Hearth Brown",
    "gallery25_color4": "Mesa Cream",
    "gallery26_title": "Rustic Umber Poncho",
    "gallery26_intro": "Heritage poncho inspired by forest cabins.",
    "gallery26_fiber": "Highland wool spun in rustic singles.",
    "gallery26_stitches": "Moss stitch body with cable lattice yoke.",
    "gallery26_dimensions": "Length 72 cm, circumference 210 cm.",
    "gallery26_time": "39 hours including finishing.",
    "gallery26_color1": "Rustic Umber",
    "gallery26_color2": "Cedar Bark",
    "gallery26_color3": "Smoky Quartz",
    "gallery26_color4": "Hearth Ash",
    "gallery27_title": "Cedar Vista Caftan",
    "gallery27_intro": "Flowing caftan tailored for cedar forests and studio days.",
    "gallery27_fiber": "Linen-wool blend brushed for softness.",
    "gallery27_stitches": "Openwork columns with crochet placket.",
    "gallery27_dimensions": "Length 120 cm, bust 110 cm.",
    "gallery27_time": "48 hours including seaming.",
    "gallery27_color1": "Cedar Grove",
    "gallery27_color2": "Mountain Sage",
    "gallery27_color3": "Birch Bark",
    "gallery27_color4": "Deep Earth",
    "gallery28_title": "Amber Ridge Caftan",
    "gallery28_intro": "Golden caftan capturing evening light over the ridges.",
    "gallery28_fiber": "Silk-merino blend with subtle sheen.",
    "gallery28_stitches": "Feathered chevron panels with belt casing.",
    "gallery28_dimensions": "Length 118 cm, bust 108 cm.",
    "gallery28_time": "52 hours including finishing.",
    "gallery28_color1": "Ridge Amber",
    "gallery28_color2": "Sunset Clay",
    "gallery28_color3": "Alpine Shadow",
    "gallery28_color4": "Candle Glow",
    "gallery29_title": "Alpine Mist Caftan",
    "gallery29_intro": "Cream caftan layered for misty mornings.",
    "gallery29_fiber": "Brushed baby alpaca and cotton blend.",
    "gallery29_stitches": "Basketweave panels with slipped hems.",
    "gallery29_dimensions": "Length 122 cm, bust 112 cm.",
    "gallery29_time": "50 hours including hand finishing.",
    "gallery29_color1": "Alpine Mist",
    "gallery29_color2": "Frost Grey",
    "gallery29_color3": "Larch Twig",
    "gallery29_color4": "Glacier Shadow",
    "footer_follow": "Follow us:",
    "footer_follow_facebook": "Facebook",
    "footer_follow_instagram": "Instagram",
    "footer_follow_tiktok": "TikTok",
    "blog_filters_heading": "Categories:",
    "blog_filter_all": "All",
    "blog_filter_studio": "Studio Journal",
    "blog_filter_care": "Care Guide",
    "blog_filter_behind": "Behind the Scenes",
    "blog_filter_lifestyle": "Lifestyle",
    "gallery_cap_morning_mist": "Morning Mist Socks",
    "gallery_cap_alpine_path": "Alpine Path Socks",
    "gallery_cap_lantern_glow": "Lantern Glow Mitts",
    "gallery_cap_chamomile": "Chamomile Comfort Socks",
    "gallery_cap_glaernisch_vista": "Glärnisch Vista Shawl",
    "gallery_cap_linth_wrap": "Linth River Wrap",
    "gallery_cap_kloental_breeze": "Klöntal Breeze Throw",
    "gallery_cap_summit_sunrise": "Summit Sunrise Stole",
    "gallery_cap_valley_lights": "Valley Lights Poncho"
  },
  "fr": {
    "nav_home": "Accueil",
    "nav_gallery": "Galerie",
    "nav_about": "À propos",
    "nav_blog": "Blog",
    "nav_contact": "Contact",
    "home_title": "Bienvenue chez Denise Knit ArtWorks",
    "home_intro_1": "Découvrez les créations tricotées main de Denise Gillioz, réalisées à Glaris en Suisse—où matins alpins et soirées conscientes rythment chaque maille.",
    "home_intro_2": "Cette version allégée présente quelques pièces de l’atelier, tissant résilience, rituels de bien-être et beauté laineuse.",
    "home_button": "Voir la galerie",
    "gallery_caption": "Julia danse dans la nuit profonde",
    "gallery_view_more": "Voir plus",
    "gallery_full_collection_button": "Explorer toute la collection",
    "gallery_extended_heading": "Vitrine étendue de l’atelier",
    "gallery_extended_intro": "Filtrez les pièces artisanales de Denise pour découvrir chaussettes, écharpes, ponchos et caftans pensés pour les saisons alpines.",
    "gallery_extended_filter_all": "Toutes les œuvres",
    "gallery_extended_filter_socks": "Chaussettes",
    "gallery_extended_filter_shawls": "Écharpes & châles",
    "gallery_extended_filter_ponchos": "Ponchos",
    "gallery_extended_filter_caftans": "Caftans",
    "gallery_extended_category_socks": "Chaussettes",
    "gallery_extended_category_shawls": "Écharpes & châles",
    "gallery_extended_category_ponchos": "Ponchos",
    "gallery_extended_category_caftans": "Caftans",
    "gallery_extended_prev": "Précédent",
    "gallery_extended_next": "Suivant",
    "gallery_extended_empty": "Aucune pièce ne correspond à ce filtre pour l’instant. Essayez une autre catégorie.",
    "gallery_ext_sock_heather_title": "Chaussettes Vallée bruyère",
    "gallery_ext_sock_alpine_title": "Chaussettes Aube alpine",
    "gallery_ext_shawl_honey_title": "Châle Ambre miel",
    "gallery_ext_shawl_taupe_title": "Étole Velours taupe",
    "gallery_ext_shawl_teal_title": "Drapé Glacier turquoise",
    "gallery_ext_poncho_teal_title": "Poncho Lumières de la vallée",
    "gallery_ext_poncho_clay_title": "Poncho Argile chaleureuse",
    "gallery_ext_poncho_umber_title": "Poncho Terre rustique",
    "gallery_ext_caftan_cedar_title": "Caftan Cèdre panoramique",
    "gallery_ext_caftan_amber_title": "Caftan Crête ambrée",
    "gallery_ext_caftan_mist_title": "Caftan Brume alpine",
    "about_heading": "À propos de moi",
    "about_intro_1": "Je suis Denise Gillioz, ancienne cadre de l’administration et du privé en Suisse. Aujourd’hui, ma retraite est consacrée à raconter des histoires de fibres et de passion.",
    "about_intro_2": "Face aux défis de santé et aux traversées de la vie, la laine m’a offert douceur et sens. Cette vitrine partage techniques, palettes alpines et joie d’offrir de la chaleur au monde.",
    "blog_heading": "Récits de l’atelier de Glaris",
    "blog_intro": "Parcourez comment le tricot soutient le bien-être, les leçons tirées des paysages glaronnais et les rituels que j’aime transmettre aux curieux.",
    "blog_card1_meta": "05 fév. 2024 • Journal d’atelier",
    "blog_card1_title": "Fils de résilience",
    "blog_card1_excerpt": "Comment des séances de tricot conscientes et des balades alpines ont renoué ma force au quotidien.",
    "blog_card2_meta": "22 jan. 2024 • Guide d’entretien",
    "blog_card2_title": "Rituels laine & bien-être",
    "blog_card2_excerpt": "Des soins simples qui honorent les fibres naturelles tout en apaisant votre propre système nerveux.",
    "blog_card3_meta": "10 déc. 2023 • Lifestyle",
    "blog_card3_title": "Contempler l’horizon alpin",
    "blog_card3_excerpt": "Un voyage méditatif dans les paysages de Glaris qui façonnent la palette de mes châles.",
    "blog_card4_meta": "18 nov. 2023 • Dans les coulisses",
    "blog_card4_title": "Dans l’atelier du chalet",
    "blog_card4_excerpt": "Rituels matinaux, playlists et cuves de teinture qui animent mon atelier de retraite.",
    "contact_heading": "Écrire à Denise",
    "contact_name_placeholder": "Votre nom",
    "contact_email_placeholder": "Adresse e-mail",
    "contact_message_placeholder": "Votre message",
    "contact_send": "Envoyer la lettre",
    "contact_intro": "Pas de bons de commande, pas de panier. Une porte ouverte, une bouilloire chaude, une boîte aux lettres tranquille.",
    "contact_email": "E-mail : <a href=\"mailto:contact@deniseknitnartworks.ch\" class=\"tm-link-white\">contact@deniseknitnartworks.ch</a>",
    "contact_phone": "Tél. : <a href=\"tel:0100200340\" class=\"tm-link-white\">010-020-0340</a>",
    "article1_tag": "Journal d&rsquo;atelier",
    "article1_title": "Fils de résilience",
    "article1_hero_intro": "Reconstruire après des saisons difficiles grâce aux aiguilles, à la laine et à la lumière des Alpes glaronaises.",
    "article1_meta_date": "05 fév. 2024",
    "article1_meta_read": "Lecture de 6 min",
    "article1_lede": "Lorsqu’un diagnostic soudain a bouleversé notre famille, le tricot est devenu mon espace de respiration et la manière de mesurer l’espérance.",
    "article1_paragraph_1": "Chaque aube je montais dix rangs lents, synchronisant souffle et mouvement pendant que la vallée s’éveillait. Noter la texture de chaque fil gardait mes pensées présentes et adoucissait les spirales d’angoisse.",
    "article1_callout_heading": "Rangs de résilience favoris",
    "article1_callout_item1": "Synchroniser souffle et mailles : inspirer sur l’endroit, expirer sur l’envers.",
    "article1_callout_item2": "Associer chaque nouveau fil à une page de journal qui capture le souvenir qu’il porte.",
    "article1_callout_item3": "Faire une promenade à midi dans la vallée avant de choisir la prochaine couleur.",
    "article1_callout_item4": "Partager chaque semaine une photo d’avancée pour célébrer les petites boucles.",
    "article1_paragraph_2": "Ces rituels ont transformé les projets en ancres douces. Les couleurs tirées du lac et de l’écorce de mélèze me rappelaient que le changement est saisonnier, jamais définitif.",
    "article1_quote": "« Le tricot m’apprend que le progrès est silencieux ; boucle après boucle nous revenons à nous-mêmes. »",
    "article1_paragraph_3": "Aujourd’hui j’invite voisins et apprenants aux soirées tricot en ligne depuis Glaris, tissant nos histoires pour que personne ne se sente seul avec ses aiguilles.",
    "article1_sidebar_heading": "Matériaux réconfortants",
    "article1_sidebar_subheading": "Projet en cours",
    "article1_sidebar_paragraph1": "Mérinos suisse filé main associé à de l’alpaga bébé sur aiguilles en bois 4,5 mm, palette inspirée de l’aube sur le Tödi.",
    "article1_sidebar_paragraph2": "Je savoure une tisane camomille-mélisse pendant qu’un jazz doux garde le rythme et détend les épaules.",
    "article2_tag": "Guide d&rsquo;entretien",
    "article2_title": "Rituels laine & bien-être",
    "article2_hero_intro": "Des gestes d’entretien doux qui prennent soin des fibres et des mains qui les travaillent.",
    "article2_meta_date": "22 jan. 2024",
    "article2_meta_read": "Lecture de 5 min",
    "article2_lede": "Prendre soin de la laine est un geste de bienveillance ; lorsque je ralentis avec l’eau tiède et le savon, ma respiration s’apaise.",
    "article2_section1_heading": "Préparer un bain conscient",
    "article2_paragraph_1": "Remplissez une bassine d’eau de source tiède, ajoutez une cuillerée de savon riche en lanoline et laissez le parfum de pin montagnard s’élever avant d’immerger le vêtement.",
    "article2_section2_heading": "Offrir une finition réparatrice",
    "article2_paragraph_2": "Pressez les fibres entre des serviettes avec les paumes ouvertes, étirez-les doucement sur les tapis de blocage et laissez vos épaules se relâcher tandis que la pièce se détend.",
    "article2_callout_heading": "Checklist bien-être",
    "article2_callout_item1": "Allumer une bougie en cire d’abeille pour sacraliser le moment.",
    "article2_callout_item2": "Ajouter une goutte de lavande ou de pin pour une calme alpin.",
    "article2_callout_item3": "Masser poignets et doigts en évacuant l’eau de la laine.",
    "article2_callout_item4": "Noter vos sensations dans un carnet une fois la pièce posée à plat.",
    "article2_paragraph_3": "Ces pauses gardent les ouvrages lumineux et me rappellent que l’entretien est un espace d’écoute intérieure, non une corvée à bâcler.",
    "article2_sidebar_heading": "Palette aromathérapie",
    "article2_sidebar_item1": "Planche de trempage en cèdre pour une senteur ancrante.",
    "article2_sidebar_item2": "Lessive écologique à l’extrait de camomille.",
    "article2_sidebar_item3": "Serviettes microfibres réservées au tricot.",
    "article2_sidebar_item4": "Fils de blocage gainés de lin pour une tenue douce.",
    "article2_sidebar_subheading": "Rythme hebdomadaire",
    "article2_sidebar_paragraph": "Alternez nettoyages profonds et aération au grand air pour laisser les fibres se reposer ; offrez-vous la même alternance entre effort et récupération.",
    "article3_tag": "Lifestyle",
    "article3_title": "Contempler l’horizon alpin",
    "article3_hero_intro": "Une balade méditative dans les paysages de Glaris qui colorent mes châles et apaisent le cœur.",
    "article3_meta_date": "10 déc. 2023",
    "article3_meta_read": "Lecture de 4 min",
    "article3_lede": "Certains modèles naissent du silence. Je monte dans le train vers Linthal en esquissant les sommets que le soleil touche.",
    "article3_section1_heading": "Notes de couleur de la vallée",
    "article3_paragraph_1": "Les prés givrés offrent un sauge argenté, tandis que la Linth apporte un bleu profond. J’inscris chaque teinte dans un carnet avant qu’elle ne s’efface.",
    "article3_callout_heading": "Invitations à observer",
    "article3_callout_paragraph": "Faites une pause, nommez trois couleurs, notez la sensation de l’air sur votre peau et imaginez quelle texture de point pourrait conserver cette impression.",
    "article3_section2_heading": "Compagnons de voyage conscients",
    "article3_paragraph_2": "Un appareil photo léger, un enregistrement de cloches de vaches et une pochette d’échantillons m’accompagnent pour que les idées rentrent à l’atelier sans précipitation.",
    "article3_paragraph_3": "Lorsque je tricote les premiers rangs, le paysage vit déjà dans la matière, prêt à consoler celui ou celle qui s’en enveloppe.",
    "article3_sidebar_heading": "Carnet de terrain glaronais",
    "article3_sidebar_item1": "Belvédère sur la Linth – bleu sarcelle et ardoise pour des chaussettes dégradées.",
    "article3_sidebar_item2": "Forêt de pins du Klöntal – vert mousse et éclats cuivrés.",
    "article3_sidebar_item3": "Crête de Schwammhöhe – rose crépuscule pour une bordure de dentelle.",
    "article3_sidebar_item4": "Vergers de Niederurnen – abricot doux pour des mitaines.",
    "article3_sidebar_subheading": "Prochaine sortie",
    "article3_sidebar_paragraph": "Prévoir une session d’esquisses à l’aube au lac Klöntal avec thermos de chai et panier d’échantillons.",
    "article4_tag": "Dans les coulisses",
    "article4_title": "Dans l’atelier du chalet",
    "article4_hero_intro": "Un regard sur les routines qui gardent mon atelier glaronais vibrant et accueillant.",
    "article4_meta_date": "18 nov. 2023",
    "article4_meta_read": "Lecture de 5 min",
    "article4_lede": "L’atelier s’éveille à 6 h lorsque j’ouvre les volets pour regarder la lumière rose caresser le Tödi.",
    "article4_paragraph_1": "Je chauffe la pièce avec un petit poêle, puis aligne les pelotes choisies la veille. Une note de gratitude repose près de l’écheveaudoir.",
    "article4_callout_heading": "Rythmes de l’atelier",
    "article4_callout_item1": "06h30 bouilloire + journal de gratitude.",
    "article4_callout_item2": "07h15 plan de couleurs sous la fenêtre nord.",
    "article4_callout_item3": "09h00 contrôle des bains de teinture et étirements.",
    "article4_callout_item4": "16h00 rangement, photo des avancées, fermeture de la journée.",
    "article4_paragraph_2": "La retraite me permet de bouger lentement ; j’écoute la météo et la laisse décider si je teins, dessine ou répare simplement.",
    "article4_paragraph_3": "Ce rythme clarifie mon esprit et me rappelle que l’artisanat est un compagnon, non une course.",
    "article4_sidebar_heading": "Essentiels de l’atelier",
    "article4_sidebar_item1": "Table en érable fabriquée par mon père.",
    "article4_sidebar_item2": "Dévidoir ancien sauvé d’une brocante de Bâle.",
    "article4_sidebar_item3": "Jeu d’aiguilles en bouleau 3,75–5 mm pour les projets quotidiens.",
    "article4_sidebar_item4": "Playlist de jazz suisse et murmure de la fonte des neiges.",
    "article4_sidebar_subheading": "Message à la communauté",
    "article4_sidebar_paragraph": "J’anime un cercle de tricot mensuel à Gemeindehausplatz ; les nouveaux reçoivent du thé, des notes de patrons et une accolade à l’entrée.",
    "article_back_to_blog": "&#8592; Retour au blog",
    "article_next": "Article suivant &#8594;",
    "article_previous": "&#8592; Article précédent",
    "footer_copy": "© 2025 Denise Knit ArtWorks. Tous droits réservés.",
    "footer_credit": "Conception : <a rel=\"author external noopener\" href=\"https://tech-and-web.com\" target=\"_blank\" hreflang=\"fr\" lang=\"fr\" class=\"tm-link-white dka-footer-creator\" title=\"TECH &amp; WEB — agence web full-service · webdesign, SEO, UX mobile-first, PWA · Conceptrice et développeuse de deniseknitnartworks.ch\" aria-label=\"Site conçu et développé par TECH &amp; WEB — visiter tech-and-web.com (ouvre dans un nouvel onglet)\" itemprop=\"creator\" itemscope itemtype=\"https://schema.org/Organization\"><strong itemprop=\"name\">TECH &amp; WEB</strong><meta itemprop=\"url\" content=\"https://tech-and-web.com\" /><meta itemprop=\"alternateName\" content=\"tech-and-web.com\" /><meta itemprop=\"alternateName\" content=\"Tech and Web\" /><meta itemprop=\"description\" content=\"Agence web full-service : design, développement, SEO, PWA, UX mobile-first, expériences multilingues.\" /><meta itemprop=\"knowsAbout\" content=\"Webdesign\" /><meta itemprop=\"knowsAbout\" content=\"SEO\" /><meta itemprop=\"knowsAbout\" content=\"Données structurées Schema.org\" /><meta itemprop=\"knowsAbout\" content=\"UX mobile-first\" /><meta itemprop=\"knowsAbout\" content=\"Progressive Web Apps\" /></a>",
    "gallery_meta_fiber": "Fibre",
    "gallery_meta_stitches": "Points",
    "gallery_meta_dimensions": "Dimensions",
    "gallery_meta_time": "Heures",
    "gallery_palette_heading": "Palette",
    "gallery_related_heading": "Liens",
    "gallery_back_to_grid": "← Retour à la galerie",
    "gallery_next_piece": "Pièce suivante →",
    "gallery_previous_piece": "← Pièce précédente",
    "gallery_next_cycle": "Revenir à la première →",
    "gallery10_title": "Chaussettes Brume du matin",
    "gallery10_intro": "Chaussettes en mérinos fines inspirées des balades à l’aube dans les prairies de Glaris.",
    "gallery10_fiber": "Mérinos suisse avec une touche de soie pour la brillance.",
    "gallery10_stitches": "Colonnes de jours en spirale avec talon renforcé.",
    "gallery10_dimensions": "Pointure EU 38-40, hauteur de tige 18 cm.",
    "gallery10_time": "12 heures blocage compris.",
    "gallery10_color1": "Bleu brume",
    "gallery10_color2": "Rosée de vallée",
    "gallery10_color3": "Écorce de mélèze",
    "gallery10_color4": "Blanc nuage",
    "gallery10_related_blog": "Lire « Fils de résilience » →",
    "gallery11_title": "Chaussettes Sentier alpin",
    "gallery11_intro": "Chaussettes texturées pour les randonnées d’hiver avec semelle amortie.",
    "gallery11_fiber": "Bluefaced Leicester suisse mélangé à du nylon pour la solidité.",
    "gallery11_stitches": "Côtes brisées avec semelle en point mousse et bord côtelé.",
    "gallery11_dimensions": "Pointure EU 42-44, hauteur de tige 22 cm.",
    "gallery11_time": "14 heures avec renfort.",
    "gallery11_color1": "Ombre de pin",
    "gallery11_color2": "Gravier du sentier",
    "gallery11_color3": "Neige poudrée",
    "gallery11_color4": "Éclaircie du ciel",
    "gallery11_related_blog": "Explorer « Rituels laine & bien-être » →",
    "gallery12_title": "Mitaines Lueur de lanterne",
    "gallery12_intro": "Mitaines sans doigts qui capturent la chaleur des soirées à la bougie pour écrire et dessiner.",
    "gallery12_fiber": "Alpaga bébé relevé d’un fil cuivré.",
    "gallery12_stitches": "Reseau de mailles glissées avec gousset de pouce.",
    "gallery12_dimensions": "Longueur 23 cm, tour de main 18 cm.",
    "gallery12_time": "9 heures finitions comprises.",
    "gallery12_color1": "Ambre lumineux",
    "gallery12_color2": "Étincelle cuivre",
    "gallery12_color3": "Encre nocturne",
    "gallery12_color4": "Flamme douce",
    "gallery12_related_blog": "Entrer dans « Dans l’atelier du chalet » →",
    "gallery13_title": "Chaussettes Confort camomille",
    "gallery13_intro": "Chaussettes d’infusion avec dentelle apaisante pour les journées de repos.",
    "gallery13_fiber": "Mérinos biologique teint aux pétales de camomille.",
    "gallery13_stitches": "Motif de feuilles de thé avec bord-côte.",
    "gallery13_dimensions": "Pointure EU 36-38, hauteur de tige 16 cm.",
    "gallery13_time": "11 heures dont la teinture naturelle.",
    "gallery13_color1": "Crème miel",
    "gallery13_color2": "Feuille de thé",
    "gallery13_color3": "Gris vapeur",
    "gallery13_color4": "Porcelaine",
    "gallery13_related_blog": "Découvrir « Rituels laine & bien-être » →",
    "gallery14_title": "Châle Panorama du Glärnisch",
    "gallery14_intro": "Châle croissant ample qui reflète la vue panoramique au-dessus de Glaris.",
    "gallery14_fiber": "Dégradé merino-soie teint à la main.",
    "gallery14_stitches": "Corps en point mousse avec bordure de dentelle plumetée.",
    "gallery14_dimensions": "Envergure 210 cm × profondeur 65 cm.",
    "gallery14_time": "48 heures préparation du dégradé incluse.",
    "gallery14_color1": "Neige du sommet",
    "gallery14_color2": "Turquoise glacier",
    "gallery14_color3": "Écorce de mélèze",
    "gallery14_color4": "Violet crépuscule",
    "gallery14_related_blog": "Lire « Contempler l’horizon alpin » →",
    "gallery15_title": "Étole Rivière Linth",
    "gallery15_intro": "Étole rectangulaire qui évoque les courants et reflets d’hiver de la Linth.",
    "gallery15_fiber": "Mérinos associé à du kid mohair.",
    "gallery15_stitches": "Brioche bicolore avec lisières de mailles glissées.",
    "gallery15_dimensions": "Longueur 230 cm × largeur 45 cm.",
    "gallery15_time": "52 heures finition comprise.",
    "gallery15_color1": "Turquoise rivière",
    "gallery15_color2": "Gris galet",
    "gallery15_color3": "Blanc givre",
    "gallery15_color4": "Vert mousse",
    "gallery15_related_blog": "Lire « Contempler l’horizon alpin » →",
    "gallery16_title": "Plaid Brise du Klöntal",
    "gallery16_intro": "Plaid épais pour les soirées au chalet, inspiré des vents du lac Klöntal.",
    "gallery16_fiber": "Laine des hauts plateaux péruviens tricotée en double.",
    "gallery16_stitches": "Point de pêcheur avec bordures en point mousse.",
    "gallery16_dimensions": "150 cm × 120 cm.",
    "gallery16_time": "36 heures montage compris.",
    "gallery16_color1": "Brume du lac",
    "gallery16_color2": "Gris pierre",
    "gallery16_color3": "Aiguille de pin",
    "gallery16_color4": "Crème chalet",
    "gallery16_related_blog": "Entrer dans « Dans l’atelier du chalet » →",
    "gallery17_title": "Étole Aube sommet",
    "gallery17_intro": "Étole légère mêlant pêche du lever de soleil et bleu glacier.",
    "gallery17_fiber": "Laine et soie en lace.",
    "gallery17_stitches": "Panneaux de dentelle alternés avec bord picot.",
    "gallery17_dimensions": "Longueur 210 cm × largeur 38 cm.",
    "gallery17_time": "44 heures blocage compris.",
    "gallery17_color1": "Aube pêche",
    "gallery17_color2": "Ciel alpin",
    "gallery17_color3": "Voile de neige",
    "gallery17_color4": "Ombre granit",
    "gallery17_related_blog": "Lire « Contempler l’horizon alpin » →",
    "gallery18_title": "Poncho Lumières de la vallée",
    "gallery18_intro": "Poncho drapé qui rayonne des lumières du soir de la vallée de la Linth.",
    "gallery18_fiber": "Mérinos filé main mélangé à un ruban de lin.",
    "gallery18_stitches": "Panneaux en point de riz modulaires avec encolure tressée.",
    "gallery18_dimensions": "Longueur 70 cm, circonférence 200 cm.",
    "gallery18_time": "58 heures d’assemblage modulaire.",
    "gallery18_color1": "Or bougie",
    "gallery18_color2": "Ambre du soir",
    "gallery18_color3": "Prune montagne",
    "gallery18_color4": "Nuit charbon",
    "gallery18_related_blog": "Entrer dans « Dans l’atelier du chalet » →",
    "gallery20_title": "Chaussettes Vallée bruyère",
    "gallery20_intro": "Chaussettes mouchetées tricotées pour les matinées fraîches de la vallée.",
    "gallery20_fiber": "Mélange de mérinos suisse et nylon aux éclats tweed chinés.",
    "gallery20_stitches": "Jambe en côtes torses avec empeigne dentelle prairie.",
    "gallery20_dimensions": "Pointure EU 39-41, hauteur de tige 20 cm.",
    "gallery20_time": "13 heures avec renfort des pointes.",
    "gallery20_color1": "Prune bruyère",
    "gallery20_color2": "Thym des prés",
    "gallery20_color3": "Sentier granit",
    "gallery20_color4": "Lumière alpine",
    "gallery21_title": "Chaussettes Aube alpine",
    "gallery21_intro": "Rayures dégradées capturant l’aube au-dessus du Tödi.",
    "gallery21_fiber": "Mérinos superwash mêlé à du bambou respirant.",
    "gallery21_stitches": "Dégradés en mailles glissées avec talon amorti.",
    "gallery21_dimensions": "Pointure EU 37-39, hauteur de tige 18 cm.",
    "gallery21_time": "12 heures blocage compris.",
    "gallery21_color1": "Pêche d’aube",
    "gallery21_color2": "Neige sommital",
    "gallery21_color3": "Lueur céleste",
    "gallery21_color4": "Ombre de pin",
    "gallery22_title": "Châle Ambre miel",
    "gallery22_intro": "Châle croissant chaleureux infusé de tons de miel alpin.",
    "gallery22_fiber": "Fil simple mérinos-soie au tombé lumineux.",
    "gallery22_stitches": "Dentelle nid d’abeille bordée de mailles glissées.",
    "gallery22_dimensions": "Envergure 190 cm × profondeur 55 cm.",
    "gallery22_time": "42 heures blocage compris.",
    "gallery22_color1": "Ambre miel",
    "gallery22_color2": "Écorce alpine",
    "gallery22_color3": "Lueur du foyer",
    "gallery22_color4": "Crème douce",
    "gallery23_title": "Étole Velours taupe",
    "gallery23_intro": "Rectangle moelleux pour des rituels du soir en pleine conscience.",
    "gallery23_fiber": "Alpaga bébé et soie dans un fil brossé.",
    "gallery23_stitches": "Point de semis brisé avec bordures frangées glissées.",
    "gallery23_dimensions": "Longueur 210 cm × largeur 45 cm.",
    "gallery23_time": "38 heures finitions comprises.",
    "gallery23_color1": "Taupe velours",
    "gallery23_color2": "Brume douce",
    "gallery23_color3": "Noix brunie",
    "gallery23_color4": "Lumière de bougie",
    "gallery24_title": "Drapé Glacier turquoise",
    "gallery24_intro": "Châle cascade reflétant les dégradés turquoise des glaciers.",
    "gallery24_fiber": "Mérinos et kid mohair tenus ensemble.",
    "gallery24_stitches": "Panneaux plumes-et-éventails avec bord picot glacé.",
    "gallery24_dimensions": "Envergure 200 cm × profondeur 60 cm.",
    "gallery24_time": "44 heures, préparation du dégradé incluse.",
    "gallery24_color1": "Turquoise glacier",
    "gallery24_color2": "Ombre du lac",
    "gallery24_color3": "Brume givrée",
    "gallery24_color4": "Aiguille de pin",
    "gallery25_title": "Poncho Argile chaleureuse",
    "gallery25_intro": "Poncho drapé qui rappelle les sentiers terracotta chauffés au soleil.",
    "gallery25_fiber": "Laine biologique mêlée d’alpaga andin.",
    "gallery25_stitches": "Panneaux modulaires en point mousse reliés par des tresses.",
    "gallery25_dimensions": "Longueur 68 cm, circonférence 200 cm.",
    "gallery25_time": "34 heures coutures comprises.",
    "gallery25_color1": "Braise d’argile",
    "gallery25_color2": "Sable canyon",
    "gallery25_color3": "Brun foyer",
    "gallery25_color4": "Crème mesa",
    "gallery26_title": "Poncho Terre rustique",
    "gallery26_intro": "Poncho patrimonial inspiré des chalets forestiers.",
    "gallery26_fiber": "Laine des hautes terres filée en mèches rustiques.",
    "gallery26_stitches": "Corps en point de riz avec empiècement de torsades.",
    "gallery26_dimensions": "Longueur 72 cm, circonférence 210 cm.",
    "gallery26_time": "39 heures avec finitions.",
    "gallery26_color1": "Ocre rustique",
    "gallery26_color2": "Écorce de cèdre",
    "gallery26_color3": "Quartz fumé",
    "gallery26_color4": "Cendre d’âtre",
    "gallery27_title": "Caftan Cèdre panoramique",
    "gallery27_intro": "Caftan fluide pensé pour les forêts de cèdres et les journées d’atelier.",
    "gallery27_fiber": "Mélange lin-laine brossé pour la douceur.",
    "gallery27_stitches": "Colonnes ajourées avec patte crochetée.",
    "gallery27_dimensions": "Longueur 120 cm, tour de poitrine 110 cm.",
    "gallery27_time": "48 heures assemblage compris.",
    "gallery27_color1": "Bosquet de cèdres",
    "gallery27_color2": "Sauge montagnarde",
    "gallery27_color3": "Écorce de bouleau",
    "gallery27_color4": "Terre profonde",
    "gallery28_title": "Caftan Crête ambrée",
    "gallery28_intro": "Caftan doré qui capture la lumière du soir sur les crêtes.",
    "gallery28_fiber": "Mélange soie-mérinos à l’éclat subtil.",
    "gallery28_stitches": "Panneaux chevron plumetés avec coulisse de ceinture.",
    "gallery28_dimensions": "Longueur 118 cm, tour de poitrine 108 cm.",
    "gallery28_time": "52 heures finitions incluses.",
    "gallery28_color1": "Ambre des crêtes",
    "gallery28_color2": "Argile crépusculaire",
    "gallery28_color3": "Ombre alpine",
    "gallery28_color4": "Lueur de bougie",
    "gallery29_title": "Caftan Brume alpine",
    "gallery29_intro": "Caftan crème à superposer pour les matins embrumés.",
    "gallery29_fiber": "Mélange alpaga bébé brossé et coton.",
    "gallery29_stitches": "Panneaux en natté avec ourlets glissés.",
    "gallery29_dimensions": "Longueur 122 cm, tour de poitrine 112 cm.",
    "gallery29_time": "50 heures finitions main incluses.",
    "gallery29_color1": "Brume alpine",
    "gallery29_color2": "Gris givre",
    "gallery29_color3": "Brindille de mélèze",
    "gallery29_color4": "Ombre glacière",
    "footer_follow": "Suivez-nous :",
    "footer_follow_facebook": "Facebook",
    "footer_follow_instagram": "Instagram",
    "footer_follow_tiktok": "TikTok",
    "blog_filters_heading": "Catégories :",
    "blog_filter_all": "Toutes",
    "blog_filter_studio": "Journal d’atelier",
    "blog_filter_care": "Guide d’entretien",
    "blog_filter_behind": "Dans les coulisses",
    "blog_filter_lifestyle": "Lifestyle",
    "gallery_cap_morning_mist": "Chaussettes Brume du matin",
    "gallery_cap_alpine_path": "Chaussettes Sentier alpin",
    "gallery_cap_lantern_glow": "Mitaines Lueur de lanterne",
    "gallery_cap_chamomile": "Chaussettes Confort camomille",
    "gallery_cap_glaernisch_vista": "Châle Panorama du Glärnisch",
    "gallery_cap_linth_wrap": "Étole Rivière Linth",
    "gallery_cap_kloental_breeze": "Plaid Brise du Klöntal",
    "gallery_cap_summit_sunrise": "Étole Aube sommet",
    "gallery_cap_valley_lights": "Poncho Lumières de la vallée"
  },
  "de": {
    "nav_home": "Startseite",
    "nav_gallery": "Galerie",
    "nav_about": "Über mich",
    "nav_blog": "Blog",
    "nav_contact": "Kontakt",
    "home_title": "Willkommen bei Denise Knit ArtWorks",
    "home_intro_1": "Entdecken Sie handgestrickte Designs von Denise Gillioz aus Glarus, Schweiz – wo alpine Morgen und achtsame Abende jede Masche begleiten.",
    "home_intro_2": "Diese Lite-Version zeigt ausgewählte Stücke aus meinem Atelier und verknüpft Resilienz, Lebensstilrituale und die Schönheit von Wolle.",
    "home_button": "Galerie ansehen",
    "gallery_caption": "Julia tanzt in der tiefen Dunkelheit",
    "gallery_view_more": "Mehr ansehen",
    "gallery_full_collection_button": "Gesamte Kollektion entdecken",
    "gallery_extended_heading": "Erweiterte Atelier-Galerie",
    "gallery_extended_intro": "Filtere Denise’ handgefertigte Stücke nach Socken, Schals, Ponchos und Kaftanen für die alpinen Jahreszeiten.",
    "gallery_extended_filter_all": "Alle Werke",
    "gallery_extended_filter_socks": "Socken",
    "gallery_extended_filter_shawls": "Schals & Tücher",
    "gallery_extended_filter_ponchos": "Ponchos",
    "gallery_extended_filter_caftans": "Kaftane",
    "gallery_extended_category_socks": "Socken",
    "gallery_extended_category_shawls": "Schals & Tücher",
    "gallery_extended_category_ponchos": "Ponchos",
    "gallery_extended_category_caftans": "Kaftane",
    "gallery_extended_prev": "Zurück",
    "gallery_extended_next": "Weiter",
    "gallery_extended_empty": "Keine Stücke passen derzeit zu diesem Filter. Bitte wählen Sie eine andere Kategorie.",
    "gallery_ext_sock_heather_title": "Heathertal-Socken",
    "gallery_ext_sock_alpine_title": "Alpenmorgen-Socken",
    "gallery_ext_shawl_honey_title": "Bernstein-Honig-Schal",
    "gallery_ext_shawl_taupe_title": "Samttaupe-Stola",
    "gallery_ext_shawl_teal_title": "Gletscher-Teal-Drape",
    "gallery_ext_poncho_teal_title": "Tallichter-Poncho",
    "gallery_ext_poncho_clay_title": "Warmer-Lehm-Poncho",
    "gallery_ext_poncho_umber_title": "Rustikaler Umbra-Poncho",
    "gallery_ext_caftan_cedar_title": "Zedernblick-Kaftan",
    "gallery_ext_caftan_amber_title": "Bernstein-Kamm-Kaftan",
    "gallery_ext_caftan_mist_title": "Alpennebel-Kaftan",
    "about_heading": "Über mich",
    "about_intro_1": "Ich bin Denise Gillioz, eine ehemalige Verwaltungs- und Privatwirtschaftsfachfrau. Nach der Pension widme ich mich nun ganz meiner Leidenschaft für Garn und Geschichten.",
    "about_intro_2": "Gesundheitliche Herausforderungen und Lebensprüfungen begegnete ich mit weichen Maschen. Hier teile ich Techniken, Alpenpaletten und die Freude daran, Wärme in die Welt zu tragen.",
    "blog_heading": "Geschichten aus dem Glarner Atelier",
    "blog_intro": "Lesen Sie, wie Stricken Wohlbefinden stärkt, welche Inspiration ich aus den Glarner Landschaften ziehe und welche Atelierrituale ich gern weitergebe.",
    "blog_card1_meta": "05. Feb. 2024 • Atelierjournal",
    "blog_card1_title": "Fäden der Resilienz",
    "blog_card1_excerpt": "Wie achtsame Stricksessions und Alpenwanderungen meine Kraft in den Alltag zurückgeholt haben.",
    "blog_card2_meta": "22. Jan. 2024 • Pflegeleitfaden",
    "blog_card2_title": "Woll- und Wohlfühlrituale",
    "blog_card2_excerpt": "Einfache Pflegeroutinen, die natürliche Fasern ehren und zugleich das Nervensystem beruhigen.",
    "blog_card3_meta": "10. Dez. 2023 • Lifestyle",
    "blog_card3_title": "Alpine Horizonte betrachten",
    "blog_card3_excerpt": "Eine meditative Reise durch Glarner Landschaften, die die Palette meiner Schals prägen.",
    "blog_card4_meta": "18. Nov. 2023 • Hinter den Kulissen",
    "blog_card4_title": "Im Chalet-Atelier",
    "blog_card4_excerpt": "Morgenrituale, Playlists und Färbetöpfe, die mein Atelier im Ruhestand lebendig halten.",
    "contact_heading": "An Denise schreiben",
    "contact_name_placeholder": "Ihr Name",
    "contact_email_placeholder": "E-Mail-Adresse",
    "contact_message_placeholder": "Ihre Nachricht",
    "contact_send": "Den Brief senden",
    "contact_intro": "Keine Bestellscheine, kein Warenkorb. Eine offene Tür, ein warmer Kessel und ein stiller Briefkasten.",
    "contact_email": "E-Mail: <a href=\"mailto:contact@deniseknitnartworks.ch\" class=\"tm-link-white\">contact@deniseknitnartworks.ch</a>",
    "contact_phone": "Tel.: <a href=\"tel:0100200340\" class=\"tm-link-white\">010-020-0340</a>",
    "article1_tag": "Atelierjournal",
    "article1_title": "Fäden der Resilienz",
    "article1_hero_intro": "Neuanfänge nach schweren Zeiten mit Nadeln, Wolle und dem Licht der Glarner Alpen.",
    "article1_meta_date": "05. Feb. 2024",
    "article1_meta_read": "Lesezeit 6 Min.",
    "article1_lede": "Als eine plötzliche Diagnose unsere Familie erschütterte, wurde Stricken zu meinem Atemraum und zur Art, Hoffnung zu messen.",
    "article1_paragraph_1": "Jeden Morgen schlug ich zehn langsame Reihen an, synchronisierte Atem und Bewegung, während das Tal erwachte. Die Textur jedes Garns zu notieren, hielt meine Gedanken im Hier und Jetzt und milderte Angstspiralen.",
    "article1_callout_heading": "Resilienz-Reihen, auf die ich zähle",
    "article1_callout_item1": "Atmung mit den Maschen verbinden: beim rechten Masche einatmen, beim linken ausatmen.",
    "article1_callout_item2": "Jedes neue Garn mit einer Tagebuchseite koppeln, die die Erinnerung dahinter festhält.",
    "article1_callout_item3": "Vor der nächsten Farbe einen Spaziergang durchs Tal machen.",
    "article1_callout_item4": "Wöchentlich ein Fortschrittsfoto teilen, um kleine Schleifen zu feiern.",
    "article1_paragraph_2": "Diese Rituale machten Projekte zu sanften Ankern. Farben aus See-Reflexionen und Lärchenrinde erinnerten mich daran, dass Veränderung saisonal ist, nicht endgültig.",
    "article1_quote": "„Stricken lehrt mich, dass Fortschritt leise ist; Masche für Masche finden wir zu uns zurück.“",
    "article1_paragraph_3": "Heute lade ich Nachbarn und Lernende zu virtuellen Strickabenden aus Glarus ein, damit niemand allein mit seinen Nadeln bleibt.",
    "article1_sidebar_heading": "Trostspendende Materialien",
    "article1_sidebar_subheading": "Aktuelles Projekt",
    "article1_sidebar_paragraph1": "Handgesponnene Schweizer Merinowolle mit Babyalpaka auf 4,5-mm-Holznadeln, Palette inspiriert vom Morgen über dem Tödi.",
    "article1_sidebar_paragraph2": "Ich trinke Kamillen- und Melissentee, während sanfter Jazz den Rhythmus hält und die Schultern entspannt.",
    "article2_tag": "Pflegeleitfaden",
    "article2_title": "Woll- und Wohlfühlrituale",
    "article2_hero_intro": "Sanfte Pflegeroutinen, die Fasern und die Hände, die sie schaffen, gleichermaßen umsorgen.",
    "article2_meta_date": "22. Jan. 2024",
    "article2_meta_read": "Lesezeit 5 Min.",
    "article2_lede": "Wolle zu pflegen ist ein Akt der Selbstfürsorge; wenn ich mit warmem Wasser und Seife entschleunige, folgt meine Atmung.",
    "article2_section1_heading": "Bewusste Lauge vorbereiten",
    "article2_paragraph_1": "Eine Schüssel mit lauwarmem Quellwasser füllen, einen Teelöffel lanolinreicher Seife einrühren und den Duft von Bergkiefer aufsteigen lassen, bevor das Stück eintaucht.",
    "article2_section2_heading": "Regenerierende Finish schaffen",
    "article2_paragraph_2": "Fasern zwischen Handtüchern mit offenen Handflächen pressen, behutsam auf Spannmatten ausstrecken und die Schultern senken, während das Stück entspannt.",
    "article2_callout_heading": "Wellness-Checkliste",
    "article2_callout_item1": "Eine Bienenwachskerze anzünden, um den Moment zu würdigen.",
    "article2_callout_item2": "Einen Tropfen Lavendel oder Kiefer für alpine Ruhe hinzugeben.",
    "article2_callout_item3": "Handgelenke und Finger massieren, während Wasser aus der Wolle gedrückt wird.",
    "article2_callout_item4": "Nach dem Auslegen eine Sinnesnotiz ins Tagebuch schreiben.",
    "article2_paragraph_3": "Diese Pausen halten die Stücke leuchtend und erinnern mich daran, dass Pflege ein Raum zum Lauschen ist, kein eiliger Pflichttermin.",
    "article2_sidebar_heading": "Aromatherapie-Palette",
    "article2_sidebar_item1": "Zedern-Holzbretteinsatz für erdenden Duft.",
    "article2_sidebar_item2": "Ökowaschmittel mit Kamillenextrakt.",
    "article2_sidebar_item3": "Mikrofaserhandtücher ausschließlich für Strickwaren.",
    "article2_sidebar_item4": "Blockierdrähte mit Leinenband umwickelt für sanften Halt.",
    "article2_sidebar_subheading": "Wöchentlicher Rhythmus",
    "article2_sidebar_paragraph": "Wechseln Sie tiefe Reinigungen mit Frischluftpausen ab, damit Fasern – und Sie selbst – zwischen Anstrengung und Erholung pendeln.",
    "article3_tag": "Lifestyle",
    "article3_title": "Alpine Horizonte betrachten",
    "article3_hero_intro": "Ein meditativer Spaziergang durch Glarner Landschaften, die meine Schals färben und das Herz beruhigen.",
    "article3_meta_date": "10. Dez. 2023",
    "article3_meta_read": "Lesezeit 4 Min.",
    "article3_lede": "Manche Entwürfe beginnen im Schweigen. Ich nehme den Zug Richtung Linthal und skizziere Gipfel, während die Sonne das Tal berührt.",
    "article3_section1_heading": "Farbnotizen aus dem Tal",
    "article3_paragraph_1": "Bereifte Wiesen schenken silbriges Salbei, der Linthfluss tiefes Petrol. Ich halte jede Nuance im Paletten-Tagebuch fest, bevor sie verblasst.",
    "article3_callout_heading": "Beobachtungsimpulse",
    "article3_callout_paragraph": "Pause einlegen, drei Farben benennen, die Luft auf der Haut spüren und überlegen, welche Maschenstruktur dieses Gefühl tragen könnte.",
    "article3_section2_heading": "Achtsame Reisebegleiter",
    "article3_paragraph_2": "Eine leichte Kamera, Tonaufnahmen von Kuhglocken und ein Etui mit Maschenproben begleiten mich, damit Ideen ungestört ins Atelier zurückkehren.",
    "article3_paragraph_3": "Wenn ich die ersten Reihen stricke, lebt die Landschaft bereits im Gewebe und spendet Wärme jedem, der sich darin einhüllt.",
    "article3_sidebar_heading": "Feldnotizen aus Glarus",
    "article3_sidebar_item1": "Aussicht über die Linth – Petrol & Schiefer für Verlaufssocken.",
    "article3_sidebar_item2": "Klöntal-Wald – Moosgrün mit Kupferschimmer.",
    "article3_sidebar_item3": "Schwammhöhe-Grat – rosiger Abend für eine Spitzenkante.",
    "article3_sidebar_item4": "Obsthöfe Niederurnen – sanftes Apricot für Fäustlinge.",
    "article3_sidebar_subheading": "Nächster Ausflug",
    "article3_sidebar_paragraph": "Geplant ist eine Skizzensession zum Sonnenaufgang am Klöntalersee mit Thermos-Chai und einem Korb voller Proben.",
    "article4_tag": "Hinter den Kulissen",
    "article4_title": "Im Chalet-Atelier",
    "article4_hero_intro": "Ein Blick auf die Routinen, die mein Glarner Atelier im Ruhestand lebendig und offen halten.",
    "article4_meta_date": "18. Nov. 2023",
    "article4_meta_read": "Lesezeit 5 Min.",
    "article4_lede": "Das Atelier erwacht um 6 Uhr, wenn ich die Fensterläden öffne und rosa Licht den Tödi berührt.",
    "article4_paragraph_1": "Ich wärme den Raum mit dem kleinen Holzofen, ordne die am Vorabend gewählten Garnknäuel und lege einen Dankbarkeitszettel neben die Haspel.",
    "article4_callout_heading": "Atelier-Rhythmen",
    "article4_callout_item1": "06:30 Kessel + Dankbarkeitstagebuch.",
    "article4_callout_item2": "07:15 Farbplanung am Nordfenster.",
    "article4_callout_item3": "09:00 Farbbad-Kontrolle und Dehnpause.",
    "article4_callout_item4": "16:00 Aufräumen, Fortschritt fotografieren, den Tag beschließen.",
    "article4_paragraph_2": "Der Ruhestand erlaubt mir, langsam zu arbeiten; ich lausche dem Wetter und lasse es entscheiden, ob ich färbe, entwerfe oder schlicht repariere.",
    "article4_paragraph_3": "Dieser Rhythmus klärt meinen Geist und erinnert mich daran, dass Handwerk Begleitung ist, kein Wettlauf.",
    "article4_sidebar_heading": "Atelier-Essentials",
    "article4_sidebar_item1": "Ahorn-Arbeitstisch, gebaut von meinem Vater.",
    "article4_sidebar_item2": "Antiker Schirmwickler vom Basler Flohmarkt.",
    "article4_sidebar_item3": "Birkennadeln 3,75–5 mm für Alltagsprojekte.",
    "article4_sidebar_item4": "Playlist aus Schweizer Jazz und Schneeschmelze.",
    "article4_sidebar_subheading": "Community-Notiz",
    "article4_sidebar_paragraph": "Ich veranstalte einen monatlichen Strickkreis auf dem Gemeindehausplatz; neue Gesichter erhalten Tee, Musternotizen und eine Umarmung an der Tür.",
    "article_back_to_blog": "&#8592; Zurück zum Blog",
    "article_next": "Nächster Artikel &#8594;",
    "article_previous": "&#8592; Vorheriger Artikel",
    "footer_copy": "© 2025 Denise Knit ArtWorks. Alle Rechte vorbehalten.",
    "footer_credit": "Design von <a rel=\"author external noopener\" href=\"https://tech-and-web.com\" target=\"_blank\" hreflang=\"de\" lang=\"de\" class=\"tm-link-white dka-footer-creator\" title=\"TECH &amp; WEB — Full-Service-Webagentur · Webdesign, SEO, Mobile-First-UX, PWA · Gestalterin und Entwicklerin von deniseknitnartworks.ch\" aria-label=\"Seite gestaltet und entwickelt von TECH &amp; WEB — tech-and-web.com besuchen (öffnet in einem neuen Tab)\" itemprop=\"creator\" itemscope itemtype=\"https://schema.org/Organization\"><strong itemprop=\"name\">TECH &amp; WEB</strong><meta itemprop=\"url\" content=\"https://tech-and-web.com\" /><meta itemprop=\"alternateName\" content=\"tech-and-web.com\" /><meta itemprop=\"alternateName\" content=\"Tech and Web\" /><meta itemprop=\"description\" content=\"Full-Service-Webagentur: Design, Entwicklung, SEO, PWA, Mobile-First-UX, mehrsprachige Erlebnisse.\" /><meta itemprop=\"knowsAbout\" content=\"Webdesign\" /><meta itemprop=\"knowsAbout\" content=\"SEO\" /><meta itemprop=\"knowsAbout\" content=\"Schema.org strukturierte Daten\" /><meta itemprop=\"knowsAbout\" content=\"Mobile-First-UX\" /><meta itemprop=\"knowsAbout\" content=\"Progressive Web Apps\" /></a>",
    "gallery_meta_fiber": "Faser",
    "gallery_meta_stitches": "Struktur",
    "gallery_meta_dimensions": "Maße",
    "gallery_meta_time": "Stunden",
    "gallery_palette_heading": "Palette",
    "gallery_related_heading": "Verknüpfungen",
    "gallery_back_to_grid": "← Zurück zur Galerie",
    "gallery_next_piece": "Nächstes Stück →",
    "gallery_previous_piece": "← Vorheriges Stück",
    "gallery_next_cycle": "Zur ersten Arbeit springen →",
    "gallery10_title": "Morgendunst-Socken",
    "gallery10_intro": "Feine Merinosocken, inspiriert von morgendlichen Spaziergängen durch Glarner Wiesen.",
    "gallery10_fiber": "Schweizer Merino mit einem Hauch Seide für Glanz.",
    "gallery10_stitches": "Spiralige Lochmuster-Säulen mit verstärkter Ferse.",
    "gallery10_dimensions": "Größe EU 38–40, Schafthöhe 18 cm.",
    "gallery10_time": "12 Stunden inklusive Blocken.",
    "gallery10_color1": "Nebelblau",
    "gallery10_color2": "Tal-Tau",
    "gallery10_color3": "Lärchenrinde",
    "gallery10_color4": "Wolkenweiß",
    "gallery10_related_blog": "„Fäden der Resilienz“ lesen →",
    "gallery11_title": "Alpenpfad-Socken",
    "gallery11_intro": "Texturierte Wandersocken mit gepolsterter Sohle für Wintertouren.",
    "gallery11_fiber": "Schweizer Bluefaced-Leicester mit Nylon für Stabilität.",
    "gallery11_stitches": "Gebrochene Rippe mit Krausssohle und festem Bund.",
    "gallery11_dimensions": "Größe EU 42–44, Schafthöhe 22 cm.",
    "gallery11_time": "14 Stunden mit Verstärkung.",
    "gallery11_color1": "Kieferschatten",
    "gallery11_color2": "Wegkiesel",
    "gallery11_color3": "Schneestaub",
    "gallery11_color4": "Himmelsspalte",
    "gallery11_related_blog": "„Woll- und Wohlfühlrituale“ entdecken →",
    "gallery12_title": "Laternenlicht-Stulpen",
    "gallery12_intro": "Fingerlose Stulpen, die das Kerzenlicht abendlicher Journalsessions einfangen.",
    "gallery12_fiber": "Babyalpaka mit kupferfarbenem Lurex.",
    "gallery12_stitches": "Gitter aus Schlupfmaschen mit Daumenkeil.",
    "gallery12_dimensions": "Länge 23 cm, Handumfang 18 cm.",
    "gallery12_time": "9 Stunden inklusive Finish.",
    "gallery12_color1": "Bernsteinglanz",
    "gallery12_color2": "Kupferspark",
    "gallery12_color3": "Nachtblau",
    "gallery12_color4": "Sanftes Kerzenlicht",
    "gallery12_related_blog": "„Im Chalet-Atelier“ besuchen →",
    "gallery13_title": "Kamillen-Komfortsocken",
    "gallery13_intro": "Teezeit-Socken mit beruhigender Spitze für Ruhetage.",
    "gallery13_fiber": "Bio-Merino, gefärbt mit Kamillenblüten.",
    "gallery13_stitches": "Teeblatt-Lace mit Rippbündchen.",
    "gallery13_dimensions": "Größe EU 36–38, Schafthöhe 16 cm.",
    "gallery13_time": "11 Stunden inklusive Naturfärbung.",
    "gallery13_color1": "Honigcreme",
    "gallery13_color2": "Teeblatt",
    "gallery13_color3": "Dampf-Grau",
    "gallery13_color4": "Porzellan",
    "gallery13_related_blog": "„Woll- und Wohlfühlrituale“ entdecken →",
    "gallery14_title": "Glärnisch-Panoramaschal",
    "gallery14_intro": "Weiter Halsschal, der das Panorama über Glarus widerspiegelt.",
    "gallery14_fiber": "Handgefärbter Merino-Seiden-Verlauf.",
    "gallery14_stitches": "Körper in Krausrechts mit federleichter Spitzenborte.",
    "gallery14_dimensions": "Spannweite 210 cm × Tiefe 65 cm.",
    "gallery14_time": "48 Stunden inklusive Farbverlauf.",
    "gallery14_color1": "Gipfelschnee",
    "gallery14_color2": "Gletscherteal",
    "gallery14_color3": "Lärchenrinde",
    "gallery14_color4": "Dämmer-Violett",
    "gallery14_related_blog": "„Alpine Horizonte betrachten“ lesen →",
    "gallery15_title": "Linthfluss-Stola",
    "gallery15_intro": "Rechteckige Stola, die Flussströmungen und Winterreflexionen einfängt.",
    "gallery15_fiber": "Merino zusammen mit Kidmohair.",
    "gallery15_stitches": "Zweifarbige Brioche mit Schlupfmaschen-Kanten.",
    "gallery15_dimensions": "Länge 230 cm × Breite 45 cm.",
    "gallery15_time": "52 Stunden inklusive Finish.",
    "gallery15_color1": "Fluss-Petrol",
    "gallery15_color2": "Kieselgrau",
    "gallery15_color3": "Frostweiß",
    "gallery15_color4": "Moosgrün",
    "gallery15_related_blog": "„Alpine Horizonte betrachten“ lesen →",
    "gallery16_title": "Klöntal-Brise-Throw",
    "gallery16_intro": "Kuscheliger Chalet-Throw, inspiriert von der Brise über dem Klöntalersee.",
    "gallery16_fiber": "Peruanische Hochlandwolle doppelt gestrickt.",
    "gallery16_stitches": "Fischgrät-Rippe mit Krausrändern.",
    "gallery16_dimensions": "150 cm × 120 cm.",
    "gallery16_time": "36 Stunden inklusive Zusammennähen.",
    "gallery16_color1": "Seebrise",
    "gallery16_color2": "Steingrau",
    "gallery16_color3": "Tannennadel",
    "gallery16_color4": "Chaletcreme",
    "gallery16_related_blog": "„Im Chalet-Atelier“ besuchen →",
    "gallery17_title": "Gipfelsonnenaufgang-Stola",
    "gallery17_intro": "Leichte Stola, die Pfirsichsonnenaufgang und Gletscherblau verbindet.",
    "gallery17_fiber": "Merino- und Seidengarn in Lace-Stärke.",
    "gallery17_stitches": "Abwechselnde Lace-Paneele mit Picot-Abschluss.",
    "gallery17_dimensions": "Länge 210 cm × Breite 38 cm.",
    "gallery17_time": "44 Stunden inklusive Blocken.",
    "gallery17_color1": "Pfirsichmorgen",
    "gallery17_color2": "Alpenhimmel",
    "gallery17_color3": "Schneeschleier",
    "gallery17_color4": "Granit-Schatten",
    "gallery17_related_blog": "„Alpine Horizonte betrachten“ lesen →",
    "gallery18_title": "Tallichter-Poncho",
    "gallery18_intro": "Locker fallender Poncho, der mit den Abendlichtern des Linthtals schimmert.",
    "gallery18_fiber": "Handgesponnenes Merino mit Leinenband verzwirnt.",
    "gallery18_stitches": "Modulare Perlmuster-Paneele mit geflochtener Halslinie.",
    "gallery18_dimensions": "Länge 70 cm, Umfang 200 cm.",
    "gallery18_time": "58 Stunden modularer Aufbau.",
    "gallery18_color1": "Kerzen-Gold",
    "gallery18_color2": "Abendbernstein",
    "gallery18_color3": "Bergpflaume",
    "gallery18_color4": "Nachtschwarz",
    "gallery18_related_blog": "„Im Chalet-Atelier“ besuchen →",
    "gallery20_title": "Heathertal-Socken",
    "gallery20_intro": "Gesprenkelte Wanderer für kühle Morgen im Tal.",
    "gallery20_fiber": "Schweizer Merino-Nylon-Mischung mit tweedigen Sprenkeln.",
    "gallery20_stitches": "Gedrehter Rippschaft mit Wiesen-Spitzenmuster.",
    "gallery20_dimensions": "Größe EU 39-41, Schafthöhe 20 cm.",
    "gallery20_time": "13 Stunden inklusive verstärkter Spitzen.",
    "gallery20_color1": "Heidepflaume",
    "gallery20_color2": "Wiesenthymian",
    "gallery20_color3": "Granitpfad",
    "gallery20_color4": "Alpenlicht",
    "gallery21_title": "Alpenmorgen-Socken",
    "gallery21_intro": "Farbverläufe, die den Sonnenaufgang über dem Tödi einfangen.",
    "gallery21_fiber": "Superwash-Merino mit atmungsaktivem Bambus.",
    "gallery21_stitches": "Slip-Stitch-Verläufe mit gepolsterter Ferse.",
    "gallery21_dimensions": "Größe EU 37-39, Schafthöhe 18 cm.",
    "gallery21_time": "12 Stunden inklusive Blocken.",
    "gallery21_color1": "Morgenpfirsich",
    "gallery21_color2": "Gipfelschnee",
    "gallery21_color3": "Himmelsglanz",
    "gallery21_color4": "Fichtenschatten",
    "gallery22_title": "Bernstein-Honig-Schal",
    "gallery22_intro": "Warmer Halbmondschal in honigfarbenen Alpennoten.",
    "gallery22_fiber": "Einfach gesponnene Merino-Seide mit sanftem Fall.",
    "gallery22_stitches": "Honigwaben-Lace mit Rand aus abgehobenen Maschen.",
    "gallery22_dimensions": "Spannweite 190 cm × Tiefe 55 cm.",
    "gallery22_time": "42 Stunden inklusive Blocken.",
    "gallery22_color1": "Honigbernstein",
    "gallery22_color2": "Alpenrinde",
    "gallery22_color3": "Ofenglut",
    "gallery22_color4": "Zarte Creme",
    "gallery23_title": "Samttaupe-Stola",
    "gallery23_intro": "Weiche Rechteckstola für achtsame Abendrituale.",
    "gallery23_fiber": "Babyalpaka und Seide als gebürstetes Garn.",
    "gallery23_stitches": "Gebrochener Samenstich mit abgehobenen Fransenrändern.",
    "gallery23_dimensions": "Länge 210 cm × Breite 45 cm.",
    "gallery23_time": "38 Stunden inklusive Finish.",
    "gallery23_color1": "Samttaupe",
    "gallery23_color2": "Nebelhau",
    "gallery23_color3": "Walnussschale",
    "gallery23_color4": "Kerzenlicht",
    "gallery24_title": "Gletscherteal-Drape",
    "gallery24_intro": "Wasserfallschal mit gletscherblauen Farbverläufen.",
    "gallery24_fiber": "Merino und Kid-Mohair zusammen verstrickt.",
    "gallery24_stitches": "Feder-und-Fächer-Partien mit Eiszapfen-Picotkante.",
    "gallery24_dimensions": "Spannweite 200 cm × Tiefe 60 cm.",
    "gallery24_time": "44 Stunden inklusive Farbverlauf.",
    "gallery24_color1": "Gletscherteal",
    "gallery24_color2": "Seeschatten",
    "gallery24_color3": "Frostschleier",
    "gallery24_color4": "Fichtennadel",
    "gallery25_title": "Warmer-Lehm-Poncho",
    "gallery25_intro": "Umhüllender Poncho wie sonnengewärmte Terrassenwege.",
    "gallery25_fiber": "Bio-Wolle mit andinem Alpaka gemischt.",
    "gallery25_stitches": "Modulare Krausrippenfelder mit Flechtverbindungen.",
    "gallery25_dimensions": "Länge 68 cm, Umfang 200 cm.",
    "gallery25_time": "34 Stunden inklusive Zusammennähen.",
    "gallery25_color1": "Lehmglut",
    "gallery25_color2": "Canyonsand",
    "gallery25_color3": "Ofenbraun",
    "gallery25_color4": "Mesa-Creme",
    "gallery26_title": "Rustikaler Umbra-Poncho",
    "gallery26_intro": "Traditionsponcho inspiriert von Waldhütten.",
    "gallery26_fiber": "Hochlandwolle in rustikalen Singles.",
    "gallery26_stitches": "Perlmuster-Korpus mit Zopfgitter am Hals.",
    "gallery26_dimensions": "Länge 72 cm, Umfang 210 cm.",
    "gallery26_time": "39 Stunden mit Abschluss.",
    "gallery26_color1": "Rustikale Umbra",
    "gallery26_color2": "Zedernrinde",
    "gallery26_color3": "Rauchquarz",
    "gallery26_color4": "Herdesche",
    "gallery27_title": "Zedernblick-Kaftan",
    "gallery27_intro": "Fließender Kaftan für Zedernwälder und Ateliertage.",
    "gallery27_fiber": "Gebürsteter Leinen-Woll-Mix für weichen Griff.",
    "gallery27_stitches": "Ajourkolonnen mit gehäkelter Knopfleiste.",
    "gallery27_dimensions": "Länge 120 cm, Brustumfang 110 cm.",
    "gallery27_time": "48 Stunden inklusive Zusammensetzen.",
    "gallery27_color1": "Zedernhain",
    "gallery27_color2": "Bergsalbei",
    "gallery27_color3": "Birkenrinde",
    "gallery27_color4": "Tiefe Erde",
    "gallery28_title": "Bernstein-Kamm-Kaftan",
    "gallery28_intro": "Goldener Kaftan, der das Abendlicht über den Graten trägt.",
    "gallery28_fiber": "Seiden-Merinomischung mit sanftem Glanz.",
    "gallery28_stitches": "Gefiederte Chevronfelder mit Gürtelkanal.",
    "gallery28_dimensions": "Länge 118 cm, Brustumfang 108 cm.",
    "gallery28_time": "52 Stunden inklusive Finish.",
    "gallery28_color1": "Kammbernstein",
    "gallery28_color2": "Abendtonerde",
    "gallery28_color3": "Alpenschatten",
    "gallery28_color4": "Kerzenschein",
    "gallery29_title": "Alpennebel-Kaftan",
    "gallery29_intro": "Cremiger Kaftan für nebelige Morgen.",
    "gallery29_fiber": "Gebürsteter Babyalpaka-Baumwoll-Mix.",
    "gallery29_stitches": "Flechtmuster-Paneele mit abgehobenen Säumen.",
    "gallery29_dimensions": "Länge 122 cm, Brustumfang 112 cm.",
    "gallery29_time": "50 Stunden inklusive Handfinish.",
    "gallery29_color1": "Alpennebel",
    "gallery29_color2": "Frostgrau",
    "gallery29_color3": "Lärchenzweig",
    "gallery29_color4": "Gletscherschatten",
    "footer_follow": "Folgen Sie uns:",
    "footer_follow_facebook": "Facebook",
    "footer_follow_instagram": "Instagram",
    "footer_follow_tiktok": "TikTok",
    "blog_filters_heading": "Kategorien:",
    "blog_filter_all": "Alle",
    "blog_filter_studio": "Atelierjournal",
    "blog_filter_care": "Pflegeleitfaden",
    "blog_filter_behind": "Hinter den Kulissen",
    "blog_filter_lifestyle": "Lifestyle",
    "gallery_cap_morning_mist": "Morgendunst-Socken",
    "gallery_cap_alpine_path": "Alpenpfad-Socken",
    "gallery_cap_lantern_glow": "Laternenlicht-Stulpen",
    "gallery_cap_chamomile": "Kamillen-Komfortsocken",
    "gallery_cap_glaernisch_vista": "Glärnisch-Panoramaschal",
    "gallery_cap_linth_wrap": "Linthfluss-Stola",
    "gallery_cap_kloental_breeze": "Klöntal-Brise-Throw",
    "gallery_cap_summit_sunrise": "Gipfelsonnenaufgang-Stola",
    "gallery_cap_valley_lights": "Tallichter-Poncho"
  }
};

var panoramaStates = {};

function getPanoramaState(id) {
  if (!panoramaStates[id]) {
    panoramaStates[id] = { angleX: 0, angleY: 0, zoom: 1 };
  }
  return panoramaStates[id];
}

function applyPanoramaTransform(id) {
  var state = getPanoramaState(id);
  var $img = $('.tm-panorama-img[data-panorama="' + id + '"]');
  var transform = 'perspective(1200px) rotateX(' + state.angleX + 'deg) rotateY(' + state.angleY + 'deg) scale(' + state.zoom + ')';
  $img.css('transform', transform);
}

function getTranslation(lang, key) {
  if (translations[lang] && translations[lang][key] !== undefined) {
    return translations[lang][key];
  }
  if (translations['en'] && translations['en'][key] !== undefined) {
    return translations['en'][key];
  }
  return '';
}

function applyTranslations(lang) {
  $('[data-i18n]').each(function() {
    var key = $(this).attr('data-i18n');
    $(this).html(getTranslation(lang, key));
  });

  $('[data-i18n-placeholder]').each(function() {
    var key = $(this).attr('data-i18n-placeholder');
    $(this).attr('placeholder', getTranslation(lang, key));
  });

  $('[data-i18n-value]').each(function() {
    var key = $(this).attr('data-i18n-value');
    $(this).val(getTranslation(lang, key));
  });
}

function setLanguage(lang) {
  currentLang = lang;
  $('html').attr('lang', lang);
  applyTranslations(lang);
  $('.tm-language-link').removeClass('active');
  $('.tm-language-link[data-lang="' + lang + '"]').addClass('active');
  try {
    localStorage.setItem('tm-language', lang);
  } catch (error) {
    // ignore storage errors
  }
  highlightMenu(currentPage);
  closeMenu();
  if(typeof window.tmRefreshExtendedGallery === 'function') {
    window.tmRefreshExtendedGallery();
  }
}

function closeMenu() {
  $(".navbar-collapse").removeClass("show"); 
}

function highlightMenu(no) {
  var menuNo = no;
  if(no === 30 || no === 31) {
    menuNo = 30;
  } else if(no >= 6 && no <= 9) {
    menuNo = 4;
  } else if (no >= 10 && no <= 29) {
    menuNo = 19;
  } else if (no === 2) {
    menuNo = 19;
  }
  $(".navbar .navbar-nav > .nav-item").removeClass('selected');
  $(".navbar .navbar-nav > .nav-item > .nav-link[data-no='" + menuNo + "']").parent().addClass('selected');
}

function setupGallery() {
  gallery = $('.gallery-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}

function openPage(no) {
  currentPage = no;
  if(no == 2) {
    if(gallery == undefined) {
      setupGallery();
    } else {
      $('.gallery-slider').slick('unslick');
      setupGallery();
    }    
  }

  $('.cd-hero-slider li').hide();
  $('.cd-hero-slider li[data-page-no="' + no + '"]')
    .fadeIn();
}

$(window).on('load', function() {
  $('body').addClass('loaded');
  openPage(1);
  try {
    var storedLang = localStorage.getItem('tm-language');
    if(storedLang && translations[storedLang]) {
      currentLang = storedLang;
    }
  } catch (error) {
    currentLang = 'en';
  }
  setLanguage(currentLang);
});

jQuery(function() {
    $('.tm-page-link').on('click', function(e){
      e.preventDefault();
      var pageNo = $(this).data('page-no');
      openPage(pageNo);
      highlightMenu(pageNo);
    });

    $('.gallery-slider').on('click', '.effect-julia', function(e){
      if($(e.target).is('a')) {
        return;
      }
      var pageNo = $(this).attr('data-page-no');
      if(pageNo) {
        openPage(parseInt(pageNo, 10));
        highlightMenu(parseInt(pageNo, 10));
      }
    });

    $('.tm-language-link').on('click', function(){
      var selectedLang = $(this).data('lang');
      if(selectedLang && selectedLang !== currentLang) {
        setLanguage(selectedLang);
      }
    });

    $(".navbar .navbar-nav > .nav-item > a.nav-link").on('click', function(e){
      e.preventDefault();
      var pageNo = $(this).data('no');

      openPage(pageNo);
      highlightMenu(pageNo);
      closeMenu();     
    });

    var blogFilterButtons = $('.tm-blog-filter-btn');
    var blogCards = $('.tm-blog-list .tm-blog-card');

    blogFilterButtons.on('click', function(){
      var filter = $(this).data('filter');
      blogFilterButtons.removeClass('active');
      $(this).addClass('active');

      blogCards.each(function(){
        var categories = ($(this).data('categories') || '').toString().split(/\s+/);
        if(filter === 'all' || categories.indexOf(filter) !== -1) {
          $(this).removeClass('tm-blog-card-hidden');
        } else {
          $(this).addClass('tm-blog-card-hidden');
        }
      });
    });

    var extendedFilterButtons = $('.tm-extended-gallery-filter-btn');
    var extendedItems = $('.tm-extended-gallery-grid .tm-extended-gallery-item');
    var extendedPaginationContainer = $('.tm-extended-gallery-pagination');
    var extendedEmptyNotice = $('.tm-extended-gallery-empty');
    var extendedPageSize = 9;
    var extendedState = {
      filter: 'all',
      page: 1
    };

    function updateExtendedGallery() {
      var filtered = [];
      extendedItems.each(function(){
        var $item = $(this);
        var categories = ($item.data('categories') || '').toString().split(/\s+/);
        if(extendedState.filter === 'all' || categories.indexOf(extendedState.filter) !== -1) {
          filtered.push($item);
        }
      });

      var totalItems = filtered.length;
      var totalPages = totalItems === 0 ? 1 : Math.ceil(totalItems / extendedPageSize);
      if(extendedState.page > totalPages) {
        extendedState.page = totalPages;
      }

      extendedItems.addClass('tm-extended-gallery-item-hidden');

      if(totalItems === 0) {
        extendedEmptyNotice.removeClass('tm-hidden');
      } else {
        extendedEmptyNotice.addClass('tm-hidden');
        var startIndex = (extendedState.page - 1) * extendedPageSize;
        var endIndex = Math.min(startIndex + extendedPageSize, totalItems);
        for(var i = startIndex; i < endIndex; i++) {
          filtered[i].removeClass('tm-extended-gallery-item-hidden');
        }
      }

      extendedPaginationContainer.empty();
      if(totalItems <= extendedPageSize) {
        extendedPaginationContainer.addClass('tm-hidden');
        return;
      }

      extendedPaginationContainer.removeClass('tm-hidden');

      var prevBtn = $('<button/>', {
        type: 'button',
        class: 'tm-extended-gallery-page-btn',
        'data-page': extendedState.page - 1,
        text: getTranslation(currentLang, 'gallery_extended_prev')
      });
      if(extendedState.page === 1) {
        prevBtn.prop('disabled', true);
      }
      extendedPaginationContainer.append(prevBtn);

      for(var pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
        var pageBtn = $('<button/>', {
          type: 'button',
          class: 'tm-extended-gallery-page-btn',
          'data-page': pageNumber,
          text: pageNumber
        });
        if(pageNumber === extendedState.page) {
          pageBtn.addClass('active').prop('disabled', true);
        }
        extendedPaginationContainer.append(pageBtn);
      }

      var nextBtn = $('<button/>', {
        type: 'button',
        class: 'tm-extended-gallery-page-btn',
        'data-page': extendedState.page + 1,
        text: getTranslation(currentLang, 'gallery_extended_next')
      });
      if(extendedState.page === totalPages) {
        nextBtn.prop('disabled', true);
      }
      extendedPaginationContainer.append(nextBtn);
    }

    extendedFilterButtons.on('click', function(){
      var filter = $(this).data('filter');
      extendedState.filter = filter || 'all';
      extendedState.page = 1;
      extendedFilterButtons.removeClass('active');
      $(this).addClass('active');
      updateExtendedGallery();
    });

    extendedPaginationContainer.on('click', '.tm-extended-gallery-page-btn', function(){
      var $btn = $(this);
      if($btn.is('[disabled]')) {
        return;
      }
      var targetPage = parseInt($btn.data('page'), 10);
      if(isNaN(targetPage) || targetPage < 1) {
        return;
      }
      extendedState.page = targetPage;
      updateExtendedGallery();
    });

    updateExtendedGallery();
    window.tmRefreshExtendedGallery = updateExtendedGallery;

    $("html").click(function(e) {
      closeMenu();
    });

    $('.tm-panorama-img').each(function(){
      var id = $(this).attr('data-panorama');
      applyPanoramaTransform(id);
    });
});
