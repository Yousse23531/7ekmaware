import React from 'react';

const Header = ({ activeSection, scrollToSection }) => {
  return (
    <header className="dark-header">
      <div className="dark-logo">
        <span className="display-medium" style={{ color: 'var(--brand-primary)' }}>
          7EKMA-WARE
        </span>
      </div>
      
      <nav className="dark-nav">
        <a 
          className={`dark-nav-link ${activeSection === 'home' ? 'active' : ''}`}
          onClick={() => scrollToSection('home')}
        >
          Home
        </a>
        <a 
          className={`dark-nav-link ${activeSection === 'services' ? 'active' : ''}`}
          onClick={() => scrollToSection('services')}
        >
          Services
        </a>
        <a 
          className={`dark-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;