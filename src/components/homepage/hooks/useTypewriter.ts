import { useEffect, useRef, useState } from "react";

type Options = {
  phrases: string[];
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  holdMs?: number;
  disabled?: boolean;
};

export function useTypewriter({
  phrases,
  typingSpeedMs = 55,
  deletingSpeedMs = 30,
  holdMs = 1800,
  disabled = false,
}: Options) {
  const [text, setText] = useState(disabled ? phrases[0] : "");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">(
    "typing"
  );
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (disabled) return;

    const current = phrases[phraseIndex] ?? "";
    const clear = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    if (phase === "typing") {
      if (text.length < current.length) {
        timerRef.current = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, typingSpeedMs);
      } else {
        timerRef.current = setTimeout(() => setPhase("holding"), holdMs);
      }
    } else if (phase === "holding") {
      timerRef.current = setTimeout(() => setPhase("deleting"), 200);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timerRef.current = setTimeout(() => {
          setText(current.slice(0, text.length - 1));
        }, deletingSpeedMs);
      } else {
        setPhraseIndex((i) => (i + 1) % phrases.length);
        setPhase("typing");
      }
    }

    return clear;
  }, [text, phase, phraseIndex, phrases, typingSpeedMs, deletingSpeedMs, holdMs, disabled]);

  return text;
}
