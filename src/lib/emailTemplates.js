export function postNotificationTemplate(post) {
  return `
    <div style="font-family: sans-serif;">
      <h2>New post: ${post.title}</h2>
      <p>${post.summary}</p>
      <a href="https://yourdomain.com/posts/${post.id}">
        View Post
      </a>
    </div>
  `;
}
