const paths = {
  down: "M8 2.5v11m0 0L3.5 9M8 13.5 12.5 9",
  right: "M2.5 8h11m0 0L9 3.5M13.5 8 9 12.5",
  "up-right": "M4 12 12 4m0 0H5.5M12 4v6.5",
};

/** A single-stroke arrow drawn to match the wordmark's weight. */
export function Arrow({ direction, className }: { direction: keyof typeof paths; className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[direction]} />
    </svg>
  );
}
