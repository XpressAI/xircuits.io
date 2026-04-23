import React from "react";
import { m } from "framer-motion";
import { cn } from "../../lib/utils";

type Port = { name: string; type: string };

type Props = {
  title: string;
  inputs: Port[];
  outputs: Port[];
  className?: string;
};

/**
 * A non-interactive card that resembles a Xircuits node. Input ports on the
 * left, output ports on the right, title bar on top.
 */
export default function ComponentPreview({
  title,
  inputs,
  outputs,
  className,
}: Props) {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, rotate: -0.5 }}
      className={cn(
        "tw-relative tw-w-full tw-max-w-[320px] tw-rounded-2xl tw-border tw-border-border tw-bg-white tw-shadow-xl",
        className
      )}
    >
      {/* title bar */}
      <div
        className="tw-flex tw-items-center tw-gap-2 tw-rounded-t-2xl tw-px-4 tw-py-3 tw-text-white"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--brand-violet)) 0%, hsl(var(--brand-blue)) 100%)",
        }}
      >
        <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-white/70" />
        <span className="tw-font-mono tw-text-sm tw-font-semibold">
          {title}
        </span>
      </div>

      <div className="tw-grid tw-grid-cols-2 tw-gap-3 tw-p-4">
        <div className="tw-space-y-2">
          <div className="tw-text-[10px] tw-font-mono tw-uppercase tw-tracking-wider tw-text-muted-foreground">
            Inputs
          </div>
          {inputs.map((p, i) => (
            <PortRow key={i} side="in" port={p} delay={0.5 + i * 0.1} />
          ))}
        </div>
        <div className="tw-space-y-2 tw-text-right">
          <div className="tw-text-[10px] tw-font-mono tw-uppercase tw-tracking-wider tw-text-muted-foreground">
            Outputs
          </div>
          {outputs.map((p, i) => (
            <PortRow
              key={i}
              side="out"
              port={p}
              delay={0.7 + i * 0.1}
            />
          ))}
        </div>
      </div>

      <div className="tw-border-t tw-border-border tw-px-4 tw-py-2 tw-text-[10px] tw-font-mono tw-text-muted-foreground tw-flex tw-items-center tw-justify-between">
        <span>@xai_component</span>
        <span className="tw-flex tw-items-center tw-gap-1 tw-text-[hsl(var(--brand-cyan))]">
          <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-[hsl(var(--brand-cyan))] tw-animate-pulse" />
          live
        </span>
      </div>
    </m.div>
  );
}

function PortRow({
  side,
  port,
  delay,
}: {
  side: "in" | "out";
  port: Port;
  delay: number;
}) {
  return (
    <m.div
      initial={{ opacity: 0, x: side === "in" ? -8 : 8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, delay }}
      className={cn(
        "tw-relative tw-flex tw-items-center tw-gap-2 tw-rounded-md tw-border tw-border-border tw-bg-secondary/60 tw-px-2.5 tw-py-1.5 tw-text-xs tw-font-mono",
        side === "out" && "tw-flex-row-reverse"
      )}
    >
      <span
        className={cn(
          "tw-h-2.5 tw-w-2.5 tw-rounded-full tw-ring-2 tw-ring-offset-2 tw-ring-offset-white",
          side === "in"
            ? "tw-bg-[hsl(var(--brand-violet))] tw-ring-[hsl(var(--brand-violet))]/40 tw--ml-5"
            : "tw-bg-[hsl(var(--brand-cyan))] tw-ring-[hsl(var(--brand-cyan))]/40 tw--mr-5"
        )}
      />
      <span className="tw-truncate">{port.name}</span>
      <span className="tw-text-muted-foreground">:{port.type}</span>
    </m.div>
  );
}
