self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.setConfig({
  debug: true
});

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// Caching Fonts

workbox.routing.registerRoute(
  new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
  workbox.strategies.cacheFirst({
    cacheName: "googleapis",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ],
    method: "GET",
    cacheableResponse: { statuses: [0, 200] }
  })
);

// workbox.routing.registerRoute(
//     new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
//     new CacheFirst({
//         cacheName: "googleapis",
//         plugins: [
//             new ExpirationPlugin({
//                 maxEntries: 30
//             })
//         ],
//         method: 'GET',
//         cacheableResponse: {statuses: [0, 200]}
//     })
// )

// Push Notification
let click_open_url;
self.addEventListener("push", event => {
  let push_message = event.data.text();
  click_open_url = "https://www.google.com";
  const options = {
    body: push_message,
    icon: "./img/logo.82b9c7a5.png",
    image: "./img/Simple.jpeg",
    vibrate: [200, 100, 200, 100, 200, 100, 200, 100],
    tag: "vibration-sample"
  };
  event.waitUntil(
    self.registration.showNotification("my-notification", options)
  );
});

self.addEventListener("notificationclick", event => {
  const clickedNotification = event.notification;
  clickedNotification.close();
  if (click_open_url) {
    const promiseChain = clients.openWindow(click_open_url);
    event.waitUntil(promiseChain);
  }
});
