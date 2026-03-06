import Link from 'next/link'
import React from 'react'

const CharterInThailand = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="charter-thailand">
      <div className="container  mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Text Content */}
          <div className="w-full lg:w-[60%]">
            <span className="block w-14 h-0.5 bg-[#FF9002] mb-3" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="text-orange-500">Charter</span> in <span className="text-gray-800">Thailand</span>
            </h2>
            <p className="text-[#52525B] text-lg leading-relaxed mb-4">
              Thailand is one of the most stunning and sought-after yacht charter destinations in Southeast Asia. With
              its crystal-clear waters, pristine islands, and vibrant culture, it&apos;s the perfect place for an
              unforgettable yachting experience.
            </p>
            <p className="text-[#52525B] text-lg leading-relaxed mb-6">
              From the famous Phuket region to the hidden gems of the Andaman Sea, we offer a wide range of yachts
              suitable for every kind of charter experience. Whether you&apos;re looking for a romantic getaway, a family
              adventure, or a corporate retreat, Thailand has it all. Our local expertise ensures you&apos;ll have the best
              charter experience possible, with insider knowledge of the best anchorages, restaurants, and
              attractions.
            </p>
            <Link href={'/#contact'}>
            
            <button className="bg-[#E8662A] cursor-pointer hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Plan Your Charter
            </button>
            </Link>
          </div>

          {/* Image */}
          <div className="w-full lg:w-[40%] flex-shrink-0">
            <img
              src="/about/thailand.jpg"
              alt="Thailand charter view"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CharterInThailand