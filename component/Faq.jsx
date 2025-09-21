'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'What is lorem?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nulla quam ab animi, facilis sunt id quo nostrum accusamus iste vero quos, ex minus eaque perspiciatis exercitationem at, ducimus commodi!',
  },
  {
    question: 'How does the lorem work?',
    answer:
      'Orbit is a collaborative network that connects members of the Global Shapers community with global institutions. It serves as a space to showcase Shapers\' talents, align them with projects based on their expertise, and foster impactful partnerships worldwide.',
  },
  {
    question: 'What are the “inclusive verticals”?',
    answer:
      'Inclusive verticals are areas of focus designed to ensure that projects consider equity, diversity, and access. They aim to create impact across different communities and demographics in a globally inclusive manner.',
  },
]

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <section className="text-center mb-8">
        <h6 className="text-base font-jost font-semibold uppercase text-[#091e3e] mb-2">FAQs</h6>
        <h3 className="text-[1rem] md:text-[2rem] font-jost text-[#091e3e]  font-semibold bg-gradient-to-r from-blue-500 to-purple-500  bg-clip-text">
          Quick Answers to Common Questions
        </h3>
      </section>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left px-6 py-4 bg-white flex justify-between items-center focus:outline-none"
            >
              <span className="font-medium">{faq.question}</span>
              <span className="text-xl transform transition-transform duration-300">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-4 bg-gray-50 text-gray-700 text-sm"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
