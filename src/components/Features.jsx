import { useEffect, useRef } from 'react';

const featuresData = [
  {
    id: 'feat1',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="url(#feat1)"/>
        <path d="M24 14L16 18V30L24 34L32 30V18L24 14Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M24 22L16 18" stroke="white" strokeWidth="2"/>
        <path d="M24 22L32 18" stroke="white" strokeWidth="2"/>
        <path d="M24 22V34" stroke="white" strokeWidth="2"/>
        <defs>
          <linearGradient id="feat1" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#8B5CF6"/>
            <stop offset="1" stopColor="#6366F1"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'IA Generativa',
    description: 'Chat integrado aos modelos mais populares (ChatGPT, DeepSeek, Gemini)'
  },
  {
    id: 'feat2',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="url(#feat2)"/>
        <rect x="14" y="14" width="6" height="20" rx="1" stroke="white" strokeWidth="2"/>
        <rect x="21" y="18" width="6" height="16" rx="1" stroke="white" strokeWidth="2"/>
        <rect x="28" y="22" width="6" height="12" rx="1" stroke="white" strokeWidth="2"/>
        <defs>
          <linearGradient id="feat2" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#8B5CF6"/>
            <stop offset="1" stopColor="#6366F1"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Big Data',
    description: 'Consulte bilhões de registros em segundos, apenas fazendo perguntas.'
  },
  {
    id: 'feat3',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="url(#feat3)"/>
        <circle cx="24" cy="20" r="6" stroke="white" strokeWidth="2"/>
        <path d="M18 32C18 28.6863 20.6863 26 24 26C27.3137 26 30 28.6863 30 32" stroke="white" strokeWidth="2"/>
        <circle cx="16" cy="24" r="3" stroke="white" strokeWidth="1.5"/>
        <circle cx="32" cy="24" r="3" stroke="white" strokeWidth="1.5"/>
        <defs>
          <linearGradient id="feat3" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#8B5CF6"/>
            <stop offset="1" stopColor="#6366F1"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Serviços',
    description: 'Integre o chat a serviços internos e automatize tarefas com comandos simples.'
  },
  {
    id: 'feat4',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="url(#feat4)"/>
        <path d="M24 14V18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 30V34" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 24H18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M30 24H34" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="6" stroke="white" strokeWidth="2"/>
        <defs>
          <linearGradient id="feat4" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#8B5CF6"/>
            <stop offset="1" stopColor="#6366F1"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Conhecimento',
    description: 'Dissemine procedimentos e informações com seu time, através de chatbots.'
  }
];

function FeatureCard({ feature }) {
  const cardRef = useRef(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className="feature-card"
      style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
    >
      <div className="feature-icon">
        {feature.icon}
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Transforme sua experiência<br />
            <span className="gradient-text">com seus dados</span>
          </h2>
          <p className="section-subtitle">Soluções completas de IA para grandes corporações</p>
        </div>
        <div className="features-grid">
          {featuresData.map(feature => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
