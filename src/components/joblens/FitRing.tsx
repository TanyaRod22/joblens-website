import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function FitRing({
  target = 78,
  size = 140,
  stroke = 10,
  triggerOnView = true,
}: {
  target?: number;
  size?: number;
  stroke?: number;
  triggerOnView?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [start, setStart] = useState(!triggerOnView);
  useEffect(() => {
    if (inView) setStart(true);
  }, [inView]);

  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 18 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (start) mv.set(target);
  }, [start, target, mv]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const progress = useTransform(spring, (v) => c - (c * v) / 100);

  return (
    <div ref={ref} className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgb(226 232 240)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#fitGradient)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          style={{ strokeDashoffset: progress }}
        />
        <defs>
          <linearGradient id="fitGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center leading-none">
          <div className="font-bold text-slate-900 tabular-nums" style={{ fontSize: size * 0.28 }}>
            {display}
          </div>
          {size > 90 && (
            <div className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">Fit</div>
          )}
        </div>
      </div>
    </div>
  );
}
