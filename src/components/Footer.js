import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo and Info */}
          <div className="footer-brand">
            <div className="brand-header">
              <img src="/Airtel.png" alt="Airtel" className="brand-logo" />
              <span className="brand-name">Airtel Intelligence</span>
            </div>
            <p className="brand-description">
              Transform your location strategy with AI-powered insights and comprehensive market intelligence.
            </p>
            <div className="social-links">
              <div className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="icon">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="icon">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div className="footer-section">
            <h3 className="section-title">Platform</h3>
            <ul className="section-links">
              <li><a href="/site-selection" className="link">Site Selection</a></li>
              <li><a href="/market-analysis" className="link">Market Analysis</a></li>
              <li><a href="/demographics" className="link">Demographics</a></li>
              <li><a href="/competition" className="link">Competition</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h3 className="section-title">Company</h3>
            <ul className="section-links">
              <li><a href="/about" className="link">About Us</a></li>
              <li><a href="/privacy" className="link">Privacy Policy</a></li>
              <li><a href="/terms" className="link">Terms of Service</a></li>
              <li><a href="/contact" className="link">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">© 2025 Airtel Intelligence. All rights reserved.</p>
          <p className="powered-by">Powered by Airtel's location intelligence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;