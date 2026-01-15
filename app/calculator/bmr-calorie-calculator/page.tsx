import { Metadata } from "next";
import BmrCalorieCalculatorClient from "./BmrCalorieCalculatorClient";

export const metadata: Metadata = {
  title: "BMR & Calorie Calculator | Daily Calorie Needs – DailyCalcu",
  description:
    "Calculate your BMR and daily calorie needs using DailyCalcu’s free BMR and calorie calculator.",
};

export default function Page() {
  return <BmrCalorieCalculatorClient />;
}
