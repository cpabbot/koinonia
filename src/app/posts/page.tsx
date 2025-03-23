"use client";

import styles from "./page.module.css";
import PostsList from "./PostsList";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Posts() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  });

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <main className={styles.main}>
      {/* <Authenticator loginMechanisms={["username", "email"]}> */}
        <h1>Koinonia</h1>
        <div style={{ width: "100%" }}>
          <PostsList />
        </div>
        <button onClick={handleLogout}>Log out</button>
      {/* </Authenticator> */}
    </main>
  );
}

