// Hero.jsx
import React from "react";
import "./Hero.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero({ onVerProjetosClick }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <span className="status">Portfólio de Tecnologia</span>
        <h1>Olá, eu sou <strong>Nathally</strong></h1>
        <p>
          Estudante de Ciência da Computação, com foco em desenvolvimento web, suporte a sistemas e experiência do usuário. 
        </p>
       <div className="hero-buttons">
  <button onClick={onVerProjetosClick}>Ver Meus Projetos</button>
  <a
  href={`${import.meta.env.BASE_URL}CVNathallyNeves.pdf`}
  download="CVNathallyNeves.pdf"
  className="btn-secondary"
>
  Download CV
</a>
</div>
        <div className="hero-icons">
          <a href="https://github.com/rnathally"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/nathally-neves-482aa6325/"><FaLinkedin /></a>
          <a href="https://www.instagram.com/nathallynevs/"><FaInstagram /></a>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-initials">NN</div>
      </div>
    </section>
  );
}
