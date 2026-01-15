"use client";

import { useState } from "react";

export default function DateDifferenceCalculatorClient() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const calculateDifference = () => {
    if (!startDate || !endDate) return null;

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (end < start) return null;

    const diffMs = end.getTime() - start.getTime();
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    const weeks = Math.floor(totalDays / 7);
    const remainingDays = totalDays % 7;

    // Approx months calculation
    let months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

const tempDate = new Date(start);
    tempDate.setMonth(tempDate.getMonth() + months);

    if (tempDate > end) {
      months--;
      tempDate.setMonth(tempDate.getMonth() - 1);
    }

    const daysAfterMonths = Math.floor(
      (end.getTime() - tempDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    return {
      totalDays,
      weeks,
      remainingDays,
      months,
      daysAfterMonths,
    };
  };

  const result = calculateDifference();

  return (
    <section className="max-w-2xl mx-auto">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-3">
          Date Difference Calculator
        </h1>
        <p className="text-gray-600">
          Find the number of days between two dates instantly
        </p>
      </header>

      {/* Calculator Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
        <div className="mb-4">
          <label className="block font-medium mb-2">
            Start Date
          </label>
          <input
            type="date"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-2">
            End Date
          </label>
          <input
            type="date"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        {result && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600">Total Days</p>
              <p className="text-2xl font-semibold text-blue-700">
                {result.totalDays}
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600">Weeks</p>
              <p className="text-2xl font-semibold text-green-700">
                {result.weeks}w {result.remainingDays}d
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600">Months</p>
              <p className="text-2xl font-semibold text-purple-700">
                {result.months}m {result.daysAfterMonths}d
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Content */}
      <article className="prose max-w-none">
        <h2>How does the date difference calculator work?</h2>
        <p>
          This date difference calculator finds the total number of days between
          two selected dates. It also shows the difference in weeks and months
          for better understanding.
        </p>

        <h3>Where is it useful?</h3>
        <p>
          Date difference calculations are useful for project planning,
          age calculation, loan duration, event planning, and more.
        </p>
      </article>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-gray-700">
          <p>
            <strong>How many days are between two dates?</strong><br />
            Select the start and end dates to instantly calculate the total
            number of days between them.
          </p>

          <p>
            <strong>Is this date difference calculator free?</strong><br />
            Yes, DailyCalcu’s date difference calculator is completely free.
          </p>
        </div>
      </section>
    </section>
  );
}
