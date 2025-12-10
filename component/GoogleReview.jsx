import React from "react";

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?sca_esv=7e1bbdf5a909f35f&sxsrf=AHTn8zo56AQTk9WxkcA1NpdLQy2Cmdaynw%3A1738768155787&q=OraDent%20Dental%20Clinic&stick=H4sIAAAAAAAAAONgU1I1qDC2SEmzNDUxTzRKMjE0MTW0MqiwNLawMDezSDYzMTQ0Mze0WMQq6l-U6JKaV6IAIhJzFJxzMvMykwG_7OkmQQAAAA&mat=CTjtalLgDBz2&ved=2ahUKEwj8ypaS6KyLAxWmhf0HHYM_K-oQrMcEegQIDBAC";

export default function GoogleReview({ className = "" }) {
  return (
    <div className={`w-full bg-gradient-to-r from-[#f8fafc] to-[#eef6f3] sm:py-10 px-6 ${className}`}>
      <div className="container mx-auto max-w-[1100px]">
        <div className="bg-white sm:rounded-2xl shadow-lg p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold text-[#075791] mb-2">
              Love your visit? 
            </h3>
            <p className="text-gray-600 text-lg mb-4">
              Share your experience with others by leaving us a Google review.  
              It only takes a minute and helps our clinic grow!
            </p>

            {/* Stars */}
            <div className="flex justify-center md:justify-start gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 text-[#fbbf24]"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.383 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.383-2.46a1 1 0 00-1.176 0l-3.383 2.46c-.785.57-1.84-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.098 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-shrink-0">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#85c441] text-white text-lg text-center sm:text-start font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#6fb034] transform hover:scale-105 transition duration-300"
            >
              ⭐ Leave a Google Review
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
