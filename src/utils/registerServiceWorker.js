/**
 * Service Worker Registration
 * Registers the service worker for offline support and caching
 */

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    // Service worker is supported
    const publicUrl = new URL(import.meta.env.BASE_URL || '/', window.location.href);
    
    // Don't register service worker on localhost in development
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${import.meta.env.BASE_URL || '/'}sw.js`;

      if (isLocalhost) {
        // Check if service worker still exists
        checkValidServiceWorker(swUrl);
      } else {
        // Register service worker for production
        registerSW(swUrl);
      }
    });
  }
}

function registerSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      console.log('[SW] Service Worker registered:', registration);

      // Check for updates
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        
        if (installingWorker == null) {
          return;
        }

        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // New service worker available
              console.log('[SW] New content available; please refresh.');
              
              // Optional: Show update notification to user
              // You can implement a UI notification here
            } else {
              // Content cached for offline use
              console.log('[SW] Content cached for offline use.');
            }
          }
        };
      };

      // Listen for messages from service worker
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'SKIP_WAITING') {
          window.location.reload();
        }
      });
    })
    .catch((error) => {
      console.error('[SW] Service Worker registration failed:', error);
    });
}

function checkValidServiceWorker(swUrl) {
  // Check if the service worker can be found
  fetch(swUrl)
    .then((response) => {
      const contentType = response.headers.get('content-type');
      
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found or invalid content type
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found, proceed with registration
        registerSW(swUrl);
      }
    })
    .catch(() => {
      console.log('[SW] No internet connection found. App is running in offline mode.');
    });
}

export function unregisterServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}

