import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Health from './pages/Health';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Track page views with Google Analytics
    if (window.gtag) {
      window.gtag('config', 'G-SEHMRL89BD', {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);

  useEffect(() => {
    // Initialize WOW.js when available
    if (window.WOW) {
      new window.WOW().init();
    }

    // Back to top button functionality
    const handleScroll = () => {
      const backToTop = document.querySelector('.back-to-top');
      if (backToTop) {
        if (window.scrollY > 300) {
          backToTop.style.display = 'block';
        } else {
          backToTop.style.display = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize EmailJS
    if (window.emailjs) {
      window.emailjs.init("mOVbL7h8YKppC1fsN");
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Spinner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/health" element={<Health />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
