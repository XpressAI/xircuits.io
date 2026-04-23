import React from "react";
import Link from "@docusaurus/Link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ArrowRight, Github, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import TypewriterTagline from "./TypewriterTagline";
import CopyableCommand from "./CopyableCommand";
import BrowserMockup from "./BrowserMockup";
import { fadeUp, staggerContainer } from "./motion";

const PHRASES = [
  "Build ML pipelines on a canvas.",
  "Chain LLMs and agents without the glue code.",
  "Turn any Python function into a draggable component.",
  "Export to .py. Run anywhere.",
];

export default function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="tw-relative tw-pt-8 tw-pb-24 md:tw-pt-12 md:tw-pb-32">
        <div className="tw-relative tw-mx-auto tw-max-w-6xl tw-px-6">
          <m.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="tw-flex tw-flex-col tw-items-center tw-text-center"
          >
            <m.div variants={fadeUp}>
              <Link
                to="https://github.com/XpressAI/xircuits"
                className="tw-no-underline hover:tw-no-underline"
              >
                <Badge
                  variant="outline"
                  className="tw-gap-2 tw-py-1.5 tw-pr-3 tw-pl-1.5"
                >
                  <span className="tw-inline-flex tw-items-center tw-gap-1.5 tw-rounded-full tw-bg-[hsl(var(--brand-violet))]/10 tw-px-2.5 tw-py-0.5 tw-text-[11px] tw-font-semibold tw-text-[hsl(var(--brand-violet))]">
                    <Star size={11} fill="currentColor" /> open source
                  </span>
                  <span className="tw-font-mono tw-text-xs">
                    Apache-2.0 · XpressAI/xircuits
                  </span>
                  <ArrowRight size={13} className="tw-opacity-60" />
                </Badge>
              </Link>
            </m.div>

            <m.h1
              variants={fadeUp}
              className="tw-mt-5 tw-text-5xl md:tw-text-7xl tw-font-bold tw-tracking-tight tw-leading-[1.05]"
              style={{ fontFamily: "var(--ifm-heading-font-family)" }}
            >
              <span>Python workflows,</span>{" "}
              <span
                className="tw-bg-clip-text tw-text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, hsl(var(--brand-violet)) 0%, hsl(var(--brand-blue)) 50%, hsl(var(--brand-cyan)) 100%)",
                }}
              >
                visually.
              </span>
            </m.h1>

            <m.p
              variants={fadeUp}
              className="tw-mt-5 tw-text-xl md:tw-text-3xl tw-text-muted-foreground tw-max-w-3xl tw-min-h-[3.5rem] tw-leading-snug"
            >
              <TypewriterTagline phrases={PHRASES} />
            </m.p>

            <m.div
              variants={fadeUp}
              className="tw-mt-8 tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-gap-3"
            >
              <Button asChild variant="electric" size="lg">
                <Link to="/docs/main/">
                  Get Started <ArrowRight size={16} className="tw-ml-1" />
                </Link>
              </Button>
              <Button asChild variant="electric" size="lg">
                <Link to="https://github.com/XpressAI/xircuits">
                  <Github size={16} className="tw-mr-2" /> GitHub
                </Link>
              </Button>
            </m.div>

            <m.div variants={fadeUp} className="tw-mt-5">
              <CopyableCommand command="pip install xircuits" size="md" />
            </m.div>

            <m.div
              variants={fadeUp}
              className="tw-mt-20 tw-w-full tw-max-w-5xl"
            >
              <BrowserMockup url="localhost:8888 / xircuits">
                <img
                  src="/img/docs/xircuits-frontpage.gif"
                  alt="Xircuits visual canvas in action"
                  className="tw-block tw-w-full"
                  loading="eager"
                />
              </BrowserMockup>
            </m.div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
