import { Metadata } from "next";
import SipCalculatorClient from "./SipCalculatorClient";

export const metadata: Metadata = {
  title: "SIP Calculator | Calculate SIP Returns & Maturity – DailyCalcu",
  description:
    "Use this free SIP calculator to estimate mutual fund SIP returns, total investment, and maturity amount easily and accurately.",
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
    question: "What is SIP?",
    answer:
      "SIP (Systematic Investment Plan) is an investment method where you invest a fixed amount regularly in mutual funds.",
  },
  {
    question: "How does a SIP calculator work?",
    answer:
      "A SIP calculator estimates the future value of your investments based on monthly contribution, expected return rate, and investment duration.",
  },
  {
    question: "What is the benefit of investing through SIP?",
    answer:
      "SIP helps inculcate disciplined investing, averages market volatility, and allows you to build wealth gradually over time.",
  },
  {
    question: "How is SIP return calculated?",
    answer:
      "SIP returns are calculated using compound interest principles, considering monthly investments and expected annual returns.",
  },
  {
    question: "Is SIP better than lump sum investment?",
    answer:
      "SIP is suitable for long-term, disciplined investing and reduces market timing risk, while lump sum investing depends on market conditions.",
  },
  {
    question: "What is a good SIP investment duration?",
    answer:
      "A SIP duration of 5 to 10 years or more is generally considered good for wealth creation and better returns.",
  },
  {
    question: "Does this SIP calculator include market risks?",
    answer:
      "No, the SIP calculator provides estimated returns based on assumed rates and does not account for market fluctuations.",
  },
  {
    question: "Can I use this calculator for any mutual fund?",
    answer:
      "Yes, this SIP calculator can be used for estimating returns of any mutual fund by adjusting the expected rate of return.",
  },
  {
    question: "Is this SIP calculator accurate?",
    answer:
      "The calculator provides an estimate using standard financial formulas. Actual returns may vary depending on market performance.",
  },
  {
    question: "Is this SIP calculator free to use?",
    answer:
      "Yes, the SIP calculator on DailyCalcu is completely free and does not require registration.",
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
      <SipCalculatorClient />

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
