import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
