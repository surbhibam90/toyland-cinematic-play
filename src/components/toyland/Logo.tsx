const LETTERS: { char: string; className: string }[] = [
  { char: "T", className: "text-coral" },
  { char: "O", className: "text-sun" },
  { char: "Y", className: "text-sky" },
  { char: "L", className: "text-leaf" },
  { char: "A", className: "text-sun" },
  { char: "N", className: "text-coral" },
  { char: "D", className: "text-lavender-deep" },
];

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex flex-col leading-none">
      <span
        className={`font-display font-extrabold tracking-tight ${compact ? "text-2xl" : "text-[1.75rem]"}`}
      >
        {LETTERS.map((l, i) => (
          <span key={i} className={l.className}>
            {l.char}
          </span>
        ))}
      </span>
      <span className="mt-1 whitespace-nowrap text-[0.45rem] font-bold tracking-[0.18em] sm:text-[0.5rem] sm:tracking-[0.22em] text-navy-foreground/70">
        PLAY. IMAGINE. DISCOVER.
      </span>
    </span>
  );
}
