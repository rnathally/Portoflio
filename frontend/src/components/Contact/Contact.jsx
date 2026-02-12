import { useState } from 'react';
import { Mail, MapPin, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch('https://formspree.io/f/mldnzbqv', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      setStatus('Mensagem enviada com sucesso!');
      form.reset();
    } catch (error) {
      setStatus('Ocorreu um erro. Tente novamente.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      {/* Título da seção */}
      <div className="contact-title fade-in-up">
        <h2>Vamos trabalhar juntos?</h2>
        <p>Entre em contato e tire sua ideia do papel com a gente.</p>
      </div>

      {/* Container principal */}
      <div className="contact-container">
        {/* Lado esquerdo: info */}
        <div className="contact-info fade-in-left">
          <div className="contact-card">
            <div className="contact-card-icon">
              <Mail />
            </div>
            <div className="contact-card-content">
              <h4>Email</h4>
              <p>nathallyr06@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <MapPin />
            </div>
            <div className="contact-card-content">
              <h4>Localização</h4>
              <p>Criciúma - SC, Brasil</p>
            </div>
          </div>

          <div className="work-reasons">
            <h3>Por que escolher o meu trabalho?</h3>
            <ul>
              <li>
                <CheckCircle />
                Design centrado no usuário
                <span>Interfaces bonitas, funcionais e focadas na experiência.</span>
              </li>
              <li>
                <CheckCircle />
                Acompanhamento próximo
                <span>Do briefing à entrega, com comunicação clara e constante.</span>
              </li>
              <li>
                <CheckCircle />
                Do design à entrega digital
                <span>Seja em WordPress, React ou outra solução, transformo boas ideias em experiências digitais reais e funcionais.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Formulário */}
        <div className="contact-form fade-in-right">
          <div className="form-header">
            <h2>Vamos conversar sobre sua ideia?</h2>
            <p>Preencha o formulário e entraremos em contato em até 48h.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="nome" placeholder="Nome" required />
              <input type="email" name="email" placeholder="E-mail" required />
            </div>
            <input type="text" name="assunto" placeholder="Assunto" required />
            <textarea name="mensagem" placeholder="Mensagem" required></textarea>
            <button type="submit">Enviar mensagem</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
