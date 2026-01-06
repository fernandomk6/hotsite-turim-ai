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
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Log dos dados do formulário
    console.log('=== DADOS DO FORMULÁRIO ===');
    console.log('Nome:', formData.name);
    console.log('Email:', formData.email);
    console.log('Empresa:', formData.company);
    console.log('Mensagem:', formData.message);
    console.log('Todos os dados:', formData);
    console.log('===========================');

    try {
      const url = "https://rte.turimsoft.com.br";
      
      const payload = {
        g_organization_id: "64",
        data: JSON.stringify({
          class: "custom_ws",
          method: "run",
          custom_class: "turimai_email",
          custom_method: "send_message",
          contact: {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            message: formData.message
          },
          from: "hotsite_turim_ai"
        })
      };

      console.log('=== ENVIANDO PAYLOAD ===');
      console.log('URL:', url);
      console.log('Payload:', payload);
      console.log('========================');

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(payload)
      });

      console.log('=== RESPOSTA ===');
      console.log('Status:', response.status);
      console.log('Status Text:', response.statusText);
      
      const responseData = await response.text();
      console.log('Response Data:', responseData);
      console.log('================');

      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }

      setSubmitted(true);
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);

    } catch (err) {
      console.error('=== ERRO AO ENVIAR ===');
      console.error('Erro:', err);
      console.error('======================');
      
      setError('Erro ao enviar mensagem. Por favor, tente novamente.');
      setIsSubmitting(false);
    }
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
          {error && (
            <div className="error-message" style={{ 
              color: '#ef4444', 
              marginBottom: '20px', 
              padding: '10px', 
              borderRadius: '4px', 
              backgroundColor: 'rgba(239, 68, 68, 0.1)' 
            }}>
              {error}
            </div>
          )}
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
