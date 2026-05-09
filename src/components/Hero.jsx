import Coin from './Coin'
import BrickFloor from './BrickFloor'
import crewPhoto from '../assets/construction-crew-1.jpeg'

export default function Hero() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-[1.7fr_1fr] border-b-3 border-mario-black">
        {/* ── Right column: photo (appears first on mobile) ── */}
        <div className="relative bg-mario-black order-first md:order-last overflow-hidden h-[280px] md:h-auto md:min-h-[440px]">
          <img
            src={crewPhoto}
            alt="Valenti Bros. crew pouring a foundation"
            className="block w-full h-full object-cover"
          />
          <WarpPipe />
        </div>

        {/* ── Left column: Mario stage ── */}
        <div
          className="relative overflow-hidden border-t-3 md:border-t-0 md:border-r-3 border-mario-black p-8 md:p-10 flex flex-col justify-center"
          style={{ background: 'linear-gradient(to bottom, #B5C7E5, #88A4D8)' }}
        >
          <div className="absolute inset-0 grid-overlay pointer-events-none opacity-[0.07]" />
          <PixelCloud />

          <div className="relative">
            {/* 1-UP badge */}
            <div className="inline-flex items-center gap-2 bg-mario-gold text-mario-black px-3 py-2 border-3 border-mario-black shadow-block-sm mb-6">
              <Coin />
              <span className="font-pixel text-[9px]">1-UP · 27 YEARS BUILDING</span>
            </div>

            <h1 className="font-display text-[40px] md:text-[64px] lg:text-[72px] leading-[0.88] tracking-tight text-white text-stroke-2 m-0" style={{ textShadow: '5px 5px 0 #2A2218' }}>
              VALENTI<br />BROS.
            </h1>

            <p className="font-pixel text-mario-gold text-[11px] mt-4 mb-0 text-shadow-block-sm">
              ▶ LEVEL UP YOUR BUILD.
            </p>

            <p className="text-mario-black text-sm max-w-[370px] mt-4 mb-7 leading-relaxed font-medium">
              High-end residential construction across South Central PA. Custom homes,
              additions, and full-scope renovations — built right the first time.
            </p>

            <button
              type="button"
              aria-label="Press start to build — request a quote"
              className="bg-mario-red text-white border-3 border-mario-black shadow-block px-6 py-4 font-pixel text-[13px] tracking-wider cursor-pointer inline-flex items-center gap-3 transition-all duration-100 ease-out hover:animate-pulse-glow active:translate-x-1 active:translate-y-1 active:shadow-block-xs"
            >
              <span aria-hidden>▶</span>
              <span>PRESS START TO BUILD</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Brick floor strip ── */}
      <BrickFloor />
    </>
  )
}

/* ── Decorative bits ─────────────────────────────────────── */

function PixelCloud() {
  const grid = [
    [0, 1, 1, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 0],
  ]
  return (
    <div
      aria-hidden
      className="absolute top-6 right-6 grid grid-cols-7 opacity-40"
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
    <div aria-hidden className="absolute right-4 bottom-0 z-10 flex flex-col items-center">
      <div className="bg-mario-green border-3 border-mario-black w-[70px] h-[22px]" style={inset} />
      <div className="bg-mario-green border-3 border-b-0 border-mario-black w-14 h-14" style={inset} />
    </div>
  )
}

