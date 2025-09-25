"use client";
import Image from "next/image";
import { useState } from "react";

const CallButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="fixed left-7 bottom-6 sm:bottom-[50px] z-50">
      <a
        href="tel:+923249134745"
        onClick={handleClick}
        className={`bg-opacity-70 rounded-full flex items-center justify-center transition-colors 
          ${clicked ? "border-[#85c441]" : "border-[#b5db8a]"}
          border-2 
          w-[42px] h-[42px] sm:w-[58px] sm:h-[58px]`}
      >
        <div className="relative w-[40px] h-[40px] sm:w-[56px] sm:h-[56px]">
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
