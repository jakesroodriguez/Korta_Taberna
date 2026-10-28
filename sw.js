const CACHE_NAME = 'korta-taberna-v3';
const CORE_ASSETS = [
    './',
    'index.html',
    'css/styles.css',
    'js/script.js',
    'assets/images/logo.webp',
    'assets/images/hero-poster.webp',
    'assets/images/favicon.webp'
];

// Instalación: Precachear recursos esenciales de inicio
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(CORE_ASSETS);
        }).then(() => self.skipWaiting())
    );
});

// Activación: Limpieza de versiones antiguas de caché
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Intercepción de peticiones:
// - Fuentes e imágenes (.webp, .svg, .png, .jpg): Cache-First (ultra rápido)
// - Estilos, scripts y páginas: Stale-While-Revalidate (inmediato + auto-actualización)
self.addEventListener('fetch', (event) => {
    const request = event.request;
    const url = new URL(request.url);

    // Ignorar peticiones que no sean GET
    if (request.method !== 'GET') return;

    // Ignorar esquemas que no sean http/https (como extensiones de navegador)
    if (!url.protocol.startsWith('http')) return;

    // Estrategia Cache-First para Imágenes y Fuentes
    const isImageOrFont = 
        request.destination === 'image' ||
        request.destination === 'font' ||
        url.hostname.includes('fonts.gstatic.com') ||
        /\.(webp|jpg|jpeg|png|svg|woff2|woff|ttf)$/i.test(url.pathname);

    if (isImageOrFont) {
        event.respondWith(
            caches.match(request).then((cachedResponse) => {
                if (cachedResponse) return cachedResponse;
                return fetch(request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(request, responseClone);
                        });
                    }
                    return networkResponse;
                });
            })
        );
        return;
    }

    // Estrategia Stale-While-Revalidate para el resto (HTML, CSS, JS)
    event.respondWith(
        caches.match(request).then((cachedResponse) => {
            const fetchPromise = fetch(request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(request, responseClone);
                    });
                }
                return networkResponse;
            }).catch(() => {
                // Si la red falla y no hay caché, retornar fallback offline si es HTML
                if (request.headers.get('accept') && request.headers.get('accept').includes('text/html')) {
                    return caches.match('index.html');
                }
            });

            return cachedResponse || fetchPromise;
        })
    );
});
