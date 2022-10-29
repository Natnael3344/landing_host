'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "405f8d03337a86c4072526e0e2215945",
"assets/assets/images/airbnb_logo.png": "9817e31a10bda862091f2c2f42963103",
"assets/assets/images/app_store.png": "d5e8445e5167025d7b3826aa9f7b07d2",
"assets/assets/images/bg.png": "0264de1bd129967fbace17edc9604107",
"assets/assets/images/bookmyshow_logo.png": "28a6ced46b99d56280c71cea58c1e6a4",
"assets/assets/images/cover_img.png": "35d077f20fda4729190f43eb56dc42a5",
"assets/assets/images/desktop.png": "df650de8930b7a45c916c09969a23110",
"assets/assets/images/feature_icons/01.png": "6c6311c2d27530d3a69e68667c227444",
"assets/assets/images/feature_icons/02.png": "20968e4b13c5aa42ab194c5d98dbec3d",
"assets/assets/images/feature_icons/03.png": "be623f25ee3740ff6be04c2ee1d9f321",
"assets/assets/images/feature_icons/04.png": "bd7c1c600daae5ad1e58a8d5a9b1764a",
"assets/assets/images/feature_icons/05.png": "ecffeb698c512f4506dbf4c9b106e5db",
"assets/assets/images/feature_icons/06.png": "4aec800e1e736dc2b2f2cd8ea052b1ae",
"assets/assets/images/feature_icons/07.png": "f816798404449cf027a3b365ced3643b",
"assets/assets/images/fedex_logo.png": "bdf2d1c2a1be0a7436a09df6135bf12b",
"assets/assets/images/google_logo.png": "df071bec17de3d0929681ef7fd0357ca",
"assets/assets/images/google_play.png": "b825d7db06064b64109c278edfb2ab12",
"assets/assets/images/hubspot_logo.png": "4a4e85f1e682407980bdb9c6db0b5fda",
"assets/assets/images/logo.png": "16b9dea8e29f62f337fea6c7a8441564",
"assets/assets/images/logo2.png": "f8f6d902f1e13e05dd387d822684bea4",
"assets/assets/images/microsoft_logo.png": "952a51d611cac8582b6f8c35c68cc311",
"assets/assets/images/phone.png": "5f8504b60bba93f68c71c4dde513e970",
"assets/assets/images/phone_mockup.png": "fec52807c79e4ea6e6095d8731e51210",
"assets/assets/images/phone_mockup_2.png": "1a548811331568b2b1a99335c0fcf429",
"assets/assets/images/quote_mark.png": "77222515b645fc41b3244c98f43445ff",
"assets/assets/images/right_arrow.png": "8c17c1b450a90184a58a9d4f9ada73b4",
"assets/assets/images/walmart_logo.png": "97a5799e698092f68892f110e8132e29",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "603590a16a60905551246890d2ce7bfb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "c9a12794898ae498d2b2ae6414479508",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/android-icon-144x144.png": "390f910fc3863b7e5a56cf43fefcec5b",
"icons/android-icon-192x192.png": "a2d5fd1104a7175d567cf6531bcb26e3",
"icons/android-icon-36x36.png": "684c73e40b58074ac509f77cc1db4434",
"icons/android-icon-48x48.png": "274775fc31785fbd295368b01d1db3fe",
"icons/android-icon-72x72.png": "7ff8a190a18d4781d1eb5ecd6db4cd84",
"icons/android-icon-96x96.png": "4899138074eba6d7e33e5e76047c8edc",
"icons/apple-icon-114x114.png": "3aafe99adbfb339c61f97bd8731cbde3",
"icons/apple-icon-120x120.png": "1fdef25a9100e901c75831f1786a22fd",
"icons/apple-icon-144x144.png": "390f910fc3863b7e5a56cf43fefcec5b",
"icons/apple-icon-152x152.png": "3b03b93cce18d029d94e39843a9b0eea",
"icons/apple-icon-180x180.png": "63e4832152d092328ccd8d6e510e0d2a",
"icons/apple-icon-57x57.png": "02d490cf904bdb92904847a0c1577051",
"icons/apple-icon-60x60.png": "8c72467e5725c0811b4373bd8a696e62",
"icons/apple-icon-72x72.png": "7ff8a190a18d4781d1eb5ecd6db4cd84",
"icons/apple-icon-76x76.png": "12f0789917c30b122e5537e87075c8f4",
"icons/apple-icon-precomposed.png": "01748d463c01d072f20937426b8180e3",
"icons/apple-icon.png": "01748d463c01d072f20937426b8180e3",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "d9a28bcd388488140127678b687fcda0",
"icons/favicon-32x32.png": "36f8f24a762c8b42ca3ef272d54b7f53",
"icons/favicon-96x96.png": "4899138074eba6d7e33e5e76047c8edc",
"icons/favicon.ico": "42b3064740925aca06cbe83e8e20a0be",
"icons/ms-icon-144x144.png": "390f910fc3863b7e5a56cf43fefcec5b",
"icons/ms-icon-150x150.png": "38a600b45c8b9ace1325c67420deea71",
"icons/ms-icon-310x310.png": "058b9944ebf1402f903b99e714842dab",
"icons/ms-icon-70x70.png": "3fabde875745bce728df446aa706f60e",
"index.html": "b29f920317a85ad54d00d173a8ed75a2",
"/": "b29f920317a85ad54d00d173a8ed75a2",
"main.dart.js": "d13fd1eb5dd23cb5a09c3f29996740ec",
"manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"version.json": "3b2bf1747b07c3dea352f6ff52d888ea"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
