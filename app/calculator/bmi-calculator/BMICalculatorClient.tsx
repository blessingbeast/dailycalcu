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
        <h1 className="font-semibold">What is BMI?</h1>
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
<section className="mb-10">
  <h1 className="text-3xl font-semibold mb-4 mt-5">
    BMI Calculator
  </h1>

  <p className="text-gray-700 mb-4">
    Body Mass Index (BMI) is a simple measurement used to assess whether a person
    has a healthy body weight in relation to their height. It is widely used by
    doctors, fitness professionals, and health organizations as a quick screening
    tool to categorize individuals as underweight, normal weight, overweight,
    or obese.
  </p>

  <p className="text-gray-700 mb-4">
    This BMI calculator helps you instantly calculate your BMI score by entering
    your height and weight. It provides accurate results based on standard BMI
    formulas and helps you understand what your BMI value means for your overall
    health.
  </p>

  <p className="text-gray-700 mb-6">
    Whether you are tracking your fitness progress, planning weight loss, or
    simply checking your health status, this free BMI calculator gives quick and
    reliable results without any registration.
  </p>

  <h2 className="text-2xl font-semibold mb-3">
    What Is BMI (Body Mass Index)?
  </h2>

  <p className="text-gray-700 mb-4">
    BMI, or Body Mass Index, is a numerical value calculated using a person’s
    weight and height. It provides an estimate of body fat and helps identify
    potential weight-related health risks. BMI is not a direct measure of body
    fat but is widely used because it is easy to calculate and applies to most
    adults.
  </p>

  <p className="text-gray-700 mb-6">
    Health organizations such as the World Health Organization (WHO) use BMI as
    a standard method to classify weight status and assess population health
    trends.
  </p>

  <h2 className="text-2xl font-semibold mb-3">
    How Is BMI Calculated?
  </h2>

  <p className="text-gray-700 mb-4">
    The BMI formula is calculated by dividing a person’s weight by the square of
    their height:
  </p>

  <p className="text-gray-700 font-medium mb-4">
    BMI = Weight (kg) ÷ Height (m²)
  </p>

  <p className="text-gray-700 mb-6">
    For example, if your weight is 70 kg and your height is 1.75 meters, your BMI
    would be calculated as 70 ÷ (1.75 × 1.75), which equals approximately 22.9.
    This calculator performs the calculation instantly and removes the need for
    manual effort.
  </p>

  <h2 className="text-2xl font-semibold mb-3">
    BMI Categories Explained
  </h2>

  <p className="text-gray-700 mb-4">
    Based on BMI values, adults are typically classified into the following
    categories:
  </p>

  <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
    <li>Underweight: BMI less than 18.5</li>
    <li>Normal weight: BMI between 18.5 and 24.9</li>
    <li>Overweight: BMI between 25 and 29.9</li>
    <li>Obese: BMI of 30 or higher</li>
  </ul>

  <p className="text-gray-700 mb-6">
    These categories provide a general guideline for assessing weight-related
    health risks. However, BMI should be considered along with other factors such
    as age, gender, muscle mass, and overall lifestyle.
  </p>

  <h2 className="text-2xl font-semibold mb-3">
    Why Use a BMI Calculator?
  </h2>

  <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
    <li>Quickly assess your weight category</li>
    <li>Track fitness and weight management progress</li>
    <li>Identify potential health risks early</li>
    <li>Set realistic health and fitness goals</li>
    <li>Useful for regular health monitoring</li>
  </ul>

  <h2 className="text-2xl font-semibold mb-3">
    Limitations of BMI
  </h2>

  <p className="text-gray-700 mb-4">
    While BMI is a useful screening tool, it has certain limitations. It does not
    directly measure body fat and may not accurately reflect health status for
    athletes, elderly individuals, or people with high muscle mass.
  </p>

  <p className="text-gray-700 mb-6">
    For a complete health assessment, BMI should be used alongside other
    measurements such as waist circumference, body fat percentage, and medical
    evaluations.
  </p>

  <h2 className="text-2xl font-semibold mb-3">
    Who Should Use This BMI Calculator?
  </h2>

  <p className="text-gray-700 mb-4">
    This BMI calculator is suitable for adults who want to understand their body
    weight status and track changes over time. It is commonly used by individuals
    focusing on fitness, weight management, and general health awareness.
  </p>

  <p className="text-gray-700">
    The calculator is free, easy to use, and provides instant results without
    storing any personal data.
  </p>
</section>

    </section>
  );
}
