"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { FiStar, FiTrendingUp } from 'react-icons/fi';
import { GiCrystalBall, GiSpellBook } from 'react-icons/gi';

const HeroSlider = () => {
  const slides = [
    {
      title: "Discover Your 2026 Predictions",
      subtitle: "Get personalized insights for the coming year",
      description: "Unlock the secrets of your future with accurate Vedic astrology predictions",
      icon: <FiTrendingUp className="text-6xl" />,
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Prashan Kundali",
      subtitle: "Ask your questions, get instant answers",
      description: "Ancient wisdom to solve your modern problems through Prashan astrology",
      icon: <GiCrystalBall className="text-6xl" />,
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Learn Jyotish from Basics",
      subtitle: "Master the art of Vedic astrology",
      description: "Comprehensive courses designed for beginners to advanced learners",
      icon: <GiSpellBook className="text-6xl" />,
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Life Predictions & Gemstones",
      subtitle: "Transform your destiny",
      description: "Get personalized gemstone recommendations based on your birth chart",
      icon: <FiStar className="text-6xl" />,
      gradient: "from-green-600 to-teal-600"
    }
  ];

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active bg-primary-500',
        }}
        navigation={true}
        loop={true}
        className="h-[600px] lg:h-[700px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`relative h-full w-full bg-gradient-to-br ${slide.gradient} flex items-center justify-center`}>
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <div className="mb-6 flex justify-center animate-bounce">
                  {slide.icon}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-3 font-semibold">
                  {slide.subtitle}
                </p>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-100 transition transform hover:scale-105">
                    Get Started Now
                  </button>
                  <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-600 transition transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
