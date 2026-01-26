"use client";

import { useState } from "react";

/* ======================
   REUSABLE COMPONENTS
====================== */
function ResultCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className={`border rounded-lg p-4 ${color}`}>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}

function ProgressBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="mb-4">
      <p className="text-sm text-gray-600 mb-1">
        {label} – {value.toFixed(1)}%
      </p>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`${color} h-3 rounded-full`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

/* ======================
   MAIN COMPONENT
====================== */
export default function CompoundInterestCalculatorClient() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [frequency, setFrequency] = useState("1");

  const P = Number(principal);
  const R = Number(rate) / 100;
  const T = Number(time);
  const n = Number(frequency);

  let amount = 0;
  let interest = 0;

  if (P && R && T) {
    amount = P * Math.pow(1 + R / n, n * T);
    interest = amount - P;
  }

  const growthPercent =
    amount > 0 ? Math.min((interest / amount) * 100, 100) : 0;

  return (
    <section className="max-w-2xl mx-auto">

      {/* HEADER */}
      <header className="mb-8 text-center mt-6">
        <h1 className="text-4xl font-bold mb-3">
          Compound Interest Calculator
        </h1>
        <p className="text-gray-600">
          Calculate compound interest and future investment value
        </p>
      </header>

      {/* CALCULATOR */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-10">

        <div className="mb-4">
          <label className="block font-medium mb-2">Principal Amount (₹)</label>
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
          <label className="block font-medium mb-2">Time (Years)</label>
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
            onChange={(e) => setFrequency(e.target.value)}
          >
            <option value="1">Yearly</option>
            <option value="2">Half-Yearly</option>
            <option value="4">Quarterly</option>
            <option value="12">Monthly</option>
          </select>
        </div>

        {amount > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ResultCard
              label="Total Amount"
              value={`₹${amount.toFixed(2)}`}
              color="bg-green-50 border-green-200 text-green-700"
            />
            <ResultCard
              label="Total Interest Earned"
              value={`₹${interest.toFixed(2)}`}
              color="bg-blue-50 border-blue-200 text-blue-700"
            />
          </div>
        )}
      </div>

      {/* VISUALIZATION */}
      {amount > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">
            Investment Growth Visualization
          </h2>

          <ProgressBar
            label="Principal Contribution"
            value={100 - growthPercent}
            color="bg-blue-600"
          />

          <ProgressBar
            label="Interest Growth"
            value={growthPercent}
            color="bg-green-600"
          />
        </section>
      )}

    </section>
  );
}
