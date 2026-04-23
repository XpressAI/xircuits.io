import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Terminal, Wrench, FileDown, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { fadeUp, staggerContainer, viewportOnce } from "./motion";
import { useMouseTilt } from "./hooks/useMouseTilt";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
};

const FEATURES: Feature[] = [
  {
    icon: Wrench,
    title: "Hackable",
    description:
      "Fork it. Extend it. Your components, your rules. Apache-2.0 on GitHub, PRs welcome.",
    accent: "hsl(var(--brand-violet))",
  },
  {
    icon: FileDown,
    title: "Portable",
    description:
      "Workflows compile to a plain .py file you own. No proprietary format, no lock-in, no surprises.",
    accent: "hsl(var(--brand-blue))",
  },
  {
    icon: Terminal,
    title: "Local-first",
    description:
      "Runs on your machine inside JupyterLab. BYO hardware. BYO secrets. BYO stack.",
    accent: "hsl(var(--brand-cyan))",
  },
];

function TiltCard({ feature }: { feature: Feature }) {
  const { ref, handleMouseMove, handleMouseLeave, rotateX, rotateY } =
    useMouseTilt({ max: 8 });
  const Icon = feature.icon;

  return (
    <m.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      variants={fadeUp}
      className="tw-relative tw-group"
    >
      {/* glow border on hover */}
      <div
        aria-hidden
        className="tw-pointer-events-none tw-absolute tw--inset-px tw-rounded-[13px] tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300 tw-blur-md"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${feature.accent} 0%, transparent 70%)`,
        }}
      />
      <Card
        className="tw-relative tw-h-full tw-bg-background/80 tw-backdrop-blur tw-transition-all tw-duration-300 group-hover:tw-border-transparent"
        style={{ transform: "translateZ(0)" }}
      >
        <CardContent className="tw-p-8">
          <div
            className="tw-mb-5 tw-inline-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-xl tw-text-white"
            style={{
              background: `linear-gradient(135deg, ${feature.accent}, hsl(var(--brand-blue)))`,
            }}
          >
            <Icon size={22} />
          </div>
          <h3
            className="tw-text-2xl tw-font-bold tw-mb-2 tw-tracking-tight"
            style={{ fontFamily: "var(--ifm-heading-font-family)" }}
          >
            {feature.title}
          </h3>
          <p className="tw-text-muted-foreground tw-leading-relaxed tw-m-0">
            {feature.description}
          </p>
        </CardContent>
      </Card>
    </m.div>
  );
}

export default function FeatureCards() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="tw-relative tw-py-24">
        <div className="tw-mx-auto tw-max-w-6xl tw-px-6">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="tw-grid md:tw-grid-cols-3 tw-gap-6"
          >
            {FEATURES.map((f) => (
              <TiltCard key={f.title} feature={f} />
            ))}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
