import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Navbar.css';

const Navbar = ({ setShowLogin }) => {
  const [activeSection, setActiveSection] = useState("Platform");
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 990);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
        {/* Logo - left side */}
        <Link to="/" className="navbar-logo" onClick={() => setActiveSection("Platform")}>
          <img src={assets.logo} alt="BrightSteps Logo" />
        </Link>

        {/* Desktop Navigation (centered) */}
        {!isMobile && (
          <div className="nav-links">
            <NavItem 
              to="/" 
              sectionId="Platform"
              activeSection={activeSection}
              onClick={handleNavigation}
              text="Platform"
            />
            <NavItem 
              href="#BrightStepsSection"
              sectionId="BrightStepsSection"
              activeSection={activeSection}
              onClick={handleNavigation}
              text="Why BrightSteps"
            />
            <NavItem 
              href="#ProductApp"
              sectionId="ProductApp"
              activeSection={activeSection}
              onClick={handleNavigation}
              text="Grow Up Together"
            />
            <NavItem 
              href="#PricingPlans"
              sectionId="PricingPlans"
              activeSection={activeSection}
              onClick={handleNavigation}
              text="Pricing"
            />
          </div>
        )}

        {/* Desktop Get Started button (right side) */}
        {!isMobile && (
          <button className="get-started-btn" onClick={() => setShowLogin(true)}>
            Get Started
          </button>
        )}

        {/* Mobile Menu Toggle (right side) */}
        {isMobile && (
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>
        )}
      </nav>

      {/* Mobile Sidebar Menu */}
      {isMobile && (
        <div className={`mobile-sidebar ${menuOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <img src={assets.logo} alt="BrightSteps Logo" className="sidebar-logo" />
            <button 
              className="sidebar-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          
          <div className="sidebar-links">
            <NavItem 
              to="/" 
              sectionId="Platform"
              activeSection={activeSection}
              onClick={handleNavigation}
              text="Platform"
            />
            <NavItem 
              href="#BrightStepsSection"
              sectionId="BrightStepsSection"
              activeSection={activeSection}
              onClick={handleNavigation}
              text="Why BrightSteps"
            />
            <NavItem 
              href="#ProductApp"
              sectionId="ProductApp"
              activeSection={activeSection}
              onClick={handleNavigation}
              text="Grow Up Together"
            />
            <NavItem 
              href="#PricingPlans"
              sectionId="PricingPlans"
              activeSection={activeSection}
              onClick={handleNavigation}
              text="Pricing"
            />
          </div>
          
          <button 
            className="sidebar-get-started-btn"
            onClick={() => {
              setShowLogin(true);
              setMenuOpen(false);
            }}
          >
            Get Started
          </button>
        </div>
      )}

      {/* Overlay when mobile menu is open */}
      {menuOpen && isMobile && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

const NavItem = ({ to, href, sectionId, activeSection, onClick, text }) => {
  const handleClick = (e) => {
    if (href) e.preventDefault();
    onClick(sectionId);
  };

  return (
    <div 
      className={`nav-item ${activeSection === sectionId ? 'active' : ''}`}
      onClick={handleClick}
    >
      {to ? (
        <Link to={to}>{text}</Link>
      ) : (
        <a href={href}>{text}</a>
      )}
    </div>
  );
};

export default Navbar;