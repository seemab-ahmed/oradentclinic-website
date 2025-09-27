// DentistCard.jsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DentistCard = ({ name, qualifications, image, href }) => {
  const router = useRouter();

  const handleNameClick = (e) => {
    // If href not provided, behave like a normal link (do nothing)
    if (!href) return;
    // Use router push as a reliable client-side navigation fallback
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className="bg-white shadow-lg rounded overflow-hidden flex flex-col justify-between relative">
      <div className="relative w-full h-92 min-h-[350px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-t"
        />
      </div>
      <div className="bg-gray-100 p-4 pt-8 text-center relative">
        {/* clickable doctor name */}
        {href ? (
          <Link href={href} onClick={handleNameClick}>
            <h4 className="font-semibold mb-2 text-[1rem] sm:text-[1.2rem] text-[#075791] hover:text-[#85c441] cursor-pointer">
              {name}
            </h4>
          </Link>
        ) : (
          <h4 className="font-semibold mb-2 text-[1rem] sm:text-[1.2rem] text-[#075791] hover:text-[#85c441]">
            {name}
          </h4>
        )}

        {qualifications.map((qual, i) => (
          <p
            className="text-[#075791] text-sm sm:text-[1rem] leading-[1.2] py-1"
            key={i}
          >
            {qual}
          </p>
        ))}

        <div className="mt-4.5 mb-2">
          <Link
            href="https://wa.me/923249134745?text=*I8%20Branch*%0AHello%2C%20I%20am%20interested%20in%20booking%20a%20dental%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium leading-5 font-jost px-5 py-2.5 text-white bg-[#075791] hover:bg-[#85c441] transition-colors"
          >
            Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DentistCard;
