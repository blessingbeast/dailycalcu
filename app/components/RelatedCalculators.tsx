import Link from "next/link";

type CalculatorItem = {
  title: string;
  description: string;
  href: string;
  color: "blue" | "green" | "purple" | "orange" | "pink" | "indigo";
};

const colorMap = {
  blue: {
    pill: "bg-blue-100 text-blue-700",
    border: "border-blue-200",
  },
  green: {
    pill: "bg-green-100 text-green-700",
    border: "border-green-200",
  },
  purple: {
    pill: "bg-purple-100 text-purple-700",
    border: "border-purple-200",
  },
  orange: {
    pill: "bg-orange-100 text-orange-700",
    border: "border-orange-200",
  },
  pink: {
    pill: "bg-pink-100 text-pink-700",
    border: "border-pink-200",
  },
  indigo: {
    pill: "bg-indigo-100 text-indigo-700",
    border: "border-indigo-200",
  },
};

export default function RelatedCalculators({
  items,
}: {
  items: CalculatorItem[];
}) {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Related Calculators
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => {
          const colors = colorMap[item.color];

          return (
            <Link
              key={index}
              href={item.href}
              className={`block rounded-xl border ${colors.border} p-6 hover:shadow-lg transition`}
            >
              <span
                className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-4 ${colors.pill}`}
              >
                Calculator
              </span>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
