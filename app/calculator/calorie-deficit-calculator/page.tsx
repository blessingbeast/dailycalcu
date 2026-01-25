import { Metadata } from "next";
import CalorieDeficitCalculatorClient from "./CalorieDeficitCalculatorClient";

export const metadata: Metadata = {
  title:
    "Calorie Deficit Calculator | Calculate Calories for Weight Loss – DailyCalcu",
  description:
    "Use this free calorie deficit calculator to estimate how many calories you should eat to lose weight safely based on your daily calorie needs.",
};
<section className="mt-12">
  <h2 className="text-xl font-semibold mb-4">
    Related Calculators
  </h2>

  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
    <li>
      <a href="/calculator/bmi-calculator" className="text-blue-600 hover:underline">
        BMI Calculator
      </a>
    </li>
    <li>
      <a href="/calculator/age-calculator" className="text-blue-600 hover:underline">
        Age Calculator
      </a>
    </li>
    <li>
      <a href="/calculator/sip-calculator" className="text-blue-600 hover:underline">
        SIP Calculator
      </a>
    </li>
    <li>
      <a href="/calculator/compound-interest-calculator" className="text-blue-600 hover:underline">
        Compound Interest Calculator
      </a>
    </li>
    <li>
      <a href="/calculator/percentage-calculator" className="text-blue-600 hover:underline">
        Percentage Calculator
      </a>
    </li>
    <li>
      <a href="/calculator/simple-interest-calculator" className="text-blue-600 hover:underline">
        Simple Interest Calculator
      </a>
    </li>
  </ul>
</section>

/* ======================
   FAQ DATA (10 QUESTIONS)
====================== */
const faqs = [
  {
    question: "What is a calorie deficit?",
    answer:
      "A calorie deficit occurs when you consume fewer calories than your body burns in a day, which can lead to weight loss over time.",
  },
  {
    question: "How does a calorie deficit help with weight loss?",
    answer:
      "When your body is in a calorie deficit, it uses stored fat as energy, which helps reduce body weight gradually.",
  },
  {
    question: "How do I calculate my calorie deficit?",
    answer:
      "You can calculate your calorie deficit by subtracting your target calorie intake from your maintenance calorie requirement.",
  },
  {
    question: "What is a safe calorie deficit?",
    answer:
      "A safe calorie deficit is usually between 300 and 500 calories per day, which supports steady and sustainable weight loss.",
  },
  {
    question: "Can a large calorie deficit be harmful?",
    answer:
      "Yes, an excessive calorie deficit may lead to fatigue, nutrient deficiencies, and muscle loss if maintained for long periods.",
  },
  {
    question: "Does this calculator consider activity level?",
    answer:
      "Yes, this calculator estimates calorie needs based on your activity level to help determine an appropriate calorie deficit.",
  },
  {
    question: "How long does it take to lose weight with a calorie deficit?",
    answer:
      "Weight loss speed varies, but a consistent calorie deficit can result in about 0.5 to 1 kg of weight loss per week.",
  },
  {
    question: "Is this calorie deficit calculator accurate?",
    answer:
      "The calculator provides an estimate using standard formulas, but individual results may vary based on metabolism and lifestyle.",
  },
  {
    question: "Can I use this calculator for weight maintenance?",
    answer:
      "Yes, by setting a zero calorie deficit, you can estimate your maintenance calorie intake.",
  },
  {
    question: "Is this calorie deficit calculator free to use?",
    answer:
      "Yes, the calorie deficit calculator on DailyCalcu is completely free and does not require registration.",
  },
];

/* ======================
   FAQ SCHEMA (JSON-LD)
====================== */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      {/* FAQ Structured Data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Calculator UI */}
      <CalorieDeficitCalculatorClient />

      {/* Visible FAQ Section (Required for Rich Results) */}
      <section className="max-w-3xl mx-auto mt-20 px-2">
        <h2 className="text-2xl font-semibold mb-8">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-medium text-lg">
              {faq.question}
            </h3>
            <p className="text-gray-600 mt-2">
              {faq.answer}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
