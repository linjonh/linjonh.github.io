self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('app-store-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/main.css',
        '/images/blue_bokeh.mp4',
        '/images/*'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});