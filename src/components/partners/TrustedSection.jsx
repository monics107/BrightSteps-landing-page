
import React from 'react';
import './TrustedSection.css';

const TrustedSection = () => {
  return (
    <div className="trusted-container">
      <div className="logos">
        <div className="logos-inner">
          <img src={`${import.meta.env.BASE_URL}logos/logo1.png`} alt="Logo 1" />
          <img src={`${import.meta.env.BASE_URL}logos/logo2.png`} alt="Logo 2" />
          <img src={`${import.meta.env.BASE_URL}logos/logo3.png`} alt="Logo 3" />
          <img src={`${import.meta.env.BASE_URL}logos/logo4.png`} alt="Logo 4" />
          <img src={`${import.meta.env.BASE_URL}logos/logo5.png`} alt="Logo 5" />

          {/* Duplicate logos for scrolling */}
          <img src={`${import.meta.env.BASE_URL}logos/logo1.png`} alt="Logo 1" />
          <img src={`${import.meta.env.BASE_URL}logos/logo2.png`} alt="Logo 2" />
          <img src={`${import.meta.env.BASE_URL}logos/logo3.png`} alt="Logo 3" />
          <img src={`${import.meta.env.BASE_URL}logos/logo4.png`} alt="Logo 4" />
          <img src={`${import.meta.env.BASE_URL}logos/logo5.png`} alt="Logo 5" />
        </div>
      </div>

      <h2 className="trusted-heading">
        India’s <span className="highlight">Most Trusted</span> School Management Software
      </h2>

      <div className="stats-grid">
        <div className="stat-card">
          <img src={`${import.meta.env.BASE_URL}logo6.png`} alt="Logo 6" />
          <h3>23+</h3>
          <p>Years Legacy</p>
        </div>

        <div className="stat-card">
          <img src={`${import.meta.env.BASE_URL}logo7.png`} alt="Logo 7" />
          <h3>2003+</h3>
          <p>Satisfied Clients</p>
        </div>

        <div className="stat-card">
          <img src={`${import.meta.env.BASE_URL}logo8.png`} alt="Logo 8" />
          <h3>47+</h3>
          <p>Modules</p>
        </div>

        <div className="stat-card">
          <img src={`${import.meta.env.BASE_URL}logo9.png`} alt="Logo 9" />
          <h3>2300+</h3>
          <p>Verified Reviews</p>
        </div>

        <div className="stat-card">
          <img src={`${import.meta.env.BASE_URL}logo10.png`} alt="Logo 10" />
          <h3>25000+</h3>
          <p>Professionals Trained</p>
        </div>

        <div className="stat-card">
          <img src={`${import.meta.env.BASE_URL}logo11.png`} alt="Logo 11" />
          <h3>2.3 Million</h3>
          <p>Students</p>
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
