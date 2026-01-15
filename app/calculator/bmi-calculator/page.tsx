import { Metadata } from "next";
import BMICalculatorClient from "./BMICalculatorClient";

export const metadata: Metadata = {
  title: "BMI Calculator | Body Mass Index Calculator – DailyCalcu",
  description:
    "Use this free BMI calculator to calculate your Body Mass Index and check your weight category instantly.",
};

export default function Page() {
  return <BMICalculatorClient />;
}
