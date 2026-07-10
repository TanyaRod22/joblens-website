import { motion } from "motion/react";
import { Search, X, ChevronUp, ChevronDown } from "lucide-react";

export function ExtensionPanel({ score = 75 }: { score?: number }) {
  const requirements = [
    "5+ years experience",
    "Full stack system design",
    "End-to-end feature development",
    "Data pipelines for HIPAA compliance",
    "Debugging and optimization",
    "Collaboration with cross-functional teams",
    "Ownership of ambiguous problems",
  ];

  const sections = [
    { label: "Technical Skills" },
    { label: "Why This Role" },
    { label: "Why This Company" },
  ];

  return (
    <div className="w-full max-w-[400px] rounded-2xl bg-white shadow-panel ring-1 ring-slate-200 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
        <div className="flex items-center gap-2 min-w-0">
          <div className="h-6 w-6 rounded-md bg-primary/10 grid place-items-center shrink-0">
            <Search className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
          </div>
          <span className="text-sm font-semibold text-slate-900 truncate">Joblens</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button className="text-[11px] font-medium text-slate-600 border border-slate-200 rounded-md px-2.5 py-1 hover:bg-slate-50">
            Rescan
          </button>
          <button className="text-slate-400 hover:text-slate-600" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-3 pt-3 grid grid-cols-2 gap-2">
        <button className="text-xs font-semibold text-primary bg-blue-50 rounded-md py-2">
          Scan
        </button>
        <button className="text-xs font-medium text-slate-500 rounded-md py-2 hover:text-slate-700">
          Profile
        </button>
      </div>

      {/* Resume fit card */}
      <div className="px-3 pt-3">
        <div className="rounded-xl bg-emerald-50/70 ring-1 ring-emerald-100 p-3 flex gap-3 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold text-emerald-700 tabular-nums leading-none pt-0.5"
          >
            {score}
          </motion.div>
          <div className="min-w-0">
            <div className="text-xs font-semibold text-slate-900">Resume fit</div>
            <p className="text-[11px] text-slate-600 leading-relaxed mt-0.5">
              The candidate has a solid skill set and relevant experience but falls short in years
              of experience and specific health product exposure.
            </p>
          </div>
        </div>
      </div>

      {/* Job card */}
      <div className="px-3 pt-2.5">
        <div className="rounded-xl ring-1 ring-slate-200 p-3 flex gap-3 items-start">
          <div className="h-8 w-8 rounded-lg bg-primary/10 grid place-items-center shrink-0">
            <Search className="h-4 w-4 text-primary" strokeWidth={2.5} />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-semibold text-slate-900 leading-tight">
              Full Stack Software Engineer, Health AI
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              OpenAI · San Francisco, California, United States
            </div>
            <div className="text-[11px] font-medium text-primary mt-1 hover:underline cursor-pointer">
              Personalized to your profile
            </div>
          </div>
        </div>
      </div>

      {/* Role Requirements (expanded) */}
      <div className="px-3 pt-2.5">
        <div className="rounded-xl ring-1 ring-slate-200 overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2.5">
            <span className="text-xs font-semibold text-slate-900">Role Requirements</span>
            <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
          </div>
          <ul className="px-4 pb-3 pt-0 space-y-1">
            {requirements.map((r, i) => (
              <motion.li
                key={r}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.05, duration: 0.25 }}
                className="text-[11px] text-slate-700 list-disc list-outside ml-3 leading-relaxed"
              >
                {r}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Collapsed sections */}
      <div className="px-3 pt-2 pb-3 space-y-2">
        {sections.map((s) => (
          <div
            key={s.label}
            className="rounded-xl ring-1 ring-slate-200 flex items-center justify-between px-3 py-2.5"
          >
            <span className="text-xs font-semibold text-slate-900">{s.label}</span>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
