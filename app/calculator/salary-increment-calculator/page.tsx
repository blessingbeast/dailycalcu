import { Metadata } from "next";
import SalaryCalculatorClient from "./SalaryCalculatorClient";

export const metadata: Metadata = {
  title: "Salary Increment Calculator | Calculate New Salary – DailyCalcu",
  description:
    "Use this free salary increment calculator to calculate your new salary after increment percentage.",
};

export default function Page() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a salary increment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "A salary increment is an increase in your current salary, usually given annually by employers.",
                },
              },
              {
                "@type": "Question",
                "name": "How do I calculate salary increment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Multiply your current salary by the increment percentage and divide by 100.",
                },
              },
              {
                "@type": "Question",
                "name": "Is this salary increment calculator free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Yes, the salary increment calculator on DailyCalcu is completely free.",
                },
              },
            ],
          }),
        }}
      />

      <SalaryCalculatorClient />
    </>
  );
}
