import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" aria-label="Mavron Mechanical Group — home" className="brand-logo">
      <Image
        src="/brand/mavron-mark-white.svg"
        alt=""
        width={450}
        height={295}
        className="brand-logo-mark"
        priority
      />
      {!compact && (
        <Image
          src="/brand/mavron-wordmark-white.svg"
          alt="Mavron Mechanical Group"
          width={665}
          height={160}
          className="brand-logo-wordmark"
          priority
        />
      )}
    </Link>
  );
}
