import React, { useState, useEffect } from 'react';
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
import { motion, AnimatePresence } from 'framer-motion';

const logo = "https://i.pinimg.com/736x/6e/15/11/6e15114d8317a82db9ada1f868f3fff8.jpg";

const navLinks = [
  { to: '/', label: 'Home', icon: <FaHome className="text-lg" /> },
  { to: '/courses', label: 'Courses', icon: <FaBookOpen className="text-lg" /> },
  { to: '/teachers', label: 'Instructors', icon: <FaChalkboardTeacher className="text-lg" /> },
  { to: '/contact', label: 'Contact', icon: <FaEnvelope className="text-lg" /> },
  { to: '/students', label: 'Students', icon: <FaUserGraduate className="text-lg" /> },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full bg-green-100 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Top bar with logo and main navigation */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand - Always visible on mobile */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center gap-2">
              <motion.img 
                src={logo} 
                alt="EDURWANDA Logo" 
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow bg-white p-1 border border-green-200"
                whileHover={{ rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-green-800">
                EDURWANDA
              </span>
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <motion.div
                key={link.to}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.to}
                  className={clsx(
                    'flex items-center gap-2 px-2 lg:px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm lg:text-base',
                    location.pathname === link.to
                      ? 'bg-green-700 text-white shadow-md'
                      : 'text-green-800 hover:bg-green-200 hover:text-green-900'
                  )}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Auth buttons - desktop */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 ml-2 lg:ml-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/login"
                className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-green-800 hover:bg-green-200 text-sm lg:text-base transition-all duration-300"
              >
                <FaSignInAlt />
                <span>Login</span>
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                to="/register"
                className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-white bg-green-700 hover:bg-green-800 shadow-md text-sm lg:text-base transition-all duration-300"
              >
                <FaUserPlus />
                <span>Register</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <motion.button
              className="text-green-800 p-2"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile nav with animation */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="md:hidden fixed top-16 left-0 w-3/4 h-[calc(100vh-4rem)] bg-green-50 px-2 pb-4 flex flex-col gap-1 rounded-br-lg shadow-xl z-40 overflow-y-auto"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * navLinks.indexOf(link) }}
                >
                  <Link
                    to={link.to}
                    className={clsx(
                      'flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-base transition-all duration-200',
                      location.pathname === link.to
                        ? 'bg-green-700 text-white shadow-md'
                        : 'text-green-800 hover:bg-green-200'
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              ))}
              <div className="border-t border-green-200 mt-2 pt-2 flex flex-col gap-1">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * navLinks.length }}
                >
                  <Link
                    to="/login"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-green-800 hover:bg-green-200 transition-all duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    <FaSignInAlt />
                    <span>Login</span>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * (navLinks.length + 1) }}
                >
                  <Link
                    to="/register"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-white bg-green-700 hover:bg-green-800 shadow-md transition-all duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    <FaUserPlus />
                    <span>Register</span>
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;