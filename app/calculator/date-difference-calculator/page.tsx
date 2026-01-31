import { Metadata } from "next";
import DateDifferenceCalculatorClient from "./DateDifferenceCalculatorClient";
import RelatedCalculators from "@/app/components/RelatedCalculators";


export const metadata: Metadata = {
  title:
    "Date Difference Calculator | Calculate Days Between Dates – DailyCalcu",
  description:
    "Use this free date difference calculator to calculate the exact difference between two dates in days, weeks, months, and years.",
  alternates: {
    canonical: "https://dailycalcu.com/calculator/date-difference-calculator",
  },
};

/* ======================
   FAQ DATA
====================== */
const faqs = [
  {
    question: "What is a date difference calculator?",
    answer:
      "A date difference calculator determines the exact time gap between two dates in days, weeks, months, and years.",
  },
  {
    question: "Does this calculator account for leap years?",
    answer:
      "Yes, it automatically considers leap years and varying month lengths.",
  },
  {
    question: "Can I calculate future dates?",
    answer:
      "Yes, you can calculate date differences for past, present, or future dates.",
  },
  {
    question: "Is this calculator accurate?",
    answer:
      "Yes, it uses real calendar-based date calculations for accurate results.",
  },
  {
    question: "Is this date difference calculator free?",
    answer:
      "Yes, DailyCalcu’s date difference calculator is completely free to use.",
  },
];

/* ======================
   FAQ SCHEMA
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
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <DateDifferenceCalculatorClient />

      {/* RELATED CALCULATORS */}
      <RelatedCalculators
  items={[
    {
      title: "BMI Calculator",
      description: "Check your Body Mass Index and health category.",
      href: "/calculator/bmi-calculator",
      color: "blue",
    },
    {
      title: "Age Calculator",
      description: "Calculate your exact age in years, months, and days.",
      href: "/calculator/age-calculator",
      color: "green",
    },
    {
      title: "SIP Calculator",
      description: "Estimate returns on your systematic investments.",
      href: "/calculator/sip-calculator",
      color: "purple",
    },
    {
      title: "Compound Interest Calculator",
      description: "Calculate compound interest growth over time.",
      href: "/calculator/compound-interest-calculator",
      color: "orange",
    },
    {
      title: "Percentage Calculator",
      description: "Quickly calculate percentages and differences.",
      href: "/calculator/percentage-calculator",
      color: "pink",
    },
    {
      title: "Simple Interest Calculator",
      description: "Calculate simple interest for loans or savings.",
      href: "/calculator/simple-interest-calculator",
      color: "indigo",
    },
  ]}
/>


      {/* FAQ */}
      <section className="max-w-3xl mx-auto mt-20 px-4">
        <h2 className="text-2xl font-semibold mb-8">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-medium text-lg">{faq.question}</h3>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </section>
    </>
  );
}
