"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor-hover]';

/** Hit-test limitato (~20 Hz): `elementFromPoint` ad ogni movimento è pesante. */
const HOVER_CHECK_MS = 48;

export function CustomCursor() {
  const reduced = usePrefersReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);

  /** Spring “snappy” su x/y: riduce jitter mantenendo latenza impercettibile (stiffness alta). */
  const sx = useSpring(cx, { stiffness: 920, damping: 52, mass: 0.14 });
  const sy = useSpring(cy, { stiffness: 920, damping: 52, mass: 0.14 });

  const ringTarget = useMotionValue(1);
  const ringScale = useSpring(ringTarget, {
    stiffness: 560,
    damping: 40,
    mass: 0.32,
  });

  const dotOpacity = useTransform(ringScale, [1, 3.2], [0.88, 0]);

  const lastHoverCheck = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setFinePointer(mq.matches);
    const fn = () => setFinePointer(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  useEffect(() => {
    if (!finePointer || reduced) return;

    document.documentElement.classList.add("immersive-cursor-active");

    const updateHover = (clientX: number, clientY: number) => {
      const el = document.elementFromPoint(clientX, clientY);
      const interactive = el?.closest(INTERACTIVE_SELECTOR);
      ringTarget.set(interactive ? 3.85 : 1);
    };

    const move = (e: MouseEvent) => {
      cx.set(e.clientX);
      cy.set(e.clientY);

      const now = performance.now();
      if (now - lastHoverCheck.current < HOVER_CHECK_MS) return;
      lastHoverCheck.current = now;
      updateHover(e.clientX, e.clientY);
    };

    const leave = () => {
      cx.set(-100);
      cy.set(-100);
      ringTarget.set(1);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("immersive-cursor-active");
    };
  }, [finePointer, reduced, cx, cy, ringTarget]);

  if (!finePointer || reduced) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[200] mix-blend-difference"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="h-3.5 w-3.5 rounded-full border border-white/90 bg-white/15 shadow-[0_0_24px_rgba(255,255,255,0.12)]"
          style={{ scale: ringScale }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[199]"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="h-1 w-1 rounded-full bg-gold-400"
          style={{ opacity: dotOpacity }}
        />
      </motion.div>
    </>
  );
}
