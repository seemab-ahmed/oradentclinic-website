"use client";
import Image from "next/image";
// import CashImg from "@/public/images/payments/cash.png";
// import EasypasaImg from "@/public/images/payments/jazzcash.png";
// import JazzCashImg from "@/public/images/payments/Easypaisa.png";
// import MeezanBankImg from "@/public/images/payments/meezan-bank.png";

// const paymentImages = [
//   {
//     src: CashImg,
//     alt: "Cash Payment",
//   },
//   {
//     src: EasypasaImg,
//     alt: "Easypaisa Payment",
//   },
//   {
//     src: JazzCashImg,
//     alt: "JazzCash Payment",
//   },
//   {
//     src: MeezanBankImg,
//     alt: "Meezan Bank Payment",
//   },
// ];


const OnlinePaymentSection = () => {
  return (
    <div data-aos="fade-up" className="z-40 bg-white pt-5 w-full absolute top-[-80px] sm:top-[-160px] md:top-[-170px] lg:top-[-90px]">
      <div className=" max-w-[1400px] lg:max-w-[1310px] mx-auto px-0 md:px-4 bg-[#075791]">
        <div className="p-8 md:p-12 rounded-md">
            {/* Text Section */}
            <div className="lg:w-7/12 flex items-center gap-3">
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
            </div>

            {/* Payment Image Section */}
            {/* <div className="lg:w-5/12 flex flex-wrap justify-center lg:justify-end gap-3">
              {paymentImages.map((img, index) => (
                <div
                  key={index}
                  className="bg-white p-2 rounded-md flex items-center justify-center w-16 h-16 md:h-16 md:w-24 shadow"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default OnlinePaymentSection;
