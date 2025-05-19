import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"

import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center bg-fixed bg-[url('/images/w9.jpg')]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/resume" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
