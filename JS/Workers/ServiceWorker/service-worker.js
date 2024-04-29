/*
In this example:

The CACHE_NAME variable defines the name of the cache.
The FILES_TO_CACHE array lists the files to be cached.
During the install event, the service worker caches the specified files.
During the activate event, the service worker cleans up old caches.
The fetch event intercepts requests, checks if the requested resource is in the cache, 
and serves it from the cache if available; otherwise, it fetches it from the network.
*/


// Define the cache name and the files to cache
const CACHE_NAME = 'static-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/styles/main.css',
  '/scripts/main.js',
  '/images/logo.png'
];

// Install the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Pre-caching files');
        return cache.addAll(FILES_TO_CACHE);
      })
  );
});

// Activate the service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - intercept requests and serve from cache if available
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // Not found in cache - fetch from network
        return fetch(event.request);
      })
  );
});
