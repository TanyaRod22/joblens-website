import { useEffect, useState } from "react";
import { Search, Menu, X } from "lucide-react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#sites", label: "Supported sites" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-white/75 border-b border-slate-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-primary grid place-items-center shadow-lift">
            <Search className="h-4 w-4 text-white" strokeWidth={2.75} />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Joblens
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://chromewebstore.google.com/detail/joblens/pjloihfekgljkeebmkkkefieadecpagm" target="_blank" rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-medium px-4 py-2 transition-all shadow-lift hover:scale-[1.02]"
          >
            Add to Chrome
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-slate-700"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700 py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://chromewebstore.google.com/detail/joblens/pjloihfekgljkeebmkkkefieadecpagm" target="_blank" rel="noopener noreferrer"
              className="sm:hidden mt-2 rounded-lg bg-primary text-white text-sm font-medium px-4 py-2.5 text-center"
            >
              Add to Chrome
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
