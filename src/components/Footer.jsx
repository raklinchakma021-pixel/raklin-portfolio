import Link from "next/link";
import { Mail } from "lucide-react";
import { DiGithubFull } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-white px-6 py-10 dark:border-white/10 dark:bg-black">
      
      {/* Background Blur */}
      <div className="absolute left-[-100px] top-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"></div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-black text-black dark:text-white">
            Raklin
            <span className="text-violet-500">.</span>
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Raklin. All rights reserved.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="text-gray-700 transition hover:text-violet-500 dark:text-gray-300"
          >
            Home
          </Link>

          <Link
            href="#about"
            className="text-gray-700 transition hover:text-violet-500 dark:text-gray-300"
          >
            About
          </Link>

          <Link
            href="#projects"
            className="text-gray-700 transition hover:text-violet-500 dark:text-gray-300"
          >
            Projects
          </Link>

          <Link
            href="#contact"
            className="text-gray-700 transition hover:text-violet-500 dark:text-gray-300"
          >
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          
          <Link
            href="https://github.com/your-github"
            target="_blank"
            className="rounded-full border border-gray-300 p-3 text-gray-700 transition hover:border-violet-500 hover:text-violet-500 dark:border-white/10 dark:text-gray-300"
          >
            <DiGithubFull className="h-5 w-5" />
          </Link>

          <Link
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            className="rounded-full border border-gray-300 p-3 text-gray-700 transition hover:border-violet-500 hover:text-violet-500 dark:border-white/10 dark:text-gray-300"
          >
            <FaLinkedin className="h-5 w-5" />
          </Link>

          <Link
            href="mailto:yourgmail@gmail.com"
            className="rounded-full border border-gray-300 p-3 text-gray-700 transition hover:border-violet-500 hover:text-violet-500 dark:border-white/10 dark:text-gray-300"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}