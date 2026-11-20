"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Meet Lekita Logan Range",
    description:
      "In the world of luxury wedding planning, few names command as much respect and admiration as Lekita Range. As the CEO of Live N Lavish Events and founder of the Lavish Branding Academy, Lekita has spent over a decade transforming wedding dreams into breathtaking realities.",
    image: "/images/blog-image.jpg",
    link: "/blogs/meet-lekita-logan-range",
  },
];

export default function Blog() {
  return (
    <section className="bg-[#fffaf4] text-[#1a1a1a] min-h-screen">

      {/* ---------------- HERO SECTION ---------------- */}
      <div className="pt-20 pb-12 md:pt-24 md:pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-black">
          Our Blogs
        </h1>
        <p className="mt-5 text-lg text-black max-w-xl mx-auto leading-relaxed">
          Insights, Stories & Knowledge
        </p>
      </div>

      {/* ---------------- BLOG GRID ---------------- */}
      <div className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">
        <div className="grid gap-8 md:gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col"
            >
              
              {/* IMAGE */}
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 md:p-7 flex flex-col flex-grow">
                
                <h3 className="text-xl font-semibold mb-3 leading-snug">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {blog.description}
                </p>

                <Link
                  href={blog.link}
                  className="inline-block text-[#B9AA52] font-semibold tracking-wide hover:underline"
                >
                  Read More →
                </Link>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}