import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Impact from './components/Impact';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

// ScrollToTop component to handle hash changes
const ScrollToTop = () => {
  const { hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL (e.g., #about)
    if (hash) {
      // Wait a bit for the DOM to fully render
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Scroll to the element
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
};

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<>
              <Hero />
              <About />
              <AboutMe />
              <Services />
              <Impact />
              <Blog />
              <Contact />
            </>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;