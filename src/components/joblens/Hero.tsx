import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Chrome, ArrowRight, Bookmark, Share2 } from "lucide-react";
import { ExtensionPanel } from "./ExtensionPanel";

const roles = [
  "Software Engineer at Stripe",
  "Product Manager at Figma",
  "Designer at Linear",
  "Data Scientist at Airbnb",
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative pt-20 md:pt-24 pb-16 md:pb-20 overflow-x-clip">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-white to-white" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute top-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-200/20 blur-3xl" />
      </div>

      {/* Side-by-side from tablet up; visual sits high toward the navbar */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-[1.05fr_1fr] gap-8 md:gap-6 lg:gap-8 items-start">
        <div className="md:pt-6 lg:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Free Chrome extension · v1.0
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05]"
          >
            Joblens,{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              built to improve how you apply to jobs.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-5 text-lg text-slate-600 max-w-xl leading-relaxed"
          >
            Scan any role on LinkedIn, Greenhouse, and more. Get fit scores, talking points, and
            outreach drafts, personalized to your resume.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3"
          >
            <a
              href="https://chromewebstore.google.com/detail/joblens/pjloihfekgljkeebmkkkefieadecpagm"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white font-medium px-5 py-3 shadow-lift transition-all hover:scale-[1.02] animate-soft-pulse"
            >
              <Chrome className="h-5 w-5" />
              Add to Chrome — It's Free
            </a>
            {/* <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white hover:border-slate-300 text-slate-900 font-medium px-5 py-3 transition-colors"
            >
              See how it works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-sm text-slate-500 flex items-center gap-2"
          >
            <span>Free · No account required · Works instantly</span>
          </motion.div>
        </div>

        {/* Right: extension high (|), browser lower (-) — inverted sideways T */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative pt-8 sm:pt-10 md:pt-10 lg:pt-12 xl:pt-14 md:min-h-[360px] lg:min-h-[380px]"
        >
          {/* Floating extension panel — vertical stem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto max-w-[280px] sm:absolute sm:right-0 sm:top-6 sm:mx-0 sm:w-[210px] md:top-8 md:w-[220px] lg:top-10 lg:w-[240px] xl:top-12 xl:w-[255px] sm:animate-float-panel"
          >
            <ExtensionPanel compact />
          </motion.div>

          {/* Browser window — horizontal bar, offset lower */}
          <div className="mt-6 sm:mt-12 md:mt-16 lg:mt-[4.5rem] md:mr-6 lg:mr-8 xl:mr-10 rounded-2xl bg-white shadow-panel ring-1 ring-slate-200 overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-100 bg-slate-50">
              <div className="flex gap-1.5 shrink-0">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="ml-3 flex-1 min-w-0 h-6 rounded-md bg-white border border-slate-200 text-[11px] text-slate-500 px-2 flex items-center gap-1.5 overflow-hidden">
                <span className="text-slate-400 hidden sm:inline">linkedin.com/jobs/</span>
                <span className="text-slate-700 truncate">senior-engineer-acme</span>
              </div>
            </div>

            {/* Fake LinkedIn job page — shorter so panel can sit inside the frame */}
            <div className="p-4 sm:p-5 sm:pr-28 md:pr-32 lg:pr-36 pb-16 md:pb-20">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center font-bold text-sm shrink-0">
                  A
                </div>
                <div className="min-w-0">
                  <div className="text-base font-semibold text-slate-900 truncate">
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="inline-block"
                    >
                      {roles[idx]}
                    </motion.span>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Remote · Full-time · Posted 2 days ago
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-[11px] font-medium bg-blue-50 text-primary rounded-md px-2 py-0.5">
                      Easy Apply
                    </span>
                    <span className="text-[11px] text-slate-500 inline-flex items-center gap-1">
                      <Bookmark className="h-3 w-3" /> Save
                    </span>
                    <span className="text-[11px] text-slate-500 inline-flex items-center gap-1">
                      <Share2 className="h-3 w-3" /> Share
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2 max-w-[55%]">
                <div className="h-2 rounded bg-slate-100 w-full" />
                <div className="h-2 rounded bg-slate-100 w-11/12" />
                <div className="h-2 rounded bg-slate-100 w-10/12" />
                <div className="h-2 rounded bg-slate-100 w-9/12" />
                <div className="h-2 rounded bg-slate-100 w-8/12" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
