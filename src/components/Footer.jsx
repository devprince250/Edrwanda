// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-300 text-green-700 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-green-600 pb-8">
        {/* Brand & Mission */}
        <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center mb-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnPQ1ioTlfBaWH1QTHAcEDHVHt5e0bDh-S1muuclavPQPuRSQ&s" alt="EDURWANDA Logo" className="h-12 w-12 rounded-full shadow bg-white p-1 border border-green-200 mr-2" />
            <span className="text-2xl font-bold tracking-tight">EDURWANDA</span>
          </div>
          <p className="text-green-600 text-sm mb-4">
            Empowering Rwanda with modern, accessible, and interactive e-learning for all ages. Learn anywhere, anytime.
          </p>
          <div className="flex space-x-3 mt-2">
            <a href="#" className="hover:text-green-300 transition text-2xl"><FaFacebook /></a>
            <a href="#" className="hover:text-green-300 transition text-2xl"><FaInstagram /></a>
            <a href="#" className="hover:text-green-300 transition text-2xl"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-green-200 transition">Home</a></li>
            <li><a href="/courses" className="hover:text-green-200 transition">Courses</a></li>
            <li><a href="/about" className="hover:text-green-200 transition">About</a></li>
            <li><a href="/contact" className="hover:text-green-200 transition">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-200 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-green-200 transition">FAQs</a></li>
            <li><a href="#" className="hover:text-green-200 transition">Community</a></li>
            <li><a href="#" className="hover:text-green-200 transition">Blog</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-green-600 text-sm mb-3">Get the latest updates and free learning resources.</p>
          <form className="flex flex-col sm:flex-row gap-2 w-full max-w-xs">
            <input type="email" placeholder="Your email" className="px-4 py-2 rounded-lg text-green-900 focus:outline-none w-full sm:w-auto" />
            <button type="submit" className="bg-white text-green-700 font-bold px-4 py-2 rounded-lg hover:bg-green-100 transition">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="text-center text-green-200 text-xs mt-8">
        &copy; {new Date().getFullYear()} EDURWANDA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
