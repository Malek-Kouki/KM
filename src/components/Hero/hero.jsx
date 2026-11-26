import React from "react";
import "./hero.scss";
import profileImg from "../../assets/about.jpg";
import cv from "../../assets/CV-Malek-Kouki.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero-section">
          <div className="intro" data-aos="fade-right">
            <div className="availability-badge">
              <span className="dot"></span>
              <div className="text-badge">Available for new opportunities & freelance projects</div>
            </div>
            <h1>
              Hello, I'm <br />
              <span>Malek Kouki</span>
            </h1>
            <h2>Front-End Developer & QA Tester</h2>
            <div className="skills-tags">
              <button className="tag">✨ WordPress</button>
              <button className="tag">✨ QA / Selenium</button>
              <button className="tag">✨ Postman API</button>
              <button className="tag">✨ HTML / CSS / JS</button>
            </div>
            <p>
              Welcome to my portfolio! I build modern, responsive, and accessible web applications while designing robust automated E2E testing environments (Selenium, Java, Cucumber, Jenkins). I combine front-end precision with rigorous quality assurance to deliver smooth, high-performance digital experiences.
            </p>
            <div className="hero-action">
              <div className="bloc-btn">
                <AnchorLink
                  href="#contact"
                  className="btn"
                  onClick={() => setShowMenu(false)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                  Contact Me
                </AnchorLink>

                <a href={cv} download="Malek-Kouki-CV.pdf" className="cv">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>

           <div className="profile-card" data-aos="fade-left">
            <div className="img-container">
              <img src={profileImg} alt="profileImg" className="profileImg" />
            </div>
            <h3>Malek Kouki</h3>
            <p className="location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Based in Tunisia
            </p>
            <div className="card-footer-info">
              <div className="info-box">
                <span className="info-title">Specialty</span>
                <span className="info-value">Front-End & QA</span>
              </div>
              <div className="info-box">
                <span className="info-title">Status</span>
                <span className="info-value status-available">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
