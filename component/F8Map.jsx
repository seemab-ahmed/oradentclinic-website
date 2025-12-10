"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image"; 

// Custom icons
import LocationIcon from "@/public/images/icons/locationIcon.png";
import PhoneIcon from "@/public/images/icons/phoneIcon.png";
import MailIcon from "@/public/images/icons/mailIcon.png";
import FacebookIcon from "@/public/images/icons/facebook.png";
import InstagramIcon from "@/public/images/icons/instagram.png";
import PinterestIcon from "@/public/images/icons/pintreast.png";

export default function F8ContactSection() {
  const address =
    "Office No. 14, Ground Floor, Hashim Plaza, Near MedCity Hospital, F-8 Markaz, Islamabad, 44000";
  const email = "oradentdentalclinicf8@gmail.com";
  const phone1 = "+923065393039";
  const phone2 = "+0512744915";
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.913974576776!2d73.03809397619405!3d33.71117483566198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf00563a08cb%3A0x6ef3103aaafeb171!2sOraDent%20Dental%20Clinic%20F-8%20Markaz%20Islamabad!5e0!3m2!1sen!2s!4v1742856045696!5m2!1sen!2s";

  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Google Map */}
        <div className="md:col-span-2 w-full h-[450px]">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="bg-[#075791] text-white p-10 flex flex-col justify-center gap-6">
          {/* Heading */}
          <h2 className="text-2xl font-semibold font-jost">
            OraDent Dental Clinic Islamabad (F-8)
          </h2>

          {/* Address */}
          <div className="flex items-start gap-3">
            <Image src={LocationIcon} alt="location" width={22} height={22} />
            <Link
              href="https://share.google/XZYdHv3UhfVGZ6tBW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm leading-relaxed hover:underline"
            >
              {address}
            </Link>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <Image src={PhoneIcon} alt="phone" width={22} height={22} />
            <div className="flex flex-col gap-1 text-sm">
              <Link href={`tel:${phone1}`} className="hover:underline">
                {phone1}
              </Link>
              <Link href={`tel:${phone2}`} className="hover:underline">
                {phone2}
              </Link>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <Image src={MailIcon} alt="email" width={22} height={22} />
            <Link
              href={`mailto:${email}`}
              className="text-sm hover:underline break-words"
            >
              {email}
            </Link>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              href={`tel:${phone1}`}
              className="flex-1 bg-[#fff] text-black px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#1ebe5d] transition text-center"
            >
              Call Now
            </Link>
            <Link
              href="https://wa.me/923065393039"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366] text-[#fff] px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#eab308] transition text-center"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
