import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user")); // Check if a user exists in localStorage
    const [showLogoutModal, setShowLogoutModal] = useState(false); // State to control the logout confirmation modal

    const handleLogout = () => {
        setShowLogoutModal(false); // Close the modal
        localStorage.clear(); // Clear user data from localStorage
        navigate("/signin"); // Redirect to the sign-in page
    };

    return (
        <div className="container-fluid">
            <div>
                <section className="row">
                    <div className="col-md-12">
                        <nav>
                            <div className="navbar navbar sticky-top navbar-expand-md navbar-dark bg-light">
                                <Link to="/" className="navbar-brand text-center text-uppercase text-dark" id="anchortag">
                                    KAY'S COLLECTION
                                </Link>
                                <button className="navbar-toggler" data-bs-target="#navbarCollapse" data-bs-toggle="collapse">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarCollapse">
                                    <div className="navbar-nav">
                                        <Link to="/" className="nav-link text-info">Home</Link>
                                        <Link to="/addproduct" className="nav-link text-info">Add Product</Link>
                                        <Link to="/map" className="nav-link text-info">View Map</Link>
                                    </div>
                                    <div className="navbar-nav ms-auto text-uppercase">
                                        {user ? (
                                            // If user exists, show "Hello, [username]" and "Log Out"
                                            <>
                                                <span className="nav-link text-warning">Hello, {user.username}</span>
                                                <button
                                                    className="btn btn-link nav-link text-dark"
                                                    onClick={() => setShowLogoutModal(true)} // Show the logout confirmation modal
                                                >
                                                    Log Out
                                                </button>
                                            </>
                                        ) : (
                                            // If no user, show Login and Create Account
                                            <>
                                                <Link to="/signin" className="nav-link text-dark">Login</Link>
                                                <Link to="/signup" className="nav-link text-dark">Create Account</Link>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </section>
            </div>

            {/* Logout Confirmation Modal */}
            {showLogoutModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h5 className="text-danger">Are you sure you want to log out?</h5>
                        <div className="d-flex justify-content-between mt-4">
                            <button
                                className="btn btn-secondary"
                                onClick={() => setShowLogoutModal(false)} // Close the modal
                            >
                                No
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={handleLogout} // Log out the user and close the modal
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;