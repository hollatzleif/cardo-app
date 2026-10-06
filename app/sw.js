/* Cardo web app service worker – generated at build time. */
const VERSION = "1.2.0-34a6f4e620";
const CACHE = 'cardo-app-' + VERSION;
const PRECACHE = ["./","assets/KaTeX_AMS-Regular-BQhdFMY1.woff2","assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2","assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2","assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2","assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2","assets/KaTeX_Main-Italic-NWA7e6Wa.woff2","assets/KaTeX_Main-Bold-Cx986IdX.woff2","assets/KaTeX_Main-Regular-B22Nviop.woff2","assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2","assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2","assets/KaTeX_Math-Italic-t53AETM-.woff2","assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2","assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2","assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2","assets/KaTeX_Script-Regular-D3wIWfF6.woff2","assets/KaTeX_Size2-Regular-Dy4dx90m.woff2","assets/KaTeX_Size1-Regular-mCD8mA8B.woff2","assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2","assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2","assets/KaTeX_AMS-Regular-DMm9YOAa.woff","assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff","assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff","assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff","assets/KaTeX_Main-BoldItalic-SpSLRI95.woff","assets/KaTeX_Main-Italic-BMLOBm91.woff","assets/KaTeX_Main-Bold-Jm3AIy58.woff","assets/KaTeX_Main-Regular-Dr94JaBh.woff","assets/KaTeX_Fraktur-Bold-BsDP51OF.woff","assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff","assets/KaTeX_Math-Italic-DA0__PXp.woff","assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff","assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff","assets/KaTeX_SansSerif-Italic-DN2j7dab.woff","assets/KaTeX_Script-Regular-D5yQViql.woff","assets/KaTeX_Size2-Regular-oD1tc_U0.woff","assets/KaTeX_Size1-Regular-C195tn64.woff","assets/KaTeX_Size3-Regular-CTq5MqoE.woff","assets/KaTeX_Size4-Regular-BF-4gkZK.woff","assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff","assets/KaTeX_AMS-Regular-DRggAlZN.ttf","assets/KaTeX_Caligraphic-Bold-ATXxdsX0.ttf","assets/KaTeX_Caligraphic-Regular-wX97UBjC.ttf","assets/KaTeX_Fraktur-Regular-CB_wures.ttf","assets/KaTeX_Main-BoldItalic-DzxPMmG6.ttf","assets/KaTeX_Main-Italic-3WenGoN9.ttf","assets/KaTeX_Main-Bold-waoOVXN0.ttf","assets/KaTeX_Main-Regular-ypZvNtVU.ttf","assets/KaTeX_Fraktur-Bold-BdnERNNW.ttf","assets/KaTeX_Math-BoldItalic-B3XSjfu4.ttf","assets/KaTeX_Math-Italic-flOr_0UB.ttf","assets/KaTeX_SansSerif-Bold-CFMepnvq.ttf","assets/KaTeX_SansSerif-Regular-BNo7hRIc.ttf","assets/KaTeX_SansSerif-Italic-YYjJ1zSn.ttf","assets/KaTeX_Script-Regular-C5JkGWo-.ttf","assets/KaTeX_Size2-Regular-B7gKUWhC.ttf","assets/KaTeX_Size3-Regular-DgpXs0kz.ttf","assets/KaTeX_Size1-Regular-Dbsnue_I.ttf","assets/KaTeX_Size4-Regular-DWFBv043.ttf","assets/KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf","assets/white-noise-_FQAEZKT.wav","assets/brown-noise-CEac6x9s.wav","assets/stream-3X7O89Kj.wav","assets/rain-DQVDFTxm.wav","assets/main-B6imwO-E.css","assets/idbFiles-BXxbEuav.js","assets/JoinFlow-MdRr3DRL.js","assets/workspaceCommands-BMUMcy7W.js","assets/syncCommands-CP7bccDt.js","assets/pwa-CZpfPHl0.js","assets/index-DXSGvq3D.js","assets/index-BgxlTNlC.js","assets/index-xjHnoZSY.js","assets/oauth-BuEuX-TJ.js","assets/layoutCommands-BRFiQnNR.js","assets/oauthParse-CLSEi9yp.js","assets/index-MpZt7nt4.js","assets/main-Bq9obSVs.js","manifest.webmanifest","icons/icon-180.png","icons/icon-512.png","icons/icon-1024.png","manifest.webmanifest","icons/icon-180.png","icons/icon-512.png","icons/icon-1024.png"];
// The worker's own network access (the app-side fetchWithTimeout rule does
// not apply here: the browser bounds service-worker fetches itself).
const network = self.fetch.bind(self);

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k.startsWith('cardo-app-') && k !== CACHE).map((k) => caches.delete(k))),
    ).then(() => self.clients.claim()),
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
  if (event.data && event.data.type === 'GET_VERSION' && event.ports[0]) event.ports[0].postMessage(VERSION);
});

function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('timeout')), ms);
    promise.then((v) => { clearTimeout(timer); resolve(v); }, (e) => { clearTimeout(timer); reject(e); });
  });
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  const scope = new URL(self.registration.scope);
  if (!url.pathname.startsWith(scope.pathname)) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      withTimeout(network(request), 3000)
        .then((response) => {
          if (response.ok && url.pathname === scope.pathname) {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(scope.pathname, copy));
          }
          return response;
        })
        .catch(() =>
          caches.match(request).then((hit) => hit || caches.match(scope.pathname)).then(
            (hit) => hit || new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } }),
          ),
        ),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(
      (hit) =>
        hit ||
        network(request).then((response) => {
          if (response.ok && url.pathname.includes('/assets/')) {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        }),
    ),
  );
});
