"use client";

import { useState } from "react";

export default function AgeCalculatorClient() {
  const [dob, setDob] = useState("");

  const calculateAge = () => {
    if (!dob) return null;

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const totalMonths = years * 12 + months;
    const totalDays = Math.floor(
      (today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    return { years, months, days, totalMonths, totalDays };
  };

  const result = calculateAge();

  return (
    <section className="max-w-2xl mx-auto">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-3">
          Age Calculator
        </h1>
        <p className="text-gray-600">
          Calculate your exact age in years, months, and days
        </p>
      </header>

      {/* Calculator Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
        <div className="mb-6">
          <label className="block font-medium mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        {result && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600">Years</p>
              <p className="text-2xl font-semibold text-blue-700">
                {result.years}
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600">Months</p>
              <p className="text-2xl font-semibold text-green-700">
                {result.totalMonths}
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600">Days</p>
              <p className="text-2xl font-semibold text-purple-700">
                {result.totalDays}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Content */}
      <article className="prose max-w-none">
        <h2>How does the age calculator work?</h2>
        <p>
          This age calculator determines your exact age based on your date of
          birth and today’s date. It calculates your age in years, months,
          and total days.
        </p>

        <h3>Why use an age calculator?</h3>
        <p>
          Age calculators are useful for official forms, job applications,
          school admissions, and personal records.
        </p>
      </article>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Is this age calculator accurate?</strong><br />
            Yes, it uses your exact date of birth and the current date.
          </p>

          <p>
            <strong>Can I calculate age in days?</strong><br />
            Yes, this calculator shows your total age in days.
          </p>
        </div>
      </section>
    </section>
  );
}
