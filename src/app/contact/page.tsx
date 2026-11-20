import Image from "next/image";
import { z } from "zod";
import ContactForm from "./ContactForm";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  eventDate: z.string().optional(),
  eventLocation: z.string().optional(),
  eventType: z.string().optional(),
  investment: z.string().optional(),
  message: z.string().min(5, "Please tell us a bit about your event"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  return (
    <div className="bg-[#fffaf4]">
      <section className="relative h-[40vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/home20-slider_2.jpeg"
          alt="Plan Your Event With Us"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-white font-serif text-3xl md:text-5xl lg:text-6xl mb-4 drop-shadow-lg">
            Begin Your Lavish Experience
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We take on a limited number of events each year to ensure every client receives an exceptional, personalized experience. Please share your vision below, and our team will be in touch within 24–48 hours.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-serif text-[#8f8c88] mb-4">
          “Do You Need A Wedding Planner, Event Planner Or Event Designer?”
        </h2>
        <p className="text-[#020202] text-lg max-w-3xl mx-auto leading-relaxed mb-6">
          Provide us with your event needs below.
        </p>
        <p className="text-[#000000] text-lg font-light">
          Do You Want A Picture Perfect Wedding Day?
        </p>
        <p className="mt-4 text-[#101010] text-lg">
          Are You Ready For A Wedding That Will Exceed Expectations?
        </p>
        <p className="mt-4 text-[#000000] text-lg font-medium italic">
          “We Will Make Your Vision a Reality”
        </p>
        <p className="mt-4 text-[#000000] text-lg font-medium">
          The first step to receiving your <strong>FREE Wedding & Special Event Consultation</strong> is filling out the short form below.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="bg-white/80 backdrop-blur-xl shadow-xl border border-[#efd8bd] rounded-3xl p-8 text-center">
          <h3 className="text-xl font-semibold text-[#000000] mb-2">Contact Information</h3>
          <p className="text-[#000000] text-lg">Phone: (561) 574-1246</p>
          <p className="text-[#000000] mt-4">
            <strong>Business Hours:</strong><br />
            8am – 7pm Mon–Fri<br />
            9am – 2pm Sat<br />
            Closed Sunday
          </p>
          <p className="text-[#000000] mt-4">
            We service events in Palm Beach County, Central Florida, Miami, Fort Lauderdale & surrounding areas.
          </p>
          <p className="text-[#000000] mt-4 italic">
            We also travel to exclusive destinations & states upon request.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        <h3 className="text-center text-3xl font-serif text-[#000000] mb-10">
          Receive Your Free Wedding & Special Event Consultation
        </h3>
        <ContactForm />
      </div>
    </div>
  );
}