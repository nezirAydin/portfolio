import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = ({ content, isArabic }) => {
  return (
    <motion.div
      className={`home ${isArabic ? "home-ar" : ""}`}
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
          {content.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {content.description}
        </motion.p>
        <div className="home-highlights">
          {content.highlights.map((highlight, index) => (
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
