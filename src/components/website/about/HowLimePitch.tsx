import Image from "next/image";
import React from "react";

const features = [
  {
    icon:'/about/watch.svg',
    title: "Smart Matching",
    description:
      "AI-powered yacht matching that connects clients with vessels perfectly suited to their needs.",
  },
  {
    icon:'/about/loc.svg',

    title: "Transparent Pricing",
    description:
      "Clear, competitive pricing with no hidden fees or unexpected charges.",
  },
  {
    icon:'/about/mic.svg',

    title: "Easy Booking",
    description:
      "A streamlined booking process with instant confirmation and secure payments.",
  },
  {
    icon:'/about/world.svg',
    title: "Expert Support",
    description:
      "24/7 assistance from yacht industry professionals for smooth experiences.",
  },
];

const HowLimePitch = () => {
  return (
    <section
      className="relative my-10 md:my-16 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="limepitch-heading"
    >
      {/* Background Image */}
    
      <div className="absolute inset-0 -z-10">
        <Image
          src="/about/limepitch.png"
          alt="Lime Pitch AI marketing background"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/60" />
      </div>

      <div className="container mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
            <span className="block w-16 h-0.5 mx-auto bg-[#FF9002] mb-3" />

          <h2
            id="limepitch-heading"
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            How Lime Pitch{" "}
            <span className="text-orange-500">Powers Holmes On Board</span>
          </h2>
          <p className="mt-3 max-w-5xl mx-auto text-sm md:text-base text-gray-600">
            Holmes On Board is supported by Lime Pitch — an AI-driven marketing
            assistant built specifically for yacht professionals.
          </p>
        </header>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <article
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition"
            >
          
              <div className="flex gap-3 items-center mb-3">
                <Image src={feature.icon} alt="watch" width={30} height={30} className=" object-center w-10 h-10"/>
              <h3 className="mb-2 text-xl font-semibold text-[#E8662A]">
                {feature.title}
              </h3>

              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowLimePitch;
