import { useId } from "react";

const N = "M11 9h6.5v28H11zM11 9h7.6L34 37h-7.6z";
const RIBBON = "M29.5 9H37v31.5l-3.75-3.6-3.75 3.6z";
const RIBBON_GAP = "M28.3 9h9.9v34.2l-4.95-4.75-4.95 4.75z";

type MarkProps = {
  size?: number;
  className?: string;
  /** "ink" for light backgrounds, "cream" for dark backgrounds. */
  tone?: "ink" | "cream";
};

/** The Nuvexa Picks monogram: an N whose right stem is a bookmark ribbon. */
export function Mark({ size = 32, className, tone = "ink" }: MarkProps) {
  const id = useId();
  const maskId = `nv-gap${id.replace(/:/g, "")}`;
  return (
    <svg
      className={className}
      width={(size * 30) / 36}
      height={size}
      viewBox="9 7 30 36"
      aria-hidden="true"
      focusable="false"
    >
      <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
        <rect width="48" height="48" fill="#fff" />
        <path fill="#000" d={RIBBON_GAP} />
      </mask>
      <path
        fill={tone === "ink" ? "var(--ink)" : "var(--cream)"}
        mask={`url(#${maskId})`}
        d={N}
      />
      <path fill="var(--brass)" d={RIBBON} />
    </svg>
  );
}

type WordmarkProps = { tone?: "ink" | "cream"; className?: string };

export function Wordmark({ tone = "ink", className }: WordmarkProps) {
  return (
    <span className={`wordmark wordmark--${tone} ${className ?? ""}`}>
      <Mark tone={tone} className="wordmark__mark" />
      <span className="wordmark__text">
        Nuvexa <em>Picks</em>
      </span>
    </span>
  );
}
