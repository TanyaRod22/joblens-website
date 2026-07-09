import { motion } from "motion/react";
import { Search, User, Sparkles, CheckCircle2, Mail } from "lucide-react";
import { FitRing } from "./FitRing";

export function ExtensionPanel({ score = 78 }: { score?: number }) {
  return (
    <div className="w-full max-w-[400px] rounded-2xl bg-white shadow-panel ring-1 ring-slate-200 overflow-hidden">
      {/* Chrome-like top bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 bg-slate-50/60">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-primary grid place-items-center">
            <Search className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-sm font-semibold text-slate-900">Joblens</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-[11px] text-slate-500">Connected</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-4 pt-3 gap-1 border-b border-slate-100">
        {[
          { label: "Scan", icon: Sparkles, active: true },
          { label: "Profile", icon: User, active: false },
        ].map((t) => (
          <div
            key={t.label}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-t-md ${
              t.active
                ? "text-primary border-b-2 border-primary -mb-px"
                : "text-slate-500"
            }`}
          >
            <t.icon className="h-3.5 w-3.5" />
            {t.label}
          </div>
        ))}
      </div>

      {/* Job title */}
      <div className="px-4 pt-4">
        <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
          Analyzing
        </div>
        <div className="text-sm font-semibold text-slate-900 mt-0.5">
          Senior Software Engineer
        </div>
        <div className="text-xs text-slate-500">Acme Inc. · Remote</div>
      </div>

      {/* Fit score */}
      <div className="px-4 py-4 flex items-center gap-4">
        <FitRing target={score} size={72} />
        <div className="min-w-0">
          <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
            Fit score
          </div>
          <div className="text-sm font-semibold text-slate-900">Strong match</div>
          <div className="text-xs text-slate-500">7 skills matched · 2 missing</div>
        </div>
      </div>

      {/* Skills */}
      <div className="px-4 pb-3">
        <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-2">
          Key requirements
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { label: "TypeScript", match: true },
            { label: "React", match: true },
            { label: "Node.js", match: true },
            { label: "AWS", match: true },
            { label: "GraphQL", match: false },
            { label: "Kubernetes", match: false },
          ].map((s, i) => (
            <motion.span
              key={s.label}
              initial={{ opacity: 0, y: 6, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.07, duration: 0.25 }}
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium ${
                s.match
                  ? "bg-blue-50 text-primary ring-1 ring-blue-100"
                  : "bg-slate-100 text-slate-500 ring-1 ring-slate-200"
              }`}
            >
              {s.match && <CheckCircle2 className="h-3 w-3" />}
              {s.label}
            </motion.span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-4 pt-2">
        <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-medium py-2.5 transition-colors">
          <Mail className="h-4 w-4" />
          Generate cold email
        </button>
      </div>
    </div>
  );
}
