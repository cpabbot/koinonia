// "use server";

import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase"

export interface Post {
  id: string;
  message: string;
  author: string;
  [key: string]: any; // Optional: To allow additional fields
}

export function getUsername() {
  const user = auth.currentUser;
  
  if(user) {
    return user?.email;
  }
  return null;
}

export async function getData(): Promise<Post[]> {
  const querySnapshot = await getDocs(collection(db, "posts"));
  const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Post[];
  console.log(posts);
  return posts;
}

export async function createPost(formData: any, username: string) {
  const postData = {
    content: formData.get("content"),
    username: username,
  };

  try {
    const docRef = await addDoc(collection(db, "posts"), {
      author: username,
      message: formData.get("content"),
    });
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function deletePost(postID: string) {
  const response = await deleteDoc(doc(db, "posts", postID.toString()));
  return response;
}
