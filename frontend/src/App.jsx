import React, { useRef } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const projetosRef = useRef(null);

  const scrollParaProjetos = () => {
    projetosRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Hero onVerProjetosClick={scrollParaProjetos} />
      <About />
      <Skills />
      <WhatsAppButton />
      
      
      {/* Seção de Projetos com ref */}
      <div ref={projetosRef}>
        <Projects />
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;


