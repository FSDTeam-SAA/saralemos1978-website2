"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Review() {
  const testimonials = [
    {
      name: "R.C.",
      location: "Switzerland",
      text: `"I enjoyed pertinent reporting of all efforts along with skilf..."`,
      rating: 5,
      image: "/images/testimonial1.webp",
    },
    {
      name: "M.K.",
      location: "Thailand",
      text: `"Martins character, tenacity, diplomacy and genuine de..."`,
      rating: 5,
      image: "/images/testimonial3.webp",
    },
    {
      name: "J.S.",
      location: "Australia",
      text: `"It was his extensive knowledge of the industry t..."`,
      rating: 5,
      image: "/images/testimonial2.webp",
    },
    {
      name: "G.L.",
      location: "Australia",
      text: `"His commitment truly sets him apart. Nothing was too..."`,
      rating: 5,
      image: "/images/testimonial1.webp",
    },
    {
      name: "L.A.",
      location: "Canada",
      text: `"Thanks so much for all you did to pull the deal together..."`,
      rating: 5,
      image: "/images/testimonial3.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const GAP = 24; // px gap between cards

  // Responsive setup
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);
  
  // Use derived index to avoid setState in effect and ensure valid bounds
  const displayIndex = Math.min(currentIndex, maxIndex);

  const handleNext = () => {
    if (currentIndex < maxIndex) setCurrentIndex((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  // Each card = (100% of viewport - gaps between visible cards) / itemsPerView
  // The shift per step = one card width + one gap
  // We express cardWidth as a CSS calc so it's always pixel-perfect
  const cardWidthCalc = `calc((100% - ${(itemsPerView - 1) * GAP}px) / ${itemsPerView})`;
  // Shift = displayIndex * (cardWidth + gap)
  const shiftCalc = `calc(${displayIndex} * ((100% - ${(itemsPerView - 1) * GAP}px) / ${itemsPerView} + ${GAP}px))`;

  return (
    <section className="relative w-full py-16 px-4 text-center" id="showcase">
      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-12">
          <span className="block w-14 h-0.5 mx-auto bg-[#FF9002] mb-3" />
          <h2 className="text-4xl font-bold mb-3">
            <span className="text-gray-800">Client </span>
            <span className="text-orange-500">Testimonials</span>
          </h2>
          <p className="text-gray-600 text-base">
            Trusted by clients across Asia-Pacific for exceptional service and
            results
          </p>
        </div>

        {/* Slider */}
        <div className="relative flex flex-col gap-4">
          {/* Desktop/Tablet: prev arrow on left, next on right, cards in between */}
          <div className="flex items-center gap-3">
            {/* Viewport: strictly clips to exactly itemsPerView cards */}
            <div className="flex-1 overflow-hidden">
              <div
                className="flex"
                style={{
                  gap: `${GAP}px`,
                  transform: `translateX(calc(-1 * ${shiftCalc}))`,
                  transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0"
                    style={{ width: cardWidthCalc }}
                  >
                    <Card className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
                      <CardContent className="px-6 py-6 text-left flex flex-col justify-between h-full">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 mb-3">
                            {t.image ? (
                              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                <Image
                                  src={t.image}
                                  alt={t.name}
                                  width={48}
                                  height={48}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ) : (
                              <div className="flex items-center justify-center w-12 h-12 bg-gray-400 text-white rounded-full font-medium text-xs flex-shrink-0">
                                {t.name?.charAt(0).toUpperCase()}
                              </div>
                            )}
                            <div>
                              <p className="font-semibold text-gray-800 text-sm">
                                {t.name}
                              </p>
                              {t.location && (
                                <p className="text-xs text-gray-500">
                                  {t.location}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-0.5 ">
                            {[...Array(5)].map((_, idx) => (
                              <Star
                                key={idx}
                                size={14}
                                className={`${
                                  idx < t.rating
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300 fill-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {t.text}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile arrow row (below slider) */}
          <div className="flex md:hidden gap-4 justify-center">
            <button
              onClick={handlePrev}
              disabled={displayIndex === 0}
              aria-label="Previous"
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
                displayIndex === 0
                  ? "opacity-40 cursor-not-allowed bg-gray-300"
                  : "cursor-pointer bg-orange-500 shadow-lg"
              }`}
            >
              <span className="text-white text-xl font-bold">‹</span>
            </button>
            <button
              onClick={handleNext}
              disabled={displayIndex === maxIndex}
              aria-label="Next"
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
                displayIndex === maxIndex
                  ? "opacity-40 cursor-not-allowed bg-gray-300"
                  : "cursor-pointer bg-orange-300 shadow-lg"
              }`}
            >
              <span className="text-white text-xl font-bold">›</span>
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {/* Prev Arrow */}
          <button
            onClick={handlePrev}
            disabled={displayIndex === 0}
            aria-label="Previous testimonials"
            className={`hidden md:flex flex-shrink-0 w-10 h-10 items-center justify-center rounded-full transition-all duration-200 z-10 ${
              displayIndex === 0
                ? "opacity-40 cursor-not-allowed bg-gray-300"
                : "cursor-pointer bg-[#FEF2EA] shadow-lg  hover:scale-110"
            }`}
          >
            <span className="text-[#E8662A] text-xl font-bold">‹</span>
          </button>
          {testimonials.map((_, idx) => {
            const isActive =
              idx >= displayIndex && idx < displayIndex + itemsPerView;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(Math.min(idx, maxIndex))}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive ? "bg-[#E8662A] text-[#E8662A] w-2" : "bg-gray-300 w-2"
                }`}
              />
            );
          })}

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            disabled={displayIndex === maxIndex}
            aria-label="Next testimonials"
            className={`hidden md:flex flex-shrink-0 w-10 h-10 items-center justify-center rounded-full transition-all duration-200 z-10 ${
              displayIndex === maxIndex
                ? "opacity-40 cursor-not-allowed bg-gray-300"
                : "cursor-pointer bg-[#FEF2EA] shadow-lg  hover:scale-110"
            }`}
          >
          
            <span className="text-[#E8662A]  text-xl font-bold">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
