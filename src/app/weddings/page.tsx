"use client";

import Image from "next/image";
import Link from "next/link";

export default function WeddingsPage() {
  return (
    <main className="bg-white text-[#101011]">

     {/* ================= HERO ================= */}
<section className="w-full min-h-[50vh]    flex flex-col md:flex-row">

  {/* IMAGE (TOP on mobile, RIGHT on desktop) */}
  <div className="w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-auto md:order-2">
    <img
      src="/images/Picture1.png"
      alt="Wedding"
      className="w-full h-full object-cover object-center"
    />
  </div>

  {/* TEXT (BELOW on mobile, LEFT on desktop) */}
  <div className="w-full md:w-1/2 px-6 sm:px-10 lg:px-20 py-10 flex flex-col justify-center text-center md:text-left bg-[#f9f7f4] md:order-1">
    
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#bfa37a] leading-tight tracking-wide">
      FULL-SERVICE <br /> LUXURY WEDDING <br /> PRODUCTION
    </h1>

    <p className="mt-4 text-gray-600 italic text-lg">
      The Art of the Unforgettable.
    </p>

  <Link href="/contact">
  <button className="mt-6 w-fit mx-auto md:mx-0 border border-[#bfa37a] text-[#bfa37a] px-5 py-2.5 text-xs tracking-[2px] hover:bg-[#bfa37a] hover:text-white transition">
    INQUIRE FOR AVAILABILITY
  </button>
</Link>
  </div>

</section>

      {/* ================= OVERVIEW ================= */}\
      <section>
        <div className="max-w-5xl mx-auto text-black items-center justify-center text-center px-4 sm:px-6 mt-10">
    <div className="">
      
      <p className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4 text-[#d4c27a]">
        Wedding Services
      </p>

      <h1 className="font-serif leading-tight mb-4 sm:mb-6 
                     text-2xl sm:text-3xl md:text-5xl lg:text-5xl">
        Luxury Wedding Planning • Event Management • Floral Design & Décor
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-white/90">
        Creating unforgettable weddings with calm, confidence, and elevated style.
      </p>

    </div>
  </div>
      </section>
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-serif mb-6">
              Overview
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Your wedding should be a joyful, beautifully coordinated experience not a stressful one.
              At Live N Lavish Events, we guide you through every step with clarity, expertise, and a signature design approach rooted in intentionality and excellence.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We specialize in elegant, modern-classic, romantic, and editorial-style weddings for couples seeking a luxury experience from start to finish.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/images/Picture1.png"
              alt="Wedding overview"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= FULL SERVICE ================= */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#faf9f6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/images/Picture2.png"
              alt="Full service wedding"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h3 className="text-3xl font-serif mb-4">
              Full-Service Wedding Planning
            </h3>

            <p className="text-gray-600 mb-4">
              For the couple who wants a seamless, curated, and stress-free planning journey.
            </p>

            <p className="text-gray-600 mb-6">
              We manage every detail from venue selection to vendor management, design direction,
              guest logistics, timelines, and full event execution.
            </p>

            <p className="text-[#bfa34a] font-medium mb-4">
              Perfect for:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <li>✔ Venue selection & walkthroughs</li>
              <li>✔ Vendor management</li>
              <li>✔ Budget oversight</li>
              <li>✔ Complete planning system</li>
              <li>✔ Custom design direction</li>
              <li>✔ Timeline creation</li>
              <li>✔ Rehearsal management</li>
              <li>✔ Full event-day execution</li>
              <li>✔ 2–3 professional coordinators onsite</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= DESIGN ================= */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <h3 className="text-3xl font-serif mb-4">
              Full-Service Planning + Event Design
            </h3>

            <p className="text-gray-600 mb-6">
              Everything included in Full Planning PLUS immersive design + production:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <li>✔ Custom floral design</li>
              <li>✔ 3D layouts & floorplans</li>
              <li>✔ Tablescape development</li>
              <li>✔ Custom installations</li>
              <li>✔ Luxury décor sourcing</li>
              <li>✔ Design presentation meeting</li>
              <li>✔ Onsite design direction</li>
            </ul>
          </div>

          {/* IMAGE */}
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/blogs/blog-6.jpg"
              alt="Wedding design"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= COORDINATION ================= */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#faf9f6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/blogs/blog-30.jpg"
              alt="Wedding coordination"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h3 className="text-3xl font-serif mb-4">
              Month-Of Coordination (4–6 Weeks Out)
            </h3>

            <p className="text-gray-600 mb-6">
              Designed for couples who planned everything, but need a professional team to finalize details and execute the day seamlessly.
            </p>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>✔ Vendor confirmation</li>
              <li>✔ Timeline creation</li>
              <li>✔ Rehearsal coordination</li>
              <li>✔ Bridal assistant + coordinator team</li>
              <li>✔ Full event-day execution</li>
            </ul>

            <h4 className="text-xl font-semibold mt-8">
              Day-Of Coordination
            </h4>

            <p className="text-gray-600 mt-2">
              Timeline & vendor management beginning 2 weeks prior with a 3-person team on the wedding day.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-serif mb-6">
            Let’s create a wedding that feels timeless, personal, and beautifully you.
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-4 px-10 py-3 border border-[#bfa34a] text-[#bfa34a]
            hover:bg-[#bfa34a] hover:text-black transition-all duration-300 rounded-full"
          >
            Start Your Planning Experience
          </Link>

        </div>
      </section>

    </main>
  );
}