import Link from "next/link";
import styles from "./page.module.css";
import PostsList from "./PostsList";
import { createPost } from "./service";
import {getIsAuthenticationFailure, getUser} from './auth';
import Auth, {signInWithRedirect} from '@aws-amplify/auth';

export default async function Posts() {
  getUser().then(user => {
    console.log('user', user);
    if (!user) {
        throw new Error('User not resolved');
    }
    return (
      <main className={styles.main}>
        <h1>Koinonia</h1>
        <div style={{ width: "100%" }}>
          <PostsList />
        </div>
      </main>
    );
    
}).catch(() => {
  console.log('error caught');
    // don't redirect to login page if there was authentication failure to prevent redirection loop
    // if (!getIsAuthenticationFailure())
        signInWithRedirect();
    // }
});
  
}
