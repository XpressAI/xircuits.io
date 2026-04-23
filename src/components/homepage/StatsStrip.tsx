import React, { useEffect, useRef, useState } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useInView,
  useMotionValue,
  animate,
  useReducedMotion,
} from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "./motion";
import { useGithubStats } from "./hooks/useGithubStats";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  live?: boolean;
};

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const reduced = useReducedMotion();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(to);
      return;
    }
    // re-trigger the tween if the target changes (e.g. live fetch resolves)
    const from = hasAnimated.current ? display : 0;
    mv.set(from);
    const controls = animate(mv, to, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    hasAnimated.current = true;
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, to, reduced]);

  return (
    <span ref={ref} className="tw-font-mono tw-tabular-nums">
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  const live = useGithubStats();

  // Live values from GitHub with honest fallbacks so the section never shows
  // 0 during load or if the API is down.
  const stats: Stat[] = [
    {
      value: live.stars ?? 100,
      suffix: "",
      label: "GitHub stars",
      live: live.stars !== null,
    },
    {
      value: live.contributors ?? 15,
      suffix: "",
      label: "contributors",
      live: live.contributors !== null,
    },
    {
      value: live.forks ?? 15,
      suffix: "",
      label: "forks",
      live: live.forks !== null,
    },
    {
      value: 100,
      suffix: "%",
      label: "Apache-2.0 · open source",
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section className="tw-relative tw-border-y tw-border-border tw-py-10">
        <div className="tw-mx-auto tw-max-w-6xl tw-px-6">
          <m.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-8 tw-list-none tw-p-0 tw-m-0"
          >
            {stats.map((stat) => (
              <m.li
                key={stat.label}
                variants={fadeUp}
                className="tw-flex tw-flex-col tw-items-center tw-text-center"
              >
                <span
                  className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-bg-clip-text tw-text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, hsl(var(--brand-violet)) 0%, hsl(var(--brand-blue)) 100%)",
                  }}
                >
                  <Counter to={stat.value} suffix={stat.suffix} />
                </span>
                <span className="tw-mt-1 tw-text-sm tw-text-muted-foreground tw-uppercase tw-tracking-wider tw-inline-flex tw-items-center tw-gap-1.5">
                  {stat.live && (
                    <span
                      aria-label="live from GitHub"
                      title="live from GitHub"
                      className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-[hsl(var(--brand-cyan))] tw-animate-pulse"
                    />
                  )}
                  {stat.label}
                </span>
              </m.li>
            ))}
          </m.ul>
        </div>
      </section>
    </LazyMotion>
  );
}
