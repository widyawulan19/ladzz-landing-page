import '../styles/components/Collection.css'
import collection1 from '../assets/collection4.png'
import collection2 from '../assets/collection2.png'
import collection3 from '../assets/collection3.png'

const Collection = () => {
  return (
    <section className="collection" id='collection'>
      <div className="collection-container">

        <div className="collection-header">
            <span className="section-label">Our Collection 2026</span>
            <h2>Featured Collection</h2>
            <p>Discover our most refined silhouettes of the season.</p>
        </div>

        <div className="collection-grid">

          <div className="item large">
            <img src={collection1} alt="Look 1" />
            <div className="item-info">
              <h3>Linen Tailored Dress</h3>
              <span>$320</span>
            </div>
          </div>

          <div className="item">
            <img src={collection2} alt="Look 2" />
            <div className="item-info">
              <h3>Structured Blazer</h3>
              <span>$280</span>
            </div>
          </div>

          <div className="item">
            <img src={collection3} alt="Look 3" />
            <div className="item-info">
              <h3>Silk Evening Top</h3>
              <span>$190</span>
            </div>
          </div>

        </div>

        <div className="collection-footer">
            <a href="#">View Full Collection</a>
        </div>

      </div>
    </section>
  );
}

export default Collection;