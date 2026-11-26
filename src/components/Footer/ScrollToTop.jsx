import React, { useState, useEffect } from "react";
import "./scrollToTop.scss"; // Fichier Sass dédié ou dans ton global

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // S'affiche dès qu'on dépasse 300px (juste après le hero)
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

  // S'il n'est pas visible, on ne rend rien
  if (!isVisible) {
    return null;
  }

  return (
    <button 
      className="scroll-top-fixed-btn" 
      onClick={scrollToTop} 
      aria-label="Scroll to top"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTop;