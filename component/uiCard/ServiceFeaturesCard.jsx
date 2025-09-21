'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3 },
  }),
}

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3 },
  }),
}

export default function ServiceFeaturesCard({
  leftItems = [],
  rightItems = [],
  imageSrc,
  imageAlt = 'Feature image',
}) {
  return (
    <section className="py-16 bg-white">
      <div className="container w-full max-w-[1400px] lg:max-w-[1337px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left Column */}
        <div className="space-y-6">
          {leftItems.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
              className="bg-gray-100 rounded-xl p-6 shadow"
            >
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={400}
            className="rounded-xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Right Column */}
        <div className="space-y-6">
          {rightItems.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              className="bg-gray-100 rounded-xl p-6 shadow"
            >
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
