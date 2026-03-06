"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutHero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] w-full flex items-center justify-center mt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/banner.jpeg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full py-16">
        <div className="mx-auto container px-4 sm:px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Heading */}
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
              Holmes on Board : Helping you navigate Asia&apos;s yachting world
              with confidence.
            </h1>

            {/* Description */}
            <p className="mt-6 text-sm text-white/90 sm:text-base max-w-3xl leading-relaxed">
              Personal service, deep local knowledge, and a lifetime in the
              yachting world. Whether you&apos;re buying, selling, or
              chartering, Holmes on Board brings clarity, confidence, and
              hands-on support from first enquiry to final handshake.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <button
                onClick={() =>
                  window.open("https://wa.me/66818917057", "_blank")
                }
                className="bg-white px-8 py-3 text-black text-sm font-semibold transition-all hover:bg-gray-100 rounded-md"
              >
                Call Me
              </button>

              <span className="text-white text-sm font-medium">OR</span>

              <Link
                href="/#footers"
                className="bg-white px-8 py-3 text-black text-sm font-semibold transition-all hover:bg-gray-100 rounded-md"
              >
                Email Me
              </Link>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center items-center mt-10">
              <Image
                className="rounded-full object-cover w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 border-4 border-white/20"
                src={"/about/martinf.png"}
                alt="Martin Holmes"
                width={160}
                height={160}
              />
            </div>

            {/* About Me Button */}
            <Link
              href={"/#about-holmes"}
              className="mt-8 bg-[#E8662A] hover:bg-[#d45a23] text-white text-sm font-bold px-8 py-3 rounded-md transition-colors uppercase tracking-wide"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
