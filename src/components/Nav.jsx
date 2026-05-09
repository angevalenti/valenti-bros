import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="bg-white border-b-3 border-mario-black px-5 py-3.5 flex items-center justify-between gap-4">
      <Link to="/" className="flex items-center gap-2.5 no-underline text-inherit">
        <div className="w-9 h-9 bg-mario-red border-3 border-mario-black flex items-center justify-center text-white font-pixel text-xs">
          V
        </div>
        <span className="font-display text-lg tracking-tight">VALENTI BROS.</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link
          to="/projects"
          className="hidden sm:inline-block relative font-bold text-xs uppercase tracking-widest no-underline text-inherit after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-[3px] after:bg-mario-red after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform"
        >
          Projects
        </Link>
        <a
          href="/#services"
          className="hidden sm:inline-block relative font-bold text-xs uppercase tracking-widest after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-[3px] after:bg-mario-red after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform"
        >
          Services
        </a>
        <a
          href="/#process"
          className="hidden sm:inline-block relative font-bold text-xs uppercase tracking-widest after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-[3px] after:bg-mario-red after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform"
        >
          Process
        </a>
        <Link
          to="/build"
          className="bg-mario-gold border-3 border-mario-black shadow-block-sm px-3 py-2 font-bold text-[11px] tracking-wider hover:-translate-y-0.5 transition-transform no-underline text-inherit"
        >
          GET QUOTE
        </Link>
      </div>
    </nav>
  )
}
