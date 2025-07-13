import React, { useEffect, useRef } from 'react';
import "./component-styles/sidebar.css";
import AboutSidebar from './side/AboutSidebar';
import ResumeSidebar from './side/ResumeSidebar';
import PortfolioSidebar from './side/PortfolioSidebar';
import ContactSidebar from './side/ContactSidebar';

const Sidebar = ({ isOpen, onClose, contentType }) => {
  const sidebarRef = useRef(null);

  // Keyboard accessibility: close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap for accessibility (simple version)
  useEffect(() => {
    if (isOpen && sidebarRef.current) {
      sidebarRef.current.focus();
    }
  }, [isOpen]);

  const sidebarContent = {
    about: <AboutSidebar />,
    resume: <ResumeSidebar />,
    portfolio: <PortfolioSidebar />,
    contact: <ContactSidebar />
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay fancy-overlay" onClick={onClose} aria-label="Close sidebar" tabIndex={0} />}
      <aside
        className={`sidebar glassmorphic${isOpen ? ' open sidebar-animate' : ''}`}
        ref={sidebarRef}
        tabIndex={-1}
        aria-hidden={!isOpen}
        aria-label="Sidebar"
        role="complementary"
      >
        {isOpen && (
          
          <>
            <button className="close-btn fancy-close" onClick={onClose} aria-label="Close sidebar">
              <span aria-hidden="true">✕</span>
            </button>
            {sidebarContent[contentType] || (
              <div className="sidebar-content">
                <div className="sidebar__title">
                  <div className="sidebar__title--img avatar-gradient">👨‍💻</div>
                  <h1 className="sidebar__title--text">George Munday</h1>
                  <p className="sidebar__title--subtitle">Web Developer</p>
                </div>
              </div>
            )}
          </>
        )}
      </aside>
    </>
  );
};

export default Sidebar;