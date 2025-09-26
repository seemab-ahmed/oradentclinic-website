'use client';
import React from 'react';
import MapContact from './uiCard/MapContact';
export const F8Map=()=> {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 container max-w-[1400px] mx-auto px-4">
        {/* Location 2 */}
        <MapContact
          title="Visit Our F-8 Branch"
          address="Office No 14, Ground Floor, Hashim Palaza, Near MidCity Hospital, F-8 Markaz Islamabad"
          email="oradentdentalclinicf8@gmail.com"
          phone1="+923065393039"
          phone2="+0512744915"
        />
        <div className="w-full">
          <iframe
            className="w-full h-[492px] rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.913974576776!2d73.03809397619405!3d33.71117483566198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf00563a08cb%3A0x6ef3103aaafeb171!2sOraDent%20Dental%20Clinic%20F-8%20Markaz%20Islamabad!5e0!3m2!1sen!2s!4v1742856045696!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
