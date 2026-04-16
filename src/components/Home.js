import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  const highlights = [
    "Specialized in high-performance systems, Linux engineering, and AI infrastructure.",
    "Able to deliver end-to-end products, from kernel-adjacent work to production-ready web applications.",
    "Master's-level engineering background with a focus on solving expensive technical problems.",
  ];

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <header className="home-header">
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Software Engineer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I specialize in high-performance systems and AI infrastructure, with a
          proven track record of delivering scalable full-stack solutions. My
          work spans Linux platforms, governance-aware AI systems, backend
          architecture, and customer-facing applications.
        </motion.p>
        <div className="home-highlights">
          {highlights.map((highlight, index) => (
            <motion.div
              className="home-highlight"
              key={highlight}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.15, duration: 0.5 }}
            >
              {highlight}
            </motion.div>
          ))}
        </div>
      </header>
    </motion.div>
  );
};

export default Home;
