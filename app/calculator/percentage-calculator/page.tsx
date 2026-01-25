import { Metadata } from "next";
import PercentageCalculatorClient from "./PercentageCalculatorClient";

export const metadata: Metadata = {
  title: "Percentage Calculator | Calculate Percentage Easily – DailyCalcu",
  description:
    "Use this free percentage calculator to calculate percentages, percentage increase or decrease, and percentage of a number quickly and accurately.",
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
    question: "What is a percentage?",
    answer:
      "A percentage is a way of expressing a number as a fraction of 100. It is commonly used to compare values or show proportions.",
  },
  {
    question: "How do I calculate percentage?",
    answer:
      "To calculate percentage, divide the part by the whole and multiply the result by 100.",
  },
  {
    question: "How do I calculate percentage increase?",
    answer:
      "Percentage increase is calculated by dividing the increase amount by the original value and multiplying by 100.",
  },
  {
    question: "How do I calculate percentage decrease?",
    answer:
      "Percentage decrease is calculated by dividing the decrease amount by the original value and multiplying by 100.",
  },
  {
    question: "Can this calculator find percentage of a number?",
    answer:
      "Yes, this calculator can find what percentage one number is of another number.",
  },
  {
    question: "Is this percentage calculator accurate?",
    answer:
      "Yes, the percentage calculator uses standard mathematical formulas to provide accurate results.",
  },
  {
    question: "Can this calculator be used for exam or academic calculations?",
    answer:
      "Yes, this calculator is useful for academic, exam, and general mathematical calculations.",
  },
  {
    question: "Can I use this calculator for business calculations?",
    answer:
      "Yes, it can be used for discounts, profit margins, growth rates, and other business-related percentage calculations.",
  },
  {
    question: "Does this calculator support percentage change?",
    answer:
      "Yes, it can calculate percentage change, including increase and decrease between two values.",
  },
  {
    question: "Is this percentage calculator free to use?",
    answer:
      "Yes, the percentage calculator on DailyCalcu is completely free and does not require registration.",
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
      <PercentageCalculatorClient />

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
