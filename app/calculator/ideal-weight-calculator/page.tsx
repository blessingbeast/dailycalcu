import { Metadata } from "next";
import IdealWeightCalculatorClient from "./IdealWeightCalculatorClient";

export const metadata: Metadata = {
  title: "Ideal Weight Calculator | Find Your Healthy Weight – DailyCalcu",
  description:
    "Use this free ideal weight calculator to estimate your healthy body weight based on height and gender using standard formulas.",
};

/* ======================
   FAQ DATA (10 QUESTIONS)
====================== */
const faqs = [
  {
    question: "What is an ideal weight?",
    answer:
      "Ideal weight refers to a weight range that is considered healthy for a person based on factors like height, gender, and body structure.",
  },
  {
    question: "How is ideal weight calculated?",
    answer:
      "Ideal weight is calculated using standard formulas such as the Devine, Hamwi, or Robinson formulas, which are based mainly on height and gender.",
  },
  {
    question: "Is ideal weight the same as BMI?",
    answer:
      "No, ideal weight and BMI are different. BMI considers both height and weight, while ideal weight focuses on estimating a healthy weight range.",
  },
  {
    question: "Does ideal weight differ for men and women?",
    answer:
      "Yes, ideal weight calculations differ for men and women because of differences in body composition and muscle mass.",
  },
  {
    question: "Is ideal weight the same for everyone of the same height?",
    answer:
      "No, ideal weight can vary depending on body frame size, muscle mass, and overall health, even for people of the same height.",
  },
  {
    question: "Can this calculator help with weight loss goals?",
    answer:
      "Yes, this calculator can help you understand a healthy target weight, which may assist in planning weight loss or weight gain goals.",
  },
  {
    question: "Is ideal weight a medical diagnosis?",
    answer:
      "No, ideal weight is an estimation and not a medical diagnosis. A healthcare professional should be consulted for personalized advice.",
  },
  {
    question: "Can athletes rely on ideal weight calculators?",
    answer:
      "Athletes may not find ideal weight calculators fully accurate because they often have higher muscle mass than average.",
  },
  {
    question: "Is this ideal weight calculator accurate?",
    answer:
      "The calculator provides an estimate using standard formulas, but actual healthy weight may vary based on individual factors.",
  },
  {
    question: "Is this ideal weight calculator free to use?",
    answer:
      "Yes, the ideal weight calculator on DailyCalcu is completely free and does not require registration.",
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
      <IdealWeightCalculatorClient />

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
