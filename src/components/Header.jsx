import { useState, useEffect } from 'react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className="header" 
      style={{ background: scrolled ? 'rgba(10, 10, 11, 0.95)' : 'rgba(10, 10, 11, 0.9)' }}
    >
      <nav className="nav container">
        <div className="logo">
          <img src="/img/logo.png" alt="TurimAI logo" className="logo-img" />
        </div>
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#features" onClick={(e) => handleNavClick(e, '#features')}>Recursos</a></li>
          <li><a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')}>Como Funciona</a></li>
          <li><a href="#stats" onClick={(e) => handleNavClick(e, '#stats')}>Resultados</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contato</a></li>
        </ul>
        <a href="#contact" className="btn btn-primary" onClick={(e) => handleNavClick(e, '#contact')}>Fale Conosco</a>
        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
