import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";

const AboutMe = ({ content, isArabic = false }) => {
  return (
    <motion.section
      className={`about-me ${isArabic ? "about-me-ar" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="about-me-content">
        <h2>{content.title}</h2>
        {content.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </motion.section>
  );
};

export default AboutMe;
