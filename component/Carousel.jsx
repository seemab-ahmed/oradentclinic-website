"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import slider1 from "@/public/images/carousel/slider-2.webp";
import slider2 from "@/public/images/carousel/slider-3.webp";
import OnlinePaymentSection from "./OnlinePaymentSection";

const slides = [
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
];

const Carousel = () => {
  const [current, setCurrent] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideRef = useRef(null);
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

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
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(1);
      }, 2000);
    }
    if (current === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(extendedSlides.length - 2);
      }, 2000);
    } else {
      setIsTransitioning(true);
    }
  }, [current, extendedSlides.length]);

  return (
    <div className="bg-white relative">
      <div className="relative w-full h-[48vh] sm:h-[64vh] md:h-[82vh] overflow-hidden">
        
        {/* ✅ Marquee inside slider (fixed at top) */}
        <div className="absolute top-0 left-0 w-full z-30">
          <marquee
            direction="left"
            className="bg-[#85c441] font-light text-white text-xs sm:text-sm md:text-base py-2 px-4"
          >
            Mon - Fri (11:00am - 9:30pm) — Saturday (11:00am - 09:30pm) — Sunday (02:00pm - 9:30pm) 
            &nbsp; | &nbsp; We Opened a New Branch At F-8 Islamabad 
          </marquee>
        </div>

        {/* Slide Wrapper */}
        <div
          ref={slideRef}
          className={`flex h-full ${
            isTransitioning ? "transition-transform duration-1500 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {extendedSlides.map((slide, index) => (
            <div key={index} className="relative w-full flex-shrink-0 h-full">
              {/* Background Image */}
              <Image src={slide.src} alt={`Slide ${index}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-[#091e3e]/80" />

              {/* Text content */}
              <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
                {index === 1 ? ( // ✅ first real slide gets <h1>
                  <h1 className="text-[1.3rem] md:text-[3rem] lg:text-[4rem] font-black mt-6 sm:mt-2 font-jost leading-snug w-[368px] md:w-5xl">
                    {slide.title}
                  </h1>
                ) : (
                  <h2 className="text-[1.3rem] md:text-[3rem] lg:text-[4rem] font-black mt-6 sm:mt-2 font-jost leading-snug w-[368px] md:w-5xl">
                    {slide.title}
                  </h2>
                )}

                <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl font-light text-gray-200 leading-relaxed">
                  {slide.disc}
                </p>

                {/* Buttons */}
                <div className="mt-8 sm:mt-6 flex flex-row gap-3 md:gap-4 justify-center items-center">
                  <Link href={slide.btnlinkright} target="_blank" rel="noopener noreferrer">
                    <button className="px-2 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-base sm:text-base font-light sm:font-semibold bg-[#85c441] text-white hover:bg-[#075791] transition duration-300 w-34 sm:w-40 md:w-48 shadow-lg">
                      {slide.btntextright}
                    </button>
                  </Link>
                  <Link href={slide.btnlinkleft} target="_blank" rel="noopener noreferrer">
                    <button className="px-2 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-base sm:text-base font-light sm:font-semibold bg-[#075791] text-white hover:bg-[#85c441] transition duration-300 w-34 sm:w-40 md:w-48 shadow-lg">
                      {slide.btntextleft}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
