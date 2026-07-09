import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { Reveal } from "./Reveal";

const rows = [
  { without: "Copy-paste into ChatGPT", with: "One-click scan on the job page" },
  { without: "Generic advice", with: "Personalized to your resume" },
  { without: "20+ minutes per role", with: "Under 30 seconds" },
  { without: "Switch between 5 tabs", with: "Stay in your flow" },
];

export function Compare() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">
            Why Joblens
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            The old way vs. the Joblens way
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
              Without Joblens
            </div>
            <ul className="space-y-3">
              {rows.map((r, i) => (
                <motion.li
                  key={r.without}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-slate-600"
                >
                  <span className="h-5 w-5 rounded-full bg-slate-200 grid place-items-center shrink-0 mt-0.5">
                    <X className="h-3 w-3 text-slate-500" strokeWidth={3} />
                  </span>
                  <span className="text-sm">{r.without}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-primary/25 bg-gradient-to-br from-blue-50/70 to-white p-6 shadow-lift">
            <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              With Joblens
            </div>
            <ul className="space-y-3">
              {rows.map((r, i) => (
                <motion.li
                  key={r.with}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-slate-800"
                >
                  <span className="h-5 w-5 rounded-full bg-primary grid place-items-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium">{r.with}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
