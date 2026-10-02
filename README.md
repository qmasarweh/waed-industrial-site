# WAED Industrial — Website (waed 2)

High-motion marketing site for **WAED Industrial Innovation Company W.L.L**.

## Source inputs

- `../WAED_Website_Intake_Form_Final_Revised.docx` — all page copy
- `../approved logo.pdf` — brand system + facility / fleet imagery
- `../waed wide outro test one.mp4` — brand outro (converted to H.264 in `public/video/waed-outro.mp4`)

## Run locally

```bash
cd site
npm install
npm run dev
```

Open http://127.0.0.1:5173/

## Production build

```bash
npm run build
```

Static files land in `site/dist/` — upload that folder to any static host (Bluehost, Netlify, etc.).

## Stack

Vite + React + TypeScript, GSAP ScrollTrigger (outro), Lenis smooth scroll. Brand palette from approved artwork: Navy `#1D2D44`, Steel `#3E5C77`, Sand `#DBD7CD`.
