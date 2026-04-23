import React, { useMemo, useState } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import {
  Brain,
  Bot,
  Monitor,
  Database,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "./motion";
import { cn } from "../../lib/utils";

type LogoShape = "icon" | "wordmark";

type Framework = {
  title: string;
  image: string;
  link: string;
  shape: LogoShape; // optical size hint — wordmarks fill width, icons fill height
};

type Category = {
  id: string;
  label: string;
  icon: LucideIcon;
  items: Framework[];
};

const CATEGORIES: Category[] = [
  {
    id: "ml",
    label: "ML & Data",
    icon: Brain,
    items: [
      { title: "TensorFlow", image: "/img/website/frameworks/tensorflow.svg", link: "https://github.com/XpressAI/xai-tensorflow-keras", shape: "icon" },
      { title: "PyTorch", image: "/img/website/frameworks/pytorch.svg", link: "https://github.com/XpressAI/xai-pytorch", shape: "icon" },
      { title: "scikit-learn", image: "/img/website/frameworks/scikit-learn.svg", link: "https://github.com/XpressAI/xai-sklearn", shape: "icon" },
      { title: "XGBoost", image: "/img/website/frameworks/xgboost.png", link: "https://github.com/XpressAI/xai-xgboost", shape: "wordmark" },
      { title: "Spark", image: "/img/website/frameworks/spark.svg", link: "https://github.com/XpressAI/xai-spark", shape: "icon" },
      { title: "PyCaret", image: "/img/website/frameworks/pycaret.png", link: "https://github.com/XpressAI/xai-pycaret", shape: "wordmark" },
    ],
  },
  {
    id: "agents",
    label: "AI Agents",
    icon: Bot,
    items: [
      { title: "OpenAI", image: "/img/website/frameworks/openai.svg", link: "https://github.com/XpressAI/xai-openai", shape: "wordmark" },
      { title: "Anthropic", image: "/img/website/frameworks/anthropic.svg", link: "https://github.com/XpressAI/xai-anthropic", shape: "wordmark" },
      { title: "Gemini", image: "/img/website/frameworks/gemini.svg", link: "https://github.com/XpressAI/xai-google-gemini", shape: "wordmark" },
      { title: "Hugging Face", image: "/img/website/frameworks/hugging-face.svg", link: "https://github.com/XpressAI/xai-hfagent", shape: "wordmark" },
      { title: "Stability AI", image: "/img/website/frameworks/stability-ai.svg", link: "https://github.com/XpressAI/xai-stability-ai", shape: "wordmark" },
      { title: "Vecto", image: "/img/website/frameworks/vecto.svg", link: "https://github.com/XpressAI/xai-vecto", shape: "wordmark" },
    ],
  },
  {
    id: "ui",
    label: "Frontend",
    icon: Monitor,
    items: [
      { title: "Streamlit", image: "/img/website/frameworks/streamlit.svg", link: "https://github.com/XpressAI/xai-streamlit", shape: "wordmark" },
      { title: "Gradio", image: "/img/website/frameworks/gradio.svg", link: "https://github.com/XpressAI/xai-gradio", shape: "wordmark" },
      { title: "Flask", image: "/img/website/frameworks/flask.svg", link: "https://github.com/XpressAI/xai-flask", shape: "icon" },
    ],
  },
  {
    id: "data",
    label: "Databases",
    icon: Database,
    items: [
      { title: "SQLite", image: "/img/website/frameworks/sqlite.svg", link: "https://github.com/XpressAI/xai-sqlite", shape: "wordmark" },
      { title: "MongoDB", image: "/img/website/frameworks/mongodb.svg", link: "https://github.com/XpressAI/xai-mongoDB", shape: "wordmark" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Comms",
    icon: Cloud,
    items: [
      { title: "AWS", image: "/img/website/frameworks/aws.svg", link: "https://github.com/XpressAI/xai-boto3", shape: "wordmark" },
      { title: "Google Cloud", image: "/img/website/frameworks/google-cloud.svg", link: "https://github.com/XpressAI/xircuits", shape: "wordmark" },
      { title: "Microsoft", image: "/img/website/frameworks/microsoft.svg", link: "https://github.com/XpressAI/xai-ms-graph", shape: "wordmark" },
      { title: "Slack", image: "/img/website/frameworks/slack.svg", link: "https://github.com/XpressAI/xai-slack", shape: "icon" },
      { title: "Discord", image: "/img/website/frameworks/discord.svg", link: "https://github.com/XpressAI/xai-discord", shape: "icon" },
      { title: "RabbitMQ", image: "/img/website/frameworks/rabbitmq.svg", link: "https://github.com/XpressAI/xai-rabbitmq", shape: "icon" },
      { title: "MQTT", image: "/img/website/frameworks/mqtt.png", link: "https://github.com/XpressAI/xai-mqtt", shape: "icon" },
    ],
  },
];

function Track({ items }: { items: Framework[] }) {
  // duplicate so the loop seams are invisible
  const doubled = useMemo(() => [...items, ...items, ...items], [items]);
  return (
    <div className="tw-relative tw-overflow-hidden">
      <div
        aria-hidden
        className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-left-0 tw-w-24 tw-z-10 tw-bg-gradient-to-r tw-from-background tw-to-transparent"
      />
      <div
        aria-hidden
        className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-w-24 tw-z-10 tw-bg-gradient-to-l tw-from-background tw-to-transparent"
      />
      <div
        className={cn(
          "tw-flex tw-gap-8 tw-py-4 tw-w-max tw-animate-marquee-slow",
          items.length <= 4 && "tw-animate-marquee-fast"
        )}
      >
        {doubled.map((f, i) => (
          <a
            key={`${f.title}-${i}`}
            href={f.link}
            target="_blank"
            rel="noopener noreferrer"
            title={f.title}
            aria-label={f.title}
            className="tw-group tw-flex tw-h-60 tw-w-72 tw-flex-shrink-0 tw-items-center tw-justify-center tw-rounded-2xl tw-border tw-border-border tw-bg-background tw-px-8 tw-py-8 tw-shadow-sm tw-transition-all hover:tw--translate-y-1 hover:tw-border-[hsl(var(--brand-cyan))]/40 hover:tw-shadow-lg hover:tw-shadow-[hsl(var(--brand-violet))]/10 tw-no-underline"
          >
            <img
              src={f.image}
              alt={f.title}
              loading="lazy"
              className={cn(
                "tw-object-contain tw-transition-transform group-hover:tw-scale-110",
                f.shape === "icon"
                  ? "tw-h-32 tw-w-auto tw-max-w-[80%]"
                  : "tw-h-auto tw-w-[75%] tw-max-h-24"
              )}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function FrameworksMarquee() {
  const [active, setActive] = useState("ml");
  const current = CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0];

  return (
    <LazyMotion features={domAnimation}>
      <section className="tw-relative tw-py-24 md:tw-py-32">
        <div className="tw-mx-auto tw-max-w-6xl tw-px-6">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="tw-text-center tw-mb-10"
          >
            <m.h2
              variants={fadeUp}
              className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-tracking-tight"
              style={{ fontFamily: "var(--ifm-heading-font-family)" }}
            >
              Plays nice with your stack.
            </m.h2>
            <m.p
              variants={fadeUp}
              className="tw-mt-3 tw-text-lg tw-text-muted-foreground"
            >
              Missing one? It&apos;s ~10 lines of Python to add your own.
            </m.p>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="tw-flex tw-justify-center tw-mb-10"
          >
            <div
              role="tablist"
              aria-label="Framework categories"
              className="tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-gap-x-8 tw-gap-y-3 tw-border-b tw-border-border tw-px-2"
            >
              {CATEGORIES.map((c) => {
                const Icon = c.icon;
                const selected = c.id === active;
                return (
                  <button
                    key={c.id}
                    role="tab"
                    type="button"
                    aria-selected={selected}
                    onClick={() => setActive(c.id)}
                    className={cn(
                      "tw-relative tw-group tw-inline-flex tw-items-center tw-gap-2 tw-pt-1 tw-pb-3 tw-text-sm tw-font-medium tw-transition-colors tw-bg-transparent tw-border-0 tw-cursor-pointer",
                      selected
                        ? "tw-text-foreground"
                        : "tw-text-muted-foreground hover:tw-text-foreground"
                    )}
                  >
                    <Icon
                      size={16}
                      className={cn(
                        "tw-transition-colors",
                        selected
                          ? "tw-text-[hsl(var(--brand-blue))]"
                          : "tw-text-muted-foreground group-hover:tw-text-foreground"
                      )}
                    />
                    <span>{c.label}</span>
                    <span
                      className={cn(
                        "tw-text-xs tw-font-mono tw-tabular-nums tw-rounded-full tw-px-1.5 tw-py-0.5 tw-transition-colors",
                        selected
                          ? "tw-bg-[hsl(var(--brand-blue))]/10 tw-text-[hsl(var(--brand-blue))]"
                          : "tw-bg-muted tw-text-muted-foreground"
                      )}
                    >
                      {c.items.length}
                    </span>
                    {selected && (
                      <m.span
                        layoutId="framework-tab-underline"
                        className="tw-absolute tw-left-0 tw-right-0 tw--bottom-px tw-h-[2px] tw-rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, hsl(var(--brand-violet)) 0%, hsl(var(--brand-blue)) 50%, hsl(var(--brand-cyan)) 100%)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </m.div>

          <AnimatePresence mode="wait">
            <m.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <Track items={current.items} />
            </m.div>
          </AnimatePresence>

          <p className="tw-mt-6 tw-text-center tw-text-sm tw-text-muted-foreground tw-font-mono">
            + more in{" "}
            <a
              href="/docs/component-library/"
              className="tw-text-[hsl(var(--brand-blue))] hover:tw-underline"
            >
              the component library
            </a>
          </p>
        </div>
      </section>
    </LazyMotion>
  );
}
