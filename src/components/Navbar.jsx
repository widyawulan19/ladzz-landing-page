import { useEffect, useState } from "react";
import '../styles/components/Navbar.css'

const Navbar = ()=> {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo">LADZZ BOUTIQUE</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#collection">Collection</a>
          <a href="#investment">Lookbook</a>
          <a  href="https://wa.me/message/6663KZLPCMINH1"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta">
              Shop
          </a>
        </div>

        {/* Hamburger */}
        <div 
          className={`hamburger ${menuOpen ? "open" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;