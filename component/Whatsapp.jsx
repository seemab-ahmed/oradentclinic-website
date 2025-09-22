"use client";

import Image from "next/image";
import Link from "next/link";

const WhatsappButton = () => {
  return (
    <div className="fixed right-6 bottom-5 sm:bottom-[40px] z-50">
      <Link
        href="https://wa.me/923249134745?text=*I8%20Branch*%0AHello%2C%20I%20am%20interested%20in%20booking%20a%20dental%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative w-[37px] h-[37px] sm:w-[66px] sm:h-[66px]">
          <Image
            src="/images/whatsapppp.png"
            alt="WhatsApp"
            fill
            className="object-contain"
          />
        </div>
      </Link>
    </div>
  );
};

export default WhatsappButton;
