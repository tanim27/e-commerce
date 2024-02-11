import React, { useState, useEffect } from 'react';
import './CallToAction.css';

function CallToAction() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <div className={`call-to-action ${showButton ? 'show' : ''}`} onClick={scrollToTop}>
        <button className="action-button"><ion-icon name="arrow-up-circle"></ion-icon></button>
      </div>
    </div>
  );
}

export default CallToAction;
