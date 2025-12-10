"use client";

import React from "react";
import Link from "next/link";
// import your dentist images
import Shoaib from "@/public/images/dentist/sohaib.webp";
import Kaynaat from "@/public/images/dentist/kaynaat.webp";
import Bariya from "@/public/images/dentist/bariya.webp";
import Zainab from "@/public/images/dentist/Dr-zainab.webp";
import DrMaryam from "@/public/images/dentist/dr-icon.png";
import F8DentistSlider from "./F8DentistSlider";

export default function Home() {
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
      name: "Dr. Mukammil",
      qualifications: [
        "Dental Surgeon",
        "BDS RDS (UHS)",
        "MDS (PGR)",
        "Operative Dentistry & Endodontics",
      ],
      image: Bariya,
    },
    {
      name: "Dr. Maryam Hafeez",
      qualifications: [
        "BDS RDS",
        "Orthodontist",
        "FCPS PGT Ortho",
        "Certified Implantologist",
      ],
      image: DrMaryam,
    },
    {
      name: "Dr. Zainab Qureshi",
      qualifications: [
        "Dental Surgeon",
        "BDS RDS",
        "C-Orthodontist",
        "Cosmetic Dentist",
      ],
      image: Zainab,
    },
  ];

  return (
    <main>
      <F8DentistSlider dentists={dentists} />
    </main>
  );
}
