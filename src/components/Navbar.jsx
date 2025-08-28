import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 bg-transparent backdrop-blur-xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logoImg} alt="Logo" className="h-14 w-auto" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/portfolio"
                className="relative group text-black px-3 py-2 text-sm font-medium"
              >
                Portfolio
                <span className="absolute left-0 bottom-0 h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/promo"
                className="relative group text-black px-3 py-2 text-sm font-medium"
              >
                Promo
                <span className="absolute left-0 bottom-0 h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/pricing"
                className="relative group text-black px-3 py-2 text-sm font-medium"
              >
                Pricing
                <span className="absolute left-0 bottom-0 h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/contact"
                className="relative group text-black px-3 py-2 text-sm font-medium"
              >
                Contact
                <span className="absolute left-0 bottom-0 h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-gray-800 focus:outline-none"
            >
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-transparent backdrop-blur-xl ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/portfolio"
              className="block px-3 py-2 text-base font-medium text-black "
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link
              to="/promo"
              className="block px-3 py-2 text-base font-medium text-black "
              onClick={toggleMenu}
            >
              Promo
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 text-base font-medium text-black "
              onClick={toggleMenu}
            >
              Cijena
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-black "
              onClick={toggleMenu}
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
