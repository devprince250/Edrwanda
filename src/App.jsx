// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Courses from './components/Courses';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Product from './components/Products'; // Assuming you have a Product component
import Teachers from './components/teachers';
import Students from './components/students';
import Login from './components/Login';
import Register from './components/Reguster';
import ForgetPassword from './components/ForgetPassword'; // Assuming you have a Students component
// Assuming you have a PageNotFound component
const App = () => {
  return (
    <ParallaxProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Students />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </ParallaxProvider>
  );
};

export default App;
