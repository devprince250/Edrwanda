import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaArrowRight } from 'react-icons/fa';

const courses = [
  { title: 'Icyongereza (English)', desc: 'Learn English from beginner to advanced with interactive lessons.', color: 'bg-gradient-to-br from-blue-100 to-blue-50 border-blue-200', slug: 'english' },
  { title: 'Imibare (Mathematics)', desc: 'Master math concepts with step-by-step explanations and quizzes.', color: 'bg-gradient-to-br from-yellow-100 to-yellow-50 border-yellow-200', slug: 'mathematics' },
  { title: 'Ubumenyi rusange (General Science)', desc: 'Explore science topics with engaging videos and experiments.', color: 'bg-gradient-to-br from-green-100 to-green-50 border-green-200', slug: 'science' },
  { title: 'Ikoranabuhanga (ICT)', desc: 'Digital skills for the modern world: coding, internet safety, and more.', color: 'bg-gradient-to-br from-purple-100 to-purple-50 border-purple-200', slug: 'ict' },
  { title: 'Ubukungu (Economics)', desc: 'Understand economics and entrepreneurship for real-world success.', color: 'bg-gradient-to-br from-pink-100 to-pink-50 border-pink-200', slug: 'economics' },
];

const Courses = () => (
  <div className="min-h-screen bg-gradient-to-br from-white to-green-50 py-16 px-4">
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col items-center mb-10">
        <FaBookOpen className="text-green-500 text-5xl mb-2" />
        <h2 className="text-4xl font-bold text-green-800 drop-shadow">Our Courses</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <div key={idx} className={`rounded-2xl shadow-lg border-2 p-8 ${course.color} hover:shadow-2xl transition-shadow duration-300`}>
            <h3 className="text-2xl font-semibold text-green-700 mb-3">{course.title}</h3>
            <p className="text-gray-700 mb-4">{course.desc}</p>
            <Link to={`/courses/${course.slug}`} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 group">
              Learn More
              <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Courses;
