"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import slider1 from "@/public/images/carousel/slider-2.webp";
import slider2 from "@/public/images/carousel/slider-3.webp";

const slides = [
  {
    src: slider1,
    title: (
      <>
        Proudly Serving Patients in <br /> Two Prime locations
      </>
    ),
    disc: "Trusted by families across Islamabad for quality care, modern treatments, and lasting smiles.",
    btntextleft: "F-8 Islamabad",
    btnlinkleft: "https://share.google/XZYdHv3UhfVGZ6tBW",
    btntextright: "I-8 Islamabad",
    btnlinkright: "https://share.google/aPUNO0fTSB4Y17rEV",
  },
{
  src: slider2,
  title: (
    <>
      LEADING AND MOST TRUSTED <br /> Dental Clinic In Islamabad
    </>
  ),
  disc: "Trusted by families across Islamabad for quality care, modern treatments, and lasting smiles.",
  btntextleft: "Appointment",
  btnlinkleft: "https://wa.me/923249134745", 
  btntextright: "Call Us",
  btnlinkright: "tel:+923249134745",
},
];

const Carousel = () => {
  const [current, setCurrent] = useState(1); 
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideRef = useRef(null);

  const extendedSlides = [
    slides[slides.length - 1],
    ...slides,
    slides[0],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
      setIsTransitioning(true);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle infinite loop effect
  useEffect(() => {
    if (current === extendedSlides.length - 1) {
      // reached fake last slide → jump to real first
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(1);
      }, 700); // match transition duration
    }
    if (current === 0) {
      // reached fake first slide → jump to real last
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(extendedSlides.length - 2);
      }, 700);
    } else {
      setIsTransitioning(true);
    }
  }, [current, extendedSlides.length]);

  return (
    <div className="">
      <div className="w-full">
        <marquee
          direction="left"
          className="bg-[#85c441] text-white text-base md:text-xl py-2 px-4"
        >
          We Are Opened a New Branch At F8 Islamabad
        </marquee>
      </div>
    <div className="relative w-full h-[40vh] sm:h-[64vh] md:h-[70vh] overflow-hidden">
      {/* Slide Wrapper */}
      <div
        ref={slideRef}
        className={`flex h-full ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="relative w-full flex-shrink-0 h-full">
            {/* Background Image */}
            <Image
              src={slide.src}
              alt={`Slide ${index}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#091e3e]/80" />

            {/* Text content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
              <h1 className="text-[1.3rem] md:text-[3rem] lg:text-[4rem] font-black mt-2 font-jost leading-snug w-[368px] md:w-5xl">
                {slide.title}
              </h1>

              <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl font-light text-gray-200 leading-relaxed">
                {slide.disc}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-row gap-3 md:gap-4 justify-center items-center">
                <Link
                  href={slide.btnlinkright}
                  target={slide.btnlinkright.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <button className="px-1 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base font-semibold bg-[#85c441] text-white hover:bg-[#075791] transition duration-300 w-28 sm:w-40 md:w-48 rounded-lg shadow-lg">
                    {slide.btntextright}
                  </button>
                </Link>

                <Link
                  href={slide.btnlinkleft}
                  target={slide.btnlinkleft.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <button className="px-1 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base font-semibold bg-[#075791] text-white hover:bg-[#85c441] transition duration-300 w-28 sm:w-40 md:w-48 rounded-lg shadow-lg">
                    {slide.btntextleft}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index + 1)} // shift because of cloning
            className={`w-3 h-3 rounded-full ${
              current === index + 1 ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
       <div className="w-full">
        <marquee
          direction="left"
          className="bg-[#85c441] text-white text-base md:text-xl py-2 px-4"
        >
          <b>Mon - Fri</b> (11:00am - 9:30pm) -- <b>Saturday</b> (11:00am - 09:30pm) -- <b>Sunday</b> (02:00pm - 8:00pm)  If you want to improve your smile, there's no better place to accomplish it than at the best dental clinic in Islamabad.
        </marquee>
      </div>
    </div>
  );
};

export default Carousel;
