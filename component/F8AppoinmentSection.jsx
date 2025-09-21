"use client";
import React from "react";
import ReviewBg from "@/public/images/carousel/slider-3.webp";
import AppointmentForm from "./uiCard/AppointmentForm";

const F8AppoinmentSection = () => {
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
          <div className="lg:w-1/2 pt-5">
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

           <div className="lg:w-1/2 py-5 flex items-center">
    <AppointmentForm branch="F8" whatsappNumber="923059410097" />
  </div>

      {/* Right Column (Form) */}
{/* <div className="lg:w-1/2 py-5 flex items-center">
  <div className="w-full p-6 text-center bg-[#077aaa] rounded shadow-lg">
    <h2 className="mb-4 text-[1.3rem] sm:text-[1.8rem] md:text-[2.5rem] font-jost font-semibold text-white">
      Make Appointment
    </h2>
<form
  onSubmit={(e) => {
    e.preventDefault();
    const service = e.target.service.value;
    const name = e.target.patient_name.value;
    const branch = e.target.branch.value;
    const email = e.target.patient_email.value;
    const phone = e.target.patient_phone.value;
    const date = e.target.appointment_date.value;
    const time = e.target.appointment_time.value;

    const message = `*Appointment Request*\n\nService: ${service}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nBranch: ${branch}`;

    const whatsappNumber = "923249134745"; // Correct international format (Pakistan example)
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
      e.target.reset();
    e.target.branch.value = "I8";
  }}
>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <select
        className="w-full p-4 border-none bg-white rounded text-black text-sm sm:text-base"
        name="service"
        defaultValue=""
      >
        <option value="">Select A Service</option>
        <option value="General Dentistry">General Dentistry</option>
        <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
        <option value="Dental Implants">Dental Implants</option>
        <option value="Orthodontics">Orthodontics</option>
        <option value="Teeth Whitening">Teeth Whitening</option>
        <option value="Denture">Denture</option>
        <option value="Root Canal">Root Canal</option>
        <option value="Teeth Filling">Teeth Filling</option>
      </select>
    </div>

    <input
      type="text"
      name="patient_name"
      placeholder="Your Name"
      className="w-full p-4 border-none bg-white text-black text-sm sm:text-base rounded"
    />
    <input
      type="email"
      name="patient_email"
      placeholder="Your Email"
      className="w-full p-4 border-none bg-white text-black rounded text-sm sm:text-base"
    />
     <input type="hidden" name="branch" value="I8" />
    <input
      type="text"
      name="patient_phone"
      placeholder="Your Phone Number"
      className="w-full p-4 border-none bg-white text-black rounded text-sm sm:text-base"
    />
    <input
      type="text"
      name="appointment_date"
      placeholder="Appointment Date"
      className="w-full p-4 border-none bg-white text-black rounded text-sm sm:text-base"
      autoComplete="off"
    />
    <input
      type="text"
      name="appointment_time"
      placeholder="Appointment Time"
      className="w-full p-4 border-none bg-white text-black rounded text-sm sm:text-base"
      autoComplete="off"
    />
  </div>

  <button
    type="submit"
    className="mt-6 w-full bg-[#091e3e] text-white font-jost text-[1rem] py-3 rounded hover:bg-[#10151b] transition"
  >
    Make Appointment
  </button>
</form>

  </div>
</div> */}

        </div>
      </div>
    </div>
  );
};

export default F8AppoinmentSection;
