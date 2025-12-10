"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const TestimonialCarousel = ({ title, background, testimonials }) => {
  return (
    <div className="relative py-10 px-4 md:px-6 text-white">
      {/* Background image */}
      {background && (
        <div
          data-aos="zoom-in"
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
      )}
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-[#051e42] opacity-80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {title && (
          <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] leading-snug font-bold font-jost text-center mb-8">
            {title}
          </h2>
        )}

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          loop={true}
          spaceBetween={30}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="text-center bg-[#2d6e9b] px-6 py-10 sm:px-10 sm:py-14 rounded-xl shadow-lg"
                data-aos="zoom-in-left"
              >
                {/* Profile */}
                <div className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="mb-4 w-20 h-20 object-cover rounded-full border-2 border-white shadow"
                  />
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa fa-star text-yellow-400"></i>
                    ))}
                  </div>
                  <h4 className="text-lg font-semibold mb-4">{item.name}</h4>
                </div>

                {/* Text */}
                <p className="text-sm sm:text-base font-sans leading-relaxed italic">
                  “{item.text}”
                </p>

                {/* Quote Icon */}
                <div className="mt-4 text-2xl text-white opacity-75">
                  <i className="fa fa-quote-right" aria-hidden="true"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
