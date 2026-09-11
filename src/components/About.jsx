import {
  ArrowRight,
  Code2,
  GraduationCap,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const strengths = [
  {
    icon: Code2,
    title: "Clean code",
    text: "I write organized, reusable code that is easy to understand and maintain.",
  },
  {
    icon: Lightbulb,
    title: "Thoughtful solutions",
    text: "I enjoy turning a problem into a simple, practical experience for people.",
  },
  {
    icon: Sparkles,
    title: "Attention to detail",
    text: "From spacing to accessibility, I care about the details that improve a product.",
  },
];

const tools = [
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git & GitHub",
  "Python",
  "FastApi",
  "Node.Js",
  "Docker",
];

function About() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase">
              About me
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Building modern web experiences with clean, scalable code.
            </h1>
            <p className="mt-6 max-w-md leading-8 text-slate-300">
              I&apos;m Pushpendra Yadav, a developer focused on building
              responsive and user-friendly web applications. I have hands-on
              experience working with React.js, JavaScript, TypeScript, Next.js,
              Python, FastAPI, and REST APIs. I enjoy turning ideas into
              practical products, solving development problems, and continuously
              learning new technologies to become a better developer.
              <span className="mt-5 block rounded-lg border border-blue-400/30 bg-blue-500/10 px-4 py-3 font-semibold text-blue-200">
                6 months of IT internship experience | Open to Frontend &amp;
                Full Stack opportunities
              </span>
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500"
            >
              Work with me <ArrowRight size={18} />
            </Link>
          </div>

          <div className="space-y-10">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-black/10 sm:p-8">
              <div className="flex items-center gap-3 text-blue-400">
                <GraduationCap size={22} />
                <p className="text-sm font-semibold tracking-wider uppercase">
                  My journey
                </p>
              </div>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                My journey in web development began with curiosity about how
                websites work. Today, I focus on building responsive interfaces
                that are fast, accessible, and enjoyable to use.
              </p>
              <p className="mt-4 leading-8 text-slate-400">
                I&apos;m continuously learning, building projects, and improving
                my craft through hands-on work with React and modern front-end
                technologies.
              </p>
            </article>

            <div>
              <p className="mb-5 text-sm font-semibold tracking-wider text-slate-400 uppercase">
                How I work
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {strengths.map(({ icon: Icon, title, text }) => (
                  <article
                    key={title}
                    className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition hover:-translate-y-1 hover:border-blue-500/60"
                  >
                    <Icon size={22} className="text-cyan-300" />
                    <h2 className="mt-4 font-semibold">{title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 sm:p-8">
              <p className="text-sm font-semibold tracking-wider text-blue-300 uppercase">
                Tools I use
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
