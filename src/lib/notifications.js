import { db } from "@/app/firebase"; // adjust to your firebase init file
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export async function hasNotified(userId, postId) {
  const q = query(
    collection(db, "notifications"),
    where("userId", "==", userId),
    where("postId", "==", postId)
  );

  const snapshot = await getDocs(q);
  return !snapshot.empty;
}

export async function recordNotification(userId, postId) {
  await addDoc(collection(db, "notifications"), {
    userId,
    postId,
    sentAt: serverTimestamp(),
  });
}
