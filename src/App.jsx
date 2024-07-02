import { BrowserRouter } from "react-router-dom"

//components

import { About , Contact , Experience , Feedbacks , Hero , Navbar , Works , StarsCanvas  } from './components'
import Expertise from "./components/Expertise"

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-hidden">
        <div className=" bg-photo-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero/>
        </div>
        <Expertise/>
        <About/>
        <Experience/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
