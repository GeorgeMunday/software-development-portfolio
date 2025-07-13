import React from 'react';
import "./component-styles/infobar.css";
import AboutInfo from './info/AboutInfo';
import ECommerceInfo from './info/ECommerceInfo';
import TaskAppInfo from './info/TaskAppInfo';
import ContactInfo from './info/ContactInfo';

const InfoBar = ({ isOpen, onClose, infoType }) => {
  // Content for different info cases
  const infoContent = {
    about: <AboutInfo />,
    ecommerce: <ECommerceInfo />,
    taskapp: <TaskAppInfo />,
    contact: <ContactInfo />
  };

  return (
    <>
      {isOpen && (
        <div
          className="infobar-overlay"
          onClick={onClose}
          aria-label="Close infobar"
          tabIndex={0}
          style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1199, background: 'rgba(20,20,30,0.18)'}}
        />
      )}
      <aside className={`infobar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        <div className="infobar-content">
          {infoContent[infoType] || (
            <div className="info-content">
              <h3>Information</h3>
              <p>Select an item to view details.</p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default InfoBar;