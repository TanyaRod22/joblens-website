import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Chrome, MessageSquareHeart, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitUninstallFeedback } from "@/lib/supabase";

const EXPERIENCE_OPTIONS = [
  { value: "1", label: "Poor" },
  { value: "2", label: "Fair" },
  { value: "3", label: "Okay" },
  { value: "4", label: "Good" },
  { value: "5", label: "Great" },
] as const;

const UNINSTALL_REASONS = [
  { id: "not-useful", label: "Didn't find it useful enough" },
  { id: "accuracy", label: "Fit scores / suggestions weren't accurate" },
  { id: "missing-features", label: "Missing features I needed" },
  { id: "too-complex", label: "Too complicated or confusing" },
  { id: "bugs", label: "Ran into bugs or technical issues" },
  { id: "privacy", label: "Privacy or data concerns" },
  { id: "alternative", label: "Switched to another tool" },
  { id: "not-job-hunting", label: "Not job hunting right now" },
  { id: "other", label: "Something else" },
] as const;

type FeedbackPayload = {
  experience: string;
  reasons: string[];
  comments: string;
};

export function Feedback() {
  const [experience, setExperience] = useState("");
  const [reasons, setReasons] = useState<string[]>([]);
  const [comments, setComments] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function toggleReason(id: string) {
    setReasons((prev) => (prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!experience) {
      setError("Please rate your overall experience.");
      return;
    }
    if (reasons.length === 0) {
      setError("Please select at least one reason for uninstalling.");
      return;
    }

    const payload: FeedbackPayload = {
      experience,
      reasons,
      comments: comments.trim(),
    };

    setSubmitting(true);
    try {
      await submitUninstallFeedback(payload);
      setSubmitted(true);
    } catch (err) {
      console.error("[Joblens uninstall feedback]", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/70 via-white to-white" />
        <div className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-blue-200/25 blur-3xl" />
        <div className="absolute top-48 -left-28 h-[360px] w-[360px] rounded-full bg-indigo-200/20 blur-3xl" />
      </div>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-lg px-4 sm:px-6 py-16 sm:py-24 text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Check className="h-7 w-7" strokeWidth={2.5} />
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Thank you for the feedback
            </h1>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Your notes help us make Joblens better for the next person who needs it.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-xl px-4 sm:px-6 py-12 sm:py-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-primary">
              <MessageSquareHeart className="h-3.5 w-3.5" />
              Uninstall feedback
            </div>

            <h1 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Sorry to see you go
            </h1>
            <p className="mt-3 text-slate-600 leading-relaxed">
              A minute of honest feedback goes a long way. Tell us what worked, what didn&apos;t, and
              what we should improve.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-9">
              {/* Experience */}
              <fieldset>
                <legend className="text-sm font-semibold text-slate-900">
                  How was your overall experience?
                </legend>
                <div className="mt-3 grid grid-cols-5 gap-2">
                  {EXPERIENCE_OPTIONS.map((opt) => {
                    const selected = experience === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setExperience(opt.value)}
                        aria-pressed={selected}
                        className={cn(
                          "flex flex-col items-center gap-1.5 rounded-xl border px-2 py-3 text-center transition-all",
                          selected
                            ? "border-primary bg-primary text-white shadow-lift"
                            : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/50",
                        )}
                      >
                        <span className="text-lg font-bold tabular-nums">{opt.value}</span>
                        <span
                          className={cn(
                            "text-[10px] sm:text-xs font-medium leading-tight",
                            selected ? "text-blue-100" : "text-slate-500",
                          )}
                        >
                          {opt.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* Reasons */}
              <fieldset>
                <legend className="text-sm font-semibold text-slate-900">
                  Why are you uninstalling?
                </legend>
                <p className="mt-1 text-sm text-slate-500">Select all that apply.</p>
                <ul className="mt-3 space-y-2">
                  {UNINSTALL_REASONS.map((reason) => {
                    const checked = reasons.includes(reason.id);
                    return (
                      <li key={reason.id}>
                        <label
                          className={cn(
                            "flex cursor-pointer items-center gap-3 rounded-xl border px-3.5 py-3 transition-all",
                            checked
                              ? "border-primary/40 bg-blue-50/80"
                              : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50/80",
                          )}
                        >
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={checked}
                            onChange={() => toggleReason(reason.id)}
                          />
                          <span
                            className={cn(
                              "grid h-4 w-4 shrink-0 place-content-center rounded-sm border shadow-sm transition-colors",
                              checked
                                ? "border-primary bg-primary text-white"
                                : "border-slate-300 bg-white",
                            )}
                            aria-hidden
                          >
                            {checked && <Check className="h-3 w-3" strokeWidth={3} />}
                          </span>
                          <span className="text-sm text-slate-800">{reason.label}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </fieldset>

              {/* Comments */}
              <div className="space-y-2">
                <Label htmlFor="feedback-comments" className="text-sm font-semibold text-slate-900">
                  What can we improve?
                </Label>
                <p className="text-sm text-slate-500">
                  Advice, missing features, bugs — anything you&apos;d like us to know.
                </p>
                <Textarea
                  id="feedback-comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Share any advice or comments…"
                  rows={5}
                  className="min-h-[120px] rounded-xl border-slate-200 bg-white px-3.5 py-3 text-sm shadow-soft resize-y"
                />
              </div>

              {error && (
                <p className="text-sm text-destructive" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white font-medium px-6 py-3 shadow-lift transition-all hover:scale-[1.02] disabled:opacity-60 disabled:pointer-events-none disabled:hover:scale-100"
              >
                <Send className="h-4 w-4" />
                {submitting ? "Sending…" : "Send feedback"}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
