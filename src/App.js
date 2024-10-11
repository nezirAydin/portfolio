import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";

function App() {
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
  };

  return (
    <Router>
      <div className="App">
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/skills">Skills & Tools</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Me</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <motion.div {...pageTransition}>
                <Home />
                <AboutMe />
              </motion.div>
            }
          />
          <Route
            path="/skills"
            element={
              <motion.div {...pageTransition}>
                <Skills />
              </motion.div>
            }
          />
          <Route
            path="/experience"
            element={
              <motion.div {...pageTransition}>
                <Experience />
              </motion.div>
            }
          />
          <Route
            path="/projects"
            element={
              <motion.div {...pageTransition}>
                <Projects />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div {...pageTransition}>
                <ContactMe />
              </motion.div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
