import { useState } from 'react';
import { useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandDeck from './components/CommandDeck';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { isDark } = useTheme();

  const navigateTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark
          ? 'bg-[#080808] text-white'
          : 'bg-[#080808] text-white'
      }`}
    >
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <CommandDeck onNavigate={navigateTo} />
    </div>
  );
}

export default App;
