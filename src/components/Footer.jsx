function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-title">Vamos<br />conversar?</h2>
          </div>
          <div className="footer-info">
            <div className="footer-column">
              <h4>ENDEREÇO</h4>
              <p>Av. Industrial, 1680, cj 907,<br />Torre 1, Santo André-SP</p>
            </div>
            <div className="footer-column">
              <h4>TELEFONE</h4>
              <p>+55 (11) 5198-2515</p>
            </div>
          </div>
          <div className="footer-social">
            <a href="mailto:contato@turimsoft.com.br" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 6l-10 7L2 6"/>
              </svg>
              contato@turimsoft.com.br
            </a>
            <a href="https://www.turimsoft.com.br/ai" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              www.turimsoft.com.br/ai
            </a>
            <a href="https://linkedin.com/company/turim" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              turim
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 <a href="https://site.turimsoft.com.br/">Turimsoft</a>. Todos os direitos reservados.</p>
          <p className="disclaimer">As informações contidas nesta apresentação têm caráter exclusivamente informativo e não constituem compromisso contratual ou proposta comercial definitiva.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
