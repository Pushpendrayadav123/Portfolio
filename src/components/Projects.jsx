import {
  ArrowRight,
  Code2,
  ExternalLink,
  Layers3,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Mistvale Tea Store Point",
    type: "E-commerce storefront",
    summary:
      "A responsive storefront prototype for Mistvale Tea Co., featuring product browsing, search, category filters, sorting, and quick-view product details.",
    impact:
      "Demonstrates a complete front-end shopping flow with a local-storage cart, coupon entry, and simulated delivery estimates.",
    stack: ["HTML", "CSS", "JavaScript", "Local Storage"],
    liveUrl: "https://mistvale-tea-storefront.vercel.app/",
    codeUrl: "https://github.com/Pushpendrayadav123/mistvale-tea-storefront",
  },
  {
    title: "FastAPI Employee CRUD",
    type: "Full-stack application",
    summary:
      "An employee management application with a FastAPI backend, a React frontend, and a MySQL database.",
    impact:
      "Demonstrates full-stack CRUD workflows and containerized deployment with Docker Compose.",
    stack: ["Python", "FastAPI", "React", "MySQL", "Docker"],
    liveUrl: "#",
    codeUrl: "https://github.com/Pushpendrayadav123/fastapi-crud",
  },
  {
    title: "Portfolio Website",
    type: "Featured project",
    summary:
      "A modern personal portfolio built to showcase my work, skills, and experience with a clean, responsive interface and clear calls to action.",
    impact:
      "Designed to communicate my profile effectively for recruiters, clients, and collaborators.",
    stack: ["React", "Vite", "Tailwind CSS", "React Router"],
    liveUrl: "https://portfolio-pushpendra.vercel.app/",
    codeUrl: "https://github.com/Pushpendrayadav123/Portfolio",
  },
  {
    title: "Secure Auth API",
    type: "Backend project",
    summary:
      "A FastAPI-based authentication service with endpoints for registration, login, and protected routes, built with a secure and maintainable structure.",
    impact:
      "Focuses on clean API design, validation, and user flow protection for real-world applications.",
    stack: ["Python", "FastAPI", "JWT", "SQLite"],
    liveUrl: "#",
    codeUrl: "https://github.com/Pushpendrayadav123",
  },
  {
    title: "Task Management App",
    type: "Productivity app",
    summary:
      "A task tracking application that helps users organize work, manage deadlines, and stay focused with a simple dashboard experience.",
    impact:
      "Built to demonstrate practical UX thinking for productivity and user-centered workflows.",
    stack: ["JavaScript", "React", "CSS", "Local Storage"],
    liveUrl: "#",
    codeUrl: "https://github.com/Pushpendrayadav123",
  },
];

function Projects() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase">
            Selected work
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Projects that reflect my focus on useful, polished experiences.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            I enjoy building web products that are practical, responsive, and
            easy to use. Each project below reflects a different part of my
            development approach—from interface design to backend structure and
            product thinking.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-black/10 transition duration-200 hover:-translate-y-1 hover:border-blue-500/60 sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-medium tracking-[0.12em] text-blue-200 uppercase">
                  <Layers3 size={14} />
                  {project.type}
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-950/70 p-2 text-slate-300">
                  <Sparkles size={16} />
                </span>
              </div>

              <div className="mt-6 flex-1">
                <h2 className="text-2xl font-semibold text-white">
                  {project.title}
                </h2>
                <p className="mt-4 leading-7 text-slate-300">
                  {project.summary}
                </p>
                <p className="mt-4 rounded-xl border border-slate-800 bg-slate-950/50 p-3 text-sm leading-6 text-slate-400">
                  {project.impact}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                {project.liveUrl !== "#" ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    Live demo <ExternalLink size={16} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2.5 text-sm font-medium text-slate-400">
                    Demo coming soon
                  </span>
                )}

                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
                >
                  <Code2 size={16} /> Source code
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-blue-300 uppercase">
                Let&apos;s build
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Need a product, landing page, or custom web experience?
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Start a project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
