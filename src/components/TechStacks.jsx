import {
  RiNextjsFill,
  RiReactjsLine,
  RiTailwindCssFill,
  RiGithubFill,
} from "react-icons/ri";

import {
  SiMongodb,
  SiExpress,
  SiTypescript,
} from "react-icons/si";

export default function TechStacks() {
  const technologies = [
    {
      name: "Next.js",
      icon: <RiNextjsFill className="h-16 w-16" />,
    },
    {
      name: "React",
      icon: <RiReactjsLine className="h-16 w-16 text-sky-500" />,
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill className="h-16 w-16 text-cyan-400" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="h-16 w-16 text-green-500" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="h-16 w-16" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="h-16 w-16 text-blue-500" />,
    },
    {
      name: "GitHub",
      icon: <RiGithubFill className="h-16 w-16" />,
    },
  ];

  return (
    <section
      id="tech"
      className="relative overflow-hidden bg-white px-6 py-24 dark:bg-black w-11/12 mx-auto"
    >
      {/* Background Blur */}
      <div className="absolute left-[-100px] top-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"></div>

      <div className="absolute right-[-100px] bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-violet-500">
            Tech Stack
          </p>

          <h2 className="text-4xl font-black text-black dark:text-white sm:text-5xl">
            Technologies I Use
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Modern technologies and tools I use to build fast, scalable, and
            beautiful web applications.
          </p>
        </div>

        {/* Logos */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group flex h-32 items-center justify-center rounded-3xl border border-gray-200 bg-white/70 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 dark:border-white/10 dark:bg-white/5"
            >
              <div className="transition-transform duration-300 group-hover:scale-110 text-black dark:text-white">
                {tech.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}