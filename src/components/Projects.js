import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const recentWorks = [
    {
      name: "Mehdi Groups",
      description:
        "A professional business website for Mehdi Groups, showcasing services and corporate information. Built with modern web technologies to provide an exceptional user experience.",
      websiteLink: "https://mehdigroups.com",
      type: "Website",
      featured: true,
    },
    {
      name: "EU4Less Mobile Application",
      description:
        "A comprehensive mobile application designed for seamless user experience. Features modern UI/UX design with cross-platform compatibility for iOS and Android devices.",
      type: "Mobile App",
      featured: true,
    },
  ];

  const projects = [
    {
      name: "Localeats",
      description:
        "A backend application using Node.js and Mongoose, improving user experience in food discovery. Developed during the Re:Coded bootcamp in collaboration with frontend developers using React.",
      githubLink: "https://github.com/nazero3/Localeats",
      type: "Web App",
    },
    {
      name: "Airline Reservation System",
      description:
        "A system designed for managing flight bookings, using C++ for the core logic. It offers features like seat reservations, cancellations, and customer management.",
      githubLink: "https://github.com/nazero3/Airline-reservation-system.git",
      type: "Desktop App",
    },
    {
      name: "EyElavation",
      description:
        "A computer vision project focused on enhancing image processing and recognition capabilities. Developed using Python and OpenCV.",
      githubLink: "https://github.com/nazero3/EyElavation.git",
      type: "Computer Vision",
    },
    {
      name: "LuggPicker",
      description:
        "A web service that helps travelers with luggage management, using React for the frontend and Node.js for the backend. It streamlines the process of luggage pickup from homes or hotels.",
      githubLink: "https://github.com/nazero3/LuggPicker.git",
      type: "Web App",
    },
    {
      name: "Investment App",
      description:
        "A frontend project built with React, designed to help users manage their investment portfolios with a user-friendly interface.",
      githubLink: "https://github.com/nazero3/investment-app.git",
      type: "Web App",
    },
  ];

  return (
    <div className="projects">
      <h2>My Work</h2>
      
      <div className="recent-works-section">
        <h3 className="section-title">Recent Works</h3>
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
              {project.featured && <span className="featured-badge">Recent</span>}
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
        <h3 className="section-title">Other Projects</h3>
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
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
