/*
  Denise Knit ArtWorks — Service Worker (P3 enriched)
  Strategy:
    · Navigation preload for HTML (parallel SW startup + network fetch)
    · Network-first for HTML with cache fallback (offline-friendly)
    · Stale-while-revalidate for images (instant paint, fresh on background)
    · Cache-first for static assets (CSS/JS/fonts)
    · Bounded runtime image cache (LRU-ish via FIFO trim)
*/
const VERSION = 'dka-v64';
const STATIC_CACHE = `${VERSION}-static`;
const PAGES_CACHE = `${VERSION}-pages`;
const IMAGES_CACHE = `${VERSION}-images`;
const IMAGES_CACHE_MAX = 80; // ~80 images cached in runtime — covers a healthy session

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/bootstrap.min.css',
  '/css/slick.css',
  '/css/deniseknitnartworks-style.css',
  '/css/deniseknitnartworks-enhanced.css',
  '/js/jquery-3.5.1.min.js',
  '/js/bootstrap.min.js',
  '/js/slick.js',
  '/js/deniseknitnartworks-script.js',
  '/js/deniseknitnartworks-enhanced.js',
  '/img/favicon.svg',
  '/img/logo-deniseknitnartworks-bold.svg',
  '/manifest.json',
  // Hero WebP (preloaded in <head>) — instant on repeat visits
  '/img/webp/denise-knit-artworks-amber-honey-lookbook-portrait-series-04-06-480.webp',
  '/img/webp/denise-knit-artworks-amber-honey-lookbook-portrait-series-04-06-960.webp',
  '/img/webp/denise-knit-artworks-amber-honey-lookbook-portrait-series-04-06-1440.webp'
];

// ---------- Install: precache the shell ----------
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(STATIC_ASSETS).catch(() => null))
      .then(() => self.skipWaiting())
  );
});

// ---------- Activate: cleanup old caches, enable nav preload ----------
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Enable Navigation Preload — HTML fetch starts in parallel with SW startup
    if (self.registration.navigationPreload) {
      try { await self.registration.navigationPreload.enable(); } catch (_) {}
    }
    const keys = await caches.keys();
    await Promise.all(
      keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k))
    );
    await self.clients.claim();
  })());
});

// ---------- Helpers ----------
async function trimCache(cacheName, maxItems) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= maxItems) return;
  // FIFO trim: delete the oldest entries
  const excess = keys.length - maxItems;
  for (let i = 0; i < excess; i++) await cache.delete(keys[i]);
}

// ---------- Fetch handler ----------
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Skip cross-origin (Google Fonts, Maps iframe, etc.)
  if (url.origin !== self.location.origin) return;

  // HTML pages: network-first using nav preload + cache fallback
  if (req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html')) {
    event.respondWith((async () => {
      try {
        // 1. Try the navigation preload response (already in flight)
        const preload = await event.preloadResponse;
        if (preload) {
          const cache = await caches.open(PAGES_CACHE);
          cache.put(req, preload.clone()).catch(() => {});
          return preload;
        }
        // 2. Otherwise fetch from network
        const fresh = await fetch(req);
        const cache = await caches.open(PAGES_CACHE);
        cache.put(req, fresh.clone()).catch(() => {});
        return fresh;
      } catch (_) {
        // 3. Offline → serve from cache (or app shell as last resort)
        const cached = await caches.match(req);
        return cached || caches.match('/index.html');
      }
    })());
    return;
  }

  // Images: stale-while-revalidate with bounded cache
  if (req.destination === 'image') {
    event.respondWith((async () => {
      const cache = await caches.open(IMAGES_CACHE);
      const cached = await cache.match(req);
      const networkPromise = fetch(req).then((res) => {
        if (res && res.status === 200) {
          cache.put(req, res.clone());
          // Trim asynchronously without blocking the response
          trimCache(IMAGES_CACHE, IMAGES_CACHE_MAX);
        }
        return res;
      }).catch(() => cached);
      // Return cached immediately if available; otherwise wait on network
      return cached || networkPromise;
    })());
    return;
  }

  // Static assets (CSS/JS/fonts/etc.): cache-first
  event.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    try {
      const fresh = await fetch(req);
      if (fresh && fresh.status === 200) {
        const cache = await caches.open(STATIC_CACHE);
        cache.put(req, fresh.clone()).catch(() => {});
      }
      return fresh;
    } catch (_) {
      return cached;
    }
  })());
});

// ---------- Message channel for force-update from page ----------
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
