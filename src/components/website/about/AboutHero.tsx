'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutHero = () => {
  return (
    <section className="relative h-screen md:max-h-[80vh] w-full">
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
      <div className="relative z-10 flex h-full items-center justify-center  text-center">
        <div className="mx-auto container px-6">
          <div className="container  mx-auto text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-5xl leading-[110%]">
              Holmes on Board :  Helping you navigate Asia’s yachting world with
              confidence.
            </h1>

            <p className="mt-5 text-base text-gray-200 sm:text-lg">
              Personal service, deep local knowledge, and a lifetime in the
              yachting world. Whether you’re buying, selling, or chartering,
              Holmes on Board brings clarity, confidence, and hands-on support
              from first enquiry to final handshake.{" "}
            </p>

            <div className="mt-8 flex justify-center items-center gap-4">
              <button
                onClick={() => window.open("https://wa.me/66818917057", "_blank")}
                className=" bg-white px-8 py-4 text-[#343A40] font-semibold transition hover:bg-[#B5ED5B] rounded-4xl flex items-center"
              >
                <span>Call Me</span> 
              </button>
             <span className="text-white">Or</span>

              <Link
                href="/#footers"
                className=" border  px-8 py-4  bg-[#F8F7F3] font-semibold transition rounded-4xl flex items-center"
              >
                Email Me
              </Link>
            </div>
            <div className="flex justify-center my-15">

              <Image className="rounded-full w-50 h-50 object-cover"  src={'/about/martinf.png'} alt="f........."  width={200} height={200}/>
            </div>
            <Link href={'/#about-holmes'} className=" py-2 px-8! bg-[#E8662A]">
              About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
