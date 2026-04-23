import { useRef } from "react";
import {
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

type TiltOptions = {
  max?: number;
  scale?: number;
};

export function useMouseTilt({ max = 10, scale = 1.03 }: TiltOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [max, -max]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-max, max]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    ref,
    handleMouseMove,
    handleMouseLeave,
    rotateX: (reduced ? (0 as unknown) : rotateX) as MotionValue<number>,
    rotateY: (reduced ? (0 as unknown) : rotateY) as MotionValue<number>,
    scale: reduced ? 1 : scale,
  };
}
