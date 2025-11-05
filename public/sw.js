/**
 * Service Worker for caching and offline support
 * Implements Cache First and Network First strategies
 */

const CACHE_VERSION = 'v1';
const CACHE_NAME = `expertisor-cache-${CACHE_VERSION}`;

// Assets to cache immediately on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
];

// Cache strategies
const CACHE_STRATEGIES = {
  // Cache First: For static assets (images, fonts, CSS, JS)
  CACHE_FIRST: 'cache-first',
  // Network First: For HTML pages and API calls
  NETWORK_FIRST: 'network-first',
  // Stale While Revalidate: For frequently updated content
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate',
};

/**
 * Install event - Cache static assets
 */
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        // Force activation of new service worker
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Cache installation failed:', error);
      })
  );
});

/**
 * Activate event - Clean up old caches
 */
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName.startsWith('expertisor-cache-') && 
                     cacheName !== CACHE_NAME;
            })
            .map((cacheName) => {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        // Take control of all pages immediately
        return self.clients.claim();
      })
  );
});

/**
 * Determine cache strategy based on request
 */
function getCacheStrategy(request) {
  const url = new URL(request.url);

  // Static assets - Cache First
  if (
    url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico|woff|woff2|ttf|eot)$/i) ||
    url.pathname.match(/\.(js|css)$/i) ||
    url.pathname.startsWith('/assets/')
  ) {
    return CACHE_STRATEGIES.CACHE_FIRST;
  }

  // HTML pages - Network First
  if (url.pathname.endsWith('.html') || url.pathname === '/') {
    return CACHE_STRATEGIES.NETWORK_FIRST;
  }

  // API calls - Network First
  if (url.pathname.startsWith('/api/')) {
    return CACHE_STRATEGIES.NETWORK_FIRST;
  }

  // Default - Stale While Revalidate
  return CACHE_STRATEGIES.STALE_WHILE_REVALIDATE;
}

/**
 * Cache First strategy
 */
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('[SW] Cache First fetch failed:', error);
    
    // Return offline fallback if available
    if (request.destination === 'document') {
      const offlinePage = await caches.match('/offline.html');
      if (offlinePage) {
        return offlinePage;
      }
    }
    
    throw error;
  }
}

/**
 * Network First strategy
 */
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url);
    
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline fallback for HTML pages
    if (request.destination === 'document') {
      const offlinePage = await caches.match('/offline.html');
      if (offlinePage) {
        return offlinePage;
      }
    }
    
    throw error;
  }
}

/**
 * Stale While Revalidate strategy
 */
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  // Fetch from network in background
  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(() => {
      // Network failed, ignore
    });
  
  // Return cached version immediately if available
  return cachedResponse || fetchPromise;
}

/**
 * Fetch event - Handle requests with appropriate strategy
 */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== self.location.origin) {
    return;
  }

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  const strategy = getCacheStrategy(request);

  event.respondWith(
    (async () => {
      switch (strategy) {
        case CACHE_STRATEGIES.CACHE_FIRST:
          return cacheFirst(request);
        case CACHE_STRATEGIES.NETWORK_FIRST:
          return networkFirst(request);
        case CACHE_STRATEGIES.STALE_WHILE_REVALIDATE:
          return staleWhileRevalidate(request);
        default:
          return fetch(request);
      }
    })()
  );
});

/**
 * Message event - Handle messages from clients
 */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(event.data.urls);
      })
    );
  }
});

