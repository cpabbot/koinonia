import { db } from "@/app/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getMatchingUsersForPost(post) {
  const snapshot = await getDocs(collection(db, "users"));
  const users = [];

  snapshot.forEach((doc) => {
    const user = { id: doc.id, ...doc.data() };

    // Example filter logic — adjust to your schema
    if (user.filters?.categories?.includes(post.category)) {
      users.push(user);
    }
  });

  return users;
}
