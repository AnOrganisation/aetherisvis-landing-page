import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="AetherisVis">
      <img src="/images/Logo_V1.svg" alt="AetherisVis Logo" width="40" height="auto" />
    </Link>
  );
}
