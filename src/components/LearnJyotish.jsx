'use client';
import { GiSpellBook, GiOpenBook, GiDiploma } from 'react-icons/gi';
import { FiUsers, FiVideo, FiAward } from 'react-icons/fi';

const LearnJyotish = () => {
  const courses = [
    {
      level: "Beginner",
      title: "Foundations of Vedic Astrology",
      duration: "6 Weeks",
      lessons: "24 Lessons",
      price: "₹4,999",
      features: [
        "Understanding Birth Charts",
        "Planets and Their Significance",
        "12 Houses Explained",
        "Basic Predictions"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      level: "Intermediate",
      title: "Advanced Jyotish Techniques",
      duration: "12 Weeks",
      lessons: "48 Lessons",
      price: "₹9,999",
      popular: true,
      features: [
        "Dasha Systems",
        "Transit Analysis",
        "Yogas and Doshas",
        "Remedial Measures"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      level: "Advanced",
      title: "Professional Astrologer Program",
      duration: "24 Weeks",
      lessons: "96 Lessons",
      price: "₹19,999",
      features: [
        "Advanced Predictive Techniques",
        "Prashan Kundali Mastery",
        "Muhurta Selection",
        "Certification Included"
      ],
      color: "from-purple-500 to-pink-600"
    }
  ];

  const stats = [
    { icon: <FiUsers />, number: "10,000+", label: "Students Enrolled" },
    { icon: <FiVideo />, number: "500+", label: "Video Lessons" },
    { icon: <FiAward />, number: "5,000+", label: "Certified Graduates" },
    { icon: <GiDiploma />, number: "100+", label: "Expert Instructors" }
  ];

  return (
    <section id="learn" className="py-16 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <GiSpellBook className="text-7xl text-primary-600" />
          </div>
          <h2 className="text-4xl font-bold text-dark-800 mb-4">Learn Jyotish from the Basics</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Master the sacred science of Vedic astrology with our comprehensive courses designed for all skill levels
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl text-primary-600 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-dark-800 mb-1">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Courses */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${course.popular ? 'ring-4 ring-primary-400 transform scale-105' : ''}`}
            >
              {course.popular && (
                <div className="absolute top-0 right-0 bg-secondary-500 text-white px-4 py-1 rounded-bl-lg font-bold text-sm">
                  Most Popular
                </div>
              )}
              
              <div className={`h-32 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                <GiOpenBook className="text-6xl text-white" />
              </div>

              <div className="p-6">
                <div className="text-sm font-semibold text-primary-600 mb-2">{course.level}</div>
                <h3 className="text-2xl font-bold text-dark-800 mb-4">{course.title}</h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>⏱️ {course.duration}</span>
                  <span>📚 {course.lessons}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-primary-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-4">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-dark-800">{course.price}</span>
                    <span className="text-gray-500 line-through">₹{parseInt(course.price.replace('₹', '').replace(',', '')) * 2}</span>
                  </div>
                  <button className={`w-full bg-gradient-to-r ${course.color} text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition transform hover:scale-105`}>
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Not sure which course to choose?</p>
          <button className="bg-dark-800 text-white px-8 py-3 rounded-full font-bold hover:bg-dark-700 transition">
            Talk to Course Advisor
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearnJyotish;
