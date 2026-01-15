import Link from "next/link";

export default function HomePage() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      
      {/* HERO */}
      <div className="py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Simple & Free Online Calculators
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          DailyCalcu helps you calculate finance, health, salary, and everyday
          values instantly using accurate and easy-to-use calculators.
        </p>

        <Link
          href="/calculator"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Browse All Calculators →
        </Link>
      </div>

      {/* FEATURED CALCULATORS */}
      <div className="mb-20" >
        <h2 className="text-3xl font-semibold mb-8 text-center mt-10">
          Popular Calculators
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Calorie Deficit Calculator",
              href: "/calculator/calorie-deficit-calculator",
              desc: "Find how many calories you should eat to lose weight.",
            },
            {
              title: "BMR & Calorie Calculator",
              href: "/calculator/bmr-calorie-calculator",
              desc: "Calculate your daily calorie needs.",
            },
            {
              title: "SIP Calculator",
              href: "/calculator/sip-calculator",
              desc: "Estimate SIP returns and investment growth.",
            },
            {
              title: "Compound Interest Calculator",
              href: "/calculator/compound-interest-calculator",
              desc: "Calculate compound interest easily.",
            },
            {
              title: "GST Calculator",
              href: "/calculator/gst-calculator",
              desc: "Add or remove GST from any amount.",
            },
            {
              title: "Age Calculator",
              href: "/calculator/age-calculator",
              desc: "Calculate your exact age in years, months, and days.",
            },
          ].map((calc) => (
            <Link
              key={calc.title}
              href={calc.href}
              className="border rounded-xl p-6 hover:shadow-md transition bg-white"
            >
              <h3 className="text-lg font-semibold mb-2">
                {calc.title}
              </h3>
              <p className="text-sm text-gray-600">{calc.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* SEO CONTENT */}
      <div className="max-w-3xl mx-auto mb-24 text-gray-700">
        <h2 className="text-2xl font-semibold mb-4 mt-4">
          Why Use DailyCalcu?
        </h2>

        <p className="mb-4">
          DailyCalcu is designed to provide fast, accurate, and free online
          calculators for everyday needs. Whether you want to calculate
          financial returns, health metrics, or simple percentages, DailyCalcu
          offers reliable tools without requiring sign-ups.
        </p>

        <p>
          Our calculators are optimized for mobile and desktop use, ensuring
          a smooth experience across all devices.
        </p>
      </div>
    </section>
  );
}
