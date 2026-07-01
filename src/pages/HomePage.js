import React, { Suspense, lazy } from "react";
import Home from "../components/Home";

const AboutMe = lazy(() => import("../components/AboutMe"));
const PartnerSection = lazy(() => import("../components/PartnerSection"));
const LeadCTA = lazy(() => import("../components/LeadCTA"));
const FaqSection = lazy(() => import("../components/FaqSection"));
const Projects = lazy(() => import("../components/Projects"));

const SectionFallback = () => (
  <div className="section-skeleton" aria-hidden="true" />
);

const HomePage = ({ content, isArabic }) => (
  <div className="page-enter">
    <Home content={content.home} isArabic={isArabic} />
    <Suspense fallback={<SectionFallback />}>
      <AboutMe content={content.aboutMe} isArabic={isArabic} />
      <PartnerSection content={content.partner} isArabic={isArabic} isHomepage />
      <PartnerSection content={content.bothbs} isArabic={isArabic} isHomepage />
      <PartnerSection content={content.rabahCo} isArabic={isArabic} isHomepage />
      <LeadCTA content={content.leadCta} isArabic={isArabic} />
      <FaqSection content={content.faq} isArabic={isArabic} />
      <Projects content={content.projects} isHomepage isArabic={isArabic} />
    </Suspense>
  </div>
);

export default HomePage;
