import React from "react";
import "./Experience.css";
import Reveal from "./Reveal";

const Experience = ({ content, isArabic = false }) => {
  return (
    <div className={`experience page-enter ${isArabic ? "experience-ar" : ""}`}>
      <h1>{content.pageTitle}</h1>
      {content.items.map((exp, index) => (
        <Reveal as="article" className="experience-card" key={exp.company} delay={index * 60}>
          <h2>{exp.company}</h2>
          <p className="role">{exp.role}</p>
          <p className="duration-location">
            {exp.duration} | {exp.location}
          </p>
          <ul>
            {exp.description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
};

export default Experience;
