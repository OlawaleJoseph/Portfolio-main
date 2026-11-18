import Link from "next/link";
import styles from "./Checkup.module.css";

/** "What we check" list, shared by the home-page teaser and /checkup. */
export function CheckupList({ items }: { items: string[] }) {
  return (
    <ol className={styles.list}>
      {items.map((item, i) => (
        <li key={item}>
          <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
          {item}
        </li>
      ))}
    </ol>
  );
}

export function CheckupTeaser({ items }: { items: string[] }) {
  return (
    <div className={styles.teaser}>
      <div className={styles.intro}>
        <p className="eyebrow">Free script-tag checkup</p>
        <h2 className="display">Find out which of your apps break on March 1, 2027.</h2>
        <p className={styles.lede}>
          Send us your store URL. We go through what your storefront loads and send back a short written report:
          what still relies on script tags, what each one costs you in speed, and what to do about it. It&apos;s free,
          and you don&apos;t need to get on a call.
        </p>
        <Link href="/checkup" className="btn">
          Get my free script-tag checkup
        </Link>
      </div>
      <div className={styles.checks}>
        <h3 className={styles.checksTitle}>What we check</h3>
        <CheckupList items={items} />
      </div>
    </div>
  );
}
