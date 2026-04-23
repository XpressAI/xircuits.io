import React from "react";
import Link from "@docusaurus/Link";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code2,
  Rocket,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Button } from "../ui/button";
import BrowserMockup from "./BrowserMockup";
import { fadeUp, staggerContainer, viewportOnce } from "./motion";

type Audience = {
  id: string;
  label: string;
  icon: LucideIcon;
  headline: string;
  sub: string;
  bullets: string[];
  cta: { label: string; href: string };
  video: string;
  url: string;
};

const AUDIENCES: Audience[] = [
  {
    id: "developers",
    label: "Developers",
    icon: Code2,
    headline: "Write Python on a canvas.",
    sub: "Everything you can do in Python — on a canvas you can share.",
    bullets: [
      "Every workflow compiles to portable Python — no DSL, no lock-in",
      "Plug the JupyterLab tooling you already know straight in",
      "Collaborate by dragging and dropping — share flows, not glue code",
    ],
    cta: { label: "Dev guide", href: "/docs/category/developer-guide" },
    video: "/img/website/xircuits-for-developers-small.webm",
    url: "localhost:8888 / devflow.xircuits",
  },
  {
    id: "users",
    label: "Users",
    icon: Users,
    headline: "No code? No problem.",
    sub: "Prebuilt components for classification, LLMs, agents, data — snap them together.",
    bullets: [
      "Start from a template, swap in your data, hit run",
      "Tooltips on every port tell you what goes where",
      "From image classification to anomaly detection in a few clicks",
    ],
    cta: { label: "User guide", href: "/docs/category/tutorials" },
    video: "/img/website/xircuits-for-users-small.webm",
    url: "localhost:8888 / image-classifier.xircuits",
  },
  {
    id: "enterprise",
    label: "Enterprise",
    icon: Rocket,
    headline: "Deploy as a service.",
    sub: "Ready to ship? Turn workflows into real-world apps on the XpressAI Platform.",
    bullets: [
      "Deploy Xircuits as a service with AI agent templates you can customize",
      "Share projects seamlessly across your organization with collaboration tools",
      "An AI assistant to help you create workflows and explore available tools",
    ],
    cta: { label: "Go to Platform", href: "https://docs.xpress.ai/" },
    video: "/img/website/xircuits-for-enterprise-small.webm",
    url: "platform.xpress.ai / workspace",
  },
];

export default function AudienceTabs() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="tw-relative tw-py-24 md:tw-py-32">
        <div className="tw-mx-auto tw-max-w-6xl tw-px-6">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="tw-text-center tw-mb-12"
          >
            <m.div variants={fadeUp}>
              <span className="tw-inline-flex tw-items-center tw-gap-1.5 tw-rounded-full tw-border tw-border-border tw-bg-background tw-px-3 tw-py-1 tw-text-xs tw-font-mono tw-text-muted-foreground tw-mb-4">
                <Sparkles size={12} className="tw-text-[hsl(var(--brand-violet))]" />
                who it&apos;s for
              </span>
            </m.div>
            <m.h2
              variants={fadeUp}
              className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-tracking-tight"
              style={{ fontFamily: "var(--ifm-heading-font-family)" }}
            >
              Meet you where you are.
            </m.h2>
            <m.p
              variants={fadeUp}
              className="tw-mt-3 tw-text-lg tw-text-muted-foreground"
            >
              Pick your vibe — the tool bends to fit.
            </m.p>
          </m.div>

          <Tabs defaultValue="developers" className="tw-w-full">
            <div className="tw-flex tw-justify-center">
              <TabsList>
                {AUDIENCES.map((a) => {
                  const Icon = a.icon;
                  return (
                    <TabsTrigger key={a.id} value={a.id}>
                      <Icon size={14} /> {a.label}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {AUDIENCES.map((a) => (
              <TabsContent key={a.id} value={a.id}>
                <AnimatePresence mode="wait">
                  <m.div
                    key={a.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="tw-grid md:tw-grid-cols-2 tw-gap-12 tw-items-center tw-mt-8"
                  >
                    <div>
                      <h3
                        className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-tracking-tight"
                        style={{
                          fontFamily: "var(--ifm-heading-font-family)",
                        }}
                      >
                        {a.headline}
                      </h3>
                      <p className="tw-mt-3 tw-text-lg tw-text-muted-foreground">
                        {a.sub}
                      </p>
                      <ul className="tw-mt-6 tw-space-y-3 tw-p-0 tw-list-none">
                        {a.bullets.map((b) => (
                          <li
                            key={b}
                            className="tw-flex tw-items-start tw-gap-3 tw-text-foreground"
                          >
                            <span className="tw-mt-1 tw-flex tw-h-5 tw-w-5 tw-flex-none tw-items-center tw-justify-center tw-rounded-full tw-bg-[hsl(var(--brand-cyan))]/20 tw-text-[hsl(var(--brand-blue))]">
                              <Check size={12} strokeWidth={3} />
                            </span>
                            <span
                              className="tw-text-[15px]"
                              dangerouslySetInnerHTML={{ __html: b }}
                            />
                          </li>
                        ))}
                      </ul>
                      <div className="tw-mt-8">
                        <Button asChild variant="electric" size="lg">
                          <Link to={a.cta.href}>
                            {a.cta.label}{" "}
                            <ArrowRight size={16} className="tw-ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div>
                      <BrowserMockup url={a.url}>
                        <video
                          key={a.video}
                          src={a.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="tw-block tw-w-full"
                        />
                      </BrowserMockup>
                    </div>
                  </m.div>
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </LazyMotion>
  );
}
