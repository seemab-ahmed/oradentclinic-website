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
          w-[52px] h-[52px] sm:w-[66px] sm:h-[66px]`}
      >
        <div className="relative w-[50px] h-[50px] sm:w-[64px] sm:h-[64px]">
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
