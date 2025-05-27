import { FaUserGraduate, FaBook, FaChalkboardTeacher, FaCalendarAlt, FaChartLine, FaAward, FaComments, FaArrowRight } from 'react-icons/fa';

const StudentsPage = () => {
  const studentResources = [
    {
      icon: <FaBook className="text-blue-600 text-3xl" />,
      title: "Course Materials",
      description: "Access all your learning resources in one place",
      link: "#"
    },
    {
      icon: <FaChalkboardTeacher className="text-green-600 text-3xl" />,
      title: "Instructor Support",
      description: "Get help directly from course instructors",
      link: "#"
    },
    {
      icon: <FaCalendarAlt className="text-blue-600 text-3xl" />,
      title: "Study Planner",
      description: "Organize your learning schedule",
      link: "#"
    },
    {
      icon: <FaChartLine className="text-green-600 text-3xl" />,
      title: "Progress Tracker",
      description: "Monitor your learning journey",
      link: "#"
    },
    {
      icon: <FaAward className="text-blue-600 text-3xl" />,
      title: "Certificates",
      description: "Download your course certificates",
      link: "#"
    },
    {
      icon: <FaComments className="text-green-600 text-3xl" />,
      title: "Discussion Forums",
      description: "Connect with fellow students",
      link: "#"
    }
  ];

  const upcomingEvents = [
    {
      title: "Career Guidance Workshop",
      date: "June 15, 2023",
      time: "2:00 PM - 4:00 PM",
      location: "Online"
    },
    {
      title: "Tech Skills Webinar",
      date: "June 20, 2023",
      time: "10:00 AM - 12:00 PM",
      location: "Main Campus"
    },
    {
      title: "Final Exam Prep Session",
      date: "June 25, 2023",
      time: "9:00 AM - 11:00 AM",
      location: "Online"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-full shadow-md">
              <FaUserGraduate className="text-green-600 text-5xl" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Welcome to Your</span>
            <span className="block text-green-600">Student Portal</span>
          </h1>
          <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
            Access all your learning resources, track progress, and connect with the EDURWANDA community.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="text-3xl font-bold text-gray-800">5</div>
              <div className="text-blue-600">Active Courses</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <div className="text-3xl font-bold text-gray-800">87%</div>
              <div className="text-green-600">Overall Progress</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="text-3xl font-bold text-gray-800">12</div>
              <div className="text-blue-600">Completed Lessons</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <div className="text-3xl font-bold text-gray-800">3</div>
              <div className="text-green-600">Upcoming Deadlines</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-green-500">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full">
                    {resource.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900">{resource.title}</h3>
                </div>
                <p className="mt-4 text-gray-600">{resource.description}</p>
                <a 
                  href={resource.link} 
                  className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Access Now <FaArrowRight className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                    <div className="flex items-center mt-2 text-gray-600">
                      <FaCalendarAlt className="mr-2 text-blue-600" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-4">{event.location}</span>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                View All Events <FaArrowRight className="ml-2 inline" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Need help with your courses?
          </h2>
          <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
            Our student support team is available to assist you.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
            >
              Contact Support <FaArrowRight className="ml-3 -mr-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentsPage;