/** Approved WAED icon mark — decorative SVG. */
export function BrandMark({ className = "", tone = "navy" }: { className?: string; tone?: "navy" | "white" | "steel" }) {
  const fill = tone === "white" ? "#f7f5f0" : tone === "steel" ? "#3e5c77" : "#1d2d44";
  return (
    <svg
      className={className}
      viewBox="0 0 80 92"
      width="80"
      height="92"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill={fill}
        d="M40 2c-2.2 10.2-7.9 19.4-17 24.1 9.1 4.7 14.8 13.9 17 24.1 2.2-10.2 8-19.4 17.1-24.1C47.9 21.4 42.2 12.2 40 2z"
      />
      <path
        fill={fill}
        opacity="0.72"
        d="M26.2 52.5c7.3-1.4 14.2-5.8 18.8-12.1-3.4 12.2-9.1 18.8-18.8 22.4 0 0-1.6-4.8 0-10.3zM53.8 52.5c-7.3-1.4-14.2-5.8-18.8-12.1 3.4 12.2 9.1 18.8 18.8 22.4 0 0 1.6-4.8 0-10.3z"
      />
      <path
        fill={fill}
        d="M12 78c8.5-4.8 18.2-7.2 28-7.2S59.5 73.2 68 78c-5.8 5.8-16 9.5-28 9.5S17.8 83.8 12 78z"
      />
    </svg>
  );
}
