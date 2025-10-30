'use client';
import { FiCalendar, FiTrendingUp, FiHeart, FiDollarSign } from 'react-icons/fi';
import { GiBriefcase } from 'react-icons/gi';

const Prediction2026 = () => {
  const predictions = [
    {
      icon: <GiBriefcase className="text-4xl" />,
      title: "Career Growth",
      description: "Discover career opportunities and professional advancement in 2026",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FiHeart className="text-4xl" />,
      title: "Love & Relationships",
      description: "Find out what's in store for your romantic life this year",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: <FiDollarSign className="text-4xl" />,
      title: "Financial Forecast",
      description: "Get insights on wealth accumulation and financial stability",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <FiTrendingUp className="text-4xl" />,
      title: "Personal Growth",
      description: "Understand your spiritual journey and self-development path",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <section id="predictions" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4">
            <FiCalendar />
            <span className="font-semibold">Year 2026 Predictions</span>
          </div>
          <h2 className="text-4xl font-bold text-dark-800 mb-4">How Will Be Your 2026?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get comprehensive predictions for all aspects of your life in 2026 based on Vedic astrology and planetary positions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {predictions.map((pred, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pred.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative p-8 text-white">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {pred.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{pred.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{pred.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Get Your Personalized 2026 Report</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Receive a detailed 50+ page report covering all aspects of your life for the year 2026
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="px-6 py-3 rounded-full w-full sm:w-64 text-dark-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input 
              type="date" 
              placeholder="Birth Date" 
              className="px-6 py-3 rounded-full w-full sm:w-64 text-dark-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-bold hover:bg-dark-800 hover:text-white transition transform hover:scale-105 w-full sm:w-auto">
              Get Report Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prediction2026;
