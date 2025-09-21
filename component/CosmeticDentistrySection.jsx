"use client";

import { Breadcrumb, ImageSection, TextContent } from "@/component/uiCard/EachServiceCard";
import CosmeticDentistryImg from "@/public/images/services/Cosmetic-Dentistry.webp"; // Ensure image is correctly named and placed

export default function CosmeticDentistrySection() {
  const breadcrumbItems = [
    { label: "Home", href: "https://oradentdentalclinic.com" },
    { label: "Cosmetic Dentistry" },
  ];

  const description = `
    Cosmetic dentistry refers to dental procedures that aim to improve the appearance of a person's teeth, gums, or smile.
    While many people associate cosmetic dentistry with treatments that can improve their smile, 
    it can also resolve dental issues such as misshapen, crooked, or misaligned teeth.
    
    In that sense, cosmetic dentistry can also be restorative.
  `;

  return (
    <div className="container w-full max-w-[1400px] lg:max-w-[1337px] mx-auto px-4 mb-20 mt-26">
      <Breadcrumb items={breadcrumbItems} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <ImageSection
          src={CosmeticDentistryImg}
          alt="Cosmetic Dentistry"
        />
        <TextContent
          title="COSMETIC DENTISTRY"
          description={description}
          highlight="Some key aspects of general dentistry"
        />
      </div>
    </div>
  );
}
