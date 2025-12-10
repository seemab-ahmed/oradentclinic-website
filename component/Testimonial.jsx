// TestimonialCarousel.jsx
'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import NiamatImg from "@/public/images/testimonials/niamat.jpeg";
import ReviewBg from "@/public/images/carousel/slider-3.webp";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Adna Malik",
    text: `Getting braces from Dr. Maryam Hafeez, fully satisfied. Excellent way of explaining and working, highly recommend.`,
    image: "https://oradentdentalclinic.com/frontend/img/user.webp",
  },
  {
    name: "Ehsaan",
    text: `Dr. Maryum is not only very skilled but also highly professional in her work. I felt completely comfortable during my treatment, and everything was explained in a clear and caring way. The clinic is clean, well-managed, and the staff is friendly. I had a wonderful experience here and would strongly recommend Dr. Maryum’s clinic to anyone looking for quality dental care.`,
    image: "https://oradentdentalclinic.com/frontend/img/user.webp",
  },
  {
    name: "Syed Waliullah Shah",
    text: `Oradent Dental Clinic has one of the best teams for dental treatments, with very humble and welcoming staff. The clinic is neat, clean, and gives great importance to hygiene and sterilization. Each treatment is handled by specialists with professional care. I am fully satisfied with the services and highly recommend this clinic in Islamabad.`,
    image: "https://oradentdentalclinic.com/frontend/img/user.webp",
  },
  {
    name: "Mehwash Alam",
    text: `I recently had my scaling and polishing done at Oradent F8 Islamabad. The doctor there, Dr. Zainab, was very professional and attentive. I had my teeth cleaned in a very relaxed and unhurried manner. The equipment and clinic looked very hygienic. I will definitely rate it ⭐⭐⭐⭐⭐ and will visit them again for my next scaling session.`,
    image: "https://oradentdentalclinic.com/frontend/img/user.webp",
  },
  {
    name: "S. Batool (Batool)",
    text: `I had a wonderful experience at Oradent Dental Clinic F-8 Markaz, Islamabad. At first, I was a bit anxious, but Dr. Mukammil Shah made the whole process so smooth. He is not only a skilled dentist but also very kind and patient. He explained everything about the crown procedure clearly, and to my surprise, the treatment was completely pain-free.`,
    image: "https://oradentdentalclinic.com/frontend/img/user.webp",
  },
  {
    name: "Foqia Shah",
    text: `Oradent clinic is great, I got my teeth cleaned from Dr. Zainab and she was amazing. The clinic is very clean, and I will be visiting again.`,
    image: "https://oradentdentalclinic.com/frontend/img/user.webp",
  },
  {
    name: "Wasif Saad",
    text: `If you're looking for a dentist who is professional, knowledgeable, and truly cares about patient comfort and safety, I highly recommend Dr. Sohaib Mansoor. Definitely one of the best experiences I’ve had at an Oradent Dental Clinic.`,
    image: "https://oradentdentalclinic.com/frontend/img/user.webp",
  },
  {
    name: "Hira Shafi",
    text: `I visited OraDent Dental clinic for root canal treatment. Dr. Kaynaat performed the procedure. She took the time to explain every step of the process, ensuring I felt comfortable throughout. I highly recommend Dr. Kaynaat Zamir.`,
    image: "https://oradentdentalclinic.com/frontend/img/user.webp",
  },
  {
    name: "Haddi",
    text: `I had a great experience at OraDent Dental Clinic for my wisdom tooth extraction. The staff was friendly and professional, and the procedure was quick and nearly painless. Dr. Shoaib Mansoor made me feel at ease and explained everything clearly. The aftercare was excellent, and my recovery was smooth.`,
    image: "https://oradentdentalclinic.com/frontend/img/user.webp",
  },
];


const Testimonial = () => {
  return (
    <div className="relative py-10 px-4 text-white">
    <div
    data-aos="zoom-in"
      className="absolute inset-0 z-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${ReviewBg.src})` }}
    ></div>
    <div className="absolute inset-0 z-0 bg-[#051e42] opacity-80"/>
  
    {/* Content layer */}
    <div className="relative z-10 max-w-3xl mx-auto">
      <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] leading-snug py-0 sm:py-8 font-bold font-jost text-white text-center mb-6">What Our Patients Are Saying About Us</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={30}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="text-center bg-[#2d6e9b] px-3 sm:px-6 py-5 sm:py-16 opacity-70" data-aos="zoom-in-left">
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
                width={96}
                height={96}
              />
              <p className="text-sm sm:text-base text-center font-sans mb-4">"{item.text}"</p>
              <hr className="w-1/4 mx-auto border-white my-4" />
              <h4 className="text-base sm:text-lg font-semibold">{item.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
  
  );
};

export default Testimonial;
