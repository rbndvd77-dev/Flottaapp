self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {};
  const title = data.title || '🚐 FlottaApp';
  const options = {
    body: data.body || 'Új értesítés',
    icon: 'https://cdn.jsdelivr.net/npm/twemoji@14/2/svg/1f690.svg',
    badge: 'https://cdn.jsdelivr.net/npm/twemoji@14/2/svg/1f690.svg',
    vibrate: [200, 100, 200],
    tag: 'flottaapp-notif',
    renotify: true
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});

self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => clients.claim());
