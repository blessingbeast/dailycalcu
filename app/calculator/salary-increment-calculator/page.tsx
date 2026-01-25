import { Metadata } from "next";
import SalaryCalculatorClient from "./SalaryCalculatorClient";

export const metadata: Metadata = {
  title: "Salary Increment Calculator | Calculate New Salary – DailyCalcu",
  description:
    "Use this free salary increment calculator to calculate your new salary after applying an increment percentage. Simple, fast, and accurate.",
};

<section className="mt-12">

  <section className="mb-6">
  <h1 className="text-3xl font-semibold mb-3">
    Salary Increment Calculator
  </h1>

  <p className="text-gray-700 mb-3">
    A salary increment is an increase in your existing salary, usually given
    during annual appraisals or performance reviews. Knowing how much your new
    salary will be after an increment helps you plan your finances, savings,
    and future expenses better.
  </p>

  <p className="text-gray-700 mb-3">
    This salary increment calculator allows you to quickly calculate your
    updated salary by entering your current salary and the expected increment
    percentage. The calculator instantly shows your increment amount and your
    new salary after the hike.
  </p>

  <p className="text-gray-700">
    Whether you are evaluating a job offer, preparing for an appraisal
    discussion, or simply curious about how a percentage increase affects your
    income, this free tool gives accurate results without any registration.
  </p>
</section>

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
    question: "What is a salary increment?",
    answer:
      "A salary increment is an increase in an employee’s existing salary, usually given annually based on performance, experience, or company policy.",
  },
  {
    question: "How do I calculate salary increment percentage?",
    answer:
      "To calculate salary increment percentage, divide the increment amount by your current salary and multiply the result by 100.",
  },
  {
    question: "How do I calculate my new salary after increment?",
    answer:
      "Multiply your current salary by the increment percentage, divide by 100, and add the result to your existing salary to get the new salary.",
  },
  {
    question: "What is a good salary increment percentage?",
    answer:
      "A good salary increment percentage generally ranges between 5% and 15%, depending on performance, role, and company growth.",
  },
  {
    question: "Does this calculator work for monthly and yearly salary?",
    answer:
      "Yes, you can use this calculator for both monthly and yearly salary amounts as long as the increment percentage is applied consistently.",
  },
  {
    question: "Does the salary increment calculator include bonuses?",
    answer:
      "No, this calculator only calculates increments on base salary and does not include bonuses, incentives, or allowances.",
  },
  {
    question: "Can I use this calculator for appraisal planning?",
    answer:
      "Yes, this calculator is useful for estimating expected salary after appraisal and planning your finances accordingly.",
  },
  {
    question: "Is this salary increment calculator accurate?",
    answer:
      "Yes, the calculator uses a simple and accurate mathematical formula to calculate salary increments based on user input.",
  },
  {
    question: "Is this salary increment calculator free to use?",
    answer:
      "Yes, the salary increment calculator on DailyCalcu is completely free and can be used unlimited number of times.",
  },
  {
    question: "Do I need to sign up to use this calculator?",
    answer:
      "No, you do not need to sign up or provide any personal information to use this calculator.",
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
      <SalaryCalculatorClient />

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
