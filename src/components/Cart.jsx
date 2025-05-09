import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate
  const cart = location.state?.cart || []; // Retrieve cart items from state

  const handleOrderNow = (product) => {
    // Navigate to the SingleProduct component with the selected product
    navigate("/singleproduct", { state: { product } });
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty.</p>
      ) : (
        <div className="row">
          {cart.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow">
                <img
                  src={`https://Innoh.pythonanywhere.com/static/images/${product.product_photo}`}
                  className="card-img-top"
                  alt={product.product_name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.product_name}</h5>
                  <p className="card-text">{product.product_desc}</p>
                  <b className="text-warning">{product.product_cost} Ksh</b>
                  <button
                    className="btn btn-primary w-100 mt-3"
                    onClick={() => handleOrderNow(product)} // Navigate to SingleProduct
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;