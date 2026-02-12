import { Metadata } from "next";
import PercentageCalculatorClient from "./PercentageCalculatorClient";
import RelatedCalculators from "@/app/components/RelatedCalculators";


export const metadata: Metadata = {
  title: "Percentage Calculator | Calculate Percentage Easily – DailyCalcu",
  description:
    "Use this free percentage calculator to calculate percentage of a number, percentage increase, decrease, and percentage change accurately.",
  alternates: {
    canonical: "/percentage-calculator",
  },
};

/* ======================
   FAQ DATA
====================== */
const faqs = [
  {
    question: "What is a percentage?",
    answer:
      "A percentage is a number expressed as a fraction of 100. It is commonly used to represent proportions, ratios, and changes.",
  },
  {
    question: "How do I calculate percentage of a number?",
    answer:
      "Multiply the value by the percentage and divide by 100.",
  },
  {
    question: "How do I calculate percentage increase?",
    answer:
      "Subtract the old value from the new value, divide by the old value, and multiply by 100.",
  },
  {
    question: "How do I calculate percentage decrease?",
    answer:
      "Subtract the new value from the old value, divide by the old value, and multiply by 100.",
  },
  {
    question: "Is this calculator accurate?",
    answer:
      "Yes, it uses standard mathematical formulas and provides accurate results instantly.",
  },
  {
    question: "Can students use this calculator?",
    answer:
      "Yes, it is useful for exams, homework, and academic calculations.",
  },
  {
    question: "Can businesses use percentage calculator?",
    answer:
      "Yes, it is commonly used for discounts, profit margins, GST, and growth analysis.",
  },
  {
    question: "Does it calculate percentage change?",
    answer:
      "Yes, it calculates both percentage increase and decrease.",
  },
  {
    question: "Is this calculator free?",
    answer:
      "Yes, DailyCalcu’s percentage calculator is completely free.",
  },
  {
    question: "Do I need to register?",
    answer:
      "No registration or personal data is required.",
  },
];

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Calculator */}
      <PercentageCalculatorClient />

      {/* ======================
         LONG SEO BLOG
      ====================== */}
      {/* ======================
   LONG-FORM SEO BLOG
====================== */}
<article className="max-w-4xl mx-auto mt-20 px-4 text-gray-700 leading-relaxed space-y-7">

  <h2 className="text-3xl font-bold text-gray-900">
    Percentage Calculator – Complete Guide to Percentage Calculations
  </h2>

  <p>
    A percentage calculator is one of the most commonly used mathematical tools
    in everyday life. Percentages are used to represent proportions, compare
    values, measure change, and simplify complex numerical relationships.
    Whether you are a student, working professional, business owner, or shopper,
    understanding how to calculate percentages correctly is an essential skill.
  </p>

  <p>
    The <strong>DailyCalcu Percentage Calculator</strong> is designed to help you
    calculate percentages quickly and accurately using multiple calculation
    methods. Instead of memorizing formulas or performing manual calculations,
    you can simply enter values and get instant results.
  </p>

  <h2 className="text-2xl font-semibold text-gray-900">
    What Is a Percentage?
  </h2>

  <p>
    A percentage is a number expressed as a fraction of 100. The word “percent”
    literally means “per hundred.” For example, 25% means 25 out of 100, or
    25/100.
  </p>

  <p>
    Percentages are widely used because they allow easy comparison between
    different values, even when the actual numbers are very large or very small.
    This makes percentages extremely useful in finance, education, statistics,
    economics, health metrics, and everyday decision-making.
  </p>

  <h2 className="text-2xl font-semibold text-gray-900">
    Why Use an Online Percentage Calculator?
  </h2>

  <ul className="list-disc ml-6 space-y-2">
    <li>Avoids calculation errors</li>
    <li>Saves time compared to manual math</li>
    <li>Supports multiple percentage formulas</li>
    <li>Useful for students, businesses, and professionals</li>
    <li>Instant results without registration</li>
  </ul>

  <p>
    Manual percentage calculations can become confusing, especially when dealing
    with percentage increase, decrease, or comparisons between values. An online
    calculator eliminates confusion and ensures accuracy.
  </p>

  <h2 className="text-2xl font-semibold text-gray-900">
    Different Ways to Calculate Percentage
  </h2>

  <p>
    There is not just one way to calculate percentages. Depending on the
    situation, different formulas are used. This calculator supports all major
    percentage calculation methods.
  </p>

  <h3 className="text-xl font-semibold mt-6">
    1. Calculate Percentage of a Number
  </h3>

  <p>
    This is the most common percentage calculation. It is used when you want to
    find how much a certain percentage of a number is.
  </p>

  <p className="font-medium">
    Formula: (Value × Percentage) ÷ 100
  </p>

  <p>
    <strong>Example:</strong> What is 20% of 500?<br />
    (500 × 20) ÷ 100 = 100
  </p>

  <p>
    This method is widely used for calculating discounts, tax amounts, exam
    scores, and commission values.
  </p>

  <h3 className="text-xl font-semibold mt-6">
    2. What Percentage One Number Is of Another
  </h3>

  <p>
    This method is used when you want to know what percentage one value represents
    of another value.
  </p>

  <p className="font-medium">
    Formula: (Part ÷ Whole) × 100
  </p>

  <p>
    <strong>Example:</strong> 50 is what percentage of 200?<br />
    (50 ÷ 200) × 100 = 25%
  </p>

  <p>
    This calculation is commonly used in academics, data analysis, and
    performance evaluation.
  </p>

  <h3 className="text-xl font-semibold mt-6">
    3. Percentage Increase
  </h3>

  <p>
    Percentage increase measures how much a value has grown compared to its
    original value. It is frequently used in salary hikes, price increases,
    population growth, and business revenue analysis.
  </p>

  <p className="font-medium">
    Formula: ((New Value − Old Value) ÷ Old Value) × 100
  </p>

  <p>
    <strong>Example:</strong> Salary increases from ₹40,000 to ₹50,000.<br />
    Increase = ₹10,000 → (10,000 ÷ 40,000) × 100 = 25%
  </p>

  <h3 className="text-xl font-semibold mt-6">
    4. Percentage Decrease
  </h3>

  <p>
    Percentage decrease is used when a value reduces compared to its original
    amount. This is common in discounts, depreciation, losses, and price drops.
  </p>

  <p className="font-medium">
    Formula: ((Old Value − New Value) ÷ Old Value) × 100
  </p>

  <p>
    <strong>Example:</strong> Price drops from ₹1,000 to ₹800.<br />
    Decrease = ₹200 → (200 ÷ 1,000) × 100 = 20%
  </p>

  <h2 className="text-2xl font-semibold text-gray-900">
    Real-Life Uses of Percentage Calculator
  </h2>

  <ul className="list-disc ml-6 space-y-2">
    <li>Shopping discounts and offers</li>
    <li>Salary increments and bonuses</li>
    <li>GST and tax calculations</li>
    <li>Exam scores and academic results</li>
    <li>Business profit and loss analysis</li>
    <li>Financial growth and investment returns</li>
  </ul>

  <h2 className="text-2xl font-semibold text-gray-900">
    Is This Percentage Calculator Accurate?
  </h2>

  <p>
    Yes. The DailyCalcu Percentage Calculator uses standard mathematical formulas
    and performs calculations instantly with high precision. However, results
    should always be interpreted logically, especially in financial or legal
    contexts.
  </p>

  <h2 className="text-2xl font-semibold text-gray-900">
    Why Choose DailyCalcu?
  </h2>

  <ul className="list-disc ml-6 space-y-2">
    <li>Multiple percentage calculation methods</li>
    <li>Clean and distraction-free interface</li>
    <li>Mobile-friendly design</li>
    <li>No sign-up or personal data required</li>
    <li>Completely free and unlimited use</li>
  </ul>

  <p>
    DailyCalcu aims to provide accurate, fast, and easy-to-use calculators that
    help users make better decisions without confusion or unnecessary steps.
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
      <section className="max-w-3xl mx-auto mt-24 px-4">
        <h2 className="text-2xl font-semibold mb-8">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-medium text-lg">{faq.question}</h3>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </section>
    </>
  );
}
