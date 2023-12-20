"use client";

import styles from "./page.module.css";
import PostsList from "./PostsList";

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

export default function Posts() {
  return (
    <main className={styles.main}>
      <Authenticator loginMechanisms={["username", "email"]}>
        <h1>Koinonia</h1>
        <div style={{ width: "100%" }}>
          <PostsList />
        </div>
      </Authenticator>
    </main>
  );
}

