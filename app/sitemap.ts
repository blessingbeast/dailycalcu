import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dailycalcu.com";

  return [
    // ======================
    // CORE PAGES
    // ======================
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
    },

    // ======================
    // CALCULATOR DIRECTORY
    // ======================
    {
      url: `${baseUrl}/calculator`,
      lastModified: new Date(),
    },

    // ======================
    // GENERAL CALCULATORS
    // ======================
    {
      url: `${baseUrl}/calculator/salary-increment-calculator`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculator/percentage-calculator`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculator/date-difference-calculator`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculator/age-calculator`,
      lastModified: new Date(),
    },

    // ======================
    // FINANCE CALCULATORS
    // ======================
    {
      url: `${baseUrl}/calculator/simple-interest-calculator`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculator/compound-interest-calculator`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculator/sip-calculator`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculator/ppf-calculator`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculator/gst-calculator`,
      lastModified: new Date(),
    },

    // ======================
    // HEALTH CALCULATORS
    // ======================
    {
      url: `${baseUrl}/calculator/bmi-calculator`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculator/bmr-calorie-calculator`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculator/calorie-deficit-calculator`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculator/ideal-weight-calculator`,
      lastModified: new Date(),
    },

    // ======================
    // INSIGHTS / BLOG
    // ======================
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/how-did-dolly-parton-die`,
      lastModified: new Date(),
    },
  ];
}