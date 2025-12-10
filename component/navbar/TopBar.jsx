import Image from "next/image";
import Link from "next/link";
import MailIcon from "@/public/images/icons/mailIcon.png";
import PhoneIcon from "@/public/images/icons/phoneIcon.png";
import ClockIcon from "@/public/images/icons/clockIcon.png";

export default function TopBar() {
  return (
    <div
      className="
        flex flex-col sm:flex-row items-center justify-between
        bg-gradient-to-b from-[#85c441] to-[#045C94]   /* Gradient by default (<1024px) */
        lg:bg-[#045C94] lg:bg-none                     /* Solid color ≥1024px */
      "
    >
      {/* Left Section */}
      <div className="flex items-center space-x-1 pl-1 sm:pl-12 py-2 lg:py-0">
        <Link
          href="https://share.google/aPUNO0fTSB4Y17rEV"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex items-center text-xs sm:text-sm text-white xl:text-white cursor-pointer hover:underline">
            {/* Location Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 sm:w-4 h-3 sm:h-4 sm:mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21c4.418-6.418 6.627-9.627 6.627-12.418a6.627 6.627 0 1 0-13.254 0C5.373 11.373 7.582 14.582 12 21z"
              />
              <circle cx="12" cy="9" r="2.5" fill="currentColor" />
            </svg>
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

        <div className="flex flex-wrap gap-2 justify-center items-center text-white pl-1 sm:pl-4 pr-1 sm:pr-12 pb-2 xl:py-2 space-x-8">
          {/* Address */}
          <div className="flex items-center space-x-2">
            <Link
              href="https://share.google/XZYdHv3UhfVGZ6tBW"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center text-xs sm:text-sm cursor-pointer hover:underline">
                {/* Location Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 sm:w-4 h-3 sm:h-4 sm:mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21c4.418-6.418 6.627-9.627 6.627-12.418a6.627 6.627 0 1 0-13.254 0C5.373 11.373 7.582 14.582 12 21z"
                  />
                  <circle cx="12" cy="9" r="2.5" fill="currentColor" />
                </svg>
                Office No.14, Ground Floor, Hashim Plaza, F-8 Markaz, Islamabad
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
