import './Footer.css';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Coluna 1 */}
        <div className="footer-column">
          <h3>Nathally Neves</h3>
          <p>
            Estudante de Ciência da Computação em desenvolvimento.
          </p>
          <div className="footer-icons">
            <a href="https://github.com/natrneves" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/nathally-neves-482aa6325/" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="https://www.instagram.com/nathallynevs/" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
          </div>
        </div>

        {/* Coluna 2 */}
        <div className="footer-column">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div className="footer-column">
          <h4>Contato</h4>
          <p><strong>Email</strong><br /><a href="mailto:nathally@email.com">nathallyr06@gmail.com</a></p>
          <p><strong>Localização</strong><br />Criciúma, SC</p>
          <p><strong>Disponibilidade</strong><br />Aberta para novas oportunidades</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Nathally Neves. Todos os direitos reservados.</p>
        <a href="#top">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}
