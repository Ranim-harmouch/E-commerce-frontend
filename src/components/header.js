import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Make sure useNavigate is imported
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to navigate to the Cart page
  const handleCartClick = () => {
    navigate("/cart"); // Change "/cart" to the correct path for your Cart page
  };

  // Function to navigate to the Login page
  const handleUserClick = () => {
    navigate("/login"); // Change "/login" to the correct path for your Login page
  };

  return (
    <header className="flex justify-between items-center p-4 md:p-6 bg-white border-b border-gray-300 shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-bold">PowerTech</div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-800 hover:underline font-medium">
          Home
        </Link>
        <Link to="/contact" className="text-gray-800 hover:underline font-medium">
          Contact
        </Link>
        <Link to="/about" className="text-gray-800 hover:underline font-medium">
          About
        </Link>
        <Link to="/signup" className="text-gray-800 hover:underline font-medium">
          Sign Up
        </Link>
      </nav>

      {/* Search & Icons */}
      <div className="flex items-center space-x-4">
        {/* Search Box */}
        <div className="relative flex items-center border border-gray-300 rounded-lg px-3 py-1.5 bg-white w-60">
          <FaSearch className="absolute left-3 text-gray-500" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="pl-8 pr-2 py-1 w-full outline-none text-gray-700"
          />
        </div>
        
        {/* Cart Icon */}
        <button 
          className="text-gray-600 hover:text-gray-900 text-xl" 
          onClick={handleCartClick} // Add the click handler for the cart icon
        >
          <FaShoppingCart />
        </button>

        {/* User Icon */}
        <button 
          className="text-gray-600 hover:text-gray-900 text-xl" 
          onClick={handleUserClick} // Add the click handler for the user icon
        >
          <FaUser />
        </button>
      </div>
    </header>
  );
};

export default Header;
