import { useState } from 'react';

function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simula envio
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="cta">
      <div className="cta-bg">
        <div className="cta-glow"></div>
      </div>
      <div className="container">
        <div className="cta-content">
          <h2 className="section-title">
            Pronto para transformar<br />
            <span className="gradient-text">seus dados em resultados?</span>
          </h2>
          <p>Entre em contato e descubra como o TurimAI pode revolucionar a forma como sua empresa trabalha com dados.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Seu nome" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Seu e-mail" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="company"
                placeholder="Empresa" 
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message"
                placeholder="Como podemos ajudar?" 
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="btn btn-primary btn-lg btn-full"
              disabled={isSubmitting || submitted}
            >
              {submitted ? (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Mensagem Enviada!
                </>
              ) : (
                <>
                  Enviar Mensagem
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CTA;
