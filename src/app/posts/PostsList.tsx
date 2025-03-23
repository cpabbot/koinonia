"use client";

import { use, useEffect, useState } from "react";
import { createPost, deletePost, getData, getUsername, Post } from "./service";
import styles from "./PostList.module.css";

// type PostItem = {
//   postID: { S: string };
//   // content: { S: string };
//   // author: { S: string };
// };

export default function PostsList() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getData();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [refresh]);

  const PostListing = ({ post }: { post: Post }) => {
    return (
      <div className={styles.postListing}>
        <div className={styles.flexVertical}>
          <span>{post.message}</span>
          <span className={styles.author}>{post.author}</span>
        </div>
        <button className="button" onClick={() => handleDelete(post.id)}>
          delete
        </button>
      </div>
    );
  };

  const handleSubmit = async (formData: any) => {
    const username = getUsername();
    console.log(username);
    if(!username) throw new Error("No username found");
    createPost(formData, username).then(() => {
      setRefresh(!refresh);
    });
  };

  const handleDelete = (postID: string) => {
    deletePost(postID).then(() => {
      setRefresh(!refresh);
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.postsList}>
      <form action={handleSubmit} className={styles.form}>
        <input type="text" name="content" className={styles.input} />
        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </form>
      {data.map((post) => (
        <PostListing key={post.id} post={post} />
      ))}
    </div>
  );
}
