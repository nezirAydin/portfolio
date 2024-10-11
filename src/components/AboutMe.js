import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";
import profilePic from "../assets/WhatsApp Image 2024-09-15 at 14.36.26_12fa933c.jpg";

const AboutMe = () => {
  return (
    <motion.div
      className="about-me"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-me-content">
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm Nezir Aydın, a software engineer with over 3 years of
            experience in developing high-performance solutions using C++,
            Python, and Node.js. My expertise spans from building efficient
            static routing systems for 5G services to creating full-stack web
            applications with frameworks like React and Angular.
          </p>
          <p>
            I have a strong passion for learning and solving complex engineering
            challenges, especially in low-level systems. I am always looking for
            opportunities to apply my skills in a dynamic and growth-oriented
            environment. My journey in the tech industry has equipped me with a
            problem-solving mindset, allowing me to thrive in fast-paced
            environments.
          </p>
          <p>
            Beyond coding, I enjoy reading books about productivity and
            startups, and I'm always eager to embrace new challenges and grow as
            a professional. Let's connect and explore what we can build
            together!
          </p>
        </div>
        <div className="about-me-image">
          <img src={profilePic} alt="Nezir Aydın" />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
