import * as React from "react";
import { cn } from "../../lib/utils";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = "horizontal", ...props }, ref) => (
    <div
      ref={ref}
      role="none"
      className={cn(
        "tw-shrink-0 tw-bg-border",
        orientation === "horizontal"
          ? "tw-h-px tw-w-full"
          : "tw-h-full tw-w-px",
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = "Separator";

export { Separator };
