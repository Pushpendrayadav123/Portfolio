import { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

const contactEmail = "pushpendrajau8318@gmail.com";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Portfolio enquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-28 left-1/3 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something great together.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Have a project, opportunity, or question? Send me a message and
            I&apos;ll get back to you as soon as I can.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="space-y-4">
            <a
              href={`mailto:${contactEmail}`}
              className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-blue-500/60"
            >
              <span className="rounded-lg bg-blue-500/10 p-3 text-blue-400">
                <Mail size={21} />
              </span>
              <span>
                <span className="block text-sm text-slate-400">Email me</span>
                <span className="mt-1 block font-medium text-white">
                  {contactEmail}
                </span>
              </span>
            </a>
            <div className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <span className="rounded-lg bg-cyan-500/10 p-3 text-cyan-300">
                <MapPin size={21} />
              </span>
              <span>
                <span className="block text-sm text-slate-400">Location</span>
                <span className="mt-1 block font-medium text-white">
                  Available for remote work
                </span>
              </span>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <p className="text-sm text-slate-400">Find me online</p>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/Pushpendrayadav123"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="rounded-lg border border-slate-700 p-3 text-slate-300 transition hover:border-blue-400 hover:text-blue-400"
                >
                  <Code2 size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/pushpendra-yadav-780467244/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="rounded-lg border border-slate-700 p-3 text-slate-300 transition hover:border-blue-400 hover:text-blue-400"
                >
                  <BriefcaseBusiness size={20} />
                </a>
              </div>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20 sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-200">
                Your name
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  placeholder="Jane Smith"
                  className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
                />
              </label>
              <label className="block text-sm font-medium text-slate-200">
                Email address
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="jane@example.com"
                  className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
                />
              </label>
            </div>
            <label className="mt-6 block text-sm font-medium text-slate-200">
              Your message
              <textarea
                required
                name="message"
                value={form.message}
                onChange={updateField}
                rows="6"
                placeholder="Tell me a little about your project..."
                className="mt-2 w-full resize-y rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Send message <Send size={18} />
            </button>
            <p className="mt-4 flex items-center gap-1 text-sm text-slate-500">
              This opens your default email app to send the message{" "}
              <ArrowUpRight size={15} />{" "}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
