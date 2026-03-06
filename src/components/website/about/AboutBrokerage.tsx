import Image from "next/image";
import React from "react";

const AboutBrokerage = () => {
  return (
    <section id="showcase"
      className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      aria-labelledby="brokerage-heading"
    >
      <div className="">
        {/* Section Heading */}
        {/* <header className="mb-12">
       
          <p className="mt-3 max-w-2xl text-gray-600 text-sm md:text-base">
            Professional yacht brokerage services including sales,
            representation, and charter advisory across Asia and beyond.
          </p>
        </header> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 min-h-[320px]">
            <figure className="col-span-2 row-span-2 relative group min-h-[200px] sm:min-h-[280px]">
              <Image
                src="/about/brokerage.jpg"
                alt="Luxury yacht deck lounge with sea view"
                fill
                priority
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover rounded-lg"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 rounded-md backdrop-blur-md  group-hover:text-white text-sm text-center py-1 opacity-0 group-hover:opacity-100 transition">
               Sunrise 241 — Prestige Line
              </figcaption>
            </figure>

            {[
              { src: "/about/brokerage2.jpg", label: "Yacht Exterior" },
              { src: "/about/brokerage4.jpg", label: "Luxury Interior" },
              { src: "/about/about3.jpg", label: "Open Deck Area" },
              { src: "/about/brokerage5.jpg", label: "Relaxation Space" },
            ].map((item, index) => (
              <figure key={index} className="relative group min-h-[120px]">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover rounded-lg group-hover:brightness-70 transition"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 rounded-md backdrop-blur-md text-white text-sm text-center py-1 opacity-0 group-hover:opacity-100 transition">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Content */}
          <article className="space-y-6">
            
            <div>
              <span className="block w-14 h-0.5 bg-[#FF9002] mb-3" />
                 <h2
            id="brokerage-heading"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Brokerage <span className="text-orange-500">Services</span>
          </h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Yacht Sales
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Accurate pricing, global exposure, and hands-on representation.
                Each yacht is promoted through professional storytelling,
                social-first campaigns, and targeted buyer outreach.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Buyer Representation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                From local upgrades to overseas acquisitions, I guide clients
                through vessel selection, negotiations, surveys, contracts, and
                delivery logistics.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Charter Advisory
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A curated selection of yachts across Thailand and the region.
                Ideal for leisure cruising, events, or corporate charters with
                seamless planning and expert crew matching.
              </p>
            </div>
          </article>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-white font-semibold hover:bg-orange-600 transition"
            aria-label="Learn more about brokerage services"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutBrokerage;

