import React, { useState } from 'react';
import GetProducts from './GetProducts'; // Import the GetProducts component

const HomePage = () => {
  const [showProducts, setShowProducts] = useState(false); // State to toggle GetProducts component

  // Function to handle "Get Started" button click
  const handleGetStartedClick = () => {
    setShowProducts(true); // Show the GetProducts component
  };

  return (
    <div>
      {/* Conditionally render the homepage or GetProducts */}
      {!showProducts ? (
        <>
          {/* Homepage content */}
          <p className="text-success">Welcome To Our company</p>
          <div className="card">
            <div className="card-header bg-info">
              <h1 className="text-success">Kays Collection</h1>
              <h2 className="text-success">Best Collection of Clothes and Shoes</h2>
            </div>
            <div className="card-body bg-secondary position-relative">
              {/* Image container */}
              <img
                src="images/kayscollectionlogo.png"
                className="Homepage img-fluid"
                alt="Kays Collection Logo"
              />
              {/* Text overlay */}
              <div
                className="position-absolute top-50 start-50 translate-middle text-white text-center"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '10px',
                  borderRadius: '5px',
                }}
              >
                <h3>Discover Our Latest Collection</h3>
                <button className="btn btn-success" onClick={handleGetStartedClick}>
                  Get Started
                </button>
                <p>Shop Now and Enjoy Exclusive Offers!</p>
              </div>
            </div>
            <div className="card-footer bg-dark">
              <p className="text-success">
                We are the best ecommerce seller of best clothes and shoes. Contact us for more,
                Wanna see the products?
              </p>
            </div>
          </div>
        </>
      ) : (
        // Render GetProducts component when showProducts is true
        <GetProducts />
      )}
    </div>
  );
};

export default HomePage;