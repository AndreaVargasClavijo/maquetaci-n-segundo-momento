import React from 'react';
import '../index.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <h2 className="footer-title">Este es el footer</h2>
      <div className="footer-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <span> | </span>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
      </div>
    </footer>
  );
};

export default Footer;
