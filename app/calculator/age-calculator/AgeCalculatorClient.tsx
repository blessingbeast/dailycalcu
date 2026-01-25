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

  /* =======================
     DYNAMIC PROGRESS LOGIC
  ======================= */
  const EXPECTED_LIFESPAN = 80;

  const lifeProgress = result
    ? Math.min((result.years / EXPECTED_LIFESPAN) * 100, 100)
    : 0;

  const monthProgress = result
    ? Math.min(
        (result.totalMonths / (EXPECTED_LIFESPAN * 12)) * 100,
        100
      )
    : 0;

  const dayProgress = result
    ? Math.min(
        (result.totalDays / (EXPECTED_LIFESPAN * 365)) * 100,
        100
      )
    : 0;

  return (
    <section className="max-w-2xl mx-auto">

      {/* HEADER */}
      <header className="mb-8 text-center mt-5">
        <h1 className="text-4xl font-bold mb-3">
          Age Calculator
        </h1>
        <p className="text-gray-600">
          Calculate your exact age in years, months, and days
        </p>
      </header>

      {/* INPUT */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
        <label className="block font-medium mb-2">
          Date of Birth
        </label>
        <input
          type="date"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        {/* RESULT CARDS */}
        {result && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <ResultCard label="Years" value={result.years} color="blue" />
            <ResultCard label="Months" value={result.totalMonths} color="green" />
            <ResultCard label="Days" value={result.totalDays} color="purple" />
          </div>
        )}
      </div>

   


      {/* =======================
         LIFE TIMELINE
      ======================= */}
      {result && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">
            Your Life Timeline
          </h2>

          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: `${lifeProgress}%` }}
            />
          </div>

          <p className="text-sm text-gray-500 mt-2">
            You have lived approximately{" "}
            <strong>{lifeProgress.toFixed(1)}%</strong> of an average
            80-year lifespan.
          </p>
        </section>
      )}

      {/* =======================
         LIFE PROGRESS CHART
      ======================= */}
      {result && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">
            Life Progress Overview
          </h2>

          <ProgressBar label="Years Lived" value={lifeProgress} color="bg-blue-600" />
          <ProgressBar label="Months Lived" value={monthProgress} color="bg-green-600" />
          <ProgressBar label="Days Lived" value={dayProgress} color="bg-purple-600" />
        </section>
      )}

      {/* =======================
         WHY DAILY CALCU
      ======================= */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">
          Why Choose DailyCalcu’s Age Calculator?
        </h2>

        <ul className="list-disc ml-6 text-gray-700">
          <li>100% accurate calculations</li>
          <li>Handles leap years correctly</li>
          <li>Mobile and desktop friendly</li>
          <li>No registration required</li>
          <li>Completely free to use</li>
        </ul>
      </section>

   {/* =======================
         SEO CONTENT
      ======================= */}
     {/* =======================
   LONG-FORM SEO BLOG
======================= */}
<article className="prose max-w-none mt-8">

  <h2 className="text-2xl font-bold mb-4">What Is an Age Calculator?</h2>
  <p>
    An age calculator is an online tool that determines your exact age based on
    your date of birth and a reference date, usually the current date. Unlike
    simple age calculations that only show years, an advanced age calculator
    provides a detailed breakdown in years, months, and days.
  </p>

  <p>
    The DailyCalcu Age Calculator is designed to deliver accurate, instant
    results while accounting for leap years, varying month lengths, and calendar
    differences. This makes it far more reliable than manual age calculations.
  </p>

  <h2 className="text-2xl font-bold mt-4">How Does the Age Calculator Work?</h2>
  <p>
    The calculator compares your date of birth with today’s date. It subtracts
    the birth year from the current year, adjusts the months if your birthday
    has not yet occurred, and calculates the remaining days accurately.
  </p>

  <p>
    This process ensures precise age calculation even in complex cases such as
    leap years or when the current month has fewer days than the birth month.
  </p>

  <h2 className="text-2xl font-bold mt-4">Why Use an Online Age Calculator?</h2>
  <ul className="list-disc ml-6 text-gray-700">
    <li>Eliminates errors from manual calculations</li>
    <li>Provides instant and precise results</li>
    <li>Useful for official and legal documentation</li>
    <li>Works for past, present, and future dates</li>
    <li>No signup or personal data required</li>
  </ul>

  <h2 className="text-2xl font-bold mt-4">Real-Life Uses of an Age Calculator</h2>
  <p>
    Age calculators are widely used in daily life and official scenarios. Some
    of the most common use cases include:
  </p>

  <ul className="list-disc ml-6 text-gray-700">
    <li>School and college admissions</li>
    <li>Job eligibility and retirement planning</li>
    <li>Medical records and pediatric tracking</li>
    <li>Insurance and financial planning</li>
    <li>Government forms and legal documentation</li>
  </ul>

  <h2 className="text-2xl font-bold mt-4">Age Calculation Example</h2>
  <p>
    Suppose your date of birth is <strong>15 March 1995</strong> and today’s date
    is <strong>25 January 2026</strong>.
  </p>

  <p>
    Using the age calculator, your age would be calculated as:
  </p>

  <ul className="list-disc ml-6 text-gray-700">
    <li>30 years</li>
    <li>370 total months</li>
    <li>More than 11,000 days lived</li>
  </ul>

  <p>
    Performing this calculation manually would be time-consuming and prone to
    errors, especially when accounting for leap years. The calculator handles
    everything instantly.
  </p>

  <h2 className="text-2xl font-bold mt-4">Understanding Age in Different Units</h2>
  <p>
    Age can be expressed in various units depending on the requirement. While
    years are commonly used for identification and legal purposes, months and
    days provide more precise measurements.
  </p>

  <h3 className="text-xl font-bold mt-4">Age in Years</h3>
  <p>
    This is the most commonly used form of age representation and is typically
    required for official records and documents.
  </p>

  <h3 className="text-xl font-bold mt-4">Age in Months</h3>
  <p>
    Measuring age in months is especially useful for infants, toddlers, and
    medical assessments where precise growth tracking is required.
  </p>

  <h3 className="text-xl font-bold mt-4">Age in Days</h3>
  <p>
    Age in days is often used in medical, scientific, and research contexts
    where exact timelines matter.
  </p>

  <h2 className="text-xl font-bold mt-4">Does the Age Calculator Handle Leap Years?</h2>
  <p>
    Yes. Leap years add an extra day in February, which can affect age
    calculations. The DailyCalcu Age Calculator automatically accounts for leap
    years, ensuring that results remain accurate regardless of birth year.
  </p>

  <h2 className="text-xl font-bold mt-4"> Can You Calculate Age for a Future Date?</h2>
  <p>
    Yes, age calculators can be used to calculate age for future dates. This is
    useful for planning retirement, checking eligibility for exams or jobs, and
    estimating future milestones.
  </p>

  <h2 className="text-xl font-bold mt-4">Is This Age Calculator Accurate?</h2>
  <p>
    The calculator uses standard date arithmetic and real calendar logic,
    making it highly accurate for everyday and professional use. However, for
    legal or official documents, age should always be verified against official
    records.
  </p>

  <h2 className="text-xl font-bold mt-4">Why Use DailyCalcu’s Age Calculator?</h2>
  <p>
    DailyCalcu’s Age Calculator stands out by offering detailed breakdowns,
    dynamic visual timelines, and a clean user interface without unnecessary
    distractions.
  </p>

  <ul className="list-disc ml-6 text-gray-700">
    <li>Accurate age calculation</li>
    <li>Dynamic visual progress charts</li>
    <li>Mobile-friendly design</li>
    <li>No registration required</li>
    <li>Completely free to use</li>
  </ul>

</article>
    </section>
  );
}

/* =======================
   COMPONENTS
======================= */
function ResultCard({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: "blue" | "green" | "purple";
}) {
  const colorMap = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    green: "bg-green-50 text-green-700 border-green-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
  };

  return (
    <div className={`border rounded-lg p-4 text-center ${colorMap[color]}`}>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-2xl font-semibold">{value}</p>
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
