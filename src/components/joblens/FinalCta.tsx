import { Chrome } from "lucide-react";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-blue-600 p-10 sm:p-14 text-center shadow-panel">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
            <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Your next interview starts here
            </h2>
            <p className="relative mt-4 text-blue-100 max-w-lg mx-auto">
              Install Joblens and get interview-ready on the next job posting you open.
            </p>
            <div className="relative mt-8 flex justify-center">
              <a
                href="https://chromewebstore.google.com/detail/joblens/pjloihfekgljkeebmkkkefieadecpagm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-primary font-semibold px-6 py-3.5 shadow-lift hover:scale-[1.03] transition-transform"
              >
                <Chrome className="h-5 w-5" />
                Add to Chrome
              </a>
            </div>
            <p className="relative mt-4 text-sm text-blue-100">
              Free · No account required · Works instantly
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
