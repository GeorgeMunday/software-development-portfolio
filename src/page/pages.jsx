import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './componets/header';
import Sidebar from './componets/sidebar';
import InfoBar from './componets/infobar';
import AboutMain from './componets/mains/about-main';
import ResumeMain from './componets/mains/resume-main';
import Portfolio from './componets/mains/portfolio-main';
import ContactMain from './componets/mains/contact-main';

export default function Page() {
  // Page state management
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('currentPage') || 'About';
  });

  // Sidebar states
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarContentType, setSidebarContentType] = useState('about');
  
  // InfoBar states
  const [isInfoBarOpen, setIsInfoBarOpen] = useState(false);
  const [infoType, setInfoType] = useState('');

  // Persistent page state
  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  // Handlers
  const handleSidebarToggle = (type) => {
    if (type) {
      if (isSidebarOpen && sidebarContentType === type) {
        setIsSidebarOpen(false);
      } else {
        setSidebarContentType(type);
        setIsSidebarOpen(true);
      }
    } else {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const handleInfoClick = (type) => {
    if (isInfoBarOpen && infoType === type) {
      setIsInfoBarOpen(false);
    } else {
      setInfoType(type);
      setIsInfoBarOpen(true);
    }
  };

  // Page content renderer
  const renderMainContent = () => {
    switch (currentPage) {
      case 'About':
        return (
          <AboutMain 
            onSidebarToggle={handleSidebarToggle}
            onInfoClick={handleInfoClick}
            setPage={setCurrentPage}
          />
        );
      case 'Resume':
        return <ResumeMain onSidebarToggle={handleSidebarToggle} onInfoClick={handleInfoClick} />;
      case 'Portfolio':
        return <Portfolio onSidebarToggle={handleSidebarToggle} onInfoClick={handleInfoClick} />;
      case 'Contact':
        return <ContactMain onSidebarToggle={handleSidebarToggle} onInfoClick={handleInfoClick} />;
      default:
        return (
          <AboutMain 
            onSidebarToggle={handleSidebarToggle}
            onInfoClick={handleInfoClick}
            setPage={setCurrentPage}
          />
        );
    }
  };

  // Animation settings
  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  // Determine CSS classes based on state
  const mainContentClasses = [
    'main-content',
    isSidebarOpen ? 'sidebar-open' : '',
    isInfoBarOpen ? 'infobar-open' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className="page-container">
      <Header 
        currentPage={currentPage} 
        setPage={setCurrentPage} 
        onMenuToggle={() => handleSidebarToggle()}
      />
      
      <div className="content-wrapper">
        {/* Left Sidebar */}
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)}
          contentType={sidebarContentType}
        />
        
        {/* Right InfoBar */}
        <InfoBar 
          isOpen={isInfoBarOpen} 
          onClose={() => setIsInfoBarOpen(false)}
          infoType={infoType}
        />
        
        {/* Main Content Area */}
        <main className={mainContentClasses}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {renderMainContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}