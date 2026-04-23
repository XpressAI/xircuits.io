import React, { useEffect, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";

export type CodeLine = {
  content: React.ReactNode;
  /** plain-text length used to drive the typing animation */
  plainLength: number;
};

type Props = {
  filename?: string;
  lines: CodeLine[];
  typingSpeedMs?: number;
  className?: string;
};

/**
 * Typewriter reveal of pre-styled React nodes. We measure each line by its
 * plain-text length so we can reveal hidden chars with a CSS clip, giving
 * us highlighted typing without any string parsing.
 */
export default function CodeEditorPanel({
  filename = "hello_component.py",
  lines,
  typingSpeedMs = 28,
  className,
}: Props) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const [revealed, setRevealed] = useState(0); // running char count across all lines

  const totalChars = lines.reduce((acc, l) => acc + l.plainLength + 1, 0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setRevealed(totalChars);
      return;
    }
    let cancelled = false;
    let current = 0;
    const tick = () => {
      if (cancelled) return;
      current = Math.min(current + 1, totalChars);
      setRevealed(current);
      if (current < totalChars) {
        setTimeout(tick, typingSpeedMs);
      }
    };
    const timeout = setTimeout(tick, 400);
    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [inView, reduced, totalChars, typingSpeedMs]);

  // compute per-line how many chars of that line are revealed
  let running = 0;
  const lineReveals = lines.map((l) => {
    const start = running;
    const end = start + l.plainLength;
    running = end + 1;
    const lineRevealed = Math.max(0, Math.min(l.plainLength, revealed - start));
    return { ...l, lineRevealed };
  });

  const typingDone = revealed >= totalChars;
  const activeLineIndex = lineReveals.findIndex(
    (l) => l.lineRevealed > 0 && l.lineRevealed < l.plainLength
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "tw-rounded-xl tw-border tw-border-border tw-bg-[hsl(var(--code-bg))] tw-text-[hsl(var(--code-fg))] tw-shadow-2xl tw-overflow-hidden",
        className
      )}
    >
      <div className="tw-flex tw-items-center tw-gap-2 tw-border-b tw-border-white/10 tw-bg-black/30 tw-px-3 tw-py-2.5">
        <span className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-[#ff5f57]" />
        <span className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-[#febc2e]" />
        <span className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-[#28c840]" />
        <div className="tw-mx-auto tw-flex tw-items-center tw-gap-2 tw-rounded-md tw-bg-white/5 tw-px-3 tw-py-0.5 tw-text-xs tw-font-mono tw-text-white/60">
          <span className="tw-text-[hsl(var(--brand-cyan))]">py</span>
          {filename}
        </div>
        <span className="tw-w-10" />
      </div>
      <div className="tw-font-mono tw-text-sm tw-leading-6 tw-p-5 tw-pt-4 tw-overflow-x-auto">
        {lineReveals.map((line, idx) => {
          const isActive = idx === activeLineIndex;
          const pct =
            line.plainLength === 0
              ? line.lineRevealed > 0
                ? 100
                : 0
              : (line.lineRevealed / line.plainLength) * 100;
          return (
            <div
              key={idx}
              className="tw-flex tw-items-start tw-gap-4 tw-whitespace-pre"
            >
              <span className="tw-select-none tw-w-6 tw-text-right tw-text-white/30">
                {idx + 1}
              </span>
              <span className="tw-relative tw-flex-1">
                <span
                  style={{
                    clipPath: `inset(0 ${100 - pct}% 0 0)`,
                    WebkitClipPath: `inset(0 ${100 - pct}% 0 0)`,
                    display: "inline-block",
                    minHeight: "1.5em",
                  }}
                >
                  {line.content ?? " "}
                </span>
                {isActive && (
                  <span
                    aria-hidden
                    className="tw-inline-block tw-h-[1.1em] tw-w-[7px] tw-translate-y-[2px] tw-bg-[hsl(var(--brand-cyan))] tw-animate-cursor-blink"
                    style={{ verticalAlign: "middle" }}
                  />
                )}
                {typingDone && idx === lines.length - 1 && (
                  <span
                    aria-hidden
                    className="tw-inline-block tw-h-[1.1em] tw-w-[7px] tw-translate-y-[2px] tw-bg-[hsl(var(--brand-cyan))] tw-animate-cursor-blink tw-ml-1"
                    style={{ verticalAlign: "middle" }}
                  />
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

