import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from './components/SideBar';
import CubeCarousel from './components/carousel/Carousel';

import HomePage from './components/HomePage';
import Map from './components/Map';
import AdminDashboard from './components/AdminDashboard';
import Cart from './components/Cart';
import AddProduct from './components/AddProduct';
import ForgotPassword from './components/ForgotPassword';
import Signin from './components/SignIn';
import Signup from './components/Signup';
import UserDashboard from './components/UserDashboard';
import About from './components/About';
import ContactTeam from './components/ContactTeam';
import SingleProduct from './components/SingleProduct';
import Category from './components/Category';

function App() {
  const [showSplash, setShowSplash] = useState(true); // State to control splash screen

  useEffect(() => {
    // Hide splash screen after 3 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (showSplash) {
    // Render splash screen
    return (
      <div className="splash-screen">
        <h1 className="splash-text gradient-text">Welcome to Kay's Collection</h1>
        <p className="splash-subtext gradient-text">Outshine The Inner You</p>
      </div>
    );
  }

  // Render the main app after splash screen
  return (
    <Router>
      <div className="App bg-light">
        <div className="container">
          <div className="animated-text">
            <h1 className="text-success gradient-text">Welcome to Kay's Collection</h1>
            <p className="text-info gradient-text">Outshine The Inner You</p>
          </div>
          
          <Navbar />

          <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1 p-3">
              <CubeCarousel />

              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/map" element={<Map />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/addproduct" element={<AddProduct />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/singleproduct" element={<SingleProduct />} />
                <Route path="/contact" element={<ContactTeam />} />
                <Route path="/about" element={<About />} />
                <Route path="/clientdashboard" element={<UserDashboard />} />
                <Route path="/admindashboard" element={<AdminDashboard />} />
              </Routes>
              <Category />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;