import Image from 'next/image'
import React from 'react'

const AboutHolmes = () => {
  return (
   <section id="about-holmes" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Image */}
            <div className="w-full lg:w-auto flex-shrink-0">
              <Image
                src="/about/martin.jpg"
                alt="Martin Holmes"
                className="w-full lg:w-[626px] h-auto object-cover rounded-lg"
                width={626}
                height={375}
              />
            </div>
            {/* Content */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">
                About <span className="text-orange-500">Martin Holmes</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                With over 15 years of experience in the Southeast Asian yacht industry, Martin Holmes has built a
                reputation as one of the region&apos;s most trusted yacht brokers. His deep knowledge of Asian waters and
                extensive network of yacht owners and charter companies make him the go-to person for anyone looking to
                buy, sell, or charter luxury yachts.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Marti&apos;s commitment to excellence and his passion for the yachting lifestyle ensure that every client
                receives personalized attention and expert guidance. Whether you&apos;re a seasoned yachtsman or a first-time
                buyer, Martin&apos;s expertise will help you navigate the complex world of yacht ownership and chartering.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutHolmes