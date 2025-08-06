import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../utils/api'; 

// This component provides a form for existing users to log in
const LoginPage = () => {
  const navigate = useNavigate();
  // State to hold the form data (email, password)
  const [formData, setFormData] = useState({
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
      // Send a POST request to the login endpoint
      const res = await API.post('/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      console.log('Login successful, token stored:', res.data.token);
      navigate('/dashboard'); // Redirect to the dashboard
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
    } 
  };

  return (
    // Main container to center the form
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Form card with padding, rounded corners, and a shadow */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Form title */}
        <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
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
              Login
            </button>
            <Link to="/register" className="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-800">
              Don't have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;