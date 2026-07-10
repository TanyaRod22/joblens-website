import { Zap, Target, MessageSquareQuote, Mail, FileEdit, HelpCircle } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: Zap,
    title: "Instant job analysis",
    desc: "Role requirements and technical skills extracted automatically.",
  },
  {
    icon: Target,
    title: "Resume fit score",
    desc: "See how well you match (0–100) with matched and missing skills.",
  },
  {
    icon: MessageSquareQuote,
    title: "Personalized talking points",
    desc: '"Why this role" and "Why this company" tailored to your background.',
  },
  {
    icon: Mail,
    title: "Cold email & cover letter drafts",
    desc: "One-click outreach copy based on the role and your profile.",
  },
  {
    icon: FileEdit,
    title: "Resume bullet improvements",
    desc: "AI suggests rewrites to better match the job.",
  },
  {
    icon: HelpCircle,
    title: "Questions to ask",
    desc: "Smart interview questions based on the actual posting.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">
            Features
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Everything you need before you hit apply
          </h2>
          <p className="mt-4 text-slate-600">
            Six focused tools that replace the tab-switching between job boards, ChatGPT, and Google
            Docs.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <div className="group rounded-2xl bg-white border border-slate-200 p-6 h-full shadow-soft hover:shadow-lift hover:-translate-y-1 hover:border-blue-200 transition-all duration-300">
                <div className="h-11 w-11 rounded-xl bg-blue-50 text-primary grid place-items-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
