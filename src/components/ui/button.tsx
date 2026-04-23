import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "tw-inline-flex tw-items-center tw-justify-center tw-whitespace-nowrap tw-rounded-md tw-text-sm tw-font-medium tw-transition-all tw-duration-200 focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50 tw-no-underline hover:tw-no-underline",
  {
    variants: {
      variant: {
        default:
          "tw-bg-primary tw-text-primary-foreground hover:tw-bg-primary/90 hover:tw-shadow-lg hover:tw-shadow-primary/25 hover:tw--translate-y-0.5",
        electric: "btn-electric focus-visible:tw-ring-[hsl(var(--brand-cyan))]/50",
        destructive:
          "tw-bg-destructive tw-text-destructive-foreground hover:tw-bg-destructive/90",
        outline:
          "tw-border tw-border-border tw-bg-background hover:tw-bg-accent hover:tw-text-accent-foreground",
        secondary:
          "tw-bg-secondary tw-text-secondary-foreground hover:tw-bg-secondary/80",
        ghost: "hover:tw-bg-accent hover:tw-text-accent-foreground",
        link: "tw-text-primary tw-underline-offset-4 hover:tw-underline",
      },
      size: {
        default: "tw-h-10 tw-px-5 tw-py-2",
        sm: "tw-h-9 tw-rounded-md tw-px-3",
        lg: "tw-h-12 tw-rounded-md tw-px-8 tw-text-base",
        icon: "tw-h-10 tw-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
