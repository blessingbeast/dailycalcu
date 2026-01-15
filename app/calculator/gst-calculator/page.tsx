import { Metadata } from "next";
import GstCalculatorClient from "./GstCalculatorClient";

export const metadata: Metadata = {
  title: "GST Calculator | Add or Remove GST – DailyCalcu",
  description:
    "Use DailyCalcu’s free GST calculator to add or remove GST and calculate final price instantly.",
};

export default function Page() {
  return <GstCalculatorClient />;
}
