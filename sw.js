const cacheName = 'musica-app-v1';
const assetsToCache = [
  './',
  './index.html',
  './site.css',      // seu CSS
  './index.js',      // seu JS
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Cacheando arquivos...');
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
