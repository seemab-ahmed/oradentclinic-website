import React from "react";
import DrHeader from "../molecule/DrHeader";
import c1 from "@/public/images/dentist/c1.jpg";
import c2 from "@/public/images/dentist/c2.jpg";
import c3 from "@/public/images/dentist/c3.jpg";
import c4 from "@/public/images/dentist/c4.jpg";
import DrCertificates from "../molecule/DrCertificates";
import DrBariaAbout from "../molecule/DrBariaAbout";
import WhyChoose from "../molecule/WhyChoose";
import CallButton from "@/component/CallButton";
import WhatsappButton from "@/component/Whatsapp";
import TestimonialCarousel from "@/component/TestimonialCarousel";
import ReviewBg from "@/public/images/carousel/slider-3.webp";

export function DrBaria() {
  const bariaCertificates = [
    { src: c1, alt: "Certificate 1" },
    { src: c2, alt: "Certificate 2" },
    { src: c3, alt: "Certificate 3" },
    { src: c4, alt: "Certificate 4" },
  ];
  const features = [
    {
      icon: "🦷",
      title: "Experienced & Skilled",
      description:
        "Over 6 years of clinical expertise in root canals, crowns, veneers, and teeth whitening.",
    },
    {
      icon: "💙",
      title: "Gentle & Caring",
      description:
        "Known for her stress-free and pain-free care, ensuring your comfort during every treatment.",
    },
    {
      icon: "📖",
      title: "Patient Education",
      description:
        "Explains every procedure in simple words so you understand and feel confident in your care.",
    },
    {
      icon: "⚡",
      title: "Modern Technology",
      description:
        "Provides treatments at Oradent Dental Clinic using the latest dental equipment & techniques.",
    },
  ];
  const drBariaTestimonials = [
    {
      name: "Anonymous Patient",
      text: "I got my root canal and crown done from Dr. Baria. She is highly professional and kind, the whole session was painless and comfortable. I will recommend everyone to visit Oradent and get your dental treatment from her.",
      image: "images/testimonials/usericon.webp",
    },
    {
      name: "Noor Nayab",
      text: "I visited Dr. Baria Zareef at Oradent for my smile makeover. I got my veneers done by her, the whole experience was smooth, and she explained everything step by step. I am highly satisfied with the results. She is 100% recommended.",
      image: "images/testimonials/usericon.webp",
    },
    {
      name: "Kaleemullah Malik",
      text: "I got my teeth whitening done by Dr. Baria. She is very competent, and I am very happy with the results. The clinic staff is very cooperative. I will recommend Oradent to everyone 100%.",
      image: "images/testimonials/usericon.webp",
    },
    {
      name: "Hamza Farooq",
      text: "Despite competing with top-tier clinics in Islamabad, Oradent manages to maintain reasonable prices. The staff is friendly, and the overall experience was great. Highly recommended for both quality and affordability!",
      image: "images/testimonials/usericon.webp",
    },
    {
      name: "Taha Edits",
      text: "I had my scaling and polishing done from Dr. Baria. I had an amazing experience. She explained everything well and made sure I was comfortable. I'm totally satisfied, and all my problems are resolved now. The charges are also very reasonable compared to other clinics in Islamabad. Highly recommended!",
      image: "images/testimonials/usericon.webp",
    },
  ];

  return (
    <>
      <div>
        <DrHeader title="Meet Dr. Baria Zareef – Specialist Endodontist in Islamabad" />
      </div>
      <DrBariaAbout />
      <div>
        <DrCertificates
          title="Certificates & Achievements"
          subtitle="Recognitions and Certifications Earned by Dr. Baria Zareef"
          certificates={bariaCertificates}
        />
      </div>
      <div>
        <TestimonialCarousel
          title="What Patients Say About Dr. Baria Zareef"
          background={ReviewBg.src}
          testimonials={drBariaTestimonials}
        />
        <WhyChoose
          title="Why Choose Dr. Baria"
          intro="Choosing the right dentist can make a big difference for your smile and comfort. Dr. Baria Zareef is known for her gentle and caring approach."
          features={features}
        />
      </div>
      <CallButton />
      <WhatsappButton />
    </>
  );
}
