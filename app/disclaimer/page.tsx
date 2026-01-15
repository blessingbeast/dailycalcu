import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | DailyCalcu",
  description:
    "Read the disclaimer for DailyCalcu regarding calculator accuracy and informational use.",
};

export default function DisclaimerPage() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Disclaimer</h1>

      <p className="text-gray-700 mb-4">
        The calculators and information provided on DailyCalcu are intended
        for general informational purposes only.
      </p>

      <p className="text-gray-700 mb-4">
        While we strive to ensure accuracy, DailyCalcu makes no guarantees
        regarding the correctness, completeness, or reliability of any
        calculations or information on this website.
      </p>

      <p className="text-gray-700 mb-4">
        Health-related calculators (such as BMI, BMR, calorie, or weight
        calculators) are not intended as medical advice. Always consult a
        qualified healthcare professional before making health-related
        decisions.
      </p>

      <p className="text-gray-700 mb-4">
        Financial calculators (such as EMI, SIP, interest, or tax calculators)
        are provided for informational purposes only and should not be
        considered financial advice.
      </p>

      <p className="text-gray-700 mb-4">
        By using DailyCalcu, you agree that we are not responsible for any
        losses or damages arising from the use of our calculators or content.
      </p>

      <p className="text-gray-700">
        If you have any concerns or questions, please contact us at:
        <br />
        <strong>contact@dailycalcu.com</strong>
      </p>
    </section>
  );
}
