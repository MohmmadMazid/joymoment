"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import GallerySlider from "../components/GallerySlider";
import BrandHighlightsSection from "../components/BrandHighlightsSection";

export default function Cityentertainment() {
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
              City Entertainment Guide
            </h1>


            <p className="mt-6 text-gray-200 text-lg max-w-3xl mx-auto">
              Discover What’s Coming to South Florida. Your quarterly source for
              concerts, festivals, comedy shows, sporting events, cultural
              experiences, community celebrations, and live entertainment
              throughout South Florida.
            </p>
          </motion.div>
        </div>
      </section>


      <section className="bg-gradient-to-b from-[#fbfafd] via-[#faf6ff] to-[#fffdfb] text-black">
        {/* HERO / FORM */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-5xl font-serif text-center mb-4">
              City Entertainment Guide
            </h2>

            <h3 className="text-2xl text-center mb-2">
              Special Winter Edition
            </h3>

            <h4 className="text-xl text-center mb-10">
              Discover What’s Coming to South Florida
            </h4>

            <p className="text-lg leading-8 text-gray-700 mb-6">
              The City Entertainment Guide is your quarterly source for upcoming
              concerts, festivals, comedy shows, theatrical performances,
              sporting events, cultural experiences, community celebrations,
              and live entertainment throughout South Florida.
            </p>

            <p className="text-lg leading-8 text-gray-700">
              Each edition is designed to help residents and visitors discover
              what is happening next, plan their upcoming experiences, and enjoy
              more of what South Florida has to offer.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
  <Link
    href="/city-entertainment-guide/latest-edition"
    className="bg-[#ad8130] text-white px-7 py-3 rounded-lg hover:bg-[#987129] transition"
  >
    View the Latest Edition
  </Link>

  <Link
    href="/contact"
    className="border border-[#ad8130] text-[#ad8130] px-7 py-3 rounded-lg hover:bg-[#ad8130] hover:text-white transition"
  >
    Advertise With Us
  </Link>
</div>

          </div>
        </section>
        {/* Explore South Florida This Season */}

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-4xl font-serif mb-8">
              Explore South Florida This Season
            </h2>

            <p className="mb-6 leading-8">
              Discover the live events, seasonal attractions, concerts,
              festivals, sporting events, and entertainment experiences coming
              to South Florida.
            </p>

            <p className="mb-6 leading-8">
              The Special Winter Edition will be available through a targeted
              print distribution of up to 2,500 copies, along with a digital
              edition available online.
            </p>

            <p className="leading-8">
              Copies will be strategically distributed through select South
              Florida businesses, venues, hotels, restaurants, community
              locations, entertainment destinations, and special events.
            </p>
<div className="text-center mt-14">
      <a
        href="/contact"
        className="bg-[#ad8130] text-white px-7 py-3 rounded-lg"
      >
        Reserve Your Advertising Placement
      </a>
    </div>

          </div>
        </section>


        {/* Promote Your Business in the City Entertainment Guide */}


        <section className="py-20 bg-[#faf7f3]">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-4xl font-serif mb-8">
              Promote Your Business in the City Entertainment Guide
            </h2>

            <p className="mb-6 leading-8">
              Connect your business with South Florida residents and visitors
              who are actively searching for places to go, events to attend,
              restaurants to experience, businesses to support, and memorable
              ways to enjoy the season.
            </p>

            <p className="mb-8 leading-8">
              Advertising in the City Entertainment Guide places your brand
              alongside the concerts, festivals, sporting events, cultural
              experiences, and community celebrations our readers are already
              planning to attend.
            </p>

            <h3 className="text-2xl font-semibold mb-5">
              Advertising opportunities are ideal for:
            </h3>

            <ul className="grid md:grid-cols-2 gap-3 list-disc pl-6">

              <li>Restaurants, bars, lounges, and brunch destinations</li>

              <li>Hotels, resorts, and staycation properties</li>

              <li>Retail stores and boutiques</li>

              <li>Beauty and wellness businesses</li>

              <li>Transportation and luxury car services</li>

              <li>Tourism and hospitality brands</li>

              <li>Event venues and entertainment companies</li>

              <li>Local attractions and lifestyle businesses</li>

              <li>Real estate and professional service providers</li>

            </ul>

            <div className="text-center mt-14">
      <a
        href="/contact"
        className="bg-[#ad8130] text-white px-7 py-3 rounded-lg"
      >
        Reserve Your Advertising Placement
      </a>
    </div>

            

          </div>
        </section>

        {/* Special Winter Edition Advertising Highlights */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-serif text-center mb-12">
      Special Winter Edition Advertising Highlights
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        "Targeted print distribution of up to 2,500 copies",
        "Digital edition available online",
        "Quarterly coverage of upcoming South Florida events",
        "Print and digital advertising opportunities",
        "Sponsored features and business spotlights",
        "Distribution through selected South Florida businesses, venues, hotels, restaurants, and community locations",
        "Additional exposure through Live N Lavish Events’ social media platforms",
        "More than [Insert Verified Number] social media impressions",
        "Access to residents and visitors actively seeking entertainment, dining, shopping, travel, and local experiences",
      ].map((item, index) => (
        <div
          key={index}
          className="bg-[#faf7f3] p-6 rounded-xl border border-[#e7d8bb] shadow-sm"
        >
          <p className="text-gray-700 leading-7">{item}</p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Expand Your Visibility Beyond the Printed Guide */}

<section className="py-20 bg-[#faf7f3]">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-serif text-center mb-10">
      Expand Your Visibility Beyond the Printed Guide
    </h2>

    <div className="space-y-6 text-lg text-gray-700 leading-8 text-center max-w-5xl mx-auto">
      <p>
        Advertising partners have the opportunity to extend their visibility
        beyond the printed publication through our digital edition and
        Live N Lavish Events’ social media platforms.
      </p>

      <p>
        Our combined print, digital, and social media presence gives
        participating businesses multiple opportunities to connect with
        South Florida residents and visitors before, during, and after they
        make their entertainment plans.
      </p>
    </div>

    <h3 className="text-3xl font-semibold text-center mt-16 mb-10">
      Estimated Seasonal Exposure
    </h3>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white rounded-xl shadow-md p-8 text-center">
        <h4 className="text-5xl font-bold text-[#ad8130]">2,500</h4>
        <p className="mt-4 text-lg">Up to Print Copies</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8 text-center">
        <h4 className="text-5xl font-bold text-[#ad8130]">Digital</h4>
        <p className="mt-4 text-lg">Edition Available Online</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8 text-center">
        <h4 className="text-5xl font-bold text-[#ad8130]">
          10,000+
        </h4>
        <p className="mt-4 text-lg">Social Media Impressions</p>
      </div>

    </div>

    <p className="text-center mt-10 text-gray-600">
      Social media impression totals will reflect the verified reporting
      period included in the advertising media kit.
    </p>

  </div>
</section>


{/* Why Advertise With Us? */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-serif text-center mb-12">
      Why Advertise With Us?
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          title: "Reach an Experience-Driven Audience",
          text: "Connect with South Florida residents and visitors who are actively deciding where to go, what to attend, where to dine, where to shop, and what to experience.",
        },
        {
          title: "Targeted Local Distribution",
          text: "Your advertisement will be featured in a publication strategically placed throughout select South Florida locations and events.",
        },
        {
          title: "Print, Digital, and Social Visibility",
          text: "Extend your reach across the printed guide, online digital edition, and Live N Lavish Events’ social media platforms.",
        },
        {
          title: "Relevant Brand Placement",
          text: "Position your business alongside the live entertainment, attractions, and experiences shaping the South Florida season.",
        },
        {
          title: "Seasonal Marketing Opportunities",
          text: "Promote your business during a time when consumers are actively attending events, dining out, shopping, traveling, celebrating, and exploring the area.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="rounded-xl border border-[#e8d8bc] p-8 shadow-sm"
        >
          <h3 className="text-2xl font-semibold mb-4">
            {item.title}
          </h3>

          <p className="text-gray-700 leading-8">
            {item.text}
          </p>
        </div>
      ))}

    </div>

    <div className="text-center mt-14">
      <a
        href="/contact"
        className="inline-block bg-[#ad8130] hover:bg-[#987129] transition text-white px-8 py-4 rounded-xl"
      >
        Reserve Your Advertising Placement
      </a>
    </div>

  </div>
</section>

{/* Featured Entertainment */}
<section className="py-20 bg-[#faf7f3]">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-serif text-center mb-12">
      Featured Entertainment
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

      {[
        "Concerts",
        "Festivals",
        "Comedy Shows",
        "Theater and Performing Arts",
        "Sporting Events",
        "Cultural Experiences",
        "Community Events",
        "Seasonal Attractions",
        "Live Music",
        "Family Entertainment",
      ].map((item) => (
        <div
          key={item}
          className="bg-white rounded-xl shadow-sm border border-[#eadbc0] py-8 px-4 text-center hover:-translate-y-1 transition"
        >
          <h3 className="font-semibold">{item}</h3>
        </div>
      ))}

    </div>

  </div>
</section>

{/* Stay Connected */}

<section className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-serif mb-8">
      Stay Connected
    </h2>

    <p className="text-lg text-gray-700 leading-8 mb-10">
      Subscribe to receive updates about upcoming South Florida events,
      entertainment announcements, and future editions of the City
      Entertainment Guide.
    </p>

    <a
      href="/contact"
      className="inline-block bg-[#ad8130] hover:bg-[#987129] transition text-white px-8 py-4 rounded-xl"
    >
      Subscribe for Entertainment Updates
    </a>

  </div>
</section>

{/* Presented by Live N Lavish Events */}
<section className="py-24 bg-[#faf7f3]">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <p className="uppercase tracking-[4px] text-[#ad8130] font-semibold mb-4">
      Presented by
    </p>

    <h2 className="text-5xl font-serif mb-10">
      Live N Lavish Events
    </h2>

    <div className="max-w-4xl mx-auto">
      <p className="text-xl leading-10 text-gray-700">
        The City Entertainment Guide helps South Florida residents and
        visitors discover what’s happening next—while giving local
        businesses a powerful opportunity to be seen alongside the
        experiences shaping the season.
      </p>
    </div>

    <div className="mt-12">
      <a
        href="/city-entertainment-guide"
        className="inline-block border-2 border-[#ad8130] text-[#ad8130] hover:bg-[#ad8130] hover:text-white transition px-8 py-4 rounded-xl"
      >
        Explore the City Entertainment Guide
      </a>
    </div>

  </div>
</section>
       
      </section>
    </>
  );
}
