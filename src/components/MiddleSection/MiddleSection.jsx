import React from 'react';
import './MiddleSection.css';

const MiddleSection = () => {
  return (
    <div className="middle-wrapper">
      {/* WhatsApp Integration */}
      <section className="integration-section">
        <p className="small-title">Integration</p>
        <h2 className="main-title">
          Have Seamless Communication Through All New Age <br/> 
          <span>  WhatsApp Messenger</span>
        </h2>
        <div className="section-content">
          <img
            src="/whats.png"
            alt="WhatsApp"
            className="section-image"
          />
          <div className="section-text">
            <h3>WhatsApp For Education</h3>
            <p>
              Are you looking out to bring the benefits of the latest technology for your school’s growth and want to leverage its benefit to student’s Education? Let the power of social media applications contribute to your success journey. We, the Vidyalaya, the leading school management system provider, introducing the new venture of WhatsApp for Education.
              <br /><br />
              Establish the new round of communication with the parents by integrating the social media Apps like WhatsApp messenger for school!
            </p>
            <button className="explore-btn">Explore Now</button>
          </div>
        </div>
      </section>
 {/* Personalized Support */}
<section className="support-section">
  <h3 className="highlight-title">Personalized Support</h3>
  <h4>1-on-1 Support</h4>
  <div className="section-content"> 
    <div className="section-text">
      <p>
        Finding a BrightSteps module a bit tricky? Need automatic payments explained? We're here to help.
        Get personalized support in-app, chat to us over the phone, and get school training.
      </p>
    </div>
    <img
      src="/support.png"
      alt="Support Woman"
      className="section-image"
    />
  </div>
</section>
      {/* We Provide Everything You Need */}
      <section className="provide-section">
        <h2 className="main-title">We Provide</h2>
        <h2 className="main-title"><span>Everything You Need</span></h2>
        <div className="section-content">
          <div className="section-text">
            <p><strong>The Key Benefit Is You Can Save Money, Save Lots Of Time & Make Best Of Resources.</strong></p>
            <p>
              BrightSteps, the comprehensive school management system software meets all your school management requirements. It covers all academic & administrative functions — from admissions to exam management, fees collection, employee payroll, and more. It relieves staff and makes the process hassle-free!
            </p>
          </div>
          <img
            src="/clip.png"
            alt="Clock Management"
            className="section-image"
          />
        </div>
      </section>
    </div>
  );
};

export default MiddleSection;