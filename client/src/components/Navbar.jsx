import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  // State to track if the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check for a token in local storage on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Function to handle logging out the user
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    setIsAuthenticated(false); // Update the state
    navigate('/'); // Redirect to the homepage
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">
          Culinary Compass
        </Link>
        <div className="space-x-4">
          {isAuthenticated ? (
            // Links to show when the user is logged in
            <>
              <Link
                to="/dashboard"
                className="text-gray-800 hover:text-green-600 transition-colors duration-200"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            // Links to show when the user is not logged in
            <>
              <Link
                to="/login"
                className="text-gray-800 hover:text-green-600 transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-200"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;