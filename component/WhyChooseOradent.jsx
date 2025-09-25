"use client";

import Image from "next/image";
import clinicImage from "@/public/images/about1.webp";
import TickIcon from "@/public/images/icons/tickIcon.svg";

export default function WhyChooseOradent() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-6 sm:py-20 relative overflow-hidden">
      <div className="max-w-[1434px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        
        {/* Left Side (Image) */}
        <div className="relative w-full flex justify-center">
          <div data-aos="zoom-in" className="relative w-[90%] h-[380px] md:h-[620px] rounded-3xl overflow-hidden shadow-2xl border-3 sm:border-4 border-[#85c441]">
            <Image
              src={clinicImage}
              alt="Why Choose Oradent Dental Clinic"
              fill
              className="object-cover scale-105 hover:scale-110 transition-transform duration-500"
              priority
            />
          </div>
        </div>

        {/* Right Side (Text) */}
        <div className="px-4">
          <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-bold font-jost leading-snug text-[#091e3e] aos-init aos-animate">
            Why Choose Oradent Dental Clinic in Islamabad?
          </h2>

          <p data-aos="fade-down" className="text-gray-600 leading-relaxed mb-4 sm:mb-8 text-sm sm:text-base">
            At Oradent, we focus on giving you care that is safe, gentle, and easy to understand. 
            With modern tools and methods, our treatments are quick and comfortable. Our team 
            looks after your long-term oral health, helping you keep strong teeth and healthy gums. 
            Families trust us for honest advice, fair pricing, and friendly care — making every 
            visit stress-free and welcoming.
          </p>

          <h3 data-aos="fade-down" className="text-xl sm:text-2xl font-semibold text-[#045C94] mb-3 sm:mb-6">
            What Makes Oradent Special
          </h3>

          <ul className="space-y-4">
            {[
              {
                title: "Friendly and Skilled Team",
                desc: "Dentists who listen, explain, and treat with care.",
              },
              {
                title: "Modern Equipment",
                desc: "Safe, precise, and comfortable treatments every time.",
              },
              {
                title: "Personalized Care",
                desc: "Treatment plans that fit your needs and lifestyle.",
              },
              {
                title: "Trusted by Families",
                desc: "Honest advice, fair pricing, and a reputation you can rely on.",
              },
            ].map((item, i) => (
              <li data-aos="fade-down" key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white shadow-sm hover:shadow-md transition duration-300">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#045C94]/10 flex items-center justify-center">
                  <Image
                    src={TickIcon}
                    alt="Check Icon"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <span className="block font-semibold text-gray-900">{item.title}:</span>
                  <span className="block text-gray-600 text-sm">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
