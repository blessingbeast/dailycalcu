import { Metadata } from "next";
import IdealWeightCalculatorClient from "./IdealWeightCalculatorClient";

export const metadata: Metadata = {
  title: "Ideal Weight Calculator | Healthy Weight Range – DailyCalcu",
  description:
    "Calculate your ideal body weight using standard medical formulas with DailyCalcu’s free Ideal Weight Calculator.",
};

export default function Page() {
  return <IdealWeightCalculatorClient />;
}
