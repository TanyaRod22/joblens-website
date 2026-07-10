import { motion } from "motion/react";
import { FileText, User } from "lucide-react";
import { FitRing } from "./FitRing";
import { Reveal } from "./Reveal";

export function Personalization() {
  return (
    <section className="py-24 bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">
            Personalization
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Upload your resume once. Every scan gets smarter.
          </h2>
          <p className="mt-5 text-slate-600 leading-relaxed">
            Joblens keeps your background handy so every fit score, talking point, and draft is
            grounded in your actual experience, not a generic template.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="text-primary">✓</span> One-time setup, persistent across every scan
            </li>
            <li className="flex gap-2">
              <span className="text-primary">✓</span> Update anytime as your resume evolves
            </li>
            <li className="flex gap-2">
              <span className="text-primary">✓</span> Stored securely, never shared
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative rounded-2xl bg-white border border-slate-200 shadow-lift p-6 min-h-[340px]">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-primary grid place-items-center">
                <User className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Alex Morgan</div>
                <div className="text-xs text-slate-500">Senior Software Engineer · 7 yrs</div>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              {[
                "TypeScript · React · Node.js",
                "AWS · PostgreSQL · Redis",
                "Team lead · Systems design",
              ].map((row, i) => (
                <motion.div
                  key={row}
                  initial={{ opacity: 0, x: -10, width: "0%" }}
                  whileInView={{ opacity: 1, x: 0, width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                  className="flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-100 px-3 py-2 text-xs text-slate-700"
                >
                  <FileText className="h-3.5 w-3.5 text-slate-400" />
                  {row}
                </motion.div>
              ))}
            </div>

            {/* connector */}
            <svg
              className="absolute right-6 top-24 hidden sm:block"
              width="80"
              height="60"
              viewBox="0 0 80 60"
              fill="none"
            >
              <motion.path
                d="M 0 30 Q 40 30 70 30"
                stroke="#2563eb"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </svg>

            <div className="absolute -bottom-6 right-6 sm:right-10 rounded-2xl bg-white border border-slate-200 shadow-lift p-4 flex items-center gap-3">
              <FitRing target={78} size={72} />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                  From 52 → 78
                </div>
                <div className="text-sm font-semibold text-slate-900">Fit improved</div>
                <div className="text-xs text-slate-500">with your resume</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
