"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const DentistCard = ({ name, qualifications, image }) => {
  return (
    <div data-aos="fade-up" className="bg-white shadow-lg rounded overflow-hidden flex flex-col justify-between relative">
      <div className="relative w-full h-92 min-h-[320px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-t"
        />
      </div>
      <div className="bg-gray-100 p-4 pt-8 text-center relative">
        <h4 className="font-semibold mb-2 text-[1rem] sm:text-[1.2rem] text-[#075791]">
          {name}
        </h4>
        {qualifications.map((qual, i) => (
          <p
            className="text-[#075791] text-sm sm:text-[1rem] leading-[1.2] py-1"
            key={i}
          >
            {qual}
          </p>
        ))}
        <div className="absolute top-[-10px] left-4/12">
          <Link
            href="/appointment"
            className="text-base font-medium leading-5 font-jost px-5 py-2.5 text-white bg-[#075791] hover:bg-[#85c441] transition-colors"
          >
            Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DentistCard;
