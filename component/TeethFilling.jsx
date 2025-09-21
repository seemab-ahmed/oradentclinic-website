// components/TeethFilling.jsx
"use client";

import { Breadcrumb, ImageSection, TextContent } from "@/component/uiCard/EachServiceCard";
import TeethFiling from "@/public/images/services/Teeth-Filling.webp"

export default function TeethFilling() {
  const breadcrumbItems = [
    { label: "Home", href: "https://oradentdentalclinic.com" },
    { label: "Teeth Filling" },
  ];

  const description =
    "A filling is used to treat a small hole, or cavity, in a tooth. To repair a cavity, " +
    "a dentist removes the decayed tooth tissue and then fills the space with a filling material. " +
    "There are several types of fillings, including amalgam and tooth-colored options like composite resin and porcelain. " +
    "Depending on the material used, some dental fillings can last up to 20 years.";

  return (
    <div className="container w-full max-w-[1400px] lg:max-w-[1337px] mx-auto px-4 mb-20 mt-26">
      <Breadcrumb items={breadcrumbItems} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <ImageSection
          src={TeethFiling}
          alt="Teeth Filling"
        />
        <TextContent
          title="Teeth Filling"
          description={description}
          highlight="Some key aspects of general dentistry"
        />
      </div>
    </div>
  );
}
