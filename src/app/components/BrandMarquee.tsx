"use client";

import Image from "next/image";

const brands = [
  { id: 1, src: "/images/logo-1.png", alt: "Brand 1" },
  { id: 2, src: "/images/logo-2.png", alt: "Brand 2" },
  { id: 3, src: "/main-logo.jpg", alt: "Brand 3" },
  { id: 4, src: "/main-logo.jpg", alt: "Brand 4" },
  { id: 5, src: "/main-logo.jpg", alt: "Brand 5" },
];

export default function BrandMarquee() {
  return (
    <section className="py-10 bg-white overflow-hidden">
         <h2 className="mt-10 mb-5 text-center text-3xl font-light text-black sm:text-4xl lg:text-5xl">
  Our Trusted Brands
  <hr className="mx-auto mt-3 h-1 w-40 rounded-full border-0 bg-[#7b7b7b]" />
</h2>

<p className="mx-auto mt-6 max-w-2xl text-center text-base text-gray-600 sm:text-lg mb-10">
  Trusted by world-class brands and discerning clients.
</p>
      

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="mx-8 flex items-center justify-center mt-4"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={120}
                height={60}
                className="object-contain  hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}