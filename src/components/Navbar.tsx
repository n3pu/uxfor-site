import { useState, useEffect } from 'react';
import uxforLogoWhite from '../assets/logo-uxfor-outline-white.svg';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);
  
  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth > 992;
      if (isNowDesktop !== isDesktop) {
        setIsDesktop(isNowDesktop);
        // Fecha o menu ao mudar para desktop
        if (isNowDesktop) setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isDesktop]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (!isDesktop) {
      setIsMenuOpen(false);
    }
  };
  
  return (
    <nav>
      <div>
        <a href="./">
          <img src={uxforLogoWhite} className="logo" alt="UXFor Logo" />
          <span>uxfor</span>
        </a>
      </div>
      {!isDesktop && (
        <button 
          className={`hamburger ${isMenuOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      )}
      {isMenuOpen && !isDesktop && (
        <div className="overlay" onClick={closeMenu} />
      )}
      <ul className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#cursos">Cursos</a></li>
        <li><a href="#quemsomos">Quem somos</a></li>
      </ul>
    </nav>
  );
};