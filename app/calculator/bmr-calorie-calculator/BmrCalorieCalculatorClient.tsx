"use client";

import { useState } from "react";

export default function BmrCalorieCalculatorClient() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState(1.2);

  const ageNum = Number(age);
  const heightNum = Number(height);
  const weightNum = Number(weight);

  let bmr = 0;
  let calories = 0;

  if (ageNum && heightNum && weightNum) {
    // Mifflin-St Jeor Equation
    if (gender === "male") {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
    } else {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
    }

    calories = bmr * activity;
  }

  return (
    <section className="max-w-2xl mx-auto">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-3">
          BMR & Calorie Calculator
        </h1>
        <p className="text-gray-600">
          Calculate your BMR and daily calorie needs
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
          <label className="block font-medium mb-2">
            Age (years)
          </label>
          <input
            type="number"
            className="w-full border rounded-lg px-3 py-2"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        {/* Height */}
        <div className="mb-4">
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

        {/* Weight */}
        <div className="mb-4">
          <label className="block font-medium mb-2">
            Weight (kg)
          </label>
          <input
            type="number"
            className="w-full border rounded-lg px-3 py-2"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        {/* Activity Level */}
        <div className="mb-6">
          <label className="block font-medium mb-2">
            Activity Level
          </label>
          <select
            className="w-full border rounded-lg px-3 py-2"
            value={activity}
            onChange={(e) => setActivity(Number(e.target.value))}
          >
            <option value={1.2}>Sedentary (little exercise)</option>
            <option value={1.375}>Lightly active</option>
            <option value={1.55}>Moderately active</option>
            <option value={1.725}>Very active</option>
            <option value={1.9}>Extra active</option>
          </select>
        </div>

        {bmr > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Your BMR</p>
              <p className="text-xl font-semibold text-blue-700">
                {Math.round(bmr)} kcal/day
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                Daily Calories Needed
              </p>
              <p className="text-xl font-semibold text-green-700">
                {Math.round(calories)} kcal/day
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Content */}
      <article className="prose max-w-none">
        <h2>What is BMR?</h2>
        <p>
          Basal Metabolic Rate (BMR) is the number of calories your body needs
          to perform basic life-sustaining functions at rest.
        </p>

        <h3>How daily calories are calculated</h3>
        <p>
          Daily calorie needs are calculated by multiplying your BMR by an
          activity factor based on your lifestyle.
        </p>
      </article>
    </section>
  );
}
