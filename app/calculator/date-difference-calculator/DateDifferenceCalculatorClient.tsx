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

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    return {
      totalDays,
      weeks,
      remainingDays,
      months,
      daysAfterMonths,
      years,
      remainingMonths,
    };
  };

  const result = calculateDifference();

  return (
    <section className="max-w-3xl mx-auto px-4">
      {/* HEADER */}
      <header className="text-center mt-10 mb-10">
        <h1 className="text-4xl font-bold mb-3">
          Date Difference Calculator
        </h1>
        <p className="text-gray-600">
          Calculate the exact difference between two dates in days, weeks,
          months, and years
        </p>
      </header>

      {/* INPUT CARD */}
      <div className="bg-white border rounded-2xl shadow-sm p-6 mb-12 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="peer w-full border rounded-lg px-4 pt-6 pb-2 focus:ring-2 focus:ring-blue-200"
            />
            <label className="absolute left-4 top-2 text-xs text-gray-500">
              Start Date
            </label>
          </div>

          <div className="relative">
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="peer w-full border rounded-lg px-4 pt-6 pb-2 focus:ring-2 focus:ring-blue-200"
            />
            <label className="absolute left-4 top-2 text-xs text-gray-500">
              End Date
            </label>
          </div>
        </div>

        {/* RESULTS */}
        {result && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <ResultCard label="Total Days" value={`${result.totalDays} days`} color="blue" />
              <ResultCard
                label="Weeks"
                value={`${result.weeks} weeks ${result.remainingDays} days`}
                color="green"
              />
              <ResultCard
                label="Years / Months"
                value={`${result.years} years ${result.remainingMonths} months`}
                color="purple"
              />
            </div>

            {/* EXPLANATION */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800 mt-6">
              From <strong>{startDate}</strong> to <strong>{endDate}</strong>,
              the total time difference is <strong>{result.totalDays}</strong> days,
              which equals approximately <strong>{result.years}</strong> years,
              <strong> {result.remainingMonths}</strong> months, and
              <strong> {result.daysAfterMonths}</strong> days.
            </div>

            {/* VISUAL BAR */}
            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-2">
                Time Progress (relative)
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{
                    width: `${Math.min((result.totalDays / 365) * 100, 100)}%`,
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* ======================
         LONG SEO BLOG
      ====================== */}
      <article className="space-y-6 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-gray-900">
          What Is a Date Difference Calculator?
        </h2>

        <p>
          A date difference calculator is an online tool that helps you determine
          the exact time gap between two calendar dates. Instead of manually
          counting days or estimating months, this calculator provides accurate
          results instantly using real calendar logic.
        </p>

        <p>
          The Date Difference Calculator on DailyCalcu calculates differences in
          <strong> days, weeks, months, and years</strong>, making it suitable
          for both personal and professional use.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          How Date Difference Is Calculated
        </h2>

        <p>
          The calculator compares the start date and end date using standard
          calendar arithmetic. It accounts for:
        </p>

        <ul className="list-disc ml-6">
          <li>Leap years</li>
          <li>Different month lengths</li>
          <li>Exact day boundaries</li>
          <li>Real calendar transitions</li>
        </ul>

        <p>
          Unlike basic calculators that assume every month has 30 days, this
          tool uses real date objects to ensure precise calculations.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Common Uses of a Date Difference Calculator
        </h2>

        <ul className="list-disc ml-6">
          <li>Project timelines and deadlines</li>
          <li>Loan duration calculations</li>
          <li>Age and anniversary tracking</li>
          <li>Employment duration</li>
          <li>Event planning</li>
          <li>Academic and research timelines</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">
          Why Use DailyCalcu’s Date Difference Calculator?
        </h2>

        <ul className="list-disc ml-6">
          <li>Accurate to the calendar day</li>
          <li>Fast and easy to use</li>
          <li>No registration required</li>
          <li>Works on mobile and desktop</li>
          <li>Completely free</li>
        </ul>

        <p>
          Whether you are calculating how many days you have worked, how long
          until an event, or the duration between two important dates, this tool
          gives reliable results instantly.
        </p>
      </article>
    </section>
  );
}

/* ======================
   HELPER COMPONENT
====================== */
function ResultCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: "blue" | "green" | "purple";
}) {
  const map = {
    blue: "bg-blue-50 border-blue-200 text-blue-700",
    green: "bg-green-50 border-green-200 text-green-700",
    purple: "bg-purple-50 border-purple-200 text-purple-700",
  };

  return (
    <div className={`border rounded-xl p-4 text-center ${map[color]}`}>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}
