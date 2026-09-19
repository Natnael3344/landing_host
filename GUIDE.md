# Developer & Deployment Guide

This guide covers how the files in this repository fit together, how to
preview them locally, and how to (re)deploy the site. Read `README.md`
first for what this repository is (a pre-built static bundle, not a
Node.js or Flutter source project).

## 1. How the pieces fit together

The site is the output of Flutter's web build target
(`flutter build web`), not a hand-written web app. Request flow when a
browser opens the site:

1. **`index.html`** loads first. It sets PWA meta tags/icons, links
   `manifest.json`, and loads `flutter.js`.
2. **`flutter.js`** is Flutter's standard web bootstrap loader. It detects
   the browser's capabilities, then fetches and initializes the compiled
   app entry point, `main.dart.js`.
3. **`main.dart.js`** is the entire Dart application (UI widgets, layout
   logic, the landing-page content described in `README.md`) compiled to
   JavaScript. It renders through Flutter's canvas-based rendering
   pipeline rather than emitting normal DOM/CSS.
4. **`canvaskit/`** provides the CanvasKit renderer — Skia's graphics
   engine compiled to WebAssembly (`canvaskit.wasm`) with a thin JS
   wrapper (`canvaskit.js`). `main.dart.js` loads this to actually paint
   pixels onto a `<canvas>` element instead of relying on the DOM.
5. **`flutter_service_worker.js`** is registered from `index.html` once
   the app fires its `flutter-first-frame` event. It precaches every file
   listed in its internal `RESOURCES` map (each mapped to a content hash)
   so repeat visits — and offline use — are served from cache.
6. **`manifest.json`** plus the icon set in `icons/` let a mobile browser
   offer "Add to Home Screen" / installable PWA behavior.
7. **`version.json`** simply records the build metadata of the source
   Flutter project (`app_name`, `version`, `build_number`) that produced
   this bundle; it is not consumed for routing or feature logic.

There is no backend, no API calls to app-specific endpoints, and no
client-side router serving multiple pages — this is a single-page,
single-screen landing page.

## 2. Previewing changes locally

Any static file server works, since the app only needs to be fetched over
HTTP(S) (not `file://`) for the service worker and the WASM module to load:

```bash
cd landing_host
npx serve .
# or: python3 -m http.server 8000
```

Then open the printed URL. If you edit any file directly (e.g. swap an
image under `assets/assets/images/`), remember that
`flutter_service_worker.js` hardcodes a content hash per asset — a browser
that already installed the old service worker may keep serving cached,
stale files until the service worker's manifest is regenerated (see
Section 4) or the user does a hard refresh / unregisters the service
worker in DevTools.

## 3. `<base href>` and where the site is served from

`index.html`'s `<base href>` tag controls how Flutter resolves the paths
to `main.dart.js`, `assets/`, `canvaskit/`, etc. This repo's git history
shows the value has been changed several times as it moved between hosts:

- `dde74a3` set it to the Flutter-templated placeholder
  `$FLUTTER_BASE_HREF` (never substituted — this only gets replaced by
  `flutter build web --base-href=...` at build time).
- `ebe71c8` hardcoded it to the absolute GitHub Pages URL:
  `https://natnael3344.github.io/landing_host/`.
- Later commits removed the `<base>` tag entirely, so the current
  `index.html` has no `<base>` element and resolves all asset paths
  relative to wherever `index.html` itself is served from.

**When you redeploy, make sure this matches your actual hosting path:**

- Serving from the **root of a domain** (a custom domain, or a host that
  maps the repo root to `/`): no `<base>` tag is needed — the current
  state works as-is.
- Serving from a **subpath** (e.g. a GitHub Pages *project* site at
  `https://<user>.github.io/landing_host/`): either add
  `<base href="/landing_host/">` (or the appropriate subpath) to
  `index.html`, or rebuild the source project with
  `flutter build web --base-href=/landing_host/` so the tag is generated
  correctly.

## 4. Deploying / hosting

Nothing needs to be compiled to deploy this repo — the committed files
already are the production build. Point any static host at the repository
root:

- **GitHub Pages** (what the git history indicates was used previously):
  in the repo's Settings → Pages, set the source to the `main` branch,
  root folder. The site publishes at
  `https://natnael3344.github.io/landing_host/`.
- **Netlify / Vercel (static site) / Firebase Hosting / S3+CloudFront /
  any static file host:** set the publish directory to the repository
  root and skip the build step entirely (there is no build command to
  run in this repo).

## 5. Updating the actual content

This repository does not contain the Flutter/Dart source for the Adivid
landing page (no `.dart` files, no `pubspec.yaml`). To change any text,
images, or features shown on the page:

1. Make the change in the original Flutter source project (a separate
   project — likely one of this account's other Flutter repositories,
   `landing` or `landing_page` — not part of `landing_host`).
2. Rebuild it: `flutter build web` (add `--base-href=...` per Section 3
   if deploying to a subpath).
3. Copy the entire contents of the generated `build/web/` directory into
   this repo, replacing the existing files.
4. Commit and push — the existing commit history here (`"Add files via
   upload"`) shows this replace-and-commit workflow has been the pattern
   used previously.

## 6. Things a new contributor should know

- There is no linting, no test suite, and no CI configured in this repo —
  it is a pure static-artifact deployment target.
- `main.dart.js` and `canvaskit.wasm` are large, minified/compiled
  binaries; do not hand-edit them. Any real change has to originate in
  the upstream Flutter source project described above.
- `assets/NOTICES` contains third-party license notices pulled in
  automatically by the Flutter engine build — it documents the engine's
  dependencies, not anything specific to Adivid.
- No API keys, secrets, or environment configuration exist anywhere in
  this repo; the entire site is static content with no calls to
  app-specific backend endpoints.
