"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import { createPost, deletePost, getData } from "./service";
import styles from "./PostList.module.css";

type PostItem = {
  postID: { S: number };
  content: { S: string };
};

export default function PostsList() {
  const [data, setData] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getData();
        setData(result.Items);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [refresh]);

  const PostListing = ({ item }: { item: PostItem }) => {
    return (
      <div className={styles.postListing}>
        <span>{item.content.S}</span>
        <button className="button" onClick={() => handleDelete(item.postID.S)}>
          delete
        </button>
      </div>
    );
  };

  const handleSubmit = (formData: any) => {
    createPost(formData).then(() => {
      setRefresh(!refresh);
    });
  };

  const handleDelete = (postID: number) => {
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
      {data.map((item) => (
        <PostListing key={item.postID.S} item={item} />
      ))}
    </div>
  );
}
