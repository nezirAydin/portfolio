import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./PartnerSection.css";

const PartnerSection = ({ content, isArabic = false, isHomepage = false }) => {
  const sectionClass = content.themeClass ? `partner-${content.themeClass}` : "";

  return (
    <section
      className={`partner-section ${sectionClass} ${isArabic ? "partner-section-ar" : ""} ${isHomepage ? "partner-section-home" : ""}`}
    >
      <div className="partner-section-inner">
        <div className="partner-section-header">
          <span className="partner-badge">{content.badge}</span>
          <h2>{content.pageTitle}</h2>
          <p className="partner-company-name">{content.companyName}</p>
        </div>

        <div className="partner-section-intro">
          {content.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="partner-pillars">
          {content.pillars.map((pillar, index) => (
            <motion.div
              className="partner-pillar"
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <span className="partner-pillar-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="partner-products">
          <h3>{content.productsTitle}</h3>
          <div className="partner-products-grid">
            {content.products.map((product, index) => (
              <motion.div
                className="partner-product-card"
                key={product.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.35 }}
              >
                <h4>{product.name}</h4>
                <p>{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="partner-industries">
          <h3>{content.industriesTitle}</h3>
          <ul>
            {content.industries.map((industry) => (
              <li key={industry}>{industry}</li>
            ))}
          </ul>
        </div>

        <div className="partner-cta">
          <p className="partner-cta-text">{content.ctaText}</p>
          <div className="partner-cta-actions">
            <a
              href={content.website}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-btn partner-btn-primary"
            >
              {content.websiteLabel}
            </a>
            {isHomepage ? (
              <Link to={content.detailPath} className="partner-btn partner-btn-secondary">
                {content.learnMoreLabel}
              </Link>
            ) : (
              <Link to="/contact" className="partner-btn partner-btn-secondary">
                {content.contactLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
