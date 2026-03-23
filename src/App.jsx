import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import WhyMe from './components/WhyMe';
import Skills from './components/Skills';
import BuildStack from './components/BuildStack';
import EngineeringMindset from './components/EngineeringMindset';
import Projects from './components/Projects';
import FeaturedProject from './components/FeaturedProject';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

// ScrollReveal Component
const ScrollReveal = ({ children, delay = 0 }) => {
  return (
    <div
      className="reveal"
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

function App() {
  React.useEffect(() => {
    // Add reveal animation styles
    const style = document.createElement('style');
    style.textContent = `
      .reveal {
        opacity: 0;
        transform: translateY(30px);
        animation: reveal 0.8s ease-out forwards;
      }
      
      @keyframes reveal {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .reveal-once {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
      }
      
      .reveal-once.revealed {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with reveal-once class
    setTimeout(() => {
      document.querySelectorAll('.reveal-once').forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen relative selection:bg-blue-500/30 selection:text-white">
      {/* Global Premium Effects */}
      <div className="premium-glow" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.015),transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.01),transparent_50%)] pointer-events-none" />
      
      <Navbar />
      <main className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 pt-20 space-y-16 md:space-y-20 relative z-10">
        <ScrollReveal delay={0.2}>
          <Hero />
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <About />
        </ScrollReveal>
        <ScrollReveal delay={0.6}>
          <WhyMe />
        </ScrollReveal>
        <ScrollReveal delay={0.8}>
          <Skills />
        </ScrollReveal>
        <ScrollReveal delay={1.0}>
          <BuildStack />
        </ScrollReveal>
        <ScrollReveal delay={1.2}>
          <EngineeringMindset />
        </ScrollReveal>
        <ScrollReveal delay={1.4}>
          <Projects />
        </ScrollReveal>
        <ScrollReveal delay={1.6}>
          <FeaturedProject />
        </ScrollReveal>
        <ScrollReveal delay={1.8}>
          <Achievements />
        </ScrollReveal>
        <ScrollReveal delay={2.0}>
          <Certifications />
        </ScrollReveal>
        <ScrollReveal delay={2.2}>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
