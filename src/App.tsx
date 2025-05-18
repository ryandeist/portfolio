import NavBar from "./components/NavBar"
import Home from "./components/Home/Home"

import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/resume" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
