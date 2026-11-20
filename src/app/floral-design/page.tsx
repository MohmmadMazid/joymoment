"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FloralDesignPage() {
  const offerings = [
    "Luxury wedding florals",
    "Editorial centerpieces",
    "Ceremony installations",
    "Luxury arches & backdrops",
    "Ceiling treatments & drapery",
    "Custom sweetheart tables",
    "Corporate floral experiences",
    "Full tablescape design",
  ];

  const whyStandOut = [
    "No cookie-cutter designs",
    "Every arrangement is customized",
    "Premium blooms only",
    "Full-service setup + design direction",
    "Aesthetic cohesion from ceremony to reception",
  ];

  return (
    <section className="bg-white">

      {/* ===================================== */}
      {/* HERO SECTION */}
      {/* ===================================== */}
      <section className="w-full min-h-[70vh] flex flex-col md:flex-row">

        {/* IMAGE (TOP on mobile, RIGHT on desktop) */}
        <div className="w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-auto md:order-2">
          <img
            src="/images/floral-img.png"
            alt="Wedding"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* TEXT (BELOW on mobile, LEFT on desktop) */}
        <div className="w-full md:w-1/2 px-6 sm:px-10 lg:px-20 py-10 flex flex-col justify-center text-center md:text-left bg-[#f9f7f4] md:order-1">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#bfa37a] leading-tight tracking-wide">
HIGH-EDITORIAL <br /> FLORAL DESIGN & DECOR     </h1>

          <p className="mt-4 text-gray-600 italic text-lg">
Living Art : The Atmosphere Transformed
          </p>
       

          <Link href="/contact">
            <button className="mt-6 w-fit mx-auto md:mx-0 border border-[#bfa37a] text-[#bfa37a] px-5 py-2.5 text-xs tracking-[2px] hover:bg-[#bfa37a] hover:text-white transition">
REQUEST A FLORAL CONSULTATION            </button>
          </Link>
        </div>

      </section>


 <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          
          {/* IMAGE */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/images/shop-1.jpeg"
              alt="Wedding overview"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div>

            <h2 className="text-4xl font-serif mb-6 text-black">
              Overview
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
Our floral studio specializes in elevated, romantic, whimsical,
            modern-classic, and editorial arrangements designed to transform
            any space.            </p>

            <p className="text-gray-600 leading-relaxed">
              We specialize in elegant, modern-classic, romantic, and editorial-style weddings for couples seeking a luxury experience from start to finish.
            </p>
          </div>


        </div>
      </section>
      {/* ===================================== */}
     

      {/* ===================================== */}
      {/* WHAT WE OFFER */}
      {/* ===================================== */}
      <section className="py-24 bg-[#f8f6f2]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-serif text-center text-[#101011] mb-16">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  bg-white
                  p-8
                  rounded-3xl
                  shadow-lg
                  border border-[#ad8130]/20
                  text-lg text-black
                  hover:shadow-2xl
                  transition-all duration-500
                "
              >
                ✔ {item}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================== */}
      {/* WHY OUR FLORAL WORK STANDS OUT */}
      {/* ===================================== */}
      <section className="py-24 bg-black text-white relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-[#ad8130]/10 via-transparent to-transparent" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          <h2 className="text-4xl font-serif text-center text-[#ad8130] mb-16">
            Why Our Floral Work Stands Out
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {whyStandOut.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  bg-white/10
                  backdrop-blur-md
                  border border-[#ad8130]/30
                  p-8
                  rounded-3xl
                  text-lg
                  hover:-translate-y-1
                  transition-all duration-500
                "
              >
                {point}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </section>
  );
}
