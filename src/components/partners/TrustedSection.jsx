

import React from 'react';
import './TrustedSection.css';

const TrustedSection = () => {
  return (
    <div className="trusted-container">
      <div className="logos">
        <div className="logos-inner">
          <img src="/logos/logo1.png" alt="Logo 1" />
          <img src="/logos/logo2.png" alt="Logo 2" />
          <img src="/logos/logo3.png" alt="Logo 3" />
          <img src="/logos/logo4.png" alt="Logo 4" />
          <img src="/logos/logo5.png" alt="Logo 5" />

          {/* Duplicate logos for  scrolling */}
          <img src="/logos/logo1.png" alt="Logo 1 duplicate" />
          <img src="/logos/logo2.png" alt="Logo 2 duplicate" />
          <img src="/logos/logo3.png" alt="Logo 3 duplicate" />
          <img src="/logos/logo4.png" alt="Logo 4 duplicate" />
          <img src="/logos/logo5.png" alt="Logo 5 duplicate" />
        </div>
      </div>

      <h2 className="trusted-heading">
        India’s <span className="highlight">Most Trusted</span> School Management Software
      </h2>

      <div className="stats-grid">
        <div className="stat-card">
          <img src="/logo6.png" alt="Logo 1" />
          <h3>23+</h3>
          <p>Years Legacy</p>
        </div>

        <div className="stat-card">
          <img src="/logo7.png" alt="Logo 2" />
          <h3>2003+</h3>
          <p>Satisfied Clients</p>
        </div>

        <div className="stat-card">
          <img src="/logo8.png" alt="Logo 3" />
          <h3>47+</h3>
          <p>Modules</p>
        </div>

        <div className="stat-card">
          <img src="/logo9.png" alt="Logo 4" />
          <h3>2300+</h3>
          <p>Verified Reviews</p>
        </div>

        <div className="stat-card">
          <img src="/logo10.png" alt="Logo 5" />
          <h3>25000+</h3>
          <p>Professionals Trained</p>
        </div>

        <div className="stat-card">
          <img src="/logo11.png" alt="Logo 6" />
          <h3>2.3 Million</h3>
          <p>Students</p>
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
