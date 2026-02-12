import { Metadata } from "next";
import SipCalculatorClient from "./SipCalculatorClient";
import RelatedCalculators from "@/app/components/RelatedCalculators";


export const metadata: Metadata = {
  title: "SIP Calculator | Calculate SIP Returns & Maturity – DailyCalcu",
  description:
    "Use this free SIP calculator to estimate mutual fund SIP returns, total investment, and maturity amount easily and accurately.",
alternates: {
    canonical: "/sip-calculator",
  },
  };



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
