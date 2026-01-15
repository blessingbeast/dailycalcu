import { Metadata } from "next";
import CalorieDeficitCalculatorClient from "./CalorieDeficitCalculatorClient";

export const metadata: Metadata = {
  title: "Calorie Deficit Calculator | Weight Loss Calories – DailyCalcu",
  description:
    "Calculate how many calories you should eat to lose weight using DailyCalcu’s free calorie deficit calculator.",
};

export default function Page() {
  return <CalorieDeficitCalculatorClient />;
}
