"use client";

import { useState } from "react";

/* ======================
   REUSABLE COMPONENTS
====================== */
function ResultCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className={`border rounded-lg p-4 ${color}`}>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
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

/* ======================
   MAIN COMPONENT
====================== */
export default function CalorieDeficitCalculatorClient() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("1.2");

  const ageNum = Number(age);
  const heightNum = Number(height);
  const weightNum = Number(weight);
  const activityNum = Number(activity);

  let bmr = 0;
  let maintenance = 0;

  if (ageNum && heightNum && weightNum) {
    // Mifflin–St Jeor Equation
    bmr =
      gender === "male"
        ? 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5
        : 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;

    maintenance = bmr * activityNum;
  }

  const mildDeficit = maintenance - 250;
  const standardDeficit = maintenance - 500;
  const aggressiveDeficit = maintenance - 750;

  const maintenancePercent = Math.min((maintenance / 3000) * 100, 100);
  const deficitPercent = Math.min((standardDeficit / maintenance) * 100, 100);

  return (
    <section className="max-w-2xl mx-auto">

      {/* HEADER */}
      <header className="mb-8 text-center mt-6">
        <h1 className="text-4xl font-bold mb-3">
          Calorie Deficit Calculator
        </h1>
        <p className="text-gray-600">
          Calculate how many calories you should eat to lose weight safely
        </p>
      </header>

      {/* CALCULATOR */}
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
          <label className="block font-medium mb-2">Age (years)</label>
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
          <label className="block font-medium mb-2">Activity Level</label>
          <select
            className="w-full border rounded-lg px-3 py-2"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          >
            <option value="1.2">Sedentary</option>
            <option value="1.375">Lightly Active</option>
            <option value="1.55">Moderately Active</option>
            <option value="1.725">Very Active</option>
            <option value="1.9">Extra Active</option>
          </select>
        </div>

        {maintenance > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ResultCard
              label="Maintenance Calories"
              value={`${Math.round(maintenance)} kcal/day`}
              color="bg-blue-50 border-blue-200 text-blue-700"
            />
            <ResultCard
              label="Weight Loss Target"
              value={`${Math.round(standardDeficit)} kcal/day`}
              color="bg-green-50 border-green-200 text-green-700"
            />
          </div>
        )}
      </div>

      {/* DYNAMIC VISUALS */}
      {maintenance > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">
            Calorie Deficit Visualization
          </h2>

          <ProgressBar
            label="Maintenance Calories"
            value={maintenancePercent}
            color="bg-blue-600"
          />

          <ProgressBar
            label="Calorie Deficit Level"
            value={100 - deficitPercent}
            color="bg-green-600"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <ResultCard
              label="Mild Deficit"
              value={`${Math.round(mildDeficit)} kcal`}
              color="bg-green-50 border-green-200 text-green-700"
            />
            <ResultCard
              label="Standard Deficit"
              value={`${Math.round(standardDeficit)} kcal`}
              color="bg-yellow-50 border-yellow-200 text-yellow-700"
            />
            <ResultCard
              label="Aggressive Deficit"
              value={`${Math.round(aggressiveDeficit)} kcal`}
              color="bg-red-50 border-red-200 text-red-700"
            />
          </div>
        </section>
      )}

    </section>
  );
}
