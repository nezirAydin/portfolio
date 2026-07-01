import React from "react";
import { WHATSAPP_NUMBER, CONTACT_INFO } from "../config/contact";
import "./ContactMe.css";

const ContactMe = ({ content, isArabic = false }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(content.whatsappMessage);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className={`contact-page page-enter ${isArabic ? "contact-page-ar" : ""}`}>
      <h1>{content.pageTitle}</h1>
      <p className="contact-subtitle">{content.subtitle}</p>

      <div className="contact-grid" role="list">
        <div className="contact-card" role="listitem">
          <div className="contact-icon email-icon" aria-hidden="true">
            ✉️
          </div>
          <h2>{content.cards.email.title}</h2>
          <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
        </div>

        <button
          type="button"
          className="contact-card contact-card-button"
          onClick={handleWhatsAppClick}
          aria-label={content.cards.whatsapp.action}
        >
          <div className="contact-icon whatsapp-icon" aria-hidden="true">
            💬
          </div>
          <h2>{content.cards.whatsapp.title}</h2>
          <span>{content.cards.whatsapp.action}</span>
        </button>

        <div className="contact-card" role="listitem">
          <div className="contact-icon linkedin-icon" aria-hidden="true">
            💼
          </div>
          <h2>{content.cards.linkedin.title}</h2>
          <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer">
            {content.cards.linkedin.action}
          </a>
        </div>

        <div className="contact-card" role="listitem">
          <div className="contact-icon github-icon" aria-hidden="true">
            🔗
          </div>
          <h2>{content.cards.github.title}</h2>
          <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer">
            {content.cards.github.action}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
