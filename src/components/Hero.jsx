import { useNavigate } from 'react-router-dom'
import '../styles/components/Hero.css'
import { useEffect, useState } from 'react';

const Hero=()=> {
  const navigate = useNavigate();

  const handleClick = () =>{
      console.log('button hero berhasil diklik!')
      navigate('/collection')
  }

    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  




  return (
    <section className="hero" id='section'>
        <div className="hero-container">
            <div className="hero-content">
                <h1>Timeless Elegance</h1>
                <p>Crafted for women who embody quiet confidence.</p>
                <button className="btn-primary">
                  <a href="#collection"> Explore Collection</a>
                </button>
                {/* <button className="btn-primary" onClick={handleClick}>Explore Collection</button> */}
            </div>
      </div>
    </section>
  );
}

export default Hero;