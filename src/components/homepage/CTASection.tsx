import React from "react";
import Link from "@docusaurus/Link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "../ui/button";
import CopyableCommand from "./CopyableCommand";
import AnimatedBackground from "./AnimatedBackground";
import { fadeUp, staggerContainer, viewportOnce } from "./motion";

export default function CTASection() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="tw-relative tw-py-24 md:tw-py-32">
        <div className="tw-mx-auto tw-max-w-5xl tw-px-6">
          <div className="tw-relative tw-overflow-hidden tw-rounded-3xl tw-border tw-border-border tw-bg-[hsl(var(--code-bg))] tw-text-white">
            <AnimatedBackground variant="cta" />

            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="tw-relative tw-flex tw-flex-col tw-items-center tw-text-center tw-py-16 md:tw-py-24 tw-px-6"
            >
              <m.span
                variants={fadeUp}
                className="tw-inline-flex tw-items-center tw-gap-1.5 tw-rounded-full tw-border tw-border-white/20 tw-bg-white/5 tw-px-3 tw-py-1 tw-text-xs tw-font-mono tw-text-white/70"
              >
                <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-[hsl(var(--brand-cyan))] tw-animate-pulse" />
                ready when you are
              </m.span>

              <m.h2
                variants={fadeUp}
                className="tw-mt-5 tw-text-4xl md:tw-text-6xl tw-font-bold tw-tracking-tight tw-leading-[1.05] tw-text-white"
                style={{ fontFamily: "var(--ifm-heading-font-family)" }}
              >
                Ship your first workflow{" "}
                <span
                  className="tw-bg-clip-text tw-text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, hsl(var(--brand-cyan)) 0%, hsl(var(--brand-violet)) 100%)",
                  }}
                >
                  in 5 minutes.
                </span>
              </m.h2>

              <m.p
                variants={fadeUp}
                className="tw-mt-5 tw-text-lg tw-text-white/70 tw-max-w-xl"
              >
                One command. Zero config. Drag something into the canvas.
              </m.p>

              <m.div
                variants={fadeUp}
                className="tw-mt-10 tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-gap-4"
              >
                <CopyableCommand
                  command="pip install xircuits && xircuits"
                  size="lg"
                  className="tw-bg-black/50 tw-border-white/10 hover:tw-border-[hsl(var(--brand-cyan))]/60"
                />
              </m.div>

              <m.div
                variants={fadeUp}
                className="tw-mt-6 tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-gap-3"
              >
                <Button asChild variant="electric" size="lg">
                  <Link to="/docs/main/">
                    Read the docs <ArrowRight size={16} className="tw-ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="electric" size="lg">
                  <Link to="https://github.com/XpressAI/xircuits">
                    <Github size={16} className="tw-mr-2" /> Star on GitHub
                  </Link>
                </Button>
              </m.div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
