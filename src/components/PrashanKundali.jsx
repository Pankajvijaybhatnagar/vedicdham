'use client';
import { GiCrystalBall, GiMagicLamp, GiSpellBook } from 'react-icons/gi';
import { FiHelpCircle } from 'react-icons/fi';

const PrashanKundali = () => {
  const features = [
    {
      icon: <FiHelpCircle className="text-5xl" />,
      title: "Ask Any Question",
      description: "Get answers to specific questions about your life, career, relationships, or any concern"
    },
    {
      icon: <GiMagicLamp className="text-5xl" />,
      title: "Instant Results",
      description: "Receive immediate insights based on the time of your query using Prashan methodology"
    },
    {
      icon: <GiSpellBook className="text-5xl" />,
      title: "Ancient Wisdom",
      description: "Solutions based on thousands of years old Vedic astrology techniques"
    }
  ];

  return (
    <section id="kundali" className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <GiCrystalBall className="text-7xl text-primary-400 animate-pulse" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Prashan Kundali</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Get instant astrological answers to your burning questions through the ancient art of Prashan Jyotish
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="text-primary-400 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">{feature.title}</h3>
              <p className="text-white/80 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-center">Ask Your Question Now</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="px-6 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-primary-400 focus:bg-white/30 transition"
              />
              <input 
                type="date" 
                placeholder="Date of Birth" 
                className="px-6 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-primary-400 focus:bg-white/30 transition"
              />
            </div>
            <textarea 
              rows="4" 
              placeholder="Write your question here..." 
              className="w-full px-6 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-primary-400 focus:bg-white/30 transition"
            ></textarea>
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-primary-600 hover:to-secondary-600 transition transform hover:scale-105 shadow-lg"
            >
              Get Your Answer
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default PrashanKundali;
