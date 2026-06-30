import React, { useState } from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Projects() {
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      title: "Projeto Casa Guido",
      description: "Sistema web desenvolvido para gerenciamento de cadastros e consultas de pacientes oncológicos pediátricos. Projeto realizado na graduação em Ciência da Computação.",
      year: 2025,
      tags: ["React", "Java com Springboot", "Figma"],
      img: "/imagens/ProjetoGuido.png",
      emAndamento: false,
      link: "https://projeto-guido.vercel.app"
    },
    {
      title: "DogDex ",
      description: "Aplicação web criada para apoiar a adoção de cachorros comunitários da UNESC, apresentando os animais em formato de cartas colecionáveis. O projeto permite visualizar informações dos cães, registrar capturas por QR Code e tornar a experiência mais interativa, aproximando tecnologia, design e causa animal.",
      year: 2026,
      tags: ["React", "JavaScript", "Supabase", "CSS","Figma"],
      img: "/imagens/Dogdex.png",
      emAndamento: false,
      link: "https://dog-dex.vercel.app"
    },

    {
      title: "WeWine ",
      description: "Sistema web  desenvolvido para a gestão de uma empresa de vinhos fictícia, com acompanhamento de pedidos, representantes, clientes e estoque. O projeto faz parte de uma proposta integrada com aplicativo mobile para consulta da cartela de vinhos e realização de pedidos.",
      year: 2025,
      tags: ["React", "TypeScript", "Vite", "React Router", "CSS","Figma"],
      img: "/imagens/wewine.png",
      emAndamento: false,
      link: "https://wewine-p.vercel.app"
    },

    {
      title: "Landing Page Dev4u",
      description: "Landing Page desenvolvida para a empresa Dev4u com foco em apresentação de serviços, contato e identidade visual profissional.",
      year: 2024,
      tags: ["Wordpress", "CSS", "Figma"],
      img: "/imagens/LP.png",
      emAndamento: false,
      link: "https://lp.dev4u.com.br",
    },
    {
      title: "Site Institucional Impulsia",
      description: "Projeto em desenvolvimento para a empresa Impulsia, com objetivo de fortalecer presença digital e facilitar o contato com clientes.",
      year: 2025,
      tags: ["Wordpress", "CSS", "Figma"],
      img: "/imagens/impulsia.png",
      emAndamento: false,
      link: "https://wp.impulsia.com.br",
    }
  ];

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-title">
        <h2>Meus Projetos</h2>
        <p>Uma coleção dos meus trabalhos mais significativos em design e desenvolvimento</p>
      </div>

      <h3 className="featured-title">Projetos em Destaque</h3>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card">
              <div className="image-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="card-content">
                <div className="project-header">
                  <h4>{project.title}</h4>
                  <span className="year">{project.year}</span>
                </div>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag, idx) => (
                    <span className="tag" key={idx}>{tag}</span>
                  ))}
                </div>
                <div className="actions">
                  {project.emAndamento ? (
                    <button className="btn-primary" onClick={handleShowModal}>
                      Ver Projeto
                    </button>
                  ) : (
                    <a
                      className="btn-primary"
                      href={project.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Projeto
                    </a>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <p>🚧 Projeto ainda em andamento. Em breve disponível.</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
