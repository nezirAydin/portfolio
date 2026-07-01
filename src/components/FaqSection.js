import React from "react";
import Reveal from "./Reveal";
import "./FaqSection.css";

const FaqSection = ({ content, isArabic }) => {
  return (
    <section
      className={`faq-section content-below-fold ${isArabic ? "faq-section-ar" : ""}`}
      aria-labelledby="faq-title"
    >
      <h2 id="faq-title">{content.title}</h2>
      <div className="faq-list">
        {content.items.map((item) => (
          <Reveal as="details" className="faq-item" key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
