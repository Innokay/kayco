import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const Signup = () => {
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [password, setPassword] = useState("");
    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");

    let navigate = useNavigate(); // Initialize useNavigate

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            setError("");
            setLoading("Please wait while we submit your data");
            const data = new FormData();
            data.append("username", username);
            data.append("email", email);
            data.append("phone", phone);
            data.append("password", password);

            const response = await axios.post("https://Innoh.pythonanywhere.com/api/signup", data);

            setLoading("");
            setSuccess(response.data.Success);

            // Navigate to the sign-in page after successful registration
            navigate("/signin");
        } catch (error) {
            setLoading("");
            setError("Something went wrong");
        }
    };

    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4 bg-dark text-light">
                <h2>Sign Up</h2>
                <b className="text-danger">{error}</b>
                <b className="text-warning">{loading}</b>
                <b className="text-success">{success}</b>
                <hr />
                <form onSubmit={submitForm}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Name"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />

                    <input
                        type="email"
                        className="form-control"
                        required
                        placeholder="Enter Your Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />

                    <input
                        type="tel"
                        required
                        placeholder="Enter Phone No"
                        className="form-control"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <br />

                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />

                    <button className="btn btn-primary">Sign Up</button>
                </form>
                <p>
                    Already have an account? <Link to="/signin">Log In Here</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;