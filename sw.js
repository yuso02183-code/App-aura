const CACHE_NAME = 'chicken-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './sw.js'
];

// Cài đặt Cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Phục vụ dữ liệu từ Cache khi Offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
                                 
