"use client";

import Image from "next/image";
import clinicImage from "@/public/images/f8Images/f8slider2.webp";

export default function AboutI8Branch() {
  return (
    <section className="w-full bg-white py-6 sm:py-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 items-center px-4">
        
        {/* Left Text */}
        <div>
          <h2 data-aos="fade-down" className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-bold font-jost leading-snug text-[#091e3e]">
            Welcome to Oradent Dental Clinic – Your Family Dentist in Islamabad
          </h2>
          <p data-aos="fade-down" className="text-gray-700 text-sm sm:text-base leading-relaxed mb-2 sm:mb-4">
            At Oradent Dental Clinic, we care about more than just teeth; we care about you. Since 2018, 
            our team of friendly and skilled dentists has been helping families in Islamabad maintain healthy 
            and bright smiles. With two easy-to-reach clinics in I-8 Markaz and F-8 Markaz, we’re always 
            close when you need us.
          </p>
          <p data-aos="fade-down" className="text-gray-700 text-sm sm:text-base leading-relaxed mb-2 sm:mb-4">
            No matter your age or dental needs, we offer care that fits you. From a child’s first dental visit to 
            advanced treatments like implants or root canals, our team is here with patience, kindness, and 
            expertise. We believe that every smile tells a story, and we want yours to be healthy, confident, 
            and lasting.
          </p>
          <p data-aos="fade-down" className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Our modern equipment, gentle methods, and clear communication help make your 
            treatment smooth and worry-free. At Oradent, you’re not just a patient, you’re part of our 
            dental family.
          </p>
        </div>

        {/* Right Image */}
        <div  data-aos="zoom-in"
         className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-3 sm:border-4 border-[#85c441]">
          <Image
            src={clinicImage}
            alt="Oradent Dental Clinic"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
