// "use server";

export async function getData() {
  const res = await fetch(
    "https://q3rj22ezm0.execute-api.us-east-1.amazonaws.com/posts",
    { cache: "no-store" }
  );

  return res.json();
}

export async function createPost(formData: any) {
  const postData = {
    content: formData.get("content"),
  };

  const response = await fetch(
    "https://q3rj22ezm0.execute-api.us-east-1.amazonaws.com/posts",
    {
      method: "POST",
      body: JSON.stringify(postData),
    }
  );
  return response;
}

export async function deletePost(postID: number) {
  const response = await fetch(
    `https://q3rj22ezm0.execute-api.us-east-1.amazonaws.com/posts/${postID}`,
    {
      method: "DELETE",
    }
  );
  return response;
}
