import React from 'react';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.footer 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-gradient-to-b from-green-700 to-green-900 text-white pt-16 pb-8 mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
        {/* Brand & Mission */}
        <motion.div 
          variants={itemVariants}
          className="col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.div 
            className="flex items-center mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="https://i.pinimg.com/736x/6e/15/11/6e15114d8317a82db9ada1f868f3fff8.jpg" 
              alt="EDURWANDA Logo" 
              className="h-14 w-14 rounded-full shadow-lg bg-white p-1 border-2 border-green-300 mr-3" 
            />
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-white">
              EDURWANDA
            </span>
          </motion.div>
          <p className="text-green-100 text-sm mb-6 leading-relaxed">
            Empowering Rwanda with modern, accessible, and interactive e-learning for all ages. 
            Learn anywhere, anytime with our cutting-edge platform.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: <FaFacebook className="text-xl" />, color: "hover:text-blue-400" },
              { icon: <FaInstagram className="text-xl" />, color: "hover:text-pink-400" },
              { icon: <FaTwitter className="text-xl" />, color: "hover:text-blue-300" },
              { icon: <FaLinkedin className="text-xl" />, color: "hover:text-blue-500" },
              { icon: <FaYoutube className="text-xl" />, color: "hover:text-red-500" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                className={`text-green-200 transition ${social.color}`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          variants={itemVariants}
          className="col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left"
        >
          <h3 className="text-lg font-semibold mb-6 text-green-300 border-b border-green-500 pb-2 w-full">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {[
              { label: "Home", path: "/" },
              { label: "Courses", path: "/courses" },
              { label: "Instructors", path: "/instructors" },
              { label: "Success Stories", path: "/success" },
              { label: "Contact", path: "/contact" }
            ].map((link, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a 
                  href={link.path} 
                  className="text-green-100 hover:text-white transition flex items-center"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          variants={itemVariants}
          className="col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left"
        >
          <h3 className="text-lg font-semibold mb-6 text-green-300 border-b border-green-500 pb-2 w-full">
            Contact Us
          </h3>
          <ul className="space-y-4">
            <motion.li 
              className="flex items-start"
              whileHover={{ x: 5 }}
            >
              <FaMapMarkerAlt className="text-green-300 mt-1 mr-3 flex-shrink-0" />
              <span className="text-green-100">
                KG 123 St, Kigali<br />Rwanda
              </span>
            </motion.li>
            <motion.li 
              className="flex items-center"
              whileHover={{ x: 5 }}
            >
              <FaPhone className="text-green-300 mr-3" />
              <a href="tel:+250788123456" className="text-green-100 hover:text-white">
                +250 788 123 456
              </a>
            </motion.li>
            <motion.li 
              className="flex items-center"
              whileHover={{ x: 5 }}
            >
              <FaEnvelope className="text-green-300 mr-3" />
              <a href="mailto:info@edurwanda.com" className="text-green-100 hover:text-white">
                info@edurwanda.com
              </a>
            </motion.li>
            <motion.li 
              className="flex items-center"
              whileHover={{ x: 5 }}
            >
              <FaClock className="text-green-300 mr-3" />
              <span className="text-green-100">
                Mon-Fri: 8AM - 5PM
              </span>
            </motion.li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div 
          variants={itemVariants}
          className="col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <h3 className="text-lg font-semibold mb-6 text-green-300 border-b border-green-500 pb-2 w-full">
            Newsletter
          </h3>
          <p className="text-green-100 text-sm mb-4 leading-relaxed">
            Subscribe to get updates on new courses, learning tips, and special offers.
          </p>
          <form className="w-full max-w-xs">
            <motion.div 
              className="mb-3"
              whileHover={{ scale: 1.01 }}
            >
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg text-green-900 focus:outline-none w-full focus:ring-2 focus:ring-green-300"
              />
            </motion.div>
            <motion.button 
              type="submit" 
              className="bg-gradient-to-r from-green-400 to-green-600 text-white font-bold px-6 py-3 rounded-lg hover:from-green-500 hover:to-green-700 transition shadow-lg w-full"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe Now
            </motion.button>
          </form>
        </motion.div>
      </div>

      <motion.div 
        className="text-center text-green-300 text-sm mt-12 pt-6 border-t border-green-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="mb-2">
          &copy; {new Date().getFullYear()} EDURWANDA. All rights reserved.
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition">Cookie Policy</a>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;