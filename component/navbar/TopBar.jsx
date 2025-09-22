import Image from "next/image";
import Link from "next/link";
import MailIcon from "@/public/images/icons/mailIcon.png";
import PhoneIcon from "@/public/images/icons/phoneIcon.png";
import ClockIcon from "@/public/images/icons/clockIcon.png";

export default function TopBar() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-[#045C94] lg:bg-[#def4ff]">
      {/* Left Section */}
      <div className="flex items-center space-x-1 pl-1 sm:pl-12">
        <Link
          href="https://share.google/aPUNO0fTSB4Y17rEV"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-xs sm:text-sm text-white xl:text-black cursor-pointer hover:underline">
            Shop No. 7, Pakland Business Center, I-8 Markaz Islamabad
          </span>
        </Link>
      </div>
      <div className="flex">
        <svg
          width="100"
          height="100"
          viewBox="50 90 30 60"
          preserveAspectRatio="none"
          className="h-[40px] hidden lg:block"
        >
          <polygon points="80,88 16,0 90,200" fill="#85c441" />
        </svg>

        <div className="flex flex-wrap gap-2 justify-center items-center bg-[#045C94] text-white pl-1 sm:pl-4 pr-1 sm:pr-12 pb-2 xl:py-2 space-x-8">
          {/* Address */}
          <div className="flex items-center space-x-2">
            <Link
              href="https://share.google/XZYdHv3UhfVGZ6tBW"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-xs sm:text-sm cursor-pointer hover:underline">
                Office No.14, Ground Floor, Hashim Plaza, F-8 Markaz, Islamabad
              </span>
            </Link>
          </div>

          {/* Phone */}
          {/* <div className="flex items-center space-x-2">
            <Image
              src={PhoneIcon}
              alt="Phone Icon"
              width={16}
              height={16}
            />
            <span className="text-sm">+923249134745</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
