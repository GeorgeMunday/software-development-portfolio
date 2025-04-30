import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './componets/header';
import Sidebar from './componets/sidebar';
import AboutMain from './componets/mains/about-main';
import ResumeMain from './componets/mains/resume-main';
import Portfolio from './componets/mains/portfolio-main';
import ContactMain from './componets/mains/contact-main';

export default function Page() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderMainContent = () => {
    switch (currentPage) {
      case 'About':
        return <AboutMain />;
      case 'Resume':
        return <ResumeMain />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <ContactMain />;
      default:
        return <AboutMain />;
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: {duration: 2}

  };

  return (
    <div className="container">
      <Header currentPage={currentPage} setPage={setCurrentPage} />
      <Sidebar />
      <div>
        <main className="main">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {renderMainContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
