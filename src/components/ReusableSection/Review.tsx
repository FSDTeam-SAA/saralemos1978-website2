"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Review() {
  const testimonials: {
    name: string;
    location?: string;
    image?: string;
    text: string;
    rating: number;
  }[] = [
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
  const [itemsPerView, setItemsPerView] = useState(3);

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

  const maxIndex = testimonials.length - itemsPerView;

  // Next/Prev button logic
  const handleNext = () => {
    if (currentIndex < maxIndex) setCurrentIndex((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const cardWidth = `calc((100% - ${(itemsPerView - 1) * 24}px) / ${itemsPerView})`;

  return (
    <section className="relative w-full py-16 px-4 text-center" id="show-case">
      {/* Background image */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/images/car.jpg"  
          alt="Testimonials Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>{" "}
       
      </div> */}

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-12">
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
        <div className="relative flex items-center justify-center">
          <div className="relative w-full overflow-hidden">
            <div
              className="flex gap-6"
              style={{
                transform: `translateX(calc(-${(currentIndex * 100) / itemsPerView}% - ${currentIndex * 24}px))`,
                transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {testimonials.map((t, i) => (
                <Card
                  key={i}
                  className="shrink-0 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
                  style={{ width: cardWidth }}
                >
                  <CardContent className="px-6 py-6 text-left flex flex-col h-full justify-between">
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
                          <p className="text-xs text-gray-500">{t.location}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {t.text}
                      </p>
                    </div>
                    <div className="flex items-center gap-0.5 mt-4">
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 z-10 ${
              currentIndex === 0
                ? "opacity-40 cursor-not-allowed bg-gray-300"
                : "opacity-100 hover:opacity-100 cursor-pointer bg-orange-500 shadow-lg hover:shadow-xl hover:scale-110"
            }`}
          >
            <span className="text-white text-xl font-bold">‹</span>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 z-10 ${
              currentIndex === maxIndex
                ? "opacity-40 cursor-not-allowed bg-gray-300"
                : "opacity-100 hover:opacity-100 cursor-pointer bg-orange-500 shadow-lg hover:shadow-xl hover:scale-110"
            }`}
          >
            <span className="text-white text-xl font-bold">›</span>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => {
            const isActive =
              idx >= currentIndex && idx < currentIndex + itemsPerView;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(Math.min(idx, maxIndex))}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive ? "bg-orange-500 w-8" : "bg-gray-300 w-2"
                }`}
              ></button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
