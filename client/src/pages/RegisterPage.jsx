import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../utils/api'; 

// This component provides a form for new users to register
const RegisterPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  // State to hold the form data (username, email, password)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Handler to update state as the user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the register endpoint
      const res = await API.post('/auth/register', formData);
      // Store the token in local storage
      localStorage.setItem('token', res.data.token);
      console.log('Registration successful, token stored:', res.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
    }
  };

  return (
    // Main container to center the form
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Form card with padding, rounded corners, and a shadow */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Form title */}
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          {/* Username input field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          {/* Email input field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {/* Password input field */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {/* Form action buttons and link */}
          <div className="flex items-center justify-between">
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
            <Link to="/login" className="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-800">
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;