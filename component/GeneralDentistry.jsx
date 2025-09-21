"use client";

import { Breadcrumb, ImageSection, TextContent } from "@/component/uiCard/EachServiceCard";
import GeneralDentistryImg from "@/public/images/services/General-dentistry.webp"; // Make sure to add and match the image in your public folder

export default function GeneralDentistry() {
  const breadcrumbItems = [
    { label: "Home", href: "https://oradentdentalclinic.com" },
    { label: "General Dentistry" },
  ];

  const description = `
    General dentistry encompasses a broad range of dental services aimed at maintaining oral health and preventing dental problems.
    Dentists specializing in general dentistry provide comprehensive care to patients of all ages, focusing on routine dental exams, cleanings, and treatments.
    It also includes diagnostic services such as X-rays and oral examinations.
    
    Oradent Dental Clinic provides complete general dental treatments to help you achieve optimal oral health.
    Our mission is to help you keep healthy teeth and gums by providing preventative care and specialized treatments.
    From regular examinations and cleanings to fillings and gum care, we provide everything you need to keep your smile healthy and brilliant.
    Our expert staff uses innovative treatments to address tooth disorders early on, improving long-term oral health.
    With us, you can be certain that you will receive high-quality treatment personalized to your specific requirements.
  `;

  return (
    <div className="container w-full max-w-[1400px] lg:max-w-[1337px] mx-auto px-4 mb-20 mt-26">
      <Breadcrumb items={breadcrumbItems} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <ImageSection
           src="/images/services/general-dentistry.webp"
          alt="General Dentistry"
        />
        <TextContent
          title="GENERAL DENTISTRY"
          description={description}
          highlight="The Role of General Dentistry in Preventing Dental Issues"
        />
      </div>
    </div>
  );
}
