import React from 'react'; 
import './style.css';

import Background from './components/Background';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe'; 

function App() {
  return (
    <>
      <Background />
      <div className="app">
        <HeroSection />
        <IntroSection />
        <Projects />
        <AboutMe /> 
        <Footer />
      </div>
    </>
  );
}

export default App;
