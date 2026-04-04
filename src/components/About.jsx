import '../styles/components/About.css'
import aboutPhoto from '../assets/about2.png'
import AOS from 'aos';
import { useEffect } from 'react';

const About = () => {

  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:false
    })
    AOS.refresh()
  },[])


  return (
    <section className="about" id='about'>
      <div className="about-container">
        
        <div className="about-image" data-aos='fade-up'>
          <img src={aboutPhoto} alt="Boutique craftsmanship" />
        </div>

        <div className="about-content" data-aos='fade-up'>
          <h3>ABOUT</h3>
          <h2 
            className="highlight-text"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Crafted with Intention
          </h2>
          <p>
            We believe true elegance lives in simplicity. Every piece is
            thoughtfully designed to celebrate quiet confidence, refined
            craftsmanship, and timeless femininity.
          </p>
          <p>
            Our collections are created in limited quantities, ensuring each
            garment remains exclusive and enduring.
          </p>
        </div>

      </div>
    </section>
  );
}


export default About;