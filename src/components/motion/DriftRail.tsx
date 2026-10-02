import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "../../lib/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Romans-style alternating row drift — large type that slides on scroll.
 */
export function DriftRail({ items }: { items: readonly string[] }) {
  const root = useRef<HTMLUListElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = root.current;
    if (!el || reduced) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    const rows = el.querySelectorAll<HTMLElement>(".drift-rail__row");
    const ctx = gsap.context(() => {
      rows.forEach((row, i) => {
        const dir = i % 2 === 0 ? 1 : -1;
        gsap.fromTo(
          row,
          { xPercent: -6 * dir },
          {
            xPercent: 6 * dir,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.3,
            },
          },
        );
      });
    }, el);

    return () => ctx.revert();
  }, [items, reduced]);

  return (
    <ul className="drift-rail" ref={root} aria-label="Capabilities">
      {items.map((label, i) => (
        <li className="drift-rail__row" key={label}>
          <span className="drift-rail__index">{String(i + 1).padStart(2, "0")}</span>
          <span className="drift-rail__label">{label}</span>
        </li>
      ))}
    </ul>
  );
}
