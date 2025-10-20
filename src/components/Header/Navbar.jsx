import React from "react";
import { Link, NavLink } from "react-router-dom";
import gitImg from "../../assets/git.png";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
        >
          <img className="w-8 h-8 md:w-10 md:h-10" src={logo} alt="logo" />
          <h2 className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold text-xl tracking-tight">
            HERO.IO
          </h2>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `font-medium text-[16px] transition-all duration-300 ${
                    isActive
                      ? "underline decoration-[#632EE3] underline-offset-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold"
                      : "text-black hover:text-[#632EE3]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* GitHub Button */}
        <button
          onClick={() =>
            window.open("https://github.com/BushraAkterMimno", "_blank")
          }
          className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-md text-white font-semibold text-base bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:scale-105 transition-transform duration-300"
        >
          <img src={gitImg} alt="GitHub" className="w-5 h-5" />
          Contribute
        </button>

        {/* Mobile Dropdown */}
        <div className="md:hidden">
          <details className="relative">
            <summary className="list-none cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
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
            </summary>

            <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-lg p-3 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block font-medium text-[16px] transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold underline underline-offset-4"
                          : "text-black hover:text-[#632EE3]"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li>
                <button
                  onClick={() =>
                    window.open(
                      "https://github.com/BushraAkterMimno",
                      "_blank"
                    )
                  }
                  className="mt-2 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-white font-medium bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:scale-105 transition-transform"
                >
                  <img src={gitImg} alt="GitHub" className="w-4 h-4" />
                  Contribute
                </button>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
