import React, { useState } from 'react';
import axios from 'axios';

const Category = () => {
  const [categoryName, setCategoryName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    try {
      // Replace with your PythonAnywhere backend API endpoint
      const response = await axios.post(
        'https://Innoh.pythonanywhere.com/api/categories',
        { category_name: categoryName },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        setSuccessMessage('Category added successfully!');
        setCategoryName(''); // Clear the input field
      } else {
        setErrorMessage('Failed to add category. Please try again.');
      }
    } catch (error) {
      // Handle errors and display appropriate messages
      if (error.response) {
        // Server responded with a status other than 2xx
        setErrorMessage(error.response.data.error || 'Failed to add category. Please try again.');
      } else if (error.request) {
        // Request was made but no response received
        setErrorMessage('No response from server. Please check your connection.');
      } else {
        // Something else caused the error
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Add a New Category</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label htmlFor="categoryName">Category Name</label>
          <input
            type="text"
            id="categoryName"
            className="form-control"
            placeholder="Enter category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Category
        </button>
      </form>

      {/* Success Message */}
      {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}

      {/* Error Message */}
      {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
    </div>
  );
};

export default Category;

