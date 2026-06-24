import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";

const Experience = ({ content, isArabic = false }) => {
  return (
    <div className={`experience ${isArabic ? "experience-ar" : ""}`}>
      <h2>{content.pageTitle}</h2>
      {content.items.map((exp, index) => (
        <motion.div
          className="experience-card"
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <h3>{exp.company}</h3>
          <p className="role">{exp.role}</p>
          <p className="duration-location">
            {exp.duration} | {exp.location}
          </p>
          <ul>
            {exp.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
