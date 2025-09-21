"use client";
import Image from "next/image";
import CashImg from "@/public/images/payments/cash.png";
import EasypasaImg from "@/public/images/payments/jazzcash.png";
import JazzCashImg from "@/public/images/payments/Easypaisa.png";
import MeezanBankImg from "@/public/images/payments/meezan-bank.png";

const paymentImages = [
  {
    src: CashImg,
    alt: "Cash Payment",
  },
  {
    src: EasypasaImg,
    alt: "Easypaisa Payment",
  },
  {
    src: JazzCashImg,
    alt: "JazzCash Payment",
  },
  {
    src: MeezanBankImg,
    alt: "Meezan Bank Payment",
  },
];


const OnlinePaymentSection = () => {
  return (
    <div data-aos="fade-up" className="z-40 pt-5 w-full absolute top-[-220px] sm:top-[-160px] md:top-[-170px] lg:top-[-130px]">
      <div className=" max-w-[1400px] lg:max-w-[1310px] mx-auto px-4 bg-[#075791]">
        <div className="p-12 rounded-md">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Text Section */}
            <div className="lg:w-7/12">
              <h4 className="text-white capitalize font-jost md:text-[calc(1.275rem+0.3vw)] text-[calc(1rem+0.1vw)]  font-semibold">
                We are now accepting online payment
              </h4>
            </div>

            {/* Payment Image Section */}
            <div className="lg:w-5/12 flex flex-wrap justify-center lg:justify-end gap-3">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlinePaymentSection;
