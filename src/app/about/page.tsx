"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CTA from "../components/cta";
import Link from "next/link";
import Approach from "../components/approach";
import {
  Award,
  BriefcaseBusiness,
  GraduationCap,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  return (
    <section className="bg-[#fffaf3] overflow-hidden ">

      {/* HERO SECTION */}
      <section className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[70vh] overflow-hidden">

        <Image
          src="/images/about-page.jpeg"
          alt="Luxury Services"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Hero Text */}

      </section>

      {/* Soft Background Overlay */}

      <section className="py-20 bg-[#f8f6f2]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#101011]">
              Meet Lekita Range
            </h2>

            <p className="uppercase tracking-[4px] text-[#ad8130] mt-3 text-sm font-medium">
              Founder • CEO • Creative Director
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-serif mb-8 text-[#101011]">
Founder, CEO & Creative Director of Live N Lavish Events
              </h3>

              <div className="space-y-6 text-lg leading-8 text-gray-700">

                <p>
                  I'm <span className="font-semibold text-[#ad8130]">Lekita Range</span>,
                  the creative heart behind Live N Lavish Events, where luxury
                  celebration meets intentional design.
                </p>

                <p>
                  For over 15 years, I've produced elevated weddings,
                  destination experiences, corporate events, and luxury floral
                  installations throughout South Florida and beyond.
                </p>

                <p>
                  With an MBA, Bachelor's in Communications & Hospitality,
                  and global accreditation as a Wedding & Event Designer,
                  I bring creativity, strategy, and operational excellence
                  to every celebration.
                </p>

                <p>
                  I've produced over 200 events including high-end weddings,
                  celebrity experiences, corporate galas, and brand activations
                  all known for emotional impact and refined elegance.
                </p>

                <p className="font-medium text-[#101011]">
                  My mission is to create unforgettable experiences that feel
                  beautifully designed, seamlessly executed, and deeply personal.
                </p>

              </div>

              <Link
                href="/contact"
                className="inline-flex mt-10 bg-[#ad8130] text-white px-8 py-4 rounded-full hover:bg-[#987129] transition"
              >
                Request Consultation
              </Link>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
             <div className="relative max-w-md mx-auto rounded-3xl overflow-hidden shadow-xl h-[500px]">
  <Image
    src="/images/lady-image-2.jpg"
    alt="Lekita Range"
    fill
    className="object-cover object-top"
  />
</div>

             <div className="grid grid-cols-2 gap-4 mt-6">

  <div className="bg-white rounded-xl p-3 shadow-md text-center border">
    <div className="text-3xl mb-2">🎉</div>
    <h4 className="font-bold text-xl text-[#ad8130]">200+</h4>
    <p className="text-gray-600 mt-1 text-sm">
      Events Produced
    </p>
  </div>

  <div className="bg-white rounded-xl p-3 shadow-md text-center border">
    <div className="text-3xl mb-2">⭐</div>
    <h4 className="font-bold text-xl text-[#ad8130]">15+</h4>
    <p className="text-gray-600 mt-1 text-sm">
      Years Experience
    </p>
  </div>

  <div className="bg-white rounded-xl p-3 shadow-md text-center border">
    <div className="text-3xl mb-2">🎓</div>
    <h4 className="font-bold text-lg text-[#ad8130]">
      MBA + BA
    </h4>
    <p className="text-gray-600 mt-1 text-sm leading-5">
      Hospitality & Communications
    </p>
  </div>

  <div className="bg-white rounded-xl p-3 shadow-md text-center border">
    <div className="text-3xl mb-2">🌎</div>
    <h4 className="font-bold text-lg text-[#ad8130]">
      Global
    </h4>
    <p className="text-gray-600 mt-1 text-sm">
      Design Accreditation
    </p>
  </div>

</div>

            </motion.div>

          </div>

        </div>
      </section>
      <Approach />
      <CTA />
    </section>
  );
}
