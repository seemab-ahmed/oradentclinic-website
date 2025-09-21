import Link from 'next/link';
import Image from 'next/image';

export default function BlogListing({ blogs }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <Link key={blog.slug} href={`/blog/${blog.slug}`}>
          <div className="bg-white rounded-lg shadow hover:shadow-md overflow-hidden">
            <div className="relative w-full h-48">
              <Image src={blog.image} alt={blog.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
