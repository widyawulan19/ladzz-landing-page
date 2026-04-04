import '../styles/components/Lookbook.css'
import lb1 from '../assets/lb2.jpeg'
import { useEffect, useState } from 'react';
import AOS from 'aos'

const Lookbook=()=> {

    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

      useEffect(()=>{
        AOS.init({
          duration:1000,
          once:false
        })
        AOS.refresh();
      },[])
    

  return (
    <section className="lookbook" id='lookbook'>
      <div className="lookbook-container">

        <div className="lookbook-image" data-aos='zoom-in'>
          <img src={lb1} alt="Editorial Look"/>
        </div>

        <div className="lookbook-content" data-aos='fade-up'>
          <span className="section-label light">Editorial</span>
          <h2>The Art of Refined Silhouettes</h2>
          <p>
            Inspired by timeless femininity and modern confidence,
            our latest editorial captures understated elegance
            in its purest form.
          </p>
          <button 
            className="btn-outline"
            onClick={() => {
              document.getElementById("investment")?.scrollIntoView({ 
                behavior: "smooth" 
              });
            }}
          >
            View Lookbook
          </button>
        </div>

      </div>
    </section>
  );
}


export default Lookbook;