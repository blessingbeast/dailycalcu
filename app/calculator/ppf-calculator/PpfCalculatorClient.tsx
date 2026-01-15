"use client";

import { useState } from "react";

export default function PpfCalculatorClient() {
  const [annualInvestment, setAnnualInvestment] = useState("");
  const [rate, setRate] = useState("7.1");
  const [years, setYears] = useState("15");

  const P = Number(annualInvestment);
  const r = Number(rate) / 100;
  const n = Number(years);

  let maturityAmount = 0;
  let investedAmount = 0;
  let interestEarned = 0;

  if (P && r && n) {
    // PPF formula: FV = P × [ ((1 + r)^n − 1) / r ] × (1 + r)
    maturityAmount =
      P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

    investedAmount = P * n;
    interestEarned = maturityAmount - investedAmount;
  }

  return (
    <section className="max-w-2xl mx-auto">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-3">
          PPF Calculator
        </h1>
        <p className="text-gray-600">
          Calculate PPF maturity amount and interest earned
        </p>
      </header>

      {/* Calculator */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
        <div className="mb-4">
          <label className="block font-medium mb-2">
            Annual Investment (₹)
          </label>
          <input
            type="number"
            className="w-full border rounded-lg px-3 py-2"
            value={annualInvestment}
            onChange={(e) => setAnnualInvestment(e.target.value)}
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

        <div className="mb-6">
          <label className="block font-medium mb-2">
            Investment Duration (Years)
          </label>
          <input
            type="number"
            max={15}
            className="w-full border rounded-lg px-3 py-2"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
          <p className="text-xs text-gray-500 mt-1">
            PPF has a standard lock-in period of 15 years
          </p>
        </div>

        {maturityAmount > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Invested Amount</p>
              <p className="text-xl font-semibold text-blue-700">
                ₹{investedAmount.toLocaleString("en-IN")}
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Interest Earned</p>
              <p className="text-xl font-semibold text-green-700">
                ₹{interestEarned.toLocaleString("en-IN")}
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Maturity Amount</p>
              <p className="text-xl font-semibold text-purple-700">
                ₹{maturityAmount.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Content */}
      <article className="prose max-w-none">
        <h2>What is PPF?</h2>
        <p>
          Public Provident Fund (PPF) is a long-term government-backed savings
          scheme offering tax benefits and stable returns.
        </p>

        <h3>PPF Formula</h3>
        <p>
          FV = P × [ ( (1 + r)<sup>n</sup> − 1 ) ÷ r ] × (1 + r)
        </p>
      </article>
    </section>
  );
}
