# Claude Code Starter Prompt

Paste this entire block as your **first message** to Claude Code in this
project. It gives CC the design system context up front so every subsequent
change stays on-brand.

---

```
PROJECT: Valenti Bros. Construction (residential general contractor, South Central PA)

VIBE: "Super Mario Brothers meets High-End, Professional Construction." Clean, confident, with subtle 8-bit nods. Never toy-like.

STACK:
- Vite + React 18
- Tailwind CSS v4 (CSS-first config — design tokens in src/index.css under @theme)
- Google Fonts: Archivo Black (display), Montserrat (body), Press Start 2P (pixel accents)

DESIGN SYSTEM (already wired up in src/index.css):

Palette utilities:
- bg-mario-red    (#E4000F) — primary CTAs
- bg-mario-blue   (#0444BE) — overalls blue
- bg-mario-green  (#00B531) — warp pipe / success
- bg-mario-gold   (#FBD000) — coin / highlight
- bg-mario-gray   (#F4F4F4) — concrete / page bg
- bg-mario-black  (#1A1A1A) — rebar / text / borders

Typography utilities:
- font-display (Archivo Black) — headings
- font-body    (Montserrat)    — body
- font-pixel   (Press Start 2P) — pixel accents only

"Block logic" — every significant element has:
- border-3 border-mario-black (3px solid black border)
- shadow-block (6px 6px 0 0 #1A1A1A) for default
- shadow-block-sm (3px 3px) for smaller elements
- shadow-block-lg (8px 8px) for hover states
- shadow-block-xs (2px 2px) for pressed/active states

Depress interaction pattern (use on all primary buttons):
className="shadow-block active:shadow-block-xs active:translate-x-1 active:translate-y-1 transition-all duration-100"

Animations:
- animate-coin-spin — flipping gold square
- animate-pulse-glow — brightness/saturation pulse for hover
- animate-marquee — horizontal scroll

GROUND RULES FOR ANY CHANGE:
1. Tons of white space. The design is clean first, 8-bit-flavored second.
2. Pixel font ONLY for action elements and small accents — never body copy or headings.
3. Mario nods should be earned, not sprinkled. One per section, max.
4. Mobile-first. Verify everything works at 375px before considering desktop.
5. Accessibility: every interactive element gets a label or aria-label, every decorative element gets aria-hidden.

Read README.md and src/index.css to ground yourself in the design system, then ask me what to build next.
```

---

After CC confirms it has the context, good first asks:

- "Add a Projects gallery section after Services with a 2-column grid of
  before/after image cards."
- "Build a Contact section with a quote-request form. Use the block-shadow
  pattern on the form fields."
- "Make the hero responsive — at <640px the title should drop to 48px and
  the warp pipe should hide."
- "Add a sticky-on-scroll behavior to the Nav with a subtle thin shadow
  appearing once scrolled past the marquee."
