"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutBlock() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center gap-12">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/lavish-5.png"
              alt="Luxury Wedding & Event Planning - Live N Lavish Events"
              width={600}
              height={800}
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <span className="uppercase tracking-[5px] text-[#ad8130] text-xs font-semibold">
            What We Do
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-2xl font-light text-black mt-4 mb-6">
            Full-Service Wedding & Event Production          </h2>

          <p className="text-gray-800 leading-relaxed mb-5">
             <strong className="text-[#ad8130]">Live N Lavish Events</strong>  is a full-service wedding and event production company specializing in elevated celebrations, corporate experiences, and luxury floral design.
 </p>

          <p className="text-gray-800 leading-relaxed mb-6">
We serve discerning clients throughout South Florida and destination locations worldwide, delivering seamless planning, custom design, premium decor rentals, and flawless execution.
          </p>
          <p className="text-gray-800 leading-relaxed mb-6">
  Our team produces weddings, corporate galas, brand activations, and social celebrations known for their emotional impact, refined elegance, and unforgettable guest experiences.

</p>
          <p className="text-gray-800 leading-relaxed mb-6">
  From intimate gatherings to large-scale productions, we handle every detail so you can be fully present for your moment.

</p>
         

          <Link
            href="/services"
            className="inline-block bg-[#ad8130] text-white px-8 py-3 rounded-full font-medium hover:bg-[#c8953f] transition"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
