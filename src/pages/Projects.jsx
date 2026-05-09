import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import libraryBefore from '../assets/library-before.jpeg'
import libraryAfter from '../assets/library-after.jpeg'
import fireplace1 from '../assets/fireplace-1.jpeg'
import fireplace2 from '../assets/fireplace-2.jpeg'
import fireplace3 from '../assets/fireplace-3.jpeg'
import panelingProgress from '../assets/paneling-progress.jpeg'
import panelingWall from '../assets/paneling-wall.jpeg'
import corbelDetail from '../assets/corbel-detail.jpeg'
import pool1 from '../assets/pool-1.jpeg'
import pool2 from '../assets/pool-2.jpeg'
import foyer from '../assets/foyer.jpeg'
import stairLanding from '../assets/stair-landing.jpeg'
import wainscotHallway from '../assets/wainscotting-halway.jpeg'
import diningRoom from '../assets/dining-room.jpeg'

function ProjectImage({ src, alt, className = '' }) {
  return (
    <div
      className={`overflow-hidden transition-transform duration-[280ms] ease-out hover:-translate-y-1 ${className}`}
      style={{ border: '1.5px solid #2c2c2c' }}
    >
      <img src={src} alt={alt} loading="lazy" className="block w-full h-full object-cover" />
    </div>
  )
}

const CATEGORIES = [
  { id: 'interior-millwork', label: 'INTERIOR MILLWORK' },
  { id: 'outdoor-living', label: 'OUTDOOR LIVING' },
  { id: 'whole-room', label: 'WHOLE-ROOM' },
]

export default function ProjectsPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <>
      {/* ── Page header ── */}
      <section className="bg-mario-black text-white px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <span className="font-pixel text-[9px] tracking-wider text-mario-gold block mb-3">
            ▶ WORLD MAP
          </span>
          <h1 className="font-display text-[48px] md:text-[56px] leading-none m-0">PROJECTS</h1>
          <p className="text-[15px] leading-relaxed mt-3 mb-8 max-w-lg text-neutral-400">
            Every job below was built by hand. Pick a category to dive in.
          </p>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-mario-gold text-mario-black border-3 border-mario-black shadow-block-sm px-4 py-2 font-bold text-[11px] tracking-wider no-underline hover:-translate-y-0.5 transition-transform"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category 1: Interior Millwork ── */}
      <section id="interior-millwork" className="py-20 bg-mario-gray">
        <div className="px-6 max-w-6xl mx-auto mb-12">
          <span className="font-pixel text-[9px] tracking-wider text-mario-blue block mb-2">INTERIOR MILLWORK</span>
        </div>

        {/* Strip: Library Built-Ins */}
        <div className="px-6 max-w-6xl mx-auto py-16">
          <span className="font-pixel text-[9px] tracking-wider text-mario-blue block mb-2">WORLD 1-1</span>
          <h3 className="font-display text-2xl md:text-3xl m-0">Library Built-Ins</h3>
          <p className="text-[15px] leading-relaxed mt-2 mb-6 max-w-xl">
            Custom millwork shaped to fit the architecture that was already there — not the other way around.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProjectImage src={libraryBefore} alt="Library built-ins mid-install with painter working" />
            <ProjectImage src={libraryAfter} alt="Finished library built-ins styled with books and decor" />
          </div>
        </div>

        {/* Strip: Custom Fireplace Mantle */}
        <div className="px-6 max-w-6xl mx-auto py-16">
          <span className="font-pixel text-[9px] tracking-wider text-mario-blue block mb-2">WORLD 1-2</span>
          <h3 className="font-display text-2xl md:text-3xl m-0">Custom Fireplace Mantle</h3>
          <p className="text-[15px] leading-relaxed mt-2 mb-6 max-w-xl">
            Three stages from bare studs to finished surround — every corbel, joint, and sconce placed by hand.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ProjectImage src={fireplace1} alt="Fireplace rough framing with corbel held mid-dry-fit" />
            <ProjectImage src={fireplace2} alt="Mantle installed, chase still raw plywood with green tape" />
            <ProjectImage src={fireplace3} alt="Mantle with sconces installed, shiplap in primer" />
          </div>
        </div>

        {/* Strip: Shadow-Box Paneling */}
        <div className="px-6 max-w-6xl mx-auto py-16">
          <span className="font-pixel text-[9px] tracking-wider text-mario-blue block mb-2">WORLD 1-3</span>
          <h3 className="font-display text-2xl md:text-3xl m-0">Shadow-Box Paneling</h3>
          <p className="text-[15px] leading-relaxed mt-2 mb-6 max-w-xl">
            Flat drywall turned into architectural detail — panel by panel, corner to corner.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProjectImage src={panelingProgress} alt="Shadow-box panels going on wall, ladder in shot, putty visible" />
            <ProjectImage src={panelingWall} alt="Full shadow-box paneled wall at primer stage" />
          </div>
        </div>

        {/* Strip: Hand-Built Millwork (full-bleed hero) */}
        <div className="py-16">
          <div className="px-6 max-w-6xl mx-auto mb-6">
            <span className="font-pixel text-[9px] tracking-wider text-mario-gold block mb-2">1-UP: HAND-BUILT</span>
            <h3 className="font-display text-2xl md:text-3xl m-0">Hand-Built Millwork</h3>
            <p className="text-[15px] leading-relaxed mt-2 mb-0 max-w-xl">
              Every piece shaped, primed, and installed by hand — no shortcuts, no substitutions.
            </p>
          </div>
          <div className="px-6 md:px-0 max-w-5xl mx-auto">
            <ProjectImage
              src={corbelDetail}
              alt="Hand holding custom corbel and dentil moulding, raw wood next to primed"
            />
          </div>
        </div>
      </section>

      {/* ── Category 2: Outdoor Living ── */}
      <section id="outdoor-living" className="py-20 bg-mario-gray border-t-3 border-mario-black">
        <div className="px-6 max-w-6xl mx-auto mb-12">
          <span className="font-pixel text-[9px] tracking-wider text-mario-blue block mb-2">OUTDOOR LIVING</span>
        </div>

        <div className="px-6 max-w-6xl mx-auto py-16">
          <span className="font-pixel text-[9px] tracking-wider text-mario-blue block mb-2">WORLD 2-1</span>
          <h3 className="font-display text-2xl md:text-3xl m-0">Pool & Patio</h3>
          <p className="text-[15px] leading-relaxed mt-2 mb-6 max-w-xl">
            Outdoor living built to hold up to Pennsylvania weather and twenty years of bare feet.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProjectImage src={pool1} alt="Pool patio wide angle in daytime" />
            <ProjectImage src={pool2} alt="Pool patio with teak seating and scalloped umbrella" />
          </div>
        </div>
      </section>

      {/* ── Category 3: Whole-Room ── */}
      <section id="whole-room" className="py-20 bg-mario-gray border-t-3 border-mario-black">
        <div className="px-6 max-w-6xl mx-auto mb-12">
          <span className="font-pixel text-[9px] tracking-wider text-mario-blue block mb-2">WHOLE-ROOM</span>
        </div>

        <div className="px-6 max-w-6xl mx-auto py-16">
          <span className="font-pixel text-[9px] tracking-wider text-mario-blue block mb-2">WORLD 2-2</span>
          <h3 className="font-display text-2xl md:text-3xl m-0">Lived-In Detail</h3>
          <p className="text-[15px] leading-relaxed mt-2 mb-6 max-w-xl">
            The best work disappears into the home — you stop noticing the craft and start living in it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProjectImage src={foyer} alt="Blue-walled foyer entry with wainscoting and coat shelf" />
            <ProjectImage src={stairLanding} alt="Stair landing corner showing wainscot meeting stair stringer" />
            <ProjectImage src={wainscotHallway} alt="Cream wainscoted hallway with French door and gallery wall" />
            <ProjectImage src={diningRoom} alt="Wallpapered dining room with chandelier" />
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <div className="px-6 py-16 bg-mario-gray text-center">
        <button
          type="button"
          aria-label="Request a consultation"
          className="bg-mario-red text-white border-3 border-mario-black shadow-block px-6 py-4 font-pixel text-[13px] tracking-wider cursor-pointer inline-flex items-center gap-3 transition-all duration-100 ease-out hover:animate-pulse-glow active:translate-x-1 active:translate-y-1 active:shadow-block-xs"
        >
          <span aria-hidden>▶</span>
          <span>REQUEST A CONSULTATION</span>
        </button>
      </div>
    </>
  )
}
