"use client";

import { useState } from "react";

/* ======================
   TYPES
====================== */
type CalcType =
  | "percentageOf"
  | "percentageIncrease"
  | "percentageDecrease"
  | "percentageDifference";

/* ======================
   COMPONENT
====================== */
export default function PercentageCalculatorClient() {
  const [type, setType] = useState<CalcType>("percentageIncrease");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const n1 = Number(value1);
  const n2 = Number(value2);

  let result = 0;
  let explanation = "";

  if (n1 && n2) {
    switch (type) {
      case "percentageOf":
        result = (n1 * n2) / 100;
        explanation = `${n2}% of ${n1} equals ${result.toFixed(2)}.`;
        break;

      case "percentageIncrease":
        result = n1 + (n1 * n2) / 100;
        explanation = `${n1} increased by ${n2}% becomes ${result.toFixed(2)}.`;
        break;

      case "percentageDecrease":
        result = n1 - (n1 * n2) / 100;
        explanation = `${n1} decreased by ${n2}% becomes ${result.toFixed(2)}.`;
        break;

      case "percentageDifference":
        result = Math.abs(((n2 - n1) / ((n1 + n2) / 2)) * 100);
        explanation = `Percentage difference between ${n1} and ${n2} is ${result.toFixed(
          2
        )}%.`;
        break;
    }
  }

  const progress = Math.min(result, 100);

  return (
    <section className="max-w-3xl mx-auto px-4">
      {/* HEADER */}
      <header className="text-center mb-10 mt-8">
        <h1 className="text-4xl font-bold mb-3">
          Percentage Calculator
        </h1>
        <p className="text-gray-600">
          Calculate percentage, increase, decrease, and difference instantly
        </p>
      </header>

      {/* CALCULATOR CARD */}
      <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-8">
        {/* Calculation Type */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Calculation Type
          </label>
          <select
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-200"
            value={type}
            onChange={(e) => setType(e.target.value as CalcType)}
          >
            <option value="percentageOf">Percentage of a Number</option>
            <option value="percentageIncrease">Percentage Increase</option>
            <option value="percentageDecrease">Percentage Decrease</option>
            <option value="percentageDifference">Percentage Difference</option>
          </select>
        </div>

        {/* INPUTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* VALUE 1 */}
          <div className="relative">
            <input
              type="number"
              inputMode="decimal"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              placeholder=" "
              className="peer w-full border rounded-lg px-4 pt-6 pb-2 focus:ring-2 focus:ring-blue-200"
            />
            <label className="absolute left-4 top-2 text-xs text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs transition-all">
              {type === "percentageDifference"
                ? "First Value"
                : "Value"}
            </label>
          </div>

          {/* VALUE 2 */}
          <div className="relative">
            <input
              type="number"
              inputMode="decimal"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              placeholder=" "
              className="peer w-full border rounded-lg px-4 pt-6 pb-2 pr-12 focus:ring-2 focus:ring-blue-200"
            />
            <label className="absolute left-4 top-2 text-xs text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs transition-all">
              {type === "percentageDifference"
                ? "Second Value"
                : "Percentage"}
            </label>

            {type !== "percentageDifference" && (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                %
              </span>
            )}
          </div>
        </div>

        {/* RESULT */}
        {result > 0 && (
          <>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="text-sm text-gray-600 mb-1">
                Calculation Result
              </p>
              <p className="text-3xl font-bold text-green-700">
                {result.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            {/* EXPLANATION */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
              {explanation}
            </div>

            {/* VISUAL BAR */}
            <div>
              <p className="text-sm text-gray-600 mb-2">
                Visual Representation
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </>
        )}
      </div>

      

      {/* ================= SEO CONTENT ================= */}
      <article className="mt-16 space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold">
          Different Ways to Calculate Percentage
        </h2>

        <p>
          Percentages are used to express proportions, changes, and comparisons.
          This calculator supports the most common percentage calculations used
          in daily life, academics, finance, and business.
        </p>

        <h3 className="text-xl font-semibold">
          1. Percentage of a Number
        </h3>
        <p>
          Used to find a portion of a value. Example: 20% of 500 equals 100.
        </p>

        <h3 className="text-xl font-semibold">
          2. Percentage Increase
        </h3>
        <p>
          Used to calculate growth, salary hikes, price increases, or interest.
        </p>

        <h3 className="text-xl font-semibold">
          3. Percentage Decrease
        </h3>
        <p>
          Commonly used for discounts, depreciation, and reductions.
        </p>

        <h3 className="text-xl font-semibold">
          4. Percentage Difference
        </h3>
        <p>
          Used to compare two values and understand how much they differ
          relative to the original value.
        </p>
      </article>

    </section>
  );
}
