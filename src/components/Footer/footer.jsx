import React, { useState, useEffect } from "react";
import "./footer.scss";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour détecter le scroll et afficher le bouton après le hero
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer py-3">
      <div className="container d-flex justify-content-between align-items-center flex-wrap gap-3">
        
        <p className="footer-text mb-0">
          © 2026 Malek Kouki. Built with React, Sass & Bootstrap.
        </p>

        {isVisible && (
          <button 
            className="scroll-top-btn" 
            onClick={scrollToTop} 
            aria-label="Scroll to top"
          >
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        )}

      </div>
    </footer>
  );
};

export default Footer;