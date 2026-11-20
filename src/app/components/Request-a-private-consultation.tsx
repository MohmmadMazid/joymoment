"use client";
import { motion } from "framer-motion";
import Link from "next/link";


export default function RequestPrivateConsultation() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO BANNER ================= */}
      {/* HERO SECTION */}
      {/* ===================================== */}
      <section className="w-full min-h-[70vh] flex flex-col md:flex-row">

        {/* IMAGE (TOP on mobile, RIGHT on desktop) */}
        <div className="w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-auto md:order-2">
          <img
            src="/images/dd1.jpg.jpeg"
            alt="Wedding"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* TEXT (BELOW on mobile, LEFT on desktop) */}
        <div className="w-full md:w-1/2 px-6 sm:px-10 lg:px-20 py-10 flex flex-col justify-center text-center md:text-left bg-[#f9f7f4] md:order-1">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#bfa37a] leading-tight tracking-wide">
REQUEST A PRIVATE  <br /> CONSULATATION    </h1>

          
             <p className="mt-4 text-gray-600 italic text-lg">
            To ensure every detail receives our master-level attention and award-winning design, we only accept a limited number of lavish event experiences each season.
          </p>

          <Link href="/contact">
            <button className="mt-6 w-fit mx-auto md:mx-0 border border-[#bfa37a] text-[#bfa37a] px-5 py-2.5 text-xs tracking-[2px] hover:bg-[#bfa37a] hover:text-white transition">
REQUEST A FLORSAL CONSULTATION            </button>
          </Link>
        </div>

      </section>

      {/* ================= FORM ================= */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-4xl mx-auto">

        <form className="space-y-6 sm:space-y-8 md:space-y-10">

          {/* STORY */}
          <div>
            <label className="block text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3 text-gray-600">
              Tell us your story
            </label>
            <textarea
              rows={5}
              placeholder="Share your vision, your story, and what makes this event special..."
              className="w-full border border-gray-300 p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:border-black transition resize-none"
            />
          </div>

          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:border-black w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:border-black w-full"
            />
          </div>

          {/* EVENT DETAILS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            <input
              type="text"
              placeholder="Event Date"
              className="border border-gray-300 p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:border-black w-full"
            />
            <input
              type="text"
              placeholder="Event Location"
              className="border border-gray-300 p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:border-black w-full"
            />
          </div>

          {/* TARGET INVESTMENT */}
          <div>
            <label className="block text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3 text-gray-600">
              What is your target investment?
            </label>
            <input
              type="text"
              placeholder="$25k–$50k, $50k–$75k, $75k–$150k, $150k+"
              className="w-full border border-gray-300 p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:border-black"
            />
          </div>

          {/* FLORAL INSPIRATION */}
          <div>
            <label className="block text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3 text-gray-600">
              Who is your Floral Inspiration?
            </label>
            <input
              type="text"
              placeholder="Designers, Pinterest, themes, moods..."
              className="w-full border border-gray-300 p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:border-black"
            />
          </div>

          {/* REFERRAL */}
          <div>
            <label className="block text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3 text-gray-600">
              How did you hear about Live N Lavish Events?
            </label>
            <input
              type="text"
              placeholder="Instagram, Google, Referral..."
              className="w-full border border-gray-300 p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:border-black"
            />
          </div>

          {/* SUBMIT */}
          <div className="pt-2 sm:pt-4 md:pt-6">
            <button className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-xs sm:text-sm tracking-widest hover:bg-gray-800 transition">
              SUBMIT INQUIRY
            </button>
          </div>

        </form>
      </section>

    </main>
  );
}