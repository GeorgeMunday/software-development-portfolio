import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./component-styles/header.css"

export default function Header({ currentPage, setPage }) {
  const titleVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <header className="header">
      <div className="header__title">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentPage}
            className="header__title--text"
            variants={titleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {currentPage === 'Home' ? 'Home' : currentPage}
          </motion.h1>
        </AnimatePresence>
      </div>

      <nav className="header__nav">
        <ul className="header__nav--list">
          <li className="header__nav--item">
            <button className="header__nav--button1" onClick={() => setPage('Home')}>Home</button>
          </li>
          <li className="header__nav--item">
            <button className="header__nav--button1" onClick={() => setPage('Resume')}>Resume</button>
          </li>
          <li className="header__nav--item">
            <button className="header__nav--button1" onClick={() => setPage('Portfolio')}>Portfolio</button>
          </li>
          <li className="header__nav--item">
            <button className="header__nav--button4" onClick={() => setPage('Contact')}>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
