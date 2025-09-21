// components/ServicesSection.jsx
import { motion } from "framer-motion";
import Link from "next/link";



const services = [
  {
    title: "General Dentistry",
    href: "/general-densitry",
    image: "https://oradentdentalclinic.com/frontend/assets/site_images/General-dentistry.webp",
    description:
      "Dentists specializing in general dentistry provide comprehensive care to patients of all ages, focusing on routine dental exams, cleanings, and treatments.",
  },
  {
    title: "Cosmetic Dentistry",
    href: "/cosmetic-dentistry",
    image: "https://oradentdentalclinic.com/frontend/assets/site_images/Cosmetic-Dentistry.webp",
    description:
      "Imperfections like chipped or malformed teeth can be corrected with veneers, bonding, and other cosmetic operations.",
  },
  {
    title: "Dental Implants",
    href: "/dental-implants",
    image: "https://oradentdentalclinic.com/frontend/assets/site_images/Dental-Implant.webp",
    description:
      "Dental implants are artificial tooth roots placed into the jawbone to support replacement teeth.",
  },
  {
    title: "Orthodontics",
    href: "/orthodontics",
    image: "https://oradentdentalclinic.com/frontend/assets/site_images/BRaces.webp",
    description:
      "Orthodontic treatments such as braces or aligners help straighten misaligned teeth for a better smile.",
  },
  {
    title: "Teeth Whitening",
    href: "/teeth-whitening",
    image: "https://oradentdentalclinic.com/frontend/img/service-4.webp",
    description:
      "Professional teeth whitening is a non-invasive method to improve your smile by removing years of stains.",
  },
  {
    title: "Denture",
    href: "/denture",
    image: "https://oradentdentalclinic.com/frontend/assets/site_images/Denture.webp",
    description:
      "Dentures are removable replacements for missing teeth and surrounding tissues.",
  },
  {
    title: "Root Canal",
    href: "/root-canal",
    image: "https://oradentdentalclinic.com/frontend/img/Root-Cenal.webp",
    description:
      "Root canal is a treatment used to repair and save a tooth that is badly decayed or infected.",
  },
  {
    title: "Teeth Filling",
    href: "/teeth-filling",
    image: "https://oradentdentalclinic.com/frontend/img/Teeth-Filling.webp",
    description:
      "Tooth fillings treat cavities by removing decayed material and filling the cleaned area with composite or other material.",
  },
];

const ServiceFBranch = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="text-primary uppercase text-sm font-semibold mb-2 tracking-widest">
            Our Services
          </h5>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            We Offer The Best Quality Dental Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href} className="block h-full">
                <div className="overflow-hidden h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFBranch;
