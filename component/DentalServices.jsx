'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Before from "@/public/images/services/before.webp";
import After from "@/public/images/services/after.webp";
import Braces from "@/public/images/services/BRaces.webp";
import CosmeticDentistry from "@/public/images/services/Cosmetic-Dentistry.webp";
import DentalImplant from "@/public/images/services/Dental-Implant.webp";
import Denture from "@/public/images/services/Denture.webp";
import GeneralDentistry from "@/public/images/services/General-dentistry.webp";
import RootCanal from "@/public/images/services/Root-Cenal.webp";
import TeethFilling from "@/public/images/services/Teeth-Filling.webp";
import ToothWhiting from "@/public/images/services/tooth-whiting.webp";

// ⬇️ Import dynamically to prevent SSR issues
const CompareSlider = dynamic(() => import('react-compare-image'), { ssr: false });

export default function DentalServices() {
  const services = [
    {
      title: 'General Dentistry',
      desc: 'Dentists specializing in general dentistry provide comprehensive care to patients of all ages, focusing on routine dental exams, cleanings, and treatments.',
      img: GeneralDentistry,
      link: '/general-dentistry',
    },
    {
      title: 'Cosmetic Dentistry',
      desc: 'Imperfections such as chipped or malformed teeth can be corrected with veneers, bonding, and other cosmetic operations.',
      img: CosmeticDentistry,
      link: '/cosmetic-dentistry',
    },
    {
      title: 'Dental Implants',
      desc: 'Dental implants are artificial tooth roots made of titanium that are surgically placed into the jawbone beneath the gum line.',
      img: DentalImplant,
      link: '/dental-implants',
    },
    {
      title: 'Orthodontics',
      desc: 'Teeth are misaligned, orthodontic treatments such as braces or clear aligners might help you achieve a straighter smile.',
      img: Braces,
      link: '/orthodontics',
    },
    {
      title: 'Teeth Whitening',
      desc: 'Professional teeth whitening erases years of stains, making your teeth appear brighter and more youthful.',
      img: ToothWhiting,
      link: '/teeth-whitening',
    },
    {
      title: 'Denture',
      desc: 'A denture is a removable replacement for missing teeth and surrounding tissues.',
      img: Denture,
      link: '/denture',
    },
    {
      title: 'Root Canal',
      desc: 'Dental procedure used to treat infection at the centre of a tooth.',
      img: RootCanal,
      link: '/root-canal',
    },
    {
      title: 'Teeth Filling',
      desc: 'Decayed tooth tissue is removed and space filled with a filling material.',
      img: TeethFilling,
      link: '/teeth-filling',
    },
  ];

  return (
    <div className="py-10 md:py-28">
      <div className="flex flex-col lg:flex-row gap-12 container w-full max-w-[1400px] mx-auto px-4">
        {/* 🟦 Professional Before/After Slider */}
        <div className="w-full lg:w-5/12" data-aos="zoom-in-left">
          <div className="rounded overflow-hidden shadow-md">
            <CompareSlider
              leftImage={Before.src}
              rightImage={After.src}
              alt="Before and After"
              sliderLineWidth={2}
              sliderLineColor="#ffffff"
              handleSize={40}
            />
          </div>
        </div>

        {/* 🟩 Services Header + First Two */}
        <div className="w-full lg:w-7/12">
          <div className="mb-5" data-aos="zoom-in-left">
            <h5 className="text-[#075791] font-jost font-medium text-[1rem] lg:text-[1.25rem] uppercase mb-2">Our Services</h5>
            <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-bold font-jost leading-snug text-[#091e3e]">We Offer The Best Quality Dental Services</h1>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {services.slice(0, 2).map((service, idx) => (
              <Link key={idx} href={service.link}>
                <div className="flex rounded-lg overflow-hidden shadow-sm hover:shadow-md transition" data-aos="zoom-in-left">
                  <div className="w-1/3">
                    <Image src={service.img} alt={service.title} width={300} height={200} className="object-cover w-full h-full" />
                  </div>
                  <div className="w-2/3 bg-gray-100 p-4">
                    <h5 className="font-semibold font-jost text-[1rem] md:text-[1.25rem] text-[#091e3e]">{service.title}</h5>
                    <p className="text-sm text-[#0dbaed]">{service.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 🟨 Remaining Services */}
      <div className="grid md:grid-cols-2 gap-12 mt-10 container w-full max-w-[95%] lg:max-w-[84%] mx-auto px-4">
        {services.slice(2).map((service, idx) => (
          <Link key={idx} href={service.link}>
            <div className="flex rounded-lg overflow-hidden shadow-sm hover:shadow-md transition" data-aos="zoom-in-left">
              <div className="w-1/3">
                <Image src={service.img} alt={service.title} width={300} height={200} className="object-cover w-full h-full" />
              </div>
              <div className="w-2/3 bg-gray-100 p-4">
                <h5 className="font-semibold font-jost text-[1rem] md:text-[1.25rem] text-[#091e3e]">{service.title}</h5>
                <p className="text-sm text-[#0dbaed]">{service.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

