import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: "/apply-instructor", label: "Apply for Instructor" },
    { to: "/services", label: "Services" },
    { to: "/evaluate", label: "Evaluation" },
    { to: "/communities", label: "Communities" },
    { to: "/about", label: "About Us" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <span className="ml-3 text-xl font-bold text-gray-800">
                ShikshyaSangam
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium 
                  ${isActive ? "text-blue-700 bg-blue-50" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Authentication Links */}
            <div className="flex items-center space-x-2">
              <NavLink
                to="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition duration-300"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600 transition duration-300"
              >
                Sign Up
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `block text-gray-600 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium 
                    ${isActive ? "text-blue-700 bg-blue-50" : ""}`
                  }
                  onClick={toggleMenu}
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Mobile Authentication Links */}
              <div className="flex flex-col space-y-2 pt-2">
                <NavLink
                  to="/login"
                  className="block text-center bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition duration-300"
                  onClick={toggleMenu}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="block text-center bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600 transition duration-300"
                  onClick={toggleMenu}
                >
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
