import { MousePointerClick, Sparkles, Rocket } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: MousePointerClick,
    title: "Browse a job posting",
    desc: "Open any role on LinkedIn, Greenhouse, Lever, and more.",
  },
  {
    icon: Sparkles,
    title: "Click Scan Job",
    desc: "Joblens reads the posting and analyzes it with AI.",
  },
  {
    icon: Rocket,
    title: "Get ready to apply",
    desc: "Get fit scores, talking points, resume tips, and outreach drafts in seconds.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">
            How it works
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Three clicks from job posting to interview-ready
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="relative rounded-2xl bg-white border border-slate-200 p-6 h-full shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-lg bg-primary text-white text-sm font-bold grid place-items-center shadow-lift">
                  {i + 1}
                </div>
                <div className="h-11 w-11 rounded-xl bg-blue-50 text-primary grid place-items-center">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
