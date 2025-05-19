import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"
import Resume from "./components/Resume/Resume"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"

import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center bg-fixed bg-[url('/images/w9.jpg')]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
