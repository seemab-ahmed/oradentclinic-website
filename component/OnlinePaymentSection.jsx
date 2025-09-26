"use client";
import Link from "next/link";

const OnlinePaymentSection = () => {
  return (
    <div data-aos="fade-up" className="z-40 pt-12 sm:pt-5 w-full">
      <div className="max-w-[1400px] lg:max-w-[1310px] mx-auto p-8 sm:p-0 md:px-4 bg-[#075791] shadow-[0_12px_30px_-4px_rgba(0,0,0,0.6)]">

        <div className="flex flex-col sm:flex-row justify-between sm:pl-12 sm:pr-26 sm:py-4">
          {/* Phone CTA */}
          <Link
            href="tel:+923249134745"
            className="flex items-center gap-3 group"
          >
            {/* Phone SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 flex-shrink-0 transition-transform group-hover:scale-110"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#85c441"
              aria-hidden="true"
              role="img"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h2.2a1 1 0 01.97.757l.6 2.4a1 1 0 01-.24.94L6.2 10.2a16 16 0 007.6 7.6l3.1-2.3a1 1 0 01.94-.24l2.4.6A1 1 0 0121 16.8V19a2 2 0 01-2 2A19 19 0 013 5z"
              />
            </svg>

            <h4 className="text-white capitalize font-jost md:text-[calc(1.275rem+0.3vw)] text-[calc(1rem+0.1vw)] font-semibold">
              Call Our Dentist for a Consultation
            </h4>
          </Link>

          {/* Working Hours */}
          <div className="sm:bg-white bg-[#075791] p-4 text-white">
            <h5 className="uppercase font-semibold tracking-wide text-center text-base mb-2 text-[#85c441]">
              Working Hours
            </h5>
            <p className="text-sm md:text-base text-white text-center sm:text-black pb-2">
              <span className="font-medium">Mon - Sat:</span> 11:00 AM - 09:30 PM
            </p>
            <p className="text-sm md:text-base text-white sm:text-black text-center">
              <span className="font-medium pr-3.5">Sunday:</span> 04:00 PM - 09:30 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlinePaymentSection;
