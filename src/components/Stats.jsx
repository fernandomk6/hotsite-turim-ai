import { useEffect, useRef, useState } from 'react';

const statsData = [
  {
    id: 1,
    number: '10k+',
    label: 'PROCESSOS ROBOTIZADOS',
    description: 'Geração de documentos, guias de pagamento, transmissão de obrigações acessórias e consultas paralegais.'
  },
  {
    id: 2,
    number: '600+',
    label: 'PROJETOS CONCLUÍDOS',
    description: 'Por desenvolvedores e consultores de altíssima performance.'
  },
  {
    id: 3,
    number: '15+',
    label: 'ANOS DE EXPERIÊNCIA',
    description: 'Expertise consolidada em transformação digital e soluções de dados.'
  }
];

function StatCard({ stat }) {
  const cardRef = useRef(null);
  const numberRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const numberObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCounter();
            setHasAnimated(true);
            numberObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      cardObserver.observe(cardRef.current);
    }

    if (numberRef.current) {
      numberObserver.observe(numberRef.current);
    }

    return () => {
      cardObserver.disconnect();
      numberObserver.disconnect();
    };
  }, [hasAnimated]);

  const animateCounter = () => {
    const el = numberRef.current;
    if (!el) return;

    const text = stat.number;
    const number = parseInt(text.replace(/\D/g, ''));
    const suffix = text.replace(/[0-9]/g, '');
    const duration = 2000;
    const start = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(number * easeOut);

      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        el.textContent = text;
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div 
      ref={cardRef}
      className="stat-card"
      style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
    >
      <div ref={numberRef} className="stat-number">{stat.number}</div>
      <div className="stat-label">{stat.label}</div>
      <p>{stat.description}</p>
    </div>
  );
}

function Stats() {
  return (
    <section id="stats" className="stats">
      <div className="stats-bg">
        <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&h=600&fit=crop" alt="City lights" />
      </div>
      <div className="container">
        <div className="stats-header">
          <div className="stats-intro">
            <h2 className="section-title">
              Inovando há <span className="gradient-text">15 anos</span><br />
              em grandes corporações
            </h2>
            <p>Soluções para multinacionais e grandes corporações da indústria, varejo, telecomunicações e logística.</p>
          </div>
        </div>
        <div className="stats-grid">
          {statsData.map(stat => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
