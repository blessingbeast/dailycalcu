import { Metadata } from "next";
import CompoundInterestCalculatorClient from "./CompoundInterestCalculatorClient";
import RelatedCalculators from "@/app/components/RelatedCalculators";

/* ======================
   METADATA
====================== */
export const metadata: Metadata = {
  title:
    "Compound Interest Calculator | Calculate Compound Interest – DailyCalcu",
  description:
    "Use this free compound interest calculator to calculate interest on investments or savings and estimate future value accurately.",
  alternates: {
    canonical: "https://dailycalcu.com/calculator/compound-interest-calculator",
  },
};

/* ======================
   FAQ DATA
====================== */
const faqs = [
  {
    question: "What is compound interest?",
    answer:
      "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods.",
  },
  {
    question: "How is compound interest calculated?",
    answer:
      "Compound interest is calculated by applying interest to the principal repeatedly over time using a compounding formula.",
  },
  {
    question: "What is the compound interest formula?",
    answer:
      "The compound interest formula is A = P (1 + r/n)^(nt).",
  },
  {
    question: "What is the difference between simple and compound interest?",
    answer:
      "Simple interest is calculated only on the principal, while compound interest is calculated on both principal and accumulated interest.",
  },
  {
    question: "Does compounding frequency matter?",
    answer:
      "Yes, more frequent compounding generally results in higher returns.",
  },
  {
    question: "Is compound interest good for long-term investing?",
    answer:
      "Yes, compound interest is most powerful over long periods and is ideal for long-term investments.",
  },
  {
    question: "Can this calculator be used for savings accounts?",
    answer:
      "Yes, it can estimate returns for savings, fixed deposits, and investments.",
  },
  {
    question: "Is this compound interest calculator accurate?",
    answer:
      "It uses standard formulas to provide reliable estimates, though actual returns may vary.",
  },
  {
    question: "Does inflation affect compound interest?",
    answer:
      "Yes, inflation can reduce real returns, which should be considered in long-term planning.",
  },
  {
    question: "Is this calculator free to use?",
    answer:
      "Yes, the compound interest calculator on DailyCalcu is completely free.",
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
      name: "Compound Interest Calculator",
      item: "https://dailycalcu.com/calculator/compound-interest-calculator",
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
      <CompoundInterestCalculatorClient />

      {/* LONG-FORM SEO BLOG */}
      <article className="max-w-3xl mx-auto mt-20 px-4 text-gray-700 space-y-6">
        <h2 className="text-2xl font-bold">
          What Is Compound Interest?
        </h2>

        <p>
          Compound interest is a powerful financial concept where interest is
          calculated not only on the initial principal amount but also on previously
          earned interest. Over time, this creates exponential growth.
        </p>

        <p>
          This is why compound interest is often called the 8th wonder of the
          world” and plays a crucial role in wealth creation.
        </p>

        <h2 className="text-2xl font-bold">
          Why doesvCompound Interest Matter this much?
        </h2>

        <ul className="list-disc pl-6">
          <li>Accelerates long-term wealth growth</li>
          <li>Rewards early with consistent investing</li>
          <li>Best solution for retirement and goal planning</li>
          <li>Beats inflation over long periods</li>
        </ul>

        <h2 className="text-2xl font-bold">
          What is the difference between Compound Interest vs Simple Interest?
        </h2>

        <p>
          Unlike simple interest, which is calculated only on the principal amount,
          compound interest grows faster because interest earns interest.
        </p>

        <h2 className="text-2xl font-bold">
          Who Should Use this Compound interest Calculator?
        </h2>

        <p>
          This calculator is useful for investors, students, financial planners,
          and anyone looking to understand how money grows over time.
        </p>

        <h2 className="text-2xl font-bold">
    How Compound Interest Grows Your Money Over Time?
  </h2>

  <p>
    Compound interest works by reinvesting the interest you earn, allowing your
    investment to grow exponentially instead of standing still on your bank. In the early years,
    growth may appear slow, but as time passes, the compounding effect becomes
    more powerful and accelerates wealth creation.
  </p>

  <p>
    For example, an investment earning 10% annually does not simply grow by
    10% every year on the original amount. Instead, each year’s interest is
    added to the principal, and future interest is calculated on this larger
    amount.
  </p>

  <h2 className="text-2xl font-bold">
    Why Time Is the Most Important Factor in Compounding
  </h2>

  <p>
    Time plays a more significant role in compound interest than the interest
    rate itself. Even small investments can grow substantially if given enough
    time. Starting early allows your money to compound for longer periods,
    which can lead to dramatic differences in final returns.
  </p>

  <p>
    For instance, investing ₹5,000 per month for 30 years can result in a much
    higher corpus than investing ₹10,000 per month for just 10 years, even
    though the latter involves higher monthly contributions.
  </p>

  <h2 className="text-2xl font-bold">
    Understanding Compounding Frequency
  </h2>

  <p>
    Compounding frequency refers to how often interest is calculated and added
    to the principal. Common compounding frequencies include yearly, quarterly,
    and monthly. The more frequently interest is compounded, the greater the
    total return over time.
  </p>

  <ul className="list-disc pl-6">
    <li><strong>Yearly:</strong> Interest added once per year</li>
    <li><strong>Quarterly:</strong> Interest added four times per year</li>
    <li><strong>Monthly:</strong> Interest added twelve times per year</li>
  </ul>

  <p>
    Although the difference between compounding frequencies may seem small in
    the short term, it becomes noticeable over longer durations.
  </p>

  <h2 className="text-2xl font-bold">
    Compound Interest in Real-Life Investments
  </h2>

  <p>
    Compound interest applies to many real-world financial products, including
    mutual funds, fixed deposits, retirement accounts, recurring deposits, and
    long-term savings plans. It is one of the key reasons why long-term investors
    often outperform short-term traders.
  </p>

  <p>
    In equity mutual funds, for example, returns are reinvested automatically,
    allowing the investment to benefit from compounding over decades.
  </p>

  <h2 className="text-2xl font-bold">
    Compound Interest vs Inflation
  </h2>

  <p>
    While compound interest helps grow wealth, inflation reduces purchasing
    power over time. To truly build wealth, your investment’s compound growth
    rate must exceed the inflation rate.
  </p>

  <p>
    This is why long-term investments that compound at higher rates are crucial
    for maintaining and increasing real wealth.
  </p>

  <h2 className="text-2xl font-bold">
    Common Mistakes to Avoid When Using Compound Interest
  </h2>

  <ul className="list-disc pl-6">
    <li>Starting investments too late</li>
    <li>Withdrawing returns too frequently</li>
    <li>Ignoring compounding frequency</li>
    <li>Underestimating the impact of time</li>
    <li>Not accounting for inflation</li>
  </ul>

  <h2 className="text-2xl font-bold">
    How This Compound Interest Calculator Helps You
  </h2>

  <p>
    This compound interest calculator allows you to quickly estimate how your
    investment can grow over time based on principal amount, interest rate,
    compounding frequency, and duration. It removes the complexity of manual
    calculations and provides instant, reliable results.
  </p>

  <p>
    Whether you are planning for retirement, saving for a major purchase, or
    learning financial concepts, this calculator gives you clarity and confidence
    in your financial decisions.
  </p>

  <h2 className="text-2xl font-bold">
    Why Choose DailyCalcu for Financial Calculations?
  </h2>

  <ul className="list-disc pl-6">
    <li>Accurate and transparent calculations</li>
    <li>No signup or personal data required</li>
    <li>Fast, mobile-friendly experience</li>
    <li>Clear explanations for every calculator</li>
    <li>Completely free to use</li>
  </ul>
      </article>

      {/* Related Calculators */}
      <RelatedCalculators currentSlug="compound-interest-calculator" />

      {/* FAQ */}
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
