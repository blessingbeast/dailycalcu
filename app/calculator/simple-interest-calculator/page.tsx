import { Metadata } from "next";
import SimpleInterestCalculatorClient from "./SimpleInterestCalculatorClient";

export const metadata: Metadata = {
  title: "Simple Interest Calculator | Calculate Simple Interest – DailyCalcu",
  description:
    "Use this free simple interest calculator to calculate interest and total amount based on principal, rate of interest, and time period.",
};

/* ======================
   FAQ DATA (10 QUESTIONS)
====================== */
const faqs = [
  {
    question: "What is simple interest?",
    answer:
      "Simple interest is a method of calculating interest where interest is calculated only on the original principal amount, not on accumulated interest.",
  },
  {
    question: "How is simple interest calculated?",
    answer:
      "Simple interest is calculated using the formula: Simple Interest = (Principal × Rate × Time) / 100.",
  },
  {
    question: "What is the simple interest formula?",
    answer:
      "The simple interest formula is SI = (P × R × T) / 100, where P is principal, R is rate of interest, and T is time in years.",
  },
  {
    question: "What is the difference between simple interest and compound interest?",
    answer:
      "Simple interest is calculated only on the principal, while compound interest is calculated on both principal and accumulated interest.",
  },
  {
    question: "Can this calculator be used for loans?",
    answer:
      "Yes, this calculator can be used to estimate interest on loans that follow simple interest calculation methods.",
  },
  {
    question: "Can this calculator be used for savings?",
    answer:
      "Yes, it can be used to calculate returns on savings or deposits that use simple interest.",
  },
  {
    question: "Is simple interest calculated monthly or yearly?",
    answer:
      "Simple interest is usually calculated yearly, but it can be adjusted for monthly or daily periods depending on the time value entered.",
  },
  {
    question: "Is this simple interest calculator accurate?",
    answer:
      "Yes, the calculator uses standard mathematical formulas to provide accurate simple interest calculations.",
  },
  {
    question: "Does this calculator include taxes or fees?",
    answer:
      "No, this calculator does not include taxes, processing fees, or other charges. It only calculates interest based on user input.",
  },
  {
    question: "Is this simple interest calculator free to use?",
    answer:
      "Yes, the simple interest calculator on DailyCalcu is completely free and does not require registration.",
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
      <SimpleInterestCalculatorClient />

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
