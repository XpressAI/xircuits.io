import React from "react";
import { useReducedMotion } from "framer-motion";
import { useTypewriter } from "./hooks/useTypewriter";
import { cn } from "../../lib/utils";

type Props = {
  phrases: string[];
  className?: string;
};

export default function TypewriterTagline({ phrases, className }: Props) {
  const reduced = useReducedMotion();
  const text = useTypewriter({ phrases, disabled: !!reduced });

  return (
    <span className={cn("tw-inline-flex tw-items-center", className)}>
      <span className="tw-font-mono">{text || " "}</span>
      {!reduced && (
        <span
          aria-hidden
          className="tw-ml-1 tw-inline-block tw-h-[1.1em] tw-w-[2px] tw-translate-y-[3px] tw-bg-current tw-animate-cursor-blink"
        />
      )}
    </span>
  );
}
