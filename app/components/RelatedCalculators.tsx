    import { calculators } from "@/app/data/calculators";

interface Props {
  currentSlug: string;
  limit?: number;
}

export default function RelatedCalculators({
  currentSlug,
  limit = 6,
}: Props) {
  const related = calculators
    .filter((c) => c.slug !== currentSlug)
    .slice(0, limit);

  return (
    <section className="max-w-6xl mx-auto mt-20 px-4">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Related Calculators
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {related.map((calc) => (
          <a
            key={calc.slug}
            href={`/calculator/${calc.slug}`}
            className="group block border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition"
          >
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 bg-blue-100 text-blue-700">
              Calculator
            </span>

            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
              {calc.title}
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              {calc.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
