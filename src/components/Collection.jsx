import '../styles/components/Collection.css'
import collection1 from '../assets/collection4.png'
import collection2 from '../assets/collection2.png'
import collection3 from '../assets/collection3.png'

import coll1 from '../assets/collection/coll1.png'
import coll2 from '../assets/collection/coll2.png'
import coll3 from '../assets/collection/coll3.png'
import coll4 from '../assets/collection/coll4.png'
import coll5 from '../assets/collection/coll5.png'
import coll6 from '../assets/collection/coll6.png'
import coll7 from '../assets/collection/coll7.png'




import AOS from 'aos'
import { useEffect } from 'react'


const Collection = () => {

  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true,
      easing: "ease-out-cubic"
    })
    AOS.refresh();
  },[])

  return (
    <section className="collection" id='collection'>
      <div className="collection-container">

        <div className="collection-header">
            <span className="section-label" data-aos='fade-up' data-aos-delay='0'>Our Collection 2026</span>
            <h2 data-aos='fade-up' data-aos-delay='200'>Featured Collection</h2>
            <p data-aos='fade-up' data-aos-delay='400'>Discover our most refined silhouettes of the season.</p>
        </div>

        <div className="collection-grid-box">
          <div className="grid-left">

            <div className="left-up">
              <img src={coll1} alt="" data-aos="fade-up" data-aos-delay="0"/>
              <img src={coll3} alt="" data-aos="fade-up" data-aos-delay="100"/>
              <img src={coll2} alt="" data-aos="fade-up" data-aos-delay="200"/>
            </div>

            <div className="left-bottom">
              <img src={coll4} alt="" data-aos="fade-right" data-aos-delay="300"/>
            </div>

          </div>

          <div className="grid-right">

            <div className="right-up">
              <img src={coll7} alt="" data-aos="fade-left" data-aos-delay="200"/>
            </div>

            <div className="right-bottom">
              <img src={coll5} alt="" data-aos="fade-up" data-aos-delay="300"/>
              <img src={coll6} alt="" data-aos="fade-up" data-aos-delay="400"/>
            </div>

          </div>

        </div>

        <div className="collection-footer" data-aos='fade-up'>
            <a href="#">View Full Collection</a>
        </div>

      </div>
    </section>
  );
}

export default Collection;