"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `transition ${
      pathname === path
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">
              DailyCalcu
            </span>
            <span className="hidden sm:inline text-base text-gray-500">
              Everyday Calculators
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/about" className={linkClass("/about")}>
  About
</Link>


            <Link href="/calculator" className={linkClass("/calculator")}>
              Calculators
            </Link>

            <Link
              href="/calculator/salary-increment-calculator"
              className={linkClass("/calculator/salary-increment-calculator")}
            >
              Salary
            </Link>

            <Link
              href="/calculator/age-calculator"
              className={linkClass("/calculator/age-calculator")}
            >
              Age
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col px-4 py-4 gap-4 text-sm">
            <Link
              href="/"
              className={linkClass("/")}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
  href="/about"
  className={linkClass("/about")}
  onClick={() => setOpen(false)}
>
  About
</Link>


            <Link
              href="/calculator"
              className={linkClass("/calculator")}
              onClick={() => setOpen(false)}
            >
              Calculators
            </Link>

            <Link
              href="/calculator/salary-increment-calculator"
              className={linkClass("/calculator/salary-increment-calculator")}
              onClick={() => setOpen(false)}
            >
              Salary Calculator
            </Link>

            <Link
              href="/calculator/age-calculator"
              className={linkClass("/calculator/age-calculator")}
              onClick={() => setOpen(false)}
            >
              Age Calculator
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
