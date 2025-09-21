"use client";

import { Breadcrumb, ImageSection, TextContent } from "@/component/uiCard/EachServiceCard";
import OrthoImg from "@/public/images/services/BRaces.webp";

export default function Orthodontics() {
  const breadcrumbItems = [
    { label: "Home", href: "https://oradentdentalclinic.com" },
    { label: "Orthodontics" },
  ];

  const description = `
    Orthodontics is a dental specialty focused on aligning your bite and straightening your teeth.
    You might need to see an orthodontist if you have crooked, overlapped, twisted or gapped teeth.
    Common orthodontic treatments include traditional braces, clear aligners and removable retainers.
    The way your teeth fit together has a significant impact on your oral health.

    Smile freely with our tailored orthodontics solutions. Our specialized treatment including braces and Invisalign are designed to align your teeth, bites and jaw irregularities.
    Our team of skilled orthodontists has years of experience, focusing on unique dental needs and long-term oral health.
    Regardless of your age, Oradent Dental Clinic offers multiple treatment options that are comfortable, impactful and discreet.

    From conventional metal braces to transparent aligners, Oradent Dental Clinic utilizes modern technology to achieve optimal outcomes.
  `;

  return (
    <div className="container w-full max-w-[1400px] lg:max-w-[1337px] mx-auto px-4 mb-20 mt-26">
      <Breadcrumb items={breadcrumbItems} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <ImageSection
          src={OrthoImg}
          alt="Orthodontics"
        />
        <TextContent
          title="ORTHODONTICS"
          description={description}
          highlight="Have a Confident Smile with Custom Treatment Plans"
        />
      </div>
    </div>
  );
}
