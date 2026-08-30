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

  if (
    ageNum > 0 &&
    heightNum > 0 &&
    weightNum > 0
  ) {
    // Mifflin-St Jeor equation
    if (gender === "male") {
      bmr =
        10 * weightNum +
        6.25 * heightNum -
        5 * ageNum +
        5;
    } else {
      bmr =
        10 * weightNum +
        6.25 * heightNum -
        5 * ageNum -
        161;
    }

    maintenance = bmr * activity;
  }

  const mildLoss = Math.max(0, maintenance - 250);
  const moderateLoss = Math.max(0, maintenance - 500);
  const aggressiveLoss = Math.max(0, maintenance - 750);

  return (
    <section className="max-w-3xl mx-auto">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Calorie Deficit Calculator
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Calculate your estimated daily calorie needs and see
          calorie targets for weight loss.
        </p>
      </header>

      {/* Calculator */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-5 sm:p-6 mb-10">
        {/* Gender */}
        <div className="mb-5">
          <label
            htmlFor="gender"
            className="block font-medium mb-2 text-gray-900"
          >
            Gender
          </label>

          <select
            id="gender"
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Age */}
        <div className="mb-5">
          <label
            htmlFor="age"
            className="block font-medium mb-2 text-gray-900"
          >
            Age
          </label>

          <input
            id="age"
            type="number"
            min="1"
            max="120"
            inputMode="numeric"
            placeholder="Enter your age"
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        {/* Height */}
        <div className="mb-5">
          <label
            htmlFor="height"
            className="block font-medium mb-2 text-gray-900"
          >
            Height (cm)
          </label>

          <input
            id="height"
            type="number"
            min="50"
            max="250"
            inputMode="decimal"
            placeholder="Enter your height"
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        {/* Weight */}
        <div className="mb-5">
          <label
            htmlFor="weight"
            className="block font-medium mb-2 text-gray-900"
          >
            Weight (kg)
          </label>

          <input
            id="weight"
            type="number"
            min="20"
            max="500"
            inputMode="decimal"
            placeholder="Enter your weight"
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        {/* Activity */}
        <div className="mb-6">
          <label
            htmlFor="activity"
            className="block font-medium mb-2 text-gray-900"
          >
            Activity Level
          </label>

          <select
            id="activity"
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={activity}
            onChange={(e) => setActivity(Number(e.target.value))}
          >
            <option value={1.2}>
              Sedentary — little or no exercise
            </option>
            <option value={1.375}>
              Lightly active — light exercise 1–3 days/week
            </option>
            <option value={1.55}>
              Moderately active — exercise 3–5 days/week
            </option>
            <option value={1.725}>
              Very active — hard exercise 6–7 days/week
            </option>
            <option value={1.9}>
              Extra active — very hard exercise or physical job
            </option>
          </select>
        </div>

        {/* Results */}
        {maintenance > 0 && (
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold mb-4">
              Your Estimated Calorie Needs
            </h2>

            {/* BMR */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-600 mb-1">
                Basal Metabolic Rate (BMR)
              </p>

              <p className="text-xl font-semibold text-gray-900">
                {Math.round(bmr).toLocaleString()} kcal/day
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Estimated calories your body needs at complete rest.
              </p>
            </div>

            {/* Maintenance */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-600 mb-1">
                Maintenance Calories
              </p>

              <p className="text-xl font-semibold text-blue-700">
                {Math.round(maintenance).toLocaleString()} kcal/day
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Estimated daily calories needed to maintain your
                current weight at your selected activity level.
              </p>
            </div>

            {/* Deficit options */}
            <h3 className="text-lg font-semibold mb-3">
              Calorie Targets for Weight Loss
            </h3>

            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <p className="font-medium text-gray-900">
                      Mild Deficit
                    </p>
                    <p className="text-sm text-gray-600">
                      250 calories below maintenance
                    </p>
                  </div>

                  <p className="text-xl font-semibold text-green-700">
                    {Math.round(mildLoss).toLocaleString()} kcal/day
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <p className="font-medium text-gray-900">
                      Moderate Deficit
                    </p>
                    <p className="text-sm text-gray-600">
                      500 calories below maintenance
                    </p>
                  </div>

                  <p className="text-xl font-semibold text-yellow-700">
                    {Math.round(moderateLoss).toLocaleString()} kcal/day
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <p className="font-medium text-gray-900">
                      Larger Deficit
                    </p>
                    <p className="text-sm text-gray-600">
                      750 calories below maintenance
                    </p>
                  </div>

                  <p className="text-xl font-semibold text-red-700">
                    {Math.round(aggressiveLoss).toLocaleString()} kcal/day
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-500 mt-5">
              These figures are estimates based on the information
              entered and the selected activity level. Individual
              calorie needs can change.
            </p>
          </div>
        )}
      </div>

      {/* Short supporting content */}
      <article className="prose max-w-none text-gray-700">
        <h2 className="text-2xl font-bold mt-10 mb-4">What is a calorie deficit calculator</h2>

        <p>
          This calculator calculates your Basal Metabolic Rate (BMR) 
          using the Mifflin-St Jeor equation. Then your estimated 
          maintenance calories are calculated by your selected activity level.
        </p>

        <p>
          A calorie deficit is just taking in fewer calories
          than your body uses up. If you estimate you 
          need 2,500 calories per day for maintenance, 
          eating 2,000 calories would put you at an 
          estimated 500 calorie deficit per day.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">What is a calorie deficit?</h2>

        <p>
          A calorie deficit occurs when you consume fewer 
          calories per day than your body burns. If you keep 
          a calorie deficit over time you can lose weight.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Important note</h2>

        <p>
          Calorie requirements are estimates and differ from one person to another. 
          Actual energy needs are influenced by body composition, metabolism, 
          activity and lifestyle.
        </p>
      </article>
    </section>
  );
}