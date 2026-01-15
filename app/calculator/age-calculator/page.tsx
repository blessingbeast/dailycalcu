import { Metadata } from "next";
import AgeCalculatorClient from "./AgeCalculatorClient";

export const metadata: Metadata = {
  title: "Age Calculator | Calculate Your Age Online – DailyCalcu",
  description:
    "Use this free age calculator to calculate your exact age in years, months, and days from your date of birth.",
};

export default function Page() {
  return <AgeCalculatorClient />;
}
