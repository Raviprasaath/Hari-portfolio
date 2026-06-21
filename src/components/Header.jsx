import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo.avif";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black h-24 flex items-center justify-between px-6 md:px-12 fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <Link
        to="/"
      >
        <img
          src={Logo}
          className="w-32 md:w-44 object-contain"
          alt="Logo"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-12 text-white text-lg font-medium">
        <Link
          to="/"
          className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px]
          after:w-0 after:bg-white after:transition-all after:duration-300
          hover:after:w-full"
        >
          Home
        </Link>

        <Link
          to="/services"
          className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px]
          after:w-0 after:bg-white after:transition-all after:duration-300
          hover:after:w-full"
        >
          Services
        </Link>

        <Link
          to="/portfolio"
          className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px]
          after:w-0 after:bg-white after:transition-all after:duration-300
          hover:after:w-full"
        >
          Portfolio
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-24 left-0 w-full bg-black border-t border-gray-800
        transition-all duration-300 ease-in-out overflow-hidden
        ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col text-white">
          <Link
            to="/"
            className="px-6 py-4 border-b border-gray-800 hover:bg-gray-900 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/portfolio"
            className="px-6 py-4 hover:bg-gray-900 transition"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>
        </nav>
      </div>
    </header>
  );
}