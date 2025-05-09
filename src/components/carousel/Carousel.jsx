import React from 'react';
import './CubeCarousel.css'; // Import the CSS for styling
import '@fortawesome/fontawesome-free/css/all.min.css';

const CubeCarousel = () => {
  return (
    <div className="carousel-container">
      <div className="cube">
        <div className="face front">
          <img src="/images/kayscollectionlogo.png" alt="Front" />
        </div>
        <div className="face back">
          <img src="https://via.placeholder.com/200?text=Back" alt="Back" />
        </div>
        <div className="face left">
          <img src="https://via.placeholder.com/200?text=Left" alt="Left" />
        </div>
        <div className="face right">
          <img src="https://via.placeholder.com/200?text=Right" alt="Right" />
        </div>
        <div className="face top">
          <img src="https://via.placeholder.com/200?text=Top" alt="Top" />
        </div>
        <div className="face bottom">
          <img src="https://via.placeholder.com/200?text=Bottom" alt="Bottom" />
        </div>
      </div>
    </div>
  );
};

export default CubeCarousel;