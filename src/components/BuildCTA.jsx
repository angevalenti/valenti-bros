import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import BrickFloor from './BrickFloor'

export default function BuildCTA() {
  const navigate = useNavigate()
  const [hit, setHit] = useState(false)

  const handleClick = useCallback(() => {
    if (hit) return
    setHit(true)
    setTimeout(() => {
      navigate('/build')
      // Reset after navigation so back-button works
      setTimeout(() => setHit(false), 100)
    }, 500)
  }, [hit, navigate])

  return (
    <>
      <section
        className="relative py-16 px-6 text-center overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #B5C7E5, #88A4D8)' }}
      >
        <div className="absolute inset-0 grid-overlay pointer-events-none opacity-[0.07]" />

        <div className="relative">
          <p className="font-pixel text-[9px] tracking-wider text-mario-gold text-shadow-block-sm mb-4 m-0">
            ▶ READY TO START?
          </p>

          <h2
            className="font-display text-[32px] md:text-[48px] leading-[0.95] text-white text-stroke-2 m-0 mb-8"
            style={{ textShadow: '3px 3px 0 #2A2218' }}
          >
            WHAT WILL YOU BUILD?
          </h2>

          {/* Question block */}
          <div className="relative inline-block">
            {/* Coin that flies up on hit */}
            <div
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[28px] h-[28px] bg-mario-gold border-2 border-mario-black ${hit ? 'animate-[coin-fly_400ms_ease-out_forwards]' : 'opacity-0'}`}
            />

            <button
              type="button"
              aria-label="What will you build? Open the project form."
              onClick={handleClick}
              className={`relative w-[120px] h-[120px] bg-mario-gold border-[4px] border-mario-black font-pixel text-[52px] text-white cursor-pointer transition-none ${hit ? 'animate-[qblock-hit_400ms_ease-out_forwards]' : 'hover:animate-[qblock-bounce_0.7s_ease-in-out_infinite]'}`}
              style={{
                boxShadow: '6px 6px 0 0 #2A2218, inset 4px 4px 0 rgba(255,255,255,0.25), inset -4px -4px 0 rgba(0,0,0,0.15)',
                textShadow: '2px 2px 0 #2A2218',
              }}
            >
              ?
            </button>
          </div>

          <p className="font-pixel text-[8px] tracking-widest text-mario-black mt-6 m-0 opacity-70">
            ▶ HIT THE BLOCK
          </p>
        </div>
      </section>

      <BrickFloor />
    </>
  )
}
