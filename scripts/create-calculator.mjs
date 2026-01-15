import fs from "fs";
import path from "path";

const calculatorName = process.argv[2];

if (!calculatorName) {
  console.error("❌ Please provide a calculator name");
  console.error("Example: npm run create:calculator bmi-calculator");
  process.exit(1);
}

// Convert kebab-case to PascalCase
const toPascalCase = (str) =>
  str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

const pascalName = toPascalCase(calculatorName);

const baseDir = path.join(
  process.cwd(),
  "app",
  "calculator",
  calculatorName
);

if (fs.existsSync(baseDir)) {
  console.error("❌ Calculator already exists");
  process.exit(1);
}

fs.mkdirSync(baseDir, { recursive: true });

// page.tsx
const pageContent = `import { Metadata } from "next";
import ${pascalName}Client from "./${pascalName}Client";

export const metadata: Metadata = {
  title: "${pascalName.replace(
    /Calculator$/,
    ""
  )} Calculator – DailyCalcu",
  description: "Use this free ${pascalName.replace(
    /Calculator$/,
    ""
  ).toLowerCase()} calculator on DailyCalcu.",
};

export default function Page() {
  return <${pascalName}Client />;
}
`;

// Client file
const clientContent = `"use client";

export default function ${pascalName}Client() {
  return (
    <section className="max-w-2xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-3">
          ${pascalName.replace(/Calculator$/, "")} Calculator
        </h1>
        <p className="text-gray-600">
          This calculator helps you calculate ${pascalName
            .replace(/Calculator$/, "")
            .toLowerCase()} easily.
        </p>
      </header>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <p className="text-gray-500 text-center">
          Calculator UI goes here
        </p>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(baseDir, "page.tsx"), pageContent);
fs.writeFileSync(
  path.join(baseDir, `${pascalName}Client.tsx`),
  clientContent
);

console.log(`✅ Calculator "${calculatorName}" created successfully!`);
