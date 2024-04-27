import { BrowserRouter } from "react-router-dom"
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from "./components"
import ReactGA from "react-ga4"

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
      </div>
    </BrowserRouter>
  )
}

export default App
