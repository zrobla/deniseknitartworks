/*
  Denise Knit ArtWorks — Service Worker
  Strategy: cache-first for static assets, network-first for HTML.
  Offline fallback: serves cached index.html.
*/
const VERSION = 'dka-v27';
const STATIC_CACHE = `${VERSION}-static`;
const RUNTIME_CACHE = `${VERSION}-runtime`;

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/bootstrap.min.css',
  '/css/slick.css',
  '/css/deniseknitartworks-style.css',
  '/css/deniseknitartworks-enhanced.css',
  '/js/jquery-3.5.1.min.js',
  '/js/bootstrap.min.js',
  '/js/slick.js',
  '/js/deniseknitartworks-script.js',
  '/js/deniseknitartworks-enhanced.js',
  '/img/favicon.svg',
  '/img/logo-deniseknitartworks-bold.svg',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS).catch(() => null))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Skip cross-origin (Google Fonts, Maps iframe etc.)
  if (url.origin !== self.location.origin) return;

  // HTML pages: network-first, fallback to cache
  if (req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('/index.html')))
    );
    return;
  }

  // Images: cache-first, runtime cache
  if (req.destination === 'image') {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(req, copy));
          }
          return res;
        }).catch(() => cached);
      })
    );
    return;
  }

  // Static assets: cache-first
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((res) => {
      if (res && res.status === 200) {
        const copy = res.clone();
        caches.open(RUNTIME_CACHE).then((cache) => cache.put(req, copy));
      }
      return res;
    }))
  );
});
