import { useNavigate } from 'react-router-dom'
import '../styles/components/Hero.css'
import { useEffect, useState } from 'react';
import AOS from 'aos'

const Hero=()=> {
  const navigate = useNavigate();

  const handleClick = () =>{
      console.log('button hero berhasil diklik!')
      navigate('/collection')
  }

  const goToCatalog = () =>{
    navigate('/catalog')
  }

    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    //ANIMATE
    useEffect(()=>{
      AOS.init({
        duration:1000,
        once:false,
        mirror:true
      })
      AOS.refresh()
    },[]);
  




  return (
    <section className="hero" id='section'>
        <div className="hero-container">
            <div className="hero-content" data-aos='fade-up'>
                <h1 data-aos='fade-up'>Where Elegance Becomes Personal</h1>
                <p data-aos='fade-up'> Designed for women who appreciate subtle luxury, LADZZ Boutique brings together refined silhouettes and timeless artistry.
                </p>
                <button onClick={goToCatalog} className="btn-primary">
                  <a> View Our Collection</a>
                </button>

                {/* <button className="btn-primary">
                  <a href="#collection"> View Our Collection</a>
                </button> */}
            </div>
      </div>
    </section>
  );
}

export default Hero;