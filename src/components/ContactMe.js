import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <p>
        Email:{" "}
        <a href="mailto:nezir.aydin94@gmail.com">nezir.aydin94@gmail.com</a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/nezir-ayd%C4%B1n-363364b5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/nazero3"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/nazero3
        </a>
      </p>
    </div>
  );
};

export default ContactMe;
