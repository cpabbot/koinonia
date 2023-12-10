"use server";

export async function getData() {
  const res = await fetch(
    "https://q3rj22ezm0.execute-api.us-east-1.amazonaws.com/posts"
  );

  return res.json();
}
