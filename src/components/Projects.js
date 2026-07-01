import React from "react";
import Reveal from "./Reveal";
import "./Projects.css";

const Projects = ({ content, isHomepage = false, isArabic = false }) => {
  const recentWorks = content.featuredProjects;
  const projects = content.supportingProjects;
  const titleId = "projects-title";

  return (
    <section
      className={`projects content-below-fold ${isHomepage ? "projects-homepage" : ""} ${isArabic ? "projects-ar" : ""}`}
      aria-labelledby={titleId}
    >
      <h2 id={titleId}>{isHomepage ? content.homepageTitle : content.pageTitle}</h2>
      <p className="projects-intro">{content.intro}</p>

      <div className="recent-works-section">
        <h3 className="section-title">{content.featuredTitle}</h3>
        <div className="projects-grid">
          {recentWorks.map((project, index) => (
            <Reveal
              as="article"
              className={`project-card ${project.featured ? "featured" : ""}`}
              key={project.name}
              delay={index * 60}
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
            </Reveal>
          ))}
        </div>
      </div>

      <div className="other-projects-section">
        <h3 className="section-title">{content.supportingTitle}</h3>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal
              as="article"
              className="project-card"
              key={project.name}
              delay={index * 50}
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
