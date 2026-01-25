import { Metadata } from "next";
import BmrCalculatorClient from "./BmrCalorieCalculatorClient";

export const metadata: Metadata = {
  title: "BMR & Daily Calorie Calculator | Calculate Calories – DailyCalcu",
  description:
    "Use this free BMR and calorie calculator to estimate your basal metabolic rate and daily calorie needs based on age, height, weight, and activity level.",
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
    question: "What is BMR?",
    answer:
      "BMR (Basal Metabolic Rate) is the number of calories your body needs to perform basic life-sustaining functions such as breathing, circulation, and cell production at rest.",
  },
  {
    question: "How is BMR calculated?",
    answer:
      "BMR is calculated using formulas like the Mifflin-St Jeor equation, which considers your age, gender, height, and weight.",
  },
  {
    question: "What is the difference between BMR and TDEE?",
    answer:
      "BMR is the calories needed at complete rest, while TDEE (Total Daily Energy Expenditure) includes calories burned through daily activities and exercise.",
  },
  {
    question: "Why is BMR important?",
    answer:
      "Knowing your BMR helps you understand how many calories your body needs and assists in planning weight loss, weight gain, or maintenance goals.",
  },
  {
    question: "Does BMR change with age?",
    answer:
      "Yes, BMR generally decreases with age due to loss of muscle mass and hormonal changes.",
  },
  {
    question: "Is BMR different for men and women?",
    answer:
      "Yes, men usually have a higher BMR than women because they tend to have more muscle mass.",
  },
  {
    question: "Can BMR help with weight loss?",
    answer:
      "Yes, understanding your BMR helps you set appropriate calorie intake levels for safe and effective weight loss.",
  },
  {
    question: "Is this BMR calculator accurate?",
    answer:
      "This calculator provides an estimate based on standard formulas. Actual calorie needs may vary depending on individual metabolism and health conditions.",
  },
  {
    question: "Does this calculator include activity level?",
    answer:
      "Yes, the calculator estimates daily calorie needs by adjusting BMR based on your selected activity level.",
  },
  {
    question: "Is this BMR and calorie calculator free to use?",
    answer:
      "Yes, the BMR and calorie calculator on DailyCalcu is completely free and does not require registration.",
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
      <BmrCalculatorClient />

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
