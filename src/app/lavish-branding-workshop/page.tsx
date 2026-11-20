"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LavishBranding() {
  const highlights = [
    "Identify + Attract + Serve Your Ideal Client",
    "Present, Sell & Convert With Confidence",
    "Effective Digital Marketing Strategies",
    "Perfect Targeting Techniques",
    "Kickstart Your Brand • Know Your Value • Get Paid",
    "Strengthen Mindset & Build Authority",
    "Generate Higher Quality Leads",
    "Get Polished For Luxury Clients",
    "Earn Up To 10x More Revenue — Even On A Budget",
  ];

  return (
    <>


      {/* ================= BANNER ================= */}
      <section className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/image-4.jpeg"
          alt="Celebration Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >


            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Apply for a Workshop Collaboration
            </h1>

            <p className="mt-6 text-gray-200 text-lg">
              Our Luxury Business Workshops are designed for ambitious entrepreneurs and industry professionals seeking to elevate their brand, visibility, and profitability.

            </p>
          </motion.div>
        </div>
      </section>


      <section className="bg-gradient-to-b from-[#fbfafd] via-[#faf6ff] to-[#fffdfb] text-black">
        {/* HERO / FORM */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-serif text-center text-[#0b0b0b] mb-6"
            >
              Enhance My Brand
            </motion.h1>

            <p className="text-center text-lg max-w-3xl mx-auto text-[#111827] mb-10">
              Are You Ready To Kickstart Your Business and Take Your Brand To The Next Level Today?
            </p>

            {/* FORM CARD */}
            <div className="bg-white/70 p-8 rounded-3xl shadow-lg border border-white/30 mb-20 backdrop-blur-lg">
              <form className="space-y-10">

                {/* 🔹 BRAND INFO */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#000]">Brand Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Business Name" className="input" />
                    <input type="text" placeholder="Contact Name" className="input" />
                    <input type="url" placeholder="Website / Instagram" className="input md:col-span-2" />
                  </div>
                </div>

                {/* 🔹 BUSINESS TYPE */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#000]">Business Type</h3>
                  <select className="input w-full">
                    <option value="">What best describes your company?</option>
                    <option>Corporate Brand</option>
                    <option>Service Provider</option>
                    <option>Technology / Platform</option>
                    <option>Coach / Educator</option>
                    <option>Product-Based Business</option>
                  </select>
                </div>

                {/* 🔹 COLLAB TYPE */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#000]">Collaboration Type</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Sponsorship",
                      "Speaking Opportunity",
                      "Workshop Co-Host",
                      "Product / Service Integration",
                    ].map((item) => (
                      <label key={item} className="flex items-center gap-2">
                        <input type="checkbox" className="accent-black" />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>

                {/* 🔹 AUTHORITY */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#000]">Your Expertise</h3>
                  <textarea
                    placeholder="What expertise or value would you bring to our audience?"
                    className="input h-28"
                  />
                </div>

                {/* 🔹 AUDIENCE FIT */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#000]">Audience Fit</h3>
                  <textarea
                    placeholder="How does your brand align with entrepreneurs seeking premium growth and visibility?"
                    className="input h-28"
                  />
                </div>

                {/* 🔹 INVESTMENT */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#000]">Investment</h3>
                  <select className="input w-full">
                    <option value="">Select your investment range</option>
                    <option>$2,500 – $5,000</option>
                    <option>$5,000 – $10,000</option>
                    <option>$10,000 – $25,000</option>
                    <option>$25,000+</option>
                  </select>

                  <p className="text-sm text-[#6b7280] mt-3">
                    We prioritize partners who are committed to delivering high-value experiences and meaningful audience engagement.
                  </p>
                </div>

                {/* 🔹 ACTIVATION */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#000]">Activation Options</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Featured Speaker",
                      "Brand Sponsor",
                      "Workshop Partner",
                      "Content Collaboration",
                    ].map((item) => (
                      <label key={item} className="flex items-center gap-2">
                        <input type="checkbox" className="accent-black" />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>

                {/* 🔹 TIMELINE */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#000]">Timeline</h3>
                  <input type="text" placeholder="When are you looking to collaborate?" className="input" />
                </div>

                {/* 🔹 FINAL QUESTION */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#000]">Success Vision</h3>
                  <textarea
                    placeholder="What would make this collaboration a success for your brand?"
                    className="input h-28"
                  />
                </div>

                {/* CTA */}
                <button className="w-full bg-black text-white py-4 rounded-xl text-lg hover:bg-[#111] transition">
                  Submit Collaboration Application
                </button>
              </form>
            </div>

            {/* ABOUT / BRANDING STORY */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="rounded-3xl overflow-hidden shadow-lg border border-white/30"
              >
                <Image
                  src="/images/lady-2.jpg"
                  width={600}
                  height={600}
                  alt="Lekita Logan-Range"
                  className="object-cover w-full h-full"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-serif text-[#000000]">Hey Lavish Fam!</h2>

                <p className="text-[#111827] leading-relaxed">
                  I’m <b>Lekita Logan-Range</b>, an expert wedding planner, event designer & brand specialist
                  with over 10 years of experience.
                </p>

                <p className="text-[#111827] leading-relaxed">
                  I help wedding planners, event designers and female entrepreneurs generate more quality
                  leads and earn up to <strong>10x their current revenue</strong> through my TAQ system and
                  automated marketing technology!
                </p>

                <p className="italic text-[#111827] text-lg">“You only make money when you take action!”</p>

                <p className="text-[#111827]">
                  Together, we will create a customized marketing campaign guaranteed to bring high-quality
                  leads directly to your brand.
                </p>

                <h3 className="text-xl font-serif text-[#000000]">Take Action Queen 👑</h3>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WORKSHOP HERO */}
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-serif text-center text-[#0b0b0b] mb-6 mt-10"
          >
            Lavish Branding Workshop
          </motion.h1>

          <p className="text-center text-[#111827] mb-10 text-lg max-w-3xl mx-auto">
            (All workshops are virtual — join from anywhere in the world)
            <br />
            <span className="font-semibold">
              We Offer Group Workshops, Digital Marketing Solutions & 1-on-1 Brand Coaching
            </span>
          </p>

          {/* HIGHLIGHTS */}
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {highlights.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="p-6 bg-white/75 text-black border border-white/30 rounded-2xl shadow-sm flex items-start gap-4"
              >
                <div className="flex-shrink-0 mt-1 text-[#ad8130] text-xl">✦</div>
                <div className="text-sm leading-relaxed">{text}</div>
              </motion.div>
            ))}
          </div>

          
        </div>

      </section>
    </>
  );
}
