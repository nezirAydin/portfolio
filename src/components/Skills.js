import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = ({ content, isArabic = false }) => {
  return (
    <motion.div
      className={`skills-page ${isArabic ? "skills-page-ar" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>{content.pageTitle}</h2>
      <div className="skills-container">
        {content.categories.map((category, index) => (
          <div className="skills-category" key={index}>
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
