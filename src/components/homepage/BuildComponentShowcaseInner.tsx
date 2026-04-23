import React, { useEffect, useMemo, useRef, useState } from "react";
import { XircuitsGraph, parsePythonComponent } from "@xpressai/xircuits-viewer-react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";

const EXAMPLES = [
  {
    filename: "hello_xircuits.py",
    starter: `@xai_component(color="blue")
class HelloXircuits(Component):
    """Greet a user by name."""

    name: InArg[str]

    greeting: OutArg[str]

    def execute(self, ctx) -> None:
        self.greeting.value = f"Hello, {self.name.value}!"
`,
  },
  {
    filename: "torch_classify.py",
    starter: `@xai_component(color="orange")
class TorchClassify(Component):
    """Run a PyTorch model on an image tensor."""

    model: InArg[any]
    image: InArg[any]
    top_k: InCompArg[int]

    predictions: OutArg[list]
    confidence: OutArg[float]

    def execute(self, ctx) -> None:
        import torch
        with torch.no_grad():
            logits = self.model.value(self.image.value)
            probs = torch.softmax(logits, dim=-1)
            self.predictions.value = probs.topk(self.top_k.value).indices.tolist()
            self.confidence.value = float(probs.max())
`,
  },
  {
    filename: "agent_step.py",
    starter: `@xai_component(color="purple")
class AgentStep(Component):
    """One step of a tool-using AI agent."""

    prompt: InArg[str]
    tools: InArg[list]
    model: InCompArg[str]

    response: OutArg[str]
    tool_calls: OutArg[list]

    body: BaseComponent

    def execute(self, ctx) -> None:
        result = ctx.llm.complete(
            model=self.model.value,
            prompt=self.prompt.value,
            tools=self.tools.value,
        )
        self.response.value = result.text
        self.tool_calls.value = result.tool_uses
`,
  },
];

const CARD_HEIGHT = 400;
const TAB_BAR_HEIGHT = 38;
const EDITOR_BG = "#1e1e2e";
const TAB_BAR_BG = "#16161f";
const BORDER = "rgba(255,255,255,0.08)";
const CARD_STYLE: React.CSSProperties = {
  border: `1px solid ${BORDER}`,
  borderRadius: 14,
  overflow: "hidden",
  boxShadow: "0 16px 48px -16px rgba(0,0,0,0.5)",
  background: EDITOR_BG,
  display: "flex",
  flexDirection: "column",
  height: CARD_HEIGHT,
};

function TrafficLights() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "0 12px", flexShrink: 0 }}>
      <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
      <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
      <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
    </div>
  );
}

function ChromeBar({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        height: TAB_BAR_HEIGHT,
        background: TAB_BAR_BG,
        borderBottom: `1px solid ${BORDER}`,
        flexShrink: 0,
      }}
    >
      <TrafficLights />
      <div style={{ width: 1, background: BORDER, margin: "8px 0" }} />
      {children}
    </div>
  );
}

export default function BuildComponentShowcaseInner() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [codes, setCodes] = useState(() => EXAMPLES.map((e) => e.starter));
  const [debounced, setDebounced] = useState(codes[0]);

  const handleTabClick = (i: number) => {
    setActiveIdx(i);
    setDebounced(codes[i]);
  };

  const handleCodeChange = (v: string) => {
    setCodes((prev) => prev.map((c, i) => (i === activeIdx ? v : c)));
  };

  useEffect(() => {
    const t = setTimeout(() => setDebounced(codes[activeIdx]), 150);
    return () => clearTimeout(t);
  }, [codes, activeIdx]);

  const parsed = useMemo(() => parsePythonComponent(debounced), [debounced]);
  const lastGoodRef = useRef(parsed.graph);
  if (parsed.graph) lastGoodRef.current = parsed.graph;

  const componentName = lastGoodRef.current?.nodes[0]?.name ?? "preview";

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>

      {/* ── Card 1: Editor ──────────────────────────────── */}
      <div style={CARD_STYLE}>
        <ChromeBar>
          {EXAMPLES.map((ex, i) => {
            const active = i === activeIdx;
            return (
              <button
                key={ex.filename}
                onClick={() => handleTabClick(i)}
                style={{
                  all: "unset",
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "0 14px",
                  cursor: "pointer",
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  color: active ? "#e0e0f0" : "rgba(255,255,255,0.38)",
                  background: active ? EDITOR_BG : "transparent",
                  borderBottom: `2px solid ${active ? "rgba(139,120,255,0.7)" : "transparent"}`,
                  borderRight: `1px solid ${BORDER}`,
                  transition: "color 120ms",
                }}
              >
                <span
                  style={{
                    width: 9, height: 9, borderRadius: 2, flexShrink: 0,
                    background: "linear-gradient(135deg, #3776ab 50%, #ffd343 50%)",
                  }}
                />
                {ex.filename}
              </button>
            );
          })}
        </ChromeBar>

        <div style={{ flex: 1, overflow: "hidden" }}>
          <CodeMirror
            key={activeIdx}
            value={codes[activeIdx]}
            onChange={handleCodeChange}
            height={`${CARD_HEIGHT - TAB_BAR_HEIGHT}px`}
            theme="dark"
            extensions={[python()]}
            basicSetup={{ lineNumbers: true, highlightActiveLine: true, foldGutter: false, autocompletion: false }}
            style={{ fontSize: 13 }}
          />
        </div>
      </div>

      {/* ── Card 2: Preview ─────────────────────────────── */}
      <div style={CARD_STYLE}>
        <ChromeBar>
          {/* Address-bar style showing the current component */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              padding: "0 12px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${BORDER}`,
                borderRadius: 6,
                padding: "3px 10px",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: 12,
                color: "rgba(255,255,255,0.5)",
                minWidth: 0,
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, opacity: 0.6 }}>
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <span style={{ color: "rgba(255,255,255,0.25)" }}>xircuits://</span>
              <span style={{ color: "rgba(255,255,255,0.75)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {componentName}
              </span>
            </div>
          </div>
        </ChromeBar>

        <div style={{ flex: 1, position: "relative" }}>
          {lastGoodRef.current && (
            <XircuitsGraph
              graph={lastGoodRef.current}
              width="100%"
              height="100%"
              theme="dark"
              fitView
              interactive
              showControls={false}
              showCanvasBackground
            />
          )}
        </div>
      </div>

    </div>
  );
}
