import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = ({ isHomepage = false }) => {
  const recentWorks = [
    {
      name: "LLM Gateway with Governance Engine",
      description:
        "Designed an AI gateway focused on policy enforcement, secure model access, and operational control. This project highlights AI infrastructure thinking around governance, reliability, and enterprise readiness.",
      type: "AI Infrastructure",
      featured: true,
    },
    {
      name: "Linux Driver and Kernel Workflow Lab",
      description:
        "Deep work around Ubuntu, NVIDIA drivers, kernel modules, and platform-specific configuration on performance hardware. It demonstrates practical low-level debugging and systems integration beyond typical application engineering.",
      type: "Low-Level Systems",
      featured: true,
    },
    {
      name: "Predictive Customer Insights Platform",
      description:
        "Built a data-driven product around customer segmentation, churn-risk modeling, and behavioral analysis. The focus is business impact: helping teams act earlier on retention and growth signals.",
      type: "Applied AI",
      featured: true,
    },
  ];

  const projects = [
    {
      name: "DJI Drone GPS and ATTI Control Work",
      description:
        "Hardware-aware control work involving drone behavior, GPS state handling, and ATTI-related experimentation. It shows the ability to bridge software logic with real-world embedded and physical systems.",
      type: "Hardware Lab",
    },
    {
      name: "Scalable Mobile Infrastructure",
      description:
        "Professional engineering work on backend and platform capabilities supporting mobile experiences at scale. Positioned as infrastructure and systems architecture rather than generic app development.",
      type: "Systems Architecture",
    },
    {
      name: "5G Static Routing Systems",
      description:
        "Implemented performance-sensitive routing and service logic in telecom-oriented environments. This work reflects strong backend fundamentals in latency-aware and reliability-focused systems.",
      type: "Network Systems",
    },
    {
      name: "Computer Vision Research Projects",
      description:
        "Explored image processing and vision workflows using Python-based tooling. These projects complement systems work with practical ML and perception experience.",
      githubLink: "https://github.com/nazero3/EyElavation.git",
      type: "Computer Vision",
    },
    {
      name: "Localeats",
      description:
        "A collaborative product project covering backend development, APIs, and platform functionality for food discovery. Useful as supporting evidence of full-stack delivery, while the portfolio now emphasizes deeper systems work first.",
      githubLink: "https://github.com/nazero3/Localeats",
      type: "Web App",
    },
  ];

  return (
    <div className={`projects ${isHomepage ? "projects-homepage" : ""}`}>
      <h2>{isHomepage ? "Featured Projects" : "My Work"}</h2>
      <p className="projects-intro">
        Selected work that reflects low-level engineering depth, AI governance,
        and solution design for real operational problems.
      </p>
      
      <div className="recent-works-section">
        <h3 className="section-title">Heavy Hitters</h3>
        <div className="projects-grid">
          {recentWorks.map((project, index) => (
            <motion.div
              className={`project-card ${project.featured ? "featured" : ""}`}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {project.featured && <span className="featured-badge">Featured</span>}
              <div className="project-type">{project.type}</div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.websiteLink && (
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="other-projects-section">
        <h3 className="section-title">Supporting Experience</h3>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + recentWorks.length) * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="project-type">{project.type}</div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
