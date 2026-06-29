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
import PartnerSection from "./components/PartnerSection";
import PageViewTracker from "./components/PageViewTracker";
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
    document.title = content.meta.title;
  }, [isArabic, language, content.meta.title]);

  return (
    <Router>
      <PageViewTracker pageTitle={content.meta.title} />
      <div className={`App app-shell ${isArabic ? "rtl" : "ltr"}`}>
        <nav className="navigation">
          <Link to="/" className="nav-brand">
            {content.nav.brand}
          </Link>
          <div className="navigation-links">
            <Link to="/">{content.nav.home}</Link>
            <Link to="/skills">{content.nav.skills}</Link>
            <Link to="/experience">{content.nav.experience}</Link>
            <Link to="/projects">{content.nav.projects}</Link>
            <Link to="/iutech">{content.nav.partner}</Link>
            <Link to="/bothbs">{content.nav.partnerBothbs}</Link>
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
                <AboutMe content={content.aboutMe} isArabic={isArabic} />
                <PartnerSection content={content.partner} isArabic={isArabic} isHomepage />
                <PartnerSection content={content.bothbs} isArabic={isArabic} isHomepage />
                <Projects content={content.projects} isHomepage isArabic={isArabic} />
              </motion.div>
            }
          />
          <Route
            path="/skills"
            element={
              <motion.div {...pageTransition}>
                <Skills content={content.skills} isArabic={isArabic} />
              </motion.div>
            }
          />
          <Route
            path="/experience"
            element={
              <motion.div {...pageTransition}>
                <Experience content={content.experience} isArabic={isArabic} />
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
            path="/iutech"
            element={
              <motion.div {...pageTransition}>
                <PartnerSection content={content.partner} isArabic={isArabic} />
              </motion.div>
            }
          />
          <Route
            path="/bothbs"
            element={
              <motion.div {...pageTransition}>
                <PartnerSection content={content.bothbs} isArabic={isArabic} />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div {...pageTransition}>
                <ContactMe content={content.contact} isArabic={isArabic} />
              </motion.div>
            }
          />
        </Routes>
        <WhatsAppButton
          message={content.contact.whatsappMessage}
          tooltip={content.contact.whatsappTooltip}
        />
      </div>
    </Router>
  );
}

export default App;
