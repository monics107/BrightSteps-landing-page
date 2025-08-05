import React from 'react';
import './InfoBanner.css';

const InfoBanner = () => {
  return (
    <div className="banner-wrapper">
      {/* Left Section */}
      <div className="banner-left">
        <h3 className="banner-title">
          <span>Bright Academy</span><br />
          <strong>Talent Management Systems<br />
          built for school</strong>
        </h3>
        <p className="banner-text">
          Built a smarter organization with the training platform designed to help great teams grow.
        </p>
      </div>

      {/* Right Section */}
      <div className="banner-right">
          <div className="card-images">
            <img src="/infobanner.png" alt=" " />
          </div>
        </div>
      </div>
   
  );
};

export default InfoBanner;