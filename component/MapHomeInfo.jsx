'use client';

import Image from 'next/image';
import Location from "@/public/images/icons/locationBlue.png";
import Phone from "@/public/images/icons/mobileBlue.png";
import Mail from "@/public/images/icons/mailBlue.png";
import Clock from "@/public/images/icons/clockIcon.png";

export const MapHomeInfov = () => {
  const branches = [
    {
      branch: "Islamabad (I-8)",
      address: "Shop No. 7 Pakland Business Center, Behind Allied Bank, I-8 Markaz, Islamabad",
      phone: ["+923249134745"],
      email: "oradentmaxillofacialandsurgery@gmail.com",
      hours: "Mon - Thu & Sat: 11:00 AM – 09:30 PM | Fri & Sun: 04:00 PM – 09:30 PM",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2765.833243097276!2d73.07212202580108!3d33.66672995314876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9547a2b41451%3A0x9388768c64116718!2sOraDent%20Dental%20Clinic%20I-8%20Markaz%20Islamabad!5e0!3m2!1sen!2s!4v1742855989784!5m2!1sen!2s",
    },
    {
      branch: "Islamabad (F-8)",
      address: "Office No. 14, Ground Floor, Hashim Palaza, Near MidCity Hospital, F-8 Markaz, Islamabad",
      phone: ["+923065393039"],
      email: "oradentdentalclinicf8@gmail.com",
      hours: "Mon–Thu & Sat: 11:00 AM – 09:30 PM | Fri & Sun: 04:00 PM – 09:30 PM",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.913974576776!2d73.03809397619405!3d33.71117483566198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf00563a08cb%3A0x6ef3103aaafeb171!2sOraDent%20Dental%20Clinic%20F-8%20Markaz%20Islamabad!5e0!3m2!1sen!2s!4v1742856045696!5m2!1sen!2s",
    },
  ];

  return (
    <div className="w-full py-10 sm:bg-[#f9fcff]">
      <div className="sm:container max-w-[1400px] mx-auto px-0 sm:px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {branches.map((b, idx) => (
          <div key={idx} className="bg-[#eef9ff] sm:rounded-lg p-6 shadow flex flex-col gap-6">
            {/* Branch Info */}
            <div>
              <h5 className="text-[#075791] uppercase font-semibold mb-2">Contact Us</h5>
              <h2 className="text-2xl font-bold text-[#091e3e] mb-4">{b.branch}</h2>

              {/* Address */}
              <div className="flex items-start gap-3 mb-3">
                <Image src={Location} alt="Location Icon" width={22} height={22} />
                <p className="text-[#6B6A75] text-sm">{b.address}</p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 mb-3">
                <Image src={Mail} alt="Email Icon" width={22} height={22} />
                <p className="text-sm">{b.email}</p>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-3 mb-3">
                <Image src={Phone} alt="Phone Icon" width={22} height={22} />
                <div>
                  {b.phone.map((ph, i) => (
                    <a
                      key={i}
                      href={`tel:${ph}`}
                      className="block text-sm text-gray-700 hover:text-[#075791]"
                    >
                      {ph}
                    </a>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3">
                <Image src={Clock} alt="Clock Icon" width={22} height={22} />
                <p className="text-sm text-gray-700">{b.hours}</p>
              </div>
            </div>

            {/* Map */}
            <iframe
              className="w-full h-[300px] rounded"
              src={b.map}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        ))}

      </div>
    </div>
  );
}
