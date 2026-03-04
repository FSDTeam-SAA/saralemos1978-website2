import Image from "next/image";
import { MapPin } from "lucide-react";
import React from "react";

const featuredYachts = [
  {
    name: "Northern Star",
    model: "Oyster 82",
    length: "82 ft",
    year: 2019,
    location: "Phuket, Thailand",
    image: "/about/featured.jpg",
    status: "Sale",
  },
  {
    name: "Pacific Dreams",
    model: "Oyster 82",
    length: "82 ft",
    year: 2019,
    location: "Phuket, Thailand",
    image: "/about/featured2.jpg",
    status: "Charter",
  },
  {
    name: "Ocean Serenity",
    model: "Oyster 82",
    length: "82 ft",
    year: 2019,
    location: "Phuket, Thailand",
    image: "/about/featured3.jpg",
    status: "Sale",
  },
];

const AboutFeatured = () => {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      aria-labelledby="featured-yachts-heading"
      id="listings"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="mb-10">
          <h2
            id="featured-yachts-heading"
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            Featured <span className="text-orange-500">Yacht Listings</span>
          </h2>
          <p className="mt-2 max-w-2xl text-sm md:text-base text-gray-600">
            Explore premium yachts available for sale or charter across
            Southeast Asia through our trusted yacht brokerage network.
          </p>
        </header>

        {/* Yacht Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredYachts.map((yacht, index) => (
            <article
              key={index}
              className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              itemScope
              itemType="https://schema.org/Product"
            >
              {/* Status Badge */}
              <span
                className="absolute top-4 left-4 z-10 rounded-full bg-black/40 px-4 py-1 text-xs font-semibold text-white backdrop-blur-md"
                aria-hidden="true"
              >
                {yacht.status}
              </span>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={yacht.image}
                  alt={`${yacht.name} ${yacht.model} yacht in ${yacht.location}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3
                  className="mb-2 font-semibold text-gray-800"
                  itemProp="name"
                >
                  {yacht.name}
                </h3>

                <div className="space-y-1 text-sm text-gray-600">
                  <p itemProp="model">{yacht.model}</p>
                  <p>
                    {yacht.length}
                    <span className="px-2">•</span>
                    {yacht.year}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span itemProp="areaServed">{yacht.location}</span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white hover:bg-orange-600 transition"
            aria-label="View all yacht listings"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutFeatured;
