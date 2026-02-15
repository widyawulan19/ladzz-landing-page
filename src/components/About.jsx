import '../styles/components/About.css'
import aboutPhoto from '../assets/about2.png'

const About = () => {
  return (
    <section className="about" id='about'>
      <div className="about-container">
        
        <div className="about-image">
          <img src={aboutPhoto} alt="Boutique craftsmanship" />
        </div>

        <div className="about-content">
          <h2>Crafted with Intention</h2>
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