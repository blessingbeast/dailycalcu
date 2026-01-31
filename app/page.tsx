import Link from "next/link";

export default function HomePage() {
  return (
    <section className="max-w-6xl mx-auto px-4">

      {/* ======================
          HERO
      ====================== */}
      <div className="py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Free Online Calculators for Finance, Health & Everyday Use
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          DailyCalcu provides fast, accurate, and free online calculators to help
          you solve everyday problems related to finance, health, salary, age,
          and more — without sign-ups or complicated formulas.
        </p>

        <Link
          href="/calculator"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Browse All Calculators →
        </Link>
      </div>

      {/* ======================
          POPULAR CALCULATORS
      ====================== */}
      <div className="mb-24">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Popular Online Calculators
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Calorie Deficit Calculator",
              href: "/calculator/calorie-deficit-calculator",
              desc: "Calculate how many calories you should eat daily to lose weight safely.",
            },
            {
              title: "BMR & Calorie Calculator",
              href: "/calculator/bmr-calorie-calculator",
              desc: "Estimate your basal metabolic rate and daily calorie needs.",
            },
            {
              title: "SIP Calculator",
              href: "/calculator/sip-calculator",
              desc: "Calculate SIP returns and long-term investment growth easily.",
            },
            {
              title: "Compound Interest Calculator",
              href: "/calculator/compound-interest-calculator",
              desc: "Find compound interest and future value of investments.",
            },
            {
              title: "GST Calculator",
              href: "/calculator/gst-calculator",
              desc: "Add or remove GST from any amount instantly.",
            },
            {
              title: "Age Calculator",
              href: "/calculator/age-calculator",
              desc: "Calculate your exact age in years, months, and days.",
            },
          ].map((calc) => (
            <Link
              key={calc.title}
              href={calc.href}
              className="border rounded-xl p-6 hover:shadow-lg transition bg-white"
            >
              <h3 className="text-lg font-semibold mb-2">
                {calc.title}
              </h3>
              <p className="text-sm text-gray-600">{calc.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* ======================
          LONG-FORM SEO CONTENT
      ====================== */}
      <article className="max-w-4xl mx-auto text-gray-700 leading-relaxed mb-32">

        <h2 className="text-3xl font-semibold mb-6">
          DailyCalcu – Free Online Calculators, Simple and accurate
        </h2>

        <p className="mb-4">
          DailyCalcu is an all-in-one platform offering free online calculators
          specially made to make your daily calculations simple, fast and accurate. Dailycalcu offers easy tools for everyone, Whether
          you are planning your financial growt, tracking your health status regularly, calculating your
          salary increment, or solving basic math problems.
        </p>

        <p className="mb-4">
          There are many calculators online that require you to login, and show lots of ads,
          but Dailcalcu is free to use and does not need any kind of sign up. 
          Dailycalcu offers fast performance, and reliable results. Every calculator is built
          using Exact proven formulas and amazing accuracy.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">
          What are best Free Online Financial Calculators?
        </h3>

        <p className="mb-4">
          Financial planning is a very important part of our everyday life. DailyCalcu
          offers a wide range of financial calculators that help users make
          calculated decisions without much financial knowledge.
        </p>

        <p className="mb-4">
          There are some popular tools such as the SIP calculator and compound interest
          calculator that help users to calculate long-term investment growth. These
          calculators are useful for the individuals that are planning retirement,
          saving for future education, or building wealth through calculated investing.
        </p>

        <p className="mb-4">
          The GST calculator is perfect for those in India who need
          to add or remove GST for invoices or billing.
           With just one input, users can calculate GST
          date accurately.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">
          Best Health & Fitness Calculators for Everyday Use
        </h3>

        <p className="mb-4">
          Health calculators play an important role in understanding your body and
          maintaining a perfectly good lifestyle. DailyCalcu have accurate health
          calculators such as the BMI calculator, BMR calculator, and calorie
          deficit calculator.
        </p>

        <p className="mb-4">
          These calculators can help users to calculate their calorie needs, understand and track their metabolism,
          and plan their weight loss or weight gain journey by just enetering their physical details. By using these
          trusted and standard formulas
          like the Mifflin-St Jeor equation, DailyCalcu ensures that health-related
          calculations are accurate.
        </p>

        <p className="mb-4">
          Whether you are a just starting your fitness journey or
          tracking your long-term health goals, these calculators provide valuable
          results without replacing your professional medical advice.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">
          Best Everyday & Utility Calculators
        </h3>

        <p className="mb-4">
          DailyCalcu also have simple everyday calculators such as age
          calculators, percentage calculators, and salary calculators. These
          calculators are useful for students, professionals, and anyone who needs
          quick and accurate answers online without any login required.
        </p>

        <p className="mb-4">
          The age calculator is very simple to use, it allows users to calculate their exact age in years,
          months, and days — this feature is often required for job applications,
          government forms, and school admissions.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">
          Why Choose DailyCalcu?
        </h3>

        <ul className="list-disc ml-6 mb-6">
          <li>100% free online calculators</li>
          <li>No sign-up or personal data required</li>
          <li>Accurate formulas and logic</li>
          <li>Mobile-friendly and fast</li>
          <li>Clean, user-friendly design</li>
        </ul>

        <p className="mb-4">
          DailyCalcu is built for users who need simplicity, accuracy, and
          efficiency in their online calculator. Every calculator is optimized for performance and ease of
          use across devices, making it best for both quick checks and detailed
          planning.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">
          Start Using Free Online Calculators Today
        </h3>

        <p className="mb-4">
          Whether you need to calculate investments, plan your health goals, or
          solve everyday math problems, DailyCalcu has you covered. Explore our
          growing collection of free online calculators and simplify your daily
          calculations today.
        </p>

        <p>
          New calculators are added regularly to ensure users always have access
          to the tools they need — all in one simple and reliable platform.
        </p>

      </article>
    </section>
  );
}
