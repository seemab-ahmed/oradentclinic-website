// components/TeethFilling.jsx
"use client";

import { Breadcrumb, ImageSection, TextContent } from "@/component/uiCard/EachServiceCard";
import TeethFiling from "@/public/images/services/Root-Cenal.webp"

export default function RootCanal() {
  const breadcrumbItems = [
    { label: "Home", href: "https://oradentdentalclinic.com" },
    { label: "Root Canal" },
  ];

  const description =
    "Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth." +
    "Root canal treatment is not painful and can save a tooth that might otherwise have to be removed completely. " +
    "used to treat infection or damage deep inside a tooth's pulp (the soft tissue inside the tooth). " ;

  return (
    <div className="container w-full max-w-[1400px] lg:max-w-[1337px] mx-auto px-4 mb-20 mt-26">
      <Breadcrumb items={breadcrumbItems} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <ImageSection
          src={TeethFiling}
          alt="Teeth Filling"
        />
        <TextContent
          title="Root Canal"
          description={description}
          highlight="Some key aspects of general dentistry"
        />
      </div>
    </div>
  );
}
