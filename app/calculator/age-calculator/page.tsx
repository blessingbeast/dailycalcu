import { Metadata } from "next";
import AgeCalculatorClient from "./AgeCalculatorClient";

export const metadata: Metadata = {
  title: "Age Calculator | Calculate Exact Age in Years, Months & Days – DailyCalcu",
  description:
    "Use this free age calculator to calculate your exact age in years, months, and days based on your date of birth.",
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
    question: "What is an age calculator?",
    answer:
      "An age calculator is a tool that calculates your exact age in years, months, and days based on your date of birth.",
  },
  {
    question: "How does the age calculator work?",
    answer:
      "The age calculator works by comparing your date of birth with the current date to determine your exact age.",
  },
  {
    question: "Can this age calculator calculate age in months and days?",
    answer:
      "Yes, this age calculator shows your age in years, months, and days for precise results.",
  },
  {
    question: "Is this age calculator accurate?",
    answer:
      "Yes, the age calculator provides accurate results by using standard date calculations based on the calendar.",
  },
  {
    question: "Can I calculate age for any past or future date?",
    answer:
      "Yes, you can calculate age for any date in the past or future by selecting the appropriate reference date.",
  },
  {
    question: "Is this age calculator free to use?",
    answer:
      "Yes, the age calculator on DailyCalcu is completely free and can be used without registration.",
  },
  {
    question: "Can this calculator be used for official purposes?",
    answer:
      "This calculator is useful for general reference, but for official documents, age should be verified using legal records.",
  },
  {
    question: "Does this age calculator work for leap years?",
    answer:
      "Yes, the calculator correctly accounts for leap years when calculating age.",
  },
  {
    question: "Can I use this age calculator for children and adults?",
    answer:
      "Yes, this age calculator works for people of all ages, including children and adults.",
  },
  {
    question: "Do I need to sign up to use this calculator?",
    answer:
      "No, you do not need to sign up or provide personal information to use this age calculator.",
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
      <AgeCalculatorClient />

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
