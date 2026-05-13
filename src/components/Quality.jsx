import { GraduationCap, Briefcase, CalendarDays } from "lucide-react";

export default function QualificationSection() {
  const qualifications = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Bachelor of Business Administration (BBA)",
      subtitle: "Graduate",
      year: "Completed",
      description:
        "Completed BBA degree with strong knowledge in business, management, communication, and problem-solving skills.",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Frontend Web Developer",
      subtitle: "Self-Learned & Project Based",
      year: "2023 - Present",
      description:
        "Developing modern and responsive web applications using React, Next.js, Tailwind CSS, TypeScript, and MongoDB.",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Web Designer",
      subtitle: "Creative UI/UX Designer",
      year: "2023 - Present",
      description:
        "Designing beautiful, user-friendly, and interactive web interfaces with modern Hero UI inspired layouts.",
    },
  ];

  return (
    <section
      id="qualification"
      className="relative overflow-hidden w-11/12 mx-auto bg-white px-6 py-24 dark:bg-black"
    >
      {/* Background Blur */}
      <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"></div>

      <div className="mx-auto max-w-6xl">
        
        {/* Heading */}
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-violet-500">
            Qualification
          </p>

          <h2 className="text-4xl font-black text-black dark:text-white sm:text-5xl">
            Education & Experience
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
            My educational background and professional journey as a frontend
            developer and web designer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          
          {/* Center Line */}
          <div className="absolute left-1/2 hidden h-full w-[2px] -translate-x-1/2 bg-violet-500/20 md:block"></div>

          <div className="space-y-10">
            {qualifications.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Card */}
                <div className="w-full md:w-[48%]">
                  <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/70 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 dark:border-white/10 dark:bg-white/5">
                    
                    {/* Glow */}
                    <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20"></div>

                    {/* Icon */}
                    <div className="mb-5 inline-flex rounded-2xl bg-violet-500/10 p-4 text-violet-500">
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-black dark:text-white">
                      {item.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-2 text-sm font-medium text-violet-500">
                      {item.subtitle}
                    </p>

                    {/* Year */}
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 dark:bg-white/10 dark:text-gray-300">
                      <CalendarDays className="h-4 w-4" />
                      {item.year}
                    </div>

                    {/* Description */}
                    <p className="mt-5 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 top-10 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white bg-violet-500 dark:border-black md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}