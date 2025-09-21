'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Slider1 from "@/public/images/f8Images/f8slider.webp";
import Slider2 from "@/public/images/f8Images/f8slider2.webp";
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  Slider1,
  Slider2,
  'https://oradentdentalclinic.com/frontend/assets/site_images/f8/DSC09651%20(1).webp',
  'https://oradentdentalclinic.com/frontend/assets/site_images/f8/DSC09658.webp',
];

export default function MapFBranch() {
  return (
    <section className="py-12 mt-0 md:mt:8 lg:mt-14">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Carousel */}
        <div>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="w-full h-72"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={typeof img === 'string' ? img : img.src}
                  alt={`Clinic photo ${idx + 1}`}
                  className="w-full h-72 object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Map and hours */}
        <div className="bg-[#075791] text-white rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-full p-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53102.632643486584!2d72.98004450668817!3d33.711160199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf00563a08cb%3A0x6ef3103aaafeb171!2sOraDent%20Dental%20Clinic%20F-8%20Markaz!5e0!3m2!1sen!2s!4v1737185219526!5m2!1sen!2s"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
                <div className="flex justify-between mb-2">
                  <span>Mon - Fri</span>
                  <span>11:00am - 9:30pm</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Saturday</span>
                  <span>11:00am - 09:30pm</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Sunday</span>
                  <span>02:00pm - 8:00pm</span>
                </div>
              </div>
              <a
                href="tel:+923065393039"
                className="bg-white text-blue-700 text-center py-2 rounded text-lg font-medium"
              >
                Call Now For Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
