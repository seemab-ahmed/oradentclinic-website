import Image from 'next/image';

export default function BlogPost({ blog }) {
  return (
    <article className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <div className="relative w-full h-80 mb-6">
        <Image src={blog.image} alt={blog.title} fill className="object-cover rounded-lg" />
      </div>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
    </article>
  );
}
