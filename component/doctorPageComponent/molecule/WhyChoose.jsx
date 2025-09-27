"use client";

export default function WhyChoose({ title, intro, features }) {
  return (
    <section className="py-16 px-6 bg-gray-50 text-center font-sans">
      <div className="max-w-[1200px] mx-auto">
        {/* Title */}
        <h2 data-aos="fade-down" className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-bold font-jost leading-snug text-[#091e3e] aos-init aos-animate">
          {title}
        </h2>

        {/* Intro */}
        {intro && (
          <p data-aos="fade-down" className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
            {intro}
          </p>
        )}

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
            data-aos="zoom-in"
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#091e3e] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
