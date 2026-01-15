import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Online Calculators – DailyCalcu",
  description:
    "Explore free online calculators on DailyCalcu including salary increment calculator, age calculator, and more everyday tools.",
};

const calculators = [
  {
    title: "Salary Increment Calculator",
    description:
      "Calculate your new salary after increment percentage easily.",
    href: "/calculator/salary-increment-calculator",
  },
  {
    title: "Age Calculator",
    description:
      "Calculate your exact age in years, months, and days.",
    href: "/calculator/age-calculator",
  },
  {
  title: "Percentage Calculator",
  description: "Calculate percentage values quickly and accurately.",
  href: "/calculator/percentage-calculator",
},
{
  title: "Date Difference Calculator",
  description: "Calculate the number of days between two dates.",
  href: "/calculator/date-difference-calculator",
},
{
  title: "BMI Calculator",
  description: "Calculate your Body Mass Index and health category.",
  href: "/calculator/bmi-calculator",
},
{
  title: "GST Calculator",
  description: "Add or remove GST and calculate final amount.",
  href: "/calculator/gst-calculator",
},
{
  title: "Simple Interest Calculator",
  description: "Calculate simple interest and total amount easily.",
  href: "/calculator/simple-interest-calculator",
},
{
  title: "Compound Interest Calculator",
  description: "Calculate compound interest and total investment value.",
  href: "/calculator/compound-interest-calculator",
},
{
  title: "SIP Calculator",
  description: "Calculate SIP returns and total investment value.",
  href: "/calculator/sip-calculator",
},
{
  title: "PPF Calculator",
  description: "Calculate PPF maturity amount and interest earned.",
  href: "/calculator/ppf-calculator",
},
{
  title: "BMR & Calorie Calculator",
  description: "Calculate BMR and daily calorie requirements.",
  href: "/calculator/bmr-calorie-calculator",
},
{
  title: "Calorie Deficit Calculator",
  description: "Calculate calories needed for weight loss.",
  href: "/calculator/calorie-deficit-calculator",
},
{
  title: "Ideal Weight Calculator",
  description: "Calculate ideal body weight using medical formulas.",
  href: "/calculator/ideal-weight-calculator",
},


];

export default function CalculatorListingPage() {
  return (
    <section className="max-w-6xl mx-auto">
      {/* Page Header */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-3">
          Free Online Calculators
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          DailyCalcu provides simple, accurate, and free calculators for
          everyday needs like salary, age, percentages, and more.
        </p>
      </header>

      {/* Calculator Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map((calc) => (
          <Link
            key={calc.href}
            href={calc.href}
            className="group bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
              {calc.title}
            </h2>
            <p className="text-gray-600 text-sm">
              {calc.description}
            </p>

            <span className="inline-block mt-4 text-sm text-blue-600 font-medium">
              Use Calculator →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
