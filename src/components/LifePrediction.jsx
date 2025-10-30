'use client';
import { FiActivity, FiHeart, FiBriefcase, FiHome } from 'react-icons/fi';
import { GiHeartKey, GiHealthNormal } from 'react-icons/gi';

const LifePrediction = () => {
  const areas = [
    {
      icon: <GiHealthNormal className="text-5xl" />,
      title: "Health & Wellness",
      description: "Understand health patterns and preventive measures",
      color: "bg-green-500"
    },
    {
      icon: <FiHeart className="text-5xl" />,
      title: "Love & Marriage",
      description: "Find your soulmate and marriage compatibility",
      color: "bg-red-500"
    },
    {
      icon: <FiBriefcase className="text-5xl" />,
      title: "Career & Success",
      description: "Discover your ideal career path and success timing",
      color: "bg-blue-500"
    },
    {
      icon: <FiHome className="text-5xl" />,
      title: "Family & Children",
      description: "Insights about family life and progeny",
      color: "bg-purple-500"
    },
    {
      icon: <FiActivity className="text-5xl" />,
      title: "Wealth & Prosperity",
      description: "Financial growth and wealth accumulation periods",
      color: "bg-yellow-500"
    },
    {
      icon: <GiHeartKey className="text-5xl" />,
      title: "Spiritual Growth",
      description: "Your spiritual journey and enlightenment path",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark-800 mb-4">Complete Life Prediction</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get comprehensive predictions for every aspect of your life based on your birth chart and planetary positions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-transparent hover:border-primary-500"
            >
              <div className={`${area.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-800 mb-2">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Get Your Complete Life Report</h3>
              <p className="text-lg mb-6 opacity-90">
                Receive a detailed analysis covering all major life events, opportunities, and challenges
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <span className="bg-primary-500 w-6 h-6 rounded-full flex items-center justify-center text-sm">✓</span>
                  100+ Pages Detailed Report
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-primary-500 w-6 h-6 rounded-full flex items-center justify-center text-sm">✓</span>
                  Personalized Remedies & Solutions
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-primary-500 w-6 h-6 rounded-full flex items-center justify-center text-sm">✓</span>
                  Gemstone Recommendations
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-primary-500 w-6 h-6 rounded-full flex items-center justify-center text-sm">✓</span>
                  Free Consultation Included
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-primary-400 transition"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-primary-400 transition"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="date" 
                    placeholder="Date of Birth" 
                    className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-primary-400 transition"
                  />
                  <input 
                    type="time" 
                    placeholder="Time of Birth" 
                    className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-primary-400 transition"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Place of Birth" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-primary-400 transition"
                />
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-4 rounded-lg font-bold text-lg hover:from-primary-600 hover:to-secondary-600 transition transform hover:scale-105"
                >
                  Order Life Report - ₹2,499
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifePrediction;
