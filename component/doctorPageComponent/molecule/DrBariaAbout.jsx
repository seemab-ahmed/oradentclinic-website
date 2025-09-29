"use client";

import Image from "next/image";
import BariaImg from "@/public/images/dentist/bariya.webp"

export default function DrBariaAbout() {
  return (
    <section className="py-6 sm:py-16 px-6 bg-gray-50 font-sans">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side: Text */}
        <div className="flex-1 animate-fadeInLeft">
          <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-bold font-jost leading-snug text-[#091e3e] aos-init aos-animate">
            Dr. Baria Zareef
          </h2>
          <p className="text-base leading-[1.7] text-gray-700 mb-4">
            Dr. Baria Zareef is a specialist Endodontist and Cosmetic Dentist with over 6 years of 
            clinical experience. She is skilled in root canal treatments, cosmetic procedures like 
            veneers and teeth whitening, and restorative dentistry. Patients value her gentle care, 
            simple explanations, and focus on comfort during every visit.
          </p>
          <p className="text-base leading-[1.7] text-gray-700 mb-4">
            She completed her Bachelor of Dental Surgery (BDS) in 2019 from the University of Health 
            Sciences, Punjab. In 2023, she earned her Post Graduate Certification in Endodontics 
            (C-Endo). She is now pursuing her MDS in Operative Dentistry and Endodontics at Riphah 
            International University.
          </p>
          <p className="text-base leading-[1.7] text-gray-700 mb-6">
            Over the past few years, she has worked at PAF Hospital Islamabad, Dental Land Rawalpindi, 
            and currently at Oradent Dental Clinic Islamabad. With her knowledge and hands-on 
            experience, Dr. Baria provides trusted care in root canals, crowns and bridges, cosmetic 
            dentistry, teeth whitening, and emergency treatments.
          </p>

          <a
            href="tel:03418844838"
            className="inline-block bg-[#85c441] hover:bg-[#6ba634] text-white px-1 sm:px-6 py-2 sm:py-3 text-base sm:text-xl text-center md:text-start font-semibold transition-transform transform hover:scale-105"
          >
            Call now to schedule your dental consultation with Dr. Baria.
          </a>
        </div>

        {/* Right Side: Image */}
        <div data-aos="zoom-in" className="flex-1 animate-fadeInRight relative w-full h-[350px] md:h-[490px] rounded-3xl overflow-hidden shadow-2xl border-3 sm:border-4 border-[#85c441]">
          <Image
            src={BariaImg}
            alt="Dr. Baria Zareef"
            className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
