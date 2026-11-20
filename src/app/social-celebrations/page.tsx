import Link from "next/link";
import Image from "next/image";


export default function SocialCelebration() {
return(
  <section>
  
    <section className="w-full min-h-[50vh] flex flex-col md:flex-row">

  {/* IMAGE (TOP on mobile, RIGHT on desktop) */}
  <div className="w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-auto md:order-2">
    <img
      src="/images/social-celebration.png"
      alt="Wedding"
      className="w-full h-full object-cover object-center"
    />
  </div>

  {/* TEXT (BELOW on mobile, LEFT on desktop) */}
  <div className="w-full md:w-1/2 px-6 sm:px-10 lg:px-20 py-10 flex flex-col justify-center text-center md:text-left bg-[#f9f7f4] md:order-1">
    
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#bfa37a] leading-tight tracking-wide">
SOCIAL CELEBRATIONS 
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


<section>

  {/* Content */}
        <div className="px-6 sm:px-10 lg:px-16 py-14 lg:py-20 bg-[#faf7f3]">

          <span className="uppercase tracking-[4px] text-[#ad8130] text-sm font-medium">
            Luxury Social Events
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-black leading-tight">
            Unforgettable Social Celebrations
          </h2>

          <p className="mt-6 text-gray-700 text-lg leading-8">
            Life's milestone moments deserve more than an event—they deserve
            an experience.
          </p>

          <p className="mt-5 text-gray-700 text-lg leading-8">
            At Live N Lavish Events, we produce luxury social celebrations
            that honor your story, captivate your guests, and create lasting
            memories. From intimate anniversary dinners to grand birthday
            galas, red carpet premieres to exclusive client experiences, we
            bring the same level of design excellence and flawless execution
            that defines our wedding and corporate work.
          </p>

          <h3 className="mt-10 text-2xl font-serif text-black">
            We Produce:
          </h3>

          <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mt-6 text-gray-700">

            <div>• Milestone Birthday Celebrations (30th, 40th, 50th+)</div>

            <div>• Anniversary Parties &amp; Vow Renewals</div>

            <div>• Retirement &amp; Milestone Career Celebrations</div>

            <div>• Red Carpet Premieres &amp; VIP Events</div>

            <div>• Private Concerts &amp; Exclusive Experiences</div>

            <div>• Holiday Parties &amp; Family Reunions</div>

          </div>

          <p className="mt-10 text-lg italic text-[#555] leading-8">
            Every detail is intentionally designed. Every moment seamlessly
            executed. Every guest leaves talking about the experience.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 bg-[#bfa34a]/90  hover:bg-[#987129] transition text-white px-8 py-4 rounded-full"
          >
            Request a Consultation for Your Celebration
          </Link>

        </div>
</section>



</section>

)

}