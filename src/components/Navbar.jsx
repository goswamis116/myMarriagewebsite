import { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#home" className="navbar-logo" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                }}>
                    A & S
                </a>

                <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <li>
                        <a
                            href="#about"
                            className="navbar-link"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('about');
                            }}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#venue"
                            className="navbar-link"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('venue');
                            }}
                        >
                            Venue
                        </a>
                    </li>
                    <li>
                        <a
                            href="#timeline"
                            className="navbar-link"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('timeline');
                            }}
                        >
                            Timeline
                        </a>
                    </li>
                    <li>
                        <a
                            href="#gallery"
                            className="navbar-link"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('gallery');
                            }}
                        >
                            Gallery
                        </a>
                    </li>
                </ul>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>

                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
