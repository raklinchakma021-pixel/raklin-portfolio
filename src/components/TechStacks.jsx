import Image from "next/image";

export default function TechStacks() {
  const technologies = [
    {
      name: "Next.js",
      logo: "https://cdn.simpleicons.org/nextdotjs",
    },
    {
      name: "React",
      logo: "https://cdn.simpleicons.org/react",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.simpleicons.org/tailwindcss",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.simpleicons.org/mongodb",
    },
    {
      name: "Express.js",
      logo: "https://cdn.simpleicons.org/express",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.simpleicons.org/typescript",
    },
    {
      name: "GitHub",
      logo: "https://cdn.simpleicons.org/github",
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
              <Image
                src={tech.logo}
                alt={tech.name}
                width={70}
                height={70}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}