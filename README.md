# Valenti Bros. Construction

> **Vibe:** Super Mario Brothers meets High-End, Professional Construction.
> **Stack:** Vite · React 18 · Tailwind CSS v4 · Google Fonts.

A clean, brand-forward marketing site for a residential general contractor in
South Central PA. The design system uses subtle 8-bit nods (hard offset
shadows, pixel-font accents, a coin-counter score bar, a `?` block) without
tipping into "toy store."

---

## Quick start

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # local preview of the production build
```

---

## Handing off to Claude Code

Once `npm run dev` is running, open a second terminal in this same folder and
launch Claude Code:

```bash
claude
```

(If Claude Code isn't installed yet:
`npm install -g @anthropic-ai/claude-code` — requires Node.js 18+.)

The first prompt to paste into Claude Code (so it has full context of the
design system) is in [`docs/CC_STARTER_PROMPT.md`](./docs/CC_STARTER_PROMPT.md).

---

## Design system

All design tokens live in **`src/index.css`** under `@theme`. Tailwind v4
auto-generates utilities from these tokens — change a value in one place and
it propagates everywhere.

### Palette

| Token             | Hex       | Use                              |
| ----------------- | --------- | -------------------------------- |
| `mario-red`       | `#E4000F` | Primary CTAs, brand accent       |
| `mario-blue`      | `#0444BE` | Overalls blue, secondary accent  |
| `mario-green`     | `#00B531` | Success, "warp pipe", footer     |
| `mario-gold`      | `#FBD000` | Highlights, coins, CTAs          |
| `mario-gray`      | `#F4F4F4` | Page background (concrete)       |
| `mario-black`     | `#1A1A1A` | Text, borders, "rebar"           |

Use as `bg-mario-red`, `text-mario-gold`, `border-mario-black`, etc.

### Typography

| Token          | Font                | Use                            |
| -------------- | ------------------- | ------------------------------ |
| `font-display` | Archivo Black       | Headings, hero title           |
| `font-body`    | Montserrat          | Body copy, nav links           |
| `font-pixel`   | Press Start 2P      | Action elements, small accents |

### "Block logic" shadows

Everything significant gets a hard 8-bit-style shadow with a `3px` solid black
border. Use these utilities:

| Utility           | Value                       | Use                         |
| ----------------- | --------------------------- | --------------------------- |
| `shadow-block-xs` | `2px 2px 0 0 #1A1A1A`       | Pressed/active state        |
| `shadow-block-sm` | `3px 3px 0 0 #1A1A1A`       | Small buttons, badges       |
| `shadow-block`    | `6px 6px 0 0 #1A1A1A`       | Default cards, primary CTA  |
| `shadow-block-lg` | `8px 8px 0 0 #1A1A1A`       | Hover state for cards       |

The depress interaction pattern (e.g. on the PRESS START button):

```jsx
className="shadow-block active:shadow-block-xs active:translate-x-1 active:translate-y-1 transition-all duration-100"
```

### Animations

- `animate-coin-spin` — gold square flips on Y axis, reads as a spinning coin
- `animate-pulse-glow` — brightness/saturation pulse for hover states
- `animate-marquee` — horizontal scroll for the top announcement strip

---

## File structure

```
valenti-bros/
├── index.html
├── package.json
├── vite.config.js
├── docs/
│   └── CC_STARTER_PROMPT.md   ← paste this into Claude Code first
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css              ← design system lives here
    └── components/
        ├── Coin.jsx
        ├── Marquee.jsx
        ├── Nav.jsx
        ├── Hero.jsx
        ├── ScoreBar.jsx
        ├── Services.jsx
        └── Footer.jsx
```

---

## Things to swap before you go live

1. **Hero background image.** `src/components/Hero.jsx` points at a placeholder
   Unsplash URL. Replace `HERO_BG_URL` with a real Valenti Bros. project photo
   (clean framing job or a finished modern kitchen, per the brief).
2. **Contractor license number.** The `PA HIC #PA035821` in `Hero.jsx` is a
   placeholder — drop in the real one.
3. **Copy.** The body copy throughout (`Hero.jsx`, `Services.jsx`) is a
   reasonable starting point but should get a pass from someone who knows the
   business.
4. **Stats.** The numbers in `ScoreBar.jsx` (240+, 27, 4.9★) are placeholders.

---

## Deploying

This is a static Vite build, so any static host works. Easiest paths:

**Vercel** — `vercel` from the repo root, or connect the GitHub repo at
vercel.com. Zero config needed.

**Netlify** — Drag the `dist/` folder onto netlify.com after `npm run build`,
or connect the GitHub repo (build command: `npm run build`, publish dir:
`dist`).

**GitHub Pages** — Add `base: '/repo-name/'` to `vite.config.js` and use a
GitHub Action.
