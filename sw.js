// Lets the iPhone version open with no internet connection. make-phone-site.ps1 copies this file into the site and fills in
// 20261026-014657, so each new upload is seen as a new version.
// It only keeps a copy of the page, icons and fonts; your journal stays in Safari's storage and is never touched here.
const CACHE = 'tradevault-20261026-014657';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png'];
const FONTS = /^https:\/\/fonts\.(googleapis|gstatic)\.com\//;
// with a weak signal, wait this long for GitHub before opening the saved copy instead
const WAIT_MS = 4000;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

// a new version clears out the older saved copies
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('tradevault-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (req.mode === 'navigate') e.respondWith(page(req));
  else if (FONTS.test(req.url)) e.respondWith(savedFirst(req));
  else if (new URL(req.url).origin === location.origin) e.respondWith(savedFirst(req));
});

// the page: the newest from GitHub when there is a connection, so updates show up; the saved copy when there isn't
async function page(req) {
  const cache = await caches.open(CACHE);
  try {
    const res = await Promise.race([
      fetch(req),
      new Promise((_, no) => setTimeout(() => no(new Error('slow')), WAIT_MS))
    ]);
    if (res.ok && /\/(index\.html)?$/.test(new URL(req.url).pathname)) cache.put('./', res.clone());
    return res;
  } catch (err) {
    return (await cache.match('./')) || (await cache.match('index.html')) || Response.error();
  }
}

// icons and fonts rarely change: use the saved copy, and save anything new the first time it loads
async function savedFirst(req) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req, { ignoreSearch: !FONTS.test(req.url) });
  if (hit) return hit;
  try {
    const res = await fetch(req);
    if (res.ok || res.type === 'opaque') cache.put(req, res.clone());
    return res;
  } catch (err) {
    return Response.error();
  }
}
