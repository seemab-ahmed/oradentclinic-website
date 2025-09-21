"use client";
import React from "react";
import ReviewBg from "@/public/images/carousel/slider-3.webp";
import AppointmentForm from "./uiCard/AppointmentForm";

const AppointmentSection = () => {
  return (
    <div className="relative my-5 md:my-20 text-white">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${ReviewBg.src})`,
        }}
      ></div>

      {/* Overlay Layer */}
      <div className="absolute inset-0 z-0 bg-[#091e3e] opacity-80"></div>

      {/* Content Layer */}
      <div className="relative z-10 py-14 container w-full max-w-[1400px] lg:max-w-[1337px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <div
           data-aos="fade-right"
           className="lg:w-1/2 pt-5">
            <h1 className="mb-5 text-white text-[1.3rem] sm:text-[1.8rem] md:text-[2.5rem] font-jost font-bold">
              Why Choose Us?
            </h1>
            <p className="text-white text-sm md:text-[1rem] font-openSans leading-6 tracking-[0.6px]">
              OraDent Dental Clinic Provides top notch dental services, never
              compromising on the health, hygiene and comfort of its patients.
              We offer expertiese in a diverse spectrum of dental problem and
              oral surgery. OraDent Dental Clinic aims to provide the highest
              level of dental treatment by utilising the most appropriate and
              cost effective solution using infection control protocols
              following all the guidelines provided by WHO and PMC. We are a
              team of highly certified and Professional Staff and it is our
              utmost responsibility to listen to yours concerns and give you the
              most appropriate, cost effective treatment plan that you
              understand and agree with.
            </p>
          </div>

           <div
            data-aos="fade-left"
           className="lg:w-1/2 py-5 flex items-center">
    <AppointmentForm branch="I8" whatsappNumber="923249134745" />
  </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;
