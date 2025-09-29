"use client";
import Head from 'next/head';
// import Carousel from '@/component/Carousel';
import About from '@/component/About';
import SmileSection from '@/component/SmileSection';
import WorkingHours from '@/component/WorkingHours';
import AppointmentSection from '@/component/AppointmentSection';
import SocialReviewsSection from '@/component/socialReviewsSection ';
import BlogSection from '@/component/BolgSection';
import DentistTeam from '@/component/DentistTeam';
import Testimonial from '@/component/Testimonial';
import DentalServices from '@/component/DentalServices';
import WhatsappButton from '@/component/Whatsapp';
import CallButton from '@/component/CallButton';
import AboutI8Branch from '@/component/AboutI8Branch';
// import FAQSection from '@/component/Faqs';
import WhyChooseOradent from '@/component/WhyChooseOradent';
import { MapHomeInfov } from '@/component/MapHomeInfo';
import Carousel from '@/component/Carousel';
import FAQSection from '@/component/FaqSection';

export default function Home() {
   const faqs = [
  {
    question: "How to pick the right dental clinic in Islamabad?",
    answer:
      "When choosing a dental clinic in Islamabad, look for experienced dentists, modern facilities, patient reviews, and convenient locations. At Oradent Dental Clinic, we combine all these factors, making us a trusted choice for families across the city.",
  },
  {
    question: "How much does it cost to clean teeth in Islamabad?",
    answer:
      "The cost of teeth cleaning (scaling and polishing) in Islamabad usually ranges between PKR 5,000 to 10,000. At Oradent Dental Clinic, we offer professional teeth cleaning at just PKR 4,000 on your first visit.",
  },
  {
    question: "Who is the best dentist in Islamabad?",
    answer:
      "At Oradent Dental Clinic, our team of 8+ experienced dentists is recognized among the best in Islamabad, offering trusted dental care with modern technology.",
  },
  {
    question: "Who is the best female dentist in Islamabad?",
    answer:
      "At Oradent Dental Clinic, we have 6 highly skilled female dentists, specializing in cosmetic dentistry, orthodontics, root canal treatments, dental implants, and pediatric dentistry.",
  },
  {
    question: "Where can I get dental implants in Islamabad?",
    answer:
      "Oradent Dental Clinic provides advanced dental implant treatments to replace missing teeth. Our implants look natural, feel secure, and restore full chewing function.",
  },
  {
    question: "Do you provide braces and orthodontic treatments in Islamabad?",
    answer:
      "Yes, we offer braces and aligners for kids, teens, and adults. From metal braces to clear aligners, we create smiles that are healthy and well-aligned.",
  },
  {
    question: "How often should I visit a dentist in Islamabad?",
    answer:
      "It’s best to visit your dentist every 6 months for a checkup and cleaning. Regular visits at Oradent Dental Clinic help prevent issues and keep your smile strong.",
  },
  {
    question: "How much does a dental implant cost in Islamabad?",
    answer:
      "Dental implant prices in Islamabad range between PKR 80,000 to 150,000. At Oradent Dental Clinic, we provide durable, natural-looking implants with flexible payment options.",
  },
  {
    question: "What is the cost of braces in Islamabad?",
    answer:
      "Braces usually cost between PKR 150,000 to 250,000 in Islamabad. At Oradent Dental Clinic, we offer metal braces, ceramic braces, and clear aligners.",
  },
  {
    question: "Does Oradent Dental Clinic have multiple branches in Islamabad?",
    answer:
      "Yes, we have two branches in I-8 Markaz and F-8 Markaz, making it easy for you to access expert dental care near your home or workplace.",
  },
];

  return (
    <>
      <Head>
        <title>Oradent dental</title>
        <meta name="description" content="Oradent Dental Clinic is one of the premier dental clinics in Islamabad, with 8+ experienced dentists and two modern dental offices, providing complete care for patients of all ages." />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/oraLogo.webp" />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Best Dentist in Islamabad - Oradent Dental Clinic Islamabad" />
        <meta property="og:description" content="Oradent Dental Clinic is one of the premier dental clinics in Islamabad, with 8+ experienced dentists and two modern dental offices, providing complete care for patients of all ages." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oradentdentalclinic.com/" />
        <meta property="og:image" content="https://oradentdentalclinic.com/images/oraLogo.webp" />

        {/*Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Dentist in Islamabad - Oradent Dental Clinic Islamabad" />
        <meta name="twitter:description" content="Oradent Dental Clinic is one of the premier dental clinics in Islamabad, with 8+ experienced dentists and two modern dental offices, providing complete care for patients of all ages." />
        <meta name="twitter:image" content="https://oradentdentalclinic.com/images/oraLogo.webp" />
      </Head>
      <Carousel />
      {/* <WorkingHours /> */}
      <AboutI8Branch />
      <WhyChooseOradent />
      {/* <SmileSection />
       <About /> */}
      <DentalServices />
      <Testimonial />
      <SocialReviewsSection />
      <DentistTeam />
      <WhatsappButton />
      <CallButton />
      <AppointmentSection />
      {/* <FAQSection /> */}
        <FAQSection
              faqs={faqs}
              title="Frequently Asked Questions"
              subtitle="Quick answers to common queries"
            />
      <MapHomeInfov/>
      <BlogSection />
    </>
  );
}
