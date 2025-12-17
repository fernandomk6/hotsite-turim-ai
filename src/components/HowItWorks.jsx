import { useState, useEffect, useRef } from 'react';

const accordionData = [
  {
    id: 1,
    title: 'BigData',
    content: 'Coleta, estruturação e armazenamento rotineiro de quantidades massivas de dados.'
  },
  {
    id: 2,
    title: 'Treinamento IA',
    content: 'Instrução da IA para responder informações sob medida sobre seu negócio e seus dados.'
  },
  {
    id: 3,
    title: 'Integração',
    content: 'Conexão com seus sistemas internos para uma experiência fluida e automatizada.'
  },
  {
    id: 4,
    title: 'Gestão e segurança',
    content: 'Controle total sobre permissões, auditoria e proteção dos dados corporativos.'
  }
];

function AccordionItem({ item, isActive, onClick }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`accordion-item ${isActive ? 'active' : ''}`}
      style={{ transition: 'opacity 0.6s ease, transform 0.6s ease' }}
    >
      <button type="button" className="accordion-header" onClick={onClick}>
        <span>{item.title}</span>
        <svg className="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <div className="accordion-content">
        <p>{item.content}</p>
      </div>
    </div>
  );
}

function HowItWorks() {
  const [activeId, setActiveId] = useState(1);

  const handleAccordionClick = (id) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Como <span className="gradient-text">transformamos</span><br />
            sua experiência
          </h2>
        </div>
        <div className="how-it-works-content">
          <div className="accordion-wrapper">
            {accordionData.map(item => (
              <AccordionItem
                key={item.id}
                item={item}
                isActive={activeId === item.id}
                onClick={() => handleAccordionClick(item.id)}
              />
            ))}
          </div>
          <div className="how-it-works-images">
            <div className="works-image works-image-1">
              <img src="/img/image25.png" alt="Modern building" />
            </div>
            <div className="works-image works-image-2">
              <img src="/img/image23.png" alt="Data center" />
            </div>
            <div className="works-image works-image-3">
              <img src="/img/image24.png" alt="Industrial automation" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
