import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact DailyCalcu | Get in Touch",
  description:
    "Contact DailyCalcu for questions, feedback, or suggestions about our free online calculators.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      {/* PAGE TITLE */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 text-lg">
          Have questions, suggestions, or feedback? Fill out the form below and
          we’ll get back to you as soon as possible.
        </p>
      </header>

      {/* CONTACT FORM */}
      <form
        action="https://formspree.io/f/xgoyjnea"
        method="POST"
        className="space-y-6 bg-white border rounded-2xl p-6 shadow-sm"
      >
        {/* Email subject */}
        <input
          type="hidden"
          name="_subject"
          value="New message from DailyCalcu Contact Page"
        />

        {/* Redirect after success */}
        <input
          type="hidden"
          name="_redirect"
          value="https://dailycalcu.com/contact?success=true"
        />

        {/* Honeypot (anti-spam) */}
        <input type="text" name="_gotcha" className="hidden" />

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Enter your email address"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Write your message here..."
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>

        {/* Trust note */}
        <p className="text-xs text-gray-500 pt-2">
          We respect your privacy. Your information will never be shared.
        </p>
      </form>
    </section>
  );
}