import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";
import WhatsAppButton from "./components/WhatsAppButton";
import siteContent from "./content/siteContent";

function App() {
  const [language, setLanguage] = useState("en");
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
  };
  const isArabic = language === "ar";
  const content = siteContent[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic, language]);

  return (
    <Router>
      <div className={`App app-shell ${isArabic ? "rtl" : "ltr"}`}>
        <nav className="navigation">
          <div className="navigation-links">
            <Link to="/">{content.nav.home}</Link>
            <Link to="/skills">{content.nav.skills}</Link>
            <Link to="/experience">{content.nav.experience}</Link>
            <Link to="/projects">{content.nav.projects}</Link>
            <Link to="/contact">{content.nav.contact}</Link>
          </div>
          <button
            type="button"
            className="language-toggle"
            onClick={() => setLanguage(isArabic ? "en" : "ar")}
          >
            {content.nav.toggle}
          </button>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <motion.div {...pageTransition}>
                <Home content={content.home} isArabic={isArabic} />
                <AboutMe />
                <Projects content={content.projects} isHomepage isArabic={isArabic} />
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
                <Projects content={content.projects} isArabic={isArabic} />
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
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
