# Salon Website Prototype — Phase 1 + Phase 2 (Templates 1, 2, 3, 4, 5, 6, 7, 8 & 9)

Reusable salon website prototype: **shared data structure + LocalStorage + data manager + admin panel + CRUD + demo data + settings**, plus customer-facing websites — **Template 1: "Modern Luxury Editorial Beauty"** (default), **Template 2: "Modern Architectural Salon"**, **Template 3: "Contemporary Botanical Beauty Studio"**, **Template 4: "Urban Pop — Creative Hair & Beauty Studio"**, **Template 5: "Contemporary Digital Beauty Lounge"**, **Template 6: "Quiet Luxury — Private Beauty Atelier"**, **Template 7: "Avant-Garde Fashion Campaign"**, **Template 8: "Sunlit Coastal Beauty Studio"**, and **Template 9: "Modern Monochrome Barber Studio"**.

Static project only. No framework, no backend, no database, no build step.

## Tech

- HTML5
- CSS3
- Vanilla JavaScript (classic scripts — no modules, no build step)
- Browser LocalStorage (temporary database)

## Fonts & images (fully offline)

- **Fonts are self-hosted** in `assets/fonts/` (loaded by `assets/fonts/fonts.css`). No Google Fonts CDN is used, so the display serif (Cormorant Garamond), body fonts, and the Template 3 (Fraunces + Manrope), Template 4 (Space Grotesk + DM Sans), Template 5 (Syne + Onest), Template 6 (Playfair Display + Jost), Template 7 (Bodoni Moda + Instrument Sans), Template 8 (Marcellus + Mulish), and Template 9 (Sora + Public Sans) pairings render correctly from `file://` even offline.
- **Demo images are bundled** in `assets/images/` and referenced by `default-data.js` via relative paths — no remote image hosts.
- Existing LocalStorage data is migrated automatically (`storage.js: migrate()`, guarded by `dataVersion`) so any seeded gallery/team record still pointing at an empty or remote URL is switched to the bundled local image without wiping user edits.
- Image loading falls back to an inline monogram SVG (`bindImageFallback()`) if a source can't be loaded.

## Run locally

Just **double-click `index.html`** (or `admin.html`) — it works straight from `file://`, no server required. The scripts use the classic `<script src>` mechanism and each template embeds its markup in its own JS, so nothing depends on `fetch()` or ES modules (both of which browsers block on `file://`).

Serving over HTTP still works too if you prefer:

```bash
npx serve .
# or
python -m http.server 8000
```

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Thin shell: reads `settings.selectedTemplate` from LocalStorage and loads only that template's HTML + CSS + JS |
| `admin.html` | Admin panel: dashboard, all CRUD sections, settings (incl. template switcher) |

## Folder structure

```text
salon-prototype/
├── index.html                # thin shell: assets/fonts/fonts.css + #template-root + classic core scripts + js/template.js loader
├── admin.html
├── assets/
│   ├── fonts/
│   │   ├── fonts.css         # self-hosted @font-face (weight ranges)
│   │   └── *.woff2           # Cormorant Garamond (400/italic), Inter, Archivo, IBM Plex Mono (400/500), Fraunces, Manrope, Space Grotesk, DM Sans, Syne, Onest, Playfair Display, Jost, Bodoni Moda (400–900/italic), Instrument Sans, Marcellus (400), Mulish (300 variable / italic), Sora (400 variable), Public Sans (400 variable)
│   └── images/
│       ├── gallery-1..6.jpg  # bundled demo gallery photos
│       └── team-1..5.jpg     # bundled demo team portraits
├── html/
│   └── templates/
│       ├── template-1/       # Template 1: markup (embedded in JS) + CSS + renderer
│       │   ├── template-1.css
│       │   └── template-1.js
│       ├── template-2/       # Template 2: markup (embedded in JS) + CSS + renderer
│       │   ├── template-2.css
│       │   └── template-2.js
│       ├── template-3/       # Template 3: markup (embedded in JS) + CSS + renderer
│       │   ├── template-3.css
│       │   └── template-3.js
│       ├── template-4/       # Template 4: markup (embedded in JS) + CSS + renderer
│       │   ├── template-4.css
│       │   └── template-4.js
│       ├── template-5/       # Template 5: markup (embedded in JS) + CSS + renderer
│       │   ├── template-5.css
│       │   └── template-5.js
│       ├── template-6/       # Template 6: markup (embedded in JS) + CSS + renderer
│       │   ├── template-6.css
│       │   └── template-6.js
│       ├── template-7/       # Template 7: markup (embedded in JS) + CSS + renderer
│       │   ├── template-7.css
│       │   └── template-7.js
│       ├── template-8/       # Template 8: markup (embedded in JS) + CSS + renderer
│       │   ├── template-8.css
│       │   └── template-8.js
│       ├── template-9/       # Template 9: markup (embedded in JS) + CSS + renderer
│       │   ├── template-9.css
│       │   └── template-9.js
│       └── template-10/      # stub template (same 2-file layout)
├── css/
│   ├── style.css             # shared components (buttons, forms, modals, badges)
│   └── admin.css             # admin layout
├── js/
│   ├── template.js           # classic loader: inject template CSS + JS → set innerHTML → render(data)
│   ├── data/
│   │   ├── default-data.js   # demo salon (Luxe Beauty Studio), global DEFAULT_DATA
│   │   └── storage.js        # data manager (single LocalStorage namespace), window.storage
│   ├── admin/
│   │   ├── admin.js          # shell: navigation, sections, brand (loaded last)
│   │   ├── dashboard.js
│   │   ├── business.js
│   │   ├── contact.js
│   │   ├── opening-hours.js
│   │   ├── services.js
│   │   ├── packages.js
│   │   ├── team.js
│   │   ├── gallery.js
│   │   ├── testimonials.js
│   │   ├── appointments.js
│   │   └── settings.js       # settings + social links
│   └── utils/
│       └── helpers.js        # global helper functions
└── README.md
```

Each template folder is self-contained: its own `template-N.css` and `template-N.js`. The template's markup lives **inside `template-N.js` as a `TEMPLATE_HTML` string**, so it loads from `file://` without `fetch()`. The JS wraps everything in an IIFE and registers it on `window.SalonTemplates['template-N'] = { html, render }`.

## Templates

### Template 1 (default): Modern Luxury Editorial Beauty

- Premium editorial design — hero, trust strip, about, editorial service menu, featured service, packages, team, gallery with lightbox, testimonials, booking form, visit/hours, footer.
- Warm ivory palette, Cormorant Garamond display serif + Inter, fade-up reveal animations.

### Template 2: Modern Architectural Salon

- Architectural / minimal / bold urban design — full-viewport hero with image media + metadata bar, typographic brand statement, services grouped by category (Hair / Nails / Skin / Spa), signature service feature, Studio Philosophy, portfolio-style work grid with lightbox, structured numbered team rows with hover image reveal, compact testimonials, **package comparison table**, multi-step-styled booking (01 Your Details → 04 Message), architectural hours table, minimal contact block, large typographic footer CTA.
- Warm white / concrete / charcoal palette, Archivo + IBM Plex Mono, line-wipe reveal animations (clip-path, distinct from T1).
- CSS scoped: all T2 rules live under `#t2-shell` / `body[data-template="template-2"]`, and only T2's CSS is loaded when T2 is selected.

### Template 3: Contemporary Botanical Beauty Studio

- Organic, nature-infused design language distinct from T1/T2 — arch-shaped hero photograph with a circular inset and a live "open today" hours chip, editorial studio intro with offset image and bloom badge, soft rounded service cards (category chips, duration, price, book shortcut), featured top-tier treatment panel, petal-topped package cards, arch-framed team portraits, varied-proportion masonry gallery with lightbox, warm testimonial cards, a forest-green reservations panel with a full booking form, contact + hours + social cards, and a rounded dark footer.
- Forest green / sage / warm white / stone / charcoal palette with a restrained terracotta accent; **Fraunces** (display) + **Manrope** (body) — a pairing deliberately different from T1 and T2; fluid type scale and spacing tokens, botanical leaf motifs, `prefers-reduced-motion` support.
- CSS scoped under `body[data-template="template-3"]` / `html:has(body[data-template="template-3"])`, and only T3's CSS is loaded when T3 is selected.

### Template 4: Urban Pop — Creative Hair & Beauty Studio

- Bold, energetic, fashion-forward design language distinct from T1/T2/T3 — black sticky masthead with an uppercase nav and coral Book button, a campaign-style hero with oversized headline, layered image cards and an EST. badge, plus a scrolling service-category marquee; a studio statement with stat cards; **services as a bold typographic accordion** (index / name / category / price / plus-minus toggle → panel with image, description, duration and a Book shortcut); a full-width cobalt headline-service feature (highest-priced actual service); bold bundle blocks with a featured middle card; an asymmetric bento team grid with hover/focus bio reveal; an irregular mosaic gallery with an accessible lightbox; a horizontal scroll-snap testimonial slider (prev/next + arrow keys); a black reservations section with the full booking form; typographic contact + hours + social blocks; and a huge-type footer.
- Centralized design tokens (`--color-background/surface/primary/secondary/accent/text/muted/border` + helpers); electric cobalt / deep black / warm off-white palette with a hot-coral accent and lime highlights; sharp edges, uppercase labels, color blocks and oversized `clamp()` type.
- **Space Grotesk** (display) + **DM Sans** (body) — a pairing deliberately different from T1–T3; `prefers-reduced-motion` support (marquee, reveals and smooth scroll disabled).
- CSS scoped under `body[data-template="template-4"]` / `html:has(body[data-template="template-4"])`, and only T4's CSS is loaded when T4 is selected.

### Template 5: Contemporary Digital Beauty Lounge

- Cinematic, digitally sophisticated design language distinct from T1–T4 — deep midnight navy / ink-black base with cool porcelain background, white surfaces, restrained muted lavender secondary and a vibrant magenta-rose accent (~#cf1a70/#d81e78) with white-on-accent ~5:1 contrast; clean, high-contrast surfaces with precise spacing and subtle depth (soft shadows) rather than heavy gradients or neon.
- Sticky header with mobile nav, cinematic hero (image-driven with a floating content panel), compact trust/brand strip (real derived counts: services, categories, stylists, works; no invented stats/awards), about block, modern scannable services list with category filter chips, full-width spotlight for the top-priced service, horizontal package strips (featured middle), offset team grid, interactive gallery (main image + thumbnails) with accessible lightbox, single-spotlight testimonial slider (prev/next/dots + keyboard), navy reservations panel with full booking form, contact/location + opening hours + social cards, and a compact dark footer.
- **Syne** (display) + **Onest** (body) — a pairing deliberately different from T1–T4; fluid type scale via `clamp()`, clear hierarchy.
- Full data-driven rendering from shared data; empty states hide sections; booking shortcuts `[data-service]`/`[data-package]` preselect the form and scroll; appointments saved via `storage.addAppointment` and appear in Admin; image fallbacks + `prefers-reduced-motion` support.
- CSS scoped under `body[data-template="template-5"]` / `html:has(body[data-template="template-5"])`, and only T5's CSS is loaded when T5 is selected.

### Template 6: Quiet Luxury — Private Beauty Atelier

- Understated, warm, private-atelier design language distinct from T1–T5 — a calm centered "masthead" hero (kicker / title / lede / actions) above a wide cinematic `21/9` figure with a hairline caption (location + today's hours); an about block with a warm taupe image band and a definition-list of studio facts; **services as airy three-column hairline rows** (name + meta / description / price + Book); a split feature card for the highest-priced actual service; bordered three-cell package grid; a three-column portrait team grid; a two-column gallery with an alternating wide rhythm and an accessible lightbox; a featured-lead testimonial plus hairline quote columns; a two-column reservations section (aside + light panel) with the full booking form; three hairline contact cards (contact / hours / social); and a deep espresso footer.
- Soft ivory / white / espresso palette with a restrained oxblood accent and a warm taupe band; generous whitespace, hairline rules and minimal motion for a quiet-luxury feel.
- **Playfair Display** (display) + **Jost** (body) — a pairing deliberately different from T1–T5.
- Full data-driven rendering from shared data; empty states hide sections; booking shortcuts `[data-service]`/`[data-package]` preselect the form and scroll; appointments saved via `storage.addAppointment` and appear in Admin; image fallbacks + `prefers-reduced-motion` support.
- CSS scoped under `body[data-template="template-6"]` / `html:has(body[data-template="template-6"])`, and only T6's CSS is loaded when T6 is selected.

### Template 7: Avant-Garde Fashion Campaign

- Bold, art-directed fashion-campaign design language distinct from T1–T6 — a two-tier header (ink utility strip + sticky paper bar that gains a border on scroll); a full-bleed campaign hero with an oversized didone title (last word set in italic crimson), an index/eyebrow kicker, a location + credits footer and a scroll cue; an asymmetric about block with a drop-cap, a definition-list of studio facts and an offset image; **services as an editorial numbered list** (index / name / meta / description / price + Book) with an ink-invert hover; a full-bleed split feature for the highest-priced actual service (image / ink body); **packages as full-width editorial rows** (index / name / description / included treatment list / price / Reserve); a staggered contact-sheet team grid (grayscale → colour hover); a 12-column asymmetric editorial gallery with index captions and an accessible lightbox; a centered Bodoni-italic pull-quote testimonial rotator (prev/next + index, auto-advance, keyboard, paused on hover/focus, disabled under reduced motion); an ink reservations section with a white form panel and the full booking form; a three-column visit block (contact / hours / social); and a footer with a giant wordmark.
- Ink black / paper white / soft editorial grey palette with a single crimson accent (`#c1121f`); oversized Didone type, uppercase micro-labels and a two-tier header for a high-fashion campaign feel.
- **Bodoni Moda** (display, incl. italic) + **Instrument Sans** (body) — a pairing deliberately different from T1–T6.
- Full data-driven rendering from shared data; empty states hide sections; booking shortcuts `[data-service]`/`[data-package]` preselect the form and scroll; appointments saved via `storage.addAppointment` and appear in Admin; image fallbacks + `prefers-reduced-motion` support.
- CSS scoped under `body[data-template="template-7"]` / `html:has(body[data-template="template-7"])`, and only T7's CSS is loaded when T7 is selected.

### Template 8: Sunlit Coastal Beauty Studio

- Warm, sunlit, relaxed-premium coastal design language distinct from T1–T7 — a utility strip (location + today's hours) above a sticky header with a brand wordmark, uppercase nav and a Book button; a two-column sunlit hero with a Mediterranean **arched** media panel, a floating rating badge, an eyebrow/title/lede and a note line; an about/philosophy block with an arch image and a values row; **services as a two-column card grid** (index / name / category + duration pills / description / price + Book); a signature feature for the highest-priced actual service; a responsive auto-fit package grid; an arch-shaped team portrait grid; a four-column gallery with an accessible lightbox (prev/next); testimonials as a **card grid** (not a carousel); a dark-ink reservations section with a light form panel and the full booking form; a three-column visit block (contact / hours / social); and a dark footer.
- Warm ivory / sand / oat palette with a calm ocean-aqua accent (`--t8-accent:#27808a`) and a sun-gold highlight; Mediterranean arch motif, soft rounded cards and gentle shadows.
- **Marcellus** (display) + **Mulish** (body) — a pairing deliberately different from T1–T7.
- Full data-driven rendering from shared data; empty states hide sections; booking shortcuts `[data-service]`/`[data-package]` preselect the form and scroll; appointments saved via `storage.addAppointment` and appear in Admin; image fallbacks + `prefers-reduced-motion` support.
- CSS scoped under `body[data-template="template-8"]` / `html:has(body[data-template="template-8"])`, and only T8's CSS is loaded when T8 is selected.

### Template 9: Modern Monochrome Barber Studio

- Bold, monochrome, high-contrast barber-studio design language distinct from T1–T8 — an ink utility strip (location + today's hours) with a phone link above a sticky header (uppercase wordmark + tagline, uppercase nav with brass underline hover, Book button, overlay mobile nav with scrim); a two-column hero with an ink **rating card** over the portrait media, an eyebrow/title/lede, dual actions and a meta line; a dark **stats strip** (hairline-divided metrics); an about block with a facts row and an offset image; **services as a precise "menu" list** (brass index / name + category + duration meta / description / price + Book) with row hover; a dark **signature feature** for the highest-priced actual service; an auto-fit package grid with a brass-accented featured card and included-treatment list; a charcoal team grid with **grayscale → colour** portrait hover; a CSS-masonry gallery (varied aspect ratios) with hover captions and an accessible lightbox (prev/next, keyboard); testimonials as a hairline **card grid**; a dark reservations section with a light form panel and the full booking form (with numbered steps aside); a three-column visit block (hours / contact / social); and a dark footer.
- Monochrome ink / charcoal / warm-white palette with a single restrained **brass** accent (`--t9-brass:#a68a59`); hard-edged cards, hairline rules and uppercase micro-labels.
- **Sora** (display) + **Public Sans** (body) — a pairing deliberately different from T1–T8.
- Full data-driven rendering from shared data; empty states hide sections; booking shortcuts `[data-service]`/`[data-package]` preselect the form and scroll; appointments saved via `storage.addAppointment` and appear in Admin; image fallbacks + `prefers-reduced-motion` support.
- CSS scoped under `body[data-template="template-9"]` / `html:has(body[data-template="template-9"])`, and only T9's CSS is loaded when T9 is selected.

### Shared behavior (all templates)

- Every section is data-driven from the shared data layer. Admin changes (rename salon, add/delete service, change hours) appear immediately after refresh.
- Empty sections hide themselves gracefully (no gallery → no gallery section, no packages → no packages section).
- The booking form saves real appointment records through the data layer (visible in the admin panel).
- Switching `settings.selectedTemplate` in admin never resets salon data; `js/template.js` loads only the selected template's CSS/renderer and falls back to Template 1 if it cannot be loaded.

## Architecture

```text
Admin Panel
    ↓
Data Manager (js/data/storage.js)
    ↓
LocalStorage key: salon_prototype_data
    ↓
Shared salon data (business, contact, openingHours, services,
packages, team, gallery, testimonials, appointments, socialLinks, settings)
    ↓
Any template (html/templates/template-N)
```

- All templates read the **same** data. No template owns its own copy.
- `settings.selectedTemplate` is stored separately from salon data. Switching templates never changes or resets data.
- All LocalStorage access is centralized in `storage.js`. Nothing else touches LocalStorage directly.

## Data layer API

`storage.js` exposes: `initialize`, `getData`, `save`, `updateBusiness`, `updateContact`, `updateOpeningHours`, `get/add/update/delete` for services, packages, team, gallery, testimonials, appointments, `get/updateSettings`, `get/updateSocialLinks`, `resetDemoData`.

First visit loads demo data from `default-data.js` and saves it. **Reset Demo Data** on the dashboard restores it (with confirmation).

## Persistence

Every admin change writes to LocalStorage immediately and survives page refresh and browser restart until LocalStorage is cleared.

## Error handling

- Missing or invalid stored JSON falls back to demo data
- Missing sections are restored with defaults
- Invalid records are filtered out, missing IDs are regenerated
- Save failures roll back in-memory changes and show an error toast
- Duplicate IDs are prevented when generating new records

## Deploy to Vercel

Import the repo, keep the framework preset as **Other**, no build command, no environment variables. The project is fully static.

## Not included (later phases)

- Template 10 (will be built and reviewed individually, consuming the same data layer)
- Laravel API + MySQL (will replace the LocalStorage implementation inside the data manager only)
- Authentication, real uploads, email/WhatsApp sending, payments, cloud database
