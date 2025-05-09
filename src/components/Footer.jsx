import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Footer = () => {
  const [formData, setFormData] = useState({ email: "", comment: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Sending...");

    // Build a FormData object
    const data = new FormData();
    data.append("email", formData.email);
    data.append("comment", formData.comment);

    try {
      await axios.post("https://InnoKay.pythonanywhere.com/api/send-comment", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("Message sent successfully!");
      setFormData({ email: "", comment: "" });
    } catch (error) {
      setMessage("Failed to send message.");
    }
  };

  return (
    <div className="justify-content-center">
      <section className="row bg-secondary p-4">
        <div className="col-md-4 text-dark">
          <h4 className="text-white text-uppercase">Our Location</h4>
          <p>
            We are located in Lanet area in Nakuru county. We are opposite Buffalo Mall in Nakuru. Welcome and have the best user experience.
          </p>
          <p>
            You can also order for a good, we will get it delivered in minutes. We are you!
          </p>
        </div>

        <div className="col-md-4">
          <h4 className="text-center text-white text-uppercase">Stay Linked</h4>
          <p>Dear Customer, you are important to us. Please leave comments, complimentaries or complaints here</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Here"
              required
              className="form-control"
            /><br />
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Leave your Comment"
              cols="20"
              rows="7"
              required
              className="form-control"
            ></textarea><br />
            <input type="submit" value="Send Message" className="btn btn-dark" />
          </form>
          {message && <p className="mt-2 text-light">{message}</p>}
        </div>

        <div className="col-md-4 text-light">
          <h4 className="text-center">Contact us on</h4><br />
          <Link to="https://facebook.com">
            <img src="Images/fb.png" alt="Facebook" className="text-info" width="50px" />
          </Link>
          <Link to="https://instagram.com">
            <img src="Images/in.png" alt="Instagram" className="text-success" width="50px" />
          </Link>
          <p className="text-dark">
            We love it if you share with us. If you wish to communicate with us via Whatsapp, click{" "}
            <a href="https://wa.me/+254793650045">Here <img src="Images/whatsapp.png" alt="" width="30px" /></a>
          </p>
        </div>

        <marquee className="text-warning">Outshine the inner you</marquee>
      </section>
      <footer className="bg-dark text-white text-center p-2">
        <h5>Developed by Khaemba Wanjala &copy;2025. All rights reserved</h5>
      </footer>
    </div>
  );
};

export default Footer;

   