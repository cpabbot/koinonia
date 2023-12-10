"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import { getData } from "./service";

type PostItem = {
  postID: string;
  content: any;
};

const PostListing = ({ item }: { item: PostItem }) => {
  return <span>{item.content.S}</span>;
};

export default function PostsList() {
  const [data, setData] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();
  console.log("whatup");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result.Items);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {data.map((item) => (
        <PostListing key={item.postID} item={item} />
      ))}
    </div>
  );
}
