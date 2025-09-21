// components/ReusableSection.jsx
import Link from "next/link";
import Image from "next/image";

// Breadcrumb Component
export function Breadcrumb({ items }) {
  return (
    <ul className="flex items-center text-sm text-gray-600 mb-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          {item.href ? (
            <Link href={item.href} className="text-blue-600 hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-500">{item.label}</span>
          )}
          {index < items.length - 1 && <span className="mx-2">/</span>}
        </li>
      ))}
    </ul>
  );
}

// Image Section Component
export function ImageSection({ src, alt }) {
  return (
    <div className="rounded-lg overflow-hidden" style={{ minHeight: "300px" }}>
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>
  );
}

// Text Content Component
export function TextContent({ title, description, highlight }) {
  return (
    <div className="flex flex-col justify-between gap-4 ">
      <div>
        <h5 className="text-blue-600 text-sm uppercase font-semibold mb-3">{title}</h5>
        <p className="text-gray-700">{description}</p>
      </div>
      {highlight && (
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <h5 className="text-lg font-medium text-gray-800 m-0">{highlight}</h5>
        </div>
      )}
    </div>
  );
}
