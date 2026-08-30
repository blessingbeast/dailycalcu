"use client";

import { useState } from "react";

/* =======================
   TYPES
======================= */

type AgeResult = {
  years: number;
  months: number;
  days: number;
  totalMonths: number;
  totalWeeks: number;
  totalDays: number;
};

/* =======================
   DATE HELPERS
======================= */

function parseDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);

  if (!year || !month || !day) return null;

  return new Date(Date.UTC(year, month - 1, day));
}

function formatDate(date: Date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getTodayString() {
  return formatDate(new Date());
}

function isLeapYear(year: number) {
  return (
    year % 4 === 0 &&
    (year % 100 !== 0 || year % 400 === 0)
  );
}

/*
  For a Feb 29 birthday in a non-leap year,
  we use February 28 as the anniversary date.
*/
function getAnniversaryDate(
  birthYear: number,
  birthMonth: number,
  birthDay: number,
  targetYear: number
) {
  if (
    birthMonth === 2 &&
    birthDay === 29 &&
    !isLeapYear(targetYear)
  ) {
    return new Date(Date.UTC(targetYear, 1, 28));
  }

  return new Date(
    Date.UTC(targetYear, birthMonth - 1, birthDay)
  );
}

/* =======================
   AGE CALCULATION
======================= */

function calculateAge(
  dobValue: string,
  referenceValue: string
): AgeResult | null {
  const birthDate = parseDate(dobValue);
  const referenceDate = parseDate(referenceValue);

  if (!birthDate || !referenceDate) {
    return null;
  }

  if (birthDate > referenceDate) {
    return null;
  }

  const birthYear = birthDate.getUTCFullYear();
  const birthMonth = birthDate.getUTCMonth() + 1;
  const birthDay = birthDate.getUTCDate();

  const referenceYear = referenceDate.getUTCFullYear();
  const referenceMonth = referenceDate.getUTCMonth() + 1;
  const referenceDay = referenceDate.getUTCDate();

  let years = referenceYear - birthYear;

  const anniversary = getAnniversaryDate(
    birthYear,
    birthMonth,
    birthDay,
    referenceYear
  );

  if (anniversary > referenceDate) {
    years--;
  }

  const anniversaryAfterYears = getAnniversaryDate(
    birthYear,
    birthMonth,
    birthDay,
    birthYear + years
  );

  let months =
    referenceMonth -
    (anniversaryAfterYears.getUTCMonth() + 1);

  let days =
    referenceDay -
    anniversaryAfterYears.getUTCDate();

  if (days < 0) {
    months--;

    const previousMonthDate = new Date(
      Date.UTC(
        referenceDate.getUTCFullYear(),
        referenceDate.getUTCMonth(),
        0
      )
    );

    days += previousMonthDate.getUTCDate();
  }

  if (months < 0) {
    months += 12;
  }

  const totalMilliseconds =
    referenceDate.getTime() - birthDate.getTime();

  const totalDays = Math.floor(
    totalMilliseconds / (1000 * 60 * 60 * 24)
  );

  const totalWeeks = Math.floor(totalDays / 7);

  const totalMonths = years * 12 + months;

  return {
    years,
    months,
    days,
    totalMonths,
    totalWeeks,
    totalDays,
  };
}

/* =======================
   RESULT CARD
======================= */

function ResultCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="border rounded-lg p-4 text-center bg-blue-50 border-blue-200">
      <p className="text-sm text-gray-600">
        {label}
      </p>

      <p className="text-2xl font-bold text-blue-700">
        {value.toLocaleString()}
      </p>
    </div>
  );
}

/* =======================
   PROGRESS BAR
======================= */

function ProgressBar({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="mb-5">
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>{label}</span>
        <span>{value.toFixed(1)}%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full"
          style={{
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  );
}

/* =======================
   MAIN COMPONENT
======================= */

export default function AgeCalculatorClient() {
  const today = getTodayString();

  const [dob, setDob] = useState("");
  const [referenceDate, setReferenceDate] =
    useState(today);

  const [error, setError] = useState("");

  const result = dob
    ? calculateAge(dob, referenceDate)
    : null;

  /* =======================
     LIFESPAN PROGRESS
  ======================= */

  const EXPECTED_LIFESPAN = 80;

  const lifeProgress = result
    ? Math.min(
        (result.years / EXPECTED_LIFESPAN) * 100,
        100
      )
    : 0;

  const monthProgress = result
    ? Math.min(
        (result.totalMonths /
          (EXPECTED_LIFESPAN * 12)) *
          100,
        100
      )
    : 0;

  const dayProgress = result
    ? Math.min(
        (result.totalDays /
          (EXPECTED_LIFESPAN * 365.2425)) *
          100,
        100
      )
    : 0;

  /* =======================
     HANDLE CALCULATION
  ======================= */

  const handleCalculate = () => {
    if (!dob) {
      setError("Please enter your date of birth.");
      return;
    }

    if (!referenceDate) {
      setError("Please select a reference date.");
      return;
    }

    const birthDate = parseDate(dob);
    const refDate = parseDate(referenceDate);

    if (!birthDate || !refDate) {
      setError("Please enter valid dates.");
      return;
    }

    if (birthDate > refDate) {
      setError(
        "Date of birth cannot be after the reference date."
      );
      return;
    }

    setError("");
  };

  const handleToday = () => {
    setReferenceDate(getTodayString());
    setError("");
  };

  return (
    <section className="max-w-2xl mx-auto">

      {/* =======================
          HEADER
      ======================= */}

      <header className="mb-8 text-center mt-5">
        <h1 className="text-4xl font-bold mb-3">
          Age Calculator
        </h1>

        <p className="text-gray-600">
          Calculate your exact age in years, months, and days
        </p>
      </header>

      {/* =======================
          CALCULATOR
      ======================= */}

      <div className="bg-white shadow-lg rounded-xl p-6 mb-10">

        {/* DATE OF BIRTH */}

        <div className="mb-6">
          <label
            htmlFor="dob"
            className="block font-medium mb-2"
          >
            Date of Birth
          </label>

          <input
            id="dob"
            type="date"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
              setError("");
            }}
            className="w-full border rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* REFERENCE DATE */}

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="referenceDate"
              className="block font-medium"
            >
              Calculate Age On
            </label>

            <button
              type="button"
              onClick={handleToday}
              className="text-sm text-blue-600 hover:underline"
            >
              Use Today
            </button>
          </div>

          <input
            id="referenceDate"
            type="date"
            value={referenceDate}
            onChange={(e) => {
              setReferenceDate(e.target.value);
              setError("");
            }}
            className="w-full border rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <p className="text-sm text-gray-500 mt-2">
            Choose any past, present, or future date.
          </p>
        </div>

        {/* ERROR */}

        {error && (
          <p className="text-red-600 text-sm mb-4">
            {error}
          </p>
        )}

        {/* BUTTON */}

        <button
          type="button"
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Calculate Age
        </button>

        {/* =======================
            RESULT
        ======================= */}

        {result && !error && (
          <div className="mt-8">

            <h2 className="text-2xl font-bold mb-4">
              Your Exact Age
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <ResultCard
                label="Years"
                value={result.years}
              />

              <ResultCard
                label="Months"
                value={result.months}
              />

              <ResultCard
                label="Days"
                value={result.days}
              />
            </div>

            {/* TOTAL UNITS */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">

              <div className="border rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  Total Months
                </p>

                <p className="text-xl font-semibold">
                  {result.totalMonths.toLocaleString()}
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  Total Weeks
                </p>

                <p className="text-xl font-semibold">
                  {result.totalWeeks.toLocaleString()}
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  Total Days
                </p>

                <p className="text-xl font-semibold">
                  {result.totalDays.toLocaleString()}
                </p>
              </div>

            </div>

          </div>
        )}

      </div>

      {/* =======================
          LIFE TIMELINE
      ======================= */}

      {result && !error && (
        <section className="mt-16">

          <h2 className="text-2xl font-bold mb-4">
            Your Life Timeline
          </h2>

          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{
                width: `${lifeProgress}%`,
              }}
            />
          </div>

          <p className="text-sm text-gray-500 mt-2">
            You have lived approximately{" "}
            <strong>
              {lifeProgress.toFixed(1)}%
            </strong>{" "}
            of an average 80-year lifespan.
          </p>

        </section>
      )}

      {/* =======================
          LIFE PROGRESS
      ======================= */}

      {result && !error && (
        <section className="mt-16">

          <h2 className="text-2xl font-bold mb-6">
            Life Progress Overview
          </h2>

          <ProgressBar
            label="Years Lived"
            value={lifeProgress}
          />

          <ProgressBar
            label="Months Lived"
            value={monthProgress}
          />

          <ProgressBar
            label="Days Lived"
            value={dayProgress}
          />

        </section>
      )}

      {/* =======================
          WHY DAILY CALCU
      ======================= */}

      <section className="mt-16">

        <h2 className="text-2xl font-bold mb-4">
          Why Choose DailyCalcu’s Age Calculator?
        </h2>

        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>
            Calculate exact age in years, months, and days
          </li>

          <li>
            Calculate age on any specific date
          </li>

          <li>
            Handles leap years and different month lengths
          </li>

          <li>
            Shows total age in months, weeks, and days
          </li>

          <li>
            Mobile and desktop friendly
          </li>

          <li>
            No registration required
          </li>

          <li>
            Completely free to use
          </li>
        </ul>

      </section>

      {/* =======================
          SEO CONTENT
      ======================= */}

      <article className="prose max-w-none mt-10">

        <h2 className="text-2xl font-bold mb-4">
          What Is an Age Calculator?
        </h2>

        <p>
          An age calculator is an online tool that
          calculates a person's age from their date of
          birth. Instead of manually counting years,
          months, and days, an age calculator performs the
          calculation automatically.
        </p>

        <p>
          DailyCalcu's Age Calculator can calculate your
          exact age in years, months, and days. You can also
          choose a specific reference date to find out how
          old you were or will be on that date.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          How Does the Age Calculator Work?
        </h2>

        <p>
          The calculator compares your date of birth with
          the date you select in the "Calculate Age On"
          field. It then calculates the difference between
          the two dates in years, months, and days.
        </p>

        <p>
          The calculation takes calendar differences into
          account, including different month lengths and
          leap years. This makes it more useful than simply
          subtracting one year from another.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          How to Calculate Your Age
        </h2>

        <ol className="list-decimal ml-6">
          <li>
            Enter your date of birth.
          </li>

          <li>
            Select the date on which you want to calculate
            your age.
          </li>

          <li>
            Click "Calculate Age."
          </li>

          <li>
            View your exact age in years, months, and days.
          </li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          Calculate Age on a Specific Date
        </h2>

        <p>
          Sometimes you may need to know how old you were
          on a particular date rather than today. For
          example, you might want to calculate your age on
          a past date, an upcoming birthday, an application
          deadline, or another important date.
        </p>

        <p>
          Enter your date of birth and select the desired
          reference date. The calculator will calculate the
          age for that exact date.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          Age in Years, Months, Weeks, and Days
        </h2>

        <p>
          Age is normally expressed in years, but sometimes
          a more detailed measurement is useful. DailyCalcu
          provides the exact years, months, and days
          breakdown as well as total months, total weeks,
          and total days.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">
          Age in Years
        </h3>

        <p>
          Years are the standard way of describing a
          person's age and are commonly used for everyday,
          administrative, and legal purposes.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">
          Age in Months
        </h3>

        <p>
          Total months can be useful when a more detailed
          age measurement is required, especially for young
          children and infants.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">
          Age in Days
        </h3>

        <p>
          Total days provide a precise measurement of the
          number of complete days between the date of birth
          and the selected reference date.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          Does the Age Calculator Handle Leap Years?
        </h2>

        <p>
          Yes. The calculator accounts for leap years when
          calculating the difference between dates. This is
          important because leap years contain an additional
          day in February.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          Can I Calculate Age for a Future Date?
        </h2>

        <p>
          Yes. You can select a future reference date to
          calculate how old you will be on that date. This
          can be useful when checking age at a future
          birthday, eligibility date, or other milestone.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          Can I Calculate My Age on a Past Date?
        </h2>

        <p>
          Yes. Select any valid date after your date of
          birth as the reference date. The calculator will
          determine your age on that particular date.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          Is an Online Age Calculator Accurate?
        </h2>

        <p>
          DailyCalcu uses calendar-based date calculations
          to determine the difference between two dates.
          Results are intended for everyday informational
          use. For official or legal purposes, always
          verify dates and age against the relevant official
          records.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          Example of an Age Calculation
        </h2>

        <p>
          Suppose your date of birth is 15 March 1995 and
          you want to calculate your age on 25 January 2026.
          Enter both dates into the calculator and it will
          provide the corresponding years, months, and days
          between those dates.
        </p>

        <p>
          You can change the reference date to another past,
          present, or future date whenever you want to perform
          another calculation.
        </p>

      </article>

    </section>
  );
}