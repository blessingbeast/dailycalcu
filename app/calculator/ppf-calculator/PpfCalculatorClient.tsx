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

  if (P > 0 && r > 0 && n > 0) {
    maturityAmount =
      P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

    investedAmount = P * n;
    interestEarned = maturityAmount - investedAmount;
  }

  const interestPercent =
    maturityAmount > 0
      ? (interestEarned / maturityAmount) * 100
      : 0;

  return (
    <section className="max-w-3xl mx-auto px-4">
      {/* HEADER */}
      <header className="mb-10 text-center mt-6">
        <h1 className="text-4xl font-bold mb-3">
          PPF Calculator
        </h1>
        <p className="text-gray-600">
          Calculate PPF maturity amount, interest earned, and total investment value
        </p>
      </header>

      {/* INPUT CARD */}
      <div className="bg-white shadow-xl rounded-2xl p-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              Annual Investment (₹)
            </label>
            <input
              type="number"
              placeholder="Up to ₹1,50,000"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              value={annualInvestment}
              onChange={(e) => setAnnualInvestment(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Interest Rate (%)
            </label>
            <input
              type="number"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Investment Period (Years)
            </label>
            <input
              type="number"
              max={15}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              value={years}
              onChange={(e) => setYears(e.target.value)}
            />
            <p className="text-xs text-gray-500 mt-1">
              Standard PPF lock-in is 15 years
            </p>
          </div>
        </div>

        {/* RESULTS */}
        {maturityAmount > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <ResultCard
                title="Total Invested"
                value={`₹${investedAmount.toLocaleString("en-IN")}`}
                color="blue"
              />
              <ResultCard
                title="Interest Earned"
                value={`₹${interestEarned.toLocaleString("en-IN")}`}
                color="green"
              />
              <ResultCard
                title="Maturity Value"
                value={`₹${maturityAmount.toLocaleString("en-IN")}`}
                color="purple"
              />
            </div>

            {/* VISUAL BREAKDOWN */}
            <div className="mt-8">
              <p className="text-sm text-gray-600 mb-2">
                Interest Contribution ({interestPercent.toFixed(1)}%)
              </p>
              <div className="w-full bg-gray-200 h-4 rounded-full">
                <div
                  className="bg-green-600 h-4 rounded-full"
                  style={{ width: `${interestPercent}%` }}
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* TABLE COMPARISON */}
      <section className="mt-14 overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4">
          PPF vs Other Popular Investments
        </h2>

        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Investment</th>
              <th className="px-4 py-3 text-left">Risk</th>
              <th className="px-4 py-3 text-left">Returns</th>
              <th className="px-4 py-3 text-left">Tax Benefit</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="px-4 py-3 font-medium">PPF</td>
              <td className="px-4 py-3">Very Low</td>
              <td className="px-4 py-3">Stable</td>
              <td className="px-4 py-3">EEE</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium">Fixed Deposit</td>
              <td className="px-4 py-3">Low</td>
              <td className="px-4 py-3">Moderate</td>
              <td className="px-4 py-3">Taxable</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">SIP</td>
              <td className="px-4 py-3">Market Risk</td>
              <td className="px-4 py-3">High (Long Term)</td>
              <td className="px-4 py-3">Partial</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
}

function ResultCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: "blue" | "green" | "purple";
}) {
  const map = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    green: "bg-green-50 text-green-700 border-green-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
  };

  return (
    <div className={`border rounded-xl p-4 ${map[color]}`}>
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}