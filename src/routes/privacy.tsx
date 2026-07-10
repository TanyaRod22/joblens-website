import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Joblens" },
      {
        name: "description",
        content: "How Joblens handles the job postings and resume data you share.",
      },
      { property: "og:title", content: "Privacy Policy — Joblens" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 h-16 flex items-center justify-between">
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
      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-16 prose prose-slate">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mt-2">Last updated: January 2026</p>

        <p className="mt-6 text-slate-700 leading-relaxed">
          This page is maintained by the Joblens team to answer common privacy questions about the
          Joblens Chrome extension. It describes the data we collect, why we collect it, and how we
          handle it.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-slate-900">What we collect</h2>
        <ul className="mt-3 space-y-2 text-slate-700">
          <li>The text of job postings you actively choose to scan by clicking "Scan Job".</li>
          <li>The resume content you upload to personalize your results.</li>
          <li>Basic usage events (e.g. scans completed) so we can improve the product.</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">How we use it</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Job text and resume content are sent to our secure backend for AI analysis. Third-party AI
          provider API keys never leave our servers. We do not sell your data or share it with
          advertisers.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">Retention</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          You can delete your uploaded resume from the extension at any time. Job scan history is
          retained only to support your own scan history view.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">Contact</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Questions? Email{" "}
          <a href="mailto:hello@joblens.app" className="text-primary underline">
            hello@joblens.app
          </a>
          .
        </p>
      </article>
    </div>
  );
}
