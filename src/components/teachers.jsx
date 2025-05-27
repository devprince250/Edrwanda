import { FaChalkboardTeacher, FaBookOpen, FaGraduationCap, FaStar, FaUsers, FaArrowRight } from 'react-icons/fa';

const InstructorsPage = () => {
  const instructors = [
    {
      name: "Dr. Jean de Dieu Kagabo",
      specialty: "Computer Science & ICT",
      bio: "PhD in Computer Science with 15 years of teaching experience. Former lecturer at University of Rwanda.",
      courses: ["Advanced Programming", "Data Structures", "Machine Learning"],
      rating: 4.9
    },
    {
      name: "Prof. Marie Claire Uwamahoro",
      specialty: "Business & Economics",
      bio: "Expert in business development with specialization in Rwandan market dynamics. Author of 3 business textbooks.",
      courses: ["Business Management", "Entrepreneurship", "Financial Literacy"],
      rating: 4.8
    },
    {
      name: "Eng. Patrick Niyigena",
      specialty: "Engineering & Technology",
      bio: "Civil engineer with extensive experience in infrastructure projects across East Africa.",
      courses: ["Civil Engineering Basics", "Construction Management", "AutoCAD"],
      rating: 4.7
    },
    {
      name: "Dr. Alice Mukandutiye",
      specialty: "Languages & Communication",
      bio: "Linguistics expert specializing in Kinyarwanda and English language instruction.",
      courses: ["Business Kinyarwanda", "Academic Writing", "Public Speaking"],
      rating: 4.9
    },
    {
      name: "Prof. Samuel Habimana",
      specialty: "Agriculture Sciences",
      bio: "Agricultural researcher with focus on modern farming techniques suitable for Rwandan climate.",
      courses: ["Sustainable Farming", "Agribusiness", "Soil Management"],
      rating: 4.6
    },
    {
      name: "Dr. Grace Ingabire",
      specialty: "Health Sciences",
      bio: "Medical doctor specializing in public health education and community medicine.",
      courses: ["Public Health Basics", "Nutrition", "First Aid Training"],
      rating: 4.8
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Meet Our <span className="text-green-600">Expert Instructors</span>
          </h1>
          <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
            Learn from Rwanda's top educators and industry professionals dedicated to your success.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <FaChalkboardTeacher className="text-blue-600 text-4xl mx-auto" />
              <div className="text-3xl font-bold text-gray-800 mt-2">200+</div>
              <div className="text-blue-600">Certified Instructors</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <FaBookOpen className="text-green-600 text-4xl mx-auto" />
              <div className="text-3xl font-bold text-gray-800 mt-2">15+</div>
              <div className="text-green-600">Years Experience</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <FaGraduationCap className="text-blue-600 text-4xl mx-auto" />
              <div className="text-3xl font-bold text-gray-800 mt-2">95%</div>
              <div className="text-blue-600">Satisfaction Rate</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <FaUsers className="text-green-600 text-4xl mx-auto" />
              <div className="text-3xl font-bold text-gray-800 mt-2">10K+</div>
              <div className="text-green-600">Students Taught</div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Distinguished Faculty
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate educators with real-world experience to guide your learning journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-green-500">
                <div className="h-48 bg-blue-50 flex items-center justify-center">
                  <FaChalkboardTeacher className="text-blue-600 text-6xl" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{instructor.name}</h3>
                      <p className="text-green-600">{instructor.specialty}</p>
                    </div>
                    <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="text-blue-800 font-medium">{instructor.rating}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{instructor.bio}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-700">Courses:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {instructor.courses.map((course, i) => (
                        <span key={i} className="text-xs bg-green-50 text-green-800 px-2 py-1 rounded">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Profile <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Want to join our instructor team?
          </h2>
          <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
            We're always looking for passionate educators to help shape Rwanda's future.
          </p>
          <div className="mt-8">
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
            >
              Apply to Teach
              <FaArrowRight className="ml-3 -mr-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstructorsPage;