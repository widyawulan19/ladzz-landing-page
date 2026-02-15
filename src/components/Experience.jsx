import '../styles/components/Experience.css'

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience-container">

        <div className="experience-header">
          <span className="section-label">Our Process</span>
          <h2>The Experience</h2>
          <p>
            Every gown is created through a thoughtful and intimate process,
            designed to reflect your individuality and story.
          </p>
        </div>

        <div className="experience-steps">

          <div className="step">
            <span className="step-number">01</span>
            <h3>Private Consultation</h3>
            <p>
              A personal session to understand your vision, preferences,
              and the story behind your special moment.
            </p>
          </div>

          <div className="step">
            <span className="step-number">02</span>
            <h3>Design & Craft</h3>
            <p>
              Each piece is carefully designed and crafted by hand,
              focusing on silhouette, fabric, and fine detailing.
            </p>
          </div>

          <div className="step">
            <span className="step-number">03</span>
            <h3>Personal Fitting</h3>
            <p>
              Multiple fittings ensure a flawless fit that feels
              comfortable, confident, and effortless.
            </p>
          </div>

          <div className="step">
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