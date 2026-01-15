"use client";

import { useState } from "react";

export default function BMICalculatorClient() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const weightNum = Number(weight);
  const heightNum = Number(height);

  const bmi =
    weightNum && heightNum
      ? weightNum / Math.pow(heightNum / 100, 2)
      : 0;

  const getCategory = (bmi: number) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  return (
    <section className="max-w-2xl mx-auto">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-3">
          BMI Calculator
        </h1>
        <p className="text-gray-600">
          Calculate your Body Mass Index and health category
        </p>
      </header>

      {/* Calculator Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
        {/* Weight */}
        <div className="mb-5">
          <label className="block font-medium mb-2">
            Weight (kg)
          </label>
          <input
            type="number"
            inputMode="numeric"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter weight in kilograms"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        {/* Height */}
        <div className="mb-6">
          <label className="block font-medium mb-2">
            Height (cm)
          </label>
          <input
            type="number"
            inputMode="numeric"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter height in centimeters"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        {/* Result */}
        {bmi > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                Your BMI
              </p>
              <p className="text-2xl font-semibold text-blue-700">
                {bmi.toFixed(1)}
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                Category
              </p>
              <p className="text-2xl font-semibold text-green-700">
                {getCategory(bmi)}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Content */}
      <article className="prose max-w-none">
        <h2>What is BMI?</h2>
        <p>
          Body Mass Index (BMI) is a measure of body fat based on your weight
          and height. It is commonly used to assess whether a person has a
          healthy body weight.
        </p>

        <h3>BMI Formula</h3>
        <p>
          <strong>BMI</strong> = Weight (kg) ÷ Height² (m²)
        </p>

        <h3>BMI Categories</h3>
        <ul>
          <li>Underweight: BMI less than 18.5</li>
          <li>Normal weight: BMI between 18.5 and 24.9</li>
          <li>Overweight: BMI between 25 and 29.9</li>
          <li>Obese: BMI 30 or above</li>
        </ul>
      </article>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Is BMI calculation accurate?</strong><br />
            BMI is a general guideline and does not directly measure body fat,
            but it is widely used for health screening.
          </p>

          <p>
            <strong>Is this BMI calculator free?</strong><br />
            Yes, the BMI calculator on DailyCalcu is completely free to use.
          </p>
        </div>
      </section>
    </section>
  );
}
