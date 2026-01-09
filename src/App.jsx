import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Venue from './components/Venue';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import MusicPlayer from './components/MusicPlayer';
import InvitationCard from './components/InvitationCard';
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Scroll reveal animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Automatic scroll hint for mobile users
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.scrollY === 0) {
        window.scrollBy({
          top: 350,
          behavior: 'smooth'
        });
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <MusicPlayer />
      <Hero />
      <About />
      <InvitationCard />
      <Venue />
      <Timeline />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
