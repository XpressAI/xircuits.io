import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../../lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "tw-inline-flex tw-h-11 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-border tw-bg-background/80 tw-p-1 tw-text-muted-foreground tw-backdrop-blur",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "tw-inline-flex tw-items-center tw-justify-center tw-gap-2 tw-whitespace-nowrap tw-rounded-full tw-px-4 tw-py-1.5 tw-text-sm tw-font-medium tw-text-muted-foreground tw-transition-all focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring disabled:tw-pointer-events-none disabled:tw-opacity-50 data-[state=active]:tw-bg-primary data-[state=active]:tw-text-primary-foreground data-[state=active]:tw-shadow-md data-[state=active]:tw-shadow-primary/30",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "tw-mt-6 focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
