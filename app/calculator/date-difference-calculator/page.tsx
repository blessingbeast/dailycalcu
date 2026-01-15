import { Metadata } from "next";
import DateDifferenceCalculatorClient from "./DateDifferenceCalculatorClient";

export const metadata: Metadata = {
  title: "Date Difference Calculator | Days Between Dates – DailyCalcu",
  description:
    "Calculate the number of days between two dates instantly using DailyCalcu’s free date difference calculator.",
};

export default function Page() {
  return <DateDifferenceCalculatorClient />;
}
