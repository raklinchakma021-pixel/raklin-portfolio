import {
  Code2,
  LayoutDashboard,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      icon: <Code2 className="h-10 w-10" />,
      title: "Frontend Development",
      description:
        "Building modern, fast, and scalable web applications using React, Next.js, and TypeScript.",
    },
    {
      icon: <LayoutDashboard className="h-10 w-10" />,
      title: "UI/UX Design",
      description:
        "Designing clean, responsive, and visually attractive interfaces with smooth user experiences.",
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Responsive Design",
      description:
        "Creating fully responsive websites that work beautifully across desktop, tablet, and mobile devices.",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gray-50 px-6 py-24 dark:bg-black w-11/12 mx-auto"
    >
      {/* Background Blur */}
      <div className="absolute left-[-100px] top-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"></div>
      <div className="absolute right-[-100px] bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-violet-500">
            My Skills
          </p>

          <h2 className="text-4xl font-black text-black dark:text-white sm:text-5xl">
            What I Can Do
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
            I specialize in creating modern frontend experiences with clean
            code, responsive layouts, and beautiful user interfaces.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/70 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 dark:border-white/10 dark:bg-white/5"
            >
              {/* Hover Glow */}
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20"></div>

              {/* Icon */}
              <div className="mb-6 inline-flex rounded-2xl bg-violet-500/10 p-4 text-violet-500">
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-black dark:text-white">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                {skill.description}
              </p>

              {/* Learn More */}
              <button className="mt-6 inline-flex items-center text-sm font-semibold text-violet-500 transition hover:gap-3">
                Learn More
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}