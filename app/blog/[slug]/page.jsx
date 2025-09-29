import blogs from "@/component/data/blogs";
import BlogPost from '@/component/blogs/BlogPost';
import { notFound } from 'next/navigation';
import WhatsappButton from "@/component/Whatsapp";
import CallButton from "@/component/CallButton";

export default function BlogDetailPage({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

return(
  <>
  <BlogPost blog={blog} />
  <WhatsappButton/>
  <CallButton/>
  </>
)

  return <BlogPost blog={blog} />;
}
