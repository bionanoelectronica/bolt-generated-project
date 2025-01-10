import React from 'react';
    import './Header.css';

    const Header = () => {
      return (
        <header className="header">
          <nav>
            <a href="#">
              <span className="breadcrumb-icon">⌂</span>
              <span className="breadcrumb-text">Pacientes</span>
            </a>
            <span className="breadcrumb-separator">›</span>
            <a href="#">
              <span className="breadcrumb-text">Juan David Vasquez Mesa</span>
            </a>
            <span className="breadcrumb-separator">›</span>
            <a href="#">
              <span className="breadcrumb-text">Nuevo monitoreo</span>
            </a>
          </nav>
        </header>
      );
    };

    export default Header;
