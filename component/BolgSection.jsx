import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const BlogCard = ({ href, title, description }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 sm:p-5 h-full flex flex-col justify-between"
    >
      <a href={href} className="block">
        <h3 className="text-base sm:text-lg font-semibold text-[#091e3e] hover:text-[#85c441] mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm sm:text-lg text-gray-600 line-clamp-3">{description}</p>
      </a>
    </div>
  );
};

const blogs = [
  {
    href: "https://oradentdentalclinic.com/blogs/tips-for-a-comfortable-teeth-filling-experience-expert-advice-from-dentists",
    title: "Essential Tips for Maintaining Dental Implants: Ex...",
    description:
      "Dental implants are an incredible solution for missing teeth, offering a permanent and reliable opti...",
  },
  {
    href: "https://oradentdentalclinic.com/blogs/another-blog",
    title: "The Role of Orthodontics in Overall Health: Beyond...",
    description:
      "Ever wondered if braces just straighten your teeth, but what about aesthetics? Orthodontic treatment...",
  },
  {
    href: "https://oradentdentalclinic.com/blogs/another-blog",
    title: "Surprising Truth About Professional Teeth Whitenin...",
    description:
      "Teeth whitening has gained immense popularity as one of the go-to cosmetic procedures. But is it wor...",
  },
  {
    href: "https://oradentdentalclinic.com/blogs/another-blog",
    title: "Artificial Intelligence in General Dentistry: Revo...",
    description:
      "Artificial Intelligence (AI) is no longer a futuristic concept. It is here, transforming industries,...",
  },
  {
    href: "https://oradentdentalclinic.com/blogs/another-blog",
    title: "Braces, Aligners, and Beyond: The Evolution of Ort...",
    description:
      "Orthodontics has progressed from traditional metal braces to modern, nearly invisible solutions. Inn...",
  },
  {
    href: "https://oradentdentalclinic.com/blogs/another-blog",
    title: "Next-Gen Dental Implants: Innovations, Costs, and...",
    description:
      "Dental implants have revolutionized oral healthcare, offering a permanent solution for missing teeth...",
  },
  {
    href: "https://oradentdentalclinic.com/blogs/another-blog",
    title: "Best Orthodontic Treatments for Kids: When and Why...",
    description:
      "Every parent wants their child to have a confident smile and healthy teeth. But did you know that ea...",
  },
];

const BlogSection = () => {
  return (
    <section className="pt-4 sm:py-12 bg-white w-full mt-0 lg:mt-16">
      <div className="container w-full max-w-[1400px] lg:max-w-[1337px] mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-5 sm:mb-10 gap-3 sm:gap-6">
          <div data-aos="fade-up" className="max-w-2xl text-center md:text-left">
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold font-jost text-[#075791] mb-2 sm:mb-4">
              Our Blogs
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-openSans">
              Find out more on how the best dental clinic in Islamabad, Oradent Dental
              Clinic, provides insights on dental procedures and care. Check our blogs
              for more valuable guidance.
            </p>
          </div>
          <a
            href="https://oradentdentalclinic.com/blogs"
            className="inline-block bg-[#075791] text-white px-7 sm:px-9 py-2.5 sm:py-3 font-jost hover:bg-[#85c441] transition-colors"
          >
            View All
          </a>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[A11y, Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1200}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          breakpoints={{
            300: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <BlogCard {...blog} />
            </SwiperSlide>
          ))}

          {/* navigation buttons removed per request */}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogSection;
