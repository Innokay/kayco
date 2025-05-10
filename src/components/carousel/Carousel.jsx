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
          <img src="/images/jewelery.jpg" alt="Back" />
        </div>
        <div className="face left">
          <img src="/images/menclothes.jpg" alt="Left" />
        </div>
        <div className="face right">
          <img src="/images/nike.jpg" alt="Right" />
        </div>
        <div className="face top">
          <img src="/images/fashion.jpg" alt="Top" />
        </div>
        <div className="face bottom">
          <img src="/images/ladiesheels.avif" alt="Bottom" />
        </div>
      </div>
    </div>
  );
};

export default CubeCarousel;