import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";
import profilePic from "../assets/WhatsApp Image 2024-09-15 at 14.36.26_12fa933c.jpg";

const AboutMe = ({ content, isArabic = false }) => {
  return (
    <motion.div
      className={`about-me ${isArabic ? "about-me-ar" : ""}`}
      initial={{ opacity: 0, x: isArabic ? 100 : -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-me-content">
        <div className="about-me-text">
          <h2>{content.title}</h2>
          {content.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="about-me-image">
          <img src={profilePic} alt={content.imageAlt} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
