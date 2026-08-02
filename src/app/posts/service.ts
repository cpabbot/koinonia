// "use server";

import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase"

import { getMatchingUsersForPost } from "@/lib/matching";
import { hasNotified, recordNotification } from "@/lib/notifications";
import { sendEmail } from "@/lib/email";
import { postNotificationTemplate } from "@/lib/emailTemplates";

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
    notifyUsers(postData);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function deletePost(postID: string) {
  const response = await deleteDoc(doc(db, "posts", postID.toString()));
  return response;
}

async function notifyUsers(post: any) {
  console.log("Notifying users about new post:", post);
  // const users = await getMatchingUsersForPost(post);

   // testing
   let response = await sendEmail({
      to: 'cpabbot1@gmail.com',
      subject: `New post: ${post.title}`,
      html: postNotificationTemplate(post),
    });
    console.log("Email sent response:", response);

  // Notify each user
  // for (const user of users) {
  //   const alreadySent = await hasNotified(user.id, post.id);
  //   if (alreadySent) continue;

  //   await sendEmail({
  //     to: user.email,
  //     subject: `New post: ${post.title}`,
  //     html: postNotificationTemplate(post),
  //   });

  //   await recordNotification(user.id, post.id);
  // }

  return Response.json({ success: true, postId: post.id });
}
