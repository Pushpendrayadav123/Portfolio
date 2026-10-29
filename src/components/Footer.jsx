import { Code, Globe, Heart, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Skills", to: "/skills" },
  { name: "Contact", to: "/contact" },
];

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <Link
              to="/"
              className="text-2xl font-bold tracking-wider text-blue-500"
            >
              Portfolio<span className="text-white">.</span>
            </Link>
            <p className="mt-4 max-w-sm leading-7 text-slate-400">
              Building clean, useful, and memorable experiences for the web.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/Pushpendrayadav123"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="rounded-lg border border-slate-700 p-2.5 text-slate-300 transition hover:border-blue-400 hover:bg-slate-900 hover:text-blue-400"
              >
                <Code size={19} />
              </a>
              <a
                href="https://www.linkedin.com/in/pushpendra-yadav-780467244"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-lg border border-slate-700 p-2.5 text-slate-300 transition hover:border-blue-400 hover:bg-slate-900 hover:text-blue-400"
              >
                <Globe size={19} />
              </a>
              <a
                href="pushpendrajau8318@gmail.com"
                aria-label="Send an email"
                className="rounded-lg border border-slate-700 p-2.5 text-slate-300 transition hover:border-blue-400 hover:bg-slate-900 hover:text-blue-400"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wider text-white uppercase">
              Explore
            </h2>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.to} className="transition hover:text-blue-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wider text-white uppercase">
              Let’s connect
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              Have a project in mind? I’d love to hear about it.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Start a conversation →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Pushpendra Yadav. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Made with <Heart size={14} className="fill-red-400 text-red-400" />{" "}
            and React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
