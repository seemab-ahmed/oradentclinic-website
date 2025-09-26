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
import FAQSection from '@/component/Faqs';
import WhyChooseOradent from '@/component/WhyChooseOradent';
import { MapHomeInfov } from '@/component/MapHomeInfo';

export default function Home() {
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

        {/* Twitter Meta Tags */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skills2Evolve - Learn, Evolve and Secure Your Future" />
        <meta name="twitter:description" content="Discover insights, guides and best practices to enhance your skills and secure your future." />
        <meta name="twitter:image" content="https://skills2evolve.com/twitter-image.jpg" /> */}
      </Head>
      {/* <Carousel /> */}
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
      <FAQSection />
      <MapHomeInfov/>
      <BlogSection />
    </>
  );
}
