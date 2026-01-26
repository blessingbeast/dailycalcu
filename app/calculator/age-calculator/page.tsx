import { Metadata } from "next";
import AgeCalculatorClient from "./AgeCalculatorClient";
import RelatedCalculators from "@/app/components/RelatedCalculators";

/* ======================
   METADATA
====================== */
export const metadata: Metadata = {
  title: "Age Calculator | Calculate Exact Age in Years, Months & Days – DailyCalcu",
  description:
    "Use this free age calculator to calculate your exact age in years, months, and days based on your date of birth.",
  alternates: {
    canonical: "https://dailycalcu.com/calculator/age-calculator",
  },
};

/* ======================
   FAQ DATA
====================== */
const faqs = [
  {
    question: "What is an age calculator?",
    answer:
      "An age calculator is a tool that calculates your exact age in years, months, and days based on your date of birth.",
  },
  {
    question: "How does the age calculator work?",
    answer:
      "The age calculator compares your date of birth with the current date to determine your exact age.",
  },
  {
    question: "Can this age calculator calculate age in months and days?",
    answer:
      "Yes, this age calculator shows your age in years, months, and days for precise results.",
  },
  {
    question: "Is this age calculator accurate?",
    answer:
      "Yes, it uses standard calendar-based date calculations and accounts for leap years.",
  },
  {
    question: "Can I calculate age for a future date?",
    answer:
      "Yes, you can calculate age for any future or past date by changing the reference date.",
  },
  {
    question: "Is this age calculator free to use?",
    answer:
      "Yes, the age calculator on DailyCalcu is completely free and requires no registration.",
  },
  {
    question: "Can this calculator be used for official purposes?",
    answer:
      "This calculator is for informational use only. Official documents should rely on legal records.",
  },
  {
    question: "Does this calculator work for leap years?",
    answer:
      "Yes, leap years are automatically handled during the calculation.",
  },
  {
    question: "Can I calculate age for children and adults?",
    answer:
      "Yes, this age calculator works for people of all ages.",
  },
  {
    question: "Do I need to sign up to use this calculator?",
    answer:
      "No, you do not need to sign up or provide personal information.",
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
      name: "Age Calculator",
      item: "https://dailycalcu.com/calculator/age-calculator",
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Calculator */}
      <AgeCalculatorClient />

      {/* Related Calculators (Auto) */}
      <RelatedCalculators currentSlug="age-calculator" />

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
