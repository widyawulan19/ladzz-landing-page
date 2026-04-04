import React, { useEffect } from "react";
import "../styles/components/Consultation.css";
import AOS from 'aos'

 const consultationList = [
  {
    id:1,
    title:'Private Viewing',
    desc:'Enjoy an exclusive evening at our Ladzz flagship, curated specifically for your sartorial preferences.'
  },
  {
    id:2,
    title:'Global Concierge',
    desc:'Seamless delivery and white-glove service to any corner of the globe. Your time is our priority.'
  }
]

const Consultation = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:false
    })
    AOS.refresh();
  },[])


  return (
    <section className="consultation">
      <div className="consultation-content" data-aos='zoom-in'>
         <span>CONSULTATION</span>
        <h2>A Personal Connection</h2>
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
          Book Appointment
        </a>
      </div>
    </section>
  );
};

export default Consultation;
