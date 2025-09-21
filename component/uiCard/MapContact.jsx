'use client';

import Image from 'next/image';
import React from 'react';
import Location from "@/public/images/icons/locationBlue.png"
import Phone from "@/public/images/icons/mobileBlue.png"
import Mail from "@/public/images/icons/mailBlue.png"

export default function MapContact({ title, address, email, phone1, phone2 }) {
  return (
    <div className="bg-[#eef9ff] rounded p-6 w-full">
      <div className="mb-6">
        <h5 className="text-[#075791] uppercase font-semibold mb-2">Contact Us</h5>
        <h1 className="text-3xl font-bold text-[#091e3e]">{title}</h1>
      </div>

      <div className="mb-4 flex items-start gap-4">
        <Image src={Location} alt="Location Icon" width={32} height={32} className="mt-1" />
        <div>
          <h5 className="font-semibold">Our Office</h5>
          <p className='max-w-[500px] text-[#6B6A75]'>{address}</p>
        </div>
      </div>

      <div className="mb-4 flex items-start gap-4">
        <Image src={Mail} alt="Email Icon" width={32} height={32} className="mt-1" />
        <div>
          <h5 className="font-semibold">Email Us</h5>
          <p>{email}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Image src={Phone} alt="Phone Icon" width={32} height={32} className="mt-1" />
        <div>
          <h5 className="font-semibold">Call Us</h5>
          <p>
            <a href={`tel:${phone1}`} className="text-gray-700 block">{phone1}</a>
            {phone2 && <a href={`tel:${phone2}`} className="text-gray-700 block">{phone2}</a>}
          </p>
        </div>
      </div>
    </div>
  );
}

