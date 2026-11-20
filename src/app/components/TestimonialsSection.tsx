"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ash Harris",
    event: "Getting Married",
    title: "Very Elegant Wedding!",
    review:
      "The wedding I attended was very elegant, from the décor to the ambiance of the venue. Every detail was beautifully executed, and I was truly impressed. I would definitely recommend Live N Lavish Events to anyone planning an upcoming wedding.",
  },
  {
    name: "James E.",
    event: "Wedding Guest • 04/20/2020",
    title: "Incredible Wedding Experience To Remember",
    review:
      "I’m really impressed with Live N Lavish Events. I attended a wedding that reminded me of Coming to America. The décor was unbelievable, the reception was elegant, and every detail was breathtaking. The team was polite, professional, helpful, and second to none. Couples simply cannot go wrong choosing Live N Lavish Events.",
  },
  {
    name: "Stephanie Whaley",
    event: "Married on 05/18/2019",
    title: "Amazing Day Of Coordinator",
    review:
      "Lekita was fantastic at running our destination wedding. She was a pleasure to work with and made our day completely stress-free. Although we only hired her as our day-of coordinator, she went above and beyond for us throughout the planning process. Thank you, Lekita!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#fffaf5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-black">
            Client Testimonials
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            Hear from couples and guests who trusted Live N Lavish Events to
            create unforgettable celebrations filled with elegance, beauty,
            and exceptional service.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-[#efe5d3] hover:shadow-xl transition"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#ad8130] text-[#ad8130]"
                  />
                ))}
              </div>

              <span className="text-sm uppercase tracking-wider text-[#ad8130] font-medium">
                Rated 5.0
              </span>

              <h3 className="text-2xl font-serif mt-4 mb-4 text-black">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-8 mb-8">
                "{item.review}"
              </p>

              <div className="border-t pt-5">
                <h4 className="font-semibold text-lg text-black">
                  {item.name}
                </h4>

                <p className="text-gray-500 text-sm mt-1">
                  {item.event}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}