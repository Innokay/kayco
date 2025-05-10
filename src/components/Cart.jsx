// import axios from "axios";
// import { useState } from "react";
// import { useLocation } from "react-router-dom";

// const Cart = () => {
//   const location = useLocation();
//   const cart = location.state?.cart || []; // Retrieve cart items from state

//   // Calculate the total amount
//   const totalAmount = cart.reduce((total, product) => total + product.product_cost * product.quantity, 0);

//   const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
//   const [phone, setPhone] = useState(""); // State for M-Pesa number
//   const [loading, setLoading] = useState(""); // State for loading
//   const [success, setSuccess] = useState(""); // State for success message
//   const [error, setError] = useState(""); // State for error message

//   const handleCheckout = () => {
//     setShowPopup(true); // Show the popup
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false); // Close the popup
//     setPhone(""); // Reset phone input
//     setError("");
//     setSuccess("");
//   };

//   const submitForm = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     setLoading("Please wait as we process payment...");

//     try {
//       const data = new FormData();
//       data.append("phone", phone);
//       data.append("amount", totalAmount); // Use the total amount of the cart

//       const response = await axios.post("https://Innoh.pythonanywhere.com/api/mpesa_payment", data);
//       setLoading("");
//       setSuccess(response.data.message);
//     } catch (error) {
//       setLoading("");
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center">Your Cart</h1>
//       {cart.length === 0 ? (
//         <p className="text-center text-muted">Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="row">
//             {cart.map((product, index) => (
//               <div className="col-md-4 mb-4" key={index}>
//                 <div className="card shadow">
//                   <img
//                     src={`https://Innoh.pythonanywhere.com/static/images/${product.product_photo}`}
//                     className="card-img-top"
//                     alt={product.product_name}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{product.product_name}</h5>
//                     <p className="card-text">{product.product_desc}</p>
//                     <p className="card-text">
//                       <b>Product Number:</b> {index + 1}
//                     </p>
//                     <p className="card-text">
//                       <b>Price:</b> {product.product_cost} Ksh
//                     </p>
//                     <p className="card-text">
//                       <b>Quantity:</b> {product.quantity}
//                     </p>
//                     <p className="card-text">
//                       <b>Subtotal:</b> {product.product_cost * product.quantity} Ksh
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Total Amount and Checkout Section */}
//           <div className="mt-4 text-center">
//             <h4>
//               Total Amount: <b className="text-success">{totalAmount} Ksh</b>
//             </h4>
//             <button className="btn btn-primary mt-3" onClick={handleCheckout}>
//               Proceed to Checkout
//             </button>
//           </div>

//           {/* Payment Popup */}
//           {showPopup && (
//             <div className="modal" style={{ display: "block", backgroundColor: "rgba(44, 30, 177, 0.5)" }}>
//               <div className="modal-dialog modal-dialog-centered">
//                 <div className="modal-content bg-dark text-light">
//                   <div className="modal-header">
//                     <h5 className="modal-title">M-Pesa Payment</h5>
//                     <button className="btn-close" onClick={handleClosePopup}></button>
//                   </div>
//                   <div className="modal-body">
//                     <p>Total Amount: <b>{totalAmount} Ksh</b></p>
//                     <form onSubmit={submitForm}>
//                       <input
//                         type="tel"
//                         required
//                         onChange={(e) => setPhone(e.target.value)}
//                         className="form-control"
//                         placeholder="Enter M-Pesa Number (e.g., 2547xxxxxxxx)"
//                       />
//                       <br />
//                       <button className="btn btn-primary w-100" disabled={loading}>
//                         {loading ? "Processing..." : "Pay Now"}
//                       </button>
//                     </form>
//                     {error && <p className="text-danger mt-2">{error}</p>}
//                     {success && <p className="text-success mt-2">{success}</p>}
//                   </div>
//                   <div className="modal-footer">
//                     <button className="btn btn-secondary" onClick={handleClosePopup}>
//                       Close
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;

import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const cart = location.state?.cart || []; // Retrieve cart items from state

  // Calculate the total amount
  const totalAmount = cart.reduce((total, product) => total + product.product_cost * product.quantity, 0);

  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [phone, setPhone] = useState(""); // State for M-Pesa number
  const [loading, setLoading] = useState(""); // State for loading
  const [success, setSuccess] = useState(""); // State for success message
  const [error, setError] = useState(""); // State for error message

  const handleCheckout = () => {
    setShowPopup(true); // Show the popup
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
    setPhone(""); // Reset phone input
    setError("");
    setSuccess("");
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading("Please wait as we process payment...");

    try {
      const data = new FormData();
      data.append("phone", phone);
      data.append("amount", totalAmount); // Use the total amount of the cart

      const response = await axios.post("https://Innoh.pythonanywhere.com/api/mpesa_payment", data);
      setLoading("");
      setSuccess(response.data.message);

      // Automatically close the popup after 3 seconds
      setTimeout(() => {
        handleClosePopup();
      }, 3000);
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty.</p>
      ) : (
        <>
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
                    <p className="card-text">
                      <b>Product Number:</b> {index + 1}
                    </p>
                    <p className="card-text">
                      <b>Price:</b> {product.product_cost} Ksh
                    </p>
                    <p className="card-text">
                      <b>Quantity:</b> {product.quantity}
                    </p>
                    <p className="card-text">
                      <b>Subtotal:</b> {product.product_cost * product.quantity} Ksh
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Amount and Checkout Section */}
          <div className="mt-4 text-center">
            <h4>
              Total Amount: <b className="text-success">{totalAmount} Ksh</b>
            </h4>
            <button className="btn btn-primary mt-3" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>

          {/* Payment Popup */}
          {showPopup && (
            <div className="modal" style={{ display: "block", backgroundColor: "rgba(44, 30, 177, 0.5)" }}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-dark text-light">
                  <div className="modal-header">
                    <h5 className="modal-title">M-Pesa Payment</h5>
                    <button className="btn-close" onClick={handleClosePopup}></button>
                  </div>
                  <div className="modal-body">
                    <p>Total Amount: <b>{totalAmount} Ksh</b></p>
                    <form onSubmit={submitForm}>
                      <input
                        type="tel"
                        required
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                        placeholder="Enter M-Pesa Number (e.g., 2547xxxxxxxx)"
                      />
                      <br />
                      <button className="btn btn-primary w-100" disabled={loading}>
                        {loading ? "Processing..." : "Pay Now"}
                      </button>
                    </form>
                    {error && <p className="text-danger mt-2">{error}</p>}
                    {success && <p className="text-success mt-2">{success}</p>}
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={handleClosePopup}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;