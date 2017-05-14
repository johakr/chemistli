const CACHE_VERSION = 2;
const CACHE_NAME = 'chemistli';
const urlsToCache = ['/', '/index.html', '/bundle.js'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(`${CACHE_NAME}${CACHE_VERSION}`)
      .then(cache => cache.addAll(urlsToCache)),
  );
});

self.addEventListener('activate', event => {
  const deleteOldCaches = () => {
    return caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => !key.includes(CACHE_VERSION))
          .map(key => caches.delete(key)),
      );
    });
  };

  return event.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', ev => {
  ev.respondWith(
    caches.match(ev.request).then(response => {
      if (response) return response;

      return fetch(ev.request)
        .then(res => {
          const resCopy = res.clone();

          if (ev.request.url.includes('/c/')) {
            caches.open(`${CACHE_NAME}${CACHE_VERSION}`).then(cache => {
              cache.put(ev.request, resCopy);
            });
          }

          return res;
        })
        .catch(err => {
          if (ev.request.url.includes('/q/')) {
            return caches.match('/');
          }
        });
    }),
  );
});
