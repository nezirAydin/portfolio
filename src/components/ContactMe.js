import React from "react";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER, CONTACT_INFO } from "../config/contact";
import "./ContactMe.css";

const ContactMe = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'd like to connect with you.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Get In Touch</h2>
      <p className="contact-subtitle">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>
      
      <div className="contact-grid">
        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="contact-icon email-icon">✉️</div>
          <h3>Email</h3>
          <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
        </motion.div>

        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsAppClick}
        >
          <div className="contact-icon whatsapp-icon">💬</div>
          <h3>WhatsApp</h3>
          <span>Chat with me</span>
        </motion.div>

        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="contact-icon linkedin-icon">💼</div>
          <h3>LinkedIn</h3>
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </motion.div>

        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="contact-icon github-icon">🔗</div>
          <h3>GitHub</h3>
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
