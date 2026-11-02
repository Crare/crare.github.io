const STATIC_CACHE = "site-static-v1";
const IMAGE_CACHE = "site-images-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) =>
      cache.addAll(["/", "/index.html", "/manifest.json", "/robots.txt"])
    )
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => ![STATIC_CACHE, IMAGE_CACHE].includes(key))
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);
  const isImage = request.destination === "image" || /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(url.pathname);
  const isSameOrigin = url.origin === self.location.origin;

  if (isImage) {
    if (isSameOrigin) {
      event.respondWith(cacheFirstImage(request));
    } else {
      // For external images, use network first to avoid CORS issues
      event.respondWith(networkFirstImage(request));
    }
    return;
  }

  const isSameOriginStatic =
    isSameOrigin &&
    ["script", "style", "font", "document"].includes(request.destination);

  if (isSameOriginStatic) {
    event.respondWith(staleWhileRevalidateStatic(request));
  }
});

async function cacheFirstImage(request) {
  const cache = await caches.open(IMAGE_CACHE);
  const cached = await cache.match(request);

  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response("", { status: 504, statusText: "Image fetch failed" });
  }
}

async function networkFirstImage(request) {
  const cache = await caches.open(IMAGE_CACHE);

  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    // Fall back to cache if network fails
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    return new Response("", { status: 504, statusText: "Network unavailable" });
  }
}

async function staleWhileRevalidateStatic(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request)
    .then((response) => {
      if (response && response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => undefined);

  if (cached) {
    return cached;
  }

  const networkResponse = await fetchPromise;
  if (networkResponse) {
    return networkResponse;
  }

  return new Response("", { status: 504, statusText: "Network unavailable" });
}
