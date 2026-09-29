import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Mavron Protection Group — home"
      className="group flex items-center gap-3"
    >
      <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          className="h-9 w-9"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="mav-a" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#d1362f" />
              <stop offset="100%" stopColor="#7f1410" />
            </linearGradient>
            <linearGradient id="mav-b" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f2ab6b" />
              <stop offset="100%" stopColor="#c87137" />
            </linearGradient>
          </defs>
          <rect x="1" y="1" width="38" height="38" rx="3" fill="url(#mav-a)" />
          <rect
            x="1"
            y="1"
            width="38"
            height="38"
            rx="3"
            fill="none"
            stroke="url(#mav-b)"
            strokeWidth="1.5"
          />
          <path
            d="M9 29V11l5.6 0 5.4 10.2L25.4 11 31 11v18h-4.4V18.6L21.6 28h-3.2L13.4 18.6V29z"
            fill="url(#mav-b)"
          />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[0.95rem] font-bold tracking-tight text-steel-50">
            MAVRON
          </span>
          <span className="mt-0.5 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-steel-400 transition-colors group-hover:text-copper-300">
            Protection Group
          </span>
        </span>
      )}
    </Link>
  );
}
