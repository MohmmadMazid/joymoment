"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


export default function CorporateEventsPage() {
  const productions = [
  {
    title: "Corporate Galas & Award Ceremonies",
    description:
      "Elegant, high-impact events that honor achievement and elevate your brand. Full production including venue design, AV coordination, program flow, and guest experience management.",
  },
  {
    title: "Brand Activations & Launch Events",
    description:
      "Immersive experiences that introduce your product or message with impact. We create memorable moments that drive engagement and media attention.",
  },
  {
    title: "Holiday Parties & Client Experiences",
    description:
      "Celebrate your team and clients with sophisticated gatherings that strengthen relationships and reflect your company culture.",
  },
  {
    title: "Nonprofit & Fundraising Events",
    description:
      "Mission-driven events designed to inspire generosity. We produce galas, auctions, and fundraising experiences that maximize impact and donor engagement.",
  },
  {
    title: "Conferences & Leadership Retreats",
    description:
      "Seamless production for corporate gatherings, from registration to breakout sessions to closing celebrations. We handle logistics so you can focus on content and connection.",
  },
];

  const whyChooseUs = [
    "Strategic planning + logistical excellence",
    "Luxury design & experiential storytelling",
    "Seamless communication",
    "Onsite production management",
    "Vendor & venue coordination",
    "Elevated guest experiences",
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
            src="/images/corporate-banner.png"
            alt="Wedding"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* TEXT (BELOW on mobile, LEFT on desktop) */}
        <div className="w-full md:w-1/2 px-6 sm:px-10 lg:px-20 py-10 flex flex-col justify-center text-center md:text-left bg-[#f9f7f4] md:order-1">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#bfa37a] leading-tight tracking-wide">
        Corporate Event Planning
          </h1>

          <p className="mt-4 text-gray-600 italic text-lg">
        Event Production • Design & Décor
          </p>

          <Link href="/contact">
            <button className="mt-6 w-fit mx-auto md:mx-0 border border-[#bfa37a] text-[#bfa37a] px-5 py-2.5 text-xs tracking-[2px] hover:bg-[#bfa37a] hover:text-white transition">
              INQUIRE FOR AVAILABILITY
            </button>
          </Link>
        </div>

      </section>

    

      {/* ===================================== */}
      {/* WHAT WE PRODUCE */}
      {/* ===================================== */}
      <section className="py-24 bg-[#f8f6f2]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-serif text-center text-[#101011] mb-10">
            What We Produce
          </h2>
   <p className="text-lg text-gray-700 leading-relaxed text-center">
            We partner with brands, companies, and organizations to design and
            produce elevated events that inspire connection, strengthen culture,
            and leave a lasting impression.
          </p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
  {productions.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-3xl shadow-lg border border-[#ad8130]/20 hover:shadow-2xl transition-all duration-500"
    >
      <h3 className="text-2xl font-serif text-[#101011] mb-4">
        {item.title}
      </h3>

      <p className="text-gray-700 leading-8 text-base">
        {item.description}
      </p>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* ===================================== */}
      {/* WHY BRANDS CHOOSE US */}
      {/* ===================================== */}
      <section className="py-24 bg-black text-white relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-[#ad8130]/10 via-transparent to-transparent" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          <h2 className="text-4xl font-serif text-center text-[#ad8130] mb-16">
            Why Brands Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((point, i) => (
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
                ✔ {point}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* CTA SECTION */}
      {/* ===================================== */}
      <section className="py-24 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-serif text-[#101011] mb-8">
            Let’s bring your vision to life with excellence.
          </h2>

          <a
            href="/contact"
            className="inline-block bg-[#ad8130] text-white px-10 py-4 rounded-full shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Inquire About Corporate Events
          </a>

        </div>
      </section>

    </section>
  );
}
