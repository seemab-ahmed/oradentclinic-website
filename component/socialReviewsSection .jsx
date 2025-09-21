'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Facebook from "@/public/images/socialReview/facebookReview.png";
import Instagram from "@/public/images/socialReview/instagramReview.png";
import Google from "@/public/images/socialReview/googlereview.jpeg";
import ReviewBg from "@/public/images/socialReview/review-bg.png";

const reviews = [
  {
    title: 'Rate Us Google Reviews',
    img: Google,
    link: 'https://www.google.com/search?...', // shortened for clarity
    button: 'Google Reviews',
  },
  {
    title: 'Give Us Yours Feedback',
    img: Facebook,
    link: 'https://www.facebook.com/people/OraDent-Dental-Clinic/61550781995358/?sk=reviews',
    button: 'Facebook Reviews',
  },
  {
    title: 'Rate us on Instagram',
    img: Instagram,
    link: 'https://www.instagram.com/oradentdentalclinicf8?igsh=dG1qM3VweTM5eng5',
    button: 'Instagram Reviews',
  },
];

export default function socialReviewsSection() {
  return (
    <section
      className="relative py-12 md:py-36 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ReviewBg.src})` }}
    >
      {/* <div className="absolute inset-0 bg-gray-400 bg-opacity-0 z-0"></div> */}

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-300"
            >
              <h3 className="text-lg sm:text-xl font-jost
               text-[#091e3e] font-semibold mb-4">{review.title}</h3>
              <div className="flex justify-center mb-4">
                <Image src={review.img} alt={review.title} width={180} height={100} />
              </div>
              <a
                href={review.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-jost w-full bg-[#075791] hover:bg-[#85c441] text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
              >
                {review.button}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
