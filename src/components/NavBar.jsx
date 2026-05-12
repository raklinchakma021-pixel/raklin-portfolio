"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur-xl dark:bg-black/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-black dark:text-white"
        >
          Raklin<span className="text-violet-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-sm font-medium text-gray-700 transition dark:text-gray-300"
            >
              {link.name}

              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-full border border-gray-300 p-2 transition hover:scale-105 dark:border-gray-700"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-black" />
            )}
          </button>

          {/* Hire Me Button */}
          <Link
            href="#contact"
            className="hidden rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-700 md:block"
          >
            Hire Me
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 md:hidden"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-black dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-black dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-white px-6 py-5 dark:bg-black md:hidden">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-700 transition hover:text-violet-500 dark:text-gray-300"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="#contact"
              className="mt-2 rounded-full bg-violet-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              Hire Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}