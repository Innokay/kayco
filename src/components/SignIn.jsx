import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Signin = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let [showModal, setShowModal] = useState(false); // State to control the popup/modal visibility
    let navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle the password visibility
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            setError("");
            setLoading("Please wait...");

            const data = new FormData();
            data.append("username", username);
            data.append("password", password);

            const response = await axios.post("https://Innoh.pythonanywhere.com/api/signin", data);

            // Debugging: Log the response to check its structure
            console.log("API Response:", response);

            if (response.status === 200 && response.data.user) {
                console.log("Stored user:", response.data.user);
                localStorage.setItem("user", JSON.stringify(response.data.user));


                localStorage.setItem("user", JSON.stringify(response.data.user));
                setShowModal(true); // Show the popup/modal
            } else if (response.data.error) {
                setLoading("");
                setError(response.data.error); // Display error message from the API
            } else {
                setLoading("");
                setError("Access Denied"); // Default error message
            }
        } catch (error) {
            setLoading("");
            console.error("Error:", error); // Log the error for debugging
            setError("Something went wrong. Please try again.");
        }
    };

    const handleCancel = () => {
        setShowModal(false); // Close the modal
        navigate("/"); // Navigate to the Get Products page
    };

    const handleSeeDashboard = () => {
        const user = JSON.parse(localStorage.getItem("user")); // Retrieve user data from localStorage
        console.log("User category:", user?.category); // Debugging
        if (user && user.category && user.category.toLowerCase() === "admin") {
            navigate("/admin"); // Navigate to the admin dashboard
        } else {
            navigate("/clientdashboard"); // Navigate to the client dashboard
        }
    };

    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4 bg-dark text-light">
                <h2>Sign In</h2>
                <b className="text-danger">{error}</b>
                <b className="text-warning">{loading}</b>
                <form onSubmit={submitForm}>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        required
                        className="form-control"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <div className="input-group">
                        <input
                            type={showPassword ? "text" : "password"} // Toggle input type
                            placeholder="Enter Password"
                            required
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? "Hide" : "Show"} {/* Button text changes */}
                        </button>
                    </div>
                    <br />

                    <button className="btn btn-success innoh" type="submit">
                        Sign In
                    </button>
                </form>
                <p>
                    <Link to="/forgotpassword">Forgot Password?</Link>
                </p>
                <p>
                    Don't have an account? <Link to="/signup">Register</Link>
                </p>
            </div>

            {/* Popup Modal */}
            {/* Popup Modal */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3 className="text-success">Login Successful</h3>
                        <div className="d-flex justify-content-between mt-4 w-100">
                            <button className="btn btn-secondary" onClick={handleCancel}>
                                Cancel
                            </button>
                            <button className="btn btn-primary" onClick={handleSeeDashboard}>
                                See Dashboard
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Signin;
