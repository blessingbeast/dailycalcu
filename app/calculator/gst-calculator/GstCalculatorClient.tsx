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

  if (amt && gstRate) {
    if (mode === "add") {
      gstAmount = (amt * gstRate) / 100;
      finalAmount = amt + gstAmount;
    } else {
      gstAmount = (amt * gstRate) / (100 + gstRate);
      finalAmount = amt - gstAmount;
    }
  }

  return (
    <section className="max-w-2xl mx-auto">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-3">
          GST Calculator
        </h1>
        <p className="text-gray-600">
          Add or remove GST and calculate final price instantly
        </p>
      </header>

      {/* Calculator */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
        {/* Amount */}
        <div className="mb-4">
          <label className="block font-medium mb-2">
            Amount
          </label>
          <input
            type="number"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* GST Rate */}
        <div className="mb-4">
          <label className="block font-medium mb-2">
            GST Rate (%)
          </label>
          <input
            type="number"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="e.g. 5, 12, 18"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>

        {/* Mode */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setMode("add")}
            className={`flex-1 py-2 rounded-lg font-medium ${
              mode === "add"
                ? "bg-blue-600 text-white"
                : "bg-gray-100"
            }`}
          >
            Add GST
          </button>

          <button
            onClick={() => setMode("remove")}
            className={`flex-1 py-2 rounded-lg font-medium ${
              mode === "remove"
                ? "bg-blue-600 text-white"
                : "bg-gray-100"
            }`}
          >
            Remove GST
          </button>
        </div>

        {/* Result */}
        {amt > 0 && gstRate > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">GST Amount</p>
              <p className="text-xl font-semibold text-green-700">
                ₹{gstAmount.toFixed(2)}
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Final Amount</p>
              <p className="text-xl font-semibold text-purple-700">
                ₹{finalAmount.toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Content */}
      <article className="prose max-w-none">
        <h2>What is GST?</h2>
        <p>
          GST (Goods and Services Tax) is an indirect tax levied on the supply
          of goods and services in India.
        </p>

        <h3>How GST is calculated?</h3>
        <p>
          <strong>Add GST:</strong> (Amount × GST%) ÷ 100<br />
          <strong>Remove GST:</strong> (Amount × GST%) ÷ (100 + GST%)
        </p>
      </article>
    </section>
  );
}
