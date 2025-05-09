import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Set loading state while API call is in progress

    try {
      // Send a POST request to Flask API
      const response = await axios.post('https://innokay.pythonanywhere.com/api/forgot-password', {
        email,
      });

      setMessage(response.data.message);  // Set success message
    } catch (error) {
      // Handle errors
      console.log(error.message);
      setMessage(error.response?.data?.message || 'Something went wrong. We will send your link once we fix the issues');  // Set error message
    } finally {
      setLoading(false);  // Set loading to false when done
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder='Enter your email'
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='btn btn-success' disabled={loading}>
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
