import { Fragment } from "react";

/**
 * Keeps hyphenated words ("One-Cup") on one line so balanced titles never break at a hyphen.
 */
export function keepHyphenated(text: string) {
  return text.split(/(\S+-\S+)/).map((part, i) =>
    /\S-\S/.test(part) ? (
      <span key={i} style={{ whiteSpace: "nowrap" }}>
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
