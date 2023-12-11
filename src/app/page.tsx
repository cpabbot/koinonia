import Link from "next/link";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1>Koinonia</h1>
      <span>A full-stack web app built with NextJS and deployed with AWS.</span>
      <Link href="/posts" className="link">
        view posts
      </Link>
    </main>
  );
}
