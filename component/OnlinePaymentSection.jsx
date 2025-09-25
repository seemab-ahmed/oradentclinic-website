"use client";
import Image from "next/image";
import Link from "next/link";
const OnlinePaymentSection = () => {
  return (
    <div data-aos="fade-up" className="z-40 pt-5 w-full absolute top-[-40px] sm:top-[-160px] md:top-[-170px] lg:top-[-100px]">
      <div className=" max-w-[1400px] lg:max-w-[1310px] mx-auto px-0 md:px-4 bg-[#075791]">
        <div className="p-6 md:p-12 rounded-md">
            {/* Text Section */}
            <Link
            href="tel:+923249134745"
            className="lg:w-7/12 flex items-center gap-3">
              {/* Phone SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 flex-shrink-0"
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
        </div>
      </div>
    </div>
  );
};

export default OnlinePaymentSection;
