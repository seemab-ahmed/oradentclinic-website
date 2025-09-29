import Image from "next/image";
import Link from "next/link";
import FacebookIcom from "@/public/images/icons/facebook.png";
import InstagramIcon from "@/public/images/icons/instagram.png";
import PinterestIcon from "@/public/images/icons/pintreast.png"
import {
  excerptFromHtml,
  readingTime,
  stripHtml,
} from "@/component/utils/blog";

function renderParagraphs(blog) {
  // collect keys like content_p1, content_p2, ...
  const pKeys = Object.keys(blog)
    .filter((k) => /^content_p\d+$/.test(k))
    .sort(
      (a, b) =>
        Number(a.replace("content_p", "")) - Number(b.replace("content_p", ""))
    );

  return pKeys.map((k) => (
    <p key={k} className="mb-4 text-base leading-7">
      {blog[k]}
    </p>
  ));
}

function renderHeadings(blog) {
  // include content_heading (main) and content_heading1..N
  const hKeys = Object.keys(blog)
    .filter((k) => k === "content_heading" || /^content_heading\d+$/.test(k))
    .sort((a, b) => {
      if (a === "content_heading") return -1;
      if (b === "content_heading") return 1;
      return (
        Number(a.replace("content_heading", "")) -
        Number(b.replace("content_heading", ""))
      );
    });

  return hKeys.map((k, idx) => (
    <h3
      key={k}
      className={
        idx === 0
          ? "text-2xl font-semibold mt-6 mb-3"
          : "text-xl font-semibold mt-6 mb-3"
      }
    >
      {blog[k]}
    </h3>
  ));
}

function renderListItems(blog) {
  const liKeys = Object.keys(blog)
    .filter((k) => /^li\d+$/.test(k))
    .sort((a, b) => Number(a.replace("li", "")) - Number(b.replace("li", "")));

  if (!liKeys.length) return null;

  return (
    <ul className="list-disc list-inside mb-4">
      {liKeys.map((k) => (
        <li key={k}>{blog[k]}</li>
      ))}
    </ul>
  );
}

export default function BlogPost({ blog }) {
  const time = readingTime(blog.content || "");
  const date = blog.date
    ? new Date(blog.date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <article className="max-w-[1400px] mx-auto p-4">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold my-6 sm:leading-16">{blog.title}</h2>
      <div className="text-sm text-gray-500 mb-4">
        {blog.author && <span className="mr-3">By {blog.author}</span>}
        {date && <span className="mr-3">{date}</span>}
        <span>{time} min read</span>
      </div>

      {/* Tags */}
      {blog.tags && blog.tags.length > 0 && (
        <div className="mb-4 flex flex-wrap sm:gap-2">
          {blog.tags.map((t) => {
            const tagSlug = encodeURIComponent(String(t).toLowerCase());
            return (
              <Link
                key={t}
                href={`/tag/${tagSlug}`}
                className="text-sm px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200"
              >
                #{t}
              </Link>
            );
          })}
        </div>
      )}

      {blog.image && (
        <div className="relative w-full h-[500px] mb-6">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      {blog.content ? (
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      ) : (
        <div className="prose max-w-none">
          {blog.content_heading && (
            <h3 className=" text-xl sm:text-3xl text-[#075791] font-semibold sm:py-4 mb-3">
              {blog.content_heading}
            </h3>
          )}
          {blog.content_p1 && <p className="mb-4">{blog.content_p1}</p>}
          {blog.content_heading1 && (
            <h3 className="text-2xl font-semibold mb-3">
              {blog.content_heading1}
            </h3>
          )}
          {blog.content_p2 && <p className="mb-4">{blog.content_p2}</p>}
          {blog.content_p3 && <p className="mb-4">{blog.content_p3}</p>}
          {blog.content_heading2 && (
            <h3 className="text-2xl font-semibold mb-3">
              {blog.content_heading2}
            </h3>
          )}
          {blog.content_p4 && <p className="mb-4">{blog.content_p4}</p>}
          <ul className="space-y-3">
            {blog.li1 && (
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                <span>{blog.li1}</span>
              </li>
            )}
            {blog.li2 && (
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                <span>{blog.li2}</span>
              </li>
            )}
            {blog.li3 && (
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                <span>{blog.li3}</span>
              </li>
            )}
            {blog.li4 && (
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                <span>{blog.li4}</span>
              </li>
            )}
          </ul>

          {blog.content_p5 && <p className="mb-4">{blog.content_p5}</p>}
          {blog.content_heading3 && (
            <h3 className="text-2xl font-semibold mb-3">
              {blog.content_heading3}
            </h3>
          )}
          {blog.content_p6 && <p className="mb-4">{blog.content_p6}</p>}
          {blog.content_p7 && <p className="mb-4">{blog.content_p7}</p>}
          <ul className="space-y-3">
            {blog.li5 && (
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                <span>{blog.li5}</span>
              </li>
            )}
            {blog.li6 && (
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                <span>{blog.li6}</span>
              </li>
            )}
            {blog.li7 && (
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                <span>{blog.li7}</span>
              </li>
            )}
            {blog.li8 && (
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                <span>{blog.li8}</span>
              </li>
            )}
          </ul>

          {blog.content_p8 && <p className="mb-4">{blog.content_p8}</p>}
          {blog.content_heading4 && (
            <h3 className="text-2xl font-semibold mb-3">
              {blog.content_heading4}
            </h3>
          )}
          {blog.content_p9 && <p className="mb-4">{blog.content_p9}</p>}
          {blog.content_p10 && <p className="mb-4">{blog.content_p10}</p>}
          <ul className="space-y-3">
            {blog.li9 && (
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                <span>{blog.li9}</span>
              </li>
            )}
            {blog.li10 && (
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                <span>{blog.li10}</span>
              </li>
            )}
            {blog.li11 && (
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                <span>{blog.li11}</span>
              </li>
            )}
            {blog.li12 && (
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                <span>{blog.li12}</span>
              </li>
            )}
            {blog.li13 && (
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                <span>{blog.li13}</span>
              </li>
            )}
          </ul>

          {blog.content_heading5 && (
            <h3 className="text-2xl font-semibold mt-6 my-3">
              {blog.content_heading5}
            </h3>
          )}
          {blog.content_p11 && <p className="mb-4">{blog.content_p11}</p>}
          <ul className="space-y-3">
            {blog.li14 && (
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                <span>{blog.li14}</span>
              </li>
            )}
            {blog.li15 && (
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                <span>{blog.li15}</span>
              </li>
            )}
            {blog.li16 && (
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                <span>{blog.li16}</span>
              </li>
            )}
            {blog.li17 && (
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                <span>{blog.li17}</span>
              </li>
            )}
            {blog.li18 && (
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                <span>{blog.li18}</span>
              </li>
            )}
          </ul>

          {blog.content_heading6 && (
            <h3 className="text-2xl font-semibold mt-6 my-3">
              {blog.content_heading6}
            </h3>
          )}
          {blog.content_p12 && <p className="mb-4">{blog.content_p12}</p>}
          {blog.content_heading7 && (
            <h3 className="text-2xl font-semibold mb-3">
              {blog.content_heading7}
            </h3>
          )}
          {blog.content_p13 && <p className="mb-4">{blog.content_p13}</p>}
          {blog.content_p14 && <p className="mb-4">{blog.content_p14}</p>}
          {blog.also_read_blog && blog.also_read_blog.link && (
            <div className="mt-8">
              <h4 className="font-semibold mb-2">Also read</h4>
              <Link
                href={blog.also_read_blog.link}
                className="text-blue-600 hover:underline"
              >
                {blog.also_read_blog.title || blog.also_read_blog.link}
              </Link>
            </div>
          )}




          {/* Share links */}
          {blog.share && (
  <div className="mt-6">
    <h4 className="font-semibold mb-2">Share this article</h4>
    <div className="flex gap-3">
      {blog.share.facebook && (
        <a
          href={blog.share.facebook}
          target="_blank"
          rel="noreferrer"
          className="bg-[#044f96] rounded-lg p-2 flex items-center justify-center"
        >
          <Image src={FacebookIcom} alt="Facebook" width={24} height={24} />
        </a>
      )}
      {blog.share.instagram && (
        <a
          href={blog.share.instagram}
          target="_blank"
          rel="noreferrer"
          className="bg-[#044f96] rounded-lg p-2 flex items-center justify-center"
        >
          <Image src={InstagramIcon} alt="Instagram" width={24} height={24} />
        </a>
      )}
     {blog.share.pinterest && (
        <a
          href={blog.share.pinterest}
          target="_blank"
          rel="noreferrer"
          className="bg-[#044f96] rounded-lg p-2 flex items-center justify-center"
        >
          <Image src={PinterestIcon} alt="Pinterest" width={24} height={24} />
        </a>
      )}
    </div>
  </div>
)}

          {/* {blog.share && (
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Share this article</h4>
              <div className="flex gap-3">
                {blog.share.facebook && (
                  <a
                    href={blog.share.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600"
                  >
                    Facebook
                  </a>
                )}
                {blog.share.instagram && (
                  <a
                    href={blog.share.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-pink-600"
                  >
                    Instagram
                  </a>
                )}
                {blog.share.twitter && (
                  <a
                    href={blog.share.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-600"
                  >
                    Twitter
                  </a>
                )}
              </div>
            </div>
          )} */}
        </div>
      )}
    </article>
  );
}
