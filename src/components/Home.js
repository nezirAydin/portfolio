import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

const publicUrl = process.env.PUBLIC_URL;

const Home = ({ content, isArabic }) => {
  return (
    <motion.div
      className={`home ${isArabic ? "home-ar" : ""}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <header className="home-header">
        <motion.picture
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <source srcSet={`${publicUrl}/rabah-logo.webp`} type="image/webp" />
          <img
            src={`${publicUrl}/rabah-logo.png`}
            alt="Rabah-Tech"
            className="home-logo"
            width="585"
            height="132"
            fetchPriority="high"
            decoding="async"
          />
        </motion.picture>
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {content.title}
        </motion.h1>
        {content.subtitle && (
          <motion.p
            className="home-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {content.subtitle}
          </motion.p>
        )}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {content.description}
        </motion.p>
        <div className="home-cta-row">
          <Link to={content.ctaPrimary.path} className="home-cta home-cta-primary">
            {content.ctaPrimary.label}
          </Link>
          <Link to={content.ctaSecondary.path} className="home-cta home-cta-secondary">
            {content.ctaSecondary.label}
          </Link>
        </div>
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
