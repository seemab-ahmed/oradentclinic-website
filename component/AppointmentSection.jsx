"use client";
import React from "react";
import ReviewBg from "@/public/images/carousel/slider-3.webp";
import AppointmentForm from "./uiCard/AppointmentForm";

const AppointmentSection = () => {
  return (
    <div className="relative my-5 md:my-20 text-white bg-white">
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
           className="lg:w-1/2 pt-5">
            <h3 className="mb-3 text-white text-[1.1rem] sm:text-[1.4rem] md:text-[1.8rem] font-jost font-semibold">
              Why Choose Us
            </h3>
            <p className="text-white text-sm md:text-[1rem] font-openSans leading-6 tracking-[0.6px] mb-4">
              Patient comfort is our priority, and we utilize advanced technology for accurate diagnosis and precise treatments, guaranteeing the highest standard of care.
            </p>

            <ul className="list-disc list-inside text-white space-y-2">
              <li>7+ Years of Excellence in Dental Services</li>
              <li>Team of 8+ Renowned Dentists with all dental specialties</li>
              <li>2 Branches in Islamabad</li>
              <li>1000+ Happy Patients</li>
              <li>In-House Dental Lab</li>
            </ul>
          </div>

           <div
            data-aos="zoom-in"
           className="lg:w-1/2 py-5 flex items-center">
    <AppointmentForm branch="I8" whatsappNumber="923249134745" />
  </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;
