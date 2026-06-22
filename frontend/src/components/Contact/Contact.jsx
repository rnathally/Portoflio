import { Mail, MapPin, CheckCircle, Send } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:nathallyr06@gmail.com?subject=Contato pelo portfólio";
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-title fade-in-up">
        <h2>Entre em contato</h2>
        <p>
          Estou em busca de uma oportunidade na área de tecnologia e deixo aqui meus contatos profissionais.

        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-main-card fade-in-left">
          <span className="contact-pill">Aberta a oportunidades</span>

          <h3>Fique à vontade para me chamar</h3>

          <p>
           Caso queira conhecer melhor meu trabalho ou entrar em contato profissionalmente, você pode me chamar pelo e-mail ou pelo WhatsApp clicando no botão a direita.
          </p>

          <button
            type="button"
            className="contact-email-button"
            onClick={handleEmailClick}
          >
            <Send size={18} />
            Enviar e-mail
          </button>
        </div>

        <div className="contact-side fade-in-right">
          <div className="contact-cards-row">
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
          </div>

          <div className="interest-card">
            <h3>Áreas de interesse</h3>

            <div className="interest-list">
              <div className="interest-item">
                <CheckCircle />
                <div>
                  <strong>Desenvolvimento Web</strong>
                  <span>Interfaces funcionais, responsivas e organizadas.</span>
                </div>
              </div>

              <div className="interest-item">
                <CheckCircle />
                <div>
                  <strong>Sistemas e Suporte ao Usuário</strong>
                  <span>Ferramentas digitais, usuários e melhoria de processos.</span>
                </div>
              </div>

              <div className="interest-item">
                <CheckCircle />
                <div>
                  <strong>UI/UX e Design</strong>
                  <span>Usabilidade, prototipagem e experiência do usuário.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}