import { Link } from 'react-router-dom'
import libraryAfter from '../assets/library-after.jpeg'

const FEATURED = {
  img: libraryAfter,
  alt: 'Library built-ins finished and styled',
  category: 'INTERIOR MILLWORK',
  name: 'Library Built-Ins.',
  desc: 'Wall-to-wall paneled millwork, custom shelving, and integrated brass picture lights — all built into existing architecture, all by hand. Six weeks from rough framing to the homeowner moving the books in.',
  link: '/projects#interior-millwork',
}

export default function FeaturedWork() {
  return (
    <section className="bg-white border-t-3 border-b-3 border-mario-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="font-pixel text-[9px] tracking-wider text-mario-red block mb-6">
          ▶ FEATURED PROJECT
        </span>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-7 items-center">
          {/* Left — image */}
          <div
            className="overflow-hidden transition-transform duration-[280ms] ease-out hover:-translate-y-1"
            style={{ border: '1.5px solid #2c2c2c' }}
          >
            <img
              src={FEATURED.img}
              alt={FEATURED.alt}
              className="block w-full h-[360px] object-cover"
            />
          </div>

          {/* Right — copy & CTAs */}
          <div>
            <span className="font-pixel text-[9px] tracking-widest opacity-55 block mb-3">
              {FEATURED.category}
            </span>
            <h2 className="font-display text-[36px] leading-[0.95] tracking-tight m-0 mb-4">
              {FEATURED.name}
            </h2>
            <p className="text-sm leading-relaxed m-0 mb-5" style={{ color: '#333' }}>
              {FEATURED.desc}
            </p>
            <Link
              to={FEATURED.link}
              className="bg-mario-red text-white border-3 border-mario-black shadow-block px-5 py-3.5 font-pixel text-[11px] tracking-wider cursor-pointer inline-flex items-center gap-3 transition-all duration-100 ease-out hover:animate-pulse-glow active:translate-x-1 active:translate-y-1 active:shadow-block-xs no-underline mb-3"
            >
              <span aria-hidden>▶</span>
              <span>VIEW THIS PROJECT</span>
            </Link>
            <br />
            <Link
              to="/projects"
              className="inline-block text-[12px] text-mario-black no-underline hover:text-mario-red transition-colors"
              style={{ borderBottom: '1.5px solid #2A2218' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = '#B8442C')}
              onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = '#2A2218')}
            >
              See all projects →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
