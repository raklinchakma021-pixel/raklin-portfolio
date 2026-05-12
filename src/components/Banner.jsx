"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  const roles = [
    "Web Developer",
    "Web Designer",
    "Frontend Developer",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  // Change text every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-6 pt-28 pb-16 dark:bg-black w-11/12 mx-auto">
      
      {/* Background Blur */}
      <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"></div>
      <div className="absolute right-[-100px] bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        
        {/* Left Content */}
        <div className="text-center md:text-left md:pl-6 ">
          
          {/* Small Badge */}
          <div className="mb-5 inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-600 dark:text-violet-400">
            ✨ Available For Freelance Work
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-black leading-tight text-black dark:text-white sm:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Raklin
            </span>
          </h1>

          {/* Animated Role */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-2xl font-bold text-gray-700 dark:text-gray-300 md:justify-start sm:text-3xl">
            <span>I'm a</span>

            <span className="relative h-[40px] overflow-hidden">
              <span
                key={currentRole}
                className="block animate-slideUp bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent"
              >
                {roles[currentRole]}
              </span>
            </span>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
            I create modern, responsive, and user-friendly websites with
            beautiful UI/UX experiences using Next.js, React, and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-full bg-violet-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-violet-700"
            >
              Hire Me
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#projects"
              className="rounded-full border border-gray-300 px-7 py-3 text-sm font-semibold text-black transition hover:border-violet-500 hover:text-violet-500 dark:border-gray-700 dark:text-white"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          
          {/* Glow */}
          <div className="absolute h-[320px] w-[320px] rounded-full bg-gradient-to-r from-violet-500/30 to-cyan-500/30 blur-3xl"></div>

          {/* Image Card */}
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-xl dark:bg-white/5">
            <Image
              src="/raklin.png"
              alt="Raklin"
              width={450}
              height={450}
              priority
              className="rounded-[24px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Animation Style */}
      <style jsx>{`
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          20% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-100%);
          }
        }

        .animate-slideUp {
          animation: slideUp 2s ease-in-out;
        }
      `}</style>
    </section>
  );
}