import { Metadata } from "next";
import RelatedCalculators from "@/app/components/RelatedCalculators";

import IdealWeightCalculatorClient from "./IdealWeightCalculatorClient";

/* ======================
   METADATA
====================== */
export const metadata: Metadata = {
  title: "Ideal Weight Calculator | Healthy Weight for Men & Women – DailyCalcu",
  description:
    "Use this free ideal weight calculator to find your healthy body weight based on height and gender using trusted medical formulas.",
  alternates: {
    canonical: "https://dailycalcu.com/calculator/ideal-weight-calculator",
  },
};

/* ======================
   FAQ DATA
====================== */
const faqs = [
  {
    question: "What is ideal body weight?",
    answer:
      "Ideal body weight is an estimated healthy weight based on height and gender using medical formulas.",
  },
  {
    question: "Is ideal weight the same as BMI?",
    answer:
      "No, BMI measures body fat using height and weight, while ideal weight estimates a healthy target weight.",
  },
  {
    question: "Which formula is most accurate?",
    answer:
      "All formulas provide estimates. Doctors often consider multiple formulas together.",
  },
  {
    question: "Does ideal weight vary for men and women?",
    answer:
      "Yes, due to differences in muscle mass and body composition.",
  },
  {
    question: "Can athletes rely on ideal weight calculators?",
    answer:
      "Athletes may have higher muscle mass, so ideal weight formulas may underestimate healthy weight.",
  },
  {
    question: "Is ideal weight medically exact?",
    answer:
      "No, it is a guideline, not a medical diagnosis.",
  },
  {
    question: "Can ideal weight help with weight loss?",
    answer:
      "Yes, it provides a healthy target range for planning weight goals.",
  },
  {
    question: "Does age affect ideal weight?",
    answer:
      "Age can influence muscle mass and metabolism, but formulas mainly focus on height.",
  },
  {
    question: "Is this calculator free?",
    answer:
      "Yes, DailyCalcu’s ideal weight calculator is completely free.",
  },
  {
    question: "Should I consult a doctor?",
    answer:
      "Yes, especially if you have medical conditions or unique body composition.",
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
      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* CALCULATOR */}
      <IdealWeightCalculatorClient />

     {/* ======================
   LONG SEO BLOG
====================== */}
<article className="max-w-4xl mx-auto mt-20 px-4 text-gray-800 leading-relaxed">
  <h2 className="text-3xl font-bold mb-6">
    What Is Ideal Weight and Why It Matters
  </h2>

  <p className="mb-5">
    Ideal body weight refers to a healthy weight range based on your height
    and gender. Understanding your ideal weight helps you evaluate whether
    you are underweight, overweight, or maintaining a healthy balance.
  </p>

  <p className="mb-6">
    Searches like <strong>ideal weight for my height</strong> and{" "}
    <strong>healthy weight for men and women</strong> are common because
    maintaining an appropriate weight significantly reduces the risk of
    heart disease, diabetes, joint issues, and long-term lifestyle disorders.
  </p>

  <h3 className="text-2xl font-semibold mt-10 mb-4">
    How Ideal Weight Is Calculated
  </h3>

  <p className="mb-5">
    Ideal weight calculators rely on proven medical formulas such as the
    <strong> Devine</strong>, <strong> Robinson</strong>, and{" "}
    <strong> Miller</strong> formulas. These methods use height and gender
    to estimate a healthy body weight range.
  </p>

  <p className="mb-6">
    Doctors and nutritionists often consider multiple formulas together
    instead of relying on just one, ensuring a more balanced assessment.
  </p>

  <h3 className="text-2xl font-semibold mt-10 mb-4">
    Ideal Weight for Men and Women
  </h3>

  <p className="mb-6">
    Ideal weight naturally differs between men and women due to differences
    in muscle mass, bone density, and fat distribution. Men generally have
    higher lean muscle mass, while women typically carry a higher essential
    fat percentage.
  </p>

  <h3 className="text-2xl font-semibold mt-10 mb-4">
    Ideal Weight vs BMI
  </h3>

  <p className="mb-6">
    BMI (Body Mass Index) calculates body fat using height and weight, while
    ideal weight estimates a target weight range. BMI is useful for
    population-level screening, whereas ideal weight offers a more
    personalized reference.
  </p>

  <h3 className="text-2xl font-semibold mt-10 mb-4">
    Is Ideal Weight the Same for Everyone?
  </h3>

  <p className="mb-6">
    No. Factors such as body frame size, genetics, muscle mass, age, and
    lifestyle habits all influence what weight is healthiest for you.
    That’s why ideal weight should be treated as guidance—not a strict rule.
  </p>

  <h3 className="text-2xl font-semibold mt-10 mb-4">
    How to Maintain Your Ideal Weight
  </h3>

  <ul className="list-disc pl-6 space-y-2 mb-6">
    <li>Eat a balanced diet rich in whole foods</li>
    <li>Exercise regularly with strength and cardio training</li>
    <li>Maintain consistent sleep and hydration</li>
    <li>Track progress realistically over time</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-10 mb-4">
    Final Thoughts
  </h3>

  <p>
    An ideal weight calculator is an excellent starting point for understanding
    your health. Combine it with medical guidance, sustainable habits, and
    long-term consistency to achieve lasting wellness.
  </p>
</article>

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