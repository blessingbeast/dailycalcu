import { Metadata } from "next";
import GstCalculatorClient from "./GstCalculatorClient";

export const metadata: Metadata = {
  title: "GST Calculator | Calculate GST Amount & Price – DailyCalcu",
  description:
    "Use this free GST calculator to calculate GST amount, GST inclusive price, and GST exclusive price quickly and accurately.",
};

/* ======================
   FAQ DATA (10 QUESTIONS)
====================== */
const faqs = [
  {
    question: "What is GST?",
    answer:
      "GST (Goods and Services Tax) is an indirect tax applied to the supply of goods and services, replacing multiple indirect taxes.",
  },
  {
    question: "How does a GST calculator work?",
    answer:
      "A GST calculator applies the selected GST percentage to the base amount to calculate the GST amount and final price.",
  },
  {
    question: "What GST rates are commonly used?",
    answer:
      "Common GST rates include 5%, 12%, 18%, and 28%, depending on the type of goods or services.",
  },
  {
    question: "What is GST inclusive price?",
    answer:
      "GST inclusive price is the total price that already includes the GST amount.",
  },
  {
    question: "What is GST exclusive price?",
    answer:
      "GST exclusive price is the base price before GST is added.",
  },
  {
    question: "Can this calculator add GST to a price?",
    answer:
      "Yes, the GST calculator can add GST to a base price and show the total amount including tax.",
  },
  {
    question: "Can this calculator remove GST from a price?",
    answer:
      "Yes, it can calculate the original base price by removing GST from a GST-inclusive amount.",
  },
  {
    question: "Is this GST calculator accurate?",
    answer:
      "Yes, this calculator uses standard GST formulas to provide accurate tax calculations.",
  },
  {
    question: "Can this calculator be used for invoices?",
    answer:
      "This calculator is useful for estimation, but official invoices should be generated using accounting or billing software.",
  },
  {
    question: "Is this GST calculator free to use?",
    answer:
      "Yes, the GST calculator on DailyCalcu is completely free and can be used without registration.",
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
      <GstCalculatorClient />

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
