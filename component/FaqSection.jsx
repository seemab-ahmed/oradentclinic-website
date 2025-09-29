"use client";

import { useState } from "react";

export default function FAQSection({ faqs, title, subtitle }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f9fcff] py-8 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-4 sm:mb-12">
          {title && (
            <h3 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-bold font-jost leading-snug text-[#091e3e] aos-init aos-animate">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-gray-600 mt-3 text-base md:text-lg">{subtitle}</p>
          )}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-start gap-2 sm:gap-4 px-4 sm:px-6 py-5 text-left"
              >
                <span className="flex-1 text-gray-900 font-medium text-base md:text-lg leading-snug">
                  {faq.question}
                </span>

                {/* Chevron icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 flex-shrink-0 text-gray-500 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
