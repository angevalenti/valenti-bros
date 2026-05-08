import Coin from './Coin'

// Swap this URL for an image of an actual Valenti Bros. project
// (clean framing job, finished kitchen, modern home interior, etc.)
const HERO_BG_URL =
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80'

const TRUST_BADGES = [
  { delay: '0.2s', label: 'PA HIC #PA035821' },
  { delay: '0.6s', label: 'FULLY INSURED' },
  { delay: '1.0s', label: 'A+ BBB RATED' },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-[600px] bg-mario-blue bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${HERO_BG_URL}')`,
      }}
    >
      {/* Subtle pixel grid overlay reinforces the 8-bit nod */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      <PixelCloud />
      <WarpPipe />

      <div className="relative px-7 pt-14 pb-16 max-w-3xl">
        {/* 1-UP badge */}
        <div className="inline-flex items-center gap-2 bg-mario-gold text-mario-black px-3 py-2 border-3 border-mario-black shadow-block-sm mb-6">
          <Coin />
          <span className="font-pixel text-[9px]">1-UP · 27 YEARS BUILDING</span>
        </div>

        <h1 className="font-display text-[64px] md:text-[88px] leading-[0.88] tracking-tight text-white text-stroke-2 text-shadow-block m-0">
          VALENTI<br />BROS.
        </h1>

        <p className="font-pixel text-mario-gold text-[11px] mt-4 mb-0 text-shadow-block-sm">
          ▶ LEVEL UP YOUR BUILD.
        </p>

        <p className="text-white text-sm md:text-base max-w-md mt-4 mb-7 leading-relaxed font-medium">
          High-end residential construction across South Central PA. Custom homes,
          additions, and full-scope renovations — built right the first time.
        </p>

        {/* The Start Button — pulses on hover, depresses on click */}
        <button
          type="button"
          aria-label="Press start to build — request a quote"
          className="bg-mario-red text-white border-3 border-mario-black shadow-block px-6 py-4 font-pixel text-[13px] tracking-wider cursor-pointer inline-flex items-center gap-3 transition-all duration-100 ease-out hover:animate-pulse-glow active:translate-x-1 active:translate-y-1 active:shadow-block-xs"
        >
          <span aria-hidden>▶</span>
          <span>PRESS START TO BUILD</span>
        </button>

        <div className="flex flex-wrap gap-x-6 gap-y-3 mt-7 text-white">
          {TRUST_BADGES.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2">
              <Coin style={{ animationDelay: badge.delay }} />
              <span className="font-pixel text-[9px]">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Decorative bits ─────────────────────────────────────── */

function PixelCloud() {
  // Simple 7-wide pixel cloud, top right
  const grid = [
    [0, 1, 1, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 0],
  ]
  return (
    <div
      aria-hidden
      className="absolute top-9 right-7 grid grid-cols-7 opacity-50"
      style={{ gridAutoRows: '8px' }}
    >
      {grid.flat().map((cell, i) => (
        <div
          key={i}
          className="w-2 h-2"
          style={{ background: cell ? '#fff' : 'transparent' }}
        />
      ))}
    </div>
  )
}

function WarpPipe() {
  const inset = { boxShadow: 'inset -6px 0 0 rgba(0,0,0,0.18)' }
  return (
    <div aria-hidden className="absolute right-0 bottom-0 flex flex-col items-center">
      <div className="bg-mario-green border-3 border-mario-black w-[70px] h-[22px]" style={inset} />
      <div className="bg-mario-green border-3 border-mario-black w-14 h-14" style={inset} />
    </div>
  )
}
