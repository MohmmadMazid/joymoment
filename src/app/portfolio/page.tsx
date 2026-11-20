"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Weddings", "Corporate", "Floral", "Social Events"];

  const portfolioImages = [
    { src: "/images/DancingOnTheClouds1.png", category: "Weddings", link: "/weddings" },
    { src: "/images/lavish-6.png", category: "Corporate", link: "/corporate-events" },
    { src: "/images/lavish-7.png", category: "Floral", link: "/floral-design" },
    { src: "/images/lavish-11.png", category: "Social Events", link: "/social-events" },
    { src: "/images/lavish-9.png", category: "Weddings", link: "/weddings" },
    { src: "/images/lavish-5.png", category: "Corporate", link: "/corporate-events" },
    { src: "/images/lavish-8.png", category: "Floral", link: "/floral" },
    { src: "/images/lavish-10.png", category: "Social Events", link: "/social-events" },
    { src: "/images/lavish-12.png", category: "Weddings", link: "/weddings" },
  ];

  const filteredImages =
    activeCategory === "All"
      ? portfolioImages
      : portfolioImages.filter((item) => item.category === activeCategory);

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/lavish-11.png"
          alt="Portfolio Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white">
            Our Portfolio
          </h1>

          <p className="mt-4 tracking-[4px] uppercase text-xs text-[#e7c27a]">
            Luxury Events Curated With Heart & Excellence
          </p>

          <p className="mt-4 text-base text-gray-200 max-w-xl mx-auto leading-relaxed">
            Browse a selection of our weddings, corporate events, and floral installations.
          </p>
        </motion.div>
      </section>

      {/* ================= INTRO ================= */}
      

    <section className="py-24 space-y-24">

  {/* SPREAD 1 */}
  <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6">
    <Image
      src="/images/DancingOnTheClouds1.png"
      alt="Wedding Production"
      width={800}
      height={600}
      className="rounded-3xl object-cover w-full h-[500px]"
    />

    <div>
      <h2 className="text-3xl text-black mb-4">Wedding Productions</h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        Transforming weddings into immersive experiences through architectural florals,
        lighting, and storytelling design.
      </p>

      <Link href="/weddings" className="underline text-black">
        View Production →
      </Link>
    </div>
  </div>

  {/* SPREAD 2 */}
  <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6">
    <div className="order-2 md:order-1">
      <h2 className="text-3xl text-black mb-4">Corporate Productions</h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        High-impact brand environments designed for visibility, influence, and audience engagement.
      </p>

      <Link href="/corporate-events" className="underline text-black">
        View Production →
      </Link>
    </div>

    <Image
      src="/images/lavish-6.png"
      alt="Corporate Production"
      width={800}
      height={600}
      className="rounded-3xl object-cover w-full h-[500px]"
    />
  </div>

  {/* SPREAD 3 */}
  <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6">
    <Image
      src="/images/lavish-7.png"
      alt="Floral Installation"
      width={800}
      height={600}
      className="rounded-3xl object-cover w-full h-[500px]"
    />

    <div>
      <h2 className="text-3xl text-black mb-4">Floral Installations</h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        Sculptural floral artistry designed as living installations that command attention.
      </p>

      <Link href="/floral-design" className="underline text-black">
        View Production →
      </Link>
    </div>
  </div>

</section>


<section className="relative h-[80vh] flex items-center justify-center text-center">
  <Image
    src="/images/lavish-11.png"
    alt="Luxury Production"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 text-white px-6 max-w-3xl">
    <h1 className="text-5xl md:text-6xl font-light leading-tight">
      Living Art. <br /> World-Class Event Production.
    </h1>

    <p className="mt-6 text-lg text-gray-200">
      We design immersive environments for brands, leaders, and once-in-a-lifetime celebrations.
    </p>

    <Link
      href="/contact"
      className="inline-block mt-8 bg-white text-black px-8 py-3 rounded-full text-sm tracking-wide hover:bg-gray-200 transition"
    >
      Request a Private Proposal
    </Link>
  </div>
</section>


    </main>
  );
}