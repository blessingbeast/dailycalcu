import { Metadata } from "next";
import SimpleInterestCalculatorClient from "./SimpleInterestCalculatorClient";
import RelatedCalculators from "@/app/components/RelatedCalculators";


/* ======================
   METADATA
====================== */
export const metadata: Metadata = {
  title: "Simple Interest Calculator | Calculate Simple Interest – DailyCalcu",
  description:
    "Use this free simple interest calculator to calculate interest and total amount based on principal, rate of interest, and time period.",
  alternates: {
    canonical: "https://dailycalcu.com/calculator/simple-interest-calculator",
  },
};

/* ======================
   FAQ DATA
====================== */
const faqs = [
  {
    question: "What is simple interest?",
    answer:
      "Simple interest is a method of calculating interest where interest is calculated only on the original principal amount.",
  },
  {
    question: "How is simple interest calculated?",
    answer:
      "Simple interest is calculated using the formula SI = (Principal × Rate × Time) ÷ 100.",
  },
  {
    question: "What is the difference between simple and compound interest?",
    answer:
      "Simple interest is calculated only on the principal, whereas compound interest is calculated on principal plus accumulated interest.",
  },
  {
    question: "Is simple interest used for loans?",
    answer:
      "Yes, many short-term loans and personal lending agreements use simple interest.",
  },
  {
    question: "Can this calculator be used for savings?",
    answer:
      "Yes, it can estimate returns on savings or deposits that follow simple interest.",
  },
  {
    question: "Is simple interest calculated yearly?",
    answer:
      "Yes, it is usually calculated annually but can be adjusted for months or days.",
  },
  {
    question: "Does this calculator include taxes?",
    answer:
      "No, it only calculates interest and does not include taxes or fees.",
  },
  {
    question: "Is this calculator accurate?",
    answer:
      "Yes, it uses standard mathematical formulas for accuracy.",
  },
  {
    question: "Can students use this calculator?",
    answer:
      "Yes, it is widely used by students for learning and exam preparation.",
  },
  {
    question: "Is this simple interest calculator free?",
    answer:
      "Yes, DailyCalcu’s simple interest calculator is completely free.",
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
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Calculator */}
      <SimpleInterestCalculatorClient />

      {/* ======================
         RELATED CALCULATORS
      ====================== */}
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

      {/* ======================
         FAQ SECTION
      ====================== */}
      <section className="max-w-3xl mx-auto mt-20 px-4">
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