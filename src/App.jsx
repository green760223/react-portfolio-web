import { lazy, Suspense } from "react"
import { BrowserRouter } from "react-router-dom"

import { Hero, Navbar, Footer, StarsCanvas } from "./components"

import ReactGA from "react-ga4"

// Lazy load components
const About = lazy(() => import("./components/About"))
const Contact = lazy(() => import("./components/Contact"))
const Experience = lazy(() => import("./components/Experience"))
const Tech = lazy(() => import("./components/Tech"))
const Works = lazy(() => import("./components/Works"))

const measurementId = "G-9QYD3X46W9"
ReactGA.initialize(measurementId)

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <Experience />
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
          <div className='relative z-0 '>
            <Contact />
            <StarsCanvas />
          </div>
          <div className='relative z-0'>
            <Footer />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App
