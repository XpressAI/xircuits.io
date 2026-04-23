import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "../../lib/utils";

type Props = {
  command: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

export default function CopyableCommand({
  command,
  className,
  size = "md",
}: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(command);
      }
    } catch {
      /* ignore */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const sizeClasses =
    size === "lg"
      ? "tw-text-base tw-px-5 tw-py-3.5"
      : size === "sm"
      ? "tw-text-xs tw-px-3 tw-py-2"
      : "tw-text-sm tw-px-4 tw-py-2.5";

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "tw-group tw-inline-flex tw-items-center tw-gap-3 tw-rounded-lg tw-border tw-border-border tw-bg-[hsl(var(--code-bg))] tw-text-[hsl(var(--code-fg))] tw-font-mono tw-transition-all tw-duration-200 hover:tw-border-[hsl(var(--brand-cyan))]/50 hover:tw-shadow-lg hover:tw-shadow-[hsl(var(--brand-cyan))]/20",
        sizeClasses,
        className
      )}
      aria-label={`Copy command: ${command}`}
    >
      <span className="tw-text-[hsl(var(--brand-cyan))] tw-select-none">$</span>
      <span className="tw-select-all">{command}</span>
      <span className="tw-ml-1 tw-flex tw-h-5 tw-w-5 tw-items-center tw-justify-center tw-text-[hsl(var(--code-fg))]/60 group-hover:tw-text-[hsl(var(--brand-cyan))]">
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </span>
    </button>
  );
}
