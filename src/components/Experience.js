import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "Karel Electronics",
      role: "Design Software Engineer",
      duration: "May 2022 – July 2024",
      location: "Ankara, TR",
      description: [
        "Developed and maintained high-performance software solutions for static routing, load balancing, and 5G services (UPF, AMF, SMSF) using C++, Node.js, and Python.",
        "Achieved packet processing efficiency with speeds of up to 200 Gbps through the use of DPDK and PcapPlus libraries.",
        "Led the development of full-stack applications using ZeroMQ, Redis, Mongoose, and PostgreSQL with React/Angular for frontend.",
        "Customized a Linux kernel image for admin OS, improving system performance and security.",
      ],
    },
    {
      company: "Re:Coded (bootcamp)",
      role: "Backend Engineer",
      duration: "Mar 2023 – Aug 2023",
      location: "Remote",
      description: [
        "Developed a backend application called Localeats using Node.js and Mongoose.",
        "Collaborated with frontend developers to implement the UI using React and designed the user experience with Figma.",
        "Successfully deployed the application, enhancing user experience in food discovery.",
      ],
    },
    {
      company: "Medpointr",
      role: "Software Engineer - Computer Vision",
      duration: "Nov 2021 – Apr 2022",
      location: "Ankara, TR",
      description: [
        "Worked on designing prototypes and improving code using Qt and C++.",
        "Enhanced the functionality and performance of computer vision systems, contributing to healthcare technology.",
      ],
    },
    {
      company: "Besmak",
      role: "Mechatronics Engineer",
      duration: "Jun 2018 – Feb 2020",
      location: "Ankara, TR",
      description: [
        "Designed machines testing machines (fatigue grips, electromechanical machines, bending test machines,...) using Solidworks and Auto-cad.",
        "Designed hydraulics cylinders and schematic drawings.",
      ],
    },
    {
      company: "ABC Koleji",
      role: "English Teacher",
      duration: "Feb 2015 – May 2020",
      location: "Ankara, TR",
      description: ["Tought English language Level A1-A2"],
    },
  ];

  return (
    <div className="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <motion.div
          className="experience-card"
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <div className="experience-card" key={index}>
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
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
