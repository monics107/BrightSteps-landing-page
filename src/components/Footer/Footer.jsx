import React, { forwardRef } from "react";
import "./Footer.css";

const Footer = forwardRef((props, ref) => {
  return (
    <footer className="footer" ref={ref}>
       <div className="footer-section">
        <h4>Brand & Intro</h4>
        <p><strong>Bright Steps</strong><br />your trusted partner in school management.</p>
        <div className="social-icons">
          <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png" alt="Instagram" /></a>
          <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png" alt="LinkedIn" /></a>
        </div>
      </div>

      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Support</h4>
        <ul>
          <li>FAQs</li>
          <li>Help Center</li>
          <li>Request</li>
          <li>Demo</li>
          <li>Terms</li>
          <li>Privacy & Policy</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact Info</h4>
        <p>No.XX, Street Name,<br />City<br />
          support@brightsteps.com<br />
          +91-12345-67890
        </p>
      </div>
    </footer>
  );
});

export default Footer;