
import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToInfoBanner = () => {
    const infoBanner = document.getElementById('infoBanner');
    if (infoBanner) {
      infoBanner.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Smart Steps for Every School</h2>
        <p>A complete School ERP to manage everything from attendance to parent communication - All in one place</p>
        <div className="button-group"> 
          <button className="btn-pr" onClick={scrollToFooter}>Contact Us</button>
          <button className="btn-se" onClick={scrollToInfoBanner}>Watch Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
