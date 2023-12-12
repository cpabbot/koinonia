"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import { createPost, deletePost, getData } from "./service";
import styles from "./PostList.module.css";

type PostItem = {
  postID: any;
  content: any;
};

export default function PostsList() {
  const [data, setData] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    const fetchData = async () => {
      if (loading) {
        try {
          const result = await getData();
          setData(result.Items);
        } catch (error) {
          setError("Error fetching data");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [loading]);

  const PostListing = ({ item }: { item: PostItem }) => {
    return (
      <div className={styles.postListing}>
        <span>{item.content.S}</span>
        <button className="button" onClick={handleDelete}>
          delete
        </button>
      </div>
    );
  };

  const handleSubmit = (formData: any) => {
    createPost(formData);
    setLoading(true);
  };

  const handleDelete = (formData: any) => {
    // deletePost(formData);
    setLoading(true);
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
