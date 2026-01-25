import { Metadata } from "next";
import BmrCalculatorClient from "./BmrCalorieCalculatorClient";

export const metadata: Metadata = {
  title: "BMR & Daily Calorie Calculator | Calculate Calories – DailyCalcu",
  description:
    "Use this free BMR and calorie calculator to estimate your basal metabolic rate and daily calorie needs based on age, height, weight, and activity level.",
};
function CalculatorCard({
  title,
  description,
  href,
  accent,
}: {
  title: string;
  description: string;
  href: string;
  accent: string;
}) {
  return (
    <a
      href={href}
      className="group block border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition"
    >
      <div
        className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${accent}`}
      >
        Calculator
      </div>

      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
        {title}
      </h3>

      <p className="text-gray-600 text-sm mt-2">
        {description}
      </p>
    </a>
  );
}

/* ======================
   FAQ DATA
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
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Calculator UI */}
      <BmrCalculatorClient />


   {/* ======================
   RELATED CALCULATORS
====================== */}
<section className="max-w-6xl mx-auto mt-20 px-4">
  <h2 className="text-2xl font-semibold mb-8 text-center">
    Related Calculators
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    
    <CalculatorCard
      title="BMI Calculator"
      description="Check your Body Mass Index and health category."
      href="/calculator/bmi-calculator"
      accent="bg-blue-100 text-blue-700"
    />

    <CalculatorCard
      title="Age Calculator"
      description="Calculate your exact age in years, months, and days."
      href="/calculator/age-calculator"
      accent="bg-green-100 text-green-700"
    />

    <CalculatorCard
      title="SIP Calculator"
      description="Estimate returns on your systematic investments."
      href="/calculator/sip-calculator"
      accent="bg-purple-100 text-purple-700"
    />

    <CalculatorCard
      title="Compound Interest Calculator"
      description="Calculate compound interest growth over time."
      href="/calculator/compound-interest-calculator"
      accent="bg-orange-100 text-orange-700"
    />

    <CalculatorCard
      title="Percentage Calculator"
      description="Quickly calculate percentages and differences."
      href="/calculator/percentage-calculator"
      accent="bg-pink-100 text-pink-700"
    />

    <CalculatorCard
      title="Simple Interest Calculator"
      description="Calculate simple interest for loans or savings."
      href="/calculator/simple-interest-calculator"
      accent="bg-indigo-100 text-indigo-700"
    />

  </div>
</section>


      {/* VISIBLE FAQ SECTION */}
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
