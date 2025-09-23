import React from "react";
import Link from "next/link";
import Image from "next/image"; 
import Logo from "@/public/images/oraLogo.webp";
import LocationIcon from "@/public/images/icons/locationIcon.png";
import RightArrow from "@/public/images/icons/rightArrow.png";
import FacebookIcom from "@/public/images/icons/facebook.png";
import InstagramIcon from "@/public/images/icons/instagram.png"
import MailIcon from "@/public/images/icons/mailIcon.png"
import PhoneIcon from "@/public/images/icons/phoneIcon.png"
import OnlinePaymentSection from "./OnlinePaymentSection";

const Footer = () => {
  return (
    <div data-aos="fade-up" className="w-full bg-[#091e3e] relative mt-[180px] md:mt-[150] lg:mt-[180px]">
      <div className="max-w-[1400px] mx-auto px-4 lg:max-w-[1337px] pt-22 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg text-white font-jost mb-4 font-semibold">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/" className="text-white">Home</Link></li>
              <li><Link href="/about" className="text-white">About Us</Link></li>
              <li><Link href="/services" className="text-white">Our Services</Link></li>
              <li><Link href="/contact" className="text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* I8 Branch */}
          <div>
            <h4 className="text-lg text-white font-jost mb-4 font-semibold">OraDent Dental Clinic Islamabad (I8)</h4>
            <div className="flex items-start gap-3">
              <Image src={LocationIcon} alt="location" width={18} height={18}/>
              <Link 
                href="https://share.google/aPUNO0fTSB4Y17rEV" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white text-sm"
              >
                Shop No. 7, Pakland Business Center, Behind Allied Bank, I-8 Markaz, Islamabad
              </Link>
            </div>
            <div className="flex items-start gap-3 mt-3">
              <Image src={PhoneIcon} alt="phone" width={18} height={18}/>
              <Link href="tel:+923249134745" className="text-white">+923249134745</Link>
            </div>
            <div className="flex items-start gap-3 mt-2">
              <Image src={MailIcon} alt="email" width={18} height={18}/>
              <Link href="mailto:info@oradentdentalclinic.com" className="text-white">info@oradentdentalclinic.com</Link>
            </div>
            <div className="mt-3 text-white text-sm">
              <strong>Working Hours:</strong>
              <div>Mon to Thu & Sat: 11:00 AM – 9:00 PM</div>
              <div>Fri & Sun: 3:00 PM – 9:00 PM</div>
            </div>
          </div>

          {/* F8 Branch */}
          <div>
            <h4 className="text-lg text-white font-jost mb-4 font-semibold">OraDent Dental Clinic Islamabad (F8)</h4>
            <div className="flex items-start gap-3">
              <Image src={LocationIcon} alt="location" width={18} height={18}/>
              <Link 
                href="https://share.google/XZYdHv3UhfVGZ6tBW" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white text-sm"
              >
                Office No. 14, Ground Floor, Hashim Plaza, Near MidCity Hospital, F-8 Markaz, Islamabad
              </Link>
            </div>
            <div className="flex items-start gap-3 mt-3">
              <Image src={PhoneIcon} alt="phone" width={18} height={18}/>
              <Link href="tel:+923065393039" className="text-white">+923065393039</Link>
            </div>
            <div className="flex items-start gap-3 mt-2">
              <Image src={MailIcon} alt="email" width={18} height={18}/>
              <Link href="mailto:oradentdentalclinicf8@gmail.com" className="text-white">oradentdentalclinicf8@gmail.com</Link>
            </div>
            <div className="mt-3 text-white text-sm">
              <strong>Working Hours:</strong>
              <div>Mon to Thu & Sat: 11:00 AM – 9:00 PM</div>
              <div>Fri & Sun: 3:00 PM – 9:00 PM</div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg text-white font-jost mb-4 font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="https://facebook.com" className="bg-[#044f96] rounded-lg p-2">
                <Image src={FacebookIcom} alt="facebook" width={28} height={28}/>
              </Link>
              <Link href="https://instagram.com" className="bg-[#044f96] rounded-lg p-2">
                <Image src={InstagramIcon} alt="instagram" width={28} height={28}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right py-5 px-4 bg-[#041022]">
        <span className="w-full block text-center text-[14px] font-openSans leading-6 text-white font-normal">
          © OraDent Dental Clinic. All Rights Reserved.
        </span>
      </div>
   
      <OnlinePaymentSection/>
    </div>
  );
};

export default Footer;
