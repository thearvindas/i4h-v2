import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <nav className="container">
        <Link to="/" className="logo">
          healing beyond pelvic pain
        </Link>
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <AnimatePresence>
          {(isMenuOpen || window.innerWidth > 768) && (
            <motion.ul 
              className={`nav-links ${isMenuOpen ? 'active' : ''}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <li><Link to="/overview">Overview</Link></li>
              <li><Link to="/pelvic-pain-101">Pelvic Pain 101</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/recommendations">Recommendations</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header; 