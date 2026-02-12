import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dailycalcu.com";

  return [
    /* ======================
       CORE PAGES (Highest Priority)
    ====================== */
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    /* ======================
       STATIC PAGES
    ====================== */
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "yearly",
      priority: 0.4,
    },

    /* ======================
       FINANCE CALCULATORS
    ====================== */
    {
      url: `${baseUrl}/calculator/salary-increment-calculator`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculator/simple-interest-calculator`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculator/compound-interest-calculator`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculator/sip-calculator`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculator/ppf-calculator`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculator/gst-calculator`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    /* ======================
       HEALTH CALCULATORS
    ====================== */
    {
      url: `${baseUrl}/calculator/bmi-calculator`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/calculator/bmr-calorie-calculator`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/calculator/calorie-deficit-calculator`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/calculator/ideal-weight-calculator`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    /* ======================
       UTILITY CALCULATORS
    ====================== */
    {
      url: `${baseUrl}/calculator/percentage-calculator`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/calculator/date-difference-calculator`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/calculator/age-calculator`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
