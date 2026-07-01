import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import WhatsAppButton from "./components/WhatsAppButton";
import PageViewTracker from "./components/PageViewTracker";
import SeoHead from "./components/SeoHead";
import siteContent from "./content/siteContent";

const HomePage = lazy(() => import("./pages/HomePage"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const PartnerSection = lazy(() => import("./components/PartnerSection"));
const ContactMe = lazy(() => import("./components/ContactMe"));

const PageLoader = () => (
  <div className="page-loader" role="status" aria-live="polite">
    <span className="page-loader-spinner" aria-hidden="true" />
  </div>
);

function App() {
  const [language, setLanguage] = useState("en");
  const isArabic = language === "ar";
  const content = siteContent[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic, language]);

  return (
    <Router>
      <SeoHead language={language} content={content} />
      <PageViewTracker pageTitle={content.meta.title} />
      <div className={`App app-shell ${isArabic ? "rtl" : "ltr"}`}>
        <a href="#main-content" className="skip-link">
          {isArabic ? "انتقل إلى المحتوى" : "Skip to content"}
        </a>
        <nav className="navigation" aria-label={isArabic ? "التنقل الرئيسي" : "Main navigation"}>
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
            <Link to="/hvac">{content.nav.partnerHvac}</Link>
            <Link to="/contact">{content.nav.contact}</Link>
          </div>
          <button
            type="button"
            className="language-toggle"
            onClick={() => setLanguage(isArabic ? "en" : "ar")}
            aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
          >
            {content.nav.toggle}
          </button>
        </nav>
        <main id="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route
                path="/"
                element={<HomePage content={content} isArabic={isArabic} />}
              />
              <Route
                path="/skills"
                element={<Skills content={content.skills} isArabic={isArabic} />}
              />
              <Route
                path="/experience"
                element={<Experience content={content.experience} isArabic={isArabic} />}
              />
              <Route
                path="/projects"
                element={<Projects content={content.projects} isArabic={isArabic} />}
              />
              <Route
                path="/iutech"
                element={<PartnerSection content={content.partner} isArabic={isArabic} />}
              />
              <Route
                path="/bothbs"
                element={<PartnerSection content={content.bothbs} isArabic={isArabic} />}
              />
              <Route
                path="/hvac"
                element={<PartnerSection content={content.rabahCo} isArabic={isArabic} />}
              />
              <Route
                path="/contact"
                element={<ContactMe content={content.contact} isArabic={isArabic} />}
              />
            </Routes>
          </Suspense>
        </main>
        <WhatsAppButton
          message={content.contact.whatsappMessage}
          tooltip={content.contact.whatsappTooltip}
          ariaLabel={content.contact.whatsappTooltip}
        />
      </div>
    </Router>
  );
}

export default App;
