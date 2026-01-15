import { Metadata } from "next";
import SipCalculatorClient from "./SipCalculatorClient";

export const metadata: Metadata = {
  title: "SIP Calculator | Mutual Fund SIP Calculator – DailyCalcu",
  description:
    "Calculate SIP returns easily using DailyCalcu’s free SIP calculator. Estimate total investment, returns, and maturity value.",
};

export default function Page() {
  return <SipCalculatorClient />;
}
