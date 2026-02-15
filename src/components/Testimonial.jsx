import '../styles/components/Testimonial.css'

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial-container">
        <span className="section-label">Client Words</span>

        <blockquote>
          “Every piece feels intentionally crafted. The quality,
          the silhouette, the experience — it all speaks of refined elegance.”
        </blockquote>

        <div className="testimonial-author">
          <h4>Amelia Laurent</h4>
          <p>Paris, France</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;