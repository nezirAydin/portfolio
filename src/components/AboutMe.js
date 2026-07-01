import React from "react";
import "./AboutMe.css";

const AboutMe = ({ content, isArabic = false }) => {
  return (
    <section
      className={`about-me content-below-fold ${isArabic ? "about-me-ar" : ""}`}
      aria-labelledby="about-title"
    >
      <div className="about-me-content">
        <h2 id="about-title">{content.title}</h2>
        {content.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
