"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ContactFormValues } from "./page";

interface ContactFormProps {
  onSubmitAction?: (
    data: ContactFormValues
  ) => Promise<{ ok: boolean; error?: string }>;
}

const INITIAL_FORM_STATE: ContactFormValues = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  eventDate: "",
  eventLocation: "",
  eventType: "",
  investment: "",
  message: "",
};

export default function ContactForm({ onSubmitAction }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormValues>(INITIAL_FORM_STATE);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setSubmitted(false);
    setErrorMessage("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setSubmitted(false);
    setErrorMessage("");

    try {
      let res: { ok: boolean; error?: string };
      if (onSubmitAction) {
        res = await onSubmitAction(formData);
      } else {
        const response = await fetch("/contact.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        res = await response.json();
      }

      if (!res.ok) {
        throw new Error(res.error || "Failed to send message. Please try again.");
      }
      setSubmitted(true);
      setFormData(INITIAL_FORM_STATE);
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full p-4 rounded-xl border border-[#000000] bg-white text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#ad8130]";

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-[#000000]">
      {/* SUCCESS MESSAGE */}
      {submitted && (
        <div
          role="status"
          aria-live="polite"
          className="mb-6 rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-center text-emerald-900"
        >
          <p className="font-semibold text-lg">Thank You!</p>
          <p>
            Your inquiry has been submitted successfully. Our team will be in touch within 24–48 hours.
          </p>
        </div>
      )}

      {/* ERROR MESSAGE */}
      {errorMessage && (
        <div
          role="alert"
          className="mb-6 rounded-xl border border-red-300 bg-red-50 p-4 text-center text-red-900"
        >
          {errorMessage}
        </div>
      )}

      <form className="grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
        {/* FULL NAME */}
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          placeholder="Full Name"
          required
          autoComplete="name"
          className={inputClasses}
          onChange={handleInputChange}
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email Address"
          required
          autoComplete="email"
          className={inputClasses}
          onChange={handleInputChange}
        />

        {/* PHONE */}
        <input
          type="tel"
          name="phone"
          value={formData.phone || ""}
          placeholder="Phone Number"
          autoComplete="tel"
          className={inputClasses}
          onChange={handleInputChange}
        />

        {/* COMPANY */}
        <input
          type="text"
          name="company"
          value={formData.company || ""}
          placeholder="Company / Organization (Optional)"
          autoComplete="organization"
          className={inputClasses}
          onChange={handleInputChange}
        />

        {/* EVENT DATE */}
        <input
          type="date"
          name="eventDate"
          value={formData.eventDate || ""}
          aria-label="Event Date"
          className={inputClasses}
          onChange={handleInputChange}
        />

        {/* EVENT LOCATION */}
        <input
          type="text"
          name="eventLocation"
          value={formData.eventLocation || ""}
          placeholder="Event Location"
          className={inputClasses}
          onChange={handleInputChange}
        />

        {/* EVENT TYPE */}
        <select
          name="eventType"
          value={formData.eventType || ""}
          onChange={handleInputChange}
          className={inputClasses}
        >
          <option value="">Event Type</option>
          <option value="Luxury Wedding">Luxury Wedding</option>
          <option value="Corporate Event">Corporate Event</option>
          <option value="Private Celebration">Private Celebration</option>
          <option value="Destination Event">Destination Event</option>
          <option value="Other">Other</option>
        </select>

        {/* INVESTMENT RANGE */}
        <select
          name="investment"
          value={formData.investment || ""}
          onChange={handleInputChange}
          className={inputClasses}
        >
          <option value="">Estimated Investment</option>
          <option value="$15,000 - $30,000">$15,000 - $30,000</option>
          <option value="$30,000 - $50,000">$30,000 - $50,000</option>
          <option value="$50,000 - $100,000">$50,000 - $100,000</option>
          <option value="$100,000 - $250,000">$100,000 - $250,000</option>
          <option value="$250,000+">$250,000+</option>
          <option value="Not sure / Need guidance">Not sure / Need guidance</option>
        </select>

        {/* MESSAGE */}
        <textarea
          name="message"
          value={formData.message}
          placeholder="Tell us about your vision..."
          onChange={handleInputChange}
          required
          className={`${inputClasses} md:col-span-2 h-32 resize-y`}
        />

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 bg-[#ad8130] hover:bg-[#000000] disabled:opacity-60 disabled:cursor-not-allowed text-white text-lg py-4 rounded-xl transition-all duration-300 tracking-wide uppercase cursor-pointer"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-3">
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Sending Your Inquiry...
            </span>
          ) : (
            "Request a Private Proposal"
          )}
        </button>
      </form>
    </div>
  );
}
