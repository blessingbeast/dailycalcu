import { Metadata } from "next";
import PpfCalculatorClient from "./PpfCalculatorClient";

export const metadata: Metadata = {
  title: "PPF Calculator | Public Provident Fund Calculator – DailyCalcu",
  description:
    "Calculate PPF maturity amount, interest earned, and total investment using DailyCalcu’s free PPF calculator.",
};

export default function Page() {
  return <PpfCalculatorClient />;
}
