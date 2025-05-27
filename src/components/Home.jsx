import { FaBriefcase, FaLaptop, FaServer, FaMobileAlt, FaStar, FaChevronDown, FaChevronRight, FaArrowRight, FaChalkboardTeacher, FaBookOpen, FaGlobeAfrica, FaGraduationCap, FaUsers, FaChartLine } from 'react-icons/fa';
import { useState, useEffect } from 'react';

// Updated images
const heroImg = "https://rwanda.v2.dotrust.org/wp-content/uploads/sites/6/2024/05/WTV_1074-scaled.jpg";
const logo = "https://kiac.ac.rw/wp-content/uploads/2024/02/cropped-kiac-logo-32x32.png";
const featureImg = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const statsImg = "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80";

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    {
      icon: <FaBookOpen className="text-green-500 text-3xl" />,
      title: "Interactive Courses",
      description: "Engaging multimedia content in Kinyarwanda and English"
    },
    {
      icon: <FaChalkboardTeacher className="text-green-500 text-3xl" />,
      title: "Expert Instructors",
      description: "Learn from Rwanda's top educators and industry professionals"
    },
    {
      icon: <FaMobileAlt className="text-green-500 text-3xl" />,
      title: "Mobile Learning",
      description: "Access courses anytime, anywhere on any device"
    },
    {
      icon: <FaGlobeAfrica className="text-green-500 text-3xl" />,
      title: "Localized Content",
      description: "Curriculum tailored to Rwandan context and needs"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Active Learners", icon: <FaUsers className="text-green-500" /> },
    { value: "500+", label: "Courses Available", icon: <FaBookOpen className="text-green-500" /> },
    { value: "200+", label: "Certified Instructors", icon: <FaChalkboardTeacher className="text-green-500" /> },
    { value: "95%", label: "Satisfaction Rate", icon: <FaStar className="text-green-500" /> }
  ];

  const testimonials = [
    {
      quote: "EDURWANDA helped me gain skills that got me promoted at work. The courses are practical and relevant to our market.",
      author: "Sarah Uwase, Kigali",
      role: "Marketing Professional"
    },
    {
      quote: "As a teacher, this platform has given me tools to create better lessons and reach more students across Rwanda.",
      author: "Jean Paul Habimana",
      role: "Secondary School Teacher"
    },
    {
      quote: "The mobile app makes it easy to learn during my commute. I've completed 3 courses while traveling to work!",
      author: "Grace Ingabire",
      role: "University Student"
    }
  ];

  const courses = [
    {
      title: "ICT Fundamentals",
      description: "Essential digital skills for beginners",
      duration: "8 weeks",
      level: "Beginner"
    },
    {
      title: "Business Kinyarwanda",
      description: "Professional communication in local context",
      duration: "6 weeks",
      level: "Intermediate"
    },
    {
      title: "Agriculture Technology",
      description: "Modern farming techniques for Rwanda",
      duration: "10 weeks",
      level: "Advanced"
    },
    {
      title: "Tourism & Hospitality",
      description: "Growing Rwanda's service industry",
      duration: "12 weeks",
      level: "Intermediate"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section - Responsive Layout */}
      <section className="relative bg-gradient-to-r from-green-50 to-blue-50 overflow-hidden py-10 sm:py-16 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
            {/* Text Content - Full width on mobile, 50% on desktop */}
            <div className="w-full lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start items-center mb-6">
                  <img src={logo} alt="EDURWANDA Logo" className="h-12 w-12 mr-3" />
                  <span className="text-2xl font-bold text-green-800">EDURWANDA</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                  <span className="block">Empowering Rwandan</span>
                  <span className="block text-green-600">Learners Digitally</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
                  Access quality education in Kinyarwanda and English. Learn anytime, anywhere with Rwanda's leading e-learning platform.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                  <a href="#" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md text-center transition duration-300">
                    Explore Courses
                  </a>
                  <a href="#" className="px-6 py-3 bg-green-100 hover:bg-green-200 text-green-700 font-medium rounded-lg shadow-sm text-center transition duration-300">
                    How It Works
                  </a>
                </div>
              </div>
            </div>
            {/* Image - Full width on mobile, 50% on desktop */}
            <div className="w-full lg:w-1/2 lg:pl-10 flex justify-center">
              <img 
                src={heroImg} 
                alt="Rwandan students learning" 
                className="rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Responsive Grid */}
      <section className="bg-green-100 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center text-3xl mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-green-700">{stat.value}</div>
                <div className="text-sm sm:text-base text-green-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Responsive Columns */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Why Choose EDURWANDA</h2>
            <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Transformative Learning Experience
            </h3>
            <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-gray-500">
              Designed specifically for Rwandan learners and educators
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-green-500">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                        <p className="mt-1 text-gray-600 text-sm sm:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
              <img 
                src={featureImg} 
                alt="Students learning together" 
                className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses - Responsive Grid */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Start Learning Today</h2>
            <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Popular Courses
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-40 sm:h-48 bg-green-100 flex items-center justify-center">
                  <FaBookOpen className="text-green-500 text-4xl sm:text-5xl" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className={`px-2 py-1 text-xs sm:text-sm font-medium rounded-full ${
                      course.level === 'Beginner' ? 'bg-blue-100 text-blue-800' :
                      course.level === 'Intermediate' ? 'bg-purple-100 text-purple-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {course.level}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500">{course.duration}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">{course.description}</p>
                  <a href="#" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium text-sm sm:text-base">
                    Enroll Now <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="/courses" className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition duration-300">
              View All Courses
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials - Responsive Columns */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Success Stories</h2>
            <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              What Our Learners Say
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <div className="flex mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic text-base sm:text-lg mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-2">
                    <FaGraduationCap className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="bg-green-100 py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Ready to transform your learning experience?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Join thousands of Rwandans who are advancing their skills with EDURWANDA.
          </p>
          <div className="flex justify-center">
            <a href="/signup" className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-50 text-green-700 font-medium rounded-lg shadow-md border border-transparent hover:border-gray-200 transition duration-300">
              Get Started Today
              <FaArrowRight className="ml-3" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;