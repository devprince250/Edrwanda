import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaArrowRight, FaClock, FaUserGraduate, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const courses = [
  { 
    title: 'Icyongereza (English)', 
    desc: 'Learn English from beginner to advanced with interactive lessons.', 
    color: 'bg-gradient-to-br from-blue-100 to-blue-50 border-blue-200', 
    slug: 'english',
    duration: '6 months',
    students: '1.2k',
    level: 'Beginner to Advanced'
  },
  { 
    title: 'Imibare (Mathematics)', 
    desc: 'Master math concepts with step-by-step explanations and quizzes.', 
    color: 'bg-gradient-to-br from-yellow-100 to-yellow-50 border-yellow-200', 
    slug: 'mathematics',
    duration: '8 months',
    students: '950',
    level: 'All Levels'
  },
  { 
    title: 'Ubumenyi rusange (General Science)', 
    desc: 'Explore science topics with engaging videos and experiments.', 
    color: 'bg-gradient-to-br from-green-100 to-green-50 border-green-200', 
    slug: 'science',
    duration: '5 months',
    students: '1.5k',
    level: 'Intermediate'
  },
  { 
    title: 'Ikoranabuhanga (ICT)', 
    desc: 'Digital skills for the modern world: coding, internet safety, and more.', 
    color: 'bg-gradient-to-br from-purple-100 to-purple-50 border-purple-200', 
    slug: 'ict',
    duration: '10 months',
    students: '2.3k',
    level: 'Beginner to Advanced'
  },
  { 
    title: 'Ubukungu (Economics)', 
    desc: 'Understand economics and entrepreneurship for real-world success.', 
    color: 'bg-gradient-to-br from-pink-100 to-pink-50 border-pink-200', 
    slug: 'economics',
    duration: '4 months',
    students: '800',
    level: 'Intermediate'
  },
];

const CourseCard = ({ course, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`rounded-2xl shadow-lg border-2 p-6 ${course.color} hover:shadow-xl transition-all duration-300 h-full flex flex-col`}
    >
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.desc}</p>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex flex-col items-center text-center">
            <FaClock className="text-blue-500 mb-1" />
            <span className="text-xs font-medium text-gray-700">{course.duration}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaUserGraduate className="text-green-500 mb-1" />
            <span className="text-xs font-medium text-gray-700">{course.students}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaChartLine className="text-purple-500 mb-1" />
            <span className="text-xs font-medium text-gray-700">{course.level}</span>
          </div>
        </div>
      </div>

      <Link 
        to={`/courses/${course.slug}`} 
        className="inline-flex items-center justify-between mt-4 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group"
      >
        <span className="text-blue-600 font-medium">Explore Course</span>
        <FaArrowRight className="text-blue-500 transform group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </motion.div>
  );
};

const Courses = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="relative mb-4">
            <FaBookOpen className="text-green-500 text-5xl z-10 relative" />
            <div className="absolute -inset-4 bg-green-100 rounded-full opacity-30 -z-0"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-3 text-center">Discover Our Courses</h2>
          <p className="text-lg text-gray-600 max-w-2xl text-center">
            Quality education in Kinyarwanda and English covering all essential subjects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <CourseCard key={idx} course={course} index={idx} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <Link 
            to="/courses" 
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center gap-2"
          >
            View All Courses
            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;