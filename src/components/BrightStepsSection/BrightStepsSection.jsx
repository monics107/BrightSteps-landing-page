
import React from 'react';
import './BrightStepsSection.css';

const BrightStepsSection = ({setShowLogin}) => {
  return (
    <div className="bright-section">
      <h2 className="heading-main">
        Why BrightSteps School Management
      </h2>
      <p className="heading-sub">
        Is most prefered System in india ?
      </p>

      <div className="bright-content">
        <div className="bright-text">
          <p className="we-have">We Have</p>
          <h3 className="success-heading">Countless Success Stories</h3>
          <p className="des">
            BrightSteps School Management Software is trusted by institutions across India
            for its powerful, easy-to-use platform. We combine the latest technology with a deep
            understanding of schoolneed– making administration smarter, faster, and more effective.
          </p>
          <button onClick={()=>setShowLogin(true)} className="get-started-btn">Get Started</button>
        </div>

        <div className="bright-image">
          <img src={`${import.meta.env.BASE_URL}success_story.png`} alt=" "/>
        </div>
      </div>
    </div>
  );
};

export default BrightStepsSection;