function Hero() {
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
  };

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-glow"></div>
        <div className="hero-grid"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse"></span>
            Inteligência Artificial para Empresas
          </div>
          <h1 className="hero-title">
            Use IA para <span className="gradient-text">conversar</span><br />
            com seus dados
          </h1>
          <p className="hero-subtitle">
            Carregue dados para modelos de BigData e faça perguntas de maneira 
            instantânea sobre imensas quantidades de informação.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary btn-lg" onClick={(e) => handleNavClick(e, '#contact')}>
              Solicitar Demonstração
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#how-it-works" className="btn btn-secondary btn-lg" onClick={(e) => handleNavClick(e, '#how-it-works')}>
              Saiba Mais
            </a>
          </div>
          <p className="hero-tagline">CONVERSE COM SEUS DADOS. MUITOS, MUITOS DADOS.</p>
        </div>
        <div className="hero-images">
          <div className="hero-image-showcase">
            <div className="showcase-main">
              <img src="/img/image9.png" alt="Data visualization" />
              <div className="showcase-overlay"></div>
            </div>
            <div className="showcase-secondary">
              <img src="/img/image11.png" alt="Technology" />
            </div>
            <div className="showcase-gradient showcase-gradient-white"></div>
            <div className="showcase-gradient showcase-gradient-purple"></div>
            <div className="showcase-ring-background"></div>
            <div className="showcase-ring-images"></div>
            <div className="showcase-dots"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
