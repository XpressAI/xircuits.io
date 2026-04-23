import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Sparkles } from "lucide-react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { Badge } from "../ui/badge";
import { fadeUp, staggerContainer, viewportOnce } from "./motion";

export default function BuildComponentShowcase() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="tw-relative tw-py-24 md:tw-py-32">
        <div className="tw-mx-auto tw-max-w-6xl tw-px-6">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="tw-flex tw-flex-col tw-items-center tw-text-center tw-mb-12"
          >
            <m.div variants={fadeUp}>
              <Badge variant="glow" className="tw-mb-4">
                <Sparkles size={12} /> built for hackers
              </Badge>
            </m.div>
            <m.h2
              variants={fadeUp}
              className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-tracking-tight"
              style={{ fontFamily: "var(--ifm-heading-font-family)" }}
            >
              Every component is just{" "}
              <span
                className="tw-bg-clip-text tw-text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, hsl(var(--brand-violet)) 0%, hsl(var(--brand-cyan)) 100%)",
                }}
              >
                Python
              </span>
              .
            </m.h2>
            <m.p
              variants={fadeUp}
              className="tw-mt-4 tw-text-lg tw-text-muted-foreground tw-max-w-xl"
            >
              Pick an example. Edit on the left, watch the node update on the right.
              Every component compiles to real, portable Python.
            </m.p>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <BrowserOnly fallback={<div style={{ height: 560 }} />}>
              {() => {
                const Inner = require("./BuildComponentShowcaseInner").default;
                return <Inner />;
              }}
            </BrowserOnly>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
