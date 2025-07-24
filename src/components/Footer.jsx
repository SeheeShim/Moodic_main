import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="newsletter">
          <form className="newsletter-form">
            <div className="newsletter-header">
              <span className="label">Moodic Newsletter</span>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="submit-button">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.33594 12.9987H23.0026M13.0026 1.33203L24.6693 12.9987L13.0026 24.6654"
                      stroke="#fff"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
        <img src="/img/Moodic_Logo_P-03.png" alt="Moodic Logo" className="footer-icon" />
        <div className="footer-bottom">
          <div className="divider"></div>
          <div className="footer-text">
            <span>© 2025 Moodic. Created with love & music.</span>
            <span>by Moodic Team • Powered by React</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
