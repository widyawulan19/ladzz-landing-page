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

        {/* LINKS */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#collection" onClick={() => setMenuOpen(false)}>Collection</a>
          <a href="#investment" onClick={() => setMenuOpen(false)}>Lookbook</a>
          <a
            href="https://wa.me/message/6663KZLPCMINH1"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </a>
        </div>

        {/* HAMBURGER */}
        <div 
          className={`hamburger ${menuOpen ? "open" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* CLOSE ICON */}
        {menuOpen && (
          <div className="close-btn" onClick={() => setMenuOpen(false)}>
            ✕
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
