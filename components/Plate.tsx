/**
 * Abstract editorial "plates" used to illustrate each curated category.
 * They are deliberately non-literal: shapes and tones, not product photos.
 */

export type PlateKind = "home" | "everyday" | "gifts" | "style" | "beauty" | "tech";

const art: Record<PlateKind, React.ReactNode> = {
  home: (
    <>
      <rect width="120" height="160" fill="var(--sand)" />
      <path d="M30 160V70a30 30 0 0 1 60 0v90z" fill="var(--cream)" />
      <path d="M30 118h60" stroke="var(--stone-deep)" strokeWidth="1.2" />
      <circle cx="74" cy="62" r="9" fill="var(--brass)" />
    </>
  ),
  everyday: (
    <>
      <rect width="120" height="160" fill="var(--sage)" />
      <circle cx="60" cy="70" r="30" fill="var(--cream)" />
      <rect x="24" y="112" width="72" height="5" rx="2.5" fill="var(--ink-soft)" />
      <rect x="38" y="124" width="44" height="5" rx="2.5" fill="var(--ink-soft)" opacity=".45" />
    </>
  ),
  gifts: (
    <>
      <rect width="120" height="160" fill="var(--ink-soft)" />
      <rect x="28" y="52" width="64" height="64" rx="3" fill="none" stroke="var(--cream)" strokeOpacity=".55" strokeWidth="1.2" />
      <path d="M60 40v88M16 84h88" stroke="var(--brass)" strokeWidth="2" />
      <path d="M60 52c-8-14-22-12-20-2 2 8 20 2 20 2zm0 0c8-14 22-12 20-2-2 8-20 2-20 2z" fill="none" stroke="var(--brass)" strokeWidth="1.6" />
    </>
  ),
  style: (
    <>
      <rect width="120" height="160" fill="var(--stone)" />
      <path d="M60 34a8 8 0 1 1 8 8c-4 0-8 3-8 7v3" fill="none" stroke="var(--ink-soft)" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M60 52 18 82h84z" fill="none" stroke="var(--ink-soft)" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M28 82h64l-8 50H36z" fill="var(--clay)" />
    </>
  ),
  beauty: (
    <>
      <rect width="120" height="160" fill="var(--clay)" />
      <rect x="44" y="58" width="32" height="74" rx="14" fill="var(--cream)" />
      <rect x="52" y="38" width="16" height="22" rx="3" fill="var(--ink-soft)" />
      <circle cx="88" cy="118" r="12" fill="var(--sand)" opacity=".9" />
    </>
  ),
  tech: (
    <>
      <rect width="120" height="160" fill="var(--cream-deep)" />
      <rect x="30" y="40" width="60" height="84" rx="12" fill="var(--ink-soft)" />
      <circle cx="60" cy="82" r="14" fill="none" stroke="var(--brass)" strokeWidth="1.6" />
      <circle cx="60" cy="82" r="4" fill="var(--brass)" />
      <path d="M44 136h32" stroke="var(--stone-deep)" strokeWidth="1.2" />
    </>
  ),
};

export function Plate({ kind, className }: { kind: PlateKind; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 160"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      {art[kind]}
    </svg>
  );
}
