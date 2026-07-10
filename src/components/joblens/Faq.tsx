import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Is Joblens free?",
    a: "Yes. Joblens is free to install and use. We may add optional pro features down the line.",
  },
  {
    q: "Which job sites are supported?",
    a: "LinkedIn, Greenhouse, Lever, Workday, Ashby, Indeed, and Notion career pages. More coming soon.",
  },
  {
    q: "Do I need to upload my resume?",
    a: "No — but you'll get much better results with it. Add your resume once and every scan is personalized.",
  },
  {
    q: "Is my data safe?",
    a: "Job text is sent to our secure backend for AI analysis. API keys never leave our servers, and we don't sell or share your data.",
  },
  {
    q: "Does it work on LinkedIn?",
    a: "Yes. Joblens works on any LinkedIn job posting the moment the panel opens.",
  },
  {
    q: "How is this different from ChatGPT?",
    a: "Joblens runs where you're already applying, reads the posting automatically, and outputs role-specific fit scores, outreach drafts, and resume tips — no prompting required.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">FAQ</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Frequently asked
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white overflow-hidden">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm sm:text-base font-medium text-slate-900">{f.q}</span>
                  <Plus
                    className={`h-4 w-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-primary" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
