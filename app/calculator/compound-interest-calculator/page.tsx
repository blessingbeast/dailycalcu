import { Metadata } from "next";
import CompoundInterestCalculatorClient from "./CompoundInterestCalculatorClient";

export const metadata: Metadata = {
  title: "Compound Interest Calculator | CI Calculator – DailyCalcu",
  description:
    "Calculate compound interest easily using DailyCalcu’s free Compound Interest Calculator.",
};

export default function Page() {
  return <CompoundInterestCalculatorClient />;
}
