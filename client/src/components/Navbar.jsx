import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // Main navigation bar container with shadow and padding
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* App title and link to the homepage */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          Culinary Compass
        </Link>
        {/* Navigation links for login and registration */}
        <div className="space-x-4">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;