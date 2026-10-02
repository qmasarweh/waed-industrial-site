import { BrandMark } from "./BrandMark";

/** Thin section divider with brand mark. */
export function MarkRule({ className = "" }: { className?: string }) {
  return (
    <div className={`mark-rule ${className}`.trim()} aria-hidden="true">
      <span />
      <BrandMark className="mark-rule__icon" />
      <span />
    </div>
  );
}
