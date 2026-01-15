import { Metadata } from "next";
import SimpleInterestCalculatorClient from "./SimpleInterestCalculatorClient";

export const metadata: Metadata = {
  title: "Simple Interest Calculator | SI Calculator – DailyCalcu",
  description:
    "Calculate simple interest easily using DailyCalcu’s free Simple Interest Calculator.",
};

export default function Page() {
  return <SimpleInterestCalculatorClient />;
}
