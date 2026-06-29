import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./IUTechPartner.css";

const IUTechPartner = ({ content, isArabic = false, isHomepage = false }) => {
  return (
    <section className={`iutech-partner ${isArabic ? "iutech-partner-ar" : ""} ${isHomepage ? "iutech-partner-home" : ""}`}>
      <div className="iutech-partner-inner">
        <div className="iutech-partner-header">
          <span className="iutech-badge">{content.badge}</span>
          <h2>{content.pageTitle}</h2>
          <p className="iutech-company-name">{content.companyName}</p>
        </div>

        <div className="iutech-partner-intro">
          {content.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="iutech-pillars">
          {content.pillars.map((pillar, index) => (
            <motion.div
              className="iutech-pillar"
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <span className="iutech-pillar-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="iutech-products">
          <h3>{content.productsTitle}</h3>
          <div className="iutech-products-grid">
            {content.products.map((product, index) => (
              <motion.div
                className="iutech-product-card"
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

        <div className="iutech-industries">
          <h3>{content.industriesTitle}</h3>
          <ul>
            {content.industries.map((industry) => (
              <li key={industry}>{industry}</li>
            ))}
          </ul>
        </div>

        <div className="iutech-cta">
          <p className="iutech-cta-text">{content.ctaText}</p>
          <div className="iutech-cta-actions">
            <a
              href={content.website}
              target="_blank"
              rel="noopener noreferrer"
              className="iutech-btn iutech-btn-primary"
            >
              {content.websiteLabel}
            </a>
            {isHomepage ? (
              <Link to="/iutech" className="iutech-btn iutech-btn-secondary">
                {content.learnMoreLabel}
              </Link>
            ) : (
              <Link to="/contact" className="iutech-btn iutech-btn-secondary">
                {content.contactLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IUTechPartner;
