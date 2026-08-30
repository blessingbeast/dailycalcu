import { Metadata } from "next";
import CalorieDeficitCalculatorClient from "./CalorieDeficitCalculatorClient";

export const metadata: Metadata = {
  title:
    "Calorie Deficit Calculator – Free Weight Loss Calorie Calculator | DailyCalcu",
  description:
    "Calculate your estimated maintenance calories and calorie deficit for weight loss using your age, height, weight, gender, and activity level.",
  alternates: {
    canonical: "https://dailycalcu.com/calculator/calorie-deficit-calculator",
  },
};

export default function Page() {
  return (
    <>
      {/* CALCULATOR */}
      <CalorieDeficitCalculatorClient />

      {/* SUPPORTING CONTENT */}
      <article className="max-w-3xl mx-auto px-4 pb-16 text-gray-700">

        {/* INTRODUCTION */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Use the Calorie Deficit Calculator?
          </h2>

          <p className="mb-4">
            This calorie deficit calculator estimates how many calories your
             body may need each day and shows several calorie targets that 
             can be used when planning for weight loss.
          </p>

          <p className="mb-4">
            Enter your gender, age, height, weight, and activity level. The calculator calculates your Basal Metabolic 
            Rate (BMR) and then calculates your maintenance calories per day 
            based on your activity level.
          </p>

          <p>
            Then you can compare your estimated maintenance calories to lower 
            calorie targets, to see how different levels of 
            calorie restriction might affect your daily intake.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Does a Calorie Deficit Calculator Work?
          </h2>

          <p className="mb-4">
            A calorie deficit happens when you 
            consume fewer calories than you spend. 
            If you stay in a calorie deficit over time, you’ll lose weight.
          </p>

          <p className="mb-4">
            This calculator uses the Mifflin-St Jeor equation to estimate your Basal Metabolic Rate (BMR). 
            BMR is an estimate of the energy your body needs to carry 
            out basic functions when you are at rest.
          </p>

          <p className="mb-4">
            Your estimated BMR is then multiplied by an activity factor to
            figure out your daily maintenance calorie requirement.
          </p>

          <div className="bg-gray-50 border rounded-lg p-5 my-6">
            <p className="font-semibold text-gray-900 mb-2">
              The calculation follows this process:
            </p>

            <ol className="list-decimal list-inside space-y-2">
              <li>Estimate your Basal Metabolic Rate (BMR).</li>
              <li>Apply an activity multiplier.</li>
              <li>Estimate your maintenance calories.</li>
              <li>Compare maintenance calories with a lower target.</li>
            </ol>
          </div>
        </section>

        {/* BMR */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Is BMR?
          </h2>

          <p className="mb-4">
            Basal Metabolic Rate, or BMR, is an estimate of how much energy
            your body uses to support daily required functions while at rest.
          </p>

          <p>
            BMR does not represent your total daily calorie requirement.
            Your daily energy needs are also affected by your physical activity,
            exercise, body composition, and other individual factors.
          </p>
        </section>

        {/* MAINTENANCE CALORIES */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Are Maintenance Calories?
          </h2>

          <p className="mb-4">
            Maintenance calories are an estimate of how many calories you may
            need to consume to maintain your current body weight under your
            daily usual activity level.
          </p>

          <p>
            Your actual calorie needs can be higher or lower than the
            calculator estimate. Treat the result as a starting estimate
            rather than an exact measurement of your individual energy
            requirements.
          </p>
        </section>

        {/* EXAMPLE */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Calorie Deficit Example
          </h2>

          <p className="mb-4">
            Suppose your estimated maintenance requirement is 2,500 calories
            per day. Eating fewer calories than this amount would create a
            calorie deficit and you might lose weight and also get sick.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-3">
              Example:
            </p>

            <ul className="space-y-2">
              <li>Estimated maintenance calories: 2,500 kcal/day</li>
              <li>Daily intake: 2,000 kcal/day</li>
              <li>Estimated calorie deficit: 500 kcal/day</li>
            </ul>
          </div>

          <p className="mt-4">
            This is only an example for you to understand how the calorie deficit works. Your appropriate calorie intake depends
            on your individual circumstances like your physical activites, exercises etc, and should not be determined
            from this example alone.
          </p>
        </section>

        {/* SAFE DEFICIT */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Is a Reasonable Calorie Deficit?
          </h2>

          <p className="mb-4">
            There is not a single calorie deficit that is appropriate for
            everyone. It varies person to person. A commonly used approach is to create a moderate deficit
            rather than heavily reducing food intake.
          </p>

          <p className="mb-4">
            A larger deficit is not necessarily better. Very aggressive
            calorie restriction can make it harder to achieve nutritional needs that a person needs on daily basis
            and may not be sustainable and can get you sick.
          </p>

          <p>
            People who are pregnant, underweight, growing teen or adults, have a
            medical condition of any kind, have a history of an eating disorder, or have
            other special dietary needs like some ellergy, should seek appropriate professional
            guidance rather than relying on a calculator alone.
          </p>
        </section>

        {/* WEIGHT LOSS */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Many Calories Should I Eat to Lose Weight?
          </h2>

          <p className="mb-4">
            To lose weight, your average calorie intake normally needs to be
            lower then the amount of energy your body uses over time in a day.
          </p>

          <p>
            However, the exact calorie target varies from person to person.
            Your body weight, height, age, activity level, daily routine, exrcises, food intake, quality of food,
             and
            changes in energy spends can all affect your results.
          </p>
        </section>

        {/* LIMITATIONS */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Accurate Is a Calorie Deficit Calculator?
          </h2>

          <p className="mb-4">
            Any calorie deficit calculator provides an estimate, not a precise
            measurement of your metabolism or daily energy expenditure. it just give you something to start your journey with.

          </p>

          <p className="mb-4">
            Any two people with the same age, height, weight, and activity level
            can have seperate calorie requirements. Your actual needs can
            also change as your body weight and activity level change. It also depends on the food they eat, how often
            they eat etc.
          </p>

          <p>
            Use the calculator as a starting point and consider your real-world
            weight trend and circumstances when finding out if your
            estimated calorie intake is appropriate.
          </p>
        </section>

        {/* RELATED CALCULATORS */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Related Calculators
          </h2>

          <p className="mb-5">
            These calculators can provide additional information related to
            calories, body measurements, and everyday health calculations.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li>
              <a
                href="/calculator/bmr-calorie-calculator"
                className="block border rounded-lg p-4 text-blue-600 hover:underline"
              >
                BMR & Calorie Calculator
              </a>
            </li>

            <li>
              <a
                href="/calculator/bmi-calculator"
                className="block border rounded-lg p-4 text-blue-600 hover:underline"
              >
                BMI Calculator
              </a>
            </li>

            <li>
              <a
                href="/calculator/ideal-weight-calculator"
                className="block border rounded-lg p-4 text-blue-600 hover:underline"
              >
                Ideal Weight Calculator
              </a>
            </li>

            <li>
              <a
                href="/calculator/age-calculator"
                className="block border rounded-lg p-4 text-blue-600 hover:underline"
              >
                Age Calculator
              </a>
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-7">

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What is a calorie deficit?
              </h3>
              <p>
                A calorie deficit occurs when you consume fewer calories than
                your body uses over a period of time. A sustained deficit can
                contribute to weight loss.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do I calculate my calorie deficit?
              </h3>
              <p>
                First estimate your daily maintenance calories. Your calorie
                deficit is the difference between your maintenance calorie
                requirement and the amount of calories you consume.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Does activity level affect calorie needs?
              </h3>
              <p>
                Yes. Physical activity is one of the factors that affects your
                daily energy requirements. This calculator uses different
                activity multipliers when estimating maintenance calories.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I use this calculator for maintenance?
              </h3>
              <p>
                Yes. The maintenance calorie result provides an estimate of the
                daily calories required to maintain your current weight under
                the selected activity level.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can a calorie deficit be too large?
              </h3>
              <p>
                Yes. Very large calorie deficits can make it difficult to meet
                nutritional needs and may be difficult to maintain. A
                personalized approach is preferable to extreme restriction.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is the calorie deficit calculator accurate?
              </h3>
              <p>
                It provides an estimate based on the information entered and
                the formula used. Individual calorie requirements can differ,
                so the result should be treated as an estimate rather than an
                exact measurement.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is this calorie deficit calculator free?
              </h3>
              <p>
                Yes. The DailyCalcu calorie deficit calculator is free to use
                and does not require registration or a download.
              </p>
            </div>

          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="mt-12 border-t pt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Important Note
          </h2>

          <p className="text-sm text-gray-600">
            The results provided by this calculator are estimates for general
            informational purposes. They are not medical advice and should not
            be used to diagnose or treat a health condition. Individual calorie
            requirements can vary considerably.
          </p>
        </section>

      </article>
    </>
  );
}