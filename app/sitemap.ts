import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dailycalcu.com";

  return [
    // Core pages
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: new Date(),
    },

    // Salary & General
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

    // Finance
    
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

    // Health
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

    // Utility
    {
      url: `${baseUrl}/calculator/age-calculator`,
      lastModified: new Date(),
    },
  ];
}
