import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Chrome } from "lucide-react";

export function MobileCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-white/90 backdrop-blur border-t border-slate-200"
        >
          <a
            href="https://chromewebstore.google.com/detail/joblens/pjloihfekgljkeebmkkkefieadecpagm"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white font-medium py-3 shadow-lift"
          >
            <Chrome className="h-5 w-5" />
            Add to Chrome
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
