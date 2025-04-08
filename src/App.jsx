import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Navbar from "./Pages/Navbar";
import ResponsiveMenu from "./Pages/ResponsiveMenu";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Research from "./Pages/Research";
import HobbiesPage from "./Pages/Hobbiespage";
import { useState } from "react";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <Router>
      {/* Navbar appears on all pages */}
      <Navbar toggleMenu={toggleMobileMenu} />

      {/* Mobile menu (conditionally rendered) */}
      {showMobileMenu && <ResponsiveMenu toggleMenu={toggleMobileMenu} />}

      {/* Main content area */}
      <div className="pt-20"> {/* Add padding to account for fixed navbar */}
        <Routes>
          {/* Default route shows Hero component */}
          <Route path="/" element={
            <>
              <Hero />
              <Research />
              <About />
              <Projects />
              <HobbiesPage />
              <Contact />
            </>
          } />

          {/* Individual component routes for direct linking */}
          <Route path="/home" element={<Hero />} />
          <Route path="/research" element={<Research />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hobbies" element={<HobbiesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;