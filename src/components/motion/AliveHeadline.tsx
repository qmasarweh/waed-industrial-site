import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../../lib/usePrefersReducedMotion";

/** Line-stagger entrance for the hero H1. */
export function AliveHeadline({
  lines,
  className = "",
}: {
  lines: readonly string[];
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const [live, setLive] = useState(false);

  useEffect(() => {
    if (reduced) {
      setLive(true);
      return;
    }
    const id = requestAnimationFrame(() => setLive(true));
    return () => cancelAnimationFrame(id);
  }, [reduced]);

  return (
    <h1 className={`alive-headline ${className}`.trim()} data-alive={live ? "true" : "false"}>
      {lines.map((line, i) => (
        <span key={line} className="alive-line-wrap">
          <span
            className="alive-line"
            style={{ transitionDelay: reduced ? "0ms" : `${80 + i * 150}ms` }}
          >
            {line}
          </span>
        </span>
      ))}
    </h1>
  );
}
