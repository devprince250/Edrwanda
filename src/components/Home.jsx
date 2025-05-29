import { FaBriefcase, FaLaptop, FaServer, FaMobileAlt, FaStar, FaChevronDown, FaChevronRight, FaArrowRight, FaChalkboardTeacher, FaBookOpen, FaGlobeAfrica, FaGraduationCap, FaUsers, FaChartLine } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useParallax } from 'react-scroll-parallax';

// Optimized image URLs
const heroImgMobile = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";
const heroImgDesktop = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80";
const logo = "https://i.pinimg.com/736x/6e/15/11/6e15114d8317a82db9ada1f868f3fff8.jpg";
const featureImgMobile = "https://c8.alamy.com/comp/2J5DMX5/kigali-rwanda-22nd-apr-2022-220423-kigali-april-23-2022-xinhua-a-girl-reads-a-book-at-a-library-at-a-link-chinese-restaurant-in-kigali-rwanda-april-22-2022-the-chinese-community-in-rwanda-on-friday-launched-a-library-at-a-link-chinese-restaurant-in-kimihurura-of-kigali-the-rwandan-capital-the-library-which-has-so-far-been-equipped-with-more-than-5000-books-in-chinese-korean-and-english-languages-among-others-aims-at-promoting-book-reading-culture-among-the-rwandan-population-the-books-topics-range-from-literature-science-culture-technology-politics-and-history-2J5DMX5.jpg?w=600";
const featureImgDesktop = "https://c8.alamy.com/comp/2J5DMX5/kigali-rwanda-22nd-apr-2022-220423-kigali-april-23-2022-xinhua-a-girl-reads-a-book-at-a-library-at-a-link-chinese-restaurant-in-kigali-rwanda-april-22-2022-the-chinese-community-in-rwanda-on-friday-launched-a-library-at-a-link-chinese-restaurant-in-kimihurura-of-kigali-the-rwandan-capital-the-library-which-has-so-far-been-equipped-with-more-than-5000-books-in-chinese-korean-and-english-languages-among-others-aims-at-promoting-book-reading-culture-among-the-rwandan-population-the-books-topics-range-from-literature-science-culture-technology-politics-and-history-2J5DMX5.jpg?w=1200";
const studentImgMobile = "https://static.wixstatic.com/media/196173_9a9a617868c44e7cac0114d3c5b91440~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,usm_0.66_1.00_0.01/196173_9a9a617868c44e7cac0114d3c5b91440~mv2.jpg";
const studentImgDesktop = "https://static.wixstatic.com/media/196173_9a9a617868c44e7cac0114d3c5b91440~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/196173_9a9a617868c44e7cac0114d3c5b91440~mv2.jpg";
const statsImg = "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

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

  // Parallax effects
  const parallaxHero = useParallax({ speed: -10 });
  const parallaxFeature = useParallax({ speed: 5 });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Hero Section with mobile-optimized background */}
      <section className="relative bg-gradient-to-r from-green-50 to-blue-50 overflow-hidden py-10 sm:py-16 md:py-20 lg:py-28">
        {/* Mobile-optimized background image */}
        <div className="absolute inset-0 overflow-hidden" ref={parallaxHero.ref}>
          <div className="absolute inset-0 bg-gradient-to-r from-green-50/80 to-blue-50/80 z-10"></div>
          <picture>
            <source media="(max-width: 639px)" srcSet={heroImgMobile} />
            <source media="(min-width: 640px)" srcSet={heroImgDesktop} />
            <img
              src={heroImgDesktop}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="lazy"
            />
          </picture>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0"
          >
            {/* Text Content */}
            <div className="w-full lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
              <div className="text-center lg:text-left">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="flex justify-center lg:justify-start items-center mb-6"
                >
                  <img src={logo} alt="EDURWANDA Logo" className="h-12 w-12 mr-3" />
                  <span className="text-2xl font-bold text-green-800">EDURWANDA</span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
                >
                  <span className="block">Empowering Rwandan</span>
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="block text-green-600"
                  >
                    Learners Digitally
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-4 text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0"
                >
                  Access quality education in Kinyarwanda and English. Learn anytime, anywhere with Rwanda's leading e-learning platform.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4"
                >
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#" 
                    className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md text-center transition duration-300"
                  >
                    Explore Courses
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#" 
                    className="px-6 py-3 bg-green-100 hover:bg-green-200 text-green-700 font-medium rounded-lg shadow-sm text-center transition duration-300"
                  >
                    How It Works
                  </motion.a>
                </motion.div>
              </div>
            </div>
            
            {/* Image with floating animation */}
            <div className="w-full lg:w-1/2 lg:pl-10 flex justify-center">
              <picture>
                <source media="(max-width: 639px)" srcSet={studentImgMobile} />
                <source media="(min-width: 640px)" srcSet={studentImgDesktop} />
                <motion.img 
                  src={studentImgDesktop} 
                  alt="Rwandan students learning" 
                  className="rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto mx-auto object-cover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  whileHover={{ 
                    y: -10,
                    transition: { 
                      y: { duration: 0.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
                    } 
                  }}
                  loading="lazy"
                />
              </picture>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with staggered animation */}
      <section className="bg-green-100 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex justify-center text-3xl mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-green-700">{stat.value}</div>
                <div className="text-sm sm:text-base text-green-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section with scroll-triggered animations */}
      <section className="py-10 sm:py-16 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Why Choose EDURWANDA</h2>
            <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Transformative Learning Experience
            </h3>
            <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-gray-500">
              Designed specifically for Rwandan learners and educators
            </p>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      transition: { duration: 0.3 }
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-green-500"
                  >
                    <div className="flex items-start">
                      <motion.div 
                        whileHover={{ rotate: 10 }}
                        className="flex-shrink-0"
                      >
                        {feature.icon}
                      </motion.div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                        <p className="mt-1 text-gray-600 text-sm sm:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
              <div ref={parallaxFeature.ref}>
                <picture>
                  <source media="(max-width: 639px)" srcSet={featureImgMobile} />
                  <source media="(min-width: 640px)" srcSet={featureImgDesktop} />
                  <motion.img 
                    src={featureImgDesktop} 
                    alt="Students learning together" 
                    className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses with 3D card effect */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Start Learning Today</h2>
            <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Popular Courses
            </h3>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {courses.map((course, index) => (
              <motion.div 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="h-40 sm:h-48 bg-green-100 flex items-center justify-center relative overflow-hidden">
                  <FaBookOpen className="text-green-500 text-4xl sm:text-5xl z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
                  <motion.a 
                    href="#" 
                    className="inline-flex items-center text-green-600 hover:text-green-800 font-medium text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                  >
                    Enroll Now <FaArrowRight className="ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="/courses" 
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(5, 150, 105, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              View All Courses
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials with floating cards */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Success Stories</h2>
            <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              What Our Learners Say
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  transition: { 
                    y: { duration: 0.3 }
                  } 
                }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-green-100 rounded-full opacity-20"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-green-100 rounded-full opacity-20"></div>
                <div className="relative z-10">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with animated gradient */}
      <section className="py-10 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-green-100 opacity-90"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          ></motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 mb-4"
          >
            Ready to transform your learning experience?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-green-700 mb-8"
          >
            Join thousands of Rwandans who are advancing their skills with EDURWANDA.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.a 
              href="/signup" 
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-50 text-green-700 font-medium rounded-lg shadow-md border border-transparent hover:border-gray-200 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Today
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight className="ml-3" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;