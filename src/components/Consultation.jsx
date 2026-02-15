import React from "react";
import "../styles/components/Consultation.css";

const Consultation = () => {
  return (
    <section className="consultation">
      <div className="consultation-content">
        <h2>Begin Your Couture Journey</h2>
        <p>
          Experience a private consultation where every detail is crafted
          exclusively for you.
        </p>

        <a
          href="https://wa.me/message/6663KZLPCMINH1"
          target="_blank"
          rel="noopener noreferrer"
          className="consultation-btn"
        >
          Book Private Consultation
        </a>
      </div>
    </section>
  );
};

export default Consultation;
