import Marquee from './components/Marquee'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ScoreBar from './components/ScoreBar'
import Services from './components/Services'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Marquee />
      <Nav />
      <Hero />
      <ScoreBar />
      <Services />
      <Footer />
    </div>
  )
}
