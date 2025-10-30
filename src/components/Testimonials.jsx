"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "The predictions were incredibly accurate! The astrologer helped me understand my career path and I got my dream job within 2 months.",
      service: "Career Consultation"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, NCR",
      rating: 5,
      text: "I was skeptical at first, but the gemstone recommendation changed my life. My business has grown exponentially since I started wearing it.",
      service: "Gemstone Consultation"
    },
    {
      name: "Anita Desai",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: "The Prashan Kundali service gave me instant answers to my pressing questions. The insights were spot-on and very helpful.",
      service: "Prashan Kundali"
    },
    {
      name: "Vikram Singh",
      location: "Jaipur, Rajasthan",
      rating: 5,
      text: "Learning Jyotish from their courses was a life-changing experience. The instructors are knowledgeable and very supportive.",
      service: "Jyotish Course"
    },
    {
      name: "Meera Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "The 2026 prediction report was detailed and eye-opening. It helped me prepare for important life decisions ahead.",
      service: "Year Prediction"
    },
    {
      name: "Amit Verma",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "The life prediction report covered everything - career, health, relationships. It's like having a roadmap for my future!",
      service: "Life Prediction"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark-800 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied clients who transformed their lives with our guidance
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active bg-primary-500',
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg p-6 h-full hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-dark-800 text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-sm text-primary-600 font-semibold mt-1">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-8 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">50,000+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
