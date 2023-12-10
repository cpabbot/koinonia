import Link from "next/link";
import styles from "./page.module.css";
import PostsList from "./PostsList";

export default async function Posts() {
  return (
    <main className={styles.main}>
      <h1>Koinonia</h1>
      <PostsList />
    </main>
  );
}
