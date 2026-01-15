"use client";

import { useState } from "react";

export default function IdealWeightCalculatorClient() {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");

  const heightCm = Number(height);
  const heightInches = heightCm / 2.54;

  let devine = 0;
  let robinson = 0;
  let miller = 0;

  if (heightCm > 0) {
    if (gender === "male") {
      devine = 50 + 2.3 * (heightInches - 60);
      robinson = 52 + 1.9 * (heightInches - 60);
      miller = 56.2 + 1.41 * (heightInches - 60);
    } else {
      devine = 45.5 + 2.3 * (heightInches - 60);
      robinson = 49 + 1.7 * (heightInches - 60);
      miller = 53.1 + 1.36 * (heightInches - 60);
    }
  }

  return (
    <section className="max-w-2xl mx-auto">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-3">
          Ideal Weight Calculator
        </h1>
        <p className="text-gray-600">
          Calculate your ideal body weight using medical formulas
        </p>
      </header>

      {/* Calculator */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
        {/* Gender */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Gender</label>
          <select
            className="w-full border rounded-lg px-3 py-2"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Height */}
        <div className="mb-6">
          <label className="block font-medium mb-2">
            Height (cm)
          </label>
          <input
            type="number"
            className="w-full border rounded-lg px-3 py-2"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        {devine > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Devine Formula</p>
              <p className="text-xl font-semibold text-blue-700">
                {devine.toFixed(1)} kg
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Robinson Formula</p>
              <p className="text-xl font-semibold text-green-700">
                {robinson.toFixed(1)} kg
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Miller Formula</p>
              <p className="text-xl font-semibold text-purple-700">
                {miller.toFixed(1)} kg
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Content */}
      <article className="prose max-w-none">
        <h2>What is ideal body weight?</h2>
        <p>
          Ideal body weight is an estimate of a healthy weight based on your
          height and gender. It helps assess whether you are underweight,
          overweight, or within a healthy range.
        </p>

        <h3>Is ideal weight the same for everyone?</h3>
        <p>
          No. Ideal weight varies depending on body frame, muscle mass, and
          health conditions. These formulas provide general estimates.
        </p>
      </article>
    </section>
  );
}
