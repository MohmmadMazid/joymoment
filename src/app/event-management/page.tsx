import Link from "next/link";

export default function EventManagemnet() {
  return (
    <section>




      <section className="w-full min-h-[50vh] flex flex-col md:flex-row">

        {/* IMAGE (TOP on mobile, RIGHT on desktop) */}
        <div className="w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-[550px] md:order-2">
          <img
            src="/images/event-banner.png"
            alt="Wedding"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* TEXT (BELOW on mobile, LEFT on desktop) */}
        <div className="w-full md:w-1/2 px-6 sm:px-10 lg:px-20 py-10 flex flex-col justify-center text-center md:text-left bg-[#f9f7f4] md:order-1">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#bfa37a] leading-tight tracking-wide">
            Full-Service Event Management
          </h1>

          <p className="mt-4 text-gray-600 italic text-lg">
            From Vision to Reality-We Handle Everything

          </p>

          <Link href="/contact">
            <button className="mt-6 w-fit mx-auto md:mx-0 border border-[#bfa37a] text-[#bfa37a] px-5 py-2.5 text-xs tracking-[2px] hover:bg-[#bfa37a] hover:text-white transition">
              INQUIRE FOR AVAILABILITY
            </button>
          </Link>
        </div>

      </section>




      <section>

        {/* Content */}
        <div className="px-6 sm:px-10 lg:px-16 py-14 lg:py-20 bg-[#faf7f3]">



          <p className="mt-6 text-gray-700 text-lg leading-8">
            Life's milestone moments deserve more than an event—they deserve
            an experience.
          </p>

          <p className="mt-5 text-gray-700 text-lg leading-8">
            Our event management services ensure your celebration is flawlessly executed from concept through completion. Whether you need full planning, partial coordination, or  day-of production, our team brings strategic thinking, creative problem-solving, and operational excellence to every event.

          </p>

          <h3 className="mt-10 text-2xl font-serif text-black">
            What We Manage:
          </h3>

          <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mt-6 text-gray-700">

            <div>✓ Vendor sourcing, coordination, and management

            </div>

            <div>✓ Budget development and tracking
            </div>

            <div>✓ Timeline creation and day-of execution
            </div>

            <div>✓ Guest experience and logistics planning
            </div>

            <div>✓ On-site production and troubleshooting
            </div>



          </div>

          <p className="mt-10 text-lg italic text-[#555] leading-8">
            We don't just plan events-we produce experiences that run like clockwork while feeling effortless.

          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 bg-[#bfa34a]/90  hover:bg-[#987129] transition text-white px-8 py-4 rounded-full"
          >
            Let's Discuss Your Event Needs

          </Link>

        </div>
      </section>
    </section>
  )
}