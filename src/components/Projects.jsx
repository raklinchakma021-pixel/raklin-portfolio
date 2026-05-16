"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight,  ExternalLink } from "lucide-react";
import { useRef } from "react";

export default function ProjectsSection() {
  const scrollRef = useRef(null);

  const projects = [
    {
      title: "Digital Tools Platform",
      description:
        "Modern digitools platform with vanilla js, html and css.",
      image: "/digitools.png",
      github: "https://github.com/raklinchakma021-pixel/digitools-platform-project",
      live: "https://digitoolsplatformbyraklin.netlify.app/",
    },
    {
      title: "Keen Keeper App",
      description:
        "An app with React and Tailwind CSS.",
      image: "/keenkeeper.png",
      github: "https://github.com/raklinchakma021-pixel/B13-A7-keen-keeper",
      live: "https://keenkeeperbyraklin.netlify.app/",
    },
    {
      title: "Github Issues Tracker",
      description:
        "VanillaJs, Html and CSS project.",
      image: "/issuetracker.png",
      github: "https://github.com/raklinchakma021-pixel/B13-A5-Github-Issue-Tracker",
      live: "https://github-issues-tracker-by-raklin.netlify.app/",
    },
    {
      title: "Skillsphere App",
      description:
        "Next.js app with moder functionality .",
      image: "/skillsphereproject.png",
      github: "https://github.com/raklinchakma021-pixel/skillsphere",
      live: "https://skillsphere-kohl.vercel.app/",
    }
  
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 400;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden w-11/12 mx-auto bg-gray-50 px-6 py-24 dark:bg-black"
    >
      {/* Background Blur */}
      <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"></div>
      <div className="absolute right-[-120px] bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-violet-500">
              My Projects
            </p>

            <h2 className="text-4xl font-black text-black dark:text-white sm:text-5xl">
              Featured Works
            </h2>
          </div>

          {/* Slider Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll("left")}
              className="rounded-full border border-gray-300 bg-white p-3 shadow-lg transition hover:border-violet-500 dark:border-white/10 dark:bg-white/5"
            >
              <ChevronLeft className="h-5 w-5 text-black dark:text-white" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="rounded-full border border-gray-300 bg-white p-3 shadow-lg transition hover:border-violet-500 dark:border-white/10 dark:bg-white/5"
            >
              <ChevronRight className="h-5 w-5 text-black dark:text-white" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="mt-16 flex gap-8 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group min-w-[320px] max-w-[320px] overflow-hidden rounded-3xl border border-gray-200 bg-white/70 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 dark:border-white/10 dark:bg-white/5 md:min-w-[380px]"
            >
              
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="h-[230px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="mt-6 flex items-center gap-4">
                  
                  

                  <Link
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-700"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Github
                  </Link>

                  <Link
                    href={project.live}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-700"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}