"use client";

import { useState } from "react";

export default function IdealWeightCalculatorClient() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [height, setHeight] = useState("");

  const heightCm = Number(height);
  const heightInches = heightCm / 2.54;

  let devine = 0;
  let robinson = 0;
  let miller = 0;
  let average = 0;

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

    average = (devine + robinson + miller) / 3;
  }

  return (
    <section className="max-w-3xl mx-auto px-4">
      {/* HEADER */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-3 mt-4">
          Ideal Weight Calculator
        </h1>
        <p className="text-gray-600">
          Find your healthy and ideal body weight based on medical formulas
        </p>
      </header>

      {/* INPUT CARD */}
      <div className="bg-white shadow-xl rounded-2xl p-6 mb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gender */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Gender
            </label>
            <select
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              value={gender}
              onChange={(e) => setGender(e.target.value as "male" | "female")}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Height (cm)
            </label>
            <input
              type="number"
              placeholder="e.g. 170"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
        </div>

        {/* RESULTS */}
        {average > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
              <ResultCard title="Devine Formula" value={`${devine.toFixed(1)} kg`} color="blue" />
              <ResultCard title="Robinson Formula" value={`${robinson.toFixed(1)} kg`} color="green" />
              <ResultCard title="Miller Formula" value={`${miller.toFixed(1)} kg`} color="purple" />
              <ResultCard title="Average Ideal Weight" value={`${average.toFixed(1)} kg`} color="orange" />
            </div>

            {/* RANGE BAR */}
            <div className="mt-8">
              <p className="text-sm text-gray-600 mb-2">
                Ideal Weight Range (Approximate)
              </p>
              <div className="w-full bg-gray-200 h-4 rounded-full">
                <div className="bg-blue-600 h-4 rounded-full w-3/4" />
              </div>
            </div>
          </>
        )}
      </div>

      {/* FORMULA TABLE */}
      <section className="mt-12 overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4">
          Ideal Weight Formulas Explained
        </h2>

        <table className="min-w-full border border-gray-200 rounded-lg text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Formula</th>
              <th className="px-4 py-3 text-left">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="px-4 py-3 font-medium">Devine</td>
              <td className="px-4 py-3">
                Widely used in clinical settings and hospitals
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium">Robinson</td>
              <td className="px-4 py-3">
                Slightly conservative and suitable for general population
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Miller</td>
              <td className="px-4 py-3">
                Adjusted for lean body mass and modern averages
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
}

function ResultCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: "blue" | "green" | "purple" | "orange";
}) {
  const map = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    green: "bg-green-50 text-green-700 border-green-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
    orange: "bg-orange-50 text-orange-700 border-orange-200",
  };

  return (
    <div className={`border rounded-xl p-4 ${map[color]}`}>
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}