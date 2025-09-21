"use client";

import { Breadcrumb, ImageSection, TextContent } from "@/component/uiCard/EachServiceCard";
import DentalImplantImg from "@/public/images/services/Dental-Implant.webp"; 

export default function DentalImplants() {
  const breadcrumbItems = [
    { label: "Home", href: "https://oradentdentalclinic.com" },
    { label: "Dental Implants" },
  ];

  const description = `
    Dental implants are artificial tooth roots made of titanium that are surgically placed into the jawbone beneath the gum line.
    They provide a stable foundation for replacement teeth that look, feel, and function like natural teeth. 
    Ideal for those who have lost one or more teeth due to tooth decay, gum disease, injury, or congenital conditions.

    Get yourself a beautiful smile with Oradent Dental Clinic. Our advanced procedure for dental implants replaces missing teeth with durable and realistic alternatives that function just like your real teeth.

    Our experts place a titanium post into your jawbone to create a strong foundation for a new tooth—ensuring stability and comfort from the start.
    Dental implants not only restore your smile but also help maintain oral health by preventing bone loss and preserving facial structure.

    Trust our experienced professionals to deliver a custom solution that brings back your confidence and natural smile.
  `;

  return (
    <div className="container w-full max-w-[1400px] lg:max-w-[1337px] mx-auto px-4 mb-20 mt-26">
      <Breadcrumb items={breadcrumbItems} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <ImageSection
          src={DentalImplantImg}
          alt="Dental Implants"
        />
        <TextContent
          title="DENTAL IMPLANTS"
          description={description}
          highlight="Dental Implants for a Lasting Smile"
        />
      </div>
    </div>
  );
}
