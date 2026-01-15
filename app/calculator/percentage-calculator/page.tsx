import { Metadata } from "next";
import PercentageCalculatorClient from "./PercentageCalculatorClient";

export const metadata: Metadata = {
  title: "Percentage Calculator | Calculate Percentage Online – DailyCalcu",
  description:
    "Use this free percentage calculator to calculate percentage values easily. Find X percent of Y instantly.",
};

export default function Page() {
  return <PercentageCalculatorClient />;
}
