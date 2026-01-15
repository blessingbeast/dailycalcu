import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About DailyCalcu | Free Online Calculators",
  description:
    "Learn more about DailyCalcu, a platform providing free and easy-to-use online calculators for everyday needs.",
};

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About DailyCalcu</h1>

      <p className="text-gray-700 mb-4">
        DailyCalcu is a free online calculator platform designed to help people
        solve everyday calculation needs quickly and accurately.
      </p>

      <p className="text-gray-700 mb-4">
        We provide a wide range of calculators covering finance, health,
        fitness, dates, percentages, and more — all in one simple and
        user-friendly place.
      </p>

      <p className="text-gray-700 mb-4">
        Our goal is to make calculations easy, accessible, and reliable for
        everyone, without requiring signups or downloads.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Why DailyCalcu?
      </h2>

      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Free and easy-to-use calculators</li>
        <li>No sign-up required</li>
        <li>Accurate and fast results</li>
        <li>Mobile-friendly design</li>
      </ul>

      <p className="text-gray-700 mt-6">
        If you have any questions or suggestions, feel free to contact us at:
        <br />
        <strong>contact@dailycalcu.com</strong>
      </p>
    </section>
  );
}
