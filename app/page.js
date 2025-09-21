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

export default function Home() {
  return (
    <>
      <Head>
        <title>Oradent dental</title>
        <meta name="description" content="Discover insights, guides and best practices to enhance your skills and secure your future with Skills2Evolve." />
        <meta name="keywords" content="skills development, professional growth, learning, career evolution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Skills2Evolve - Learn, Evolve and Secure Your Future" />
        <meta property="og:description" content="Discover insights, guides and best practices to enhance your skills and secure your future." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skills2evolve.com" />
        <meta property="og:image" content="https://skills2evolve.com/og-image.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skills2Evolve - Learn, Evolve and Secure Your Future" />
        <meta name="twitter:description" content="Discover insights, guides and best practices to enhance your skills and secure your future." />
        <meta name="twitter:image" content="https://skills2evolve.com/twitter-image.jpg" />
      </Head>
      {/* <Carousel /> */}
      <WorkingHours />
      <AppointmentSection />
      <SmileSection />
      <About />
      <DentalServices />
      <Testimonial />
      <SocialReviewsSection />
      <DentistTeam />
      <WhatsappButton/>
      <CallButton/>
      <BlogSection />
    </>
  );
}
