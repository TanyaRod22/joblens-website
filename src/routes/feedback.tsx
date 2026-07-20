import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Feedback } from "@/components/joblens/Feedback";

export const Route = createFileRoute("/feedback")({
  head: () => ({
    meta: [
      { title: "Feedback — Joblens" },
      {
        name: "description",
        content:
          "Share why you're uninstalling Joblens and how we can improve. Your feedback helps us build a better extension.",
      },
      { property: "og:title", content: "Feedback — Joblens" },
      { property: "og:url", content: "/feedback" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/feedback" }],
  }),
  component: FeedbackPage,
});

function FeedbackPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-slate-200/80 bg-white/70 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary grid place-items-center">
              <Search className="h-4 w-4 text-white" strokeWidth={2.75} />
            </div>
            <span className="font-bold text-slate-900">Joblens</span>
          </Link>
          <Link to="/" className="text-sm text-slate-600 hover:text-slate-900">
            ← Home
          </Link>
        </div>
      </header>
      <main>
        <Feedback />
      </main>
    </div>
  );
}
