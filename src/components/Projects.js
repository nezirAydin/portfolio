import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = ({ content, isHomepage = false, isArabic = false }) => {
  const recentWorks = content.featuredProjects;
  const projects = content.supportingProjects;

  return (
    <div className={`projects ${isHomepage ? "projects-homepage" : ""} ${isArabic ? "projects-ar" : ""}`}>
      <h2>{isHomepage ? content.homepageTitle : content.pageTitle}</h2>
      <p className="projects-intro">{content.intro}</p>
      
      <div className="recent-works-section">
        <h3 className="section-title">{content.featuredTitle}</h3>
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
              {project.featured && <span className="featured-badge">{content.featuredBadge}</span>}
              <div className="project-type">{project.type}</div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary"
                  >
                    {content.liveLinkLabel}
                  </a>
                )}
                {project.websiteLink && (
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary"
                  >
                    {content.websiteLinkLabel}
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {content.githubLinkLabel}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="other-projects-section">
        <h3 className="section-title">{content.supportingTitle}</h3>
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
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary"
                  >
                    {content.liveLinkLabel}
                  </a>
                )}
                {project.websiteLink && (
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary"
                  >
                    {content.websiteLinkLabel}
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {content.githubLinkLabel}
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
