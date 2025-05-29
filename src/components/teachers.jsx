import { useState } from 'react';
import { 
  FaChalkboardTeacher, 
  FaBookOpen, 
  FaGraduationCap, 
  FaStar, 
  FaUsers, 
  FaArrowRight,
  FaLinkedin,
  FaTwitter,
  FaUniversity
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InstructorsPage = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [filter, setFilter] = useState('all');

  const instructors = [
    {
      id: 1,
      name: "Dr. Jean de Dieu Kagabo",
      specialty: "Computer Science & ICT",
      bio: "PhD in Computer Science with 15 years of teaching experience. Former lecturer at University of Rwanda.",
      courses: ["Advanced Programming", "Data Structures", "Machine Learning"],
      rating: 4.9,
      students: 3200,
      category: "technology",
      linkedin: "#",
      twitter: "#",
      education: "PhD in Computer Science, Carnegie Mellon University"
    },
    {
      id: 2,
      name: "Prof. Marie Claire Uwamahoro",
      specialty: "Business & Economics",
      bio: "Expert in business development with specialization in Rwandan market dynamics. Author of 3 business textbooks.",
      courses: ["Business Management", "Entrepreneurship", "Financial Literacy"],
      rating: 4.8,
      students: 2800,
      category: "business",
      linkedin: "#",
      twitter: "#",
      education: "MBA, Harvard Business School"
    },
    {
      id: 3,
      name: "Eng. Patrick Niyigena",
      specialty: "Engineering & Technology",
      bio: "Civil engineer with extensive experience in infrastructure projects across East Africa.",
      courses: ["Civil Engineering Basics", "Construction Management", "AutoCAD"],
      rating: 4.7,
      students: 1900,
      category: "engineering",
      linkedin: "#",
      twitter: "#",
      education: "MSc in Civil Engineering, ETH Zurich"
    },
    {
      id: 4,
      name: "Dr. Alice Mukandutiye",
      specialty: "Languages & Communication",
      bio: "Linguistics expert specializing in Kinyarwanda and English language instruction.",
      courses: ["Business Kinyarwanda", "Academic Writing", "Public Speaking"],
      rating: 4.9,
      students: 3500,
      category: "languages",
      linkedin: "#",
      twitter: "#",
      education: "PhD in Linguistics, University of Oxford"
    },
    {
      id: 5,
      name: "Prof. Samuel Habimana",
      specialty: "Agriculture Sciences",
      bio: "Agricultural researcher with focus on modern farming techniques suitable for Rwandan climate.",
      courses: ["Sustainable Farming", "Agribusiness", "Soil Management"],
      rating: 4.6,
      students: 1500,
      category: "agriculture",
      linkedin: "#",
      twitter: "#",
      education: "PhD in Agricultural Sciences, Wageningen University"
    },
    {
      id: 6,
      name: "Dr. Grace Ingabire",
      specialty: "Health Sciences",
      bio: "Medical doctor specializing in public health education and community medicine.",
      courses: ["Public Health Basics", "Nutrition", "First Aid Training"],
      rating: 4.8,
      students: 2400,
      category: "health",
      linkedin: "#",
      twitter: "#",
      education: "MD, University of Rwanda"
    }
  ];

  const filteredInstructors = filter === 'all' 
    ? instructors 
    : instructors.filter(instructor => instructor.category === filter);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { icon: <FaChalkboardTeacher className="text-blue-600 text-4xl" />, value: "200+", label: "Certified Instructors", bg: "bg-blue-50", border: "border-blue-500" },
    { icon: <FaBookOpen className="text-green-600 text-4xl" />, value: "15+", label: "Years Experience", bg: "bg-green-50", border: "border-green-500" },
    { icon: <FaGraduationCap className="text-blue-600 text-4xl" />, value: "95%", label: "Satisfaction Rate", bg: "bg-blue-50", border: "border-blue-500" },
    { icon: <FaUsers className="text-green-600 text-4xl" />, value: "10K+", label: "Students Taught", bg: "bg-green-50", border: "border-green-500" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-green-50 to-blue-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
          >
            Meet Our <span className="text-green-600">Expert Instructors</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Learn from Rwanda's top educators and industry professionals dedicated to your success.
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        ref={ref}
        className="bg-white py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className={`${stat.bg} p-6 rounded-lg border-l-4 ${stat.border} hover:shadow-md transition-shadow duration-300`}
              >
                <div className="mx-auto w-12 h-12 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</div>
                <div className={`${stat.border.replace('border', 'text')} font-medium`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Instructors Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Distinguished Faculty
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate educators with real-world experience to guide your learning journey.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'all' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                All Instructors
              </motion.button>
              {[...new Set(instructors.map(i => i.category))].map(category => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${filter === category ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            layout
          >
            <AnimatePresence>
              {filteredInstructors.map((instructor) => (
                <motion.div
                  key={instructor.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-green-500 cursor-pointer"
                  onClick={() => setSelectedInstructor(instructor)}
                >
                  <div className="h-48 bg-blue-50 flex items-center justify-center relative">
                    <FaChalkboardTeacher className="text-blue-600 text-6xl" />
                    <div className="absolute bottom-4 right-4 flex items-center bg-white px-2 py-1 rounded shadow-sm">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="text-gray-800 font-medium">{instructor.rating}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{instructor.name}</h3>
                        <p className="text-green-600">{instructor.specialty}</p>
                      </div>
                      <div className="text-sm text-gray-500">
                        {instructor.students.toLocaleString()} students
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600 line-clamp-2">{instructor.bio}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-700">Courses:</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {instructor.courses.slice(0, 3).map((course, i) => (
                          <motion.span 
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="text-xs bg-green-50 text-green-800 px-2 py-1 rounded"
                          >
                            {course}
                          </motion.span>
                        ))}
                        {instructor.courses.length > 3 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            +{instructor.courses.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                      <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                        View Profile <FaArrowRight className="ml-2" />
                      </button>
                      <div className="flex space-x-2">
                        <a href={instructor.linkedin} className="text-gray-500 hover:text-blue-700">
                          <FaLinkedin />
                        </a>
                        <a href={instructor.twitter} className="text-gray-500 hover:text-blue-400">
                          <FaTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Instructor Modal */}
      <AnimatePresence>
        {selectedInstructor && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedInstructor(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-64 bg-blue-50 flex items-center justify-center relative">
                <FaChalkboardTeacher className="text-blue-600 text-8xl" />
                <button 
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                  onClick={() => setSelectedInstructor(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedInstructor.name}</h3>
                    <p className="text-green-600 text-lg">{selectedInstructor.specialty}</p>
                  </div>
                  <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-blue-800 font-medium">{selectedInstructor.rating}</span>
                    <span className="text-gray-500 ml-2">({selectedInstructor.students.toLocaleString()} students)</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">About</h4>
                    <p className="text-gray-700">{selectedInstructor.bio}</p>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Education</h4>
                      <div className="flex items-start">
                        <FaUniversity className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-700">{selectedInstructor.education}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Courses</h4>
                    <div className="space-y-3">
                      {selectedInstructor.courses.map((course, i) => (
                        <div key={i} className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-medium text-green-800">{course}</h5>
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center text-sm text-gray-600">
                              <FaUserGraduate className="mr-1" />
                              <span>{(selectedInstructor.students / selectedInstructor.courses.length).toFixed(0)} students</span>
                            </div>
                            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                              View Course
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex space-x-4">
                      <a 
                        href={selectedInstructor.linkedin} 
                        className="bg-blue-50 text-blue-700 p-3 rounded-full hover:bg-blue-100 transition-colors"
                      >
                        <FaLinkedin className="text-xl" />
                      </a>
                      <a 
                        href={selectedInstructor.twitter} 
                        className="bg-blue-50 text-blue-400 p-3 rounded-full hover:bg-blue-100 transition-colors"
                      >
                        <FaTwitter className="text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-green-50 to-blue-50 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Want to join our instructor team?
          </h2>
          <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
            We're always looking for passionate educators to help shape Rwanda's future.
          </p>
          <motion.div 
            className="mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors duration-300"
            >
              Apply to Teach
              <FaArrowRight className="ml-3 -mr-1" />
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default InstructorsPage;