"use client";

import { useState } from "react";

export default function PercentageCalculatorClient() {
  const [value, setValue] = useState("");
  const [percent, setPercent] = useState("");

  const valueNum = Number(value);
  const percentNum = Number(percent);

  const result =
    valueNum && percentNum ? (valueNum * percentNum) / 100 : 0;

  return (
    <section className="max-w-2xl mx-auto">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-3">
          Percentage Calculator
        </h1>
        <p className="text-gray-600">
          Calculate percentage values instantly and accurately
        </p>
      </header>

      {/* Calculator Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
        <div className="mb-5">
          <label className="block font-medium mb-2">
            Value
          </label>
          <input
            type="number"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-2">
            Percentage (%)
          </label>
          <input
            type="number"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter percentage"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
          />
        </div>

        {/* Result */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-gray-600">
            Result
          </p>
          <p className="text-2xl font-semibold text-green-700">
            {result.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>

      {/* SEO Content */}
      <article className="prose max-w-none">
        <h2>How does the percentage calculator work?</h2>
        <p>
          This percentage calculator helps you find a percentage of any value.
          Simply enter the value and the percentage to get instant results.
        </p>

        <h3>Formula used</h3>
        <p>
          <strong>Result</strong> = (Value × Percentage) ÷ 100
        </p>

        <h3>Where is it useful?</h3>
        <p>
          Percentage calculations are commonly used in exams, shopping
          discounts, salary hikes, taxes, and data analysis.
        </p>
      </article>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-gray-700">
          <p>
            <strong>How do I calculate percentage?</strong><br />
            Multiply the value by the percentage and divide by 100.
          </p>

          <p>
            <strong>Is this percentage calculator free?</strong><br />
            Yes, DailyCalcu’s percentage calculator is completely free.
          </p>
        </div>
      </section>
    </section>
  );
}
