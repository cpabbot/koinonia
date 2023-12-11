import Link from "next/link";
import styles from "./page.module.css";
import PostsList from "./PostsList";
import { createPost } from "./service";

export default async function Posts() {
  return (
    <main className={styles.main}>
      <h1>Koinonia</h1>
      <div style={{ width: "100%" }}>
        <PostsList />
      </div>
    </main>
  );
}
