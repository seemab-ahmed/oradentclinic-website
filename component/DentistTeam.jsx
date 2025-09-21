"use client";

import React from "react";
import Link from "next/link";
import DentistCard from "@/component/uiCard/DentistCard"; 

// Images
import Shoaib from "@/public/images/dentist/sohaib.webp";
import Bariya from "@/public/images/dentist/bariya.webp";
import Maimona from "@/public/images/dentist/maimona.webp";
import Huda from "@/public/images/dentist/huda.webp";
import Kaynaat from "@/public/images/dentist/kaynaat.webp";
import DrQurat from "@/public/images/dentist/drQurat.webp";

const dentists = [
  {
    name: "Dr. Sohaib Mansoor",
    qualifications: [
      "BDS RDS",
      "Oral & Maxillofacial Surgeon",
      "PGT AFID",
      "Senior Registrar PAF Hospital",
    ],
    image: Shoaib,
  },
  {
    name: "Dr. Mamoona Batool",
    qualifications: ["BDS RDS", "Consultant Orthodontist", "(FCPS)"],
    image: Maimona,
  },
  {
    name: "Dr. Kaynaat Zamir",
    qualifications: [
      "Dental Surgeon",
      "BDS RDS",
      "Certified Endodontist",
      "Certified Cosmetic Dentist",
    ],
    image: Kaynaat,
  },
  {
    name: "Dr. Baria Zareef",
    qualifications: [
      "Dental Surgeon",
      "BDS RDS (UHS)",
      "MDS (PGR)",
      "Operative Dentistry & Endodontics",
    ],
    image: Bariya,
  },
  {
    name: "Dr. Huda Mazhar",
    qualifications: [
      "Dental Surgeon",
      "BDS RDS (UHS)",
      "DHA Licensed, Dubai",
      "Certified Endodontist",
    ],
    image: Huda,
  },
  {
    name: "Dr. Qurat Ul Ain Arshad",
    qualifications: [
      "BDS (UHS), RDS (Gold Medalist)",
      "C-Orthodontist, Cosmetic Dentist",
      "C-Restorative & Endodontist",
      "Intl. Certified Aesthetic Physician (USA)",
      "Consultant at PAF Hospital, Islamabad",
    ],
    image: DrQurat,
  },
];

const DentistTeam = () => {
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4 max-w-[1400px] lg:max-w-[1337px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Title Section */}
          <div data-aos="zoom-in" className="bg-gray-100 p-6 rounded shadow h-[560px]">
            <h5 className="text-[#075791] uppercase font-bold mb-2 pt-4">
              Our Dentist
            </h5>
            <h1 className="text-[2rem] sm:text-[2.5rem] font-jost leading-[1.5] font-semibold mb-4 my-4 pb-4">
              Meet Our<br />Certified &<br />Experienced<br />Dentist
            </h1>
            <Link
              href="/appointment"
              className="text-base font-medium leading-5 font-jost px-5 py-2.5 text-white bg-[#075791] hover:bg-[#85c441] transition-colors"
            >
              Appointment
            </Link>
          </div>

          {/* Dentist Cards using reusable component */}
          {dentists.map((dentist, index) => (
            <DentistCard
              key={index}
              name={dentist.name}
              qualifications={dentist.qualifications}
              image={dentist.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DentistTeam;
