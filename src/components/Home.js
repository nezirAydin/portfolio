import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const publicUrl = process.env.PUBLIC_URL;

const Home = ({ content, isArabic }) => {
  return (
    <div className={`home home-animate-in ${isArabic ? "home-ar" : ""}`}>
      <header className="home-header">
        <picture>
          <source srcSet={`${publicUrl}/rabah-logo.webp`} type="image/webp" />
          <img
            src={`${publicUrl}/rabah-logo.png`}
            alt="Rabah-Tech — software engineering company logo"
            className="home-logo"
            width="585"
            height="132"
            fetchpriority="high"
            decoding="async"
          />
        </picture>
        <h1>{content.title}</h1>
        {content.subtitle && <p className="home-subtitle">{content.subtitle}</p>}
        <p>{content.description}</p>
        <div className="home-cta-row">
          <Link to={content.ctaPrimary.path} className="home-cta home-cta-primary">
            {content.ctaPrimary.label}
          </Link>
          <Link to={content.ctaSecondary.path} className="home-cta home-cta-secondary">
            {content.ctaSecondary.label}
          </Link>
        </div>
        <div className="home-highlights">
          {content.highlights.map((highlight) => (
            <div className="home-highlight" key={highlight}>
              {highlight}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default Home;
