"use client";

import Link from "next/link";
import styles from "./page.module.css";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({
  Auth: {
    // Connects with KoinoniaUsers User Pool
    // Note that these identifiers should be moved to env
    Cognito: {
      userPoolClientId: "11bsgoodcjpe7qqpt9a6r83me9", //5h51v3emg4n1agf540qd6nrcqd",
      userPoolId: "us-east-1_KAWpB6wsg", //us-east-1_7wOEXZQxU",
    },
  },
});

export async function Home() {
  return (
    <Authenticator loginMechanisms={["username"]}>
      <main className={styles.main}>
        <h1>Koinonia</h1>
        <span>
          A full-stack web app built with NextJS and deployed with AWS.
        </span>
        <Link href="/posts" className="link">
          view posts
        </Link>
      </main>
    </Authenticator>
  );
}

export default Home;
