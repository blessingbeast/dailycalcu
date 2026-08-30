import type { Metadata } from "next";
import Image from "next/image";

const articleUrl =
  "https://dailycalcu.com/blog/how-did-dolly-parton-die";

export const metadata: Metadata = {
  title: "How Did Dolly Parton Die? Cause of Death and What We Know",
  description:
    "Dolly Parton died at age 80 on August 25, 2026. Learn what has been publicly reported about her cause of death, cancer battle, health, final days, and legacy.",
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: "How Did Dolly Parton Die? Cause of Death and What We Know",
    description:
      "What is known about Dolly Parton's death, her brief cancer battle, health, final days, and legacy.",
    url: articleUrl,
    type: "article",
    publishedTime: "2026-08-30T00:00:00Z",
    modifiedTime: "2026-08-30T00:00:00Z",
    authors: ["DailyCalcu"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Did Dolly Parton Die? Cause of Death and What We Know",
    description:
      "What we know about Dolly Parton's death, cancer battle, health, and legacy.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "How Did Dolly Parton Die? Cause of Death and What We Know",
  description:
    "What is publicly known about Dolly Parton's death, cancer battle, health, final days, and legacy.",
  datePublished: "2026-08-30T00:00:00Z",
  dateModified: "2026-08-30T00:00:00Z",
  author: {
    "@type": "Organization",
    name: "DailyCalcu",
    url: "https://dailycalcu.com",
  },
  publisher: {
    "@type": "Organization",
    name: "DailyCalcu",
    url: "https://dailycalcu.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": articleUrl,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How did Dolly Parton die?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Dolly Parton died on August 25, 2026, at age 80 after a brief battle with cancer, according to statements from her representatives.",
      },
    },
    {
      "@type": "Question",
      name: "What was Dolly Parton's cause of death?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Her representatives said Dolly Parton had been facing a brief battle with cancer. The specific type of cancer has not been publicly disclosed.",
      },
    },
    {
      "@type": "Question",
      name: "How old was Dolly Parton when she died?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Dolly Parton was 80 years old when she died on August 25, 2026.",
      },
    },
    {
      "@type": "Question",
      name: "Where did Dolly Parton die?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Dolly Parton died in Nashville, Tennessee, at Vanderbilt-Ingram Cancer Center.",
      },
    },
    {
      "@type": "Question",
      name: "What type of cancer did Dolly Parton have?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The specific type of cancer Dolly Parton had has not been publicly disclosed.",
      },
    },
  ],
};

export default function DollyPartonArticle() {
  return (
    <>
      {/* Structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="min-h-screen bg-white">
        {/* Article header */}
        <header className="border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-4xl px-5 py-10 sm:px-6 sm:py-14">

            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 text-sm text-gray-500"
            >
              <a
                href="/"
                className="hover:text-blue-600"
              >
                Home
              </a>

              <span className="mx-2">/</span>

              <a
                href="/blog"
                className="hover:text-blue-600"
              >
                Insights
              </a>

              <span className="mx-2">/</span>

              <span className="text-gray-700">
                Dolly Parton
              </span>
            </nav>

            {/* Category */}
            <div className="mb-4">
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                Trending News
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-5xl">
              How Did Dolly Parton Die? Cause of Death and What We Know?
            </h1>

            {/* Introduction */}
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              Dolly Parton died on August 25, 2026, at the age of 80.
              Here is what has been publicly reported about her devastating death,
              about her brief cancer battle, her health, and her final days.
            </p>
            
            <figure className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
  <Image
    src="/images/blog/dolly-parton-hero.jpg"
    alt="Dolly Parton during her career as a country music performer"
    width={1200}
    height={800}
    priority
    className="h-auto w-full object-cover"
  />

  <figcaption className="px-4 py-3 text-sm text-gray-500">
    Dolly Parton during her legendary music career.
    Photo: Alan Light / Wikimedia Commons, CC BY 2.0.
  </figcaption>
</figure>

            {/* Article metadata */}
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
              <span>
                Published August 30, 2026
              </span>

              <span className="hidden sm:inline">•</span>

              <span>
                Updated August 30, 2026
              </span>

              <span className="hidden sm:inline">•</span>

              <span>
                8 min read
              </span>
            </div>
          </div>
        </header>

        {/* Main article */}
        <div className="mx-auto max-w-4xl px-5 py-10 sm:px-6 sm:py-14">

          {/* Quick answer */}
          <section
            aria-labelledby="quick-answer"
            className="mb-12 rounded-2xl border border-blue-200 bg-blue-50 p-6 sm:p-7"
          >
            <h2
              id="quick-answer"
              className="text-xl font-bold text-gray-950"
            >
              Quick answer: How did Dolly Parton die?
            </h2>

            <p className="mt-3 text-base leading-7 text-gray-800">
              Dolly Parton died on August 25, 2026, at age 80 after
              her battle with cancer, according to statements from
              her relatives and collegues. She died in Nashville, Tennessee,
              at Vanderbilt-Ingram Cancer Center surrounded by her family and friends.
            </p>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              The specific type of cancer has not been publicly disclosed.
            </p>
          </section>

          {/* Key facts */}
          <section className="mb-12">
            <h2 className="mb-5 text-2xl font-bold tracking-tight text-gray-950">
              Dolly Parton death: Key facts
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-medium text-gray-500">
                  Date of death
                </p>
                <p className="mt-1 text-lg font-bold text-gray-950">
                  August 25, 2026
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-medium text-gray-500">
                  Age
                </p>
                <p className="mt-1 text-lg font-bold text-gray-950">
                  80 years old
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-medium text-gray-500">
                  Location
                </p>
                <p className="mt-1 text-lg font-bold text-gray-950">
                  Nashville, Tennessee
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-medium text-gray-500">
                  Reported cause
                </p>
                <p className="mt-1 text-lg font-bold text-gray-950">
                  Battle with cancer
                </p>
              </div>

            </div>
          </section>

          {/* Table of contents */}
          <aside className="mb-12 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-950">
              In this article
            </h2>

            <ol className="mt-4 space-y-2 text-gray-700">
              <li>
                <a
                  href="#how-did-dolly-parton-die"
                  className="hover:text-blue-600 hover:underline"
                >
                  How did Dolly Parton die?
                </a>
              </li>

              <li>
                <a
                  href="#when-did-dolly-parton-die"
                  className="hover:text-blue-600 hover:underline"
                >
                  When did Dolly Parton die?
                </a>
              </li>

              <li>
                <a
                  href="#cancer"
                  className="hover:text-blue-600 hover:underline"
                >
                  What cancer did Dolly Parton have?
                </a>
              </li>

              <li>
                <a
                  href="#health"
                  className="hover:text-blue-600 hover:underline"
                >
                  What was known about her health?
                </a>
              </li>

              <li>
                <a
                  href="#legacy"
                  className="hover:text-blue-600 hover:underline"
                >
                  Dolly Parton's legacy
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="hover:text-blue-600 hover:underline"
                >
                  Frequently asked questions
                </a>
              </li>
            </ol>
          </aside>

          {/* Article body */}
          <article className="text-[17px] leading-8 text-gray-700">

            <section
              id="how-did-dolly-parton-die"
              className="scroll-mt-24"
            >
              <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-gray-950">
                How did Dolly Parton die?
              </h2>

              <p className="mb-5">
                Dolly Parton died on August 25, 2026, in Nashville,
                Tennessee, at the age of 80. Her representatives said
                that she had been suffering with cancer.
              </p>

              <p className="mb-5">
                According to the statement released after her death,
                Parton died at Vanderbilt-Ingram Cancer Center
                surrounded by her family and friends.
              </p>

              <p className="mb-5">
                
                She died after ahving a career that lasted nearly six
                decades and made her one of the most recognizable
                figures in country music and popular culture.
              </p>
            </section>

            <section
              id="when-did-dolly-parton-die"
              className="mt-14 scroll-mt-24"
            >
              <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-gray-950">
                When did Dolly Parton die?
              </h2>

              <p className="mb-5">
                Dolly Parton died on Tuesday, August 25, 2026.
                She was 80 years old.
              </p>

              <p className="mb-5">
                Her death was announced by her family after her
                representatives confirmed that she had died in
                Nashville.
              </p>
            </section>

            <section
              id="cancer"
              className="mt-14 scroll-mt-24"
            >
              <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-gray-950">
                What cancer did Dolly Parton have?
              </h2>

              <div className="mb-6 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-5">
                <p className="font-semibold text-gray-900">
                  The specific type of cancer has not been publicly
                  disclosed yet.
                </p>
              </div>

              <p className="mb-5">
                Public statements from Parton's representatives said
                that she had been facing a brief battle with cancer.
                However, no specific cancer type has been publicly
                identified yet from anyone.
              </p>

              <p className="mb-5">
                That means claims circulating online about a particular
                type of cancer should be treated cautiously unless they
                are supported by an official statement from her family,
                representatives, or any other reliable source.
              </p>
            </section>

            <section
              id="health"
              className="mt-14 scroll-mt-24"
            >
              <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-gray-950">
                What was known about Dolly Parton's health?
              </h2>

              <p className="mb-5">
                Parton's health had become a subject of public attention
                before her death. She had reduced or canceled some
                appearances while dealing with health issues.
              </p>

              <p className="mb-5">
                In May 2026, Parton discussed health problems including
                kidney stones and said she was getting some treatments.
                She later canceled her planned Las Vegas performances
                because she was not healthy enough to return to the stage.
              </p>

              <p className="mb-5">
                Following her death, her sister Stella Parton also spoke
                publicly about Dolly's cancer battle and said that Dolly
                had considered experimental treatments if there were
                no other options.
              </p>
            </section>

            <section className="mt-14">
              <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-gray-950">
                Why is "How did Dolly Parton die?" trending?
              </h2>

              <p className="mb-5">
                Dolly Parton was one of the world's most recognizable
                entertainers and performers on and off stage. She remained active in music, business,
                philanthropy, and other projects for decades.
              </p>

              <p className="mb-5">
                Because of her enormous global fan base and continuing
                public presence, news of her death generated widespread
                interest almost immediately.
              </p>

              <p className="mb-5">
                Many people searching for information about her death
                are looking for straightforward answers about her age,
                cause of death, health, and the circumstances surrounding
                her final days.
              </p>
            </section>

            <section
              id="legacy"
              className="mt-14 scroll-mt-24"
            >
              <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-gray-950">
                Dolly Parton's legacy
              </h2>

              <p className="mb-5">
                Dolly Parton's influence reached far beyond country
                music. She became a singer, songwriter, actress,
                entrepreneur, author, and philanthropist whose career
                reached audiences across generations and across countries.
              </p>

              <p className="mb-5">
                She wrote and performed some of the most recognizable
                songs in modern music, including "Jolene," "9 to 5,"
                and "I Will Always Love You."
              </p>

              <p className="mb-5">
                Her philanthropic work was another major part of her
                legacy. Her Imagination Library became a major
                children's literacy program, while her other charitable
                efforts supported education, healthcare, and communities
                in need.
              </p>

              <p className="mb-5">
                Parton's death marks the end of one of the most
                influential careers in country music, but her music,
                businesses, charitable work, and cultural influence
                are expected to continue for generations.
              </p>
            </section>

            {/* FAQ */}
            <section
              id="faq"
              className="mt-16 scroll-mt-24"
            >
              <h2 className="mb-7 text-3xl font-bold leading-tight tracking-tight text-gray-950">
                Frequently asked questions
              </h2>

              <div className="space-y-7">

                <div>
                  <h3 className="text-xl font-bold text-gray-950">
                    How did Dolly Parton die?
                  </h3>

                  <p className="mt-2">
                    Dolly Parton died on August 25, 2026, at age 80
                    after a brief battle with cancer, according to
                    statements from her representatives.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-950">
                    What was Dolly Parton's cause of death?
                  </h3>

                  <p className="mt-2">
                    Her representatives said she had been facing a
                    brief battle with cancer. The specific type of
                    cancer has not been publicly disclosed.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-950">
                    How old was Dolly Parton when she died?
                  </h3>

                  <p className="mt-2">
                    Dolly Parton was 80 years old when she died on
                    August 25, 2026.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-950">
                    Where did Dolly Parton die?
                  </h3>

                  <p className="mt-2">
                    Dolly Parton died in Nashville, Tennessee, at
                    Vanderbilt-Ingram Cancer Center.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-950">
                    What type of cancer did Dolly Parton have?
                  </h3>

                  <p className="mt-2">
                    The specific type of cancer has not been publicly
                    disclosed.
                  </p>
                </div>

              </div>
            </section>

            {/* Editorial note */}
            <section className="mt-14 rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-lg font-bold text-gray-950">
                Editorial note
              </h2>

              <p className="mt-3 text-base leading-7 text-gray-600">
                This article is based on publicly available reporting
                and statements from Dolly Parton's representatives,
                family members, and established news organizations.
                Medical details that have not been officially confirmed
                are not presented as established facts.
              </p>
            </section>

            {/* Sources */}
            <section className="mt-12 border-t border-gray-200 pt-8">
              <h2 className="text-xl font-bold text-gray-950">
                Sources
              </h2>

              <ul className="mt-4 space-y-2 text-base">
                <li>
                  Reuters — reporting on Dolly Parton's death
                </li>

                <li>
                  Associated Press — reporting on her death and career
                </li>

                <li>
                  CBS News — reporting on her cancer battle and death
                </li>
              </ul>
            </section>

          </article>

          {/* Back to Insights */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <a
              href="/blog"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              ← Back to DailyCalcu Insights
            </a>
          </div>
        </div>
      </main>
    </>
  );
}