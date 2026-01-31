"use client";

import { useState } from "react";

export default function GstCalculatorClient() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [mode, setMode] = useState<"add" | "remove">("add");

  const amt = Number(amount);
  const gstRate = Number(rate);

  let gstAmount = 0;
  let finalAmount = 0;

  if (amt > 0 && gstRate > 0) {
    if (mode === "add") {
      gstAmount = (amt * gstRate) / 100;
      finalAmount = amt + gstAmount;
    } else {
      gstAmount = (amt * gstRate) / (100 + gstRate);
      finalAmount = amt - gstAmount;
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4">
      {/* HEADER */}
      <header className="text-center mt-10 mb-10">
        <h1 className="text-4xl font-bold mb-3">
          GST Calculator
        </h1>
        <p className="text-gray-600">
          Calculate GST amount, GST inclusive price, and GST exclusive price instantly
        </p>
      </header>

      {/* INPUT CARD */}
      <div className="bg-white border rounded-2xl shadow-sm p-6 mb-12 space-y-6">
        {/* Amount */}
        <div className="relative">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="peer w-full border rounded-lg px-4 pt-6 pb-2 focus:ring-2 focus:ring-blue-200"
            placeholder=" "
          />
          <label className="absolute left-4 top-2 text-xs text-gray-500">
            Amount (₹)
          </label>
        </div>

        {/* GST Rate */}
        <div className="relative">
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="peer w-full border rounded-lg px-4 pt-6 pb-2 focus:ring-2 focus:ring-blue-200"
            placeholder=" "
          />
          <label className="absolute left-4 top-2 text-xs text-gray-500">
            GST Rate (%)
          </label>
          <p className="text-xs text-gray-500 mt-1">
            Common rates: 5%, 12%, 18%, 28%
          </p>
        </div>

        {/* MODE */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setMode("add")}
            className={`py-3 rounded-xl font-medium transition ${
              mode === "add"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            Add GST
          </button>

          <button
            onClick={() => setMode("remove")}
            className={`py-3 rounded-xl font-medium transition ${
              mode === "remove"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            Remove GST
          </button>
        </div>

        {/* RESULTS */}
        {amt > 0 && gstRate > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-sm text-gray-600">GST Amount</p>
                <p className="text-xl font-semibold text-green-700">
                  ₹{gstAmount.toFixed(2)}
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="text-sm text-gray-600">
                  {mode === "add" ? "Final Price (Inclusive)" : "Base Price"}
                </p>
                <p className="text-xl font-semibold text-purple-700">
                  ₹{finalAmount.toFixed(2)}
                </p>
              </div>
            </div>

            {/* DYNAMIC EXPLANATION */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800 mt-6">
              {mode === "add" ? (
                <>
                  GST of <strong>{gstRate}%</strong> on ₹{amt} is{" "}
                  <strong>₹{gstAmount.toFixed(2)}</strong>.  
                  Final amount payable becomes{" "}
                  <strong>₹{finalAmount.toFixed(2)}</strong>.
                </>
              ) : (
                <>
                  From the GST-inclusive amount ₹{amt}, the GST portion at{" "}
                  <strong>{gstRate}%</strong> is{" "}
                  <strong>₹{gstAmount.toFixed(2)}</strong>.  
                  Original base price is{" "}
                  <strong>₹{finalAmount.toFixed(2)}</strong>.
                </>
              )}
            </div>

            {/* VISUAL BAR */}
            <div className="mt-4">
              <p className="text-xs text-gray-600 mb-1">
                GST Portion Visual
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{
                    width: `${Math.min(gstRate, 100)}%`,
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
