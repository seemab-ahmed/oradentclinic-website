import About from '@/component/About'
import AboutI8Branch from '@/component/AboutI8Branch'
import AppointmentSection from '@/component/AppointmentSection'
import CallButton from '@/component/CallButton'
import Carousel from '@/component/Carousel'
import FAQSection from '@/component/FaqSection'
import WhatsappButton from '@/component/Whatsapp'
import SocialReviewsSection from '@/component/socialReviewsSection '
import React from 'react'

const page = () => {
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
    <Carousel />
      <AboutI8Branch/>
      <SocialReviewsSection/>
      <AppointmentSection/>
          <FAQSection
                    faqs={faqs}
                    title="Frequently Asked Questions"
                    subtitle="Quick answers to common queries"
                  />
      <WhatsappButton />
      <CallButton />
    </>
  )
}

export default page
