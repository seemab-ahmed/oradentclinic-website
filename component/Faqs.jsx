"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How to pick the right dental clinic in Islamabad?",
    answer:
      "When choosing a dental clinic in Islamabad, look for experienced dentists, modern facilities, patient reviews, and convenient locations. At Oradent Dental Clinic, we combine all these factors, making us a trusted choice for families across the city.",
  },
  {
    question: "How much does it cost to clean teeth in Islamabad?",
    answer:
      "The cost of teeth cleaning (scaling and polishing) in Islamabad usually ranges between PKR 5,000 to 10,000. At Oradent Dental Clinic, we offer professional teeth cleaning at just PKR 4,000 on your first visit.",
  },
  {
    question: "Who is the best dentist in Islamabad?",
    answer:
      "At Oradent Dental Clinic, our team of 8+ experienced dentists is recognized among the best in Islamabad, offering trusted dental care with modern technology.",
  },
  {
    question: "Who is the best female dentist in Islamabad?",
    answer:
      "At Oradent Dental Clinic, we have 6 highly skilled female dentists, specializing in cosmetic dentistry, orthodontics, root canal treatments, dental implants, and pediatric dentistry.",
  },
  {
    question: "Where can I get dental implants in Islamabad?",
    answer:
      "Oradent Dental Clinic provides advanced dental implant treatments to replace missing teeth. Our implants look natural, feel secure, and restore full chewing function.",
  },
  {
    question: "Do you provide braces and orthodontic treatments in Islamabad?",
    answer:
      "Yes, we offer braces and aligners for kids, teens, and adults. From metal braces to clear aligners, we create smiles that are healthy and well-aligned.",
  },
  {
    question: "How often should I visit a dentist in Islamabad?",
    answer:
      "It’s best to visit your dentist every 6 months for a checkup and cleaning. Regular visits at Oradent Dental Clinic help prevent issues and keep your smile strong.",
  },
  {
    question: "How much does a dental implant cost in Islamabad?",
    answer:
      "Dental implant prices in Islamabad range between PKR 80,000 to 150,000. At Oradent Dental Clinic, we provide durable, natural-looking implants with flexible payment options.",
  },
  {
    question: "What is the cost of braces in Islamabad?",
    answer:
      "Braces usually cost between PKR 150,000 to 250,000 in Islamabad. At Oradent Dental Clinic, we offer metal braces, ceramic braces, and clear aligners.",
  },
  {
    question: "Does Oradent Dental Clinic have multiple branches in Islamabad?",
    answer:
      "Yes, we have two branches in I-8 Markaz and F-8 Markaz, making it easy for you to access expert dental care near your home or workplace.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f9fcff] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-jost font-bold text-[#045C94]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3 text-base md:text-lg">
            Answers to common questions about our dental care services in
            Islamabad.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-start gap-4 px-6 py-5 text-left"
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
