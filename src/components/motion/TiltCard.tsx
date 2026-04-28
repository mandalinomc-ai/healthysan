"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useCallback, useRef } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

type Props = {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
};

export function TiltCard({ children, className = "", tiltAmount = 12 }: Props) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  /** Risposta più rapida = meno oscillazione su movimenti rapidi (migliore su 60 fps). */
  const smx = useSpring(mx, { stiffness: 380, damping: 44, mass: 0.45 });
  const smy = useSpring(my, { stiffness: 380, damping: 44, mass: 0.45 });

  const rotateX = useTransform(smy, [-0.5, 0.5], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(smx, [-0.5, 0.5], [-tiltAmount, tiltAmount]);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduced || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      mx.set(px);
      my.set(py);
    },
    [mx, my, reduced]
  );

  const handleLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`[perspective:1400px] ${className}`}>
      <motion.div
        className="h-full will-change-transform"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {children}
      </motion.div>
    </div>
  );
}
