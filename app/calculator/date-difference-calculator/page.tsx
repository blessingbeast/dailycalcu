import { Metadata } from "next";
import DateDifferenceCalculatorClient from "./DateDifferenceCalculatorClient";

export const metadata: Metadata = {
  title:
    "Date Difference Calculator | Calculate Days Between Dates – DailyCalcu",
  description:
    "Use this free date difference calculator to calculate the exact difference between two dates in days, months, and years.",
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
    question: "What is a date difference calculator?",
    answer:
      "A date difference calculator is a tool that calculates the exact time difference between two dates in days, months, and years.",
  },
  {
    question: "How does the date difference calculator work?",
    answer:
      "The calculator compares the start date and end date to determine the total difference using standard calendar calculations.",
  },
  {
    question: "Can this calculator show difference in days only?",
    answer:
      "Yes, the date difference calculator can show the difference in total days between two selected dates.",
  },
  {
    question: "Does the calculator account for leap years?",
    answer:
      "Yes, the calculator correctly accounts for leap years and varying month lengths when calculating date differences.",
  },
  {
    question: "Can I calculate date difference for past and future dates?",
    answer:
      "Yes, you can calculate the date difference for any past or future dates using this calculator.",
  },
  {
    question: "Is this date difference calculator accurate?",
    answer:
      "Yes, the calculator provides accurate results based on standard calendar rules and date calculations.",
  },
  {
    question: "Can this calculator be used for official purposes?",
    answer:
      "This calculator is useful for general reference, but for official or legal purposes, dates should be verified through official records.",
  },
  {
    question: "Can I calculate the number of working days between two dates?",
    answer:
      "This calculator shows total date difference. It does not exclude weekends or holidays unless specified separately.",
  },
  {
    question: "Is this date difference calculator free to use?",
    answer:
      "Yes, the date difference calculator on DailyCalcu is completely free and can be used without registration.",
  },
  {
    question: "Do I need to sign up to use this calculator?",
    answer:
      "No, you do not need to sign up or provide personal information to use this calculator.",
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
      <DateDifferenceCalculatorClient />

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
