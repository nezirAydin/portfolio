import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  const skills = {
    programmingLanguages: ["C++", "Python", "JavaScript/Node.js"],
    frameworksLibraries: ["React", "Angular", "Flask", "DPDK"],
    databases: ["MongoDB", "PostgreSQL", "Mongoose"],
    operatingSystems: ["Linux", "Red Hat", "Rocky Linux", "Customizing Linux"],
    tools: ["Git", "Jira", "Confluence", "ZeroMQ", "Arduino"],
    domains: [
      "IoT",
      "Full-stack Development",
      "Static Routing Systems",
      "5G Services",
      "Computer Vision",
    ],
  };

  return (
    <motion.div
      className="skills-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Skills & Tools</h2>
      <div className="skills-container">
        {Object.keys(skills).map((category, index) => (
          <div className="skills-category" key={index}>
            <h3>
              {category
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
            </h3>
            <ul>
              {skills[category].map((skill, idx) => (
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
