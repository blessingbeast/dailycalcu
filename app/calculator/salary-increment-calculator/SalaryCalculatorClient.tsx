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

    {/* FAQ */}
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 text-gray-700">
        <p>
          <strong>What is a salary increment?</strong><br />
          A salary increment is an increase in your salary, usually given once
          a year by employers.
        </p>

        <p>
          <strong>Is this calculator accurate?</strong><br />
          Yes, it uses a standard percentage-based calculation method.
        </p>

        <p>
          <strong>Is this salary increment calculator free?</strong><br />
          Yes, it is completely free to use.
        </p>
      </div>
    </section>
  </section>
);
}