export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          DailyCalcu Insights
        </h1>

        <p className="mt-3 text-lg text-gray-600">
          Trending news, useful explanations, and interesting facts.
        </p>
      </header>

      <div className="grid gap-8">
        <article className="border rounded-xl p-6 hover:shadow-md transition">
          <p className="text-sm text-gray-500 mb-3">
            August 30, 2026 · Trending
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            How Did Dolly Parton Die? What We Know About Her Death
          </h2>

          <p className="mt-3 text-gray-600 leading-relaxed">
            Dolly Parton died on August 25, 2026, at the age of 80.
            Here is what has been publicly reported about her death,
            health, final days, and remarkable legacy.
          </p>

          <a
            href="/blog/how-did-dolly-parton-die"
            className="inline-block mt-5 text-blue-600 font-semibold hover:underline"
          >
            Read article →
          </a>
        </article>
      </div>
    </main>
  );
}