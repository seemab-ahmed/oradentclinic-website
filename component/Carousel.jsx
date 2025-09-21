"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import slider1 from "@/public/images/carousel/slider-2.webp";
import slider2 from "@/public/images/carousel/slider-3.webp";

const slides = [
  {
    src: slider1,
    title:  "Proudly Serving Patients in Two Prime locations",
    btntextleft: "I-8 Islamabad",
    btntextright: "F8 Islamabad",
  },
  {
    src: slider2,
    titleTop: "LEADING AND MOST TRUSTED",
      title: (
    <>
      Dental Clinic In <br /> Islamabad
    </>
  ),
    btntextleft: "Appointment",
    btntextright: "Contact Us",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[50vh] sm:h-[64vh] md:h-[89vh] overflow-hidden">
      {/* Render only the current slide to avoid layering issues */}
      <div className="absolute inset-0 w-full h-full z-10">
        <Image
          src={slides[current].src}
          alt={`Slide ${current + 1}`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[#091e3e]/80" />
      </div>

      {/* Text content */}
     <div
  data-aos="zoom-in"
  className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4"
>

        {slides[current].titleTop && (
          <h5 className="text-[0.8rem] md:text-[1.25rem] font-jost">
            {slides[current].titleTop}
          </h5>
        )}
        <h1
          className="text-[1.5rem] md:text-[3rem] lg:text-[5rem] font-black w-[200px] md:w-3xl mt-2 font-jost"
        >
          {slides[current].title}
        </h1>
        <div className="mt-6 flex flex-row gap-3 md:gap-4 justify-center items-center">
          <button className="px-1 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base font-semibold bg-[#075791] text-white hover:bg-[#85c441] transition duration-300 w-30 sm:w-40 md:w-50
          ">
            {slides[current].btntextleft}
          </button>
          <button className="px-1 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base font-semibold bg-[#85c441] text-white hover:bg-[#075791] transition duration-300 w-30 sm:w-40 md:w-50">
            {slides[current].btntextright}
          </button>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute top-1/2 left-5 z-30 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full transition"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 6 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </button>

      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute top-1/2 right-5 z-30 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full transition"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 6 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
