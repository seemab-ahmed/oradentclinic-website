"use client";
import React from "react";

// Reusable Card Component
function InfoCard({ icon, title, children, color = "#075791", href }) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group bg-white rounded-2xl shadow-md p-6 flex flex-col items-start gap-3 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
      style={{ textDecoration: "none" }}
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 flex items-center justify-center rounded-full shadow-sm"
          style={{ backgroundColor: `${color}15`, color }}
        >
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>

      {/* Content */}
      <div className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800">
        {children}
      </div>
    </Wrapper>
  );
}

export default function F8ContactInfo() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f9fafb] to-[#f1f5f9] pt-1 pb-16">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Location */}
        <InfoCard
          title="Location"
          href="https://www.google.com/maps/place/Office+No.+14,+Ground+Floor,+Hashim+Plaza,+near+Medcity+Hospital,+F-8+Markaz,+Islamabad,+44000"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M19.5 8.25c0 7.25-7.5 12.75-7.5 12.75S4.5 15.5 4.5 8.25a7.5 7.5 0 1115 0z" />
            </svg>
          }
        >
          <span className="block">
            Office No. 14, Ground Floor, Hashim Plaza,<br />
            near Medcity Hospital, F-8 Markaz,<br />
            Islamabad, 44000
          </span>
        </InfoCard>

        {/* Phone */}
        <InfoCard
          title="Phone"
          href="tel:03065393039"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M2 5.5C2 4.67 2.67 4 3.5 4h2.75c.39 0 .74.23.9.59l1.2 2.65a1 1 0 01-.25 1.12L7.3 10.7a16.02 16.02 0 006 6l2.34-1.09a1 1 0 011.12.25l2.65 1.2c.36.16.59.51.59.9V20.5c0 .83-.67 1.5-1.5 1.5C9.61 22 2 14.39 2 5.5z" />
            </svg>
          }
        >
          <span className="hover:underline">0306 5393039</span>
        </InfoCard>

        {/* WhatsApp */}
        <InfoCard
          title="WhatsApp"
          color="#25D366"
          href="https://wa.me/923065393039"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"
              fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.91 11.91 0 0012.07 0C5.64 0 .35 5.29.35 11.82c0 2.08.55 4.12 1.61 5.91L0 24l6.47-1.7a11.9 11.9 0 005.6 1.43h.01c6.43 0 11.72-5.29 11.72-11.82 0-3.15-1.23-6.11-3.28-8.16zM12.07 21.5a9.65 9.65 0 01-4.92-1.34l-.35-.21-3.83 1 .99-3.74-.24-.38a9.45 9.45 0 01-1.48-5.01c0-5.26 4.29-9.55 9.56-9.55a9.55 9.55 0 019.56 9.55c0 5.26-4.3 9.55-9.56 9.55zm5.55-7.15c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.91-2.21-.24-.57-.48-.49-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.31 1.27.5 1.7.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z" />
            </svg>
          }
        >
          <span className="hover:underline">0306 5393039</span>
        </InfoCard>

        {/* Email */}
        <InfoCard
          title="Email"
          href="mailto:oradentmaxillofacialandsurgery@gmail.com"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M16 12l-4-4m0 0l-4 4m4-4v12M20 12v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-9" />
            </svg>
          }
        >
          <span className="hover:underline">oradentmaxillofacialandsurgery@gmail.com</span>
        </InfoCard>
      </div>
    </section>
  );
}
