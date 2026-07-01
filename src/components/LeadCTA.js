import React from "react";
import { Link } from "react-router-dom";
import { WHATSAPP_NUMBER } from "../config/contact";
import Reveal from "./Reveal";
import "./LeadCTA.css";

const LeadCTA = ({ content, isArabic }) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    content.whatsappMessage
  )}`;

  return (
    <Reveal as="section" className={`lead-cta ${isArabic ? "lead-cta-ar" : ""}`}>
      <div className="lead-cta-inner">
        <h2 id="lead-cta-title">{content.title}</h2>
        <p>{content.description}</p>
        <div className="lead-cta-actions">
          <Link to={content.contactPath} className="lead-cta-btn lead-cta-btn-primary">
            {content.contactLabel}
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="lead-cta-btn lead-cta-btn-secondary"
          >
            {content.whatsappLabel}
          </a>
        </div>
      </div>
    </Reveal>
  );
};

export default LeadCTA;
