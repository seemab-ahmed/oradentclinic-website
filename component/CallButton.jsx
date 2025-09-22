"use client";
import Image from "next/image";
import { useState } from "react";

const CallButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="fixed left-6 bottom-5 sm:bottom-[40px] z-50">
      <a
        href="tel:+923249134745"
        onClick={handleClick}
        className={`bg-opacity-70 rounded-full flex items-center justify-center transition-colors 
          ${clicked ? "border-[#85c441]" : "border-[#b5db8a]"}
          border-2 
          w-[37px] h-[37px] sm:w-[58px] sm:h-[58px]`}
      >
        <div className="relative w-[35px] h-[35px] sm:w-[56px] sm:h-[56px]">
          <Image
            src="/images/callIconn.png"
            alt="Call"
            fill
            className="object-contain"
          />
        </div>
      </a>
    </div>
  );
};

export default CallButton;
