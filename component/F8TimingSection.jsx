"use client";
import React, { useState, useEffect } from "react";

// Clinic Timings Data
const timings = [
  { day: "Monday", time: "11:00 AM – 9:30 PM" },
  { day: "Tuesday", time: "11:00 AM – 9:30 PM" },
  { day: "Wednesday", time: "11:00 AM – 9:30 PM" },
  { day: "Thursday", time: "11:00 AM – 9:30 PM" },
  { day: "Friday", time: "03:00 PM – 9:30 PM" },
  { day: "Saturday", time: "11:00 AM – 9:30 PM" },
  { day: "Sunday", time: "03:00 PM – 9:30 PM" },
];

export default function F8TimingSection() {
  const [today, setToday] = useState("");

  useEffect(() => {
    const currentDay = new Date().toLocaleDateString("en-US", { weekday: "long" });
    setToday(currentDay);
  }, []);

  return (
    <section className="bg-[#f8fafc] ">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-12 items-start px-4 md:px-6 py-16 md:mt-16">
      {/* Left Content */}
      <div>
        <h2 className="text-[1.8rem] md:text-[2.5rem] lg:text-[3rem] font-bold font-jost leading-snug text-[#091e3e] mb-4">
          Your Family Dentist in Islamabad – Oradent Dental Clinic F-8 Markaz
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to Oradent Dental Clinic in F-8 Markaz, Islamabad, a place where healthy smiles begin. 
          Our clinic is known for reliable care, modern treatments, and a friendly atmosphere that makes 
          every visit stress-free. With advanced equipment and skilled dentists, we provide everything 
          from regular checkups and cleaning to cosmetic and restorative solutions. Whether you need a 
          trusted dentist in F-8 Markaz for routine care or specialized procedures, Oradent is here to 
          keep your teeth strong and your smile bright.
        </p>
      </div>

      {/* Right Schedule */}
      <div className="bg-white border rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#075791] to-[#0d74c4] text-white text-center py-3 font-semibold text-lg tracking-wide">
          🕒 Clinic Timings
        </div>

        {/* Timings List */}
        <div>
          {timings.map(({ day, time }, idx) => (
            <div
              key={idx}
              className={`flex justify-between items-center px-5 py-3 text-sm md:text-base transition-colors ${
                today === day
                  ? "bg-[#f0f9ff] text-[#075791] font-medium"
                  : idx % 2 === 0
                  ? "bg-gray-50"
                  : "bg-white"
              }`}
            >
              <span className="flex items-center gap-2">
                {/* Day Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-[#075791]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {day}
              </span>

              <span className="flex items-center gap-2 text-gray-700">
                {/* Clock Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-[#075791]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                  />
                </svg>
                {time}
              </span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
