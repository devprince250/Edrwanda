import { useState } from 'react';
import { 
  FaUserGraduate, 
  FaBook, 
  FaChalkboardTeacher, 
  FaCalendarAlt, 
  FaChartLine, 
  FaAward, 
  FaComments, 
  FaArrowRight,
  FaRegClock,
  FaRegCheckCircle,
  FaRegCalendarCheck,
  FaUniversity,
  FaLaptopHouse
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StudentsPage = () => {
  const [activeTab, setActiveTab] = useState('resources');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const studentResources = [
    {
      icon: <FaBook className="text-blue-600 text-3xl" />,
      title: "Course Materials",
      description: "Access all your learning resources including lecture notes, videos, and assignments in one organized place.",
      link: "#",
      stats: "1,240+ resources available"
    },
    {
      icon: <FaChalkboardTeacher className="text-green-600 text-3xl" />,
      title: "Instructor Support",
      description: "Schedule one-on-one sessions or join live Q&A with your course instructors for personalized help.",
      link: "#",
      stats: "24/7 support available"
    },
    {
      icon: <FaCalendarAlt className="text-blue-600 text-3xl" />,
      title: "Study Planner",
      description: "Create customized study schedules with automatic reminders to keep you on track with your learning goals.",
      link: "#",
      stats: "85% of students use this"
    },
    {
      icon: <FaChartLine className="text-green-600 text-3xl" />,
      title: "Progress Tracker",
      description: "Visualize your learning journey with detailed analytics and personalized recommendations.",
      link: "#",
      stats: "Track 12+ metrics"
    },
    {
      icon: <FaAward className="text-blue-600 text-3xl" />,
      title: "Certificates",
      description: "Download and share your course completion certificates with employers and professional networks.",
      link: "#",
      stats: "3 certificates earned"
    },
    {
      icon: <FaComments className="text-green-600 text-3xl" />,
      title: "Discussion Forums",
      description: "Connect with fellow students, ask questions, and participate in course-related discussions.",
      link: "#",
      stats: "4,500+ active discussions"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Career Guidance Workshop",
      date: "June 15, 2023",
      time: "2:00 PM - 4:00 PM",
      location: "Online",
      description: "Learn how to prepare for job interviews and build your professional portfolio with our career experts.",
      speaker: "Dr. Alice Mukandutiye",
      capacity: "150/200 spots available"
    },
    {
      id: 2,
      title: "Tech Skills Webinar",
      date: "June 20, 2023",
      time: "10:00 AM - 12:00 PM",
      location: "Main Campus, Room 203",
      description: "Master in-demand tech skills including Python programming and data analysis techniques.",
      speaker: "Eng. Patrick Niyigena",
      capacity: "45/60 spots available"
    },
    {
      id: 3,
      title: "Final Exam Prep Session",
      date: "June 25, 2023",
      time: "9:00 AM - 11:00 AM",
      location: "Online",
      description: "Get ready for your final exams with proven study techniques and practice tests.",
      speaker: "Prof. Marie Claire Uwamahoro",
      capacity: "Unlimited attendance"
    }
  ];

  const activeCourses = [
    {
      title: "Advanced Programming Concepts",
      progress: 65,
      nextLesson: "Object-Oriented Design Patterns",
      deadline: "Jun 12, 2023"
    },
    {
      title: "Business Communication",
      progress: 42,
      nextLesson: "Effective Presentation Skills",
      deadline: "Jun 18, 2023"
    },
    {
      title: "Data Science Fundamentals",
      progress: 88,
      nextLesson: "Final Project Submission",
      deadline: "Jun 22, 2023"
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { value: "5", label: "Active Courses", bg: "bg-blue-50", border: "border-blue-500" },
    { value: "87%", label: "Overall Progress", bg: "bg-green-50", border: "border-green-500" },
    { value: "12", label: "Completed Lessons", bg: "bg-blue-50", border: "border-blue-500" },
    { value: "3", label: "Upcoming Deadlines", bg: "bg-green-50", border: "border-green-500" }
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
          <motion.div 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-white p-4 rounded-full shadow-md animate-bounce">
              <FaUserGraduate className="text-green-600 text-5xl" />
            </div>
          </motion.div>
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span className="block">Welcome to Your</span>
            <span className="block text-green-600">Student Portal</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Access all your learning resources, track progress, and connect with the EDURWANDA community.
          </motion.p>
        </div>
      </motion.section>

      {/* Quick Stats */}
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
                <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                <div className={`${stat.border.replace('border', 'text')} font-medium`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Dashboard Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex rounded-md shadow-sm">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab('resources')}
                className={`px-6 py-3 text-sm font-medium rounded-l-lg ${activeTab === 'resources' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                Learning Resources
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab('courses')}
                className={`px-6 py-3 text-sm font-medium ${activeTab === 'courses' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                My Courses
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab('events')}
                className={`px-6 py-3 text-sm font-medium rounded-r-lg ${activeTab === 'events' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                Upcoming Events
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Active Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {activeTab === 'resources' && (
              <motion.div
                key="resources"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Student Resources
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Everything you need to succeed in your learning journey
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {studentResources.map((resource, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-green-500"
                    >
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-3 rounded-full">
                          {resource.icon}
                        </div>
                        <h3 className="ml-4 text-xl font-bold text-gray-900">{resource.title}</h3>
                      </div>
                      <p className="mt-4 text-gray-600">{resource.description}</p>
                      <div className="mt-3 text-sm text-gray-500 flex items-center">
                        <FaRegCheckCircle className="mr-1" /> {resource.stats}
                      </div>
                      <motion.a 
                        href={resource.link} 
                        className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                        whileHover={{ x: 3 }}
                      >
                        Access Now <FaArrowRight className="ml-2" />
                      </motion.a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'courses' && (
              <motion.div
                key="courses"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    My Active Courses
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Track your progress and upcoming deadlines
                  </p>
                </div>

                <div className="space-y-6">
                  {activeCourses.map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="mb-4 md:mb-0">
                          <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                          <div className="flex items-center mt-2 text-gray-600">
                            <FaRegClock className="mr-2 text-blue-600" />
                            <span>Next: {course.nextLesson}</span>
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                            <div 
                              className="bg-green-600 h-2.5 rounded-full" 
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            {course.progress}% Complete • Deadline: {course.deadline}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'events' && (
              <motion.div
                key="events"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="lg:text-center mb-12">
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Upcoming Events
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                    Mark your calendar for these important dates
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-8">
                  <div className="space-y-6">
                    {upcomingEvents.map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.01 }}
                        className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-lg shadow-sm cursor-pointer"
                        onClick={() => setSelectedEvent(event)}
                      >
                        <div className="mb-4 md:mb-0">
                          <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                          <div className="flex items-center mt-2 text-gray-600">
                            <FaCalendarAlt className="mr-2 text-blue-600" />
                            <span>{event.date} • {event.time}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-4">{event.location}</span>
                          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                            Register
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                      View All Events <FaArrowRight className="ml-2" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-48 bg-blue-100 flex items-center justify-center relative">
                {selectedEvent.location === "Online" ? (
                  <FaLaptopHouse className="text-blue-600 text-8xl" />
                ) : (
                  <FaUniversity className="text-blue-600 text-8xl" />
                )}
                <button 
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                  onClick={() => setSelectedEvent(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">{selectedEvent.title}</h3>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center text-gray-700 mb-4">
                      <FaCalendarAlt className="text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium">Date & Time</p>
                        <p>{selectedEvent.date} • {selectedEvent.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-700 mb-4">
                      {selectedEvent.location === "Online" ? (
                        <FaLaptopHouse className="text-blue-600 mr-3" />
                      ) : (
                        <FaUniversity className="text-blue-600 mr-3" />
                      )}
                      <div>
                        <p className="font-medium">Location</p>
                        <p>{selectedEvent.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaUserGraduate className="text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium">Speaker</p>
                        <p>{selectedEvent.speaker}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Event Details</h4>
                    <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
                    <div className="text-sm text-gray-600 mb-6">
                      <FaRegCalendarCheck className="inline mr-2" /> {selectedEvent.capacity}
                    </div>
                    <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                      Register for This Event
                    </button>
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
            Need help with your courses?
          </h2>
          <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
            Our student support team is available to assist you.
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
              Contact Support <FaArrowRight className="ml-3 -mr-1" />
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default StudentsPage;