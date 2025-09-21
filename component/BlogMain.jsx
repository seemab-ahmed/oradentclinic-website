'use client';

import Image from 'next/image';
import Link from 'next/link';
import BlogMainImg from "@/public/images/blogs/blogMain.jpg"

export default function BlogMain() {
  return (
    <section className="py-10 md:pb-14 lg:pb-22">
      <div className="">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Blog Card */}
          <div className="w-full lg:w-2/3">
            <Link href="https://oradentdentalclinic.com/blogs/what-materials-are-dentures-made-of-an-in-depth-guide">
              <div className="relative h-[515px] rounded-lg overflow-hidden bg-black text-white">
                <Image
                  src={BlogMainImg}
                  alt="What Materials Are Dentures Made Of?"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-sm p-5">
                  <h5 className="text-[1rem] text-white md:text-[1.25rem] font-jost font-semibold">
                    What Materials Are Dentures Made Of? An In-Depth Guide
                  </h5>
                  <p className="text-white text-sm md:text-[1rem] mt-2">Sep 21, 2024</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-[#075791] mb-5">Top Categories</h4>
              <div className="space-y-4">
                {[
                  ['General Dentistry', 3],
                  ['Guides to become Dentist', 0],
                  ['Cosmetic Dentistry', 2],
                  ['Teeth Whitening', 3],
                  ['Dentures', 5],
                  ['Dental Implant', 3],
                  ['Orthodontics', 3],
                  ['Teeth Filling', 1],
                ].map(([name, count]) => (
                  <a
                    key={name}
                    href="#"
                    className="flex justify-between text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    <span className='text-[#19aadd]'>{name}</span>
                    <span className='text-[#19aadd]'>({count})</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
