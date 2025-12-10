"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PhoneIcon from "@/public/images/icons/phoneIcon.png";

const F8DentistSlider = ({ dentists }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerView = 4; // how many to show on desktop

  // Go to next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % dentists.length);
  };

  // Go to previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? dentists.length - 1 : prev - 1
    );
  };

  // Auto-play every 5s
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle wrapping for visible cards
  const visibleCards = [
    ...dentists.slice(currentIndex, currentIndex + cardsPerView),
    ...dentists.slice(0, Math.max(0, currentIndex + cardsPerView - dentists.length)),
  ];

  return (
    <section className="text-center py-12 max-w-[1300px] mx-auto">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-2">Meet Our Dentists</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Our team of highly qualified dental specialists is here to provide
        exceptional care and personalized treatments.
      </p>

      {/* Slider Container */}
      <div className="relative flex items-center justify-center">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 sm:-left-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Visible Cards */}
        <div className="flex gap-6 overflow-hidden px-6">
          {visibleCards.map((dentist, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden shadow-lg w-64 sm:w-72 bg-white flex-shrink-0"
            >
              <Image
                src={dentist.image}
                alt={dentist.name}
                className="w-full h-[300px] object-cover"
                width={300}
                height={300}
              />
              <div className="p-4 text-left border-b border-l border-r shadow border-gray-300">
                <h4 className="text-lg font-bold text-gray-900">{dentist.name}</h4>
                <ul className="text-gray-600 text-sm mt-2 space-y-1">
                  {dentist.qualifications.map((q, idx) => (
                    <li key={idx}>• {q}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute -right-4 sm:-right-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* CTA Button with phone number */}
 <div className="flex items-center gap-3 bg-blue-600 text-white px-4 sm:px-7 py-3 max-w-[330px] mx-auto mt-7 rounded-full shadow-md">
  {/* Phone Icon */}
  <Image 
    src={PhoneIcon} 
    alt="phone" 
    width={22} 
    height={22}
  />

  {/* CTA Text + Number */}
  <div className="flex flex-col text-sm">
    <a href="tel:+923065393039" className="font-semibold hover:underline">
      Book Your Appointment
    </a>
    {/* <span className="text-white">0306 5393039</span> */}
  </div>
</div>


    </section>
  );
};

export default F8DentistSlider;
