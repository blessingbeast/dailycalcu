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

  if (P > 0 && r > 0 && n > 0) {
    totalValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    investedAmount = P * n;
    returns = totalValue - investedAmount;
  }

  const investmentPercent =
    totalValue > 0 ? (investedAmount / totalValue) * 100 : 0;

  const returnsPercent =
    totalValue > 0 ? (returns / totalValue) * 100 : 0;

  return (
    <section className="max-w-2xl mx-auto">

      {/* HEADER */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-3 mt-6">
          SIP Calculator
        </h1>
        <p className="text-gray-600">
          Calculate SIP returns and long-term investment growth
        </p>
      </header>

      {/* CALCULATOR */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
        <Input
          label="Monthly Investment (₹)"
          value={monthlyInvestment}
          onChange={setMonthlyInvestment}
        />

        <Input
          label="Expected Return (% per year)"
          value={rate}
          onChange={setRate}
        />

        <Input
          label="Investment Duration (Years)"
          value={years}
          onChange={setYears}
        />

        {totalValue > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <ResultCard
              label="Invested Amount"
              value={investedAmount}
              color="blue"
            />
            <ResultCard
              label="Estimated Returns"
              value={returns}
              color="green"
            />
            <ResultCard
              label="Total Value"
              value={totalValue}
              color="purple"
            />
          </div>
        )}
      </div>

      {/* =======================
         SIP CHARTS
      ======================= */}
      {totalValue > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">
            Investment Breakdown
          </h2>

          {/* BAR CHART */}
          <ProgressBar
            label="Invested Amount"
            value={investmentPercent}
            color="bg-blue-600"
          />

          <ProgressBar
            label="Estimated Returns"
            value={returnsPercent}
            color="bg-green-600"
          />

          <p className="text-sm text-gray-500 mt-3">
            This chart shows how much of your final SIP value comes from
            investment versus market returns.
          </p>
        </section>
      )}

      {/* =======================
         LONG-FORM BLOG
      ======================= */}
{/* =======================
   LONG-FORM SIP BLOG
======================= */}
<article className="prose max-w-none mt-20">

  <h2 className="text-2xl font-bold mt-3">What Is a SIP (Systematic Investment Plan)?</h2>
  <p>
    A Systematic Investment Plan (SIP) is a method of investing in mutual funds
    where you invest a fixed amount at regular intervals such as monthly,
    quarterly, or yearly. SIPs are one of the most popular investment options
    because they encourage disciplined investing and allow investors to build
    wealth gradually over time.
  </p>

  <p>
    Instead of investing a large amount at once, SIP allows you to start with a
    small monthly investment, making it ideal for beginners, salaried
    individuals, and long-term investors.
  </p>

  <h2 className="text-2xl font-bold mt-3">How Does a SIP Work?</h2>
  <p>
    In a SIP, a fixed amount is automatically invested in a chosen mutual fund
    scheme at regular intervals. Each investment buys units of the fund based
    on the current Net Asset Value (NAV). Over time, this leads to accumulation
    of units and benefits from compounding.
  </p>

  <p>
    SIPs follow a concept known as <strong>rupee cost averaging</strong>, which
    helps reduce the impact of market volatility by spreading investments across
    market cycles.
  </p>

  <h2 className="text-2xl font-bold mt-3">How Does a SIP Calculator Work?</h2>
  <p>
    A SIP calculator estimates the future value of your investments based on
    three inputs:
  </p>

  <ul className="list-disc ml-6 text-gray-700">
    <li>Monthly investment amount</li>
    <li>Expected annual rate of return</li>
    <li>Investment duration</li>
  </ul>

  <p>
    The calculator uses a compound interest-based formula to compute the total
    value of your SIP investments at the end of the investment period.
  </p>

  <p>
    <strong>SIP Future Value Formula:</strong><br />
    FV = P × [ ((1 + r)<sup>n</sup> − 1) ÷ r ] × (1 + r)
  </p>

  <p>
    Where P is the monthly investment, r is the monthly rate of return, and n is
    the total number of months.
  </p>

  <h2 className="text-2xl font-bold mt-3">Benefits of Investing Through SIP</h2>
  <ul className="list-disc ml-6 text-gray-700">
    <li>Encourages disciplined investing habits</li>
    <li>Reduces market timing risk</li>
    <li>Affordable for new investors</li>
    <li>Power of compounding over time</li>
    <li>Flexible investment amounts and duration</li>
  </ul>

  <h2 className="text-2xl font-bold mt-3">SIP vs Lump Sum Investment</h2>
  <p>
    SIP investments are often compared with lump sum investments. While lump sum
    investments require significant capital upfront, SIP allows you to invest
    gradually. SIPs also reduce the risk of entering the market at the wrong
    time, making them safer for long-term goals.
  </p>

  <h2 className="text-2xl font-bold mt-3">SIP for Long-Term Financial Goals</h2>
  <p>
    SIPs are widely used for achieving long-term financial goals such as:
  </p>

  <ul className="list-disc ml-6 text-gray-700">
    <li>Retirement planning</li>
    <li>Children’s education</li>
    <li>Buying a house</li>
    <li>Wealth creation</li>
  </ul>

  <p>
    Even small monthly investments can grow into a substantial corpus when
    invested consistently over a long period.
  </p>

  <h2 className="text-2xl font-bold mt-3">How Much Should You Invest in SIP?</h2>
  <p>
    The amount you invest in SIP depends on your income, expenses, financial
    goals, and risk tolerance. A SIP calculator helps you experiment with
    different investment amounts and durations to find the right balance.
  </p>

  <h2 className="text-2xl font-bold mt-3">Is SIP Safe?</h2>
  <p>
    SIPs invest in mutual funds, which are subject to market risks. However,
    investing through SIP reduces volatility impact and is considered one of
    the safest ways to invest in equity mutual funds for the long term.
  </p>

  <h2 className="text-2xl font-bold mt-3">Who Should Use a SIP Calculator?</h2>
  <p>
    A SIP calculator is useful for beginners starting their investment journey,
    salaried individuals planning monthly investments, and experienced investors
    comparing multiple investment scenarios.
  </p>

  <h2 className="text-2xl font-bold mt-3">Why Use DailyCalcu’s SIP Calculator?</h2>
  <p>
    DailyCalcu’s SIP Calculator provides instant and accurate calculations,
    dynamic investment charts, and a clean interface. It helps users understand
    how their money grows over time without requiring registration or personal
    data.
  </p>

  <ul className="list-disc ml-6 text-gray-700">
    <li>Accurate SIP return estimation</li>
    <li>Dynamic visual investment breakdown</li>
    <li>Mobile and desktop friendly</li>
    <li>No signup required</li>
    <li>100% free to use</li>
  </ul>

</article>


    </section>
  );
}

/* =======================
   REUSABLE COMPONENTS
======================= */
function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-2">{label}</label>
      <input
        type="number"
        className="w-full border rounded-lg px-3 py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function ResultCard({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: "blue" | "green" | "purple";
}) {
  const map = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    green: "bg-green-50 text-green-700 border-green-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
  };

  return (
    <div className={`border rounded-lg p-4 ${map[color]}`}>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-xl font-semibold">
        ₹{value.toLocaleString("en-IN")}
      </p>
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
