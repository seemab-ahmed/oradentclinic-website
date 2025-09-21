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
    const footerLinks = [
        {
          title: "Quick Links",
          type: "nav",
          links: [
            { text: "Home", href: "/" },
            { text: "About Us", href: "/" },
            { text: "Our Services", href: "/" },
            { text: "Contact Us", href: "/" }
          ]
        },
        {
          title: "I-8 Markaz Branch",
          type: "branch",
          links: [
            { text: "Office No 7, Pakland Business Center Behind Allied Bank I-8 Markaz, Islamabad." },
            { text: "info@oradentdentalclinic.com", href: "mailto:info@oradentdentalclinic.com" },
            { text: "+923249134745", href: "tel:+923249134745" },
            { text: "+051 2707333", href: "tel:+0512707333" }
          ]
        },
        {
          title: "F-8 Markaz Branch",
          type: "branch",
          links: [
            { text: "Office No 14, Ground Floor Hashim Plaza Near Medcity Hospital F-8 Markaz, Islamabad.", href: "/" },
            { text: "oradentdentalclinicf8@gmail.com", href: "mailto:oradentdentalclinicf8@gmail.com" },
            { text: "+923065393039", href: "tel:+923065393039" },
            { text: "+051 2744915", href: "tel:+0512744915" }
          ]
        },
        {
          title: "Follow Us",
          type: "social",
          links: [
            { icon: FacebookIcom, href: "https://facebook.com" },
            { icon: InstagramIcon, href: "https://instagram.com" }
          ]
        }
      ];
      

  return (
    <div data-aos="fade-up" className="w-full bg-[#091e3e] relative mt-[180px] md:mt-[150] lg:mt-[180px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center w-full mx-auto  max-w-[1400px] px-4 lg:max-w-[1337px] gap-12 py-32">
      {footerLinks.map((column, colIndex) => (
  <div key={colIndex}>
    <h3 className="text-[1.3rem] md:text-[1.7rem] text-white font-jost leading-6 mb-[12px] font-bold pb-8">
      {column.title}
    </h3>

    {column.type === "social" ? (
      <div className="flex gap-4 text-white">
        {column.links.map((social, index) => (
          <Link href={social.href} key={index} className="bg-[#044f96] rounded-lg">
            <Image src={social.icon} alt="social icon" width={24} height={24} className="m-4 bg-[#044f96]"/>
          </Link>
        ))}
      </div>
    ) : (
      <ul className="flex items-start justify-start flex-col gap-[8px]">
        {column.links.map((link, index) => {
          let icon = RightArrow;
          if (link.text?.includes("@")) icon = MailIcon;
          else if (link.text?.startsWith("+")) icon = PhoneIcon;
          else if (!link.href) icon = LocationIcon;

          return (
            <li key={index} className="flex items-start gap-2">
              <Image src={icon} alt="icon" width={14} height={14} className="pt-1.5"/>
              {link.href ? (
                <Link
                  href={link.href}
                  className="text-sm md:text-[16px] font-openSans leading-6 text-white font-normal"
                >
                  {link.text}
                </Link>
              ) : (
                <span className="text-[16px] font-openSans leading-6 text-white font-normal">
                  {link.text}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    )}
  </div>
))}

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
