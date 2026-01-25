"use client";

import { useState } from "react";

export default function SalaryCalculatorClient() {
  // Store inputs as STRING for better UX
  const [salary, setSalary] = useState("");
  const [increment, setIncrement] = useState("5");

  // Convert to numbers safely
  const salaryNum = Number(salary);
  const incrementNum = Number(increment);

  const incrementAmount =
    salaryNum && incrementNum
      ? (salaryNum * incrementNum) / 100
      : 0;

  const newSalary =
    salaryNum && incrementNum
      ? salaryNum + incrementAmount
      : 0;

  return (
  <section className="max-w-2xl mx-auto">
    {/* Page Header */}
    <header className="mb-8 text-center">
      <h1 className="text-4xl font-bold mb-3">
        Salary Increment Calculator
      </h1>
      <p className="text-gray-600">
        Calculate your new salary instantly after increment
      </p>
    </header>

    {/* Calculator Card */}
    <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
      {/* Current Salary */}
      <div className="mb-5">
        <label className="block font-medium mb-2">
          Current Salary
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            ₹
          </span>
          <input
            type="number"
            inputMode="numeric"
            className="w-full border rounded-lg pl-8 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your current salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
      </div>

      {/* Increment Percentage */}
      <div className="mb-6">
        <label className="block font-medium mb-2">
          Increment Percentage
        </label>
        <div className="relative">
          <input
            type="number"
            inputMode="numeric"
            className="w-full border rounded-lg pr-8 pl-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={increment}
            onChange={(e) => setIncrement(e.target.value)}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            %
          </span>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-gray-600">
            Increment Amount
          </p>
          <p className="text-2xl font-semibold text-blue-700">
            ₹{incrementAmount.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-gray-600">
            New Salary
          </p>
          <p className="text-2xl font-semibold text-green-700">
            ₹{newSalary.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>
    </div>
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

    {/* SEO Content */}
    <article className="prose max-w-none">
      <h2>How does salary increment work?</h2>
      <p>
        A salary increment is an increase in your existing salary, usually
        expressed as a percentage. Employers often provide annual salary hikes
        based on performance, company growth, or inflation.
      </p>

      <h3>Formula used</h3>
      <p>
        <strong>Increment Amount</strong> = Current Salary × (Increment % ÷ 100)
      </p>
      <p>
        <strong>New Salary</strong> = Current Salary + Increment Amount
      </p>
    </article>
<section className="mb-10 mt-8">
  <h1 className="text-3xl font-semibold mb-4">
    Salary Increment Calculator
  </h1>

  <p className="text-gray-700 mb-4">
    A salary increment is an increase in an employee’s existing salary, usually
    offered during annual appraisals, promotions, or performance reviews.
    Understanding how much your salary will increase after an increment helps
    you plan your monthly budget, savings goals, investments, and lifestyle
    expenses more effectively.
  </p>

  <p className="text-gray-700 mb-4">
    This salary increment calculator is designed to help you quickly calculate
    your updated salary after applying a percentage increase. By entering your
    current salary and the expected increment percentage, you can instantly see
    your increment amount and your new salary without doing any manual
    calculations.
  </p>

  <p className="text-gray-700 mb-6">
    Whether you are preparing for a salary appraisal, evaluating a new job
    offer, or simply curious about how a percentage hike impacts your income,
    this calculator provides accurate and instant results for both monthly and
    yearly salaries.
  </p>

  <h2 className="text-2xl font-semibold mb-3">
    What Is a Salary Increment?
  </h2>

  <p className="text-gray-700 mb-4">
    A salary increment refers to an increase in an employee’s base pay. It is
    commonly given once a year but may also occur during promotions, role
    changes, or company-wide salary revisions. Salary increments are usually
    expressed as a percentage of the current salary.
  </p>

  <p className="text-gray-700 mb-6">
    For example, if your current monthly salary is ₹30,000 and you receive a
    10% increment, your salary increase will be ₹3,000, making your new monthly
    salary ₹33,000. Calculating this manually for different percentages can be
    time-consuming, which is why using a salary increment calculator is helpful.
  </p>

  <h2 className="text-2xl font-semibold mb-3">
    How to Calculate Salary Increment
  </h2>

  <p className="text-gray-700 mb-4">
    The formula to calculate salary increment is simple:
  </p>

  <p className="text-gray-700 font-medium mb-4">
    Increment Amount = (Current Salary × Increment Percentage) ÷ 100
  </p>

  <p className="text-gray-700 mb-4">
    New Salary = Current Salary + Increment Amount
  </p>

  <p className="text-gray-700 mb-6">
    While the formula is straightforward, calculating increments repeatedly for
    different scenarios can be inconvenient. This calculator automates the
    process and eliminates calculation errors.
  </p>

  <h2 className="text-2xl font-semibold mb-3">
    Why Use a Salary Increment Calculator?
  </h2>

  <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
    <li>Instantly calculate your new salary after an increment</li>
    <li>Eliminate manual calculation errors</li>
    <li>Plan finances and savings more effectively</li>
    <li>Compare different increment percentages easily</li>
    <li>Useful for appraisal discussions and job negotiations</li>
  </ul>

  <h2 className="text-2xl font-semibold mb-3">
    Monthly vs Yearly Salary Increment
  </h2>

  <p className="text-gray-700 mb-4">
    You can use this calculator for both monthly and yearly salary values. If
    you enter your monthly salary, the result will be your updated monthly
    salary. If you enter your annual salary, the calculator will give your new
    annual salary after the increment.
  </p>

  <p className="text-gray-700 mb-6">
    Make sure the increment percentage applies to the same time period as your
    salary input to get accurate results.
  </p>

  <h2 className="text-2xl font-semibold mb-3">
    Who Can Use This Calculator?
  </h2>

  <p className="text-gray-700 mb-4">
    This salary increment calculator is useful for employees, job seekers, HR
    professionals, and anyone who wants to understand how a salary hike affects
    income. It is especially helpful during appraisal seasons or when comparing
    multiple job offers.
  </p>

  <p className="text-gray-700">
    The calculator is completely free to use, works instantly, and does not
    require any registration or personal information.
  </p>
</section>

    
  </section>
);
}