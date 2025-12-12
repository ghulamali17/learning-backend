import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link to="/">MyLogo</Link>
      </div>
      <ul className="hidden md:flex space-x-6">
        <li className="hover:text-gray-200 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-gray-200 cursor-pointer">About</li>
        <li className="hover:text-gray-200 cursor-pointer">Services</li>
        <li className="hover:text-gray-200 cursor-pointer">Contact</li>
        <li className="hover:text-gray-200 cursor-pointer">
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <div className="md:hidden">
        {/* Mobile menu icon */}
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
