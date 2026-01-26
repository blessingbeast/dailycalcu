import { Metadata } from "next";
import CalorieDeficitCalculatorClient from "./CalorieDeficitCalculatorClient";
import RelatedCalculators from "@/app/components/RelatedCalculators";

/* ======================
   METADATA
====================== */
export const metadata: Metadata = {
  title:
    "Calorie Deficit Calculator | Calculate Calories for Weight Loss – DailyCalcu",
  description:
    "Use this free calorie deficit calculator to estimate how many calories you should eat to lose weight safely based on your daily calorie needs.",
  alternates: {
    canonical: "https://dailycalcu.com/calculator/calorie-deficit-calculator",
  },
};

/* ======================
   FAQ DATA
====================== */
const faqs = [
  {
    question: "What is a calorie deficit?",
    answer:
      "A calorie deficit occurs when you consume fewer calories than your body burns, which leads to weight loss over time.",
  },
  {
    question: "How does a calorie deficit help with weight loss?",
    answer:
      "When you are in a calorie deficit, your body uses stored fat for energy, resulting in gradual weight loss.",
  },
  {
    question: "What is a safe calorie deficit?",
    answer:
      "A safe calorie deficit is usually between 300 and 500 calories per day for sustainable weight loss.",
  },
  {
    question: "Can a large calorie deficit be harmful?",
    answer:
      "Yes, very large calorie deficits may cause fatigue, muscle loss, and nutrient deficiencies.",
  },
  {
    question: "Does activity level affect calorie deficit?",
    answer:
      "Yes, daily activity level plays a major role in determining how many calories your body burns.",
  },
  {
    question: "How long does it take to lose weight in a calorie deficit?",
    answer:
      "Most people lose about 0.5 to 1 kg per week with a consistent and healthy calorie deficit.",
  },
  {
    question: "Is this calorie deficit calculator accurate?",
    answer:
      "The calculator provides an estimate based on standard formulas; individual results may vary.",
  },
  {
    question: "Can I use this calculator for weight maintenance?",
    answer:
      "Yes, by eating at maintenance calories you can maintain your current weight.",
  },
  {
    question: "Does this calculator consider gender?",
    answer:
      "Yes, gender is used to calculate BMR accurately using the Mifflin-St Jeor formula.",
  },
  {
    question: "Is this calorie deficit calculator free?",
    answer:
      "Yes, this calculator is completely free and does not require registration.",
  },
];

/* ======================
   SCHEMA
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://dailycalcu.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Calculators",
      item: "https://dailycalcu.com/calculator",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Calorie Deficit Calculator",
      item: "https://dailycalcu.com/calculator/calorie-deficit-calculator",
    },
  ],
};

/* ======================
   PAGE
====================== */
export default function Page() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Calculator */}
      <CalorieDeficitCalculatorClient />

      {/* ======================
          LONG-FORM SEO BLOG
      ====================== */}
      <article className="max-w-3xl mx-auto mt-20 px-4 text-gray-700 leading-relaxed space-y-6">
        <h2 className="text-2xl font-bold">
          What Is a Calorie Deficit?
        </h2>

        <p>
          A calorie deficit occurs when you consume fewer calories than your body
          needs to maintain its current weight. This deficit forces the body to
          use stored energy—primarily fat—to meet its energy demands, leading to
          weight loss over time.
        </p>

        <p>
          Creating a calorie deficit is the foundation of fat loss. Regardless
          of diet type—low-carb, keto, intermittent fasting—weight loss only
          occurs when calorie intake is lower than calorie expenditure.
        </p>

        <h2 className="text-2xl font-bold">
          How Does a Calorie Deficit Work?
        </h2>

        <p>
          Your body burns calories through basic functions like breathing and
          digestion (BMR), as well as through physical activity. When you eat
          fewer calories than you burn, your body compensates by burning stored
          fat.
        </p>

        <h2 className="text-2xl font-bold">
          What Is a Safe Calorie Deficit?
        </h2>

        <p>
          A safe calorie deficit is typically between <strong>300–500 calories
          per day</strong>. This allows steady weight loss while preserving muscle
          mass and energy levels.
        </p>

        <h2 className="text-2xl font-bold">
          Benefits of a Moderate Calorie Deficit
        </h2>

        <ul className="list-disc pl-6">
          <li>Sustainable fat loss</li>
          <li>Reduced risk of muscle loss</li>
          <li>Better hormonal balance</li>
          <li>Improved long-term adherence</li>
        </ul>

        <h2 className="text-2xl font-bold">
          Who Should Use a Calorie Deficit Calculator?
        </h2>

        <p>
          This calculator is ideal for individuals aiming to lose weight safely,
          athletes planning cutting phases, and anyone wanting to understand
          their daily calorie needs.
        </p>

        <p>
          It uses proven formulas and adapts results based on your age, gender,
          height, weight, and activity level.
        </p>
      </article>

      {/* Related Calculators */}
      <RelatedCalculators currentSlug="calorie-deficit-calculator" />

      {/* Visible FAQ */}
      <section className="max-w-3xl mx-auto mt-20 px-4">
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
