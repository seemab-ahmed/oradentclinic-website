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
    name: "Niamat Ullah Khan",
    text: `I am getting my root canal treatment from Dr kaynaat.i am very satisfied with the treatment.the clinic is very well maintained and hygiene.i would highly recommend to visit oradent dental clinic.
"Recommend 10/10`,
    image: NiamatImg.src, // Extract the path for img tag
  },
  {
    name: "Aisam Ul Haq",
    text: `I had an amazing experience at oradent dental clinic From the moment I walked in, the staff are welcoimg and made me feel comfortable.The receptionist were friendly and efficient, and i didn't have to wait long for my appointment. `,
    image: "https://oradentdentalclinic.com/frontend/img/user.webp",
  },
  {
    name: "valeed kamal",
    text: `Had a root canal, scaling, filling done at Oradent Clinic by Dr. Kainaat, and it was smooth sailing! Dr. Kainaat’s expertise and care made the entire process virtually pain-free. Friendly staff, clean environment—couldn’t ask for a better dental experience. Highly recommend! 🌟🌟🌟🌟🌟`,
    image: "https://oradentdentalclinic.com/frontend/img/user.webp",
  },
  {
    name: "MINAHIL FATIMA",
    text: `I recently had my dental scaling and polishing done at Oradent by Dr. Baria Zareef, and it was a fantastic experience! The procedure was smooth and painless, making it surprisingly comfortable. Dr. Baria’s excellent communication put me at ease, and her attention to detail was impressive. Highly recommend Oradent for anyone looking for quality dental care!`,
    image: "https://oradentdentalclinic.com/frontend/img/user.webp",
  },
  {
    name: "Muhammad Sajid",
    text: `My Experience was very good and staff was very polite and doctor Iqra Khan was very humble towards me .. I have done my teeth scaling and polishing .. in that procedure there was no pain but a little itching and little pain but that pain was bare able.. best experience and feeling confident .. thank you Oradent clinic and Dr. Iqra Khan`,
    image: "https://oradentdentalclinic.com/frontend/img/user.webp",
  },
  {
    name: "jonilyna ombayan",
    text: `I was so nervous about going to the dentist, but this clinic made it a pleasant experience. The staff is wonderful, and the dentist is incredibly skilled. Thanks to Dr. Kaynaat Zamir 💕 You helped me with a long-standing dental issue, and I am so grateful for expertise and care. Highly recommended dentist 🦷 ⭐⭐⭐⭐⭐ Salamat 💘`,
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
    <div className="relative z-10 max-w-2xl mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={30}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="text-center bg-[#2d6e9b] px-6 py-16 opacity-70" data-aos="zoom-in-left">
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
                width={96}
                height={96}
              />
              <p className="text-lg text-center font-sans mb-4">"{item.text}"</p>
              <hr className="w-1/4 mx-auto border-white my-4" />
              <h4 className="text-xl font-semibold">{item.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
  
  );
};

export default Testimonial;
