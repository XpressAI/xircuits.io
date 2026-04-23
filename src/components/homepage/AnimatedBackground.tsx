import React from "react";
import { cn } from "../../lib/utils";

type Props = {
  className?: string;
  variant?: "hero" | "cta";
};

export default function AnimatedBackground({
  className,
  variant = "hero",
}: Props) {
  return (
    <div
      className={cn(
        "tw-pointer-events-none tw-absolute tw-inset-0 tw-overflow-hidden",
        className
      )}
      aria-hidden
    >
      {variant === "hero" && (
        <div
          className="tw-absolute tw-inset-0"
          style={{
            backgroundImage: "url('/img/grid-pattern.svg')",
            backgroundSize: "384px 384px",
            backgroundRepeat: "repeat",
            maskImage:
              "linear-gradient(to right, black 0%, black 15%, transparent 35%, transparent 65%, black 85%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, black 15%, transparent 35%, transparent 65%, black 85%, black 100%)",
          }}
        />
      )}
      {variant === "cta" && (
        <div
          className="tw-absolute tw-inset-0 tw-opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 60% 80% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 80% at 50% 50%, black 30%, transparent 100%)",
          }}
        />
      )}
    </div>
  );
}
