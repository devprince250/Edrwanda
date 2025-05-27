import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaBookOpen, 
  FaUserGraduate, 
  FaBars, 
  FaTimes, 
  FaChalkboardTeacher, 
  FaHome, 
  FaEnvelope,
  FaSignInAlt,
  FaUserPlus
} from 'react-icons/fa';
import clsx from 'clsx';

const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnPQ1ioTlfBaWH1QTHAcEDHVHt5e0bDh-S1muuclavPQPuRSQ&s";

const navLinks = [
  { to: '/', label: 'Home', icon: <FaHome className="text-lg" /> },
  { to: '/courses', label: 'Courses', icon: <FaBookOpen className="text-lg" /> },
  { to: '/teachers', label: 'Instructors', icon: <FaChalkboardTeacher className="text-lg" /> },
  { to: '/contact', label: 'Contact', icon: <FaEnvelope className="text-lg" /> },
  { to: '/students', label: 'Students', icon: <FaUserGraduate className="text-lg" /> },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-green-100 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Top bar with logo and main navigation */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="EDURWANDA Logo" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow bg-white p-1 border border-green-200" />
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-green-800 hidden xs:inline-block sm:block">EDURWANDA</span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={clsx(
                  'flex items-center gap-2 px-2 lg:px-3 py-2 rounded-lg font-medium transition-colors text-sm lg:text-base',
                  location.pathname === link.to
                    ? 'bg-green-700 text-white shadow-md'
                    : 'text-green-800 hover:bg-green-200 hover:text-green-900'
                )}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Auth buttons - desktop */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 ml-2 lg:ml-4">
            <Link
              to="/login"
              className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-green-800 hover:bg-green-200 text-sm lg:text-base"
            >
              <FaSignInAlt />
              <span>Login</span>
            </Link>
            <Link
              to="/register"
              className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-white bg-green-700 hover:bg-green-800 shadow-md text-sm lg:text-base"
            >
              <FaUserPlus />
              <span>Register</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              className="text-green-800 p-2"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden bg-green-50 px-2 pb-4 flex flex-col gap-1 animate-fade-in rounded-b-lg shadow-md">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={clsx(
                  'flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-base',
                  location.pathname === link.to
                    ? 'bg-green-700 text-white shadow-md'
                    : 'text-green-800 hover:bg-green-200'
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
            <div className="border-t border-green-200 mt-2 pt-2 flex flex-col gap-1">
              <Link
                to="/login"
                className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-green-800 hover:bg-green-200"
                onClick={() => setMobileOpen(false)}
              >
                <FaSignInAlt />
                <span>Login</span>
              </Link>
              <Link
                to="/register"
                className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-white bg-green-700 hover:bg-green-800 shadow-md"
                onClick={() => setMobileOpen(false)}
              >
                <FaUserPlus />
                <span>Register</span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;