"use client";

import { useState } from "react";

export default function SipCalculatorClient() {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");

  const P = Number(monthlyInvestment);
  const r = Number(rate) / 100 / 12;
  const n = Number(years) * 12;

  let totalValue = 0;
  let investedAmount = 0;
  let returns = 0;

  if (P && r && n) {
    totalValue =
      P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    investedAmount = P * n;
    returns = totalValue - investedAmount;
  }

  return (
    <section className="max-w-2xl mx-auto">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-3">
          SIP Calculator
        </h1>
        <p className="text-gray-600">
          Calculate SIP returns and investment growth easily
        </p>
      </header>

      {/* Calculator */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
        <div className="mb-4">
          <label className="block font-medium mb-2">
            Monthly Investment (₹)
          </label>
          <input
            type="number"
            className="w-full border rounded-lg px-3 py-2"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">
            Expected Return (% per year)
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
            className="w-full border rounded-lg px-3 py-2"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
        </div>

        {totalValue > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Invested Amount</p>
              <p className="text-xl font-semibold text-blue-700">
                ₹{investedAmount.toLocaleString("en-IN")}
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Estimated Returns</p>
              <p className="text-xl font-semibold text-green-700">
                ₹{returns.toLocaleString("en-IN")}
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Total Value</p>
              <p className="text-xl font-semibold text-purple-700">
                ₹{totalValue.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Content */}
      <article className="prose max-w-none">
        <h2>What is SIP?</h2>
        <p>
          SIP (Systematic Investment Plan) allows you to invest a fixed amount
          regularly in mutual funds, helping build wealth through compounding.
        </p>

        <h3>SIP Formula</h3>
        <p>
          FV = P × [ ( (1 + r)<sup>n</sup> − 1 ) ÷ r ] × (1 + r)
        </p>
      </article>
    </section>
  );
}
