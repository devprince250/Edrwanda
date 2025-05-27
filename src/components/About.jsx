import React from 'react';
import { FaLeaf } from 'react-icons/fa';

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-2xl text-center bg-white/80 rounded-2xl shadow-lg p-10 border-2 border-green-100">
      <FaLeaf className="mx-auto text-green-500 text-5xl mb-4" />
      <h2 className="text-4xl font-bold text-green-800 mb-6 drop-shadow">About EDURWANDA</h2>
      <p className="text-lg text-green-900 mb-4">EDURWANDA is dedicated to making quality education accessible to everyone in Rwanda. Our platform offers interactive courses, expert instructors, and a supportive community to help you achieve your learning goals.</p>
      <p className="text-lg text-green-800">We believe in the power of technology to transform education and empower the next generation of Rwandan leaders.</p>
    </div>
  </div>
);

export default About;
