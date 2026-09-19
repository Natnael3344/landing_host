# landing_host

Static, pre-built web bundle for **Adivid** — the marketing/landing page of a
Library Management System product by Adivid Technologies Pvt Ltd. This
repository contains **no application source code**. It holds the compiled
output of a `flutter build web` run: minified JavaScript, a WebAssembly
renderer, and static assets, ready to be served by any static web host (the
repo's git history shows it was previously deployed to GitHub Pages at
`https://natnael3344.github.io/landing_host/`).

There is no `package.json`, no Node.js/JavaScript source, and no server code
anywhere in this repo. GitHub's language detector reports it as mostly
"JavaScript" only because `flutter build web` compiles the entire Dart
application into a large generated file, `main.dart.js` (~1.5 MB), plus the
CanvasKit renderer's JS/WASM bundle (~6.8 MB `.wasm`) — none of that is
hand-written JavaScript.

## What this actually is

Decompiling the strings embedded in `main.dart.js` confirms the page's real
content:

- The root widget title is `"Adivid"`, and the page footer reads
  `"Privacy Policy | Copyright © 2022 Adivid Technologies Pvt Ltd"`.
- A contact address, `info@adivid.com`, is embedded as a UI string.
- The page markets a **Library Management System** app with role-based
  access for `student`, `admin`, and `librarian` accounts, and describes the
  following product features in its copy:
  - **Easy Login** — email/password authentication for student, admin, or
    librarian roles.
  - **Dashboard Panel** — statistics/analytics overview for the logged-in
    user.
  - **Books Management Panel** — add, view, update, search, and delete
    books, with list export to CSV, Excel, and PDF.
  - **Transaction Panel** — the same CRUD + export workflow for
    (book-lending) transactions.
  - **User Management** — admin controls for user roles, permissions, and
    libraries.
- The page layout (from `AssetManifest.json` and asset filenames) is a
  typical SaaS/app landing page: a hero section with phone mockups
  (`phone.png`, `phone_mockup.png`, `phone_mockup_2.png`), a "trusted by"
  logo strip (Airbnb, FedEx, Google, Microsoft, Walmart, HubSpot,
  BookMyShow — decorative template logos, not confirmed Adivid customers), a
  feature-icon grid (`feature_icons/01.png`–`07.png`), a testimonial quote
  block (`quote_mark.png`), and App Store / Google Play badge images
  (`app_store.png`, `google_play.png` — present as images only; no live
  store URLs were found anywhere in the compiled bundle).
- `version.json` reports build metadata for the source Flutter project:
  `app_name: "adivid"`, `version: "1.0.0"`, `build_number: "1"`.

This repo is almost certainly the exported `build/web/` output of a separate
Flutter/Dart source project (the account also owns `landing` and
`landing_page`, both Flutter projects) that was copied here to be hosted as
a static site. No Dart/Flutter source, `pubspec.yaml`, or build tooling is
present in `landing_host` itself — only the compiled artifacts.

## Features (of this hosting bundle, not the underlying product)

- Fully static, dependency-free deployment: drop the files on any static
  host or CDN, no server runtime required.
- Installable as a Progressive Web App: `manifest.json` plus a full set of
  Android/iOS/favicon icons under `icons/`.
- Offline-capable via `flutter_service_worker.js`, which precaches every
  asset listed in its `RESOURCES` map (hashed per file) for repeat visits.
- Renders through Flutter's CanvasKit engine (Skia compiled to WebAssembly,
  bundled under `canvaskit/`) for consistent, canvas-based rendering across
  browsers instead of relying on DOM/CSS layout.

## Tech stack

- **No `package.json` / no Node.js** — this is not an npm project.
- **Source framework (upstream, not included here):** Flutter (Dart),
  compiled with `flutter build web`.
- **Runtime engine:** CanvasKit — Skia's 2D renderer compiled to
  WebAssembly (`canvaskit/canvaskit.wasm`, `canvaskit/canvaskit.js`).
- **PWA plumbing:** `manifest.json`, `flutter_service_worker.js`,
  `flutter.js` (the standard Flutter web bootstrap loader).
- **Fonts:** `MaterialIcons-Regular.otf` and the `cupertino_icons` package
  font, both bundled under `assets/`.

## Project structure

```
landing_host/
├── index.html                  # Entry point; loads flutter.js -> main.dart.js
├── main.dart.js                # Compiled Flutter app (all Dart -> JS)
├── flutter.js                  # Flutter web bootstrap/loader script
├── flutter_service_worker.js   # PWA service worker (asset precache)
├── manifest.json               # Web app manifest (PWA metadata)
├── version.json                # Build metadata (app_name, version, build_number)
├── favicon.png
├── icons/                      # Android/iOS/favicon icon set
├── canvaskit/                  # CanvasKit (Skia-on-WASM) renderer bundle
└── assets/
    ├── AssetManifest.json      # Manifest of bundled Flutter assets
    ├── FontManifest.json
    ├── NOTICES                 # Third-party license notices (Flutter engine deps)
    ├── fonts/                  # MaterialIcons-Regular.otf
    ├── packages/cupertino_icons/  # Cupertino icon font
    └── assets/images/          # Landing page images (logos, mockups, icons, etc.)
```

## Setup / running locally

Because this repo contains only a pre-built static bundle (no
`package.json`, no build scripts), there is nothing to `npm install` or
`npm run` — "running" it just means serving the existing files over HTTP.

1. Clone the repo:
   ```bash
   git clone https://github.com/Natnael3344/landing_host.git
   cd landing_host
   ```
2. Serve the folder with any static file server (opening `index.html`
   directly via `file://` will not work correctly, since the service worker
   and the CanvasKit WASM module both require an HTTP origin). For example:
   ```bash
   npx serve .
   # or
   python3 -m http.server 8000
   ```
3. Open the printed local URL (e.g. `http://localhost:8000`) in a browser.

To change any content (copy, images, features), you need the original
Flutter/Dart source project (not part of this repo), then rebuild it with
`flutter build web` and copy the generated `build/web/` output into this
repo, replacing these files.
