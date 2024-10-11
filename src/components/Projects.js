import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      name: "Localeats",
      description:
        "A backend application using Node.js and Mongoose, improving user experience in food discovery. Developed during the Re:Coded bootcamp in collaboration with frontend developers using React.",
      githubLink: "https://github.com/nazero3/Localeats",
    },
    {
      name: "Airline Reservation System",
      description:
        "A system designed for managing flight bookings, using C++ for the core logic. It offers features like seat reservations, cancellations, and customer management.",
      githubLink: "https://github.com/nazero3/Airline-reservation-system.git",
    },
    {
      name: "EyElavation",
      description:
        "A computer vision project focused on enhancing image processing and recognition capabilities. Developed using Python and OpenCV.",
      githubLink: "https://github.com/nazero3/EyElavation.git",
    },
    {
      name: "LuggPicker",
      description:
        "A web service that helps travelers with luggage management, using React for the frontend and Node.js for the backend. It streamlines the process of luggage pickup from homes or hotels.",
      githubLink: "https://github.com/nazero3/LuggPicker.git",
    },
    {
      name: "Investment App",
      description:
        "A frontend project built with React, designed to help users manage their investment portfolios with a user-friendly interface.",
      githubLink: "https://github.com/nazero3/investment-app.git",
    },
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
