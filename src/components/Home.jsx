import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

function Home() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b35_1px,transparent_1px),linear-gradient(to_bottom,#1e293b35_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for new opportunities
            </p>

            <p className="mb-4 text-base font-semibold tracking-[0.2em] text-blue-400 uppercase">
              Hi, I’m Pushpendra Yadav
            </p>
            <h1 className="text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
              I build thoughtful digital
              <span className="block bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                experiences for the web.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              I’m a front-end developer focused on creating fast, accessible,
              and beautiful websites that help ideas stand out.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-950/50 transition hover:bg-blue-500"
              >
                Let’s work together <ArrowRight size={18} />
              </Link>
              <a
                href="pushpendrajau8318@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-blue-400 hover:bg-slate-900"
              >
                <Mail size={18} /> Email me
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-800 pt-7">
              <div>
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-sm text-slate-400">Projects completed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">1</p>
                <p className="text-sm text-slate-400">
                  Years learning & building
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-sm text-slate-400">Commitment to quality</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-linear-to-tr from-blue-600/35 to-cyan-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-900 p-3 shadow-2xl shadow-black/40">
              <img
                src={heroImage}
                alt="Mern Stack developer "
                className="aspect-square w-full rounded-[1.4rem] object-cover"
              />
              {/* <div className="absolute right-6 bottom-6 rounded-xl border border-white/15 bg-slate-950/85 px-4 py-3 shadow-lg backdrop-blur">
                <p className="text-xs text-slate-400">
                  Currently building with
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  React · Tailwind CSS
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <a
        href="#intro"
        aria-label="Scroll to introduction"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm text-slate-400 transition hover:text-white lg:flex"
      >
        Scroll to explore <ArrowDown size={16} />
      </a> */}

      <div id="intro" className="sr-only">
        Portfolio introduction
      </div>
    </section>
  );
}

export default Home;
