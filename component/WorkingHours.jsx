'use client';

import React from 'react';
import Link from 'next/link';

const WorkingHours = () => {
  return (
    <section className='w-full'>
    <div data-aos="zoom-in"
     className="flex flex-col justify-center text-center bg-[#075791] px-8 text-white w-full max-w-[350px] mx-auto mt-12" style={{ height: '250px' }}>
      <h3 className="mb-4 text-white text-2xl font-semibold font-jost">Working Hours</h3>

      <div className="flex justify-between mb-2.5">
        <h6 className="text-base mb-0 text-white font-jost">Mon - Fri</h6>
        <p className="text-base mb-0 font-jost">11:00am - 09:30pm</p>
      </div>

      <div className="flex justify-between mb-2.5">
        <h6 className="text-base mb-0 text-white font-jost">Saturday</h6>
        <p className="text-base mb-0 font-jost">11:00am - 09:30pm</p>
      </div>

      <div className="flex justify-between mb-4text-base ">
        <h6 className="text-base mb-0 text-white font-jost">Sunday</h6>
        <p className="text-base mb-0 font-jost">02:00pm - 08:00pm</p>
      </div>

      <Link
        href="tel:+923249134745"
        className="bg-white text-[#075791] font-jost mx-auto text-base py-1.5 mt-4 px-4 w-fit"
      >
        Call Now For Consultation
      </Link>
    </div>
    </section>
  );
};

export default WorkingHours;
