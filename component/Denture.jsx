// components/TeethFilling.jsx
"use client";

import { Breadcrumb, ImageSection, TextContent } from "@/component/uiCard/EachServiceCard";
import DentureImg from "@/public/images/services/Denture.webp"

export default function Denture() {
  const breadcrumbItems = [
    { label: "Home", href: "https://oradentdentalclinic.com" },
    { label: "Denture" },0
  ];

  const description =
    "A denture is a removable replacement for missing teeth and surrounding tissues. Two types of dentures are available -- complete and partial dentures." +
    "Complete dentures are used when all the teeth are missing," +
    "while partial dentures are used when some natural teeth remain." +
    "Your smile is the best and most powerful way to connect with the world." +
    "If missing teeth are holding you back then it's high time to spot back the shine of your smile."+
    "Get your confidence back with our affordable dentures.";

  return (
    <div className="container w-full max-w-[1400px] lg:max-w-[1337px] mx-auto px-4 mb-20 mt-26">
      <Breadcrumb items={breadcrumbItems} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <ImageSection
          src={DentureImg}
          alt="Denture"
        />
        <TextContent
          title="DENTURE"
          description={description}
          highlight="Some key aspects of general dentistry"
        />
      </div>
    </div>
  );
}
