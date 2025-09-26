"use client";
import { useEffect, useState } from "react";

export default function Header({ title }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        bg-[#075791] text-white shadow-md
        py-10 px-4 text-center font-medium
        transform transition-transform duration-1000 ease-out
        ${animate ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">{title}</h1>
    </header>
  );
}
