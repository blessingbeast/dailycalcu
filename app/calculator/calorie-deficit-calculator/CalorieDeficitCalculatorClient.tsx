"use client";

import { useState } from "react";

export default function CalorieDeficitCalculatorClient() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState(1.2);

  const ageNum = Number(age);
  const heightNum = Number(height);
  const weightNum = Number(weight);

  let bmr = 0;
  let maintenance = 0;

  if (ageNum && heightNum && weightNum) {
    // Mifflin–St Jeor
    if (gender === "male") {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
    } else {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
    }

    maintenance = bmr * activity;
  }

  return (
    <section className="max-w-2xl mx-auto">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-3">
          Calorie Deficit Calculator
        </h1>
        <p className="text-gray-600">
          Find how many calories you should eat to lose weight
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

        {/* Age */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Age</label>
          <input
            type="number"
            className="w-full border rounded-lg px-3 py-2"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        {/* Height */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Height (cm)</label>
          <input
            type="number"
            className="w-full border rounded-lg px-3 py-2"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        {/* Weight */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Weight (kg)</label>
          <input
            type="number"
            className="w-full border rounded-lg px-3 py-2"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        {/* Activity */}
        <div className="mb-6">
          <label className="block font-medium mb-2">
            Activity Level
          </label>
          <select
            className="w-full border rounded-lg px-3 py-2"
            value={activity}
            onChange={(e) => setActivity(Number(e.target.value))}
          >
            <option value={1.2}>Sedentary</option>
            <option value={1.375}>Lightly active</option>
            <option value={1.55}>Moderately active</option>
            <option value={1.725}>Very active</option>
            <option value={1.9}>Extra active</option>
          </select>
        </div>

        {maintenance > 0 && (
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Maintenance Calories</p>
              <p className="text-xl font-semibold text-blue-700">
                {Math.round(maintenance)} kcal/day
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                Mild Weight Loss
              </p>
              <p className="text-xl font-semibold text-green-700">
                {Math.round(maintenance - 250)} kcal/day
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                Weight Loss
              </p>
              <p className="text-xl font-semibold text-yellow-700">
                {Math.round(maintenance - 500)} kcal/day
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                Aggressive Fat Loss
              </p>
              <p className="text-xl font-semibold text-red-700">
                {Math.round(maintenance - 750)} kcal/day
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Content */}
      <article className="prose max-w-none">
        <h2>What is a calorie deficit?</h2>
        <p>
          A calorie deficit occurs when you consume fewer calories than your
          body burns. It is essential for weight loss and fat reduction.
        </p>

        <h3>Is calorie deficit safe?</h3>
        <p>
          A moderate calorie deficit is safe for most people. Extremely low
          calorie intake should be avoided unless supervised by a professional.
        </p>
      </article>
    </section>
  );
}
