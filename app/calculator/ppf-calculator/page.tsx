import { Metadata } from "next";
import PpfCalculatorClient from "./PpfCalculatorClient";

export const metadata: Metadata = {
  title: "PPF Calculator | Calculate PPF Maturity Amount – DailyCalcu",
  description:
    "Use this free PPF calculator to calculate Public Provident Fund maturity amount, total interest earned, and investment value easily.",
};

/* ======================
   FAQ DATA (10 QUESTIONS)
====================== */
const faqs = [
  {
    question: "What is PPF?",
    answer:
      "PPF (Public Provident Fund) is a long-term government-backed savings scheme in India that offers fixed returns and tax benefits.",
  },
  {
    question: "How does a PPF calculator work?",
    answer:
      "A PPF calculator estimates maturity amount and interest earned based on yearly investment, interest rate, and investment duration.",
  },
  {
    question: "What is the lock-in period for PPF?",
    answer:
      "PPF has a lock-in period of 15 years, after which the account can be extended in blocks of 5 years.",
  },
  {
    question: "What is the current interest rate for PPF?",
    answer:
      "The PPF interest rate is set by the government and may change periodically. The calculator uses the rate you enter for estimation.",
  },
  {
    question: "Is PPF interest compounded annually?",
    answer:
      "Yes, PPF interest is compounded annually and credited to the account at the end of each financial year.",
  },
  {
    question: "What is the minimum and maximum PPF investment?",
    answer:
      "The minimum annual investment in PPF is ₹500 and the maximum is ₹1.5 lakh per financial year.",
  },
  {
    question: "Are PPF returns tax-free?",
    answer:
      "Yes, PPF follows the EEE (Exempt-Exempt-Exempt) model, making investments, interest, and maturity amount tax-free under current laws.",
  },
  {
    question: "Can I withdraw money from PPF before maturity?",
    answer:
      "Partial withdrawals are allowed from the 7th financial year, subject to rules and limits.",
  },
  {
    question: "Is this PPF calculator accurate?",
    answer:
      "The calculator provides an estimate based on standard PPF formulas, but actual returns may vary depending on interest rate changes.",
  },
  {
    question: "Is this PPF calculator free to use?",
    answer:
      "Yes, the PPF calculator on DailyCalcu is completely free and does not require registration.",
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
      <PpfCalculatorClient />

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
