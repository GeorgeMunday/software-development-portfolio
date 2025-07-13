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
  );
};

export default InfoBar;