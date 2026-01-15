"use client";

import { useState } from "react";

export default function CompoundInterestCalculatorClient() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [frequency, setFrequency] = useState(1);

  const P = Number(principal);
  const R = Number(rate) / 100;
  const T = Number(time);
  const n = Number(frequency);

  const amount =
    P && R && T
      ? P * Math.pow(1 + R / n, n * T)
      : 0;

  const interest = amount ? amount - P : 0;

  return (
    <section className="max-w-2xl mx-auto">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-3">
          Compound Interest Calculator
        </h1>
        <p className="text-gray-600">
          Calculate compound interest and total investment value
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
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">
            Time (Years)
          </label>
          <input
            type="number"
            className="w-full border rounded-lg px-3 py-2"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-2">
            Compounding Frequency
          </label>
          <select
            className="w-full border rounded-lg px-3 py-2"
            value={frequency}
            onChange={(e) => setFrequency(Number(e.target.value))}
          >
            <option value={1}>Yearly</option>
            <option value={2}>Half-Yearly</option>
            <option value={4}>Quarterly</option>
            <option value={12}>Monthly</option>
          </select>
        </div>

        {amount > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Total Amount</p>
              <p className="text-xl font-semibold text-green-700">
                ₹{amount.toFixed(2)}
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Total Interest</p>
              <p className="text-xl font-semibold text-blue-700">
                ₹{interest.toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Content */}
      <article className="prose max-w-none">
        <h2>What is Compound Interest?</h2>
        <p>
          Compound interest is interest calculated on the initial principal
          and also on the accumulated interest of previous periods.
        </p>

        <h3>Formula</h3>
        <p>
          <strong>A</strong> = P × (1 + r / n)<sup>n × t</sup>
        </p>
      </article>
    </section>
  );
}
