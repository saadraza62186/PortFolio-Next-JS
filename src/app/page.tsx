// Add this line at the very top to mark it as a client component
"use client";

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: 'bottom-bottom',
      offset: 160,
    });
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
