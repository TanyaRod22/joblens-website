import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-primary grid place-items-center">
            <Search className="h-3.5 w-3.5 text-white" strokeWidth={2.75} />
          </div>
          <span className="font-semibold text-slate-900">Joblens</span>
          <span className="text-sm text-slate-400 ml-2">© 2026</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <Link to="/privacy" className="hover:text-slate-900 transition-colors">
            Privacy Policy
          </Link>
          <a href="mailto:hello@joblens.app" className="hover:text-slate-900 transition-colors">
            Contact
          </a>
          <a href="https://github.com" className="hover:text-slate-900 transition-colors">
            GitHub
          </a>
        </div>
      </div>
      <div className="pb-6 text-center text-xs text-slate-400 px-4">
        Not affiliated with Google, LinkedIn, Greenhouse, Lever, Workday, Ashby, Indeed, or Notion.
      </div>
    </footer>
  );
}
