import React from "react";
import "./Skills.css";

const Skills = ({ content, isArabic = false }) => {
  return (
    <div className={`skills-page page-enter ${isArabic ? "skills-page-ar" : ""}`}>
      <h1>{content.pageTitle}</h1>
      <div className="skills-container">
        {content.categories.map((category, index) => (
          <section className="skills-category" key={category.title} aria-labelledby={`skill-cat-${index}`}>
            <h2 id={`skill-cat-${index}`}>{category.title}</h2>
            <ul>
              {category.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Skills;
