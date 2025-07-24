// moodic/src/components/Hero.jsx
import {  } from "react-router-dom";
import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="hero" className="hero-section" style={{ backgroundColor: '#f47a4b', color: '#78AAFF' }}>
      <div className="video-hero">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
          /* poster="/img/123(14).jpg" */
        >
          <source src="/video/ILLIT_DoTheDance.mp4" type="video/mp4" />
          
        </video>

        <div className="main-container">
          <div className="master-hero-section">
            <div className="logo-wrap-hero">
              <img src="/img/Moodic_Logo_P-03.svg" alt="Moodic Logo" className="logo-hero" />
            </div>

            <div className="bottom-tile-hero">
              <div className="byq-logo">
                <div className="icon-sparkle">✨</div>
                <div className="label">Moodic Studio</div>
              </div>

              <div className="text-wrap-hero-middle">
                <div className="label hero-animated">
                  A playground where animation meets curiosity.<br />
                  Built on GSAP. Designed by Moodic.
                </div>
              </div>

              <div className="right-hero-year">
                <div className="label">2025</div>
                <div className="icon-sparkle">🌟</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
