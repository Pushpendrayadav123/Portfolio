import { ArrowRight, Braces, Code2, Database, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const skillGroups = [
  {
    icon: Braces,
    title: "Frontend",
    description: "Building responsive, accessible interfaces for the web.",
    skills: ["HTML","CSS","Tailwind CSS","JavaScript", "TypeScript", "React", "Next.js",],
  },
  {
    icon: Database,
    title: "Backend",
    description: "Creating APIs and application logic that support great products.",
    skills: ["Python", "FastAPI", "Node.js", "REST APIs"],
  },
  {
    icon: Wrench,
    title: "Tools & workflow",
    description: "Tools I use to build, collaborate, and ship projects.",
    skills: ["Git", "GitHub", "Docker"],
  },
];

function Skills() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase">
            Skills &amp; technologies
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            The tools I use to bring ideas to life.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            I work across frontend development, backend APIs, and the tools that
            help deliver reliable web applications. I keep learning and
            choosing the right technology for each project.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {skillGroups.map(({ icon: Icon, title, description, skills }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-blue-500/50 sm:p-8"
            >
              <span className="inline-flex rounded-xl border border-blue-400/20 bg-blue-500/10 p-3 text-blue-300">
                <Icon size={23} aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl font-semibold">{title}</h2>
              <p className="mt-3 min-h-12 leading-7 text-slate-400">
                {description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-950/70 px-3.5 py-2 text-sm text-slate-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <Code2
              size={24}
              className="mt-1 shrink-0 text-cyan-300"
              aria-hidden="true"
            />
            <div>
              <h2 className="text-lg font-semibold">Always building, always learning.</h2>
              <p className="mt-2 leading-7 text-slate-400">
                Want to know more about my background or discuss a project?
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500 sm:self-auto"
          >
            Get in touch <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Skills;