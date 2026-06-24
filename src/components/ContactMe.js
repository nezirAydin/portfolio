import React from "react";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER, CONTACT_INFO } from "../config/contact";
import "./ContactMe.css";

const ContactMe = ({ content, isArabic = false }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(content.whatsappMessage);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <motion.div
      className={`contact-page ${isArabic ? "contact-page-ar" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>{content.pageTitle}</h2>
      <p className="contact-subtitle">{content.subtitle}</p>

      <div className="contact-grid">
        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="contact-icon email-icon">✉️</div>
          <h3>{content.cards.email.title}</h3>
          <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
        </motion.div>

        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsAppClick}
        >
          <div className="contact-icon whatsapp-icon">💬</div>
          <h3>{content.cards.whatsapp.title}</h3>
          <span>{content.cards.whatsapp.action}</span>
        </motion.div>

        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="contact-icon linkedin-icon">💼</div>
          <h3>{content.cards.linkedin.title}</h3>
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.cards.linkedin.action}
          </a>
        </motion.div>

        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="contact-icon github-icon">🔗</div>
          <h3>{content.cards.github.title}</h3>
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.cards.github.action}
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
