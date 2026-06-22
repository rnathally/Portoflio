// import React from "react";
import "./Process.css";
import { FaComments, FaSearch, FaPencilRuler, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FaComments />,
    title: "1. Conversa Inicial",
    description: "Entendemos suas necessidades, objetivos e visão do projeto",
    items: ["Briefing detalhado", "Definição de objetivos", "Análise do público-alvo", "Cronograma"],
  },
  {
    icon: <FaSearch />,
    title: "2. Pesquisa & Estratégia",
    description: "Pesquisa de mercado e criação da estratégia de design",
    items: ["Análise de concorrentes", "Pesquisa de usuários", "Wireframes", "Arquitetura da informação"],
  },
  {
    icon: <FaPencilRuler />,
    title: "3. Design e Prototipagem",
    description: "Criação do design visual e protótipos interativos",
    items: ["Design de interface do usuário", "Sistema Visual", "Tipografia", "Protótipo interativo"],
  },
  {
    icon: <FaRocket />,
    title: "4. Entrega & Suporte",
    description: "Finalização do projeto com documentação completa",
    items: ["Arquivos finais", "Guia estilo", "Documentação", "Suporte pós-entrega"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Process = () => {
  return (
    <section className="process-section">
      <h2 className="process-title">Etapas do Projeto</h2>
     

      <motion.div
        className="process-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {steps.map((step, index) => (
          <motion.div key={index} className="process-card" variants={cardVariants}>
            <div className="process-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <ul>
              {step.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Process;
//