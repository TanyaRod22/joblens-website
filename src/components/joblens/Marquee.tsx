const sites = ["LinkedIn", "Greenhouse", "Lever", "Workday", "Ashby", "Indeed", "Notion"];

export function Marquee() {
  const items = [...sites, ...sites];
  return (
    <section id="sites" className="py-16 border-y border-slate-200/70 bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-medium text-slate-500 mb-8">
          Works on the sites you already use
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-16 animate-marquee w-max">
            {items.map((s, i) => (
              <span
                key={i}
                className="text-2xl font-semibold text-slate-400 hover:text-primary transition-colors whitespace-nowrap tracking-tight"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
