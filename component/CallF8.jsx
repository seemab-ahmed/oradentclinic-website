'use client';
import Image from "next/image";
import { useState } from "react";

const CallF8 = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    // Optional: add timeout to reset
    // setTimeout(() => setClicked(false), 2000);
  };

  return (
    <div className="fixed left-12 bottom-[115px] z-50">
      <a
        href="tel:+923065393039"
        onClick={handleClick}
        className={`bg-opacity-70 rounded-full flex items-center justify-center w-[66px] h-[66px] border-3 transition-colors ${
          clicked ? 'border-[#85c441]' : 'border-[#b5db8a]'
        }`}
      >
        <Image
          src="/images/callIconn.png"
          alt="Call"
          width={70}
          height={70}
          className="z-100"
        />
      </a>
    </div>
  );
};

export default CallF8;
