import { Metadata } from "next";
import BmiCalculatorClient from "./BMICalculatorClient";

export const metadata: Metadata = {
  title: "BMI Calculator | Body Mass Index Calculator – DailyCalcu",
  description:
    "Use this free BMI calculator to calculate your Body Mass Index based on height and weight. Check if you are underweight, normal, overweight, or obese.",
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
    question: "What is BMI?",
    answer:
      "BMI (Body Mass Index) is a measurement that uses your height and weight to determine whether you are underweight, normal weight, overweight, or obese.",
  },
  {
    question: "How is BMI calculated?",
    answer:
      "BMI is calculated by dividing your weight in kilograms by the square of your height in meters (kg/m²).",
  },
  {
    question: "What is a healthy BMI range?",
    answer:
      "A healthy BMI range is generally between 18.5 and 24.9, according to World Health Organization guidelines.",
  },
  {
    question: "Does BMI apply to both men and women?",
    answer:
      "Yes, BMI applies to both men and women, but it does not consider differences in muscle mass or body composition.",
  },
  {
    question: "Is BMI accurate for athletes?",
    answer:
      "BMI may not be inaccurate for athletes because it does not distinguish between muscle mass and body fat.",
  },
  {
    question: "Can BMI be used for children?",
    answer:
      "BMI for children and teenagers is age- and gender-specific, so adult BMI calculators should not be used for children.",
  },
  {
    question: "What does a high BMI indicate?",
    answer:
      "A high BMI may indicate overweight or obesity, which can increase the risk of conditions like heart disease, diabetes, and high blood pressure.",
  },
  {
    question: "What does a low BMI indicate?",
    answer:
      "A low BMI may indicate underweight, which can be linked to nutritional deficiencies and weakened immunity.",
  },
  {
    question: "Is BMI a medical diagnosis?",
    answer:
      "No, BMI is a screening tool and not a medical diagnosis. A healthcare professional should be consulted for proper evaluation.",
  },
  {
    question: "Is this BMI calculator free to use?",
    answer:
      "Yes, the BMI calculator on DailyCalcu is completely free and does not require any registration.",
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
      <BmiCalculatorClient />

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
