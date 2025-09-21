'use client';
import Image from 'next/image';
import Link from 'next/link';

import Partial from '@/public/images/blogs/partial.png';
import Sentistryservices from '@/public/images/blogs/sentistryservices.png';
import TeethWhite from '@/public/images/blogs/teethWhite.jpg';
import DentalImplants from '@/public/images/blogs/dentalImplants.png';
import RadiantSmile from '@/public/images/blogs/radiantSmile.jpg';
import Eating from '@/public/images/blogs/eating.png';
import KeepClean from '@/public/images/blogs/keepClean.jpg';
import Materials from '@/public/images/blogs/materials.jpg';
import Dentures from '@/public/images/blogs/dentures.jpg';
import GeneralDentistry from '@/public/images/blogs/generalDentistry.jpeg';

// Note: You should replace remote images with imported static images for full optimization.

const blogs = [
  {
    title: 'Why General Dentistry In Pakistan is a Stressful Job for Dentist.',
    image: GeneralDentistry,
    isLocal: true,
    link: 'https://oradentdentalclinic.com/blogs/why-general-dentistry-in-pakistan-is-a-stressful-job-for-dentist',
  },
  {
    title: 'Truth about Teeth Whitening Is It Permanent or Temporary Find Out Now',
    image: TeethWhite,
    isLocal: true,
    link: 'https://oradentdentalclinic.com/blogs/truth-about-teeth-whitening-is-it-permanent-or-temporary-find-out-now',
  },
  {
    title: 'Are Dentures Painful? Comprehensive Guide to Denture Comfort',
    image: Dentures,
    isLocal: true,
    link: 'https://oradentdentalclinic.com/blogs/are-dentures-painful-comprehensive-guide-to-denture-comfort',
  },
  {
    title: 'What Materials Are Dentures Made Of? An In-Depth Guide',
    image: Materials,
    isLocal: true,
    link: 'https://oradentdentalclinic.com/blogs/what-materials-are-dentures-made-of-an-in-depth-guide',
  },
  {
    title: 'Best Ways to keep Clean your Denture in 2024 | Oradentdentalclinic',
    image: KeepClean,
    isLocal: true,
    link: 'https://oradentdentalclinic.com/blogs/best-ways-to-keep-clean-your-denture-in-2024-oradentdentalclinic',
  },
  {
    title: 'Eating with Dentures, A New Beginning for Your Smile and Diet',
    image: Eating,
    isLocal: true,
    link: 'https://oradentdentalclinic.com/blogs/eating-with-dentures-a-new-beginning-for-your-smile-and-diet',
  },
  {
    title: 'General Dentistry Services at Oradent Dental Clinic: Your Path to a Healthy Smile',
    image: Sentistryservices,
    isLocal: true,
    link: 'https://oradentdentalclinic.com/blogs/general-dentistry-services-at-oradent-dental-clinic-your-path-to-a-healthy-smile',
  },
  {
    title: 'How Partial Dentures Can Save You Thousands of Rupees in the Long Run',
    image: Partial,
    isLocal: true,
    link: 'https://oradentdentalclinic.com/blogs/how-partial-dentures-can-save-you-thousands-of-rupees-in-the-long-run',
  },
  {
    title: 'Unlock the Secret to a Radiant Smile with Cosmetic Dentistry Services',
    image: RadiantSmile,
    isLocal: true,
    link: 'https://oradentdentalclinic.com/blogs/unlock-the-secret-to-a-radiant-smile-with-cosmetic-dentistry-services',
  },
  {
    title: 'Why Dental Implants Are the Best Solution for Missing Teeth',
    image: DentalImplants,
    isLocal: true,
    link: 'https://oradentdentalclinic.com/blogs/why-dental-implants-are-the-best-solution-for-missing-teeth',
  },
];

export default function BlogListing() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, idx) => (
            <Link
              key={idx}
              href={blog.link}
              className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
            >
              <div className="w-full h-52 relative">
                {blog.isLocal ? (
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                ) : (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-800">
                  {blog.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <p className="mb-4 sm:mb-0">
            Showing <span className="font-semibold">1</span> to{' '}
            <span className="font-semibold">10</span> of{' '}
            <span className="font-semibold">20</span> results
          </p>

          <div className="flex space-x-2">
            <span className="px-3 py-1 bg-gray-200 text-gray-400 rounded cursor-not-allowed">‹</span>
            <span className="px-3 py-1 bg-blue-600 text-white rounded">1</span>
            <Link
              href="https://oradentdentalclinic.com/blogs?page=2"
              className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
            >
              2
            </Link>
            <Link
              href="https://oradentdentalclinic.com/blogs?page=2"
              className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
            >
              ›
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
