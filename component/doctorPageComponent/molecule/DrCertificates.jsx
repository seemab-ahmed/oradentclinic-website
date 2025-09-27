"use client";

import { useState } from "react";
import Image from "next/image";

export default function DrCertificates({ title, subtitle, certificates }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section className="py-12 sm:py-20 px-6 bg-gray-50 text-center font-sans">
      <div className="max-w-[1300px] mx-auto">
        {/* Title */}
        <h2 data-aos="fade-down" className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-bold font-jost leading-snug text-[#091e3e] aos-init aos-animate">
          {title}
        </h2>
        <p data-aos="fade-down" className="text-lg text-gray-600 mb-12">{subtitle}</p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl shadow-md cursor-pointer group"
              onClick={() => setLightboxImage(cert.src)}
            >
              <Image
              data-aos="fade-down"
                src={cert.src}
                alt={cert.alt}
                className="rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative">
            <Image
            data-aos="fade-down"
              src={lightboxImage}
              alt="Lightbox"
              className="max-w-[90vw] max-h-[80vh]"
            />
            <button
              className="absolute top-[-40px] right-[-10px] text-white text-3xl font-bold"
              onClick={() => setLightboxImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
