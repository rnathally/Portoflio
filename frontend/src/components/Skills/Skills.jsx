import React, { useEffect, useRef, useState } from "react";
import { Code, Palette, Database, Wrench } from "lucide-react";
import "./Skills.css";

function Skills() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getWidthStyle = (width) => (animated ? { width } : { width: "0%" });
  const getLiClass = () => (animated ? "skill-item show" : "skill-item");

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="skills-header">
        <h2 className="section-title">Minhas Habilidades</h2>
        <p className="section-subtitle">
          Tecnologias, ferramentas e conhecimentos que utilizo e sigo aprimorando.
        </p>
      </div>

      <div className="skills-columns">
        {/* Desenvolvimento Web */}
        <div className="skills-column">
          <h3 className="column-title">
            <Code size={20} /> Desenvolvimento Web
          </h3>
          <ul>
            <li className={getLiClass()}>
              HTML/CSS
              <div className="bar front">
                <div style={getWidthStyle("95%")} />
              </div>
            </li>
            <li className={getLiClass()}>
              JavaScript
              <div className="bar front">
                <div style={getWidthStyle("80%")} />
              </div>
            </li>
            <li className={getLiClass()}>
              React
              <div className="bar front">
                <div style={getWidthStyle("75%")} />
              </div>
            </li>
            <li className={getLiClass()}>
              WordPress/Elementor
              <div className="bar front">
                <div style={getWidthStyle("85%")} />
              </div>
            </li>
          </ul>
        </div>

        {/* Design e UI/UX */}
        <div className="skills-column">
          <h3 className="column-title">
            <Palette size={20} /> Design e UI/UX
          </h3>
          <ul>
            <li className={getLiClass()}>
              Design Gráfico
              <div className="bar design">
                <div style={getWidthStyle("95%")} />
              </div>
            </li>
            <li className={getLiClass()}>
              Wireframing/Prototipagem
              <div className="bar design">
                <div style={getWidthStyle("85%")} />
              </div>
            </li>
            <li className={getLiClass()}>
              UI Design
              <div className="bar design">
                <div style={getWidthStyle("90%")} />
              </div>
            </li>
            <li className={getLiClass()}>
              UX Design
              <div className="bar design">
                <div style={getWidthStyle("75%")} />
              </div>
            </li>
          </ul>
        </div>

        {/* Ferramentas */}
        <div className="skills-column">
          <h3 className="column-title">
            <Wrench size={20} /> Ferramentas
          </h3>
          <ul>
            <li className={getLiClass()}>
              Figma
              <div className="bar tools">
                <div style={getWidthStyle("95%")} />
              </div>
            </li>
            <li className={getLiClass()}>
              Adobe Illustrator
              <div className="bar tools">
                <div style={getWidthStyle("80%")} />
              </div>
            </li>
            <li className={getLiClass()}>
              Adobe Photoshop
              <div className="bar tools">
                <div style={getWidthStyle("85%")} />
              </div>
            </li>
            <li className={getLiClass()}>
              Canva
              <div className="bar tools">
                <div style={getWidthStyle("90%")} />
              </div>
            </li>
          </ul>
        </div>

        {/* Outras Habilidades */}
        <div className="skills-column">
          <h3 className="column-title">
            <Database size={20} /> Outras Habilidades
          </h3>
          <ul>
            <li className={getLiClass()}>
              Suporte ao Usuário
              <div className="bar tools">
                <div style={getWidthStyle("80%")} />
              </div>
            </li>
            <li className={getLiClass()}>
              Organização de Processos
              <div className="bar tools">
                <div style={getWidthStyle("70%")} />
              </div>
            </li>
            <li className={getLiClass()}>
              Metodologias Ágeis
              <div className="bar tools">
                <div style={getWidthStyle("75%")} />
              </div>
            </li>
            <li className={getLiClass()}>
              Noções de SQL
              <div className="bar tools">
                <div style={getWidthStyle("60%")} />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Sempre Aprendendo */}
      <div className="learning">
        <h3>Sempre Aprendendo</h3>
        <p>Estudos e práticas em que estou me aprofundando.</p>
        <div className="badges">
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>SQL</span>
          <span>Tailwind CSS</span>
          <span>Design Systems</span>
          <span>Parametrização de Sistemas</span>
          <span>Análise de Requisitos</span>
          <span>Testes de Sistemas</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;