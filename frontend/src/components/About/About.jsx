import { Code2, PenTool, Smile, Lightbulb, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Texto da esquerda */}
        <div className="text-area">
          <h2>Sobre Mim</h2>
          <hr />
          <p>Sou estudante de Ciência da Computação e busco uma oportunidade na área de tecnologia, onde eu possa aplicar meus conhecimentos, aprender na prática e contribuir com soluções digitais funcionais.</p>

<p>Tenho conhecimentos em <strong>HTML, CSS, JavaScript, React, WordPress, UI/UX e design gráfico</strong>, além de experiência com ferramentas digitais, organização de processos e suporte a usuários.</p>

<p>Gosto de unir tecnologia e design para criar soluções claras, organizadas e fáceis de usar, sempre pensando na experiência do usuário e na melhoria dos processos.</p>

<p>Acredito que uma boa solução digital deve ser mais do que visualmente agradável: <strong>ela precisa ser funcional, bem estruturada, acessível e facilitar a rotina das pessoas no dia a dia.</strong></p>


          <div className="badge">
            <i className="icon">
              <BookOpen size={18} />
            </i>
            <span>
              <strong>Sempre Aprendendo</strong><br />
              Comprometida com o crescimento contínuo
            </span>
          </div>
        </div>

        {/* Cards da direita */}
        <div className="cards-area">
          <div className="card">
            <i className="icon"><Code2 size={18} /></i>
            <h4>Desenvolvimento Web</h4>
            <p>Criação de interfaces modernas, responsivas e funcionais.</p>
          </div>
          <div className="card">
            <i className="icon"><PenTool size={18} /></i>
            <h4>Suporte a Sistemas</h4>
            <p>Apoio no uso de ferramentas digitais, resolução de dúvidas e organização de demandas.</p>
          </div>
          <div className="card">
            <i className="icon"><Smile size={18} /></i>
            <h4>UI/UX Design</h4>
            <p>Interfaces pensadas para clareza, usabilidade e boa experiência.</p>
          </div>
          <div className="card">
            <i className="icon"><Lightbulb size={18} /></i>
            <h4>Resolução de Problemas</h4>
            <p>Análise de necessidades e criação de soluções claras, funcionais e organizadas.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-area">
        <h3>Aberta a novas oportunidades na área de tecnologia</h3>
        <p>Tenho interesse em atuar com desenvolvimento web, suporte a usuários, sistemas e soluções digitais que facilitem a rotina das pessoas</p>

        {/* BOTÃO COM ANIMAÇÃO USANDO FRAMER MOTION */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
        <motion.button
  onClick={() => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
  className="cta-scan-button"
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
>
  <span className="glow-text">Fale Comigo</span>
</motion.button>




        </div>
      </div>
    </section>
  );
}