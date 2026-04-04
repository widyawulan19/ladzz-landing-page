import { useEffect } from 'react';
import '../styles/components/Experience.css'
import AOS from 'aos'

const Experience = () => {


  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:false
    })
    AOS.refresh();
  },[])

  return (
    <section className="experience">
      <div className="experience-container">

        <div className="experience-header" data-aos='fade-up'>
          <span className="section-label">Our Process</span>
          <h2>The Experience</h2>
          <p>
            Every gown is created through a thoughtful and intimate process,
            designed to reflect your individuality and story.
          </p>
        </div>

        <div className="experience-steps">

          <div className="step" data-aos='fade-up' data-aos-delay='0'>
            <span className="step-number">01</span>
            <h3>Private Consultation</h3>
            <p>
              A personal session to understand your vision, preferences,
              and the story behind your special moment.
            </p>
          </div>

          <div className="step" data-aos='fade-up' data-aos-delay='300'>
            <span className="step-number">02</span>
            <h3>Design & Craft</h3>
            <p>
              Each piece is carefully designed and crafted by hand,
              focusing on silhouette, fabric, and fine detailing.
            </p>
          </div>

          <div className="step" data-aos='fade-up' data-aos-delay='600'>
            <span className="step-number">03</span>
            <h3>Personal Fitting</h3>
            <p>
              Multiple fittings ensure a flawless fit that feels
              comfortable, confident, and effortless.
            </p>
          </div>

          <div className="step" data-aos='fade-up' data-aos-delay='900'>
            <span className="step-number">04</span>
            <h3>Final Touch</h3>
            <p>
              Final refinements and finishing touches to perfect
              every detail before your special day.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;