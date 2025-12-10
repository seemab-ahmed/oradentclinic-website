import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { excerptFromHtml } from '@/component/utils/blog';
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import blogs from "@/component/data/blogs";
import { useMemo, useState } from 'react';

const BlogCard = ({ blog }) => {
  const excerpt = blog.excerpt || excerptFromHtml(blog.content || '', 140);

  return (
    <div
      data-aos="fade-up"
      className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 sm:p-5 h-full flex flex-col"
    >
      <Link href={`/blog/${blog.slug}`} className="block">
        <div className="relative w-full h-40 mb-3 rounded overflow-hidden">
          {blog.image && (
            <Image src={blog.image} alt={blog.title} fill className="object-cover" />
          )}
        </div>

        <h3 className="text-base sm:text-lg font-semibold text-[#091e3e] hover:text-[#85c441] mb-2 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-sm text-gray-500 mb-3">{blog.author} • {blog.date}</p>
        <p className="text-sm sm:text-lg text-gray-600 line-clamp-3 flex-grow">{excerpt}</p>
      </Link>
    </div>
  );
};

const BlogSection = () => {
  const [activeTag, setActiveTag] = useState(null);

  const uniqueTags = useMemo(() => {
    const s = new Set();
    blogs.forEach(b => (b.tags || []).forEach(t => s.add(String(t).toLowerCase())));
    return Array.from(s);
  }, []);

  const filteredBlogs = useMemo(() => {
    if (!activeTag) return blogs;
    return blogs.filter(b => (b.tags || []).map(t => t.toLowerCase()).includes(activeTag));
  }, [activeTag]);

  return (
    <section className="pt-4 sm:py-12 bg-white w-full mt-0 lg:mt-16 px-4 lg:px-6">
      <div className="container w-full max-w-[1400px] lg:max-w-[1337px] mx-auto">
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

        {/* Tag filter bar */}
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-3 py-1 rounded ${!activeTag ? 'bg-[#85c441] text-white' : 'bg-gray-100'}`}
          >
            All
          </button>
          {uniqueTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1 rounded ${activeTag === tag ? 'bg-[#85c441] text-white' : 'bg-gray-100'}`}
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[A11y, Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1200}
          breakpoints={{
            300: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {filteredBlogs.map((blog) => (
            <SwiperSlide key={blog.slug}>
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogSection;
