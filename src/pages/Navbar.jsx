import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../components/ContextApi";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  const { toggleDarkTheme, isDarkTheme } = GlobalContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/project", name: "Project" },
  ];

  return (
    <nav
      className={`w-full shadow-md sticky top-0 z-50 ${
        isDarkTheme ? "bg-slate-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="font-bold text-xl tracking-wide">
          Pawan.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition px-3 py-1 rounded-full ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                      : isDarkTheme
                      ? "hover:text-blue-400"
                      : "hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkTheme}
            className="text-xl hover:scale-110 transition"
          >
            {isDarkTheme ? "🌙" : "☀️"}
          </button>

          {/* Social Icons */}
          <div className="hidden sm:flex gap-3 text-lg">
            <a
              href="https://x.com/pawan0429"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/pawan-verma-7a8054329/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden px-4 pb-4 ${
            isDarkTheme ? "bg-slate-800" : "bg-gray-100"
          }`}
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                        : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Social */}
          <div className="flex gap-4 mt-4 text-lg">
            <a href="https://x.com/pawan0429" target="_blank" rel="noreferrer">
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/pawan-verma-7a8054329/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
