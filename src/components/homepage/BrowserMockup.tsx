import React from "react";
import { cn } from "../../lib/utils";

type Props = {
  children: React.ReactNode;
  url?: string;
  className?: string;
  glow?: boolean;
};

export default function BrowserMockup({
  children,
  url = "localhost:8888 / xircuits",
  className,
  glow = false,
}: Props) {
  return (
    <div
      className={cn(
        "tw-relative tw-rounded-xl tw-border tw-border-border tw-bg-[hsl(var(--code-bg))] tw-shadow-xl tw-overflow-hidden",
        className
      )}
    >
      {glow && (
        <div
          aria-hidden
          className="tw-pointer-events-none tw-absolute tw--inset-4 tw--z-10 tw-blur-2xl tw-opacity-20"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, hsl(var(--brand-violet) / 0.3), hsl(var(--brand-cyan) / 0.3), hsl(var(--brand-blue) / 0.3), hsl(var(--brand-violet) / 0.3))",
          }}
        />
      )}
      {/* chrome */}
      <div className="tw-flex tw-items-center tw-gap-2 tw-border-b tw-border-white/10 tw-bg-black/30 tw-px-3 tw-py-2.5">
        <span className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-[#ff5f57]" />
        <span className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-[#febc2e]" />
        <span className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-[#28c840]" />
        <div className="tw-mx-auto tw-flex tw-items-center tw-gap-1.5 tw-rounded-md tw-bg-white/5 tw-px-3 tw-py-0.5 tw-text-xs tw-font-mono tw-text-white/60">
          <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-[hsl(var(--brand-cyan))]" />
          {url}
        </div>
        <span className="tw-w-10" />
      </div>
      {/* body */}
      <div className="tw-relative tw-bg-black/40">{children}</div>
    </div>
  );
}
