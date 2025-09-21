"use client";

import Image from "next/image";
import TickIcon from "@/public/images/icons/tickIcon.svg"

export default function AboutSection({
  subtitle,
  title,
  tagline,
  description,
  featuresLeft,
  featuresRight,
  imageUrl,
  imageAlt = "About Image",
  reverse = false,
}) {
  return (
    <section className="py-10">
      <div className="container w-full max-w-[1400px] lg:max-w-[1337px] mx-auto px-4">
      <div className={`flex flex-col lg:flex-row gap-10 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Section */}
          <div className="lg:w-7/12">
            <div className="mb-6">
              <h5 className="text-[#075791] font-jost font-medium text-[1rem] lg:text-[1.25rem] uppercase relative inline-block mb-2">
                {subtitle}
              </h5>
              <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-bold font-jost leading-snug text-[#091e3e]">{title}</h2>
            </div>
            <h4 className="mb-4 italic text-[#6b6a75] font-semibold text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] font-jost ">{tagline}</h4>
            <p className="mb-6 text-sm md:text-[1rem] text-[#6b6a75] font-openSans">{description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[featuresLeft, featuresRight].map((column, i) => (
                <div key={i} className="space-y-4">
                  {column.map((feature, index) => (
                    <div key={index} data-aos="zoom-in">
                      <h5 className="flex items-center font-medium text-[1rem] md:text-[1.25rem] text-[#091e3e] font-jost leading-[1.2] mb-1">
                        <Image
                          src={TickIcon} // ✅ use your custom icon path here
                          alt="Check Icon"
                          width={30}
                          height={30}
                          className="mr-2"
                        />
                        {feature.title}
                      </h5>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>  
          </div>

          {/* Image Section */}
          <div data-aos="zoom-in" className="lg:w-5/12 relative min-h-[500px]">
            <div className="absolute inset-0 rounded overflow-hidden">
              <Image
                src={imageUrl}
                alt={imageAlt}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
