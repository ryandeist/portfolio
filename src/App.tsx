import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useRef } from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <div className="min-h-screen flex flex-col bg-no-repeat bg-cover bg-center bg-fixed bg-[url('/images/w9.jpg')]">
      <NavBar />
      
      <div className="flex-grow">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={location.pathname}
            classNames="fade-route"
            timeout={400}
            nodeRef={nodeRef}
            unmountOnExit
          >
            <div ref={nodeRef}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
  
      <Footer /> {/* Always at the bottom */}
    </div>
  );
}

export default App;
