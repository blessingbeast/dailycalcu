"use client";

import { useState } from "react";

/* ======================
   TYPES
====================== */
interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

interface SelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}

interface ResultCardProps {
  label: string;
  value: string;
  color: "blue" | "green";
}

/* ======================
   HELPERS
====================== */
const getPercent = (value: number, max: number) =>
  Math.min(100, Math.round((value / max) * 100));

/* ======================
   REUSABLE COMPONENTS
====================== */
function Input({ label, value, onChange }: InputProps) {
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

function Select({ label, value, onChange, children }: SelectProps) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-2">{label}</label>
      <select
        className="w-full border rounded-lg px-3 py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {children}
      </select>
    </div>
  );
}

function ResultCard({ label, value, color }: ResultCardProps) {
  const map = {
    blue: "bg-blue-50 border-blue-200 text-blue-700",
    green: "bg-green-50 border-green-200 text-green-700",
  };

  return (
    <div className={`border rounded-lg p-4 ${map[color]}`}>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}

function RadialChart({
  label,
  value,
  max,
  color,
}: {
  label: string;
  value: number;
  max: number;
  color: string;
}) {
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const percent = getPercent(value, max);
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg width="120" height="120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke={color}
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-lg font-semibold fill-gray-800"
        >
          {Math.round(value)}
        </text>
      </svg>
      <p className="mt-2 text-sm text-gray-600">{label}</p>
    </div>
  );
}

/* ======================
   MAIN COMPONENT
====================== */
export default function BmrCalorieCalculatorClient() {
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
  let calories = 0;

  if (ageNum && heightNum && weightNum) {
    bmr =
      gender === "male"
        ? 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5
        : 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;

    calories = bmr * activityNum;
  }

  return (
    <section className="max-w-2xl mx-auto">
      {/* HEADER */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-3 mt-6">
          BMR & Calorie Calculator
        </h1>
        <p className="text-gray-600">
          Calculate your BMR and daily calorie needs accurately
        </p>
      </header>

      {/* CALCULATOR */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
        <Select label="Gender" value={gender} onChange={setGender}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>

        <Input label="Age (years)" value={age} onChange={setAge} />
        <Input label="Height (cm)" value={height} onChange={setHeight} />
        <Input label="Weight (kg)" value={weight} onChange={setWeight} />

        <Select label="Activity Level" value={activity} onChange={setActivity}>
          <option value="1.2">Sedentary (little exercise)</option>
          <option value="1.375">Lightly active</option>
          <option value="1.55">Moderately active</option>
          <option value="1.725">Very active</option>
          <option value="1.9">Extra active</option>
        </Select>

        {bmr > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <ResultCard
              label="Your BMR"
              value={`${Math.round(bmr)} kcal/day`}
              color="blue"
            />
            <ResultCard
              label="Daily Calories Needed"
              value={`${Math.round(calories)} kcal/day`}
              color="green"
            />
          </div>
        )}
      </div>

      {/* BEAUTIFUL RADIAL CHARTS */}
      {bmr > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-10">
            Daily Calorie Breakdown
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
            <RadialChart
              label="BMR"
              value={bmr}
              max={3000}
              color="#3b82f6"
            />
            <RadialChart
              label="Maintenance"
              value={calories}
              max={3500}
              color="#10b981"
            />
            <RadialChart
              label="Weight Loss"
              value={Math.max(calories - 500, 0)}
              max={3500}
              color="#8b5cf6"
            />
            <RadialChart
              label="Muscle Gain"
              value={calories + 300}
              max={4000}
              color="#f97316"
            />
          </div>

          <p className="text-sm text-gray-500 text-center mt-6">
            Values are approximate and depend on metabolism and lifestyle.
          </p>
        </section>
      )}

      {/* ======================
          LONG-FORM SEO BLOG
      ====================== */}
      <article className="mt-20 space-y-6 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-semibold text-gray-900">
          What Is BMR (Basal Metabolic Rate)?
        </h2>

        <p>
          Basal Metabolic Rate (BMR) represents the minimum number of calories
          your body requires to maintain essential life functions such as
          breathing, blood circulation, brain activity, and temperature
          regulation while you are completely at rest.
        </p>

        <p>
          Even if you were to lie in bed all day without any physical activity,
          your body would still burn calories to keep organs functioning. This
          calorie requirement is your BMR.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">
          How Is BMR Calculated?
        </h2>

        <p>
          This calculator uses the <strong>Mifflin-St Jeor equation</strong>,
          which is considered the most accurate formula for estimating BMR in
          healthy adults.
        </p>

        <ul className="list-disc pl-6">
          <li>
            <strong>Men:</strong> BMR = 10 × weight (kg) + 6.25 × height (cm) −
            5 × age + 5
          </li>
          <li>
            <strong>Women:</strong> BMR = 10 × weight (kg) + 6.25 × height (cm) −
            5 × age − 161
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900">
          What Are Daily Calorie Needs?
        </h2>

        <p>
          Daily calorie needs are calculated by multiplying your BMR with an
          activity factor. This reflects how active your lifestyle is, ranging
          from sedentary to very active.
        </p>

        <p>
          Knowing your daily calorie requirement helps you maintain, lose, or
          gain weight effectively.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">
          Why Knowing Your BMR Is Important
        </h2>

        <ul className="list-disc pl-6">
          <li>Helps plan healthy weight loss or weight gain</li>
          <li>Prevents under-eating or excessive calorie intake</li>
          <li>Improves nutrition and fitness strategies</li>
          <li>Essential for calorie deficit calculations</li>
          <li>Useful for athletes and fitness enthusiasts</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900">
          Who Should Use This Calculator?
        </h2>

        <p>
          This BMR & calorie calculator is ideal for anyone looking to understand
          their metabolism, manage body weight, plan fitness goals, or improve
          overall health.
        </p>

        <p>
          It is completely free, fast, mobile-friendly, and requires no sign-up.
        </p>
      </article>

      {/* ======================
   CALORIE GOAL COMPARISON
====================== */}
<section className="mt-20">
  <h2 className="text-2xl font-bold mb-6">
    Daily Calorie Intake Comparison
  </h2>

  <p className="text-gray-700 mb-6">
    Based on your calculated daily calorie requirement, the table below shows
    how calorie intake changes depending on your goal—whether you want to
    maintain weight, lose fat, or gain muscle.
  </p>

  <div className="overflow-x-auto">
    <table className="w-full border border-gray-200 rounded-lg">
      <thead className="bg-gray-100">
        <tr>
          <th className="text-left p-3 border">Goal</th>
          <th className="text-left p-3 border">Daily Calories</th>
          <th className="text-left p-3 border">Description</th>
        </tr>
      </thead>

      <tbody>
        <tr className="hover:bg-gray-50">
          <td className="p-3 border font-medium">
            Maintain Weight
          </td>
          <td className="p-3 border">
            {calories > 0 ? `${Math.round(calories)} kcal` : "—"}
          </td>
          <td className="p-3 border text-gray-600">
            Eat this amount to maintain your current body weight.
          </td>
        </tr>

        <tr className="hover:bg-gray-50">
          <td className="p-3 border font-medium">
            Mild Weight Loss
          </td>
          <td className="p-3 border">
            {calories > 0 ? `${Math.round(calories - 300)} kcal` : "—"}
          </td>
          <td className="p-3 border text-gray-600">
            Small calorie deficit for slow, sustainable fat loss.
          </td>
        </tr>

        <tr className="hover:bg-gray-50">
          <td className="p-3 border font-medium">
            Aggressive Weight Loss
          </td>
          <td className="p-3 border">
            {calories > 0 ? `${Math.round(calories - 500)} kcal` : "—"}
          </td>
          <td className="p-3 border text-gray-600">
            Faster fat loss but requires discipline and proper nutrition.
          </td>
        </tr>

        <tr className="hover:bg-gray-50">
          <td className="p-3 border font-medium">
            Lean Muscle Gain
          </td>
          <td className="p-3 border">
            {calories > 0 ? `${Math.round(calories + 300)} kcal` : "—"}
          </td>
          <td className="p-3 border text-gray-600">
            Small calorie surplus to support muscle growth.
          </td>
        </tr>

        <tr className="hover:bg-gray-50">
          <td className="p-3 border font-medium">
            Aggressive Bulking
          </td>
          <td className="p-3 border">
            {calories > 0 ? `${Math.round(calories + 500)} kcal` : "—"}
          </td>
          <td className="p-3 border text-gray-600">
            Rapid weight gain; may include some fat gain.
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="text-sm text-gray-500 mt-4">
    Note: These values are estimates. Always consult a healthcare professional
    before making major dietary changes.
  </p>
</section>

    </section>
  );
}
