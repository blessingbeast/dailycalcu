import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | DailyCalcu",
  description:
    "Read the privacy policy of DailyCalcu to understand how we handle user data and cookies.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-gray-700 mb-4">
        At DailyCalcu, we value your privacy. This Privacy Policy document
        outlines the types of information that are collected and recorded by
        DailyCalcu and how we use it.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Information We Collect
      </h2>

      <p className="text-gray-700 mb-4">
        DailyCalcu does not require users to create accounts or provide
        personal information to use our calculators.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cookies and Web Beacons
      </h2>

      <p className="text-gray-700 mb-4">
        We may use cookies to store information about visitors’ preferences
        and to optimize user experience by customizing our web page content
        based on visitors’ browser type or other information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Google Analytics & AdSense
      </h2>

      <p className="text-gray-700 mb-4">
        DailyCalcu may use Google Analytics to analyze user behavior and
        improve our website. Google AdSense may use cookies (such as the
        DoubleClick cookie) to serve ads to users based on their visit to this
        and other websites.
      </p>

      <p className="text-gray-700 mb-4">
        Users may opt out of personalized advertising by visiting Google’s
        Ads Settings.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Consent
      </h2>

      <p className="text-gray-700 mb-4">
        By using our website, you hereby consent to our Privacy Policy and
        agree to its terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Contact Us
      </h2>

      <p className="text-gray-700">
        If you have any questions about this Privacy Policy, please contact
        us at:
        <br />
        <strong>contact@dailycalcu.com</strong>
      </p>
    </section>
  );
}
