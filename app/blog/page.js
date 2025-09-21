import BlogMain from '@/component/BlogMain';
import BlogListing from '@/component/blogs/BlogListing';
import CallButton from '@/component/CallButton';
import BlogsData from '@/component/data/blogs';
import Faq from '@/component/Faq';
import WhatsappButton from '@/component/Whatsapp';

export default function BlogPage() {
  return (
    <div className="py-10">
      <div className='container w-full max-w-[1400px] lg:max-w-[1337px] mx-auto px-4'>
      <h1 className="text-[2.5rem] font-jost text-[#075791] font-bold mb-6">Our Blog</h1>
      <BlogMain/>
      <Faq/>
      <BlogListing blogs={BlogsData} />
       <WhatsappButton/>
      <CallButton/>
    </div>
    </div>
  );
}