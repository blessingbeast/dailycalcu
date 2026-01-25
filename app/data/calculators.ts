export type Calculator = {
  slug: string;
  title: string;
  description: string;
  category: "health" | "finance" | "daily";
};

export const calculators: Calculator[] = [
  {
    slug: "bmi-calculator",
    title: "BMI Calculator",
    description: "Check your Body Mass Index and health category.",
    category: "health",
  },
  {
    slug: "bmr-calorie-calculator",
    title: "BMR & Calorie Calculator",
    description: "Calculate your daily calorie needs accurately.",
    category: "health",
  },
  {
    slug: "age-calculator",
    title: "Age Calculator",
    description: "Calculate exact age in years, months, and days.",
    category: "daily",
  },
  {
    slug: "sip-calculator",
    title: "SIP Calculator",
    description: "Estimate returns on SIP investments.",
    category: "finance",
  },
  {
    slug: "compound-interest-calculator",
    title: "Compound Interest Calculator",
    description: "Calculate compound interest growth.",
    category: "finance",
  },
  {
    slug: "percentage-calculator",
    title: "Percentage Calculator",
    description: "Quickly calculate percentages.",
    category: "daily",
  },
  {
    slug: "simple-interest-calculator",
    title: "Simple Interest Calculator",
    description: "Calculate simple interest easily.",
    category: "finance",
  },
];
