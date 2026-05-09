import { Routes, Route } from 'react-router-dom'
import Marquee from './components/Marquee'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ScoreBar from './components/ScoreBar'
import FeaturedWork from './components/FeaturedWork'
import Services from './components/Services'
import BuildCTA from './components/BuildCTA'
import Footer from './components/Footer'
import ProjectsPage from './pages/Projects'
import BuildPage from './pages/Build'

function Home() {
  return (
    <>
      <Hero />
      <ScoreBar />
      <FeaturedWork />
      <Services />
      <BuildCTA />
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Marquee />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/build" element={<BuildPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
