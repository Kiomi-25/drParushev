import { useState } from "react";

export const CarouselBA = ({ children }) => {
  const [curr, setCurr] = useState(0);

  // Convert children to array and filter out invalid entries
  const slides = Array.isArray(children) ? children : [children];
  const validSlides = slides.filter((slide) => slide != null);

  if (validSlides.length === 0) {
    return <div>No slides available</div>;
  }

  const prev = () => setCurr(curr === 0 ? validSlides.length - 1 : curr - 1);
  const next = () => setCurr(curr === validSlides.length - 1 ? 0 : curr + 1);

  return (
    <div className="overflow-hidden relative rounded-lg shadow-2xl bg-white">
      {/* Slides Container */}
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}>
        {validSlides}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-3 md:p-4 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Previous">
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={next}
          className="p-3 md:p-4 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Next">
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 right-0 left-0 z-10">
        <div className="flex items-center justify-center gap-2">
          {validSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurr(i)}
              className={`transition-all rounded-full ${
                curr === i
                  ? "w-8 h-2 bg-[#00A79D]"
                  : "w-2 h-2 bg-gray-400 hover:bg-gray-600"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
