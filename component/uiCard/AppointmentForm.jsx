"use client";

import React from "react";

const AppointmentForm = ({ branch = "I8", whatsappNumber = "923249134745" }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const service = e.target.service.value;
    const name = e.target.patient_name.value;
    const branch = e.target.branch.value;
    const email = e.target.patient_email.value;
    const phone = e.target.patient_phone.value;
    const date = e.target.appointment_date.value;
    const time = e.target.appointment_time.value;

    const message = `*Appointment Request*\n\nService: ${service}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nBranch: ${branch}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    e.target.reset();
    e.target.branch.value = branch;
  };

  return (
    <div className="w-full p-6 text-center bg-[#077aaa] rounded shadow-lg">
      <h2 className="mb-4 text-[1.3rem] sm:text-[1.8rem] md:text-[2.5rem] font-jost font-semibold text-white">
        Make Appointment
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          <input type="hidden" name="branch" value={branch} />
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
  );
};

export default AppointmentForm;
