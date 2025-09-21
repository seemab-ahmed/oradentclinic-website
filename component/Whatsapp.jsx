"use client";

import Image from "next/image";

const WhatsappButton = () => {
  return (
    <div className="fixed right-12 bottom-[115px] z-50">
      <a
         href="https://wa.me/923249134745?text=*I8%20Branch*%0AHello%2C%20I%20am%20interested%20in%20booking%20a%20dental%20appointment."
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/whatsapppp.png"
          alt="WhatsApp"
          width={80}
          height={80}
        />
      </a>
    </div>
  );
};

export default WhatsappButton;
