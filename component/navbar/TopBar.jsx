import Image from 'next/image';
import MailIcon from "@/public/images/icons/mailIcon.png";
import PhoneIcon from "@/public/images/icons/phoneIcon.png";
import ClockIcon from "@/public/images/icons/clockIcon.png";

export default function TopBar() {
    return (
        <div className="flex items-center justify-between bg-[#045C94] lg:bg-[#def4ff]">
            <div className=" hidden lg:flex items-center space-x-1 pl-1 sm:pl-12">
              <Image
                src={ClockIcon} 
                alt="Mail Icon"
                width={16}
                height={16}
              />
              <span className="text-sm">
                Opening Hours: Mon - Sun : 11.00 am - 09.30 pm
              </span>
            </div>
            <div className='flex'>
          {/* Green angled SVG */}
          <svg
            width="100"
            height="100"
            viewBox="50 90 30 60"
            preserveAspectRatio="none"
            className="h-[40px] hidden lg:block"
          >
            <polygon points="80,88 16,0 90,200" fill="#85c441" />
          </svg>
         
    
          <div className="flex flex-wrap gap-2 justify-center items-center bg-[#045C94] text-white pl-1 sm:pl-4 pr-1 sm:pr-12 py-2 space-x-8">
            <div className="flex items-center space-x-2">
              <Image
                src={MailIcon} 
                alt="Mail Icon"
                width={16}
                height={16}
              />
              <span className="text-sm">
                oradentmaxillofacialandsurgery@gmail.com
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                src={PhoneIcon}
                alt="Phone Icon"
                width={16}
                height={16}
              />
              <span className="text-sm">+923249134745</span>
            </div>
          </div>
          </div>
        </div>
      );
    }



