import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "tw-inline-flex tw-items-center tw-gap-1.5 tw-rounded-full tw-border tw-px-3 tw-py-1 tw-text-xs tw-font-medium tw-transition-colors",
  {
    variants: {
      variant: {
        default:
          "tw-border-transparent tw-bg-primary tw-text-primary-foreground",
        secondary:
          "tw-border-transparent tw-bg-secondary tw-text-secondary-foreground",
        outline:
          "tw-border-border tw-bg-background/60 tw-text-foreground tw-backdrop-blur",
        glow:
          "tw-border-[hsl(var(--brand-cyan))]/30 tw-bg-[hsl(var(--brand-blue))]/5 tw-text-[hsl(var(--brand-blue))] tw-shadow-[0_0_20px_-5px_hsl(var(--brand-cyan))]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
