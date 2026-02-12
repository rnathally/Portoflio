// Hero.jsx
import React from "react";
import "./Hero.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero({ onVerProjetosClick }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <span className="status">Disponível para novos projetos</span>
        <h1>Olá, eu sou <strong>Nathally</strong></h1>
        <p>
          Designer & Estudante de Ciência da Computação especializada em UI/UX
        </p>
       <div className="hero-buttons">
  <button onClick={onVerProjetosClick}>Ver Meus Projetos</button>
  <a href="/curriculo.pdf" download className="btn-secondary">Download CV</a>
</div>
        <div className="hero-icons">
          <a href="https://github.com/natrneves"><FaGithub /></a>
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
