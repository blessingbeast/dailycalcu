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
  const total = P ? P + interest : 0;

  return (
    <section className="max-w-2xl mx-auto">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-3">
          Simple Interest Calculator
        </h1>
        <p className="text-gray-600">
          Calculate simple interest and total amount instantly
        </p>
      </header>

      {/* Calculator */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
        <div className="mb-4">
          <label className="block font-medium mb-2">
            Principal Amount
          </label>
          <input
            type="number"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter principal"
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
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter interest rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-2">
            Time (Years)
          </label>
          <input
            type="number"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter time in years"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        {interest > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Interest</p>
              <p className="text-xl font-semibold text-green-700">
                ₹{interest.toFixed(2)}
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Total Amount</p>
              <p className="text-xl font-semibold text-blue-700">
                ₹{total.toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Content */}
      <article className="prose max-w-none">
        <h2>What is Simple Interest?</h2>
        <p>
          Simple Interest is calculated on the original principal amount
          for the entire duration of the loan or investment.
        </p>

        <h3>Formula</h3>
        <p>
          <strong>SI</strong> = (Principal × Rate × Time) ÷ 100
        </p>
      </article>
    </section>
  );
}
