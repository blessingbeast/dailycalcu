import { Metadata } from "next";
import GstCalculatorClient from "./GstCalculatorClient";
import RelatedCalculators from "@/app/components/RelatedCalculators";


export const metadata: Metadata = {
  title: "GST Calculator | Calculate GST Amount & GST Inclusive Price – DailyCalcu",
  description:
    "Use this free GST calculator to add or remove GST and calculate GST amount, GST inclusive price, and GST exclusive price instantly.",
  alternates: {
    canonical: "/gst-calculator",
  },
};

/* ======================
   FAQ DATA
====================== */
const faqs = [
  {
    question: "What is GST?",
    answer:
      "GST (Goods and Services Tax) is an indirect tax applied on the supply of goods and services in India.",
  },
  {
    question: "What are common GST rates in India?",
    answer:
      "Common GST rates include 5%, 12%, 18%, and 28% depending on the category of goods or services.",
  },
  {
    question: "Can I remove GST from a price?",
    answer:
      "Yes, this calculator can extract GST from a GST-inclusive price.",
  },
  {
    question: "Is this GST calculator accurate?",
    answer:
      "Yes, it uses standard GST formulas approved for tax calculations.",
  },
  {
    question: "Is this GST calculator free?",
    answer:
      "Yes, the GST calculator on DailyCalcu is completely free to use.",
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
      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* CALCULATOR */}
      <GstCalculatorClient />

      {/* ======================
          LONG SEO BLOG
      ====================== */}
      <article className="max-w-4xl mx-auto mt-20 px-4 text-gray-700 leading-relaxed space-y-6">

        <section className="mt-10">
  <h3 className="text-xl font-semibold mb-4">
    Common GST Slabs in India
  </h3>

  <div className="space-y-3">
    {[
      { rate: "5%", label: "Essential goods", color: "bg-green-500", width: "5%" },
      { rate: "12%", label: "Processed food, services", color: "bg-blue-500", width: "12%" },
      { rate: "18%", label: "Most services & electronics", color: "bg-purple-500", width: "18%" },
      { rate: "28%", label: "Luxury & sin goods", color: "bg-red-500", width: "28%" },
    ].map((item) => (
      <div key={item.rate}>
        <div className="flex justify-between text-sm mb-1">
          <span>{item.rate} – {item.label}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className={`${item.color} h-3 rounded-full`}
            style={{ width: item.width }}
          />
        </div>
      </div>
    ))}
  </div>
</section>
{/* =======================
   LONG-FORM SEO BLOG
======================= */}


  <h2 className="text-2xl font-bold text-gray-900">
    GST Calculator – Understand GST Calculation Clearly
  </h2>

  <p>
    Goods and Services Tax (GST) is an indirect tax applied to the supply of goods
    and services in many countries, including India. While GST simplifies the
    tax structure by replacing multiple indirect taxes, calculating it manually
    can still be confusing for many people.
  </p>

  <p>
    This GST Calculator helps you instantly calculate GST amount, final price,
    and base price without making calculation mistakes. Whether you are a
    business owner, freelancer, student, or consumer, this tool saves time and
    ensures accuracy.
  </p>

  <h2 className="text-2xl font-bold text-gray-900">
    How Does a GST Calculator Work?
  </h2>

  <p>
    A GST calculator applies the selected GST rate to the entered amount and
    instantly shows the tax value and final payable amount. It supports both
    scenarios:
  </p>

  <ul className="list-disc ml-6">
    <li>Adding GST to a base amount</li>
    <li>Removing GST from an inclusive price</li>
  </ul>

  <h3 className="text-xl font-semibold text-gray-900">
    GST Calculation Formulas
  </h3>

  <div className="bg-gray-50 border rounded-lg p-4 text-sm">
    <p>
      <strong>Add GST:</strong><br />
      GST Amount = (Amount × GST Rate) ÷ 100<br />
      Final Amount = Amount + GST Amount
    </p>

    <p className="mt-3">
      <strong>Remove GST:</strong><br />
      GST Amount = (Amount × GST Rate) ÷ (100 + GST Rate)<br />
      Base Amount = Amount − GST Amount
    </p>
  </div>

  <h2 className="text-2xl font-bold text-gray-900">
    Common GST Rates in India
  </h2>

  <p>
    In India, GST is charged at different slab rates depending on the category
    of goods or services. The most commonly used GST slabs are:
  </p>

  <ul className="list-disc ml-6">
    <li><strong>5%</strong> – Essential goods</li>
    <li><strong>12%</strong> – Processed food, hotel services</li>
    <li><strong>18%</strong> – Most services and electronics</li>
    <li><strong>28%</strong> – Luxury and sin goods</li>
  </ul>

  <h2 className="text-2xl font-bold text-gray-900">
    Latest GST Rules in India (Overview)
  </h2>

  <p>
    The Indian government regularly updates GST rules to improve compliance and
    transparency. Some important points include:
  </p>

  <ul className="list-disc ml-6">
    <li>Mandatory GST registration above turnover threshold</li>
    <li>E-invoicing for eligible businesses</li>
    <li>Composition scheme for small traders</li>
    <li>Online return filing through GST portal</li>
  </ul>

  <p className="text-sm text-gray-500">
    Note: GST rates and rules may change. Always verify with official government
    notifications for compliance.
  </p>

  <h2 className="text-2xl font-bold text-gray-900">
    GST and Tax Systems in Other Countries
  </h2>

  <p>
    Although GST originated in India, similar tax systems exist worldwide. This
    calculator is helpful for understanding indirect tax logic across countries.
  </p>

  <ul className="list-disc ml-6">
    <li><strong>Australia:</strong> 10% GST on most goods and services</li>
    <li><strong>United Kingdom:</strong> VAT at 20% (standard rate)</li>
    <li><strong>Canada:</strong> 5% GST plus provincial taxes</li>
    <li><strong>UAE:</strong> 5% VAT on taxable supplies</li>
  </ul>

  <h2 className="text-2xl font-bold text-gray-900">
    Why Use an Online GST Calculator?
  </h2>

  <ul className="list-disc ml-6">
    <li>Eliminates manual calculation errors</li>
    <li>Saves time for billing and invoicing</li>
    <li>Helps in pricing decisions</li>
    <li>Useful for businesses and individuals</li>
    <li>No registration or personal data required</li>
  </ul>

  <h2 className="text-2xl font-bold text-gray-900">
    Real-Life Use Cases of GST Calculator
  </h2>

  <p>
    GST calculators are widely used for preparing invoices, calculating tax
    liability, estimating purchase costs, filing returns, and understanding tax
    breakdowns in day-to-day transactions.
  </p>

  <h2 className="text-2xl font-bold text-gray-900">
    Is This GST Calculator Accurate?
  </h2>

  <p>
    Yes. This calculator follows standard GST formulas used by tax professionals.
    However, it should be used for estimation purposes only and not as a
    substitute for official accounting or legal advice.
  </p>

  <h2 className="text-2xl font-bold text-gray-900">
    Why Choose DailyCalcu?
  </h2>

  <p>
    DailyCalcu provides clean, fast, and accurate calculators designed for real
    users. Our tools are mobile-friendly, easy to understand, and completely
    free to use without intrusive ads or unnecessary sign-ups.
  </p>

</article>


      {/* RELATED CALCULATORS */}
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
