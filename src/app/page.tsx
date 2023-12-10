import Link from "next/link";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch(
    "https://q3rj22ezm0.execute-api.us-east-1.amazonaws.com/posts"
  );

  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log("data", data.Items);

  return (
    <main className={styles.main}>
      <h1>Koinonia</h1>
      <span>A full-stack web app built with NextJS and deployed with AWS.</span>
      <Link href="/posts" className="link">view posts</Link>
    </main>
  );
}
