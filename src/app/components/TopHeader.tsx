"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function TopHeader() {
  return (
    <div className="hidden md:block w-full bg-[#bfa34a]/90 backdrop-blur-md text-white text-[13px] tracking-wide">
      
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT – EMAIL */}
        <div className="flex items-center gap-2">
          <HiOutlineMail className="text-[16px] opacity-80" />
          <a
            href="mailto:info@livenlavishevents.com"
            className="hover:text-black/80 transition"
          >
            hello@livenlavishevents.com
          </a>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">

            <a
              href="https://www.facebook.com/LavishEventPlanning/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-black transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/live_n_lavish"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-black transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://x.com/livenlavish"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-black transition duration-300"
            >
              <FaTwitter />
            </a>

          </div>

          {/* DIVIDER */}
          <div className="w-px h-4 bg-white/40" />

          {/* ✅ UPDATED CTA */}
          <Link
            href="/partnership"
            className="relative text-[12px] tracking-[0.15em] uppercase hover:text-black transition"
          >
            Partnerships
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 hover:w-full"></span>
          </Link>

          {/* ✅ FIXED LINK */}
          <Link
            href="/request-a-private-consultation"
            className="relative text-[12px] tracking-[0.15em] uppercase hover:text-black transition"
          >
            Request a Private Consultation
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 hover:w-full"></span>
          </Link>

        </div>
      </div>
    </div>
  );
}