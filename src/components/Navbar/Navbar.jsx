
import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Platform");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenu(id); // Optional, to control active menu
    }
  };

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("Platform")} className={menu === "Platform" ? "active" : ""}>Platform</Link>

        <a href="#BrightStepsSection" onClick={() => scrollToSection("BrightStepsSection")} className={menu === "BrightStepsSection" ? "active" : ""}>
          Why BrightSteps
        </a>

        <a href="#ProductApp" onClick={() => scrollToSection("ProductApp")} className={menu === "ProductApp" ? "active" : ""}>
          Grow Up Together
        </a>

        <a href="#PricingPlans" onClick={() => scrollToSection("PricingPlans")} className={menu === "PricingPlans" ? "active" : ""}>
          Pricing
        </a>
      </ul>

      <button onClick={() => setShowLogin(true)}>Get Started</button>
    </div>
  );
};

export default Navbar;
