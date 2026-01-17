import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Script from "next/script";


export const metadata: Metadata = {

  metadataBase: new URL("https://dailycalcu.com"),
  alternates: {
    canonical: "/",
  },
  title: "DailyCalcu – Simple Daily Life Calculators",
  description:
    "DailyCalcu offers free, fast, and accurate online calculators for salary, finance, health, and everyday use.",
};

<head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3286751127524336"
     crossOrigin="anonymous"></script>
      </head>

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        
        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="min-h-screen px-4 sm:px-6">
  {children}
</main>


        {/* FOOTER */}
        <footer className="border-t bg-gray-50 mt-20">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              {/* Left */}
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-600">
                  © {new Date().getFullYear()}{" "}
                  <span className="font-medium">DailyCalcu</span>. All rights reserved.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Free online calculators for everyday use.
                </p>
              </div>

              {/* Right */}
              <nav className="flex justify-center md:justify-end gap-6 text-sm">
                <a href="/calculator" className="text-gray-600 hover:text-blue-600">
                  Calculators
                </a>
                <a href="/about" className="text-gray-600 hover:text-blue-600">
                  About
                </a>
                <a href="/privacy-policy" className="text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </a>
                <a href="/disclaimer" className="text-gray-600 hover:text-blue-600">
                  Disclaimer
                </a>
              </nav>

            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
