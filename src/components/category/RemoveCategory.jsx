import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RemoveCategory = () => {
  const [categories, setCategories] = useState([]);

  // Fetch categories from the backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://InnoKay.pythonanywhere.com/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  // Handle category removal
  const handleRemove = async (id) => {
    try {
      await axios.delete(`https://InnoKay.pythonanywhere.com/categories/${id}`);
      setCategories(categories.filter((category) => category.id !== id));
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div>
      <h2>Categories Available</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}{' '}
            <button onClick={() => handleRemove(category.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RemoveCategory;