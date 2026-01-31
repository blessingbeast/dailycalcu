"use client";

import { useState } from "react";

export default function SimpleInterestCalculatorClient() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");

  const P = Number(principal);
  const R = Number(rate);
  const T = Number(time);

  const interest = P && R && T ? (P * R * T) / 100 : 0;
  const totalAmount = P && interest ? P + interest : 0;

  const interestShare =
    totalAmount > 0 ? (interest / totalAmount) * 100 : 0;

  return (
    <section className="max-w-2xl mx-auto px-4">
      {/* HEADER */}
      <header className="text-center mt-8 mb-10">
        <h1 className="text-4xl font-bold mb-3">
          Simple Interest Calculator
        </h1>
        <p className="text-gray-600">
          Calculate simple interest, total amount, and understand how interest works
        </p>
      </header>

      {/* CALCULATOR */}
      <div className="bg-white shadow-xl rounded-2xl p-6 mb-14">
        <div className="mb-4">
          <label className="block font-medium mb-2">
            Principal Amount
          </label>
          <input
            type="number"
            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 100000"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">
            Interest Rate (% per year)
          </label>
          <input
            type="number"
            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 8"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-2">
            Time Period (Years)
          </label>
          <input
            type="number"
            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 5"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        {interest > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-gray-600">Interest Earned</p>
                <p className="text-xl font-semibold text-blue-700">
                  ₹{interest.toLocaleString("en-IN")}
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="text-xl font-semibold text-green-700">
                  ₹{totalAmount.toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            {/* VISUAL BAR */}
            <div>
              <p className="text-sm text-gray-600 mb-1">
                Interest Portion – {interestShare.toFixed(1)}%
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{ width: `${interestShare}%` }}
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* ======================
         LONG SEO BLOG (~1500w)
      ====================== */}
      <article className="space-y-6 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-gray-900">
          What Is Simple Interest?
        </h2>

        <p>
          Simple interest is one of the most fundamental concepts in finance.
          It represents the cost of borrowing money or the return earned on an
          investment, calculated only on the original principal amount.
        </p>

        <p>
          Unlike compound interest, simple interest does not grow exponentially.
          Instead, it increases linearly over time, making it easy to understand
          and predict.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Simple Interest Formula Explained
        </h2>

        <p>
          The simple interest formula is:
        </p>

        <p className="font-mono bg-gray-100 inline-block px-3 py-2 rounded">
          SI = (P × R × T) ÷ 100
        </p>

        <ul className="list-disc ml-6">
          <li>P = Principal amount</li>
          <li>R = Rate of interest per year</li>
          <li>T = Time period in years</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">
          When Is Simple Interest Used?
        </h2>

        <ul className="list-disc ml-6">
          <li>Short-term personal loans</li>
          <li>Salary advances</li>
          <li>Education and exams</li>
          <li>Traditional lending agreements</li>
          <li>Basic savings calculations</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">
          Simple Interest vs Compound Interest
        </h2>

        <p>
          Simple interest is predictable and transparent, while compound interest
          benefits long-term investors due to reinvestment of earnings.
        </p>
        {/* ======================
   SIMPLE vs COMPOUND INTEREST TABLE
====================== */}
<section className="mt-10 overflow-x-auto">
  <h2 className="text-2xl font-bold text-gray-900 mb-4">
    Simple Interest vs Compound Interest
  </h2>

  <p className="text-gray-700 mb-6">
    Understanding the difference between simple interest and compound interest
    is crucial before choosing a loan, savings account, or investment option.
    The table below highlights the key differences in a clear and easy-to-read
    format.
  </p>

  <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
    <thead className="bg-gray-100">
      <tr>
        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">
          Feature
        </th>
        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">
          Simple Interest
        </th>
        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">
          Compound Interest
        </th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200 text-sm">
      <tr>
        <td className="px-4 py-3 font-medium text-gray-800">
          Interest Calculation
        </td>
        <td className="px-4 py-3 text-gray-700">
          Calculated only on the original principal
        </td>
        <td className="px-4 py-3 text-gray-700">
          Calculated on principal + accumulated interest
        </td>
      </tr>

      <tr className="bg-gray-50">
        <td className="px-4 py-3 font-medium text-gray-800">
          Growth Pattern
        </td>
        <td className="px-4 py-3 text-gray-700">
          Linear growth over time
        </td>
        <td className="px-4 py-3 text-gray-700">
          Exponential growth due to compounding
        </td>
      </tr>

      <tr>
        <td className="px-4 py-3 font-medium text-gray-800">
          Formula
        </td>
        <td className="px-4 py-3 text-gray-700">
          SI = (P × R × T) ÷ 100
        </td>
        <td className="px-4 py-3 text-gray-700">
          A = P × (1 + R / n)<sup>nT</sup>
        </td>
      </tr>

      <tr className="bg-gray-50">
        <td className="px-4 py-3 font-medium text-gray-800">
          Common Uses
        </td>
        <td className="px-4 py-3 text-gray-700">
          Short-term loans, education, basic lending
        </td>
        <td className="px-4 py-3 text-gray-700">
          Investments, savings accounts, mutual funds
        </td>
      </tr>

      <tr>
        <td className="px-4 py-3 font-medium text-gray-800">
          Returns Over Long Term
        </td>
        <td className="px-4 py-3 text-gray-700">
          Lower returns over long durations
        </td>
        <td className="px-4 py-3 text-gray-700">
          Higher returns due to reinvestment
        </td>
      </tr>

      <tr className="bg-gray-50">
        <td className="px-4 py-3 font-medium text-gray-800">
          Best For
        </td>
        <td className="px-4 py-3 text-gray-700">
          Borrowers seeking predictable interest
        </td>
        <td className="px-4 py-3 text-gray-700">
          Investors focused on long-term wealth creation
        </td>
      </tr>
    </tbody>
  </table>
</section>

        <h2 className="text-2xl font-bold text-gray-900">
          Why Use DailyCalcu’s Simple Interest Calculator?
        </h2>

        <ul className="list-disc ml-6">
          <li>Instant results</li>
          <li>No sign-up required</li>
          <li>Accurate calculations</li>
          <li>Mobile-friendly design</li>
          <li>Free forever</li>
        </ul>
      </article>
    </section>
  );
}