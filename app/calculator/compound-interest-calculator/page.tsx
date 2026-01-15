import { Metadata } from "next";
import CompoundInterestCalculatorClient from "./CompoundInterestCalculatorClient";

export const metadata: Metadata = {
  title:
    "Compound Interest Calculator | Calculate Compound Interest – DailyCalcu",
  description:
    "Use this free compound interest calculator to calculate interest on investments or savings and estimate future value accurately.",
};

/* ======================
   FAQ DATA (10 QUESTIONS)
====================== */
const faqs = [
  {
    question: "What is compound interest?",
    answer:
      "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods.",
  },
  {
    question: "How is compound interest calculated?",
    answer:
      "Compound interest is calculated by applying interest to the principal amount repeatedly over a specific compounding period.",
  },
  {
    question: "What is the compound interest formula?",
    answer:
      "The compound interest formula is A = P (1 + r/n)^(nt), where P is principal, r is interest rate, n is compounding frequency, and t is time.",
  },
  {
    question: "What is the difference between simple and compound interest?",
    answer:
      "Simple interest is calculated only on the principal, while compound interest is calculated on both principal and accumulated interest.",
  },
  {
    question: "What does compounding frequency mean?",
    answer:
      "Compounding frequency refers to how often interest is added to the principal, such as yearly, quarterly, monthly, or daily.",
  },
  {
    question: "Does higher compounding frequency increase returns?",
    answer:
      "Yes, more frequent compounding generally results in higher returns over time because interest is added more often.",
  },
  {
    question: "Can this calculator be used for investments and savings?",
    answer:
      "Yes, this compound interest calculator can be used to estimate returns on investments, fixed deposits, and savings accounts.",
  },
  {
    question: "Is compound interest suitable for long-term investing?",
    answer:
      "Yes, compound interest works best over long periods and is a key factor in building wealth through long-term investments.",
  },
  {
    question: "Is this compound interest calculator accurate?",
    answer:
      "The calculator provides accurate estimates using standard compound interest formulas, but actual returns may vary depending on financial conditions.",
  },
  {
    question: "Is this compound interest calculator free to use?",
    answer:
      "Yes, the compound interest calculator on DailyCalcu is completely free and does not require registration.",
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
      <CompoundInterestCalculatorClient />

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
