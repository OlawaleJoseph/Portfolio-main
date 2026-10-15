import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container section" style={{ minHeight: "70vh" }}>
      <p className="eyebrow">404</p>
      <h1 className="display">This page doesn&apos;t exist.</h1>
      <Link href="/" className="btn" style={{ marginTop: 32 }}>
        Back home
      </Link>
    </section>
  );
}
