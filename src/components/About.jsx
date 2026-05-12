import { Code2, Globe, MonitorSmartphone, Sparkles } from "lucide-react";

export default function AboutMe() {
  const skills = [
    {
      icon: <Code2 className="h-7 w-7" />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive web applications using React, Next.js, and Tailwind CSS.",
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Web Development",
      description:
        "Creating modern websites with clean code, fast performance, and scalable structure.",
    },
    {
      icon: <MonitorSmartphone className="h-7 w-7" />,
      title: "Responsive Design",
      description:
        "Designing websites that look beautiful across desktop, tablet, and mobile devices.",
    },
    {
      icon: <Sparkles className="h-7 w-7" />,
      title: "Creative UI Design",
      description:
        "Crafting modern Hero UI inspired interfaces with smooth user experiences.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gray-50 px-6 py-24 dark:bg-black w-11/12 mx-auto"
    >
      {/* Background Blur */}
      <div className="absolute left-[-120px] top-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"></div>

      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-violet-500">
            About Me
          </p>

          <h2 className="text-4xl font-black text-black dark:text-white sm:text-5xl">
            Passionate About Building
            <span className="block bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Modern Web Experiences
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
          
          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-bold leading-tight text-black dark:text-white">
              I'm Raklin — a Frontend Developer & Web Designer
            </h3>

            <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
              I love creating beautiful, modern, and user-friendly websites that
              provide great user experiences. My focus is on responsive design,
              smooth interactions, and clean frontend architecture.
            </p>

            <p className="mt-5 text-base leading-relaxed text-gray-600 dark:text-gray-400">
              I work mainly with Next.js, React, Tailwind CSS, and modern UI
              libraries to develop fast and scalable applications. I enjoy
              turning ideas into visually stunning digital products.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3">
              
              <div className="rounded-2xl border border-white/10 bg-white/70 p-5 shadow-lg backdrop-blur-xl dark:bg-white/5">
                <h4 className="text-3xl font-black text-violet-500">2+</h4>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Years Experience
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/70 p-5 shadow-lg backdrop-blur-xl dark:bg-white/5">
                <h4 className="text-3xl font-black text-violet-500">20+</h4>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Projects Completed
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/70 p-5 shadow-lg backdrop-blur-xl dark:bg-white/5">
                <h4 className="text-3xl font-black text-violet-500">100%</h4>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Responsive Design
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/70 p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 dark:bg-white/5"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-violet-500/10 p-4 text-violet-500">
                  {skill.icon}
                </div>

                <h3 className="text-xl font-bold text-black dark:text-white">
                  {skill.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}