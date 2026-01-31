import { Metadata } from "next";

/* ======================
   METADATA
====================== */
export const metadata: Metadata = {
  title: "About DailyCalcu | Free Online Calculators for Everyday Use",
  description:
    "Learn more about DailyCalcu — a free online calculator platform offering fast, accurate, and easy-to-use calculators for finance, health, age, percentages, and more.",
  alternates: {
    canonical: "https://dailycalcu.com/about",
  },
};

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      {/* PAGE TITLE */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          About DailyCalcu
        </h1>

        <p className="text-gray-700 text-lg">
          Simple, fast, and free online calculators for everyday needs.
        </p>
      </header>

      {/* INTRO */}
      <p className="text-gray-700 mb-4">
        DailyCalcu is a free online calculator platform created to help people
        solve everyday calculation needs quickly, accurately, and without
        complications.
      </p>

      <p className="text-gray-700 mb-4">
        From financial calculations like interest, SIP, and percentages to
        health and fitness tools such as BMI, calorie deficit, and ideal weight
        calculators — DailyCalcu brings everything together in one clean and
        easy-to-use platform.
      </p>

      <p className="text-gray-700 mb-6">
        Our mission is to make calculations accessible to everyone, anytime,
        anywhere — with no signups, no downloads, and no hidden costs.
      </p>

      {/* WHY SECTION */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Why Choose DailyCalcu?
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>100% free online calculators</li>
          <li>No registration or login required</li>
          <li>Fast and accurate results</li>
          <li>Mobile-friendly and responsive design</li>
          <li>Clear explanations with practical use cases</li>
        </ul>
      </section>

      {/* TRUST */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Built for Accuracy and Simplicity
        </h2>

        <p className="text-gray-700 mb-4">
          Each calculator on DailyCalcu is built using standard formulas and
          commonly accepted calculation methods. Our focus is not only on
          delivering correct results but also on helping users understand how
          those results are calculated.
        </p>

        <p className="text-gray-700">
          Whether you are a student, professional, business owner, or simply
          someone looking for quick answers, DailyCalcu is designed to support
          your everyday calculations with clarity and confidence.
        </p>
      </section>

      {/* CONTACT */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Contact Us
        </h2>

        <p className="text-gray-700 mb-2">
          Have questions, suggestions, or feedback? We’d love to hear from you.
        </p>

        <p className="text-gray-700">
          Please visit our{" "}
          <a
            href="/contact"
            className="text-blue-600 font-medium hover:underline"
          >
            Contact page
          </a>{" "}
          to get in touch with us.
        </p>
      </section>
    </section>
  );
}