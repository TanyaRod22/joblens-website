import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { CheckCircle2, Copy, Sparkles, Target, Mail, FileEdit, XCircle } from "lucide-react";
import { FitRing } from "./FitRing";
import { Reveal } from "./Reveal";

const tabs = [
  { id: "analysis", label: "Analysis", icon: Sparkles },
  { id: "fit", label: "Fit Score", icon: Target },
  { id: "outreach", label: "Outreach", icon: Mail },
  { id: "resume", label: "Resume tips", icon: FileEdit },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function Demo() {
  const [active, setActive] = useState<TabId>("analysis");
  const [copied, setCopied] = useState(false);

  const copy = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="demo" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">
            Live preview
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            See what Joblens generates
          </h2>
          <p className="mt-4 text-slate-600">
            A real sample for a Senior Software Engineer role at Acme Inc.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 rounded-2xl bg-white border border-slate-200 shadow-lift overflow-hidden">
            {/* Tab bar */}
            <div className="flex overflow-x-auto border-b border-slate-100 bg-slate-50/50 px-2">
              {tabs.map((t) => {
                const isActive = active === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={`relative flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                      isActive ? "text-primary" : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    <t.icon className="h-4 w-4" />
                    {t.label}
                    {isActive && (
                      <motion.span
                        layoutId="tab-underline"
                        className="absolute left-2 right-2 bottom-0 h-0.5 bg-primary rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="p-6 sm:p-8 min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  {active === "analysis" && <AnalysisTab />}
                  {active === "fit" && <FitTab />}
                  {active === "outreach" && <OutreachTab copy={copy} copied={copied} />}
                  {active === "resume" && <ResumeTab />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AnalysisTab() {
  const reqs = [
    "5+ years building production web applications",
    "Deep expertise in TypeScript and modern React",
    "Experience designing and shipping REST/GraphQL APIs",
    "Comfort operating services on AWS or GCP",
    "Track record leading cross-functional projects",
  ];
  const skills = [
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
    "PostgreSQL",
    "System design",
    "GraphQL",
    "Kubernetes",
  ];
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h4 className="text-sm font-semibold text-slate-900">Role requirements</h4>
        <ul className="mt-4 space-y-3">
          {reqs.map((r, i) => (
            <motion.li
              key={r}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className="flex gap-3 text-sm text-slate-700"
            >
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              {r}
            </motion.li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-slate-900">Technical skills to highlight</h4>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 + i * 0.05 }}
              className="rounded-lg bg-blue-50 text-primary text-xs font-medium px-2.5 py-1 ring-1 ring-blue-100"
            >
              {s}
            </motion.span>
          ))}
        </div>
        <div className="mt-6 rounded-xl bg-slate-50 border border-slate-100 p-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Why this role
          </div>
          <p className="mt-1.5 text-sm text-slate-700 leading-relaxed">
            The scope maps directly to what you led at your last two roles — greenfield React/TS
            work with real ownership over infrastructure decisions.
          </p>
        </div>
      </div>
    </div>
  );
}

function FitTab() {
  const [target, setTarget] = useState(78);
  const matched = [
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
    "PostgreSQL",
    "System design",
    "REST APIs",
  ];
  const missing = ["GraphQL", "Kubernetes"];
  return (
    <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
      <div className="flex flex-col items-center gap-3">
        <button
          onClick={() => setTarget(target === 78 ? 82 : 78)}
          title="Click to recalculate"
          className="focus:outline-none"
        >
          <FitRing key={target} target={target} size={180} triggerOnView={false} />
        </button>
        <div className="text-center">
          <div className="text-sm font-semibold text-slate-900">Strong match</div>
          <div className="text-xs text-slate-500">Click to recalculate</div>
        </div>
      </div>
      <div className="space-y-6 min-w-0">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            Matched skills ({matched.length})
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {matched.map((s) => (
              <span
                key={s}
                className="rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1 ring-1 ring-emerald-100"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <XCircle className="h-4 w-4 text-amber-500" />
            Missing skills ({missing.length})
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {missing.map((s) => (
              <span
                key={s}
                className="rounded-lg bg-amber-50 text-amber-700 text-xs font-medium px-2.5 py-1 ring-1 ring-amber-100"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Consider mentioning transferable experience or a related side project.
          </p>
        </div>
      </div>
    </div>
  );
}

function OutreachTab({ copy, copied }: { copy: (t: string) => void; copied: boolean }) {
  const email = `Hi Priya,

I came across the Senior Software Engineer role at Acme and it looks like an unusually strong fit for what I've been building over the last few years.

At Northwind I led the migration of our billing service to TypeScript on AWS, shaving 40% off p95 latency — the exact tradeoffs your posting hints at. I'd love 15 minutes to hear how the platform team is thinking about the next phase.

Would next Tuesday or Wednesday work?

Best,
Alex`;
  return (
    <div className="grid md:grid-cols-[1fr_1.4fr] gap-6">
      <div className="rounded-xl bg-slate-50 border border-slate-100 p-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Talking points
        </div>
        <ul className="mt-3 space-y-2.5 text-sm text-slate-700">
          <li className="flex gap-2">
            <span className="text-primary">•</span> Migration led at Northwind mirrors Acme's
            current infra push
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span> p95 latency wins prove the exact tradeoffs the
            JD hints at
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span> Cross-functional leadership experience matches
            team scope
          </li>
        </ul>
      </div>
      <div className="rounded-xl border border-slate-200 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 bg-slate-50">
          <div className="text-xs font-semibold text-slate-600">Cold email · draft</div>
          <button
            onClick={() => copy(email)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-hover transition-colors"
          >
            <Copy className="h-3.5 w-3.5" />
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <pre className="p-4 text-sm text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">
          {email}
        </pre>
      </div>
    </div>
  );
}

function ResumeTab() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-xl border border-slate-200 p-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Before</div>
        <p className="mt-3 text-sm text-slate-700 leading-relaxed">
          Worked on the frontend team to build new features and fix bugs across the product.
        </p>
      </div>
      <div className="rounded-xl border-2 border-primary/30 bg-blue-50/40 p-5 relative">
        <div className="absolute -top-2.5 left-4 bg-primary text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
          Suggested
        </div>
        <div className="text-xs font-semibold uppercase tracking-wider text-primary">After</div>
        <p className="mt-3 text-sm text-slate-800 leading-relaxed">
          Led the redesign of 4 core React/TypeScript surfaces used by 120K+ weekly users, shipping
          a componentized system that cut time-to-ship for new features by 35%.
        </p>
      </div>
      <div className="md:col-span-2 rounded-xl bg-slate-50 border border-slate-100 p-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Why the rewrite works
        </div>
        <p className="mt-2 text-sm text-slate-700 leading-relaxed">
          Anchored in quantifiable outcomes, name-drops the exact stack in the JD, and signals
          ownership — three patterns Acme's engineering hiring bar looks for.
        </p>
      </div>
    </div>
  );
}
