import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white shadow-md border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quote Section */}
        <div className="text-center mb-8">
          <blockquote className="text-2xl md:text-3xl font-bold text-gray-800 italic">
            "Education is the passport to the future, tomorrow belongs to those
            who prepare for it today."
          </blockquote>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo Section */}
          <div className="flex items-center justify-center md:justify-start">
            <NavLink to="/" className="flex items-center">
              <span className="ml-3 text-xl font-bold text-gray-800">
                ShikshyaSangam
              </span>
            </NavLink>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition duration-300"
            >
              <Facebook size={28} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition duration-300"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition duration-300"
            >
              <Linkedin size={28} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-gray-500">
            © {new Date().getFullYear()} ShikshyaSangam. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
